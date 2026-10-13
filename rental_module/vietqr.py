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


def normalize_logo_upload(raw):
    """An uploaded logo (any size/format PIL reads) -> a 256px PNG data
    URL, which is all a ~1cm badge ever needs — keeps what's stored per
    house small. None if it isn't a readable image."""
    try:
        img = Image.open(io.BytesIO(raw))
        img = img.convert('RGBA')
        img.thumbnail((256, 256))
        buf = io.BytesIO()
        img.save(buf, format='PNG', optimize=True)
        return 'data:image/png;base64,' + base64.b64encode(buf.getvalue()).decode('ascii')
    except Exception:
        return None


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


DEFAULT_ACCENT = '#0194f3'
DEFAULT_QR_COLOR = '#0b1f33'
DOT_STYLES = ('rounded', 'dots', 'square')

# Bank names for the payment card (the card is drawn here, server-side).
# Also shipped to app.js through /api/data so the two never drift apart.
# BIN = the bank's NAPAS id, what VietQR actually routes on.
VIETQR_BANKS = [
    ('970436', 'Vietcombank'), ('970415', 'VietinBank'), ('970418', 'BIDV'),
    ('970405', 'Agribank'), ('970407', 'Techcombank'), ('970422', 'MB Bank'),
    ('970416', 'ACB'), ('970432', 'VPBank'), ('970423', 'TPBank'),
    ('970403', 'Sacombank'), ('970437', 'HDBank'), ('970441', 'VIB'),
    ('970443', 'SHB'), ('970431', 'Eximbank'), ('970426', 'MSB'),
    ('970448', 'OCB'), ('970440', 'SeABank'), ('970449', 'LPBank'),
    ('970428', 'Nam A Bank'), ('970409', 'Bac A Bank'), ('970425', 'ABBANK'),
    ('970452', 'KienlongBank'), ('970427', 'VietABank'), ('970412', 'PVcomBank'),
    ('970438', 'BaoViet Bank'), ('970419', 'NCB'), ('970400', 'Saigonbank'),
    ('970430', 'PGBank'), ('970433', 'VietBank'), ('970424', 'Shinhan Bank'),
    ('970457', 'Woori Bank'), ('546034', 'CAKE by VPBank'), ('546035', 'Ubank by VPBank'),
]
_BANK_NAMES = dict(VIETQR_BANKS)

FONT_STACK = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"


def bank_name(bank_bin):
    return _BANK_NAMES.get(bank_bin, bank_bin)


def is_valid_color(value):
    return bool(re.fullmatch(r'#[0-9A-Fa-f]{6}', value or ''))


def _gray(hex_color):
    r, g, b = (int(hex_color[i:i + 2], 16) for i in (1, 3, 5))
    return 0.299 * r + 0.587 * g + 0.114 * b


def is_scannable_qr_color(value):
    """Phone scanners binarize the image; modules much lighter than this
    blend into the white background on a dim screen or a cheap print."""
    return is_valid_color(value) and _gray(value) < 110


def _n(v):
    return f"{v:.3f}".rstrip('0').rstrip('.')


def _smooth_module(x, y, up, right, down, left, r=.5):
    """One module with each corner rounded only where it's an outside
    corner (neither neighbour on that side is dark) — touching modules
    join into smooth shapes instead of reading as separate dots."""
    tl = 0 if (up or left) else r
    tr = 0 if (up or right) else r
    br = 0 if (down or right) else r
    bl = 0 if (down or left) else r
    d = f"M{_n(x + tl)} {y}H{_n(x + 1 - tr)}"
    if tr:
        d += f"a{r} {r} 0 0 1 {r} {r}"
    d += f"V{_n(y + 1 - br)}"
    if br:
        d += f"a{r} {r} 0 0 1 -{r} {r}"
    d += f"H{_n(x + bl)}"
    if bl:
        d += f"a{r} {r} 0 0 1 -{r} -{r}"
    d += f"V{_n(y + tl)}"
    if tl:
        d += f"a{r} {r} 0 0 1 {r} -{r}"
    return d + "z"


