import json
import os
import re
import pymysql
import pymysql.cursors

MYSQL_HOST = os.getenv('MYSQL_HOST', 'localhost')
MYSQL_PORT = int(os.getenv('MYSQL_PORT', '3306'))
MYSQL_USER = os.getenv('MYSQL_USER', 'root')
MYSQL_PASSWORD = os.getenv('MYSQL_PASSWORD', '')
MYSQL_DATABASE = os.getenv('MYSQL_DATABASE', 'calacihouse')


def get_db():
    """Open a new MySQL connection for each call. DictCursor makes rows
    behave like dicts (row['col']), matching the sqlite3.Row access pattern
    the rest of the app was written against."""
    return pymysql.connect(
        host=MYSQL_HOST,
        port=MYSQL_PORT,
        user=MYSQL_USER,
        password=MYSQL_PASSWORD,
        database=MYSQL_DATABASE,
        charset='utf8mb4',
        cursorclass=pymysql.cursors.DictCursor,
        autocommit=False
    )


def _create_database_if_missing():
    """A fresh MySQL server has no schema yet — connect without selecting a
    database and create it before get_db() (which always selects one) is
    used anywhere else."""
    conn = pymysql.connect(
        host=MYSQL_HOST, port=MYSQL_PORT, user=MYSQL_USER, password=MYSQL_PASSWORD,
        charset='utf8mb4'
    )
    try:
        with conn.cursor() as cur:
            cur.execute(
                f"CREATE DATABASE IF NOT EXISTS `{MYSQL_DATABASE}` "
                "CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci"
            )
        conn.commit()
    finally:
        conn.close()


