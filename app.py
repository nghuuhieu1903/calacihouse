# Chạy: python3 app.py
# Truy cập: http://127.0.0.1:8000  (đổi cổng bằng biến môi trường PORT nếu cần)
import os
from dotenv import load_dotenv

load_dotenv()  # must run before importing rental_module — it reads MySQL env vars at import time

from flask import Flask
from flask_compress import Compress
from rental_module import rental_bp
from rental_module.database import init_db

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'rental_house_secret_key_2026')

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


