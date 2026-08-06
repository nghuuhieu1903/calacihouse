from flask import Blueprint, render_template, request, jsonify, session
from .services import RentalService

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
def get_data():
    month = request.args.get('month', '2026-08')
    data = RentalService.get_full_state(month)
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

@rental_bp.route('/api/auth/register', methods=['POST'])
def register():
    data = request.json or {}
    username = data.get('username', '')
    password = data.get('password', '')
    full_name = data.get('fullName', '')

    user, error = RentalService.register_user(username, password, full_name)
    if error:
        return jsonify({'success': False, 'error': error}), 400

    return jsonify({'success': True, 'user': user, 'message': 'Đăng ký tài khoản thành công! Vui lòng chờ Admin duyệt.'})

@rental_bp.route('/api/houses/save', methods=['POST'])
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
def delete_house():
    data = request.json or {}
    RentalService.delete_house(data.get('id'))
    return jsonify({'success': True})

@rental_bp.route('/api/services/save', methods=['POST'])
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
def delete_service():
    data = request.json or {}
    RentalService.delete_service(data.get('id'))
    return jsonify({'success': True})

@rental_bp.route('/api/formulas/save', methods=['POST'])
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
def delete_formula():
    data = request.json or {}
    RentalService.delete_formula(data.get('id'))
    return jsonify({'success': True})

@rental_bp.route('/api/rooms/save', methods=['POST'])
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
def delete_room():
    data = request.json or {}
    RentalService.delete_room(data.get('id'))
    return jsonify({'success': True})

@rental_bp.route('/api/users/approve', methods=['POST'])
def approve_user():
    data = request.json or {}
    user_id = data.get('userId')
    room_id = data.get('roomId')
    success = RentalService.approve_user(user_id, room_id)
    return jsonify({'success': success})

@rental_bp.route('/api/users/create', methods=['POST'])
def create_user():
    data = request.json or {}
    user, error = RentalService.create_user_by_admin(
        data.get('username'),
        data.get('password'),
        data.get('fullName'),
        data.get('role', 'tenant'),
        data.get('roomId', '')
    )
    if error:
        return jsonify({'success': False, 'error': error}), 400
    return jsonify({'success': True, 'user': user})

@rental_bp.route('/api/users/delete', methods=['POST'])
def delete_user():
    data = request.json or {}
    RentalService.delete_user(data.get('userId'))
    return jsonify({'success': True})

@rental_bp.route('/api/readings/update', methods=['POST'])
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
def generate_all_invoices():
    data = request.json or {}
    count = RentalService.generate_all_invoices(data.get('month'))
    return jsonify({'success': True, 'count': count})

@rental_bp.route('/api/invoices/mark-paid', methods=['POST'])
def mark_paid():
    return jsonify({'success': True})

@rental_bp.route('/api/tickets/create', methods=['POST'])
def create_ticket():
    return jsonify({'success': True})

@rental_bp.route('/api/tickets/reply', methods=['POST'])
def reply_ticket():
    return jsonify({'success': True})
