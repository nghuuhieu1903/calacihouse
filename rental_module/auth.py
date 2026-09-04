import hashlib
from functools import wraps
from flask import session, jsonify, request
from .storage import Storage


def password_fingerprint(password):
    """A one-way marker of which password a session was opened with. Stored
    in the session cookie alongside the user so validate_session() can tell
    "this session was opened with the password that's still current" from
    "this session predates a reset" — without ever putting the password
    itself (which this app still stores in plaintext) into a cookie that
    travels to the browser on every request."""
    return hashlib.sha256((password or '').encode('utf-8')).hexdigest()


def start_session(user, password):
    """Open a logged-in session. See app.py's PERMANENT_SESSION_LIFETIME
    comment for why permanent matters on mobile/PWA."""
    session['user'] = user
    session['pwdFp'] = password_fingerprint(password)
    session.permanent = True


def restamp_session_password(password):
    """Called when the logged-in user changes their OWN password — without
    this, the very next request would see their own session's fingerprint
    go stale and log them out of the page they just used to make the
    change."""
    session['pwdFp'] = password_fingerprint(password)


def validate_session():
    """Re-check the logged-in session against the database and drop it if
    it's no longer legitimate. session['user'] is a snapshot taken at
    login, and the cookie lives 30 days, so without this an account keeps
    full access after an admin has already taken it away:

      - password reset: the new password lands in the DB, but whoever is
        already logged in on their phone keeps browsing (and the admin,
        reasonably, reads that as "đổi mật khẩu không ăn").
      - "Khóa tài khoản": status flips to blocked, the account still can't
        log in FRESH, but an existing session sails straight past it.

    Also refreshes role/houseIds from the DB, so a permission or scope
    change takes effect on the next request rather than the next login.
    Returns the refreshed user, or None once the session has been cleared."""
    current = session.get('user')
    if not current:
        return None

    fresh = next((u for u in Storage.get_users() if u['id'] == current.get('id')), None)
    if fresh is None:
        # Account deleted out from under an open session.
        session.clear()
        return None

    if fresh.get('status') != 'approved':
        # Blocked (or reverted to pending) while logged in.
        session.clear()
        return None

    # A session with no fingerprint at all was opened before this check
    # existed. It can't be proven to match the current password, so it's
    # treated as stale — one re-login per user, once, is the price of the
    # reset actually meaning something from here on.
    if session.get('pwdFp') != password_fingerprint(fresh.get('password')):
        session.clear()
        return None

    safe_user = {k: v for k, v in fresh.items() if k != 'password'}
    session['user'] = safe_user
    session.permanent = True
    return safe_user


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
