from .storage import Storage
from datetime import datetime
import uuid

class RentalService:
    @staticmethod
    def calculate_utility_amount(usage, formula_id, headcount=1):
        formulas = Storage.get_formulas()
        formula = next((f for f in formulas if f['id'] == formula_id), None)
        usage = max(0, usage)

        if not formula:
            return round(usage * 3500)

        f_type = formula.get('type')

        if f_type == 'flat':
            return round(usage * (formula.get('rate') or 0))

        if f_type == 'headcount':
            return round((formula.get('rate') or 0) * headcount)

        if f_type == 'tiered' and formula.get('tiers'):
            total = 0
            remaining_usage = usage
            prev_max = 0

            for tier in formula['tiers']:
                if remaining_usage <= 0:
                    break
                tier_max = float('inf') if (tier['max'] == 'inf' or tier['max'] is None) else tier['max']
                tier_limit = tier_max - prev_max
                usage_in_tier = min(remaining_usage, tier_limit)
                total += usage_in_tier * tier['rate']
                remaining_usage -= usage_in_tier
                prev_max = tier_max

            return round(total)

        return round(usage * 3500)

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
    def calculate_room_services_total(room, services):
        headcount = room.get('headcount', 1)
        house_id = room.get('houseId', 'house_a')
        
        # Match services assigned to ALL houses or checked house IDs
        house_services = [
            s for s in services 
            if RentalService.service_matches_house(s, house_id)
        ]

        service_total = 0
        parking_total = 0
        item_list = []

        for s in house_services:
            if s.get('calcType') == 'formula' or 'Điện' in s.get('name', '') or 'Nước' in s.get('name', ''):
                continue

            price = s.get('price', 0)
            unit = s.get('unit', '')
            name = s.get('name', '')
            name_lower = name.lower()

            if 'xe' in name_lower or unit == 'Theo xe / tháng':
                item_price = price
                parking_total += item_price
                item_list.append({ 'id': s.get('id'), 'name': name, 'price': price, 'unit': unit, 'total': item_price, 'isParking': True })
            elif unit == 'Theo đầu người':
                item_price = price * headcount
                service_total += item_price
                item_list.append({ 'id': s.get('id'), 'name': name, 'price': price, 'unit': f"{headcount} người x {price:,.0f}đ", 'total': item_price, 'isParking': False })
            else:
                item_price = price
                service_total += item_price
                item_list.append({ 'id': s.get('id'), 'name': name, 'price': price, 'unit': unit, 'total': item_price, 'isParking': False })

        return service_total, parking_total, item_list

    @staticmethod
    def sync_readings_with_services(month='2026-08'):
        rooms = Storage.get_rooms()
        services = Storage.get_services()
        readings = Storage.get_readings()

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

        Storage.save_readings(readings)
        return readings[month]

    @staticmethod
    def get_full_state(month='2026-08'):
        houses = Storage.get_houses()
        users = Storage.get_users()
        rooms = Storage.get_rooms()
        services = Storage.get_services()
        formulas = Storage.get_formulas()
        readings = Storage.get_readings()
        invoices = Storage.get_invoices()
        tickets = Storage.get_tickets()

        RentalService.sync_readings_with_services(month)
        readings = Storage.get_readings()

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
            'currentMonth': month
        }

    @staticmethod
    def save_house(house_id, name, address, description):
        houses = Storage.get_houses()
        h_id = house_id or f"house_{uuid.uuid4().hex[:6]}"
        h_obj = { 'id': h_id, 'name': name, 'address': address, 'description': description }
        
        idx = next((i for i, h in enumerate(houses) if h['id'] == h_id), -1)
        if idx >= 0:
            houses[idx] = h_obj
        else:
            houses.append(h_obj)

        Storage.save_houses(houses)
        return h_obj

    @staticmethod
    def delete_house(house_id):
        houses = Storage.get_houses()
        houses = [h for h in houses if h['id'] != house_id]
        Storage.save_houses(houses)
        return True

    @staticmethod
    def save_service(service_id, house_id, name, price, unit, house_ids=None, calc_type='fixed', formula_id=None):
        services = Storage.get_services()
        srv_id = service_id or f"srv_{uuid.uuid4().hex[:6]}"
        srv_obj = { 
            'id': srv_id, 
            'houseId': house_id or 'all', 
            'houseIds': house_ids if house_ids else (['all'] if house_id == 'all' else [house_id]),
            'name': name, 
            'calcType': calc_type or 'fixed',
            'formulaId': formula_id,
            'price': float(price or 0), 
            'unit': unit 
        }
        
        idx = next((i for i, s in enumerate(services) if s['id'] == srv_id), -1)
        if idx >= 0:
            services[idx] = srv_obj
        else:
            services.append(srv_obj)

        Storage.save_services(services)
        RentalService.sync_readings_with_services()
        return srv_obj

    @staticmethod
    def delete_service(service_id):
        services = Storage.get_services()
        services = [s for s in services if s['id'] != service_id]
        Storage.save_services(services)
        RentalService.sync_readings_with_services()
        return True

    @staticmethod
    def delete_formula(formula_id):
        formulas = Storage.get_formulas()
        formulas = [f for f in formulas if f['id'] != formula_id]
        Storage.save_formulas(formulas)
        return True

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
    def register_user(username, password, full_name):
        users = Storage.get_users()
        if any(u['username'].lower() == username.lower() for u in users):
            return None, 'Tên đăng nhập đã tồn tại!'

        new_user = {
            'id': f"usr_{uuid.uuid4().hex[:8]}",
            'username': username,
            'password': password,
            'fullName': full_name,
            'role': 'tenant',
            'roomId': '',
            'status': 'pending',
            'createdAt': datetime.now().strftime('%Y-%m-%d %H:%M')
        }
        users.append(new_user)
        Storage.save_users(users)
        
        safe_user = {k: v for k, v in new_user.items() if k != 'password'}
        return safe_user, None

    @staticmethod
    def approve_user(user_id, room_id):
        users = Storage.get_users()
        user = next((u for u in users if u['id'] == user_id), None)
        if user:
            user['status'] = 'approved'
            if room_id:
                user['roomId'] = room_id
            Storage.save_users(users)
            return True
        return False

    @staticmethod
    def create_user_by_admin(username, password, full_name, role, room_id):
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
            'status': 'approved',
            'createdAt': datetime.now().strftime('%Y-%m-%d %H:%M')
        }
        users.append(new_user)
        Storage.save_users(users)
        return new_user, None

    @staticmethod
    def delete_user(user_id):
        users = Storage.get_users()
        users = [u for u in users if u['id'] != user_id or u['username'] == 'admin']
        Storage.save_users(users)
        return True

    @staticmethod
    def update_room_reading(month, room_id, field, value):
        readings = Storage.get_readings()
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

        if field in ['elecFormula', 'waterFormula']:
            readings[month][room_id][field] = value
        else:
            try:
                readings[month][room_id][field] = float(value)
            except (ValueError, TypeError):
                readings[month][room_id][field] = 0

        Storage.save_readings(readings)
        return readings[month]

    @staticmethod
    def generate_all_invoices(month):
        rooms = Storage.get_rooms()
        services = Storage.get_services()
        readings = Storage.get_readings().get(month, {})
        invoices = Storage.get_invoices()

        for r in rooms:
            srv_tot, prk_tot, item_list = RentalService.calculate_room_services_total(r, services)
            rd = readings.get(r['id'], {
                'elecOld': 0, 'elecNew': 0, 'waterOld': 0, 'waterNew': 0,
                'elecFormula': r['elecFormula'], 'waterFormula': r['waterFormula']
            })

            elec_usage = max(0, rd.get('elecNew', 0) - rd.get('elecOld', 0))
            water_usage = max(0, rd.get('waterNew', 0) - rd.get('waterOld', 0))

            elec_cost = RentalService.calculate_utility_amount(elec_usage, rd.get('elecFormula'), r['headcount'])
            water_cost = RentalService.calculate_utility_amount(water_usage, rd.get('waterFormula'), r['headcount'])
            
            service_fee = srv_tot
            parking_fee = prk_tot

            total_amount = r['baseRent'] + elec_cost + water_cost + service_fee + parking_fee

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
                'baseRent': r['baseRent'],
                'elecOld': rd.get('elecOld', 0),
                'elecNew': rd.get('elecNew', 0),
                'elecUsage': elec_usage,
                'elecFormula': rd.get('elecFormula'),
                'elecCost': elec_cost,
                'waterOld': rd.get('waterOld', 0),
                'waterNew': rd.get('waterNew', 0),
                'waterUsage': water_usage,
                'waterFormula': rd.get('waterFormula'),
                'waterCost': water_cost,
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

        Storage.save_invoices(invoices)
        return len(rooms)
