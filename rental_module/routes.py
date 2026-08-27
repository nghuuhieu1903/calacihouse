import os
from flask import Blueprint, render_template, request, jsonify, session
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

@rental_bp.route('/')
def index():
    return render_template(
        'rental/index.html',
        asset_version_js=_static_file_version('js/app.js'),
        asset_version_css=_static_file_version('css/styles.css')
    )

@rental_bp.route('/api/data', methods=['GET'])
@login_required
def get_data():
    month = request.args.get('month', '2026-08')
    data = RentalService.get_full_state(month, session.get('user'))
    return jsonify(data)

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
    user = session.get('user')
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
        data.get('deposit')
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
        data.get('houseIds')
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
        data.get('houseIds')
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
        data.get('amount')
    )
    return jsonify({'success': True, 'expense': e_obj})

@rental_bp.route('/api/investor-expenses/delete', methods=['POST'])
@superadmin_required
def delete_investor_expense():
    data = request.json or {}
    RentalService.delete_investor_expense(data.get('id'))
    return jsonify({'success': True})

@rental_bp.route('/api/tickets/create', methods=['POST'])
@login_required
def create_ticket():
    data = request.json or {}
    t_obj = RentalService.create_ticket(
        data.get('id'),
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
