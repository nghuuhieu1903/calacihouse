import os
import json

DATA_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'data')

DEFAULT_HOUSES = [
    {
        'id': 'house_a',
        'name': 'Tòa Nhà A - Cầu Giấy',
        'address': '12 Nguyễn Phong Sắc, Cầu Giấy, Hà Nội',
        'description': 'Tòa nhà 5 tầng, có thang máy & bảo vệ 24/7'
    },
    {
        'id': 'house_b',
        'name': 'Tòa Nhà B - Bình Thạnh',
        'address': '45 Điện Biên Phủ, Phường 15, Bình Thạnh, TP.HCM',
        'description': 'Dãy nhà trọ cao cấp gần trường Đại học'
    }
]

DEFAULT_USERS = [
    {
        'id': 'usr_admin',
        'username': 'admin',
        'password': '123',
        'fullName': 'Quản Lý Hệ Thống (Admin)',
        'role': 'admin',
        'roomId': '',
        'status': 'approved',
        'createdAt': '2026-08-01 09:00'
    },
    {
        'id': 'usr_101',
        'username': 'nguyenvanan',
        'password': '123',
        'fullName': 'Nguyễn Văn An',
        'role': 'tenant',
        'roomId': 'R101',
        'status': 'approved',
        'createdAt': '2026-08-01 10:00'
    },
    {
        'id': 'usr_102',
        'username': 'tranthibich',
        'password': '123',
        'fullName': 'Trần Thị Bích',
        'role': 'tenant',
        'roomId': 'R102',
        'status': 'approved',
        'createdAt': '2026-08-01 11:00'
    }
]

DEFAULT_SERVICES = [
    { 'id': 'srv_wifi_a', 'houseId': 'house_a', 'name': 'Internet / Wifi cáp quang A', 'price': 100000, 'unit': 'Cố định / phòng' },
    { 'id': 'srv_trash_a', 'houseId': 'house_a', 'name': 'Vệ sinh & Thu gom Rác A', 'price': 30000, 'unit': 'Theo đầu người' },
    { 'id': 'srv_parking_a', 'houseId': 'house_a', 'name': 'Phí Gửi Xe Máy A', 'price': 50000, 'unit': 'Cố định / phòng' },
    
    { 'id': 'srv_wifi_b', 'houseId': 'house_b', 'name': 'Internet Tốc Độ Cao B', 'price': 120000, 'unit': 'Cố định / phòng' },
    { 'id': 'srv_elevator_b', 'houseId': 'house_b', 'name': 'Phí Thẻ Thang Máy B', 'price': 40000, 'unit': 'Theo đầu người' },
    { 'id': 'srv_trash_b', 'houseId': 'house_b', 'name': 'Thu Gom Rác & Vệ Sinh B', 'price': 25000, 'unit': 'Theo đầu người' }
]

DEFAULT_FORMULAS = [
    { 'id': 'elec_flat_3500', 'name': 'Điện Cố Định (3,500đ / kWh)', 'type': 'flat', 'rate': 3500, 'category': 'elec' },
    { 'id': 'elec_flat_4000', 'name': 'Điện Kinh Doanh (4,000đ / kWh)', 'type': 'flat', 'rate': 4000, 'category': 'elec' },
    { 'id': 'elec_evn_tiered', 'name': 'Điện Bậc Thang EVN Sinh Hoạt', 'type': 'tiered', 'category': 'elec', 'tiers': [
        { 'max': 50, 'rate': 1893 },
        { 'max': 100, 'rate': 1956 },
        { 'max': 200, 'rate': 2271 },
        { 'max': 300, 'rate': 2860 },
        { 'max': 'inf', 'rate': 3197 }
    ]},
    { 'id': 'water_flat_18000', 'name': 'Nước Theo Khối (18,000đ / m³)', 'type': 'flat', 'rate': 18000, 'category': 'water' },
    { 'id': 'water_headcount_100k', 'name': 'Nước Khoán Đầu Người (100k / người)', 'type': 'headcount', 'rate': 100000, 'category': 'water' }
]

