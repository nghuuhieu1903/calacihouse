import os
from flask import Flask
from rental_module import rental_bp

app = Flask(__name__)
app.config['SECRET_KEY'] = 'rental_house_secret_key_2026'

# Register the Rental House Blueprint module
# Can be registered with any url_prefix when integrating into an existing main website!
app.register_blueprint(rental_bp, url_prefix='/')

if __name__ == '__main__':
    print("==========================================================")
    print("🚀 Rental House Management Flask Application Running!")
    print("📍 Open in Browser: http://127.0.0.1:5000")
    print("==========================================================")
    app.run(host='127.0.0.1', port=5000, debug=True)
