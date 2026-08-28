# PDF invoice generation for the "Sao Lưu Dữ Liệu" backup ZIP (see
# routes.py's /api/backup/export-invoices-zip) — a real, readable invoice
# document per room/month instead of just a raw JSON data dump, organized
# into one folder per house inside the ZIP.
#
# Uses reportlab with a bundled Noto Sans (regular + bold) — reportlab's
# built-in fonts (Helvetica etc.) have no Vietnamese glyphs at all, so
# every accented character would render as a blank box or the wrong glyph
# without this. Noto Sans is Google's own font, SIL Open Font License
# (free to embed/redistribute); the two .ttf files here are an official,
# unmodified Vietnamese-subset build fetched directly from Google Fonts'
# own CDN and converted from its WOFF delivery format to TTF (a lossless,
# same-glyph-data conversion) since reportlab needs TTF/OTF, not WOFF.
import io
import os
import zipfile

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer
from reportlab.lib.styles import ParagraphStyle

_FONTS_DIR = os.path.join(os.path.dirname(__file__), 'static', 'fonts')
_FONTS_REGISTERED = False


def _ensure_fonts_registered():
    global _FONTS_REGISTERED
    if _FONTS_REGISTERED:
        return
    pdfmetrics.registerFont(TTFont('NotoSans', os.path.join(_FONTS_DIR, 'NotoSans-Regular.ttf')))
    pdfmetrics.registerFont(TTFont('NotoSans-Bold', os.path.join(_FONTS_DIR, 'NotoSans-Bold.ttf')))
    _FONTS_REGISTERED = True


def _money(n):
    try:
        return f"{round(n or 0):,}".replace(',', '.') + ' đ'
    except (TypeError, ValueError):
        return '0 đ'


def _month_label(month_str):
    try:
        y, m = month_str.split('-')
        return f"Tháng {m}/{y}"
    except (ValueError, AttributeError):
        return month_str or ''


