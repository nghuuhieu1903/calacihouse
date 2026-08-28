import os
import re
import json
import base64
from datetime import datetime
from flask import Blueprint, render_template, request, jsonify, session, url_for, Response
from .services import RentalService
from .storage import Storage
from .auth import login_required, roles_required, admin_required, superadmin_required, permission_required

rental_bp = Blueprint(
    'rental',
    __name__,
    template_folder='templates',
    static_folder='static',
    static_url_path='/rental_static'
)

def _static_file_version(filename):
    """Cache-busting query string for app.js/styles.css — without this,
    browsers (and some reverse-proxy/panel configs) keep serving a cached
    copy of the old JS/CSS after a deploy, so a user can pull + restart the
    server and still see stale behavior until they hard-refresh. Using the
    file's own mtime means the URL only changes when the file actually
    does, so normal caching still works between deploys."""
    path = os.path.join(os.path.dirname(__file__), 'static', filename)
    try:
        return int(os.path.getmtime(path))
    except OSError:
        return 0

def _decode_data_uri(data_uri):
    """Splits a data:<mime>;base64,<...> string into (mime_type, raw
    bytes) — returns (None, None) for anything else (empty, already a
    real URL, malformed)."""
    if not data_uri or not data_uri.startswith('data:'):
        return None, None
    match = re.match(r'^data:([^;]+);base64,(.+)$', data_uri, re.DOTALL)
    if not match:
        return None, None
    mime_type, b64_data = match.groups()
    try:
        return mime_type, base64.b64decode(b64_data)
    except Exception:
        return None, None

@rental_bp.route('/og-image')
def og_image():
    # Social-media link-preview crawlers (Facebook, Zalo, Messenger, ...)
    # fetch the URL in <meta property="og:image">'s content THEMSELVES,
    # server-side, without ever running this page's JS — a data: URI
    # embedded straight into that attribute isn't something a remote
    # crawler can fetch at all (it displays fine in a real browser only
    # because the browser decodes it locally, same document). This route
    # re-serves the exact same stored image as its own real, independently
    # fetchable URL for index() to point og:image at instead.
    settings = Storage.get_site_settings()
    mime_type, raw = _decode_data_uri(settings.get('shareImage'))
    if not raw:
        return '', 404
    return Response(raw, mimetype=mime_type or 'image/jpeg')

@rental_bp.route('/')
def index():
    # og:title/description/image used to only ever get set client-side (see
    # applySiteSettings() in app.js) — fine for a real visitor's browser,
    # but a link-preview crawler parses the raw HTML this route returns and
    # never executes any JS, so it always saw the hardcoded template
    # defaults (or an empty og:image) no matter what was configured in
    # Thiết Lập Trang. Rendering the actual current settings server-side
    # here fixes that for crawlers too, not just for someone's open tab.
    settings = Storage.get_site_settings()
    site_name = settings.get('siteName') or 'CalaciHouse'
    page_title = settings.get('title') or site_name
    page_description = settings.get('description') or 'Hệ thống Quản lý Phòng trọ & Hóa đơn Tự động'
    page_keywords = settings.get('keywords') or ''
    # Absolute URL required — crawlers don't reliably resolve a relative
    # one against the page they fetched it from.
    og_image_url = f"{request.url_root.rstrip('/')}{url_for('rental.og_image')}" if settings.get('shareImage') else ''
    return render_template(
        'rental/index.html',
        asset_version_js=_static_file_version('js/app.js'),
        asset_version_css=_static_file_version('css/styles.css'),
        asset_version_lucide=_static_file_version('js/vendor/lucide.min.js'),
        site_name=site_name,
        page_title=page_title,
        page_description=page_description,
        page_keywords=page_keywords,
        og_image_url=og_image_url
    )

