import json
from .database import get_db

# ---------------------------------------------------------------------------
# DEFAULT seed data — used when the database is empty on first run
# ---------------------------------------------------------------------------

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
        'houseId': '',
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
        'houseId': '',
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
        'houseId': '',
        'status': 'approved',
        'createdAt': '2026-08-01 11:00'
    },
    {
        'id': 'usr_investor_a',
        'username': 'chudautu_a',
        'password': '123',
        'fullName': 'Nhà Đầu Tư - Tòa A',
        'role': 'investor',
        'roomId': '',
        'houseId': 'house_a',
        'status': 'approved',
        'createdAt': '2026-08-01 09:30'
    }
]

DEFAULT_SERVICES = [
    {'id': 'srv_wifi_a',    'houseId': 'house_a', 'name': 'Internet / Wifi cáp quang A',    'price': 100000, 'unit': 'Cố định / phòng'},
    {'id': 'srv_trash_a',   'houseId': 'house_a', 'name': 'Vệ sinh & Thu gom Rác A',         'price':  30000, 'unit': 'Theo đầu người'},
    {'id': 'srv_parking_a', 'houseId': 'house_a', 'name': 'Phí Gửi Xe Máy A',               'price':  50000, 'unit': 'Cố định / phòng'},
    {'id': 'srv_wifi_b',    'houseId': 'house_b', 'name': 'Internet Tốc Độ Cao B',           'price': 120000, 'unit': 'Cố định / phòng'},
    {'id': 'srv_elevator_b','houseId': 'house_b', 'name': 'Phí Thẻ Thang Máy B',            'price':  40000, 'unit': 'Theo đầu người'},
    {'id': 'srv_trash_b',   'houseId': 'house_b', 'name': 'Thu Gom Rác & Vệ Sinh B',        'price':  25000, 'unit': 'Theo đầu người'}
]

DEFAULT_FORMULAS = [
    {'id': 'elec_flat_3500',   'name': 'Điện Cố Định (3,500đ / kWh)',          'type': 'flat',      'rate': 3500,   'category': 'elec'},
    {'id': 'elec_flat_4000',   'name': 'Điện Kinh Doanh (4,000đ / kWh)',       'type': 'flat',      'rate': 4000,   'category': 'elec'},
    {'id': 'elec_evn_tiered',  'name': 'Điện Bậc Thang EVN Sinh Hoạt',         'type': 'tiered',    'rate': 0,      'category': 'elec',
     'tiers': [
         {'max': 50,    'rate': 1893},
         {'max': 100,   'rate': 1956},
         {'max': 200,   'rate': 2271},
         {'max': 300,   'rate': 2860},
         {'max': 'inf', 'rate': 3197}
     ]},
    {'id': 'water_flat_18000',      'name': 'Nước Theo Khối (18,000đ / m³)',           'type': 'flat',      'rate': 18000,  'category': 'water'},
    {'id': 'water_headcount_100k',  'name': 'Nước Khoán Đầu Người (100k / người)',     'type': 'headcount', 'rate': 100000, 'category': 'water'}
]

DEFAULT_ROOMS = [
    {'id': 'R101', 'houseId': 'house_a', 'name': 'Phòng 101 (Tòa A)', 'tenant': 'Nguyễn Văn An',  'phone': '0901234567', 'baseRent': 3500000, 'headcount': 2, 'elecFormula': 'elec_flat_3500',  'waterFormula': 'water_flat_18000'},
    {'id': 'R102', 'houseId': 'house_a', 'name': 'Phòng 102 (Tòa A)', 'tenant': 'Trần Thị Bích',  'phone': '0912345678', 'baseRent': 4000000, 'headcount': 3, 'elecFormula': 'elec_evn_tiered', 'waterFormula': 'water_flat_18000'},
    {'id': 'R201', 'houseId': 'house_b', 'name': 'Phòng 201 (Tòa B)', 'tenant': 'Lê Hoàng Nam',   'phone': '0987654321', 'baseRent': 3800000, 'headcount': 1, 'elecFormula': 'elec_flat_3500',  'waterFormula': 'water_headcount_100k'},
    {'id': 'R202', 'houseId': 'house_b', 'name': 'Phòng 202 (Tòa B)', 'tenant': 'Phạm Minh Tuấn', 'phone': '0934567890', 'baseRent': 4200000, 'headcount': 2, 'elecFormula': 'elec_flat_4000',  'waterFormula': 'water_flat_18000'}
]