def _qr_body(payload, logo_png_b64, dot_style, qr_color, accent, quiet_zone):
    """The code itself, in module units: returns (size, svg elements).

    The three finder patterns are drawn separately from the data modules
    so they can be rounded and take the accent colour — what makes a code
    read as "designed" rather than a raw grid. Data modules keep a dark
    colour; the accent is only used on finders when it's dark enough for
    a scanner to still lock onto them."""
    dot_style = dot_style if dot_style in DOT_STYLES else 'rounded'
    qr_color = qr_color if is_scannable_qr_color(qr_color) else DEFAULT_QR_COLOR
    accent = accent if is_valid_color(accent) else DEFAULT_ACCENT
    finder_color = accent if _gray(accent) < 150 else qr_color

    level = qrencoder.QRErrorCorrectLevel.H if logo_png_b64 else qrencoder.QRErrorCorrectLevel.M
    qr = qrencoder.QRCode(None, level)
    qr.addData(payload)
    qr.make()
    n = qr.getModuleCount()
    size = n + quiet_zone * 2
    q = quiet_zone

    # Snapped to whole modules and kept the same parity as n, so the badge
    # sits exactly centered on the module grid.
    badge = max(5, int(n * LOGO_WIDTH_RATIO)) if logo_png_b64 else 0
    if badge and (n - badge) % 2:
        badge += 1
    badge_start = (n - badge) // 2

    finders = [(0, 0), (0, n - 7), (n - 7, 0)]

    def skip(r, c):
        if any(fr <= r < fr + 7 and fc <= c < fc + 7 for fr, fc in finders):
            return True
        return badge and badge_start <= r < badge_start + badge and badge_start <= c < badge_start + badge

    def dark(r, c):
        return 0 <= r < n and 0 <= c < n and qr.isDark(r, c) and not skip(r, c)

    parts = []
    if dot_style == 'square':
        # Merged horizontal runs — a few KB instead of one shape per module.
        for r in range(n):
            c = 0
            while c < n:
                if qr.isDark(r, c) and not skip(r, c):
                    start = c
                    while c < n and qr.isDark(r, c) and not skip(r, c):
                        c += 1
                    parts.append(f"M{start + q} {r + q}h{c - start}v1h-{c - start}z")
                else:
                    c += 1
    else:
        for r in range(n):
            for c in range(n):
                if qr.isDark(r, c) and not skip(r, c):
                    x, y = c + q, r + q
                    if dot_style == 'dots':
                        parts.append(f"M{_n(x + .06)} {_n(y + .5)}a.44 .44 0 1 0 .88 0a.44 .44 0 1 0-.88 0z")
                    else:
                        parts.append(_smooth_module(x, y, dark(r - 1, c), dark(r, c + 1), dark(r + 1, c), dark(r, c - 1)))

    # Finder patterns stay square-cornered for every style: rounded finder
    # corners were measured to stop OpenCV's classic detector from locking
    # on (any radius, any colour) even though ZXing still read them — and
    # bank apps don't all use the same scanner. The rounding/dots live in
    # the data modules instead, which no detector depends on the shape of.
    finder_paths = []
    for fr, fc in finders:
        x, y = fc + q, fr + q
        finder_paths.append(f"M{x} {y}h7v7h-7zM{x + 1} {y + 1}v5h5v-5z")
        finder_paths.append(f"M{x + 2} {y + 2}h3v3h-3z")

    els = [
        f'<path fill="{qr_color}" d="{"".join(parts)}"/>',
        f'<path fill="{finder_color}" fill-rule="evenodd" d="{"".join(finder_paths)}"/>',
    ]
    if badge:
        x = badge_start + q
        pad = 0.7
        els.append(
            f'<defs><clipPath id="qr-logo-clip"><rect x="{_n(x + pad)}" y="{_n(x + pad)}" width="{_n(badge - 2 * pad)}" '
            f'height="{_n(badge - 2 * pad)}" rx="{_n((badge - 2 * pad) * .22)}"/></clipPath></defs>'
            f'<rect x="{x}" y="{x}" width="{badge}" height="{badge}" rx="{_n(badge * .26)}" fill="#fff"/>'
            f'<image x="{_n(x + pad)}" y="{_n(x + pad)}" width="{_n(badge - 2 * pad)}" height="{_n(badge - 2 * pad)}" '
            f'clip-path="url(#qr-logo-clip)" preserveAspectRatio="xMidYMid meet" href="data:image/png;base64,{logo_png_b64}"/>'
        )
    return size, ''.join(els)


