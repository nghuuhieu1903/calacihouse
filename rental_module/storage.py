import copy
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
        'role': 'superadmin',
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
    {"key": "manage_invoices",   "name": "Tạo và sửa hóa đơn (Xóa luôn chỉ dành riêng cho Admin)", "admin": True, "manager": False, "tenant": False},
    {"key": "view_all_tickets",  "name": "Xem tất cả báo lỗi (Tickets) các tòa nhà","admin": True, "manager": True,  "tenant": False},
    {"key": "manage_tickets",    "name": "Bình luận và trả lời báo lỗi (Tickets)",   "admin": True, "manager": True,  "tenant": False},
    {"key": "manage_rooms",      "name": "Quản lý phòng trọ - Thêm, Sửa (Xóa luôn chỉ dành riêng cho Admin)", "admin": True, "manager": False, "tenant": False},
    {"key": "manage_services",   "name": "Cấu hình dịch vụ & công thức (Xóa luôn chỉ dành riêng cho Admin)", "admin": True, "manager": False, "tenant": False},
    {"key": "manage_accounts",   "name": "Quản lý tài khoản người dùng (Xóa luôn chỉ dành riêng cho Admin)", "admin": True, "manager": False, "tenant": False},
    {"key": "manage_permissions","name": "Quản lý phân quyền hệ thống",              "admin": True, "manager": False, "tenant": False},
    {"key": "view_investor_report", "name": "Xem báo cáo chủ đầu tư",                "admin": True, "manager": False, "tenant": False}
]

DEFAULT_SITE_SETTINGS = {
    'siteName': 'CalaciHouse',
    'title': 'CalaciHouse - Hệ Thống Quản Lý Phòng Trọ',
    'description': 'Hệ thống Quản lý Phòng trọ & Hóa đơn Tự động',
    'keywords': '',
    'shareImage': '',
    'favicon': ''
}


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
        'roomType': row.get('room_type') or 'single',
        'elecFormula': row['elec_formula'] or '',
        'waterFormula': row['water_formula'] or '',
        'contractStart': row.get('contract_start') or '',
        'contractEnd': row.get('contract_end') or ''
    }