# Photo uploads (meter readings, room contracts, ticket attachments) are
# stored as base64 data URLs inside JSON blobs and can run to a few MB —
# MySQL's plain TEXT caps at ~64KB, so anything that may hold embedded
# images must be LONGTEXT. Everything else is a normal identifier/label.
SCHEMA_STATEMENTS = [
    """
    CREATE TABLE IF NOT EXISTS houses (
        id                VARCHAR(191) PRIMARY KEY,
        name              TEXT NOT NULL,
        address           TEXT,
        description       TEXT,
        manager_fee_mode  VARCHAR(16) DEFAULT 'percent',
        manager_fee_value DOUBLE DEFAULT 20
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    """,
    """
    CREATE TABLE IF NOT EXISTS users (
        id          VARCHAR(191) PRIMARY KEY,
        username    VARCHAR(191) NOT NULL UNIQUE,
        password    VARCHAR(255) DEFAULT '',
        full_name   TEXT,
        role        VARCHAR(32) DEFAULT 'tenant',
        room_id     VARCHAR(191) DEFAULT '',
        house_id    VARCHAR(191) DEFAULT '',
        house_ids   TEXT,
        has_vehicle TINYINT(1) DEFAULT 0,
        status      VARCHAR(32) DEFAULT 'pending',
        created_at  VARCHAR(32) DEFAULT ''
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    """,
    """
    CREATE TABLE IF NOT EXISTS rooms (
        id             VARCHAR(191) PRIMARY KEY,
        house_id       VARCHAR(191) DEFAULT '',
        name           TEXT NOT NULL,
        tenant         TEXT,
        phone          VARCHAR(32) DEFAULT '',
        base_rent      DOUBLE DEFAULT 0,
        headcount      INT DEFAULT 1,
        room_type      VARCHAR(32) DEFAULT 'single',
        elec_formula   VARCHAR(191) DEFAULT '',
        water_formula  VARCHAR(191) DEFAULT '',
        contract_start VARCHAR(10) DEFAULT '',
        contract_end   VARCHAR(10) DEFAULT '',
        area           DOUBLE DEFAULT 0,
        description    TEXT,
        capacity       INT DEFAULT 0,
        deposit        DOUBLE DEFAULT 0,
        vehicle_count  INT DEFAULT 0
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    """,
    """
    CREATE TABLE IF NOT EXISTS services (
        id           VARCHAR(191) PRIMARY KEY,
        house_id     VARCHAR(191) DEFAULT '',
        name         TEXT NOT NULL,
        price        DOUBLE DEFAULT 0,
        unit         VARCHAR(191) DEFAULT '',
        icon         VARCHAR(64) DEFAULT '',
        symbol       VARCHAR(16) DEFAULT '',
        calc_type    VARCHAR(32) DEFAULT 'fixed',
        formula_id   VARCHAR(191) DEFAULT '',
        house_ids    TEXT,
        room_ids     TEXT,
        apply_rooms  TEXT,
        investor_share TEXT
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    """,
    """
    CREATE TABLE IF NOT EXISTS formulas (
        id          VARCHAR(191) PRIMARY KEY,
        name        TEXT NOT NULL,
        type        VARCHAR(32) DEFAULT '',
        rate        DOUBLE DEFAULT 0,
        category    VARCHAR(32) DEFAULT '',
        tiers_json  TEXT
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    """,
    """
    CREATE TABLE IF NOT EXISTS investor_expenses (
        id          VARCHAR(191) PRIMARY KEY,
        house_id    VARCHAR(191) DEFAULT '',
        month       VARCHAR(16) DEFAULT '',
        name        TEXT,
        description TEXT,
        amount      DOUBLE DEFAULT 0,
        photo       LONGTEXT,
        created_at  VARCHAR(32) DEFAULT ''
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    """,
    # A manual override of the auto-computed investor payout for one
    # house+month — for the rare month where the real arrangement with
    # that investor doesn't match either the % or fixed-amount formula.
    # One row per house+month (id = "<house_id>_<month>"), so saving again
    # for the same month just replaces it; deleting the row reverts back
    # to the formula-computed amount.
    """
    CREATE TABLE IF NOT EXISTS investor_report_overrides (
        id          VARCHAR(191) PRIMARY KEY,
        house_id    VARCHAR(191) DEFAULT '',
        month       VARCHAR(16) DEFAULT '',
        amount      DOUBLE DEFAULT 0,
        note        TEXT,
        created_at  VARCHAR(32) DEFAULT ''
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    """,
    """
    CREATE TABLE IF NOT EXISTS tickets (
        id            VARCHAR(191) PRIMARY KEY,
        room_id       VARCHAR(191) DEFAULT '',
        room_name     TEXT,
        tenant        TEXT,
        category      VARCHAR(64) DEFAULT '',
        priority      VARCHAR(32) DEFAULT '',
        description   TEXT,
        timestamp     VARCHAR(32) DEFAULT '',
        status        VARCHAR(64) DEFAULT '',
        response      TEXT,
        comments_json LONGTEXT,
        images_json   LONGTEXT
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    """,
    # Generic key-value store for readings, invoices, permissions & room
    # documents — all of which nest arbitrary JSON (including photos).
    """
    CREATE TABLE IF NOT EXISTS kv_store (
        `key`   VARCHAR(191) PRIMARY KEY,
        `value` LONGTEXT
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    """
]


def _ensure_column(cur, table, column, ddl):
    """CREATE TABLE IF NOT EXISTS only applies to brand-new installs — an
    already-existing table (like everyone's live `rooms` table) never picks
    up columns added to SCHEMA_STATEMENTS later. Add them here instead, each
    guarded by an existence check so it's a no-op after the first run. Only
    ever ADD COLUMN — never touches existing columns or rows."""
    cur.execute(
        "SELECT COUNT(*) AS c FROM information_schema.columns "
        "WHERE table_schema = %s AND table_name = %s AND column_name = %s",
        (MYSQL_DATABASE, table, column)
    )
    if cur.fetchone()['c'] == 0:
        cur.execute(f"ALTER TABLE {table} ADD COLUMN {column} {ddl}")


