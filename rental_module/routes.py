from flask import Blueprint, render_template, request, jsonify, session
from .services import RentalService
from .auth import login_required, roles_required, admin_required

rental_bp = Blueprint(
    'rental',
    __name__,
    template_folder='templates',
    static_folder='static',
    static_url_path='/rental_static'
)

@rental_bp.route('/')
def index():
    return render_template('rental/index.html')

@rental_bp.route('/api/data', methods=['GET'])
@login_required
def get_data():
    month = request.args.get('month', '2026-08')
    data = RentalService.get_full_state(month, session.get('user'))
    return jsonify(data)

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

@rental_bp.route('/api/houses/save', methods=['POST'])
@admin_required
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
@admin_required
def delete_house():
    data = request.json or {}
    RentalService.delete_house(data.get('id'))
    return jsonify({'success': True})

@rental_bp.route('/api/services/save', methods=['POST'])
@admin_required
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
        data.get('formulaId'),
        data.get('icon'),
        data.get('symbol'),
        data.get('roomIds')
    )
    return jsonify({'success': True, 'service': s_obj})

@rental_bp.route('/api/services/delete', methods=['POST'])
@admin_required
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
@admin_required
def delete_formula():
    data = request.json or {}
    RentalService.delete_formula(data.get('id'))
    return jsonify({'success': True})

@rental_bp.route('/api/rooms/save', methods=['POST'])
@admin_required
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
        data.get('elecFormula'),
        data.get('waterFormula')
    )
    return jsonify({'success': True, 'room': r_obj})

@rental_bp.route('/api/rooms/delete', methods=['POST'])
@admin_required
def delete_room():
    data = request.json or {}
    room_id = data.get('id') or data.get('roomId')
    RentalService.delete_room(room_id)
    return jsonify({'success': True})

@rental_bp.route('/api/users/approve', methods=['POST'])
@admin_required
def approve_user():
    data = request.json or {}
    user_id = data.get('userId')
    room_id = data.get('roomId')
    success = RentalService.approve_user(user_id, room_id)
    return jsonify({'success': success})

@rental_bp.route('/api/users/create', methods=['POST'])
@admin_required
def create_user():
    data = request.json or {}
    user, error = RentalService.create_user_by_admin(
        data.get('username'),
        data.get('password'),
        data.get('fullName'),
        data.get('role', 'tenant'),
        data.get('roomId', ''),
        data.get('houseId', '')
    )
    if error:
        return jsonify({'success': False, 'error': error}), 400
    return jsonify({'success': True, 'user': user})

@rental_bp.route('/api/users/save', methods=['POST'])
@admin_required
def save_user():
    data = request.json or {}
    user, error = RentalService.update_user_by_admin(
        data.get('id'),
        data.get('fullName'),
        data.get('role'),
        data.get('roomId'),
        data.get('status'),
        data.get('newPassword'),  # Optional - only set if provided
        data.get('houseId', '')
    )
    if error:
        return jsonify({'success': False, 'error': error}), 400
    return jsonify({'success': True, 'user': user})

@rental_bp.route('/api/users/delete', methods=['POST'])
@admin_required
def delete_user():
    data = request.json or {}
    RentalService.delete_user(data.get('userId'))
    return jsonify({'success': True})

@rental_bp.route('/api/readings/update', methods=['POST'])
@roles_required('admin', 'manager')
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
@admin_required
def generate_all_invoices():
    data = request.json or {}
    count = RentalService.generate_all_invoices(data.get('month'))
    return jsonify({'success': True, 'count': count})

@rental_bp.route('/api/invoices/mark-paid', methods=['POST'])
@roles_required('admin', 'manager')
def mark_paid():
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

@rental_bp.route('/api/tickets/reply', methods=['POST'])
@roles_required('admin', 'manager')
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
@admin_required
def save_permissions():
    data = request.json or {}
    matrix = data.get('matrix')
    success = RentalService.save_permissions(matrix)
    return jsonify({'success': success})

@rental_bp.route('/api/tickets/delete', methods=['POST'])
@admin_required
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
@admin_required
def delete_room_document():
    data = request.json or {}
    success = RentalService.delete_room_document(data.get('roomId'), data.get('id'))
    return jsonify({'success': success})
