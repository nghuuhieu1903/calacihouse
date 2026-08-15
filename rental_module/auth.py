from functools import wraps
from flask import session, jsonify
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


def permission_required(permission_key):
    """Gate a write route by the configurable permissions matrix instead of
    a hardcoded role list — needed for any action the matrix promises
    'manager' can do. Before this existed, every write route used
    admin_required (superadmin/admin only), so toggling e.g. "manage_tickets"
    on for manager in Phân Quyền Hệ Thống changed what the UI showed them
    but the backend still rejected the request with 403 — the matrix was
    cosmetic. superadmin and admin are always allowed (matching
    hasPermission() in app.js, which only carves out manage_permissions
    itself as admin-exempt — that key is only ever used with
    superadmin_required directly, never through here). manager is allowed
    only when the matrix's stored value for this key is true for them."""
    def decorator(fn):
        @wraps(fn)
        def wrapper(*args, **kwargs):
            user = session.get('user')
            if not user:
                return jsonify({'success': False, 'error': 'Bạn cần đăng nhập để thực hiện thao tác này!'}), 401
            role = user.get('role')
            if role in ('superadmin', 'admin'):
                return fn(*args, **kwargs)
            if role == 'manager':
                permissions = Storage.get_permissions()
                perm = next((p for p in permissions if p.get('key') == permission_key), None)
                if perm and perm.get('manager'):
                    return fn(*args, **kwargs)
            return jsonify({'success': False, 'error': 'Bạn không có quyền thực hiện thao tác này!'}), 403
        return wrapper
    return decorator