def _refresh_session_user():
    """session['user'] is a snapshot taken at login — if an admin changes
    this account's role, status, or (for an investor) assigned houses
    while they're already logged in, the old snapshot would otherwise keep
    driving what get_full_state() filters down to until they happen to log
    out and back in. An investor whose houses got reassigned away would
    keep seeing the old ones (and their revenue) in the meantime — refresh
    from the DB on every state fetch instead so a permission/scope change
    takes effect on the next request, not the next login."""
    current = session.get('user')
    if not current:
        return None
    fresh = next((u for u in Storage.get_users() if u['id'] == current['id']), None)
    if not fresh:
        return current
    fresh = {k: v for k, v in fresh.items() if k != 'password'}
    session['user'] = fresh
    return fresh

@rental_bp.route('/api/data', methods=['GET'])
@login_required
def get_data():
    month = request.args.get('month', '2026-08')
    data = RentalService.get_full_state(month, _refresh_session_user())
    return jsonify(data)

@rental_bp.route('/manifest.webmanifest')
def web_manifest():
    # Lets Chrome (and other browsers) offer "Add to Home screen"/"Install
    # app" as a real installable icon that opens standalone (no address
    # bar) instead of just a bookmark. Name stays in sync with whatever the
    # admin has set in Thiết Lập Trang; the icon set is our own static
    # asset rather than the admin-uploaded favicon (which can be an
    # arbitrary data: URL / non-square image) so the home-screen icon is
    # always guaranteed to render well at every required size.
    settings = Storage.get_site_settings()
    site_name = settings.get('siteName') or 'CalaciHouse'
    manifest = {
        'name': site_name,
        'short_name': site_name,
        'description': settings.get('description') or 'Hệ thống Quản lý Phòng trọ & Hóa đơn Tự động',
        'start_url': '/',
        'scope': '/',
        'display': 'standalone',
        'background_color': '#f2f4f7',
        'theme_color': '#0194f3',
        'icons': [
            {'src': url_for('rental.static', filename='img/icon-192.png'), 'sizes': '192x192', 'type': 'image/png', 'purpose': 'any'},
            {'src': url_for('rental.static', filename='img/icon-512.png'), 'sizes': '512x512', 'type': 'image/png', 'purpose': 'any'},
            {'src': url_for('rental.static', filename='img/icon-512-maskable.png'), 'sizes': '512x512', 'type': 'image/png', 'purpose': 'maskable'}
        ]
    }
    return jsonify(manifest), 200, {'Content-Type': 'application/manifest+json'}

@rental_bp.route('/api/settings/public', methods=['GET'])
def get_public_site_settings():
    # No login_required — the login screen itself needs the site name/
    # title/favicon before anyone has authenticated. Nothing here (name,
    # title, description, keywords, share image, favicon) is sensitive.
    return jsonify({'success': True, 'settings': Storage.get_site_settings()})

@rental_bp.route('/api/auth/login', methods=['POST'])
def login():
    data = request.json or {}
    username = data.get('username', '')
    password = data.get('password', '')

    user, error = RentalService.authenticate_user(username, password)
    if error:
        return jsonify({'success': False, 'error': error}), 400

    session['user'] = user
    return jsonify({'success': True, 'user': user})

@rental_bp.route('/api/auth/me', methods=['GET'])
def get_current_user():
    user = _refresh_session_user()
    if not user:
        return jsonify({'success': False}), 401
    return jsonify({'success': True, 'user': user})

@rental_bp.route('/api/auth/logout', methods=['POST'])
def logout():
    session.pop('user', None)
    return jsonify({'success': True})

@rental_bp.route('/api/houses/save', methods=['POST'])
@permission_required('houses', lambda body: 'edit' if body.get('id') else 'create')
def save_house():
    data = request.json or {}
    h_obj = RentalService.save_house(
        data.get('id'),
        data.get('name'),
        data.get('address'),
        data.get('description', '')
    )
    return jsonify({'success': True, 'house': h_obj})

@rental_bp.route('/api/houses/delete', methods=['POST'])
@superadmin_required
def delete_house():
    data = request.json or {}
    success, error = RentalService.delete_house(data.get('id'))
    if not success:
        return jsonify({'success': False, 'error': error}), 400
    return jsonify({'success': True})

@rental_bp.route('/api/houses/reorder', methods=['POST'])
@permission_required('houses', 'edit')
def reorder_houses():
    data = request.json or {}
    RentalService.reorder_houses(data.get('houseIds') or [])
    return jsonify({'success': True})

