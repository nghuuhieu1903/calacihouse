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
        'description': 'Tòa nhà 5 tầng, có thang máy & bảo vệ 24/7',
        'managerFee': {'mode': 'percent', 'value': 20}
    },
    {
        'id': 'house_b',
        'name': 'Tòa Nhà B - Bình Thạnh',
        'address': '45 Điện Biên Phủ, Phường 15, Bình Thạnh, TP.HCM',
        'description': 'Dãy nhà trọ cao cấp gần trường Đại học',
        'managerFee': {'mode': 'percent', 'value': 20}
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

# Meter-photo field names — shared by readings (per room/month) and
# invoices (their own copy, taken at generation time). See
# Storage.get_readings_light()/get_invoices_light() for why these get
# stripped out of the bulk /api/data payload.
READING_PHOTO_FIELDS = ('elecOldPhoto', 'elecNewPhoto', 'waterOldPhoto', 'waterNewPhoto')

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


# Feature x action(view/create/edit/delete) x role matrix — replaces the old
# one-flat-checkbox-per-function shape. Delete isn't stored per role: it's
# always superadmin-only everywhere (a fixed rule going back to the original
# 5-role design, unrelated to this matrix), so it isn't a togglable value
# here at all — the UI shows it locked, not editable. Admin/superadmin
# aren't stored either: admin is unconditionally full access except delete
# (hasPermission()/permission_required() special-case this), superadmin is
# unconditionally everything. Only manager/investor/tenant are configurable.
# investor_report has no create/edit — it's a read-only report, not a
# feature with records to add/change.
DEFAULT_PERMISSIONS = [
    {
        "key": "houses", "name": "Tòa Nhà",
        "manager":  {"view": True,  "create": False, "edit": False},
        "investor": {"view": False, "create": False, "edit": False},
        "tenant":   {"view": False, "create": False, "edit": False}
    },
    {
        "key": "rooms", "name": "Phòng",
        "manager":  {"view": True,  "create": False, "edit": False},
        "investor": {"view": False, "create": False, "edit": False},
        "tenant":   {"view": False, "create": False, "edit": False}
    },
    {
        "key": "services", "name": "Dịch Vụ & Công Thức",
        "manager":  {"view": True,  "create": False, "edit": False},
        "investor": {"view": False, "create": False, "edit": False},
        "tenant":   {"view": False, "create": False, "edit": False}
    },
    {
        "key": "invoices", "name": "Hóa Đơn",
        "manager":  {"view": True,  "create": False, "edit": False},
        "investor": {"view": False, "create": False, "edit": False},
        "tenant":   {"view": False, "create": False, "edit": False}
    },
    {
        # Deliberately separate from "services" — that key also gates
        # editing service/formula definitions, which Manager must not get
        # just to be able to submit a meter photo. Scoped to only the
        # dedicated Cập Nhật Ảnh Số Điện page's elecNew number + photo.
        "key": "meter_readings", "name": "Cập Nhật Ảnh Số Điện (Quản Lý)",
        "manager":  {"view": True,  "create": False, "edit": True},
        "investor": {"view": False, "create": False, "edit": False},
        "tenant":   {"view": False, "create": False, "edit": False}
    },
    {
        "key": "tickets", "name": "Báo Lỗi (Tickets)",
        "manager":  {"view": True,  "create": False, "edit": True},
        "investor": {"view": False, "create": False, "edit": False},
        "tenant":   {"view": False, "create": False, "edit": False}
    },
    {
        "key": "accounts", "name": "Tài Khoản Người Dùng",
        "manager":  {"view": False, "create": False, "edit": False},
        "investor": {"view": False, "create": False, "edit": False},
        "tenant":   {"view": False, "create": False, "edit": False}
    },
    {
        "key": "investor_expenses", "name": "Chi Phí Đầu Tư (lắp đặt/sửa chữa)",
        "manager":  {"view": False, "create": False, "edit": False},
        "investor": {"view": False, "create": False, "edit": False},
        "tenant":   {"view": False, "create": False, "edit": False}
    },
    {
        "key": "investor_report", "name": "Báo Cáo Chủ Đầu Tư",
        "manager":  {"view": False},
        "investor": {"view": False},
        "tenant":   {"view": False}
    }
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
        'description': row['description'] or '',
        'managerFee': {
            'mode': row.get('manager_fee_mode') or 'percent',
            'value': row.get('manager_fee_value') if row.get('manager_fee_value') is not None else 20
        }
    }

def _user(row):
    # house_ids is the source of truth for an investor's access (a list —
    # possibly ['all'], possibly several specific house ids). house_id is
    # kept in sync as houseIds[0] purely for older code paths that haven't
    # been migrated to the array; a row saved before multi-house support
    # existed has no house_ids at all, so fall back to wrapping the old
    # single house_id instead of losing that account's access.
    house_ids = json.loads(row['house_ids']) if row.get('house_ids') else ([row['house_id']] if row['house_id'] else [])
    return {
        'id': row['id'],
        'username': row['username'],
        'password': row['password'],
        'fullName': row['full_name'],
        'role': row['role'],
        'roomId': row['room_id'] or '',
        'houseId': row['house_id'] or '',
        'houseIds': house_ids,
        'hasVehicle': bool(row.get('has_vehicle')),
        # KTX/dorm-only, per-occupant — see database.py's migration
        # comment. vehicleServiceId empty means "no vehicle"; a value is
        # the id of whichever configured parking-fee service this
        # person's vehicle counts against.
        'vehicleServiceId': row.get('vehicle_service_id') or '',
        'contractStart': row.get('contract_start') or '',
        'contractEnd': row.get('contract_end') or '',
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
        'contractEnd': row.get('contract_end') or '',
        'area': row.get('area') or 0,
        'description': row.get('description') or '',
        # Total bed capacity for a dorm room — purely informational (e.g.
        # so an admin/saler can see how many spots are free), never fed
        # into rent/service/electricity math. That still uses `headcount`
        # (how many people currently live there), unchanged.
        'capacity': row.get('capacity') or 0,
        # Deposit — the basis for the saler commission calculation
        # (commission = deposit x global commission %). Public info shown
        # to salers alongside rent/services, same as baseRent.
        'deposit': row.get('deposit') or 0,
        # Number of vehicles parked by this room, for the "Theo xe / tháng"
        # service unit (price × vehicleCount). Directly editable for a
        # single room; for a dorm room this raw value gets overridden by
        # RentalService._apply_dorm_vehicle_counts() with a live count of
        # residents individually marked "có gửi xe" instead.
        'vehicleCount': row.get('vehicle_count') or 0
    }

def _default_investor_share(name, calc_type):
    """A service saved before the investor-share feature existed has no
    stored value at all — fall back to whatever the OLD hardcoded investor
    report formula did for that kind of service, so nothing already being
    shared with an investor silently drops to 0 the moment this ships:
    electricity was always excluded ("đã được quản lý xử lý riêng"), water
    was always shared at a flat 50%, and every other (fixed-price) service
    was fully included via the old lump-sum "otherFees" total."""
    is_electricity = calc_type == 'formula' and 'điện' in (name or '').lower()
    if is_electricity:
        return {'enabled': False, 'mode': 'full', 'value': 0}
    is_water_formula = calc_type == 'formula'
    if is_water_formula:
        return {'enabled': True, 'mode': 'percent', 'value': 50}
    return {'enabled': True, 'mode': 'full', 'value': 0}


def _service(row):
    investor_share = json.loads(row['investor_share']) if row.get('investor_share') else None
    if investor_share is None:
        investor_share = _default_investor_share(row['name'], row['calc_type'] or 'fixed')
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
        'applyRooms': json.loads(row['apply_rooms']) if row['apply_rooms'] else [],
        'investorShare': investor_share
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
    # name is the short investor-facing title (added after description
    # already existed) — an expense saved before this existed has no name
    # at all, so fall back to its description rather than showing a blank
    # line item to the investor.
    return {
        'id': row['id'],
        'houseId': row['house_id'] or '',
        'month': row['month'] or '',
        'name': row.get('name') or row['description'] or '',
        'description': row['description'] or '',
        'amount': row['amount'] or 0,
        # photos_json is the real, current list — a row saved before
        # multi-photo support existed only has the old single `photo`
        # column, wrapped into a one-item list instead of being dropped.
        'photos': json.loads(row['photos_json']) if row.get('photos_json') else ([row['photo']] if row.get('photo') else []),
        'createdAt': row['created_at'] or ''
    }

def _investor_report_override(row):
    return {
        'id': row['id'],
        'houseId': row['house_id'] or '',
        'month': row['month'] or '',
        'amount': row['amount'] or 0,
        'note': row['note'] or '',
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
                cur.execute("SELECT * FROM houses ORDER BY sort_order ASC, id ASC")
                rows = cur.fetchall()
        finally:
            conn.close()
        result = [_house(r) for r in rows]
        # Used to fall back to DEFAULT_HOUSES here on an empty result,
        # reasoning that not WRITING it kept it safe — but a transient
        # empty read (a connection hiccup, a query racing table creation,
        # ...) still meant this one request silently handed back demo
        # houses in place of the real ones, which the frontend then
        # displays as if it were real, no error anywhere. This is
        # confirmed to have actually happened for services (silently
        # replacing the admin's real configured services with the 5 demo
        # ones for however long the transient condition lasted) — an
        # honestly-empty result at least renders as an obvious "chưa có
        # dữ liệu" empty state instead of convincingly wrong data.
        return result

    @staticmethod
    def save_house(h):
        """Upserts this one row by primary key only — never touches any
        other row. An earlier version took the whole houses list and
        REPLACE INTO'd every row in it, which meant two admins saving
        near-simultaneously (or even just a request reading a slightly
        stale list) could silently overwrite each other's edit to a
        DIFFERENT house with old data. A single-row write can't clobber
        anything it doesn't touch.

        INSERT .. ON DUPLICATE KEY UPDATE instead of REPLACE INTO on
        purpose: REPLACE is a DELETE+INSERT under the hood, so a plain
        REPLACE with an explicit column list resets every OTHER column —
        sort_order included — back to its table default on every single
        edit. ON DUPLICATE KEY UPDATE only ever touches the columns listed
        in its own clause, so an existing house's manually-set position
        survives editing its name/address exactly like every other column
        not being touched here."""
        conn = get_db()
        try:
            with conn.cursor() as cur:
                fee = h.get('managerFee') or {}
                cur.execute("SELECT COALESCE(MAX(sort_order), -1) AS m FROM houses")
                next_order = cur.fetchone()['m'] + 1
                cur.execute(
                    "INSERT INTO houses (id, name, address, description, manager_fee_mode, manager_fee_value, sort_order) "
                    "VALUES (%s,%s,%s,%s,%s,%s,%s) "
                    "ON DUPLICATE KEY UPDATE name=VALUES(name), address=VALUES(address), description=VALUES(description), "
                    "manager_fee_mode=VALUES(manager_fee_mode), manager_fee_value=VALUES(manager_fee_value)",
                    (
                        h['id'], h.get('name', ''), h.get('address', ''), h.get('description', ''),
                        fee.get('mode', 'percent'), fee.get('value', 20), next_order
                    )
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

    @staticmethod
    def set_houses_order(house_ids):
        """Persists a manually-dragged/arrow-reordered house list — each
        id's position in the given list becomes its sort_order."""
        conn = get_db()
        try:
            with conn.cursor() as cur:
                for idx, hid in enumerate(house_ids):
                    cur.execute("UPDATE houses SET sort_order=%s WHERE id=%s", (idx, hid))
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
        # See get_houses() for why this no longer falls back to
        # DEFAULT_USERS on an empty result — doubly so here, since that
        # fallback included hardcoded demo login credentials.
        return [_user(r) for r in rows]

    @staticmethod
    def save_user(u):
        """Upserts this one row by primary key only — see save_house() for
        why a single-row write matters here (two people editing different
        accounts back-to-back must not be able to revert each other)."""
        conn = get_db()
        try:
            with conn.cursor() as cur:
                house_ids = u.get('houseIds') or ([u['houseId']] if u.get('houseId') else [])
                cur.execute(
                    "REPLACE INTO users "
                    "(id, username, password, full_name, role, room_id, house_id, house_ids, has_vehicle, "
                    "vehicle_service_id, contract_start, contract_end, status, created_at) "
                    "VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)",
                    (
                        u['id'],
                        u['username'],
                        u.get('password', ''),
                        u.get('fullName', ''),
                        u.get('role', 'tenant'),
                        u.get('roomId', ''),
                        house_ids[0] if house_ids else '',
                        json.dumps(house_ids),
                        1 if u.get('hasVehicle') else 0,
                        u.get('vehicleServiceId', ''),
                        u.get('contractStart', ''),
                        u.get('contractEnd', ''),
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
                house_ids = u.get('houseIds') or ([u['houseId']] if u.get('houseId') else [])
                cur.execute(
                    "INSERT INTO users "
                    "(id, username, password, full_name, role, room_id, house_id, house_ids, has_vehicle, "
                    "vehicle_service_id, contract_start, contract_end, status, created_at) "
                    "VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)",
                    (
                        u['id'],
                        u['username'],
                        u.get('password', ''),
                        u.get('fullName', ''),
                        u.get('role', 'tenant'),
                        u.get('roomId', ''),
                        house_ids[0] if house_ids else '',
                        json.dumps(house_ids),
                        1 if u.get('hasVehicle') else 0,
                        u.get('vehicleServiceId', ''),
                        u.get('contractStart', ''),
                        u.get('contractEnd', ''),
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
                cur.execute("SELECT * FROM rooms ORDER BY sort_order ASC, id ASC")
                rows = cur.fetchall()
        finally:
            conn.close()
        # See get_houses() for why this no longer falls back to
        # DEFAULT_ROOMS on an empty result.
        return [_room(r) for r in rows]

    @staticmethod
    def save_room(r):
        """Upserts this one row by primary key only — see save_house() for
        why a single-row write matters here, and why this is ON DUPLICATE
        KEY UPDATE rather than REPLACE INTO now (a REPLACE would silently
        reset sort_order back to 0 on every edit, since it isn't one of
        the columns this statement itself sets)."""
        conn = get_db()
        try:
            with conn.cursor() as cur:
                cur.execute("SELECT COALESCE(MAX(sort_order), -1) AS m FROM rooms")
                next_order = cur.fetchone()['m'] + 1
                cur.execute(
                    "INSERT INTO rooms "
                    "(id, house_id, name, tenant, phone, base_rent, headcount, room_type, elec_formula, water_formula, contract_start, contract_end, area, description, capacity, deposit, vehicle_count, sort_order) "
                    "VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s) "
                    "ON DUPLICATE KEY UPDATE house_id=VALUES(house_id), name=VALUES(name), tenant=VALUES(tenant), "
                    "phone=VALUES(phone), base_rent=VALUES(base_rent), headcount=VALUES(headcount), room_type=VALUES(room_type), "
                    "elec_formula=VALUES(elec_formula), water_formula=VALUES(water_formula), contract_start=VALUES(contract_start), "
                    "contract_end=VALUES(contract_end), area=VALUES(area), description=VALUES(description), capacity=VALUES(capacity), "
                    "deposit=VALUES(deposit), vehicle_count=VALUES(vehicle_count)",
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
                        r.get('contractEnd', ''),
                        r.get('area', 0),
                        r.get('description', ''),
                        r.get('capacity', 0),
                        r.get('deposit', 0),
                        r.get('vehicleCount', 0),
                        next_order
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
    def set_rooms_order(room_ids):
        """Persists a manually-dragged/arrow-reordered room list. The list
        passed in is always the FULL flattened order (every house's rooms,
        in house order, then room order within it) — a plain sort_order
        ASC on rooms alone already reproduces that exact nesting anywhere
        else rooms are listed (invoices, Bảng Tính, ...), no need to also
        sort by the room's house's own position at read time."""
        conn = get_db()
        try:
            with conn.cursor() as cur:
                for idx, rid in enumerate(room_ids):
                    cur.execute("UPDATE rooms SET sort_order=%s WHERE id=%s", (idx, rid))
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
                cur.execute("SELECT * FROM services ORDER BY sort_order ASC, id ASC")
                rows = cur.fetchall()
        finally:
            conn.close()
        # See get_houses() for why this no longer falls back to
        # DEFAULT_SERVICES on an empty result — this exact fallback is
        # the confirmed cause of configured services (Điện/Nước/Xe máy/
        # any custom one) silently vanishing from Cấu Hình Dịch Vụ &
        # Bảng Tính Điện Nước with no error shown: a transient empty read
        # here handed the frontend 5 generic demo services in place of
        # whatever was actually configured, which it then displayed and
        # even saved back into local state as if it were real.
        return [_service(r) for r in rows]

    @staticmethod
    def save_service(s):
        """Upserts this one row by primary key only — see save_house() for
        why a single-row write matters here. This specifically fixes the
        room-scope picker (Áp Dụng Cho Tòa Nhà & Phòng) "resetting itself":
        editing one service (e.g. water pricing for KTX rooms) right after
        editing another (e.g. water pricing for single rooms) used to be
        able to silently revert the first edit's room_ids back to its old
        value, since both saves rewrote every service row from whichever
        stale in-memory list each request happened to read first.

        INSERT .. ON DUPLICATE KEY UPDATE instead of REPLACE INTO on
        purpose — same reasoning as save_house(): REPLACE is a DELETE+
        INSERT under the hood, so an explicit column list resets every
        OTHER column (sort_order included) back to its table default on
        every single edit. ON DUPLICATE KEY UPDATE only touches the
        columns listed in its own clause, so an existing service's
        manually-set position survives editing anything else about it."""
        conn = get_db()
        try:
            with conn.cursor() as cur:
                investor_share = s.get('investorShare') or _default_investor_share(s.get('name', ''), s.get('calcType', 'fixed'))
                cur.execute("SELECT COALESCE(MAX(sort_order), -1) AS m FROM services")
                next_order = cur.fetchone()['m'] + 1
                cur.execute(
                    "INSERT INTO services "
                    "(id, house_id, name, price, unit, icon, symbol, calc_type, formula_id, house_ids, room_ids, apply_rooms, investor_share, sort_order) "
                    "VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s) "
                    "ON DUPLICATE KEY UPDATE house_id=VALUES(house_id), name=VALUES(name), price=VALUES(price), "
                    "unit=VALUES(unit), icon=VALUES(icon), symbol=VALUES(symbol), calc_type=VALUES(calc_type), "
                    "formula_id=VALUES(formula_id), house_ids=VALUES(house_ids), room_ids=VALUES(room_ids), "
                    "apply_rooms=VALUES(apply_rooms), investor_share=VALUES(investor_share)",
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
                        json.dumps(s.get('applyRooms', [])),
                        json.dumps(investor_share),
                        next_order
                    )
                )
            conn.commit()
        finally:
            conn.close()

    @staticmethod
    def set_services_order(service_ids):
        """Persists a manually arrow-reordered service list — same pattern
        as set_houses_order()/set_rooms_order()."""
        conn = get_db()
        try:
            with conn.cursor() as cur:
                for idx, sid in enumerate(service_ids):
                    cur.execute("UPDATE services SET sort_order=%s WHERE id=%s", (idx, sid))
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
        # See get_houses() for why this no longer falls back to
        # DEFAULT_FORMULAS on an empty result.
        return [_formula(r) for r in rows]

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
    def get_investor_expenses_light():
        """Same rows as get_investor_expenses(), with each one's receipt
        photos collapsed to a same-length array of booleans — same
        reasoning as get_tickets_light()/get_readings_light(): the bulk
        /api/data payload only needs enough to draw the "N ảnh" badge
        (photos.length), not the receipt images themselves.
        get_investor_expense_photos() fetches the real ones on demand,
        when that badge is actually clicked."""
        expenses = Storage.get_investor_expenses()
        light = []
        for e in expenses:
            e_light = dict(e)
            e_light['photos'] = [True for _ in e_light.get('photos') or []]
            light.append(e_light)
        return light

    @staticmethod
    def get_investor_expense_photos(expense_id):
        expenses = Storage.get_investor_expenses()
        e = next((x for x in expenses if x.get('id') == expense_id), None)
        return (e or {}).get('photos') or []

    @staticmethod
    def save_investor_expense(e):
        """Upserts this one row by primary key only — see save_house() for
        why a single-row write matters here. `photo` (legacy, single) is
        still written alongside photos_json — as just the first photo, if
        any — purely so a build older than multi-photo support reading
        this same row directly wouldn't see it go blank; nothing here
        reads that column back once photos_json exists (see
        _investor_expense)."""
        photos = e.get('photos') or []
        conn = get_db()
        try:
            with conn.cursor() as cur:
                cur.execute(
                    "REPLACE INTO investor_expenses "
                    "(id, house_id, month, name, description, amount, photo, photos_json, created_at) "
                    "VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s)",
                    (
                        e['id'],
                        e.get('houseId', ''),
                        e.get('month', ''),
                        e.get('name', ''),
                        e.get('description', ''),
                        e.get('amount', 0),
                        photos[0] if photos else '',
                        json.dumps(photos),
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

    # -- Investor Report Overrides (one manual override per house+month) ----

    @staticmethod
    def get_investor_report_overrides():
        conn = get_db()
        try:
            with conn.cursor() as cur:
                cur.execute("SELECT * FROM investor_report_overrides")
                rows = cur.fetchall()
        finally:
            conn.close()
        return [_investor_report_override(r) for r in rows]

    @staticmethod
    def save_investor_report_override(o):
        conn = get_db()
        try:
            with conn.cursor() as cur:
                cur.execute(
                    "REPLACE INTO investor_report_overrides (id, house_id, month, amount, note, created_at) "
                    "VALUES (%s,%s,%s,%s,%s,%s)",
                    (
                        o['id'], o.get('houseId', ''), o.get('month', ''),
                        o.get('amount', 0), o.get('note', ''), o.get('createdAt', '')
                    )
                )
            conn.commit()
        finally:
            conn.close()

    @staticmethod
    def delete_investor_report_override(override_id):
        conn = get_db()
        try:
            with conn.cursor() as cur:
                cur.execute("DELETE FROM investor_report_overrides WHERE id=%s", (override_id,))
            conn.commit()
        finally:
            conn.close()

    # -- Readings (complex nested dict → kv_store) --------------------------

    @staticmethod
    def get_readings():
        return Storage._kv_get('readings', DEFAULT_READINGS)

    @staticmethod
    def get_readings_light():
        """Same {month: {roomId: {...}}} shape as get_readings(), but every
        embedded meter-photo data URL is collapsed to a plain boolean —
        the Nhập Điện Nước / Cập Nhật Ảnh Số Điện screens only need to know
        whether a photo exists (to draw the camera button's "has photo"
        state), not its actual bytes. Every one of those photos, for every
        room, every month still inside the retention window, was otherwise
        getting shipped in full on every single /api/data fetch — the
        cause of the admin UI lag/reload whenever a manager uploaded a new
        one. get_reading_photo() below fetches one photo's real bytes on
        demand, only when it's actually opened."""
        readings = Storage.get_readings()
        light = {}
        for month, rooms in readings.items():
            light[month] = {}
            for room_id, rd in rooms.items():
                rd_light = dict(rd)
                for f in READING_PHOTO_FIELDS:
                    if rd_light.get(f):
                        rd_light[f] = True
                light[month][room_id] = rd_light
        return light

    @staticmethod
    def get_reading_photo(month, room_id, field):
        if field not in READING_PHOTO_FIELDS:
            return ''
        readings = Storage.get_readings()
        rd = (readings.get(month) or {}).get(room_id) or {}
        return rd.get(field) or ''

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
    def get_invoices_light():
        """Same list as get_invoices(), with each invoice's own copy of the
        4 meter-photo fields (copied in at generation time — see
        _rebuild_invoices) collapsed to booleans, for the same reason as
        get_readings_light() above. get_invoice_photo() fetches one on
        demand."""
        invoices = Storage.get_invoices()
        light = []
        for inv in invoices:
            inv_light = dict(inv)
            for f in READING_PHOTO_FIELDS:
                if inv_light.get(f):
                    inv_light[f] = True
            light.append(inv_light)
        return light

    @staticmethod
    def get_invoice_photo(invoice_id, field):
        if field not in READING_PHOTO_FIELDS:
            return ''
        invoices = Storage.get_invoices()
        inv = next((i for i in invoices if i.get('id') == invoice_id), None)
        return (inv or {}).get(field) or ''

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
        # See get_houses() for why this no longer falls back to
        # DEFAULT_TICKETS on an empty result.
        return [_ticket(r) for r in rows]

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
        # See get_houses() for why this no longer falls back to
        # DEFAULT_TICKETS on an empty result — this is the variant
        # actually used by the bulk /api/data payload, so it mattered
        # most here.
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

    @staticmethod
    def delete_tickets_by_ids(ticket_ids):
        """Used by the automatic 1-year retention sweep — a plain manual
        delete_ticket() one at a time for however many crossed the line in
        one check. Not used for the regular admin-initiated single delete
        (that stays delete_ticket, unrelated to this bulk cleanup)."""
        if not ticket_ids:
            return
        conn = get_db()
        try:
            with conn.cursor() as cur:
                cur.executemany("DELETE FROM tickets WHERE id=%s", [(tid,) for tid in ticket_ids])
            conn.commit()
        finally:
            conn.close()

    @staticmethod
    def delete_invoices_and_readings_before(cutoff_month):
        """Removes every invoice and readings-month at or before
        cutoff_month (inclusive) — e.g. cutoff_month='2026-05' removes May
        2026 and every earlier month's invoices/readings. 'YYYY-MM' month
        strings compare correctly as plain text (lexicographic order
        matches chronological order for this format), no date parsing
        needed. Returns (deleted_invoice_count, deleted_reading_months) so
        the caller can report what actually happened."""
        invoices = Storage.get_invoices()
        kept = [i for i in invoices if (i.get('month') or '') > cutoff_month]
        deleted_invoice_count = len(invoices) - len(kept)
        if deleted_invoice_count:
            Storage.save_invoices(kept)

        readings = Storage.get_readings()
        removed_months = sorted(m for m in readings.keys() if m <= cutoff_month)
        if removed_months:
            def mutate(data):
                for m in removed_months:
                    data.pop(m, None)
                return data
            Storage.update_readings(mutate)

        return deleted_invoice_count, removed_months

    @staticmethod
    def next_ticket_number():
        """Monotonic counter for ticket ids, persisted in kv_store
        separately from the tickets table itself — deleting a ticket row
        never touches this counter, so its number can't come back around
        and get reused on a later ticket. _kv_update's FOR UPDATE lock
        keeps two tickets created at the same instant from landing on the
        same number."""
        def mutate(n):
            return n + 1
        return Storage._kv_update('ticket_counter', -1, mutate)

    # -- Permissions (simple list → kv_store) -------------------------------

    @staticmethod
    def get_permissions():
        """DEFAULT_PERMISSIONS only covers a brand-new install with no
        'permissions' key saved yet — an existing install that already has
        one keeps exactly that, verbatim, forever. That's right for values
        an admin actually configured, but it also means a feature row or
        role/action added here later would silently never appear for
        anyone who'd already saved the matrix once. Fill in only what's
        missing — new rows appended, new roles/actions on an existing row
        defaulted from DEFAULT_PERMISSIONS — without touching any value an
        admin already set. A stored role value that isn't the expected
        {view,create,edit,...} dict (the old flat-boolean matrix shape,
        from before this feature/action/role structure existed) can't be
        meaningfully migrated one-to-one, so it's replaced with that role's
        fresh default rather than left in an inconsistent shape."""
        stored = Storage._kv_get('permissions', None)
        if stored is None:
            return copy.deepcopy(DEFAULT_PERMISSIONS)

        by_key = {p['key']: p for p in stored if 'key' in p}
        merged = []
        for default_row in DEFAULT_PERMISSIONS:
            row = by_key.get(default_row['key'])
            if row is None:
                merged.append(copy.deepcopy(default_row))
                continue
            merged_row = {'key': default_row['key'], 'name': row.get('name', default_row['name'])}
            for role in ('manager', 'investor', 'tenant'):
                if role not in default_row:
                    continue
                stored_role_val = row.get(role)
                if isinstance(stored_role_val, dict):
                    merged_actions = dict(default_row[role])
                    merged_actions.update(stored_role_val)
                    merged_row[role] = merged_actions
                else:
                    merged_row[role] = copy.deepcopy(default_row[role])
            merged.append(merged_row)
        return merged

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

    # -- Custom Service Icons (admin-defined emoji added on top of the
    # built-in ICON_LIBRARY in app.js — one global list, shared by everyone) --

    @staticmethod
    def get_custom_icons():
        return Storage._kv_get('custom_icons', [])

    @staticmethod
    def save_custom_icons(icons):
        Storage._kv_set('custom_icons', icons)

    # -- Saler commission rate (single global % applied to a room's deposit) -

    @staticmethod
    def get_saler_commission_percent():
        return Storage._kv_get('saler_commission_percent', 0)

    @staticmethod
    def save_saler_commission_percent(percent):
        Storage._kv_set('saler_commission_percent', percent)

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

    # -- Room Photos (public listing photos, keyed by roomId) ---------------
    # Separate from room_documents: those are private (contract/CCCD scans,
    # never shown outside admin/tenant), these are marketing photos meant to
    # be shipped to the saler role's public room listing.

    @staticmethod
    def get_room_photos():
        return Storage._kv_get('room_photos', {})

    @staticmethod
    def save_room_photos(photos):
        Storage._kv_set('room_photos', photos)

    @staticmethod
    def update_room_photos(mutate):
        return Storage._kv_update('room_photos', {}, mutate)