def _numeric_name_key(name):
    # Same "extract the number out of the name" rule the room list already
    # sorted by client-side before this feature existed (e.g. "Phòng 4401"
    # -> 4401) — falls back to plain text for a name with no digits at all.
    match = re.search(r'\d+', name or '')
    return (0, int(match.group())) if match else (1, name or '')


def _backfill_house_sort_order(cur):
    """The sort_order column above lands at 0 for every existing row (the
    ALTER TABLE default) — leaving them all tied would make the new
    manual-reorder feature start from whatever order MySQL happens to
    return with no ORDER BY (effectively random-looking), instead of the
    order everyone's already used to seeing. Runs once: as soon as any row
    has a non-zero value (this backfill already ran, or someone's since
    reordered by hand), it's a no-op forever after — never touches an
    order that's actually been set."""
    cur.execute("SELECT COUNT(*) AS c FROM houses WHERE sort_order != 0")
    if cur.fetchone()['c'] > 0:
        return
    cur.execute("SELECT id, name FROM houses")
    rows = sorted(cur.fetchall(), key=lambda row: row['name'] or '')
    for idx, row in enumerate(rows):
        cur.execute("UPDATE houses SET sort_order=%s WHERE id=%s", (idx, row['id']))


def _backfill_room_sort_order(cur):
    """Same idea as _backfill_house_sort_order, but rooms are clustered by
    house first (in that house's own now-backfilled order) and only
    numeric-sorted *within* each house — a flat numeric-only sort here
    would interleave e.g. house A's room 101 and house B's room 102
    instead of grouping each house's rooms together, which is what every
    other room listing on this page groups by."""
    cur.execute("SELECT COUNT(*) AS c FROM rooms WHERE sort_order != 0")
    if cur.fetchone()['c'] > 0:
        return
    cur.execute("SELECT id, sort_order FROM houses ORDER BY sort_order ASC, id ASC")
    house_order = [row['id'] for row in cur.fetchall()]
    cur.execute("SELECT id, name, house_id FROM rooms")
    rooms = cur.fetchall()
    house_index = {hid: i for i, hid in enumerate(house_order)}
    rooms.sort(key=lambda r: (house_index.get(r['house_id'], len(house_order)), _numeric_name_key(r['name'])))
    for idx, row in enumerate(rooms):
        cur.execute("UPDATE rooms SET sort_order=%s WHERE id=%s", (idx, row['id']))


def _backfill_reading_carryover(cur):
    """One-time fix for readings created before sync_readings_with_services()
    (services.py) started carrying the previous month's "New" reading and
    photo forward as each new month's "Old" one — those already-created
    months got stuck with Old=0 and no photo forever, forcing whoever
    filled them in to re-type/re-upload what should carry over on its
    own. Walks every month in order and, for a room whose Old reading is
    still the untouched 0 default, backfills it from the previous month's
    New value (and photo) — exactly what the fixed sync function would
    have done itself had it existed sooner. Guarded by a kv_store marker
    (rather than "any non-zero Old exists", which a legitimate brand-new
    meter starting at 0 could trip on its own) so this only ever runs
    once — after this, a genuinely-zero Old reading is never touched
    again."""
    cur.execute("SELECT `value` FROM kv_store WHERE `key`='readings_carryover_backfilled'")
    if cur.fetchone():
        return
    cur.execute("SELECT `value` FROM kv_store WHERE `key`='readings'")
    row = cur.fetchone()
    if row:
        readings = json.loads(row['value'])
        months = sorted(readings.keys())
        for i in range(1, len(months)):
            prev_rooms = readings.get(months[i - 1], {})
            for room_id, rd in readings.get(months[i], {}).items():
                prev_rd = prev_rooms.get(room_id)
                if not prev_rd:
                    continue
                if not rd.get('elecOld') and prev_rd.get('elecNew'):
                    rd['elecOld'] = prev_rd['elecNew']
                    if prev_rd.get('elecNewPhoto') and not rd.get('elecOldPhoto'):
                        rd['elecOldPhoto'] = prev_rd['elecNewPhoto']
                if not rd.get('waterOld') and prev_rd.get('waterNew'):
                    rd['waterOld'] = prev_rd['waterNew']
                    if prev_rd.get('waterNewPhoto') and not rd.get('waterOldPhoto'):
                        rd['waterOldPhoto'] = prev_rd['waterNewPhoto']
        cur.execute(
            "REPLACE INTO kv_store (`key`, `value`) VALUES (%s, %s)",
            ('readings', json.dumps(readings, ensure_ascii=False))
        )
    cur.execute(
        "REPLACE INTO kv_store (`key`, `value`) VALUES (%s, %s)",
        ('readings_carryover_backfilled', json.dumps(True))
    )