@rental_bp.route('/api/services/save', methods=['POST'])
@permission_required('services', lambda body: 'edit' if body.get('id') else 'create')
def save_service():
    data = request.json or {}
    s_obj = RentalService.save_service(
        data.get('id'),
        data.get('houseId'),
        data.get('name'),
        data.get('price'),
        data.get('unit'),
        data.get('houseIds'),
        data.get('calcType'),
        data.get('customFormula'),
        data.get('icon'),
        data.get('symbol'),
        data.get('roomIds'),
        data.get('investorShare')
    )
    return jsonify({'success': True, 'service': s_obj})

@rental_bp.route('/api/custom-icons/save', methods=['POST'])
@permission_required('services', 'edit')
def save_custom_icons():
    data = request.json or {}
    icons = RentalService.save_custom_icons(data.get('icons'))
    return jsonify({'success': True, 'icons': icons})

@rental_bp.route('/api/services/delete', methods=['POST'])
@superadmin_required
def delete_service():
    data = request.json or {}
    RentalService.delete_service(data.get('id'))
    return jsonify({'success': True})

@rental_bp.route('/api/formulas/save', methods=['POST'])
@admin_required
def save_formula():
    data = request.json or {}
    f_obj = RentalService.save_formula(
        data.get('id'),
        data.get('name'),
        data.get('type'),
        data.get('rate'),
        data.get('category')
    )
    return jsonify({'success': True, 'formula': f_obj})

@rental_bp.route('/api/formulas/delete', methods=['POST'])
@superadmin_required
def delete_formula():
    data = request.json or {}
    RentalService.delete_formula(data.get('id'))
    return jsonify({'success': True})

@rental_bp.route('/api/rooms/save', methods=['POST'])
@permission_required('rooms', lambda body: 'edit' if body.get('id') else 'create')
def save_room():
    data = request.json or {}
    r_obj = RentalService.save_room(
        data.get('id'),
        data.get('houseId'),
        data.get('name'),
        data.get('tenant'),
        data.get('phone'),
        data.get('baseRent'),
        data.get('headcount'),
        data.get('roomType'),
        data.get('elecFormula'),
        data.get('waterFormula'),
        data.get('area'),
        data.get('description'),
        data.get('capacity'),
        data.get('deposit'),
        data.get('vehicleCount')
    )
    return jsonify({'success': True, 'room': r_obj})

@rental_bp.route('/api/settings/saler-commission/save', methods=['POST'])
@admin_required
def save_saler_commission():
    data = request.json or {}
    percent = RentalService.save_saler_commission_percent(data.get('percent'))
    return jsonify({'success': True, 'percent': percent})

@rental_bp.route('/api/rooms/contract/save', methods=['POST'])
@permission_required('rooms', 'edit')
def save_room_contract():
    data = request.json or {}
    room_id = data.get('roomId')
    if not room_id:
        return jsonify({'success': False, 'error': 'Thiếu roomId'}), 400
    r_obj = RentalService.update_room_contract(room_id, data.get('contractStart'), data.get('contractEnd'))
    if not r_obj:
        return jsonify({'success': False, 'error': 'Không tìm thấy phòng'}), 404
    return jsonify({'success': True, 'room': r_obj})

@rental_bp.route('/api/rooms/delete', methods=['POST'])
@superadmin_required
def delete_room():
    data = request.json or {}
    room_id = data.get('id') or data.get('roomId')
    unlinked_username = RentalService.delete_room(room_id)
    return jsonify({'success': True, 'unlinkedUsername': unlinked_username})

@rental_bp.route('/api/rooms/reorder', methods=['POST'])
@permission_required('rooms', 'edit')
def reorder_rooms():
    data = request.json or {}
    RentalService.reorder_rooms(data.get('roomIds') or [])
    return jsonify({'success': True})

@rental_bp.route('/api/users/approve', methods=['POST'])
@permission_required('accounts', 'edit')
def approve_user():
    data = request.json or {}
    user_id = data.get('userId')
    room_id = data.get('roomId')
    success, deactivated = RentalService.approve_user(user_id, room_id)
    return jsonify({'success': success, 'deactivatedUsernames': deactivated})

