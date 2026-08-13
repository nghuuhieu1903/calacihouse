from functools import wraps
from flask import session, jsonify


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