DEFAULT_READINGS = {
    '2026-08': {
        'R101': {'elecOld': 1240, 'elecNew': 1395, 'waterOld': 145, 'waterNew': 157, 'elecFormula': 'elec_flat_3500',  'waterFormula': 'water_flat_18000'},
        'R102': {'elecOld': 2100, 'elecNew': 2320, 'waterOld': 310, 'waterNew': 328, 'elecFormula': 'elec_evn_tiered', 'waterFormula': 'water_flat_18000'},
        'R201': {'elecOld':  980, 'elecNew': 1075, 'waterOld':  85, 'waterNew':  85, 'elecFormula': 'elec_flat_3500',  'waterFormula': 'water_headcount_100k'},
        'R202': {'elecOld': 1850, 'elecNew': 2030, 'waterOld': 240, 'waterNew': 258, 'elecFormula': 'elec_flat_4000',  'waterFormula': 'water_flat_18000'}
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
        'response': '',
        'images': [],
        'comments': []
    }
]

DEFAULT_PERMISSIONS = [
    {"key": "view_all_invoices", "name": "Xem tất cả hóa đơn các tòa nhà",          "admin": True, "manager": True,  "tenant": False},
    {"key": "manage_invoices",   "name": "Tạo, sửa và xóa hóa đơn",                 "admin": True, "manager": False, "tenant": False},
    {"key": "view_all_tickets",  "name": "Xem tất cả báo lỗi (Tickets) các tòa nhà","admin": True, "manager": True,  "tenant": False},
    {"key": "manage_tickets",    "name": "Bình luận và trả lời báo lỗi (Tickets)",   "admin": True, "manager": True,  "tenant": False},
    {"key": "manage_rooms",      "name": "Quản lý phòng trọ (Thêm, Sửa, Xóa)",      "admin": True, "manager": False, "tenant": False},
    {"key": "manage_services",   "name": "Cấu hình dịch vụ & công thức",             "admin": True, "manager": False, "tenant": False},
    {"key": "manage_accounts",   "name": "Quản lý tài khoản người dùng",             "admin": True, "manager": False, "tenant": False},
    {"key": "manage_permissions","name": "Quản lý phân quyền hệ thống",              "admin": True, "manager": False, "tenant": False}
]


# ---------------------------------------------------------------------------
# Row → dict converters (DB column names are snake_case, app uses camelCase)
# ---------------------------------------------------------------------------

def _house(row):
    return {
        'id': row['id'],
        'name': row['name'],
        'address': row['address'] or '',
        'description': row['description'] or ''
    }

def _user(row):
    return {
        'id': row['id'],
        'username': row['username'],
        'password': row['password'],
        'fullName': row['full_name'],
        'role': row['role'],
        'roomId': row['room_id'] or '',
        'houseId': row['house_id'] or '',
        'status': row['status'],
        'createdAt': row['created_at'] or ''
    }

def _room(row):
    return {
        'id': row['id'],
        'houseId': row['house_id'] or '',
        'name': row['name'],
        'tenant': row['tenant'] or '',
        'phone': row['phone'] or '',
        'baseRent': row['base_rent'],
        'headcount': row['headcount'],
        'elecFormula': row['elec_formula'] or '',
        'waterFormula': row['water_formula'] or ''
    }

def _service(row):
    return {
        'id': row['id'],
        'houseId': row['house_id'] or '',
        'name': row['name'],
        'price': row['price'],
        'unit': row['unit'] or '',
        'icon': row['icon'] or '',
        'applyRooms': json.loads(row['apply_rooms']) if row['apply_rooms'] else []
    }

def _formula(row):
    f = {
        'id': row['id'],
        'name': row['name'],
        'type': row['type'] or '',
        'rate': row['rate'],
        'category': row['category'] or ''
    }
    if row['tiers_json']:
        f['tiers'] = json.loads(row['tiers_json'])
    return f