@rental_bp.route('/api/users/create', methods=['POST'])
@permission_required('accounts', 'create')
def create_user():
    data = request.json or {}
    role = data.get('role', 'tenant')
    # Only an existing superadmin may hand out the superadmin role — an
    # "admin" account can do everything else this route allows, but
    # granting the one role that can delete/manage permissions would be a
    # privilege escalation.
    if role == 'superadmin' and session.get('user', {}).get('role') != 'superadmin':
        return jsonify({'success': False, 'error': 'Chỉ Super Admin mới có thể tạo tài khoản Super Admin khác!'}), 403
    user, error = RentalService.create_user_by_admin(
        data.get('username'),
        data.get('password'),
        data.get('fullName'),
        role,
        data.get('roomId', ''),
        data.get('houseId', ''),
        data.get('houseIds'),
        data.get('hasVehicle', False)
    )
    if error:
        return jsonify({'success': False, 'error': error}), 400
    return jsonify({'success': True, 'user': user})

@rental_bp.route('/api/users/save', methods=['POST'])
@permission_required('accounts', 'edit')
def save_user():
    data = request.json or {}
    role = data.get('role')
    if role == 'superadmin' and session.get('user', {}).get('role') != 'superadmin':
        return jsonify({'success': False, 'error': 'Chỉ Super Admin mới có thể gán vai trò Super Admin!'}), 403
    user, error, deactivated = RentalService.update_user_by_admin(
        data.get('id'),
        data.get('fullName'),
        role,
        data.get('roomId'),
        data.get('status'),
        data.get('newPassword'),  # Optional - only set if provided
        data.get('houseId', ''),
        data.get('houseIds'),
        data.get('hasVehicle')
    )
    if error:
        return jsonify({'success': False, 'error': error}), 400
    return jsonify({'success': True, 'user': user, 'deactivatedUsernames': deactivated})

@rental_bp.route('/api/users/set-active', methods=['POST'])
@permission_required('accounts', 'edit')
def set_user_active():
    data = request.json or {}
    user = RentalService.set_user_active(data.get('userId'), bool(data.get('isActive')))
    if not user:
        return jsonify({'success': False, 'error': 'Không thể thay đổi trạng thái tài khoản này'}), 400
    return jsonify({'success': True, 'user': user})

@rental_bp.route('/api/users/delete', methods=['POST'])
@superadmin_required
def delete_user():
    data = request.json or {}
    RentalService.delete_user(data.get('userId'))
    return jsonify({'success': True})

@rental_bp.route('/api/readings/update', methods=['POST'])
@permission_required('services', 'edit')
def update_reading():
    data = request.json or {}
    readings = RentalService.update_room_reading(
        data.get('month'),
        data.get('roomId'),
        data.get('field'),
        data.get('value')
    )
    return jsonify({'success': True, 'readings': readings})

@rental_bp.route('/api/readings/elec-photo/save', methods=['POST'])
@permission_required('meter_readings', 'edit')
def save_elec_reading():
    # Separate from /api/readings/update on purpose — that route is gated
    # by 'services':'edit', which Manager isn't meant to have (it also
    # controls the service/formula config page). This one is scoped to
    # only elecNew/elecNewPhoto and respects the completion lock below,
    # which the generic route knows nothing about.
    data = request.json or {}
    month = data.get('month')
    room_id = data.get('roomId')
    field = data.get('field')
    value = data.get('value')

    if field == 'elecNewPhoto':
        user = session.get('user') or {}
        if user.get('role') != 'superadmin':
            readings = Storage.get_readings()
            current = (readings.get(month) or {}).get(room_id) or {}
            if current.get('elecPhotoLocked'):
                return jsonify({'success': False, 'error': 'Ảnh đã hoàn thành, không thể xoá/sửa. Liên hệ Super Admin.'}), 403

    readings = RentalService.update_room_reading(month, room_id, field, value)
    return jsonify({'success': True, 'readings': readings})

