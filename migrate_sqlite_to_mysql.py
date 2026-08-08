#!/usr/bin/env python3
"""
One-time migration script: existing SQLite data (data/rental.db) -> MySQL.

The app's storage layer now targets MySQL exclusively (see rental_module/
database.py and rental_module/storage.py). Run this ONCE to carry over
whatever you already have in the old SQLite file before switching over:

    python migrate_sqlite_to_mysql.py

Configure the target MySQL server the same way the app does — via
MYSQL_HOST / MYSQL_PORT / MYSQL_USER / MYSQL_PASSWORD / MYSQL_DATABASE in
.env (see .env.example). Safe to run multiple times — existing MySQL data
is replaced each run (REPLACE INTO), it is not merged/appended.
"""

import os
import sys
import sqlite3
import json

# Ensure the project root is on the path
sys.path.insert(0, os.path.dirname(__file__))

from rental_module.database import init_db
from rental_module.storage import (
    Storage,
    _house, _user, _room, _service, _formula, _investor_expense, _ticket,
    DEFAULT_HOUSES, DEFAULT_USERS, DEFAULT_ROOMS,
    DEFAULT_SERVICES, DEFAULT_FORMULAS, DEFAULT_READINGS,
    DEFAULT_TICKETS, DEFAULT_PERMISSIONS
)

SQLITE_PATH = os.path.join(os.path.dirname(__file__), 'data', 'rental.db')


def open_sqlite():
    if not os.path.exists(SQLITE_PATH):
        print(f"  [INFO] {SQLITE_PATH} not found — nothing to migrate, MySQL will start from defaults.")
        return None
    conn = sqlite3.connect(SQLITE_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def read_table(conn, table, converter):
    try:
        rows = conn.execute(f"SELECT * FROM {table}").fetchall()
    except sqlite3.OperationalError:
        return None  # table doesn't exist in this old SQLite file — fine, older schema version
    return [converter(r) for r in rows]


def read_kv(conn, key, default):
    row = conn.execute("SELECT value FROM kv_store WHERE key=?", (key,)).fetchone()
    if row:
        return json.loads(row['value'])
    return default


def migrate():
    print("=" * 55)
    print("  CalaciHouse SQLite -> MySQL Migration")
    print("=" * 55)

    # Ensure the MySQL database + tables exist before writing to them
    init_db()

    conn = open_sqlite()
    if conn is None:
        return

    houses      = read_table(conn, 'houses', _house) or DEFAULT_HOUSES
    users       = read_table(conn, 'users', _user) or DEFAULT_USERS
    rooms       = read_table(conn, 'rooms', _room) or DEFAULT_ROOMS
    services    = read_table(conn, 'services', _service) or DEFAULT_SERVICES
    formulas    = read_table(conn, 'formulas', _formula) or DEFAULT_FORMULAS
    expenses    = read_table(conn, 'investor_expenses', _investor_expense) or []
    tickets     = read_table(conn, 'tickets', _ticket) or DEFAULT_TICKETS

    readings    = read_kv(conn, 'readings', DEFAULT_READINGS)
    invoices    = read_kv(conn, 'invoices', [])
    permissions = read_kv(conn, 'permissions', DEFAULT_PERMISSIONS)
    room_documents = read_kv(conn, 'room_documents', {})

    conn.close()

    print("\nWriting to MySQL...")

    Storage.save_houses(houses)
    print(f"  + Houses:            {len(houses)}")

    Storage.save_users(users)
    print(f"  + Users:             {len(users)}")

    Storage.save_rooms(rooms)
    print(f"  + Rooms:             {len(rooms)}")

    Storage.save_services(services)
    print(f"  + Services:          {len(services)}")

    Storage.save_formulas(formulas)
    print(f"  + Formulas:          {len(formulas)}")

    Storage.save_investor_expenses(expenses)
    print(f"  + Investor expenses: {len(expenses)}")

    Storage.save_readings(readings)
    months = len(readings) if isinstance(readings, dict) else 0
    print(f"  + Readings:          {months} months")

    Storage.save_invoices(invoices)
    print(f"  + Invoices:          {len(invoices)}")

    Storage.save_tickets(tickets)
    print(f"  + Tickets:           {len(tickets)}")

    Storage.save_permissions(permissions)
    print(f"  + Permissions:       {len(permissions)}")

    Storage.save_room_documents(room_documents)
    print(f"  + Room documents:    {len(room_documents)} rooms")

    print("\n[DONE] Data migrated into MySQL.")
    print("=" * 55)


if __name__ == '__main__':
    migrate()
