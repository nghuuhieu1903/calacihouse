#!/usr/bin/env python3
"""
One-time migration script: existing JSON files in data/ → SQLite database.

Run ONCE before switching to SQLite:
    python migrate_json_to_sqlite.py

Safe to run multiple times — existing SQLite data is replaced each run.
"""

import os
import sys
import json

# Ensure the project root is on the path
sys.path.insert(0, os.path.dirname(__file__))

from rental_module.database import init_db
from rental_module.storage import (
    Storage,
    DEFAULT_HOUSES, DEFAULT_USERS, DEFAULT_ROOMS,
    DEFAULT_SERVICES, DEFAULT_FORMULAS, DEFAULT_READINGS,
    DEFAULT_TICKETS, DEFAULT_PERMISSIONS
)

DATA_DIR = os.path.join(os.path.dirname(__file__), 'data')


def load_json(filename, default):
    path = os.path.join(DATA_DIR, filename)
    if os.path.exists(path):
        try:
            with open(path, 'r', encoding='utf-8') as f:
                data = json.load(f)
                print(f"  [OK] Loaded {filename}")
                return data
        except Exception as e:
            print(f"  [WARN] Could not read {filename}: {e} - using defaults")
    else:
        print(f"  [INFO] {filename} not found - using defaults")
    return default


def migrate():
    print("=" * 55)
    print("  RentalPro JSON -> SQLite Migration")
    print("=" * 55)

    # Ensure tables exist
    init_db()

    houses      = load_json('houses.json',       DEFAULT_HOUSES)
    users       = load_json('users.json',         DEFAULT_USERS)
    rooms       = load_json('rooms.json',         DEFAULT_ROOMS)
    services    = load_json('services_list.json', DEFAULT_SERVICES)
    formulas    = load_json('formulas.json',      DEFAULT_FORMULAS)
    readings    = load_json('readings.json',      DEFAULT_READINGS)
    invoices    = load_json('invoices.json',      [])
    tickets     = load_json('tickets.json',       DEFAULT_TICKETS)
    permissions = load_json('permissions.json',   DEFAULT_PERMISSIONS)

    print("\nWriting to SQLite...")

    Storage.save_houses(houses)
    print(f"  + Houses:      {len(houses)}")

    Storage.save_users(users)
    print(f"  + Users:       {len(users)}")

    Storage.save_rooms(rooms)
    print(f"  + Rooms:       {len(rooms)}")

    Storage.save_services(services)
    print(f"  + Services:    {len(services)}")

    Storage.save_formulas(formulas)
    print(f"  + Formulas:    {len(formulas)}")

    Storage.save_readings(readings)
    months = len(readings) if isinstance(readings, dict) else 0
    print(f"  + Readings:    {months} months")

    Storage.save_invoices(invoices)
    print(f"  + Invoices:    {len(invoices)}")

    Storage.save_tickets(tickets)
    print(f"  + Tickets:     {len(tickets)}")

    Storage.save_permissions(permissions)
    print(f"  + Permissions: {len(permissions)}")

    db_path = os.path.join(DATA_DIR, 'rental.db')
    size_kb = os.path.getsize(db_path) // 1024 if os.path.exists(db_path) else 0
    print(f"\n[DONE] Database: {db_path} ({size_kb} KB)")
    print("=" * 55)


if __name__ == '__main__':
    migrate()