def _service(row):
    return {
        'id': row['id'],
        'houseId': row['house_id'] or '',
        'houseIds': json.loads(row['house_ids']) if row['house_ids'] else ['all'],
        'roomIds': json.loads(row['room_ids']) if row['room_ids'] else ['all'],
        'name': row['name'],
        'price': row['price'],
        'unit': row['unit'] or '',
        'icon': row['icon'] or '',
        'symbol': row['symbol'] or '📦',
        'calcType': row['calc_type'] or 'fixed',
        # Column is still named formula_id (avoids a migration) but now holds
        # the service's own inline expression string, e.g. "x*3500", instead
        # of a shared formula library id.
        'customFormula': row['formula_id'] or '',
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

def _investor_expense(row):
    return {
        'id': row['id'],
        'houseId': row['house_id'] or '',
        'month': row['month'] or '',
        'description': row['description'] or '',
        'amount': row['amount'] or 0,
        'createdAt': row['created_at'] or ''
    }

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
# Storage class — same public interface as before, now backed by MySQL
# ---------------------------------------------------------------------------

class Storage:

    # -- Generic KV helpers (readings, invoices, permissions) ---------------

    @staticmethod
    def _kv_get(key, default):
        conn = get_db()
        try:
            with conn.cursor() as cur:
                cur.execute("SELECT `value` FROM kv_store WHERE `key`=%s", (key,))
                row = cur.fetchone()
        finally:
            conn.close()
        if row:
            return json.loads(row['value'])
        return default

    @staticmethod
    def _kv_set(key, value):
        conn = get_db()
        try:
            with conn.cursor() as cur:
                cur.execute(
                    "REPLACE INTO kv_store (`key`, `value`) VALUES (%s,%s)",
                    (key, json.dumps(value, ensure_ascii=False))
                )
            conn.commit()
        finally:
            conn.close()

    @staticmethod
    def _kv_update(key, default, mutate):
        """Read-modify-write a kv_store value inside one locked transaction,
        so two near-simultaneous updates to the same key (e.g. saving a
        meter number then immediately uploading its photo) can't race —
        the second call blocks on `FOR UPDATE` until the first commits, then
        starts from its result instead of a stale read that would otherwise
        get overwritten back on top of it. `mutate(data)` returns the new
        value to store."""
        conn = get_db()
        try:
            with conn.cursor() as cur:
                cur.execute("SELECT `value` FROM kv_store WHERE `key`=%s FOR UPDATE", (key,))
                row = cur.fetchone()
                data = json.loads(row['value']) if row else copy.deepcopy(default)
                data = mutate(data)
                cur.execute(
                    "REPLACE INTO kv_store (`key`, `value`) VALUES (%s,%s)",
                    (key, json.dumps(data, ensure_ascii=False))
                )
            conn.commit()
            return data
        finally:
            conn.close()

    # -- Houses -------------------------------------------------------------

    @staticmethod
    def get_houses():
        conn = get_db()
        try:
            with conn.cursor() as cur:
                cur.execute("SELECT * FROM houses ORDER BY id")
                rows = cur.fetchall()
        finally:
            conn.close()
        result = [_house(r) for r in rows]
        # Show sample data for a genuinely empty table WITHOUT writing it —
        # persisting here means a single transient empty read (a connection
        # hiccup, a query racing table creation, ...) silently overwrites
        # real data with demo houses. It already happened once for services;
        # only an explicit save from the UI should ever create real rows.
        if not result:
            return DEFAULT_HOUSES
        return result

    @staticmethod
    def save_house(h):
        """Upserts this one row by primary key only — never touches any
        other row. An earlier version took the whole houses list and
        REPLACE INTO'd every row in it, which meant two admins saving
        near-simultaneously (or even just a request reading a slightly
        stale list) could silently overwrite each other's edit to a
        DIFFERENT house with old data. A single-row write can't clobber
        anything it doesn't touch."""
        conn = get_db()
        try:
            with conn.cursor() as cur:
                cur.execute(
                    "REPLACE INTO houses (id, name, address, description) VALUES (%s,%s,%s,%s)",
                    (h['id'], h.get('name', ''), h.get('address', ''), h.get('description', ''))
                )
            conn.commit()
        finally:
            conn.close()

    @staticmethod
    def delete_house(house_id):
        conn = get_db()
        try:
            with conn.cursor() as cur:
                cur.execute("DELETE FROM houses WHERE id=%s", (house_id,))
            conn.commit()
        finally:
            conn.close()

    # -- Users --------------------------------------------------------------

    @staticmethod
    def get_users():
        conn = get_db()
        try:
            with conn.cursor() as cur:
                cur.execute("SELECT * FROM users ORDER BY created_at")
                rows = cur.fetchall()
        finally:
            conn.close()
        result = [_user(r) for r in rows]
        if not result:
            return DEFAULT_USERS
        return result

    @staticmethod
    def save_user(u):
        """Upserts this one row by primary key only — see save_house() for
        why a single-row write matters here (two people editing different
        accounts back-to-back must not be able to revert each other)."""
        conn = get_db()
        try:
            with conn.cursor() as cur:
                cur.execute(
                    "REPLACE INTO users "
                    "(id, username, password, full_name, role, room_id, house_id, status, created_at) "
                    "VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s)",
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
        finally:
            conn.close()

    @staticmethod
    def create_user(u):
        """Plain INSERT, never REPLACE — creating a user must never silently
        delete-and-replace an existing row. `username` is a separate UNIQUE
        column from the primary-key `id`, so if two "create account" clicks
        for the same username land close enough together to both pass
        create_user_by_admin()'s own uniqueness check before either
        commits, a REPLACE INTO here would key off `id` (always distinct —
        freshly generated per request) and silently delete the first
        request's row to insert the second, erasing whatever the first
        user already had (role, room, status). A plain INSERT instead lets
        the table's own UNIQUE constraint reject the second one outright —
        raised to the caller as pymysql.err.IntegrityError."""
        conn = get_db()
        try:
            with conn.cursor() as cur:
                cur.execute(
                    "INSERT INTO users "
                    "(id, username, password, full_name, role, room_id, house_id, status, created_at) "
                    "VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s)",
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
        finally:
            conn.close()

    @staticmethod
    def delete_user(user_id):
        conn = get_db()
        try:
            with conn.cursor() as cur:
                cur.execute("DELETE FROM users WHERE id=%s", (user_id,))
            conn.commit()
        finally:
            conn.close()

    # -- Rooms --------------------------------------------------------------

    @staticmethod
    def get_rooms():
        conn = get_db()
        try:
            with conn.cursor() as cur:
                cur.execute("SELECT * FROM rooms ORDER BY id")
                rows = cur.fetchall()
        finally:
            conn.close()
        result = [_room(r) for r in rows]
        if not result:
            return DEFAULT_ROOMS
        return result

    @staticmethod
    def save_room(r):
        """Upserts this one row by primary key only — see save_house() for
        why a single-row write matters here."""
        conn = get_db()
        try:
            with conn.cursor() as cur:
                cur.execute(
                    "REPLACE INTO rooms "
                    "(id, house_id, name, tenant, phone, base_rent, headcount, room_type, elec_formula, water_formula, contract_start, contract_end) "
                    "VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)",
                    (
                        r['id'],
                        r.get('houseId', ''),
                        r.get('name', ''),
                        r.get('tenant', ''),
                        r.get('phone', ''),
                        r.get('baseRent', 0),
                        r.get('headcount', 1),
                        r.get('roomType', 'single'),
                        r.get('elecFormula', ''),
                        r.get('waterFormula', ''),
                        r.get('contractStart', ''),
                        r.get('contractEnd', '')
                    )
                )
            conn.commit()
        finally:
            conn.close()

    @staticmethod
    def delete_room(room_id):
        conn = get_db()
        try:
            with conn.cursor() as cur:
                cur.execute("DELETE FROM rooms WHERE id=%s", (room_id,))
            conn.commit()
        finally:
            conn.close()

    @staticmethod
    def update_room_contract(room_id, contract_start, contract_end):
        conn = get_db()
        try:
            with conn.cursor() as cur:
                cur.execute(
                    "UPDATE rooms SET contract_start=%s, contract_end=%s WHERE id=%s",
                    (contract_start or '', contract_end or '', room_id)
                )
            conn.commit()
        finally:
            conn.close()

    # -- Services -----------------------------------------------------------

    @staticmethod
    def get_services():
        conn = get_db()
        try:
            with conn.cursor() as cur:
                cur.execute("SELECT * FROM services ORDER BY house_id, id")
                rows = cur.fetchall()
        finally:
            conn.close()
        result = [_service(r) for r in rows]
        if not result:
            # Same shape _service() would produce, without a DB round-trip.
            return [{
                'id': s['id'], 'houseId': s.get('houseId', 'all'),
                'houseIds': [s['houseId']] if s.get('houseId') else ['all'],
                'roomIds': ['all'], 'name': s.get('name', ''), 'price': s.get('price', 0),
                'unit': s.get('unit', ''), 'icon': s.get('icon', ''), 'symbol': s.get('symbol', '📦'),
                'calcType': s.get('calcType', 'fixed'), 'customFormula': s.get('customFormula', ''),
                'applyRooms': []
            } for s in DEFAULT_SERVICES]
        return result

    @staticmethod
    def save_service(s):
        """Upserts this one row by primary key only — see save_house() for
        why a single-row write matters here. This specifically fixes the
        room-scope picker (Áp Dụng Cho Tòa Nhà & Phòng) "resetting itself":
        editing one service (e.g. water pricing for KTX rooms) right after
        editing another (e.g. water pricing for single rooms) used to be
        able to silently revert the first edit's room_ids back to its old
        value, since both saves rewrote every service row from whichever
        stale in-memory list each request happened to read first."""
        conn = get_db()
        try:
            with conn.cursor() as cur:
                cur.execute(
                    "REPLACE INTO services "
                    "(id, house_id, name, price, unit, icon, symbol, calc_type, formula_id, house_ids, room_ids, apply_rooms) "
                    "VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)",
                    (
                        s['id'],
                        s.get('houseId', ''),
                        s.get('name', ''),
                        s.get('price', 0),
                        s.get('unit', ''),
                        s.get('icon', ''),
                        s.get('symbol', '📦'),
                        s.get('calcType', 'fixed'),
                        s.get('customFormula') or '',
                        json.dumps(s.get('houseIds', ['all'])),
                        json.dumps(s.get('roomIds', ['all'])),
                        json.dumps(s.get('applyRooms', []))
                    )
                )
            conn.commit()
        finally:
            conn.close()

    @staticmethod
    def delete_service(service_id):
        conn = get_db()
        try:
            with conn.cursor() as cur:
                cur.execute("DELETE FROM services WHERE id=%s", (service_id,))
            conn.commit()
        finally:
            conn.close()

    # -- Formulas -----------------------------------------------------------

    @staticmethod
    def get_formulas():
        conn = get_db()
        try:
            with conn.cursor() as cur:
                cur.execute("SELECT * FROM formulas ORDER BY category, id")
                rows = cur.fetchall()
        finally:
            conn.close()
        result = [_formula(r) for r in rows]
        if not result:
            return DEFAULT_FORMULAS
        return result

    @staticmethod
    def save_formula(f):
        """Upserts this one row by primary key only — see save_house() for
        why a single-row write matters here."""
        conn = get_db()
        try:
            with conn.cursor() as cur:
                cur.execute(
                    "REPLACE INTO formulas "
                    "(id, name, type, rate, category, tiers_json) "
                    "VALUES (%s,%s,%s,%s,%s,%s)",
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
        finally:
            conn.close()

    @staticmethod
    def delete_formula(formula_id):
        conn = get_db()
        try:
            with conn.cursor() as cur:
                cur.execute("DELETE FROM formulas WHERE id=%s", (formula_id,))
            conn.commit()
        finally:
            conn.close()

    # -- Investor Expenses (installation/repair costs deducted before split) --

    @staticmethod
    def get_investor_expenses():
        conn = get_db()
        try:
            with conn.cursor() as cur:
                cur.execute("SELECT * FROM investor_expenses ORDER BY month DESC, created_at DESC")
                rows = cur.fetchall()
        finally:
            conn.close()
        return [_investor_expense(r) for r in rows]

    @staticmethod
    def save_investor_expense(e):
        """Upserts this one row by primary key only — see save_house() for
        why a single-row write matters here."""
        conn = get_db()
        try:
            with conn.cursor() as cur:
                cur.execute(
                    "REPLACE INTO investor_expenses "
                    "(id, house_id, month, description, amount, created_at) "
                    "VALUES (%s,%s,%s,%s,%s,%s)",
                    (
                        e['id'],
                        e.get('houseId', ''),
                        e.get('month', ''),
                        e.get('description', ''),
                        e.get('amount', 0),
                        e.get('createdAt', '')
                    )
                )
            conn.commit()
        finally:
            conn.close()

    @staticmethod
    def delete_investor_expense(expense_id):
        conn = get_db()
        try:
            with conn.cursor() as cur:
                cur.execute("DELETE FROM investor_expenses WHERE id=%s", (expense_id,))
            conn.commit()
        finally:
            conn.close()

    # -- Readings (complex nested dict → kv_store) --------------------------

    @staticmethod
    def get_readings():
        return Storage._kv_get('readings', DEFAULT_READINGS)

    @staticmethod
    def save_readings(readings):
        Storage._kv_set('readings', readings)

    @staticmethod
    def update_readings(mutate):
        """Locked read-modify-write variant of save_readings — see
        _kv_update for why this matters for readings specifically."""
        return Storage._kv_update('readings', DEFAULT_READINGS, mutate)

    # -- Invoices (list of complex objects → kv_store) ----------------------

    @staticmethod
    def get_invoices():
        return Storage._kv_get('invoices', [])

    @staticmethod
    def save_invoices(invoices):
        Storage._kv_set('invoices', invoices)

    @staticmethod
    def update_invoices(mutate):
        """Locked read-modify-write variant of save_invoices — same race as
        readings (see _kv_update). generate_all_invoices() replaces the
        whole list at once so it doesn't need this, but a single-invoice
        edit (e.g. marking one paid) does, since it can't be allowed to
        clobber a concurrent edit to a different invoice."""
        return Storage._kv_update('invoices', [], mutate)

    # -- Tickets ------------------------------------------------------------

    @staticmethod
    def get_tickets():
        conn = get_db()
        try:
            with conn.cursor() as cur:
                cur.execute("SELECT * FROM tickets ORDER BY timestamp DESC")
                rows = cur.fetchall()
        finally:
            conn.close()
        result = [_ticket(r) for r in rows]
        if not result:
            return DEFAULT_TICKETS
        return result

    @staticmethod
    def get_tickets_light():
        """Same rows as get_tickets() but without the embedded base64 photo
        attachments — used for the bulk /api/data payload so a ticket with
        several MB of photos doesn't get shipped on every page load.
        Call get_ticket_full() to fetch one ticket's full images/comments
        on demand (e.g. when its detail view is opened)."""
        conn = get_db()
        try:
            with conn.cursor() as cur:
                cur.execute("""
                    SELECT id, room_id, room_name, tenant, category, priority, description,
                           timestamp, status, response,
                           JSON_LENGTH(images_json) as images_count,
                           JSON_LENGTH(comments_json) as comments_count
                    FROM tickets ORDER BY timestamp DESC
                """)
                rows = cur.fetchall()
        finally:
            conn.close()
        if not rows:
            return [{
                'id': t['id'], 'roomId': t.get('roomId', ''), 'roomName': t.get('roomName', ''),
                'tenant': t.get('tenant', ''), 'category': t.get('category', ''), 'priority': t.get('priority', ''),
                'description': t.get('description', ''), 'timestamp': t.get('timestamp', ''),
                'status': t.get('status', ''), 'response': t.get('response', ''), 'comments': [], 'images': [],
                'imagesCount': len(t.get('images', [])), 'commentsCount': len(t.get('comments', []))
            } for t in DEFAULT_TICKETS]
        return [
            {
                'id': r['id'],
                'roomId': r['room_id'] or '',
                'roomName': r['room_name'] or '',
                'tenant': r['tenant'] or '',
                'category': r['category'] or '',
                'priority': r['priority'] or '',
                'description': r['description'] or '',
                'timestamp': r['timestamp'] or '',
                'status': r['status'] or '',
                'response': r['response'] or '',
                'comments': [],
                'images': [],
                'imagesCount': r['images_count'] or 0,
                'commentsCount': r['comments_count'] or 0
            }
            for r in rows
        ]

    @staticmethod
    def get_ticket_full(ticket_id):
        conn = get_db()
        try:
            with conn.cursor() as cur:
                cur.execute("SELECT * FROM tickets WHERE id=%s", (ticket_id,))
                row = cur.fetchone()
        finally:
            conn.close()
        return _ticket(row) if row else None

    @staticmethod
    def save_ticket(t):
        """Upserts this one row by primary key only — see save_house() for
        why a single-row write matters here. Also avoids create_ticket()
        having to round-trip every OTHER ticket's embedded photos just to
        insert one new row."""
        conn = get_db()
        try:
            with conn.cursor() as cur:
                cur.execute(
                    "REPLACE INTO tickets "
                    "(id, room_id, room_name, tenant, category, priority, description, "
                    " timestamp, status, response, comments_json, images_json) "
                    "VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)",
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
        finally:
            conn.close()

    @staticmethod
    def update_ticket_reply(ticket_id, status, response, comments):
        """Targeted update for the reply flow — only touches status/
        response/comments, so it can't clobber the ticket's own
        category/description/images even if this request's caller never
        read them (it doesn't need to)."""
        conn = get_db()
        try:
            with conn.cursor() as cur:
                cur.execute(
                    "UPDATE tickets SET status=%s, response=%s, comments_json=%s WHERE id=%s",
                    (status or '', response or '', json.dumps(comments, ensure_ascii=False), ticket_id)
                )
            conn.commit()
        finally:
            conn.close()

    @staticmethod
    def delete_ticket(ticket_id):
        conn = get_db()
        try:
            with conn.cursor() as cur:
                cur.execute("DELETE FROM tickets WHERE id=%s", (ticket_id,))
            conn.commit()
        finally:
            conn.close()

    # -- Permissions (simple list → kv_store) -------------------------------

    @staticmethod
    def get_permissions():
        return Storage._kv_get('permissions', DEFAULT_PERMISSIONS)

    @staticmethod
    def save_permissions(permissions):
        Storage._kv_set('permissions', permissions)

    # -- Site Settings (page title/SEO/branding — one global object) --------

    @staticmethod
    def get_site_settings():
        return Storage._kv_get('site_settings', DEFAULT_SITE_SETTINGS)

    @staticmethod
    def save_site_settings(settings):
        Storage._kv_set('site_settings', settings)

    # -- Room Documents (contract & related images, keyed by roomId) --------

    @staticmethod
    def get_room_documents():
        return Storage._kv_get('room_documents', {})

    @staticmethod
    def save_room_documents(documents):
        Storage._kv_set('room_documents', documents)

    @staticmethod
    def update_room_documents(mutate):
        """Locked read-modify-write variant of save_room_documents — same
        race as readings (see _kv_update): uploading several contract
        photos back-to-back for the same room fires overlapping requests
        that would otherwise clobber each other's saved document."""
        return Storage._kv_update('room_documents', {}, mutate)
