import os
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
        id          VARCHAR(191) PRIMARY KEY,
        name        TEXT NOT NULL,
        address     TEXT,
        description TEXT
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
        deposit        DOUBLE DEFAULT 0
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
        description TEXT,
        amount      DOUBLE DEFAULT 0,
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
            _promote_admins_to_superadmin(cur)
        conn.commit()
    finally:
        conn.close()
    print("[DB] MySQL ready:", f"{MYSQL_HOST}:{MYSQL_PORT}/{MYSQL_DATABASE}")
