from functools import wraps
from flask import session, jsonify, request
from .storage import Storage


def login_required(fn):
    """Reject the request unless a user is logged in (session['user'] set)."""
    @wraps(fn)
    def wrapper(*args, **kwargs):
        if not session.get('user'):
            return jsonify({'success': False, 'error': 'Bạn cần đăng nhập để thực hiện thao tác này!'}), 401
        return fn(*args, **kwargs)
    return wrapper


def roles_required(*roles):
    """Reject the request unless the logged-in user's role is in `roles`."""
    def decorator(fn):
        @wraps(fn)
        def wrapper(*args, **kwargs):
            user = session.get('user')
            if not user:
                return jsonify({'success': False, 'error': 'Bạn cần đăng nhập để thực hiện thao tác này!'}), 401
            if user.get('role') not in roles:
                return jsonify({'success': False, 'error': 'Bạn không có quyền thực hiện thao tác này!'}), 403
            return fn(*args, **kwargs)
        return wrapper
    return decorator


def admin_required(fn):
    """Either admin-tier role: superadmin (full power) or admin (everything
    except delete/managing permissions — enforced separately, see
    superadmin_required and the frontend's hasPermission())."""
    return roles_required('superadmin', 'admin')(fn)


def superadmin_required(fn):
    """The only role that can delete anything or edit the permission
    matrix itself."""
    return roles_required('superadmin')(fn)


def permission_required(feature, action):
    """Gate a write route by the configurable Feature x Action (view/
    create/edit/delete) permissions matrix instead of a hardcoded role
    list — needed for any action the matrix promises 'manager' can do.
    Before this existed, every write route used admin_required (superadmin/
    admin only), so toggling e.g. "Sửa" on for manager on the Báo Lỗi row
    in Phân Quyền Hệ Thống changed what the UI showed them but the backend
    still rejected the request with 403 — the matrix was cosmetic.

    `action` is either a fixed string ('view'/'create'/'edit'/'delete') or
    a callable `(json_body) -> str` for routes that create-or-edit
    depending on whether an id was supplied in the request body.

    superadmin is always allowed. admin is allowed for anything except
    'delete' — delete is a fixed superadmin-only rule established well
    before this matrix existed, never a per-role toggle, so it isn't even
    stored in the matrix; routes that actually delete something use
    superadmin_required directly instead of this decorator. manager is
    allowed only when the matrix's stored value for this feature+action is
    true for them. investor/tenant are never allowed here — their own
    flows (own invoices, own tickets) don't go through admin write routes
    at all, so reaching this decorator as investor/tenant only happens on
    a route they have no legitimate use for."""
    def decorator(fn):
        @wraps(fn)
        def wrapper(*args, **kwargs):
            user = session.get('user')
            if not user:
                return jsonify({'success': False, 'error': 'Bạn cần đăng nhập để thực hiện thao tác này!'}), 401
            role = user.get('role')
            if role == 'superadmin':
                return fn(*args, **kwargs)
            resolved_action = action(request.get_json(silent=True) or {}) if callable(action) else action
            if resolved_action == 'delete':
                return jsonify({'success': False, 'error': 'Bạn không có quyền thực hiện thao tác này!'}), 403
            if role == 'admin':
                return fn(*args, **kwargs)
            if role == 'manager':
                permissions = Storage.get_permissions()
                perm = next((p for p in permissions if p.get('key') == feature), None)
                if perm and perm.get('manager', {}).get(resolved_action):
                    return fn(*args, **kwargs)
            return jsonify({'success': False, 'error': 'Bạn không có quyền thực hiện thao tác này!'}), 403
        return wrapper
    return decorator