@rental_bp.route('/api/readings/elec-photo/complete', methods=['POST'])
@permission_required('meter_readings', 'edit')
def complete_elec_reading():
    data = request.json or {}
    reading = RentalService.set_elec_photo_lock(data.get('month'), data.get('roomId'), True)
    return jsonify({'success': True, 'reading': reading})

@rental_bp.route('/api/readings/elec-photo/unlock', methods=['POST'])
@permission_required('meter_readings', 'delete')
def unlock_elec_reading():
    # 'delete' is never true in the matrix (superadmin bypasses the check
    # entirely before it's even read, admin is hard-blocked on 'delete' by
    # permission_required itself) — same "only superadmin" rule used
    # everywhere else deletion happens in this app.
    data = request.json or {}
    reading = RentalService.set_elec_photo_lock(data.get('month'), data.get('roomId'), False)
    return jsonify({'success': True, 'reading': reading})

@rental_bp.route('/api/invoices/generate-all', methods=['POST'])
@permission_required('invoices', 'create')
def generate_all_invoices():
    data = request.json or {}
    count = RentalService.generate_all_invoices(data.get('month'))
    return jsonify({'success': True, 'count': count})

@rental_bp.route('/api/invoices/mark-paid', methods=['POST'])
@permission_required('invoices', 'edit')
def mark_paid():
    data = request.json or {}
    success = RentalService.mark_invoice_paid(data.get('invoiceId'))
    return jsonify({'success': success})

@rental_bp.route('/api/investor-expenses/save', methods=['POST'])
@permission_required('investor_expenses', lambda body: 'edit' if body.get('id') else 'create')
def save_investor_expense():
    data = request.json or {}
    e_obj = RentalService.save_investor_expense(
        data.get('id'),
        data.get('houseId'),
        data.get('month'),
        data.get('description'),
        data.get('amount'),
        data.get('photo'),
        data.get('name')
    )
    return jsonify({'success': True, 'expense': e_obj})

@rental_bp.route('/api/investor-expenses/delete', methods=['POST'])
@superadmin_required
def delete_investor_expense():
    data = request.json or {}
    RentalService.delete_investor_expense(data.get('id'))
    return jsonify({'success': True})

@rental_bp.route('/api/houses/manager-fee/save', methods=['POST'])
@permission_required('investor_expenses', 'edit')
def save_house_manager_fee():
    data = request.json or {}
    house = RentalService.save_house_manager_fee(
        data.get('houseId'),
        data.get('mode'),
        data.get('value')
    )
    if not house:
        return jsonify({'success': False, 'error': 'Không tìm thấy tòa nhà'}), 404
    return jsonify({'success': True, 'house': house})

@rental_bp.route('/api/investor-report-overrides/save', methods=['POST'])
@permission_required('investor_expenses', 'edit')
def save_investor_report_override():
    data = request.json or {}
    o_obj = RentalService.save_investor_report_override(
        data.get('houseId'),
        data.get('month'),
        data.get('amount'),
        data.get('note')
    )
    return jsonify({'success': True, 'override': o_obj})

@rental_bp.route('/api/investor-report-overrides/delete', methods=['POST'])
@permission_required('investor_expenses', 'edit')
def delete_investor_report_override():
    data = request.json or {}
    RentalService.delete_investor_report_override(data.get('houseId'), data.get('month'))
    return jsonify({'success': True})

@rental_bp.route('/api/tickets/create', methods=['POST'])
@login_required
def create_ticket():
    data = request.json or {}
    t_obj = RentalService.create_ticket(
        data.get('roomId'),
        data.get('category'),
        data.get('priority'),
        data.get('description'),
        data.get('images')
    )
    return jsonify({'success': True, 'ticket': t_obj})

@rental_bp.route('/api/tickets/<ticket_id>', methods=['GET'])
@login_required
def get_ticket_detail(ticket_id):
    ticket = RentalService.get_ticket_detail(ticket_id)
    if not ticket:
        return jsonify({'success': False, 'error': 'Không tìm thấy báo lỗi'}), 404
    return jsonify({'success': True, 'ticket': ticket})

