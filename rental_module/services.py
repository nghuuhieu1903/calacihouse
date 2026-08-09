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
        room_documents = Storage.get_room_documents()
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
            users = []  # investor dashboard has no need for the account directory

        # The investor payout report is an admin/manager-only tool — an investor
        # or tenant session must never receive these figures, regardless of the
        # house filtering above.
        role = current_user.get('role') if current_user else None
        if role not in ('admin', 'manager'):
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
            'roomDocuments': room_documents,
            'investorExpenses': investor_expenses,
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
        Storage.delete_house(house_id)
        return True

    @staticmethod
    def save_service(service_id, house_id, name, price, unit, house_ids=None, calc_type='fixed', formula_id=None, icon='package', symbol='📦', room_ids=None):
        services = Storage.get_services()
        srv_id = service_id or f"srv_{uuid.uuid4().hex[:6]}"
        srv_obj = { 
            'id': srv_id, 
            'houseId': house_id or 'all', 
            'houseIds': house_ids if house_ids else (['all'] if house_id == 'all' else [house_id]),
            'roomIds': room_ids if room_ids else ['all'],
            'name': name, 
            'icon': icon or 'package',
            'symbol': symbol or '📦',
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
        Storage.delete_service(service_id)
        RentalService.sync_readings_with_services()
        return True

    @staticmethod
    def save_formula(formula_id, name, f_type, rate, category=None):
        formulas = Storage.get_formulas()
        f_id = formula_id or f"formula_{uuid.uuid4().hex[:6]}"
        cat = category or ('water' if 'nước' in name.lower() else 'elec')
        f_obj = {
            'id': f_id,
            'name': name,
            'type': f_type,
            'rate': float(rate or 0),
            'category': cat
        }
        idx = next((i for i, f in enumerate(formulas) if f['id'] == f_id), -1)
        if idx >= 0:
            formulas[idx] = f_obj
        else:
            formulas.append(f_obj)
        Storage.save_formulas(formulas)
        return f_obj

    @staticmethod
    def delete_formula(formula_id):
        Storage.delete_formula(formula_id)
        return True

    @staticmethod
    def save_room(room_id, house_id, name, tenant, phone, base_rent, headcount, elec_formula, water_formula):
        rooms = Storage.get_rooms()
        r_id = room_id or f"R{uuid.uuid4().hex[:4].upper()}"
        r_obj = {
            'id': r_id,
            'houseId': house_id or 'house_a',
            'name': name,
            'tenant': tenant or '',
            'phone': phone or '',
            'baseRent': float(base_rent or 0),
            'headcount': int(headcount or 1),
            'elecFormula': elec_formula or 'elec_flat_3500',
            'waterFormula': water_formula or 'water_flat_18000'
        }
        idx = next((i for i, r in enumerate(rooms) if r['id'] == r_id), -1)
        if idx >= 0:
            rooms[idx] = r_obj
        else:
            rooms.append(r_obj)
        Storage.save_rooms(rooms)
        RentalService.sync_readings_with_services()
        return r_obj

    @staticmethod
    def delete_room(room_id):
        Storage.delete_room(room_id)
        RentalService.sync_readings_with_services()
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
        users.append(new_user)
        Storage.save_users(users)
        return new_user, None

    @staticmethod
    def update_user_by_admin(user_id, full_name, role, room_id, status, new_password=None, house_id=''):
        users = Storage.get_users()
        user = next((u for u in users if u['id'] == user_id), None)
        if user:
            if user['username'] == 'admin':
                user['fullName'] = full_name
                user['role'] = 'admin'
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

            Storage.save_users(users)
            return user, None
        return None, 'User not found'

    @staticmethod
    def delete_user(user_id):
        users = Storage.get_users()
        user = next((u for u in users if u['id'] == user_id), None)
        if user and user['username'] != 'admin':
            Storage.delete_user(user_id)
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
                'elecOldPhoto': rd.get('elecOldPhoto', ''),
                'elecNewPhoto': rd.get('elecNewPhoto', ''),
                'waterOld': rd.get('waterOld', 0),
                'waterNew': rd.get('waterNew', 0),
                'waterUsage': water_usage,
                'waterFormula': rd.get('waterFormula'),
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

        Storage.save_invoices(invoices)
        return len(rooms)

    @staticmethod
    def save_investor_expense(expense_id, house_id, month, description, amount):
        expenses = Storage.get_investor_expenses()
        e_id = expense_id or f"exp_{uuid.uuid4().hex[:8]}"
        idx = next((i for i, e in enumerate(expenses) if e['id'] == e_id), -1)
        created_at = expenses[idx]['createdAt'] if idx >= 0 else datetime.now().strftime('%Y-%m-%d %H:%M')

        e_obj = {
            'id': e_id,
            'houseId': house_id or '',
            'month': month or '',
            'description': description or '',
            'amount': float(amount or 0),
            'createdAt': created_at
        }

        if idx >= 0:
            expenses[idx] = e_obj
        else:
            expenses.append(e_obj)

        Storage.save_investor_expenses(expenses)
        return e_obj

    @staticmethod
    def delete_investor_expense(expense_id):
        Storage.delete_investor_expense(expense_id)
        return True

    @staticmethod
    def create_ticket(ticket_id, room_id, category, priority, description, images):
        tickets = Storage.get_tickets()
        rooms = Storage.get_rooms()
        room = next((r for r in rooms if r['id'] == room_id), None)
        room_name = room['name'] if room else 'Phòng'
        tenant = room['tenant'] if room else 'Khách'
        
        ticket_obj = {
            'id': ticket_id or f"TK-{datetime.now().strftime('%M%S')}",
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
        tickets.insert(0, ticket_obj)
        Storage.save_tickets(tickets)
        return ticket_obj

    @staticmethod
    def reply_ticket(ticket_id, status, response, comment=None):
        tickets = Storage.get_tickets()
        ticket = next((t for t in tickets if t['id'] == ticket_id), None)
        if ticket:
            ticket['status'] = status
            ticket['response'] = response
            if 'comments' not in ticket:
                ticket['comments'] = []
            if comment:
                ticket['comments'].append(comment)
            Storage.save_tickets(tickets)
            return True
        return False

    @staticmethod
    def save_permissions(matrix):
        Storage.save_permissions(matrix)
        return True

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
        documents = Storage.get_room_documents()
        room_docs = documents.get(room_id, [])
        d_id = doc_id or f"doc_{uuid.uuid4().hex[:8]}"
        d_obj = {
            'id': d_id,
            'label': label or 'Tài liệu',
            'dataUrl': data_url,
            'uploadedAt': datetime.now().strftime('%Y-%m-%d %H:%M')
        }
        idx = next((i for i, d in enumerate(room_docs) if d['id'] == d_id), -1)
        if idx >= 0:
            room_docs[idx] = d_obj
        else:
            room_docs.append(d_obj)
        documents[room_id] = room_docs
        Storage.save_room_documents(documents)
        return d_obj

    @staticmethod
    def delete_room_document(room_id, doc_id):
        documents = Storage.get_room_documents()
        room_docs = documents.get(room_id, [])
        documents[room_id] = [d for d in room_docs if d['id'] != doc_id]
        Storage.save_room_documents(documents)
        return True
