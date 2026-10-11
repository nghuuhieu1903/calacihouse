# VietQR (NAPAS 247) bank-transfer QR codes — one bank account per house,
# configured in Quản Lý Tòa Nhà, rendered on each invoice with that
# invoice's own amount + transfer note already filled in, so a tenant
# just scans it in any Vietnamese banking app and confirms.
#
# The payload is the EMVCo merchant-presented QR format NAPAS adopted for
# VietQR (tag-length-value fields, CRC16 at the end). It's built and
# encoded entirely here — no call out to a third-party QR/VietQR service,
# so a tenant's bill amount never leaves this server, and it keeps working
# if some external image API goes down. The QR matrix itself comes from
# reportlab's own encoder (already a dependency for pdf_export.py).
import base64
import io
import re
import unicodedata
from functools import lru_cache
from xml.sax.saxutils import escape as xml_escape

from PIL import Image
from reportlab.graphics.barcode import qrencoder

NAPAS_GUID = 'A000000727'
SERVICE_TRANSFER_TO_ACCOUNT = 'QRIBFTTA'

# Banks print the transfer note as plain text and several reject or
# silently truncate anything past this, or anything outside A-Z/0-9/space
# (accents included).
MAX_NOTE_LENGTH = 50


def _tlv(tag, value):
    return f"{tag}{len(value):02d}{value}"


def _crc16_ccitt(data):
    crc = 0xFFFF
    for byte in data.encode('utf-8'):
        crc ^= byte << 8
        for _ in range(8):
            crc = ((crc << 1) ^ 0x1021) if crc & 0x8000 else (crc << 1)
            crc &= 0xFFFF
    return f"{crc:04X}"


def normalize_note(text):
    """'Phòng 101 – Tháng 10' -> 'PHONG 101 THANG 10'."""
    text = (text or '').replace('đ', 'd').replace('Đ', 'D')
    text = unicodedata.normalize('NFD', text)
    text = ''.join(c for c in text if unicodedata.category(c) != 'Mn')
    text = re.sub(r'[^A-Za-z0-9 ]+', ' ', text)
    text = re.sub(r'\s+', ' ', text).strip().upper()
    return text[:MAX_NOTE_LENGTH].strip()


def is_valid_bank_info(bank_info):
    bank_info = bank_info or {}
    return bool(re.fullmatch(r'\d{6}', bank_info.get('bin') or '')) and \
        bool(re.fullmatch(r'[A-Za-z0-9]{4,19}', bank_info.get('accountNo') or ''))


def build_payload(bank_bin, account_no, amount=0, note=''):
    """amount <= 0 gives a static QR (tenant types the amount themselves);
    otherwise a dynamic one with the amount locked in."""
    amount = int(round(float(amount or 0)))
    note = normalize_note(note)
    beneficiary = _tlv('00', bank_bin) + _tlv('01', account_no)
    merchant_account = _tlv('00', NAPAS_GUID) + _tlv('01', beneficiary) + _tlv('02', SERVICE_TRANSFER_TO_ACCOUNT)
    payload = (
        _tlv('00', '01')
        + _tlv('01', '12' if amount > 0 else '11')
        + _tlv('38', merchant_account)
        + _tlv('53', '704')
        + (_tlv('54', str(amount)) if amount > 0 else '')
        + _tlv('58', 'VN')
        + (_tlv('62', _tlv('08', note)) if note else '')
        + '6304'
    )
    return payload + _crc16_ccitt(payload)


# The logo badge covers this share of the code's width. Level H keeps
# ~30% of the codewords recoverable; a 22%-wide square (plus its white
# padding) blanks ~6-7% of the area, which leaves plenty of margin for a
# phone camera's own misreads.
LOGO_WIDTH_RATIO = 0.22