@rental_bp.route('/api/tickets/reply', methods=['POST'])
@permission_required('tickets', 'edit')
def reply_ticket():
    data = request.json or {}
    success = RentalService.reply_ticket(
        data.get('ticketId'),
        data.get('status'),
        data.get('response'),
        data.get('comment')
    )
    return jsonify({'success': success})

@rental_bp.route('/api/tickets/tenant-reply', methods=['POST'])
@login_required
def tenant_reply_ticket():
    # Separate from reply_ticket() above on purpose: permission_required's
    # 'tickets':'edit' check never allows tenant/investor through at all
    # (see its own docstring) — that route is for staff replying to any
    # ticket, gated by the admin permission matrix. A tenant replying on
    # their OWN ticket is a different, always-allowed action that was
    # previously routed through that same admin-only endpoint and so was
    # silently rejected (403) every single time — the reply only ever
    # looked like it sent because the frontend never checked the response.
    user = session.get('user') or {}
    if user.get('role') != 'tenant':
        return jsonify({'success': False, 'error': 'Bạn không có quyền thực hiện thao tác này!'}), 403
    data = request.json or {}
    ticket_id = data.get('ticketId')
    ticket = Storage.get_ticket_full(ticket_id)
    if not ticket:
        return jsonify({'success': False, 'error': 'Không tìm thấy báo lỗi'}), 404
    owns_ticket = ticket.get('roomId') == user.get('roomId') or ticket.get('tenant') == user.get('fullName')
    if not owns_ticket:
        return jsonify({'success': False, 'error': 'Bạn không có quyền thực hiện thao tác này!'}), 403
    success = RentalService.reply_ticket(
        ticket_id,
        # A tenant can only ever add a comment, never change the ticket's
        # status — that stays admin/manager-only, matching what the
        # frontend already sends (the ticket's own current status,
        # unchanged) but enforced here too rather than trusted blindly.
        ticket.get('status'),
        ticket.get('response'),
        data.get('comment')
    )
    return jsonify({'success': success})

@rental_bp.route('/api/permissions/save', methods=['POST'])
@superadmin_required
def save_permissions():
    data = request.json or {}
    matrix = data.get('matrix')
    success = RentalService.save_permissions(matrix)
    return jsonify({'success': success})

@rental_bp.route('/api/settings/save', methods=['POST'])
@superadmin_required
def save_site_settings():
    data = request.json or {}
    settings = RentalService.save_site_settings(
        data.get('siteName'),
        data.get('title'),
        data.get('description'),
        data.get('keywords'),
        data.get('shareImage'),
        data.get('favicon')
    )
    return jsonify({'success': True, 'settings': settings})

@rental_bp.route('/api/tickets/delete', methods=['POST'])
@superadmin_required
def delete_ticket():
    data = request.json or {}
    ticket_id = data.get('ticketId')
    success = RentalService.delete_ticket(ticket_id)
    return jsonify({'success': success})

@rental_bp.route('/api/data-retention/status', methods=['GET'])
@superadmin_required
def data_retention_status():
    # Runs (and, once past the grace window, actually executes) the
    # automatic old-data cleanup — see check_data_retention()'s own
    # docstring for why this is the trigger point instead of a real cron
    # job: called once after every superadmin login (app.js) and whenever
    # Sao Lưu Dữ Liệu is opened, so it stays "automatic" from the admin's
    # perspective without this deployment needing its own scheduler.
    month = request.args.get('month') or '2026-08'
    result = RentalService.check_data_retention(month)
    return jsonify({'success': True, **result})

@rental_bp.route('/api/backup/export-invoices', methods=['GET'])
@superadmin_required
def export_pending_invoices():
    month = request.args.get('month') or '2026-08'
    data = RentalService.get_pending_invoice_backup(month)
    body = json.dumps(data, ensure_ascii=False, indent=2)
    filename = f"calacihouse-backup-hoadon-truoc-{data['cutoffMonth']}.json"
    return Response(body, mimetype='application/json', headers={
        'Content-Disposition': f'attachment; filename="{filename}"'
    })

