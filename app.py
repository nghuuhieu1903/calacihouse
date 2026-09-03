# Chạy: python3 app.py
# Truy cập: http://127.0.0.1:8000  (đổi cổng bằng biến môi trường PORT nếu cần)
import os
from datetime import timedelta
from dotenv import load_dotenv

load_dotenv()  # must run before importing rental_module — it reads MySQL env vars at import time

from flask import Flask
from flask_compress import Compress
from rental_module import rental_bp
from rental_module.database import init_db

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'rental_house_secret_key_2026')

# Without PERMANENT_SESSION_LIFETIME, session['user'] rides on a plain
# "browser session" cookie — no Expires/Max-Age at all, so it's up to each
# browser to decide when that counts as "closed." Reopening the app from a
# phone's home-screen icon (or the OS backgrounding-then-discarding the
# tab, or some mobile browsers' own aggressive cookie GC) reliably reads as
# a fresh session to a lot of mobile browsers/PWA contexts, silently
# logging the user out — reported as "mỗi lần reload là phải login lại".
# routes.py sets session.permanent = True at login (and on every session
# refresh) so the cookie instead carries a real 30-day Max-Age that
# survives all of that, sliding forward on each request
# (SESSION_REFRESH_EACH_REQUEST defaults to True).
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(days=30)

# gzip every response (JS/CSS/HTML and, importantly, the /api/data JSON
# payload — which embeds base64 room photos and can run into the megabytes)
# regardless of whether the front-end nginx/aaPanel proxy has its own gzip
# turned on, since that's config on the VPS this repo doesn't control.
app.config['COMPRESS_MIMETYPES'] = [
    'text/html', 'text/css', 'text/xml', 'application/json',
    'application/javascript', 'text/javascript', 'application/manifest+json'
]
Compress(app)

# Initialize MySQL tables on startup (safe — uses CREATE TABLE IF NOT EXISTS)
init_db()

# Register the Rental House Blueprint module
# Can be registered with any url_prefix when integrating into an existing main website!
app.register_blueprint(rental_bp, url_prefix='/')

if __name__ == '__main__':
    port = int(os.getenv('PORT', 8000))
    local_url = f"http://127.0.0.1:{port}"
    print("==========================================================")
    print("CalaciHouse - Rental House Management Application")
    print(f"Local:   {local_url}")
    print("==========================================================")
    app.run(host='0.0.0.0', port=port, debug=True)