@lru_cache(maxsize=8)
def prepare_logo(raw):
    """Uploaded logo bytes -> small base64 PNG for embedding in the SVG.
    An uploaded logo can be a multi-MB photo; a ~1cm badge needs 160px at
    most. Returns None for anything PIL can't open (e.g. an SVG logo), so
    the QR still renders, just without the badge."""
    if not raw:
        return None
    try:
        img = Image.open(io.BytesIO(raw))
        img = img.convert('RGBA')
        img.thumbnail((160, 160))
        buf = io.BytesIO()
        img.save(buf, format='PNG', optimize=True)
        return base64.b64encode(buf.getvalue()).decode('ascii')
    except Exception:
        return None


def payload_to_svg(payload, logo_png_b64=None, caption='', quiet_zone=4):
    """One <path> for all dark modules — a few KB instead of the ~25KB a
    rect-per-module SVG (reportlab's own renderSVG) comes out to.

    logo_png_b64 puts a logo badge in the middle and caption a band of
    text under the code — together they mark the code as this property's
    own, so a tenant can tell at a glance it isn't a look-alike QR someone
    swapped onto a printed invoice."""
    level = qrencoder.QRErrorCorrectLevel.H if logo_png_b64 else qrencoder.QRErrorCorrectLevel.M
    qr = qrencoder.QRCode(None, level)
    qr.addData(payload)
    qr.make()
    n = qr.getModuleCount()
    size = n + quiet_zone * 2

    # Snapped to whole modules and kept the same parity as n, so the badge
    # sits exactly centered on the module grid.
    badge = max(5, int(n * LOGO_WIDTH_RATIO)) if logo_png_b64 else 0
    if badge and (n - badge) % 2:
        badge += 1
    badge_start = (n - badge) // 2

    def hidden_by_badge(r, c):
        return badge and badge_start <= r < badge_start + badge and badge_start <= c < badge_start + badge

    parts = []
    for r in range(n):
        c = 0
        while c < n:
            if qr.isDark(r, c) and not hidden_by_badge(r, c):
                start = c
                while c < n and qr.isDark(r, c) and not hidden_by_badge(r, c):
                    c += 1
                parts.append(f"M{start + quiet_zone} {r + quiet_zone}h{c - start}v1h-{c - start}z")
            else:
                c += 1

    caption = (caption or '').strip()
    caption_height = 6 if caption else 0  # 5 for the band + 1 bottom margin
    height = size + caption_height
    svg = [
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size} {height}" shape-rendering="crispEdges">',
        f'<rect width="{size}" height="{height}" fill="#fff"/>',
        f'<path fill="#000" d="{"".join(parts)}"/>',
    ]
    if badge:
        x = badge_start + quiet_zone
        svg.append(
            f'<rect x="{x}" y="{x}" width="{badge}" height="{badge}" rx="1.2" fill="#fff" '
            f'stroke="#e5e9f0" stroke-width="0.25" shape-rendering="geometricPrecision"/>'
            f'<image x="{x + 0.6}" y="{x + 0.6}" width="{badge - 1.2}" height="{badge - 1.2}" '
            f'preserveAspectRatio="xMidYMid meet" href="data:image/png;base64,{logo_png_b64}"/>'
        )
    if caption:
        # Starts below the quiet zone, not inside it — scanners need that
        # white margin intact. Long names shrink to fit instead of
        # running off the edge.
        fit = f' textLength="{n - 3}" lengthAdjust="spacingAndGlyphs"' if len(caption) > n * 0.55 else ''
        svg.append(
            f'<rect x="{quiet_zone}" y="{size}" width="{n}" height="{caption_height - 1}" rx="1.2" fill="#0194f3"/>'
            f'<text x="{size / 2}" y="{size + (caption_height - 1) / 2}" text-anchor="middle" dominant-baseline="central" '
            f'font-family="-apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif" font-size="2.6" font-weight="700" '
            f'fill="#fff" shape-rendering="geometricPrecision"{fit}>{xml_escape(caption)}</text>'
        )
    svg.append('</svg>')
    return ''.join(svg)
