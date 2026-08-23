from .storage import Storage
from datetime import datetime
import pymysql
import re
import uuid

# Only digits, the variable x, whitespace, and + - * / ( ) . — the same
# whitelist enforced in app.js's evalCustomFormula. eval() only ever sees a
# string that already passed this check, with builtins stripped out, so it
# can't reach anything beyond basic arithmetic even though the check is
# admin-authored input rather than fully untrusted.
_FORMULA_RE = re.compile(r'^[0-9x+\-*/(). ]+$')

class RentalService:
    @staticmethod
    def eval_custom_formula(expr, usage):
        if not expr or not isinstance(expr, str):
            return 0
        trimmed = expr.strip()
        if not trimmed or not _FORMULA_RE.match(trimmed):
            return 0
        try:
            substituted = trimmed.replace('x', f'({max(0, usage)})')
            result = eval(substituted, {"__builtins__": {}}, {})
            return round(result) if isinstance(result, (int, float)) else 0
        except Exception:
            return 0

    @staticmethod
    def utility_cost_for_room(expr, usage, is_elec, room):
        """The room's invoice is one single bill covering every occupant, so
        it must carry the full electricity cost regardless of room type —
        dividing it here (as earlier versions did) undercounted a dorm
        room's electricity by a factor of its headcount, since nothing ever
        multiplied it back. Per-occupant electricity share is a display-only
        concern, computed separately at render time (see
        roomRentFormulaDescription()/the tenant invoice view in app.js) —
        never subtracted from what's actually billed. Mirrors
        utilityCostForRoom() in app.js exactly."""
        return RentalService.eval_custom_formula(expr, usage)

    @staticmethod
    def room_rent_total(room):
        """Dorm rooms (Phòng Ký Túc Xá) store baseRent as the per-person rate
        (see the room-type hint shown in the room form) — the amount actually
        owed for the room is that rate times headcount. Single rooms bill
        baseRent as-is. Mirrors roomRentTotal() in app.js."""
        base_rent = room.get('baseRent', 0) or 0
        if room.get('roomType') == 'dorm':
            return base_rent * max(1, room.get('headcount') or 1)
        return base_rent

    @staticmethod
    def service_matches_house(s, target_house_id):
        if not target_house_id or target_house_id == 'all':
            return True
        if not s.get('houseId') or s.get('houseId') == 'all':
            return True
        house_ids = s.get('houseIds')
        if isinstance(house_ids, list):
            return 'all' in house_ids or target_house_id in house_ids
        return s.get('houseId') == target_house_id

    @staticmethod
    def service_matches_room(s, target_room_id):
        if not target_room_id:
            return True
        room_ids = s.get('roomIds')
        if not room_ids or not isinstance(room_ids, list) or 'all' in room_ids:
            return True
        return target_room_id in room_ids

    @staticmethod
    def calculate_room_services_total(room, services):
        headcount = room.get('headcount', 1)
        house_id = room.get('houseId', 'house_a')
        room_id = room.get('id', '')
        
        # Match services assigned to house AND room
        house_services = [
            s for s in services 
            if RentalService.service_matches_house(s, house_id) and RentalService.service_matches_room(s, room_id)
        ]

        service_total = 0
        parking_total = 0
        item_list = []

        for s in house_services:
            if s.get('calcType') == 'formula':
                continue

            price = s.get('price', 0)
            unit = s.get('unit', '')
            name = s.get('name', '')
            symbol = s.get('symbol', '📦')
            name_lower = name.lower()

            if 'xe' in name_lower or unit == 'Theo xe / tháng':
                item_price = price
                parking_total += item_price
                item_list.append({ 'id': s.get('id'), 'name': name, 'symbol': symbol, 'price': price, 'unit': unit, 'total': item_price, 'isParking': True })
            elif unit == 'Theo đầu người':
                item_price = price * headcount
                service_total += item_price
                item_list.append({ 'id': s.get('id'), 'name': name, 'symbol': symbol, 'price': price, 'unit': f"{headcount} người x {price:,.0f}đ", 'total': item_price, 'isParking': False })
            else:
                item_price = price
                service_total += item_price
                item_list.append({ 'id': s.get('id'), 'name': name, 'symbol': symbol, 'price': price, 'unit': unit, 'total': item_price, 'isParking': False })

        return service_total, parking_total, item_list

    @staticmethod
    def sync_readings_with_services(month='2026-08'):
        # Runs on every page load / data fetch (called from get_full_state
        # below), so a plain get-then-save here raced constantly against
        # in-flight update_room_reading() calls — e.g. switching months in
        # one tab while another tab had just saved a meter number could read
        # a copy taken before that save committed, then write it straight
        # back over it. Locked read-modify-write serializes the two instead.
        rooms = Storage.get_rooms()
        services = Storage.get_services()

        def mutate(readings):
            if month not in readings:
                readings[month] = {}

            for r in rooms:
                srv_tot, prk_tot, _ = RentalService.calculate_room_services_total(r, services)
                if r['id'] not in readings[month]:
                    readings[month][r['id']] = {
                        'elecOld': 0, 'elecNew': 0, 'waterOld': 0, 'waterNew': 0,
                        'elecFormula': r.get('elecFormula', 'elec_flat_3500'),
                        'waterFormula': r.get('waterFormula', 'water_flat_18000'),
                        'serviceFee': srv_tot, 'parkingFee': prk_tot
                    }
                else:
                    readings[month][r['id']]['serviceFee'] = srv_tot
                    readings[month][r['id']]['parkingFee'] = prk_tot

            return readings

        readings = Storage.update_readings(mutate)
        return readings[month]

    @staticmethod
    def get_full_state(month='2026-08', current_user=None):
        houses = Storage.get_houses()
        users = Storage.get_users()
        rooms = Storage.get_rooms()
        services = Storage.get_services()
        formulas = Storage.get_formulas()
        readings = Storage.get_readings()
        invoices = Storage.get_invoices()
        tickets = Storage.get_tickets_light()
        permissions = Storage.get_permissions()
        site_settings = Storage.get_site_settings()
        custom_icons = Storage.get_custom_icons()
        room_documents = Storage.get_room_documents()
        room_photos = Storage.get_room_photos()
        # Investor payout math is internal to admin/manager — never shipped to
        # an investor or tenant session (see role filtering below).
        investor_expenses = Storage.get_investor_expenses()

        RentalService.sync_readings_with_services(month)
        readings = Storage.get_readings()

        # Investors only see the house(s) they are assigned to.
        if current_user and current_user.get('role') == 'investor':
            house_id = current_user.get('houseId') or ''
            if house_id and house_id != 'all':
                houses = [h for h in houses if h['id'] == house_id]
                room_ids = {r['id'] for r in rooms if r.get('houseId') == house_id}
                rooms = [r for r in rooms if r['id'] in room_ids]
                services = [s for s in services if RentalService.service_matches_house(s, house_id)]
                invoices = [i for i in invoices if i.get('houseId') == house_id]
                tickets = [tk for tk in tickets if tk.get('roomId') in room_ids]
                readings = {
                    m: {rid: rd for rid, rd in month_readings.items() if rid in room_ids}
                    for m, month_readings in readings.items()
                }
                room_documents = {rid: docs for rid, docs in room_documents.items() if rid in room_ids}
                room_photos = {rid: p for rid, p in room_photos.items() if rid in room_ids}
            users = []  # investor dashboard has no need for the account directory

        # Salers only need to spot vacant rooms and their public pricing —
        # occupied rooms, tenant/account data, invoices, tickets and contract
        # photos are all out of scope for this role. Listing photos (room_photos)
        # ARE meant to be public, so those stay — just narrowed to vacant rooms.
        if current_user and current_user.get('role') == 'saler':
            rooms = [r for r in rooms if not r.get('tenant')]
            room_ids = {r['id'] for r in rooms}
            services = [s for s in services if any(RentalService.service_matches_house(s, r['houseId']) for r in rooms)]
            room_photos = {rid: p for rid, p in room_photos.items() if rid in room_ids}
            # headcount/phone belong to whoever last lived there — not
            # meaningful for a vacant room and never something to expose to
            # a saler, even if a stale value somehow survived (e.g. cleared
            # by hand instead of through the app's own deactivate flow).
            # `capacity` (the public max-beds figure) is the one meant to be
            # shown, so it stays untouched.
            rooms = [{k: v for k, v in r.items() if k not in ('headcount', 'phone')} for r in rooms]
            users = []
            invoices = []
            tickets = []
            readings = {}
            room_documents = {}
            investor_expenses = []

        # The investor payout report is an admin/manager-only tool — an investor
        # or tenant session must never receive these figures, regardless of the
        # house filtering above.
        role = current_user.get('role') if current_user else None
        if role not in ('superadmin', 'admin', 'manager'):
            investor_expenses = []

        safe_users = [{k: v for k, v in u.items() if k != 'password'} for u in users]

        return {
            'houses': houses,
            'users': safe_users,
            'rooms': rooms,
            'services': services,
            'formulas': formulas,
            'readings': readings,
            'invoices': invoices,
            'tickets': tickets,
            'permissions': permissions,
            'siteSettings': site_settings,
            'customIcons': custom_icons,
            'roomDocuments': room_documents,
            'roomPhotos': room_photos,
            'investorExpenses': investor_expenses,
            'currentMonth': month
        }

    @staticmethod
    def save_house(house_id, name, address, description):
        h_id = house_id or f"house_{uuid.uuid4().hex[:6]}"
        h_obj = { 'id': h_id, 'name': name, 'address': address, 'description': description }
        Storage.save_house(h_obj)
        return h_obj

    @staticmethod
    def delete_house(house_id):
        # Deleting a house out from under its rooms doesn't remove them —
        # they just silently stop showing up anywhere (no house to group
        # them under), while any investor account scoped to this house
        # goes blank with zero rooms/revenue and no explanation why. Block
        # it instead: force clearing out rooms and reassigning investors
        # first, so nothing quietly goes orphaned.
        room_count = sum(1 for r in Storage.get_rooms() if r.get('houseId') == house_id)
        if room_count > 0:
            return False, f'Không thể xoá: tòa nhà này vẫn còn {room_count} phòng. Vui lòng xoá hết phòng trước.'

        investor_count = sum(1 for u in Storage.get_users() if u.get('role') == 'investor' and u.get('houseId') == house_id)
        if investor_count > 0:
            return False, f'Không thể xoá: vẫn còn {investor_count} tài khoản chủ đầu tư đang gắn với tòa nhà này. Vui lòng đổi tòa nhà cho tài khoản đó trước.'

        Storage.delete_house(house_id)
        return True, None

    @staticmethod
    def save_service(service_id, house_id, name, price, unit, house_ids=None, calc_type='fixed', custom_formula=None, icon='package', symbol='📦', room_ids=None, investor_share=None):
        srv_id = service_id or f"srv_{uuid.uuid4().hex[:6]}"
        # applyRooms is a leftover column from an older scoping mechanism
        # the current UI never sets — carrying it forward rather than
        # dropping it outright avoids silently zeroing a field on every
        # save purely because this form doesn't happen to know about it.
        existing = next((s for s in Storage.get_services() if s['id'] == srv_id), {})
        srv_obj = {
            'id': srv_id,
            'houseId': house_id or 'all',
            'houseIds': house_ids if house_ids else (['all'] if house_id == 'all' else [house_id]),
            'roomIds': room_ids if room_ids else ['all'],
            'name': name,
            'icon': icon or 'package',
            'symbol': symbol or '📦',
            'calcType': calc_type or 'fixed',
            'customFormula': custom_formula,
            'price': float(price or 0),
            'unit': unit,
            'applyRooms': existing.get('applyRooms', []),
            'investorShare': investor_share if investor_share is not None else existing.get('investorShare')
        }
        Storage.save_service(srv_obj)
        RentalService.sync_readings_with_services()
        return srv_obj

    @staticmethod
    def delete_service(service_id):
        Storage.delete_service(service_id)
        RentalService.sync_readings_with_services()
        return True

    @staticmethod
    def save_formula(formula_id, name, f_type, rate, category=None):
        f_id = formula_id or f"formula_{uuid.uuid4().hex[:6]}"
        cat = category or ('water' if 'nước' in name.lower() else 'elec')
        f_obj = {
            'id': f_id,
            'name': name,
            'type': f_type,
            'rate': float(rate or 0),
            'category': cat
        }
        # This form has no tiered-rate UI, so don't let saving here wipe
        # tiers a record already had (Storage.save_formula() writes NULL
        # for tiers_json whenever the 'tiers' key is absent entirely).
        existing = next((f for f in Storage.get_formulas() if f['id'] == f_id), None)
        if existing and 'tiers' in existing:
            f_obj['tiers'] = existing['tiers']
        Storage.save_formula(f_obj)
        return f_obj

    @staticmethod
    def delete_formula(formula_id):
        Storage.delete_formula(formula_id)
        return True

    @staticmethod
    def save_room(room_id, house_id, name, tenant, phone, base_rent, headcount, room_type=None, elec_formula=None, water_formula=None, area=None, description=None, capacity=None):
        # 6 hex chars (matches houses/services/formulas/tickets) — the old
        # 4-char version only had 65,536 possible ids, giving a
        # non-negligible birthday-paradox collision chance once a building
        # has more than a couple hundred rooms; a collision would silently
        # REPLACE INTO overwrite an existing room's config and tenant data.
        r_id = room_id or f"R{uuid.uuid4().hex[:6].upper()}"
        # This form doesn't carry contract dates (set separately from the
        # "Ảnh Hợp Đồng" modal) — inherit whatever's already on the room
        # instead of wiping it out on every unrelated edit. Read-only lookup,
        # so a stale copy here just means we might re-write the same
        # contract dates that are about to be there anyway — unlike a stale
        # WRITE, it can't clobber a concurrent change to a different room.
        existing = next((r for r in Storage.get_rooms() if r['id'] == r_id), {})
        r_obj = {
            'id': r_id,
            'houseId': house_id or 'house_a',
            'name': name,
            'tenant': tenant or '',
            'phone': phone or '',
            'baseRent': float(base_rent or 0),
            'headcount': int(headcount or 1),
            'roomType': room_type or 'single',
            'elecFormula': elec_formula or 'elec_flat_3500',
            'waterFormula': water_formula or 'water_flat_18000',
            'contractStart': existing.get('contractStart', ''),
            'contractEnd': existing.get('contractEnd', ''),
            'area': float(area) if area not in (None, '') else existing.get('area', 0),
            'description': description if description is not None else existing.get('description', ''),
            # Total bed capacity — informational only (see storage._room()),
            # never used in room_rent_total/calculate_room_services_total.
            'capacity': int(capacity) if capacity not in (None, '') else existing.get('capacity', 0)
        }
        Storage.save_room(r_obj)
        RentalService.sync_readings_with_services()
        return r_obj

    @staticmethod
    def delete_room(room_id):
        # A tenant account still pointing at roomId after the room itself is
        # gone doesn't crash anything (every render site guards for a
        # missing room), but it does leave the account showing the room's
        # raw id as if it were still assigned — confusing for both the
        # tenant (their invoice/contract pages just go blank) and whoever's
        # managing accounts later. Clear the link so it reads as
        # unassigned, same as an account that was never assigned a room.
        unlinked_username = None
        tenant = next((u for u in Storage.get_users() if u.get('roomId') == room_id), None)
        if tenant:
            tenant['roomId'] = ''
            Storage.save_user(tenant)
            unlinked_username = tenant.get('username')

        Storage.delete_room(room_id)
        RentalService.sync_readings_with_services()
        return unlinked_username

    @staticmethod
    def update_room_contract(room_id, contract_start, contract_end):
        if not room_id:
            return None
        Storage.update_room_contract(room_id, contract_start, contract_end)
        rooms = Storage.get_rooms()
        return next((r for r in rooms if r['id'] == room_id), None)

    @staticmethod
    def authenticate_user(username, password):
        users = Storage.get_users()
        user = next((u for u in users if u['username'].lower() == username.lower() and u['password'] == password), None)
        if not user:
            return None, 'Tài khoản hoặc mật khẩu không chính xác!'
        if user.get('status') == 'pending':
            return None, 'Tài khoản của bạn đang chờ Admin duyệt!'
        if user.get('status') == 'blocked':
            return None, 'Tài khoản của bạn đã bị khóa!'

        safe_user = {k: v for k, v in user.items() if k != 'password'}
        return safe_user, None

    @staticmethod
    def set_user_active(user_id, is_active):
        """Quick activate/deactivate toggle — a tenant whose room now has a
        different occupant (moved out, room re-let) doesn't need their
        account deleted, just switched off so they can't log in. Reuses the
        existing status field (approved/blocked) rather than adding a
        parallel active/inactive flag."""
        user = next((u for u in Storage.get_users() if u['id'] == user_id), None)
        if not user or user['id'] == 'usr_admin':
            return None
        user['status'] = 'approved' if is_active else 'blocked'
        Storage.save_user(user)
        return user

    @staticmethod
    def _deactivate_other_tenants_in_room(room_id, keep_user_id):
        """When a room gets a (re-)approved tenant, any OTHER tenant
        account still marked approved for that same room is someone who
        has moved out — leaving them active would let a former tenant keep
        logging in and viewing the new occupant's invoices/tickets.
        Returns the usernames deactivated, so the caller can tell the admin."""
        deactivated = []
        for u in Storage.get_users():
            if u['id'] != keep_user_id and u.get('role') == 'tenant' and u.get('roomId') == room_id and u.get('status') == 'approved':
                u['status'] = 'blocked'
                Storage.save_user(u)
                deactivated.append(u.get('username'))
        return deactivated

    @staticmethod
    def approve_user(user_id, room_id):
        user = next((u for u in Storage.get_users() if u['id'] == user_id), None)
        if user:
            user['status'] = 'approved'
            if room_id:
                user['roomId'] = room_id
            Storage.save_user(user)
            deactivated = RentalService._deactivate_other_tenants_in_room(room_id, user_id) if room_id else []
            return True, deactivated
        return False, []

    @staticmethod
    def create_user_by_admin(username, password, full_name, role, room_id, house_id=''):
        users = Storage.get_users()
        if any(u['username'].lower() == username.lower() for u in users):
            return None, 'Tên tài khoản đã tồn tại!'

        new_user = {
            'id': f"usr_{uuid.uuid4().hex[:8]}",
            'username': username,
            'password': password,
            'fullName': full_name,
            'role': role,
            'roomId': room_id if role == 'tenant' else '',
            'houseId': house_id if role == 'investor' else '',
            'status': 'approved',
            'createdAt': datetime.now().strftime('%Y-%m-%d %H:%M')
        }
        try:
            Storage.create_user(new_user)
        except pymysql.err.IntegrityError:
            # Two "create" clicks for the same username close enough
            # together both pass the check above before either commits —
            # the table's own UNIQUE constraint is the real guard.
            return None, 'Tên tài khoản đã tồn tại!'
        return new_user, None

    @staticmethod
    def update_user_by_admin(user_id, full_name, role, room_id, status, new_password=None, house_id=''):
        user = next((u for u in Storage.get_users() if u['id'] == user_id), None)
        if user:
            if user['id'] == 'usr_admin':
                # The bootstrap account's role isn't editable via this form
                # (it's whatever the one-time superadmin migration set it
                # to) — only its profile fields are. Read back its own
                # current value rather than hardcoding 'admin', or this
                # would silently downgrade a promoted superadmin back to
                # admin on every unrelated profile edit. Matched by id, not
                # username — the username itself is editable elsewhere and
                # no longer reliably says "this is the bootstrap account".
                user['fullName'] = full_name
                user['status'] = 'approved'
                user['roomId'] = ''
                user['houseId'] = ''
            else:
                user['fullName'] = full_name
                user['role'] = role
                user['roomId'] = room_id if role == 'tenant' else ''
                user['houseId'] = house_id if role == 'investor' else ''
                user['status'] = status

            # Only update password if a new one was explicitly provided
            if new_password:
                user['password'] = new_password

            Storage.save_user(user)

            # Same room-handoff cleanup as approve_user(): assigning this
            # tenant to a room that another approved tenant is still on
            # means that other account moved out — switch it off instead
            # of leaving it able to log in and see the new occupant's data.
            deactivated = []
            if user['id'] != 'usr_admin' and role == 'tenant' and status == 'approved' and room_id:
                deactivated = RentalService._deactivate_other_tenants_in_room(room_id, user_id)

            return user, None, deactivated
        return None, 'User not found', []

    @staticmethod
    def delete_user(user_id):
        users = Storage.get_users()
        user = next((u for u in users if u['id'] == user_id), None)
        if user and user['id'] != 'usr_admin':
            Storage.delete_user(user_id)
        return True

    @staticmethod
    def update_room_reading(month, room_id, field, value):
        # Reading edits (a meter number, then its confirmation photo) tend to
        # fire back-to-back for the same room/month — the photo upload in
        # particular is slow enough (compressed image over the wire) that
        # its request can still be in flight when the next one starts. A
        # plain get-then-save here would let the slower request's read (a
        # stale copy taken before the earlier save committed) clobber the
        # earlier edit back to its old value on write — e.g. a meter number
        # "jumping back to 0" right after uploading its photo. Storage's
        # locked read-modify-write forces these to serialize instead.
        def mutate(readings):
            if month not in readings:
                readings[month] = {}
            if room_id not in readings[month]:
                rooms = Storage.get_rooms()
                services = Storage.get_services()
                r = next((x for x in rooms if x['id'] == room_id), {})
                srv_tot, prk_tot, _ = RentalService.calculate_room_services_total(r, services)
                readings[month][room_id] = {
                    'elecOld': 0, 'elecNew': 0, 'waterOld': 0, 'waterNew': 0,
                    'elecFormula': r.get('elecFormula', 'elec_flat_3500'),
                    'waterFormula': r.get('waterFormula', 'water_flat_18000'),
                    'serviceFee': srv_tot,
                    'parkingFee': prk_tot
                }

            text_fields = [
                'elecFormula', 'waterFormula',
                'elecOldPhoto', 'elecNewPhoto', 'waterOldPhoto', 'waterNewPhoto'
            ]
            if field in text_fields:
                readings[month][room_id][field] = value
            else:
                try:
                    readings[month][room_id][field] = float(value)
                except (ValueError, TypeError):
                    readings[month][room_id][field] = 0

            return readings

        readings = Storage.update_readings(mutate)
        return readings[month]

    @staticmethod
    def generate_all_invoices(month):
        rooms = Storage.get_rooms()
        services = Storage.get_services()
        readings = Storage.get_readings().get(month, {})

        # Regenerating carries every existing invoice's paid/unpaid status
        # forward (see `status` below) — reading invoices outside the lock
        # and writing the rebuilt list back unconditionally would let this
        # (often slow — iterates every room) request overwrite a status
        # someone else marks paid while it's mid-flight, silently reverting
        # it back to "Chờ thanh toán". Building the whole list inside
        # update_invoices' locked mutate keeps the read-then-write atomic.
        def mutate(invoices):
            RentalService._rebuild_invoices(invoices, month, rooms, services, readings)
            return invoices

        Storage.update_invoices(mutate)
        return len(rooms)

    @staticmethod
    def _rebuild_invoices(invoices, month, rooms, services, readings):
        for r in rooms:
            srv_tot, prk_tot, item_list = RentalService.calculate_room_services_total(r, services)
            rd = readings.get(r['id'], {'elecOld': 0, 'elecNew': 0, 'waterOld': 0, 'waterNew': 0})

            elec_usage = max(0, rd.get('elecNew', 0) - rd.get('elecOld', 0))
            water_usage = max(0, rd.get('waterNew', 0) - rd.get('waterOld', 0))

            # Each formula-type service (e.g. "Tiền Điện") now carries its own
            # inline expression — find the one(s) applicable to this room's
            # house/room and evaluate directly, matching app.js's
            # generateAndSendAllInvoices() matching exactly.
            elec_cost = 0
            water_cost = 0
            elec_formula_text = ''
            water_formula_text = ''
            for s in services:
                if s.get('calcType') != 'formula':
                    continue
                if not RentalService.service_matches_house(s, r.get('houseId')) or not RentalService.service_matches_room(s, r.get('id')):
                    continue
                is_elec = 'Điện' in s.get('name', '')
                usage = elec_usage if is_elec else water_usage
                cost = RentalService.utility_cost_for_room(s.get('customFormula'), usage, is_elec, r)
                if is_elec:
                    elec_cost = cost
                    elec_formula_text = s.get('customFormula') or ''
                else:
                    water_cost = cost
                    water_formula_text = s.get('customFormula') or ''

            service_fee = srv_tot
            parking_fee = prk_tot
            room_rent = RentalService.room_rent_total(r)

            total_amount = room_rent + elec_cost + water_cost + service_fee + parking_fee

            invoice_id = f"INV-{month.replace('-', '')}-{r['id']}"

            existing_idx = next((i for i, inv in enumerate(invoices) if inv['id'] == invoice_id), -1)
            invoice_obj = {
                'id': invoice_id,
                'month': month,
                'roomId': r['id'],
                'houseId': r.get('houseId', 'house_a'),
                'roomName': r['name'],
                'tenant': r['tenant'],
                'phone': r['phone'],
                'baseRent': room_rent,
                'elecOld': rd.get('elecOld', 0),
                'elecNew': rd.get('elecNew', 0),
                'elecUsage': elec_usage,
                'elecFormula': elec_formula_text,
                'elecCost': elec_cost,
                'elecOldPhoto': rd.get('elecOldPhoto', ''),
                'elecNewPhoto': rd.get('elecNewPhoto', ''),
                'waterOld': rd.get('waterOld', 0),
                'waterNew': rd.get('waterNew', 0),
                'waterUsage': water_usage,
                'waterFormula': water_formula_text,
                'waterCost': water_cost,
                'waterOldPhoto': rd.get('waterOldPhoto', ''),
                'waterNewPhoto': rd.get('waterNewPhoto', ''),
                'serviceFee': service_fee,
                'parkingFee': parking_fee,
                'serviceItems': item_list,
                'otherFees': service_fee + parking_fee,
                'totalAmount': total_amount,
                'sendStatus': 'Đã gửi tự động',
                'status': invoices[existing_idx]['status'] if existing_idx >= 0 else 'Chờ thanh toán',
                'sentAt': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            }

            if existing_idx >= 0:
                invoices[existing_idx] = invoice_obj
            else:
                invoices.append(invoice_obj)

    @staticmethod
    def mark_invoice_paid(invoice_id):
        def mutate(invoices):
            for inv in invoices:
                if inv['id'] == invoice_id:
                    inv['status'] = 'Đã thanh toán'
            return invoices

        Storage.update_invoices(mutate)
        return True

    @staticmethod
    def save_investor_expense(expense_id, house_id, month, description, amount):
        e_id = expense_id or f"exp_{uuid.uuid4().hex[:8]}"
        existing = next((e for e in Storage.get_investor_expenses() if e['id'] == e_id), None)
        created_at = existing['createdAt'] if existing else datetime.now().strftime('%Y-%m-%d %H:%M')

        e_obj = {
            'id': e_id,
            'houseId': house_id or '',
            'month': month or '',
            'description': description or '',
            'amount': float(amount or 0),
            'createdAt': created_at
        }
        Storage.save_investor_expense(e_obj)
        return e_obj

    @staticmethod
    def delete_investor_expense(expense_id):
        Storage.delete_investor_expense(expense_id)
        return True

    @staticmethod
    def create_ticket(ticket_id, room_id, category, priority, description, images):
        room = next((r for r in Storage.get_rooms() if r['id'] == room_id), None)
        room_name = room['name'] if room else 'Phòng'
        tenant = room['tenant'] if room else 'Khách'

        ticket_obj = {
            # minute:second alone (the old format) repeats every 60 seconds
            # and collides immediately under any real concurrent load —
            # two tickets landing on the same id both get REPLACE INTO'd
            # into ONE row, silently discarding whichever saved first. A
            # uuid4 suffix matches how every other entity here (rooms,
            # services, users, ...) generates its id.
            'id': ticket_id or f"TK-{uuid.uuid4().hex[:6].upper()}",
            'roomId': room_id,
            'roomName': room_name,
            'tenant': tenant,
            'category': category,
            'priority': priority,
            'description': description,
            'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M'),
            'status': 'Mới tiếp nhận',
            'response': '',
            'comments': [],
            'images': images or []
        }
        Storage.save_ticket(ticket_obj)
        return ticket_obj

    @staticmethod
    def reply_ticket(ticket_id, status, response, comment=None):
        ticket = Storage.get_ticket_full(ticket_id)
        if ticket:
            comments = ticket.get('comments') or []
            if comment:
                comments.append(comment)
            Storage.update_ticket_reply(ticket_id, status, response, comments)
            return True
        return False

    @staticmethod
    def save_permissions(matrix):
        Storage.save_permissions(matrix)
        return True

    @staticmethod
    def save_site_settings(site_name, title, description, keywords, share_image, favicon):
        settings = {
            'siteName': site_name or 'CalaciHouse',
            'title': title or 'CalaciHouse',
            'description': description or '',
            'keywords': keywords or '',
            'shareImage': share_image or '',
            'favicon': favicon or ''
        }
        Storage.save_site_settings(settings)
        return settings

    @staticmethod
    def save_custom_icons(icons):
        # Client sends the whole list back on every add/edit/delete (same
        # wholesale-replace approach as the permission matrix) — the list is
        # short (a handful of admin-added emoji) so there's no races-on-one-
        # row concern that would justify a per-item id-keyed save here.
        cleaned = []
        for item in (icons or []):
            symbol = (item.get('symbol') or '').strip()
            label = (item.get('label') or '').strip()
            if not symbol or not label:
                continue
            cleaned.append({
                'id': item.get('id') or f"icon_{uuid.uuid4().hex[:8]}",
                'symbol': symbol,
                'label': label
            })
        Storage.save_custom_icons(cleaned)
        return cleaned

    @staticmethod
    def get_ticket_detail(ticket_id):
        return Storage.get_ticket_full(ticket_id)

    @staticmethod
    def delete_ticket(ticket_id):
        Storage.delete_ticket(ticket_id)
        return True

    # -- Room Documents (contract & related images) --------------------------

    @staticmethod
    def save_room_document(room_id, doc_id, label, data_url):
        if not room_id or not data_url:
            return None
        d_id = doc_id or f"doc_{uuid.uuid4().hex[:8]}"
        d_obj = {
            'id': d_id,
            'label': label or 'Tài liệu',
            'dataUrl': data_url,
            'uploadedAt': datetime.now().strftime('%Y-%m-%d %H:%M')
        }

        def mutate(documents):
            room_docs = documents.get(room_id, [])
            idx = next((i for i, d in enumerate(room_docs) if d['id'] == d_id), -1)
            if idx >= 0:
                room_docs[idx] = d_obj
            else:
                room_docs.append(d_obj)
            documents[room_id] = room_docs
            return documents

        Storage.update_room_documents(mutate)
        return d_obj

    @staticmethod
    def delete_room_document(room_id, doc_id):
        def mutate(documents):
            room_docs = documents.get(room_id, [])
            documents[room_id] = [d for d in room_docs if d['id'] != doc_id]
            return documents

        Storage.update_room_documents(mutate)
        return True

    @staticmethod
    def save_room_photo(room_id, photo_id, label, data_url):
        if not room_id or not data_url:
            return None
        p_id = photo_id or f"photo_{uuid.uuid4().hex[:8]}"
        p_obj = {
            'id': p_id,
            'label': label or '',
            'dataUrl': data_url,
            'uploadedAt': datetime.now().strftime('%Y-%m-%d %H:%M')
        }

        def mutate(photos):
            room_photos = photos.get(room_id, [])
            idx = next((i for i, p in enumerate(room_photos) if p['id'] == p_id), -1)
            if idx >= 0:
                room_photos[idx] = p_obj
            else:
                room_photos.append(p_obj)
            photos[room_id] = room_photos
            return photos

        Storage.update_room_photos(mutate)
        return p_obj

    @staticmethod
    def delete_room_photo(room_id, photo_id):
        def mutate(photos):
            room_photos = photos.get(room_id, [])
            photos[room_id] = [p for p in room_photos if p['id'] != photo_id]
            return photos

        Storage.update_room_photos(mutate)
        return True