def generate_invoice_pdf(invoice, house):
    """Renders one invoice to PDF bytes — same line items the in-app
    invoice paper view shows (room rent, điện, nước, other services,
    total, payment status), laid out as a simple one-page document."""
    _ensure_fonts_registered()
    buf = io.BytesIO()
    doc = SimpleDocTemplate(buf, pagesize=A4, topMargin=18 * mm, bottomMargin=18 * mm, leftMargin=18 * mm, rightMargin=18 * mm)

    title_style = ParagraphStyle('Title', fontName='NotoSans-Bold', fontSize=18, leading=22, spaceAfter=10)
    house_style = ParagraphStyle('House', fontName='NotoSans-Bold', fontSize=11, textColor=colors.HexColor('#0178d2'))
    meta_style = ParagraphStyle('Meta', fontName='NotoSans', fontSize=9.5, textColor=colors.HexColor('#687176'), spaceAfter=2)
    label_style = ParagraphStyle('Label', fontName='NotoSans', fontSize=9.5)
    cell_style = ParagraphStyle('Cell', fontName='NotoSans', fontSize=9.5)
    cell_bold = ParagraphStyle('CellBold', fontName='NotoSans-Bold', fontSize=9.5)

    house_name = (house or {}).get('name') or invoice.get('houseId') or 'CalaciHouse'
    house_addr = (house or {}).get('address') or ''

    elements = [
        Paragraph('HÓA ĐƠN TIỀN PHÒNG', title_style),
        Paragraph(f"Mã hóa đơn: {invoice.get('id', '')} &nbsp;&nbsp;|&nbsp;&nbsp; Kỳ: {_month_label(invoice.get('month'))}", meta_style),
        Spacer(1, 6),
        Paragraph(house_name, house_style),
    ]
    if house_addr:
        elements.append(Paragraph(house_addr, meta_style))
    elements.append(Spacer(1, 10))
    elements.append(Paragraph(f"Phòng: <b>{invoice.get('roomName', '')}</b> &nbsp;&nbsp; Khách thuê: <b>{invoice.get('tenant', '') or 'Chưa có khách'}</b>"
                               + (f" &nbsp;&nbsp; SĐT: {invoice.get('phone')}" if invoice.get('phone') else ''), label_style))
    elements.append(Spacer(1, 12))

    rows = [[
        Paragraph('<b>Khoản Mục</b>', cell_bold),
        Paragraph('<b>Diễn Giải</b>', cell_bold),
        Paragraph('<b>Số Tiền</b>', cell_bold),
    ]]

    rows.append([
        Paragraph('Tiền phòng', cell_style),
        Paragraph('', cell_style),
        Paragraph(_money(invoice.get('baseRent')), cell_style)
    ])

    if invoice.get('elecFormula'):
        elec_old = invoice.get('elecOld') or 0
        elec_new = invoice.get('elecNew') or 0
        elec_usage = invoice.get('elecUsage', max(0, elec_new - elec_old))
        rows.append([
            Paragraph('Tiền điện', cell_style),
            Paragraph(f"{elec_old} -> {elec_new} ({elec_usage} kWh)", cell_style),
            Paragraph(_money(invoice.get('elecCost')), cell_style)
        ])

    if invoice.get('waterFormula'):
        water_old = invoice.get('waterOld') or 0
        water_new = invoice.get('waterNew') or 0
        water_usage = invoice.get('waterUsage', max(0, water_new - water_old))
        rows.append([
            Paragraph('Tiền nước', cell_style),
            Paragraph(f"{water_old} -> {water_new} ({water_usage} m³)", cell_style),
            Paragraph(_money(invoice.get('waterCost')), cell_style)
        ])

    for item in (invoice.get('serviceItems') or []):
        rows.append([
            Paragraph(f"{item.get('symbol', '')} {item.get('name', '')}".strip(), cell_style),
            Paragraph(item.get('unit', '') or '', cell_style),
            Paragraph(_money(item.get('total')), cell_style)
        ])

    rows.append([
        Paragraph('<b>TỔNG CỘNG</b>', cell_bold),
        Paragraph('', cell_style),
        Paragraph(f"<b>{_money(invoice.get('totalAmount'))}</b>", cell_bold)
    ])

    table = Table(rows, colWidths=[45 * mm, 75 * mm, 45 * mm])
    table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#f7f9fa')),
        ('LINEBELOW', (0, 0), (-1, 0), 0.75, colors.HexColor('#e5e9f0')),
        ('LINEBELOW', (0, 1), (-1, -2), 0.5, colors.HexColor('#e5e9f0')),
        ('LINEABOVE', (0, -1), (-1, -1), 1, colors.HexColor('#03121a')),
        ('ALIGN', (2, 0), (2, -1), 'RIGHT'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
    ]))
    elements.append(table)
    elements.append(Spacer(1, 14))

    status_label = 'Đã thanh toán' if invoice.get('status') == 'Đã thanh toán' else 'Chờ thanh toán'
    elements.append(Paragraph(f"Trạng thái thanh toán: <b>{status_label}</b>", label_style))

    doc.build(elements)
    return buf.getvalue()


def generate_invoices_zip(invoices, houses_by_id):
    """Bundles one PDF per invoice into a ZIP, one folder per house — the
    exact structure asked for. Invoices whose houseId doesn't match a
    known house still get included, filed under a 'Khac' (other) folder
    rather than silently dropped."""
    buf = io.BytesIO()
    with zipfile.ZipFile(buf, 'w', zipfile.ZIP_DEFLATED) as zf:
        for inv in invoices:
            house = houses_by_id.get(inv.get('houseId'))
            folder = _safe_filename(house['name']) if house else 'Khac'
            filename = f"{folder}/HoaDon_{_safe_filename(inv.get('roomName', ''))}_{inv.get('month', '')}.pdf"
            zf.writestr(filename, generate_invoice_pdf(inv, house))
    return buf.getvalue()


def _safe_filename(name):
    """Strips characters that are awkward/invalid in a filename or ZIP
    entry path on Windows/macOS — keeps Vietnamese letters themselves
    (those are valid in filenames on every OS this matters for), only
    replaces path separators and a handful of reserved punctuation."""
    if not name:
        return 'Khong_ten'
    cleaned = name
    for ch in '/\\:*?"<>|':
        cleaned = cleaned.replace(ch, '-')
    return cleaned.strip()
