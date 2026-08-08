# Chạy: python3 app.py
# Truy cập: http://127.0.0.1:8000  (đổi cổng bằng biến môi trường PORT nếu cần)
import os
from flask import Flask
from dotenv import load_dotenv
from rental_module import rental_bp
from rental_module.database import init_db

load_dotenv()  # load .env if present

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'rental_house_secret_key_2026')

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