def _ticket(row):
    return {
        'id': row['id'],
        'roomId': row['room_id'] or '',
        'roomName': row['room_name'] or '',
        'tenant': row['tenant'] or '',
        'category': row['category'] or '',
        'priority': row['priority'] or '',
        'description': row['description'] or '',
        'timestamp': row['timestamp'] or '',
        'status': row['status'] or '',
        'response': row['response'] or '',
        'comments': json.loads(row['comments_json']) if row['comments_json'] else [],
        'images': json.loads(row['images_json']) if row['images_json'] else []
    }


# ---------------------------------------------------------------------------
# Storage class — same public interface as before, now backed by SQLite
# ---------------------------------------------------------------------------

class Storage:

    # -- Generic KV helpers (readings, invoices, permissions) ---------------

    @staticmethod
    def _kv_get(key, default):
        conn = get_db()
        row = conn.execute("SELECT value FROM kv_store WHERE key=?", (key,)).fetchone()
        conn.close()
        if row:
            return json.loads(row['value'])
        return default

    @staticmethod
    def _kv_set(key, value):
        conn = get_db()
        conn.execute(
            "INSERT OR REPLACE INTO kv_store (key, value) VALUES (?,?)",
            (key, json.dumps(value, ensure_ascii=False))
        )
        conn.commit()
        conn.close()

    # -- Houses -------------------------------------------------------------

    @staticmethod
    def get_houses():
        conn = get_db()
        rows = conn.execute("SELECT * FROM houses ORDER BY id").fetchall()
        conn.close()
        result = [_house(r) for r in rows]
        if not result:
            Storage.save_houses(DEFAULT_HOUSES)
            return DEFAULT_HOUSES
        return result

    @staticmethod
    def save_houses(houses):
        conn = get_db()
        conn.execute("DELETE FROM houses")
        for h in houses:
            conn.execute(
                "INSERT OR REPLACE INTO houses (id, name, address, description) VALUES (?,?,?,?)",
                (h['id'], h.get('name', ''), h.get('address', ''), h.get('description', ''))
            )
        conn.commit()
        conn.close()

    # -- Users --------------------------------------------------------------

    @staticmethod
    def get_users():
        conn = get_db()
        rows = conn.execute("SELECT * FROM users ORDER BY created_at").fetchall()
        conn.close()
        result = [_user(r) for r in rows]
        if not result:
            Storage.save_users(DEFAULT_USERS)
            return DEFAULT_USERS
        return result

    @staticmethod
    def save_users(users):
        conn = get_db()
        conn.execute("DELETE FROM users")
        for u in users:
            conn.execute(
                "INSERT OR REPLACE INTO users "
                "(id, username, password, full_name, role, room_id, house_id, status, created_at) "
                "VALUES (?,?,?,?,?,?,?,?,?)",
                (
                    u['id'],
                    u['username'],
                    u.get('password', ''),
                    u.get('fullName', ''),
                    u.get('role', 'tenant'),
                    u.get('roomId', ''),
                    u.get('houseId', ''),
                    u.get('status', 'pending'),
                    u.get('createdAt', '')
                )
            )
        conn.commit()
        conn.close()

    # -- Rooms --------------------------------------------------------------

    @staticmethod
    def get_rooms():
        conn = get_db()
        rows = conn.execute("SELECT * FROM rooms ORDER BY id").fetchall()
        conn.close()
        result = [_room(r) for r in rows]
        if not result:
            Storage.save_rooms(DEFAULT_ROOMS)
            return DEFAULT_ROOMS
        return result

    @staticmethod
    def save_rooms(rooms):
        conn = get_db()
        conn.execute("DELETE FROM rooms")
        for r in rooms:
            conn.execute(
                "INSERT OR REPLACE INTO rooms "
                "(id, house_id, name, tenant, phone, base_rent, headcount, elec_formula, water_formula) "
                "VALUES (?,?,?,?,?,?,?,?,?)",
                (
                    r['id'],
                    r.get('houseId', ''),
                    r.get('name', ''),
                    r.get('tenant', ''),
                    r.get('phone', ''),
                    r.get('baseRent', 0),
                    r.get('headcount', 1),
                    r.get('elecFormula', ''),
                    r.get('waterFormula', '')
                )
            )
        conn.commit()
        conn.close()

    # -- Services -----------------------------------------------------------

    @staticmethod
    def get_services():
        conn = get_db()
        rows = conn.execute("SELECT * FROM services ORDER BY house_id, id").fetchall()
        conn.close()
        result = [_service(r) for r in rows]
        if not result:
            Storage.save_services(DEFAULT_SERVICES)
            return DEFAULT_SERVICES
        return result

    @staticmethod
    def save_services(services):
        conn = get_db()
        conn.execute("DELETE FROM services")
        for s in services:
            conn.execute(
                "INSERT OR REPLACE INTO services "
                "(id, house_id, name, price, unit, icon, apply_rooms) "
                "VALUES (?,?,?,?,?,?,?)",
                (
                    s['id'],
                    s.get('houseId', ''),
                    s.get('name', ''),
                    s.get('price', 0),
                    s.get('unit', ''),
                    s.get('icon', ''),
                    json.dumps(s.get('applyRooms', []))
                )
            )
        conn.commit()
        conn.close()

    # -- Formulas -----------------------------------------------------------

    @staticmethod
    def get_formulas():
        conn = get_db()
        rows = conn.execute("SELECT * FROM formulas ORDER BY category, id").fetchall()
        conn.close()
        result = [_formula(r) for r in rows]
        if not result:
            Storage.save_formulas(DEFAULT_FORMULAS)
            return DEFAULT_FORMULAS
        return result

    @staticmethod
    def save_formulas(formulas):
        conn = get_db()
        conn.execute("DELETE FROM formulas")
        for f in formulas:
            conn.execute(
                "INSERT OR REPLACE INTO formulas "
                "(id, name, type, rate, category, tiers_json) "
                "VALUES (?,?,?,?,?,?)",
                (
                    f['id'],
                    f.get('name', ''),
                    f.get('type', ''),
                    f.get('rate', 0),
                    f.get('category', ''),
                    json.dumps(f['tiers']) if 'tiers' in f else None
                )
            )
        conn.commit()
        conn.close()

    # -- Readings (complex nested dict → kv_store) --------------------------

    @staticmethod
    def get_readings():
        return Storage._kv_get('readings', DEFAULT_READINGS)

    @staticmethod
    def save_readings(readings):
        Storage._kv_set('readings', readings)

    # -- Invoices (list of complex objects → kv_store) ----------------------

    @staticmethod
    def get_invoices():
        return Storage._kv_get('invoices', [])

    @staticmethod
    def save_invoices(invoices):
        Storage._kv_set('invoices', invoices)

    # -- Tickets ------------------------------------------------------------

    @staticmethod
    def get_tickets():
        conn = get_db()
        rows = conn.execute(
            "SELECT * FROM tickets ORDER BY timestamp DESC"
        ).fetchall()
        conn.close()
        result = [_ticket(r) for r in rows]
        if not result:
            Storage.save_tickets(DEFAULT_TICKETS)
            return DEFAULT_TICKETS
        return result

    @staticmethod
    def save_tickets(tickets):
        conn = get_db()
        conn.execute("DELETE FROM tickets")
        for t in tickets:
            conn.execute(
                "INSERT OR REPLACE INTO tickets "
                "(id, room_id, room_name, tenant, category, priority, description, "
                " timestamp, status, response, comments_json, images_json) "
                "VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
                (
                    t['id'],
                    t.get('roomId', ''),
                    t.get('roomName', ''),
                    t.get('tenant', ''),
                    t.get('category', ''),
                    t.get('priority', ''),
                    t.get('description', ''),
                    t.get('timestamp', ''),
                    t.get('status', ''),
                    t.get('response', ''),
                    json.dumps(t.get('comments', []), ensure_ascii=False),
                    json.dumps(t.get('images', []),   ensure_ascii=False)
                )
            )
        conn.commit()
        conn.close()

    # -- Permissions (simple list → kv_store) -------------------------------

    @staticmethod
    def get_permissions():
        return Storage._kv_get('permissions', DEFAULT_PERMISSIONS)

    @staticmethod
    def save_permissions(permissions):
        Storage._kv_set('permissions', permissions)

    # -- Room Documents (contract & related images, keyed by roomId) --------

    @staticmethod
    def get_room_documents():
        return Storage._kv_get('room_documents', {})

    @staticmethod
    def save_room_documents(documents):
        Storage._kv_set('room_documents', documents)
