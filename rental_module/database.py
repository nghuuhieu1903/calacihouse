import sqlite3
import os

# Database file stored inside the data/ folder
DB_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'data', 'rental.db')


def get_db():
    """Open a new SQLite connection for each call. Thread-safe via WAL mode."""
    os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
    conn = sqlite3.connect(DB_PATH, check_same_thread=False)
    conn.row_factory = sqlite3.Row          # rows behave like dicts
    conn.execute("PRAGMA journal_mode=WAL") # allows concurrent reads
    conn.execute("PRAGMA foreign_keys=ON")
    return conn


def init_db():
    """Create all tables if they don't already exist. Called once on app startup."""
    conn = get_db()
    conn.executescript("""
        CREATE TABLE IF NOT EXISTS houses (
            id          TEXT PRIMARY KEY,
            name        TEXT NOT NULL,
            address     TEXT DEFAULT '',
            description TEXT DEFAULT ''
        );

        CREATE TABLE IF NOT EXISTS users (
            id          TEXT PRIMARY KEY,
            username    TEXT NOT NULL UNIQUE,
            password    TEXT NOT NULL DEFAULT '',
            full_name   TEXT DEFAULT '',
            role        TEXT DEFAULT 'tenant',
            room_id     TEXT DEFAULT '',
            status      TEXT DEFAULT 'pending',
            created_at  TEXT DEFAULT ''
        );

        CREATE TABLE IF NOT EXISTS rooms (
            id             TEXT PRIMARY KEY,
            house_id       TEXT DEFAULT '',
            name           TEXT NOT NULL,
            tenant         TEXT DEFAULT '',
            phone          TEXT DEFAULT '',
            base_rent      INTEGER DEFAULT 0,
            headcount      INTEGER DEFAULT 1,
            elec_formula   TEXT DEFAULT '',
            water_formula  TEXT DEFAULT ''
        );

        CREATE TABLE IF NOT EXISTS services (
            id           TEXT PRIMARY KEY,
            house_id     TEXT DEFAULT '',
            name         TEXT NOT NULL,
            price        INTEGER DEFAULT 0,
            unit         TEXT DEFAULT '',
            icon         TEXT DEFAULT '',
            apply_rooms  TEXT DEFAULT '[]'
        );

        CREATE TABLE IF NOT EXISTS formulas (
            id          TEXT PRIMARY KEY,
            name        TEXT NOT NULL,
            type        TEXT DEFAULT '',
            rate        REAL DEFAULT 0,
            category    TEXT DEFAULT '',
            tiers_json  TEXT
        );

        CREATE TABLE IF NOT EXISTS tickets (
            id            TEXT PRIMARY KEY,
            room_id       TEXT DEFAULT '',
            room_name     TEXT DEFAULT '',
            tenant        TEXT DEFAULT '',
            category      TEXT DEFAULT '',
            priority      TEXT DEFAULT '',
            description   TEXT DEFAULT '',
            timestamp     TEXT DEFAULT '',
            status        TEXT DEFAULT '',
            response      TEXT DEFAULT '',
            comments_json TEXT DEFAULT '[]',
            images_json   TEXT DEFAULT '[]'
        );

        -- Generic key-value store for readings, invoices, permissions
        CREATE TABLE IF NOT EXISTS kv_store (
            key   TEXT PRIMARY KEY,
            value TEXT
        );
    """)
    conn.commit()
    conn.close()
    print("[DB] SQLite ready:", DB_PATH)