def _fit(text, font_size, max_width, char_ratio=0.58):
    """textLength/lengthAdjust only when a rough width estimate says the
    text would overflow — squeezes long names instead of clipping them."""
    if len(text) * font_size * char_ratio > max_width:
        return f' textLength="{_n(max_width)}" lengthAdjust="spacingAndGlyphs"'
    return ''


def _on_color(hex_color):
    return '#ffffff' if _gray(hex_color) < 170 else '#03121a'


def render_qr_svg(payload, logo_png_b64=None, caption='', accent=DEFAULT_ACCENT,
                  dot_style='rounded', qr_color=DEFAULT_QR_COLOR, layout='compact', card=None):
    """layout='compact': the code + a caption pill under it — for inside
    the app (invoice view), where the account details already sit next
    to it as page text.

    layout='card': a self-contained payment card (brand header, the code,
    bank / account / holder, amount + note) — what gets downloaded and
    forwarded to a tenant over Zalo, so it has to stand on its own.
    `card` = {bank_name, account_no, account_name, amount, note}.

    logo + caption together mark the code as this property's own, so a
    tenant can tell at a glance it isn't a look-alike QR someone swapped
    onto a printed invoice."""
    accent = accent if is_valid_color(accent) else DEFAULT_ACCENT
    on_accent = _on_color(accent)
    caption = (caption or '').strip()

    if layout != 'card':
        size, body = _qr_body(payload, logo_png_b64, dot_style, qr_color, accent, quiet_zone=4)
        band = 6 if caption else 0  # 5 for the pill + 1 bottom margin
        height = size + band
        svg = [
            f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size} {height}">',
            f'<rect width="{size}" height="{height}" fill="#fff"/>',
            body,
        ]
        if caption:
            # Below the quiet zone, never inside it — scanners need that
            # white margin intact. A long caption steps down one font size,
            # then gets cut with "…" — squeezing it to fit (textLength) made
            # a long building name unreadably small at invoice size.
            inner = size - 8
            font_size = 2.6
            max_chars = int((inner - 4) / (font_size * 0.58))
            if len(caption) > max_chars:
                font_size = 2.2
                max_chars = int((inner - 4) / (font_size * 0.58))
            if len(caption) > max_chars:
                caption = caption[:max_chars - 1].rstrip(' ·-') + '…'
            svg.append(
                f'<rect x="4" y="{size}" width="{inner}" height="5" rx="2.5" fill="{accent}"/>'
                f'<text x="{_n(size / 2)}" y="{_n(size + 2.6)}" text-anchor="middle" dominant-baseline="central" '
                f'font-family="{FONT_STACK}" font-size="{font_size}" font-weight="700" fill="{on_accent}">'
                f'{xml_escape(caption)}</text>'
            )
        svg.append('</svg>')
        return ''.join(svg)

    card = card or {}
    W = 420
    size, body = _qr_body(payload, logo_png_b64, dot_style, qr_color, accent, quiet_zone=1)
    amount = int(round(float(card.get('amount') or 0)))
    note = (card.get('note') or '').strip()
    account_no = re.sub(r'(.{4})(?=.)', r'\1 ', card.get('account_no') or '')
    value_color = accent if _gray(accent) < 150 else '#03121a'

    els = []
    # Header band + the code's white panel overlapping its lower edge.
    els.append(f'<rect width="{W}" height="122" fill="{accent}"/>')
    els.append(
        f'<text x="{W / 2}" y="44" text-anchor="middle" font-family="{FONT_STACK}" font-size="21" '
        f'font-weight="800" fill="{on_accent}"{_fit(caption, 21, W - 56)}>{xml_escape(caption)}</text>'
        f'<text x="{W / 2}" y="68" text-anchor="middle" font-family="{FONT_STACK}" font-size="11.5" '
        f'font-weight="700" letter-spacing="1.8" fill="{on_accent}" fill-opacity=".82">QUÉT MÃ ĐỂ CHUYỂN KHOẢN</text>'
    )
    els.append(
        f'<rect x="50" y="88" width="320" height="320" rx="24" fill="#fff" filter="url(#qr-card-shadow)"/>'
        f'<svg x="62" y="100" width="296" height="296" viewBox="0 0 {size} {size}">{body}</svg>'
    )

    y = 446
    els.append(
        f'<text x="{W / 2}" y="{y}" text-anchor="middle" font-family="{FONT_STACK}" font-size="12.5" '
        f'font-weight="700" letter-spacing="1.2" fill="#687176">{xml_escape((card.get("bank_name") or "").upper())}</text>'
    )
    y += 34
    els.append(
        f'<text x="{W / 2}" y="{y}" text-anchor="middle" font-family="{FONT_STACK}" font-size="28" '
        f'font-weight="800" letter-spacing="2" fill="#03121a"{_fit(account_no, 28, W - 64, 0.66)}>{xml_escape(account_no)}</text>'
    )
    if card.get('account_name'):
        y += 28
        els.append(
            f'<text x="{W / 2}" y="{y}" text-anchor="middle" font-family="{FONT_STACK}" font-size="15" '
            f'font-weight="700" fill="#43494d"{_fit(card["account_name"], 15, W - 64)}>{xml_escape(card["account_name"])}</text>'
        )

    if amount or note:
        y += 24
        els.append(f'<line x1="32" y1="{y}" x2="{W - 32}" y2="{y}" stroke="#d9dee5" stroke-width="1.5" stroke-dasharray="5 5"/>')
        rows = []
        if amount:
            rows.append(('Số tiền', f"{amount:,}".replace(',', '.') + ' đ', 20, value_color))
        if note:
            rows.append(('Nội dung', note, 15, '#03121a'))
        for label, value, fs, color in rows:
            y += 34
            els.append(
                f'<text x="32" y="{y}" font-family="{FONT_STACK}" font-size="14" font-weight="600" fill="#687176">{label}</text>'
                f'<text x="{W - 32}" y="{y}" text-anchor="end" font-family="{FONT_STACK}" font-size="{fs}" '
                f'font-weight="800" fill="{color}"{_fit(value, fs, W - 150)}>{xml_escape(value)}</text>'
            )

    y += 38
    els.append(
        f'<text x="{W / 2}" y="{y}" text-anchor="middle" font-family="{FONT_STACK}" font-size="11" '
        f'fill="#8a9399">Kiểm tra đúng tên người nhận trước khi chuyển khoản</text>'
    )
    H = y + 26

    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}">'
        f'<defs><clipPath id="qr-card-clip"><rect width="{W}" height="{H}" rx="28"/></clipPath>'
        f'<filter id="qr-card-shadow" x="-20%" y="-20%" width="140%" height="140%">'
        f'<feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#03121a" flood-opacity=".14"/></filter></defs>'
        f'<g clip-path="url(#qr-card-clip)"><rect width="{W}" height="{H}" fill="#f6f8fb"/>{"".join(els)}</g>'
        f'</svg>'
    )