@rental_bp.route('/api/backup/export-tickets', methods=['GET'])
@superadmin_required
def export_pending_tickets():
    tickets = RentalService.get_pending_ticket_backup()
    body = json.dumps(tickets, ensure_ascii=False, indent=2)
    filename = f"calacihouse-backup-ticket-{datetime.now().strftime('%Y-%m-%d')}.json"
    return Response(body, mimetype='application/json', headers={
        'Content-Disposition': f'attachment; filename="{filename}"'
    })

def _user_can_view_room_documents(user, room_id):
    """Gate for the on-demand full-document endpoint below — the bulk
    /api/data payload only ever ships light (no dataUrl) entries now, so a
    room's actual contract/ID scans are fetched here individually when its
    modal is opened. Without this check, a tenant could otherwise request
    any other room's id directly and get its private documents. Saler is
    deliberately excluded — contract/ID scans are never meant for that
    role, unlike the public listing photos below."""
    if not user:
        return False
    role = user.get('role')
    if role in ('superadmin', 'admin', 'manager'):
        return True
    if role == 'tenant':
        return user.get('roomId') == room_id
    if role == 'investor':
        room = next((r for r in Storage.get_rooms() if r['id'] == room_id), None)
        if not room:
            return False
        investor_house_ids = user.get('houseIds') or ([user.get('houseId')] if user.get('houseId') else [])
        return 'all' in investor_house_ids or room.get('houseId') in investor_house_ids
    return False

def _user_can_view_room_photos(user, room_id):
    """Same idea as _user_can_view_room_documents, but room_photos are the
    public listing photos shown to salers browsing recruitable rooms (see
    get_full_state's saler branch) — not sensitive, so any logged-in saler
    can fetch any room's here rather than re-deriving "is this room
    currently recruitable" on every card expand."""
    if not user:
        return False
    if user.get('role') == 'saler':
        return True
    return _user_can_view_room_documents(user, room_id)

@rental_bp.route('/api/rooms/documents/<room_id>', methods=['GET'])
@login_required
def get_room_documents_full(room_id):
    if not _user_can_view_room_documents(session.get('user'), room_id):
        return jsonify({'success': False, 'error': 'Bạn không có quyền xem tài liệu phòng này!'}), 403
    docs = Storage.get_room_documents().get(room_id, [])
    return jsonify({'success': True, 'documents': docs})

@rental_bp.route('/api/rooms/photos/<room_id>', methods=['GET'])
@login_required
def get_room_photos_full(room_id):
    if not _user_can_view_room_photos(session.get('user'), room_id):
        return jsonify({'success': False, 'error': 'Bạn không có quyền xem ảnh phòng này!'}), 403
    photos = Storage.get_room_photos().get(room_id, [])
    return jsonify({'success': True, 'photos': photos})

@rental_bp.route('/api/rooms/documents/upload', methods=['POST'])
@login_required
def upload_room_document():
    data = request.json or {}
    doc = RentalService.save_room_document(
        data.get('roomId'),
        data.get('id'),
        data.get('label'),
        data.get('dataUrl')
    )
    if not doc:
        return jsonify({'success': False, 'error': 'Thiếu roomId hoặc dữ liệu ảnh'}), 400
    return jsonify({'success': True, 'document': doc})

@rental_bp.route('/api/rooms/documents/delete', methods=['POST'])
@superadmin_required
def delete_room_document():
    data = request.json or {}
    success = RentalService.delete_room_document(data.get('roomId'), data.get('id'))
    return jsonify({'success': success})

@rental_bp.route('/api/rooms/photos/upload', methods=['POST'])
@permission_required('rooms', 'edit')
def upload_room_photo():
    data = request.json or {}
    photo = RentalService.save_room_photo(
        data.get('roomId'),
        data.get('id'),
        data.get('label'),
        data.get('dataUrl')
    )
    if not photo:
        return jsonify({'success': False, 'error': 'Thiếu roomId hoặc dữ liệu ảnh'}), 400
    return jsonify({'success': True, 'photo': photo})

@rental_bp.route('/api/rooms/photos/delete', methods=['POST'])
@superadmin_required
def delete_room_photo():
    data = request.json or {}
    success = RentalService.delete_room_photo(data.get('roomId'), data.get('id'))
    return jsonify({'success': success})
