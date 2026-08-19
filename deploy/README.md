# Triển khai CalaciHouse lên VPS

Hướng dẫn này dùng cho VPS chạy **Ubuntu 22.04/24.04** (Debian tương tự), có quyền `root` hoặc `sudo`. Ứng dụng chạy bằng Gunicorn phía sau Nginx, dữ liệu lưu trong MySQL.

## 0. Chuẩn bị

- Một VPS còn trống (khuyến nghị tối thiểu 1 vCPU / 1GB RAM).
- (Tuỳ chọn) Một tên miền đã trỏ bản ghi `A` về IP của VPS — cần nếu muốn HTTPS.
- SSH vào VPS: `ssh root@<ip-vps>`

## 1. Cài gói hệ thống

```bash
apt update && apt upgrade -y
apt install -y python3 python3-venv python3-pip git nginx mysql-server
```

## 2. Cấu hình MySQL

```bash
mysql_secure_installation   # đặt mật khẩu root, xoá user/db mẫu — làm theo hướng dẫn trên màn hình
```

Tạo database và **một user riêng cho ứng dụng** (không dùng root cho app):

```bash
mysql -u root -p
```
```sql
CREATE DATABASE calacihouse CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'calacihouse'@'localhost' IDENTIFIED BY 'mật-khẩu-mạnh-tự-chọn';
GRANT ALL PRIVILEGES ON calacihouse.* TO 'calacihouse'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

## 3. Tạo user hệ thống chạy app (không dùng root chạy web app)

```bash
useradd --system --home /opt/calacihouse --shell /usr/sbin/nologin www-data-calaci 2>/dev/null || true
mkdir -p /opt/calacihouse /var/log/rental-house
```
> Ghi chú: file service mẫu dùng sẵn user `www-data` có sẵn trên Ubuntu (đi kèm Nginx) — nếu bạn dùng user đó thì bỏ qua bước tạo user riêng ở trên.

## 4. Đưa code lên VPS

Cách đơn giản nhất — clone trực tiếp từ Git remote của bạn:

```bash
cd /opt
git clone <url-repo-cua-ban> calacihouse
```

Hoặc nếu chưa đẩy lên Git, upload từ máy local bằng `rsync` (chạy lệnh này ở máy local, không phải VPS):

```bash
rsync -avz --exclude '.venv' --exclude 'data' --exclude '__pycache__' \
    /Users/scott/Documents/calacihouse-main/ root@<ip-vps>:/opt/calacihouse/
```

## 5. Tạo virtualenv & cài dependencies

```bash
cd /opt/calacihouse
python3 -m venv .venv
.venv/bin/pip install --upgrade pip
.venv/bin/pip install -r requirements.txt
```

## 6. Tạo file `.env`

```bash
cp .env.example .env
nano .env
```

Điền các giá trị thật:

```bash
SECRET_KEY=<chuỗi-ngẫu-nhiên-dài>          # tạo bằng: python3 -c "import secrets; print(secrets.token_hex(32))"
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=calacihouse
MYSQL_PASSWORD=mật-khẩu-mạnh-tự-chọn        # đúng như đã tạo ở bước 2
MYSQL_DATABASE=calacihouse
```

## 7. Khởi tạo dữ liệu

**Cài mới hoàn toàn** (chưa có dữ liệu cũ) — không cần làm gì thêm, `init_db()` tự tạo bảng và dữ liệu mẫu khi app chạy lần đầu ở bước 9.

**Đã có dữ liệu cũ** (file `data/rental.db` từ máy đang dùng SQLite) — copy file đó lên VPS rồi chạy script migrate:

```bash
# ở máy local:
scp data/rental.db root@<ip-vps>:/opt/calacihouse/data/rental.db

# ở VPS:
cd /opt/calacihouse
.venv/bin/python3 migrate_sqlite_to_mysql.py
```

## 8. Phân quyền thư mục

```bash
chown -R www-data:www-data /opt/calacihouse /var/log/rental-house
```

## 9. Cài đặt systemd service (tự chạy nền, tự khởi động lại khi crash/reboot)

```bash
cp deploy/rental-house.service /etc/systemd/system/
systemctl daemon-reload
systemctl enable --now rental-house
systemctl status rental-house      # phải thấy "active (running)"
```

Xem log nếu có lỗi:
```bash
journalctl -u rental-house -f
```

## 10. Cấu hình Nginx (reverse proxy)

```bash
cp deploy/nginx.conf /etc/nginx/sites-available/calacihouse
ln -s /etc/nginx/sites-available/calacihouse /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default   # bỏ trang mặc định của Nginx
nginx -t                                  # kiểm tra cú pháp
systemctl reload nginx
```

Nếu có domain, sửa `server_name _;` trong `/etc/nginx/sites-available/calacihouse` thành `server_name yourdomain.com;` rồi `nginx -t && systemctl reload nginx` lại.

## 11. Mở firewall

```bash
ufw allow OpenSSH
ufw allow 'Nginx Full'   # mở cả 80 và 443
ufw enable
```
Cổng `8000` (gunicorn) **không** cần mở ra ngoài — Nginx là cửa ngõ duy nhất, gunicorn chỉ lắng nghe ở `127.0.0.1:8000`.

## 12. HTTPS miễn phí (nếu có domain)

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d yourdomain.com
```
Certbot tự sửa cấu hình Nginx để bật HTTPS và tự gia hạn chứng chỉ.

## 13. Kiểm tra

Mở trình duyệt vào `http://<ip-vps>` (hoặc domain/https nếu đã cấu hình) — phải thấy màn hình đăng nhập CalaciHouse.

## Cập nhật code sau này

> Ghi chú: VPS hiện tại chạy qua **aaPanel** (không dùng systemd service ở Bước 9) — gunicorn được aaPanel khởi chạy trực tiếp, nên lệnh khởi động lại đúng là gửi tín hiệu `HUP` cho tiến trình master để nó tự nạp lại code, không phải `systemctl restart`.

```bash
cd /opt/calacihouse
git pull                                   # hoặc rsync lại code mới
.venv/bin/pip install -r requirements.txt  # nếu có thêm thư viện mới
pkill -HUP -f gunicorn
```

Nếu VPS của bạn được cài theo đúng Bước 9 (systemd service `rental-house`, không qua aaPanel), dùng `systemctl restart rental-house` thay cho `pkill -HUP -f gunicorn`.