def _promote_admins_to_superadmin(cur):
    """One-time role split: 'admin' used to mean full power including
    delete; now 'superadmin' does, and 'admin' means everything except
    delete. Run only once — if a superadmin already exists, someone (this
    migration or a later manual promotion) already handled it, and any
    'admin' accounts created since are meant to stay 'admin'. Detecting
    "already ran" via existence of the target role, rather than a separate
    migrations-log table, keeps this self-contained."""
    cur.execute("SELECT COUNT(*) AS c FROM users WHERE role = 'superadmin'")
    if cur.fetchone()['c'] > 0:
        return
    cur.execute("UPDATE users SET role = 'superadmin' WHERE role = 'admin'")


def init_db():
    """Create the database and all tables if they don't already exist.
    Called once on app startup. Safe to run every time (IF NOT EXISTS)."""
    _create_database_if_missing()
    conn = get_db()
    try:
        with conn.cursor() as cur:
            for statement in SCHEMA_STATEMENTS:
                cur.execute(statement)
            _ensure_column(cur, 'rooms', 'room_type', "VARCHAR(32) DEFAULT 'single'")
            _ensure_column(cur, 'rooms', 'contract_start', "VARCHAR(10) DEFAULT ''")
            _ensure_column(cur, 'rooms', 'contract_end', "VARCHAR(10) DEFAULT ''")
            _ensure_column(cur, 'rooms', 'area', "DOUBLE DEFAULT 0")
            _ensure_column(cur, 'rooms', 'description', "TEXT")
            _ensure_column(cur, 'rooms', 'capacity', "INT DEFAULT 0")
            _ensure_column(cur, 'rooms', 'deposit', "DOUBLE DEFAULT 0")
            _ensure_column(cur, 'services', 'investor_share', "TEXT")
            _ensure_column(cur, 'users', 'house_ids', "TEXT")
            _ensure_column(cur, 'investor_expenses', 'photo', "LONGTEXT")
            _ensure_column(cur, 'houses', 'manager_fee_mode', "VARCHAR(16) DEFAULT 'percent'")
            _ensure_column(cur, 'houses', 'manager_fee_value', "DOUBLE DEFAULT 20")
            _ensure_column(cur, 'rooms', 'vehicle_count', "INT DEFAULT 0")
            _ensure_column(cur, 'users', 'has_vehicle', "TINYINT(1) DEFAULT 0")
            _ensure_column(cur, 'investor_expenses', 'name', "TEXT")
            _ensure_column(cur, 'houses', 'sort_order', "INT DEFAULT 0")
            _ensure_column(cur, 'rooms', 'sort_order', "INT DEFAULT 0")
            _promote_admins_to_superadmin(cur)
            _backfill_house_sort_order(cur)
            _backfill_room_sort_order(cur)
            _backfill_reading_carryover(cur)
        conn.commit()
    finally:
        conn.close()
    print("[DB] MySQL ready:", f"{MYSQL_HOST}:{MYSQL_PORT}/{MYSQL_DATABASE}")