DEFAULT_ROOMS = [
    { 'id': 'R101', 'houseId': 'house_a', 'name': 'Phòng 101 (Tòa A)', 'tenant': 'Nguyễn Văn An', 'phone': '0901234567', 'baseRent': 3500000, 'headcount': 2, 'elecFormula': 'elec_flat_3500', 'waterFormula': 'water_flat_18000' },
    { 'id': 'R102', 'houseId': 'house_a', 'name': 'Phòng 102 (Tòa A)', 'tenant': 'Trần Thị Bích', 'phone': '0912345678', 'baseRent': 4000000, 'headcount': 3, 'elecFormula': 'elec_evn_tiered', 'waterFormula': 'water_flat_18000' },
    { 'id': 'R201', 'houseId': 'house_b', 'name': 'Phòng 201 (Tòa B)', 'tenant': 'Lê Hoàng Nam', 'phone': '0987654321', 'baseRent': 3800000, 'headcount': 1, 'elecFormula': 'elec_flat_3500', 'waterFormula': 'water_headcount_100k' },
    { 'id': 'R202', 'houseId': 'house_b', 'name': 'Phòng 202 (Tòa B)', 'tenant': 'Phạm Minh Tuấn', 'phone': '0934567890', 'baseRent': 4200000, 'headcount': 2, 'elecFormula': 'elec_flat_4000', 'waterFormula': 'water_flat_18000' }
]

DEFAULT_READINGS = {
    '2026-08': {
        'R101': { 'elecOld': 1240, 'elecNew': 1395, 'waterOld': 145, 'waterNew': 157, 'elecFormula': 'elec_flat_3500', 'waterFormula': 'water_flat_18000' },
        'R102': { 'elecOld': 2100, 'elecNew': 2320, 'waterOld': 310, 'waterNew': 328, 'elecFormula': 'elec_evn_tiered', 'waterFormula': 'water_flat_18000' },
        'R201': { 'elecOld': 980, 'elecNew': 1075, 'waterOld': 85, 'waterNew': 85, 'elecFormula': 'elec_flat_3500', 'waterFormula': 'water_headcount_100k' },
        'R202': { 'elecOld': 1850, 'elecNew': 2030, 'waterOld': 240, 'waterNew': 258, 'elecFormula': 'elec_flat_4000', 'waterFormula': 'water_flat_18000' }
    }
}

DEFAULT_TICKETS = [
    {
        'id': 'TK-1001',
        'roomId': 'R101',
        'roomName': 'Phòng 101 (Tòa A)',
        'tenant': 'Nguyễn Văn An',
        'category': 'Điện',
        'priority': 'Khẩn cấp',
        'description': 'Công tơ điện phòng 101 bị phát tiếng kêu rè rè khi bật máy lạnh, nhờ chủ nhà kiểm tra giúp.',
        'timestamp': '2026-08-04 14:30',
        'status': 'Mới tiếp nhận',
        'response': ''
    }
]

def ensure_data_dir():
    if not os.path.exists(DATA_DIR):
        os.makedirs(DATA_DIR, exist_ok=True)

def load_json(filename, default_value):
    ensure_data_dir()
    filepath = os.path.join(DATA_DIR, filename)
    if not os.path.exists(filepath):
        save_json(filename, default_value)
        return default_value
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception:
        return default_value

def save_json(filename, data):
    ensure_data_dir()
    filepath = os.path.join(DATA_DIR, filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

class Storage:
    @staticmethod
    def get_houses():
        return load_json('houses.json', DEFAULT_HOUSES)

    @staticmethod
    def save_houses(houses):
        save_json('houses.json', houses)

    @staticmethod
    def get_users():
        return load_json('users.json', DEFAULT_USERS)

    @staticmethod
    def save_users(users):
        save_json('users.json', users)

    @staticmethod
    def get_services():
        return load_json('services_list.json', DEFAULT_SERVICES)

    @staticmethod
    def save_services(services):
        save_json('services_list.json', services)

    @staticmethod
    def get_rooms():
        return load_json('rooms.json', DEFAULT_ROOMS)

    @staticmethod
    def save_rooms(rooms):
        save_json('rooms.json', rooms)

    @staticmethod
    def get_formulas():
        return load_json('formulas.json', DEFAULT_FORMULAS)

    @staticmethod
    def save_formulas(formulas):
        save_json('formulas.json', formulas)

    @staticmethod
    def get_readings():
        return load_json('readings.json', DEFAULT_READINGS)

    @staticmethod
    def save_readings(readings):
        save_json('readings.json', readings)

    @staticmethod
    def get_invoices():
        return load_json('invoices.json', [])

    @staticmethod
    def save_invoices(invoices):
        save_json('invoices.json', invoices)

    @staticmethod
    def get_tickets():
        return load_json('tickets.json', DEFAULT_TICKETS)

    @staticmethod
    def save_tickets(tickets):
        save_json('tickets.json', tickets)
