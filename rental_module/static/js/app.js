/* ==========================================================================
   RENTALPRO - DYNAMIC INDIVIDUAL COLUMN SPREADSHEET ENGINE
   ========================================================================== */

const I18N = {
  vi: {
    username: 'Tên đăng nhập',
    password: 'Mật khẩu',
    fullname: 'Họ và Tên',
    login_btn: 'Đăng Nhập Ngay',
    register_btn: 'Gửi Đăng Ký Chờ Duyệt',
    menu_admin: 'Quản Lý Admin',
    menu_tenant: 'Cổng Khách Thuê',
    nav_dashboard: 'Tổng Quan',
    nav_services: 'Cấu Hình Dịch Vụ & Điện Nước',
    nav_spreadsheet: 'Bảng Tính Điện Nước & Phụ Phí',
    nav_invoices: 'Quản Lý Hóa Đơn',
    nav_tickets: 'Xử Lý Báo Lỗi',
    nav_users: 'Quản Lý Tài Khoản',
    nav_my_invoices: 'Hóa Đơn Của Tôi',
    nav_send_ticket: 'Gửi Báo Lỗi / Khiếu Nại',
    billing_period: 'Kỳ hóa đơn:',
    stat_revenue: 'Tổng thu dự kiến',
    stat_rooms: 'Số phòng đã thuê',
    stat_pending: 'Hóa đơn chờ thu',
    stat_tickets: 'Báo lỗi cần xử lý',
    quick_actions: 'Phím Tắt Thao Tác Nhanh',
    act_enter_utility: 'Nhập Điện Nước',
    act_send_invoices: 'Tự Động Gửi Hóa Đơn',
    act_manage_users: 'Duyệt Tài Khoản',
    invoice_status: 'Trạng Thái Hóa Đơn',
    spreadsheet_title: 'Bảng Báo Chỉ Số Điện Nước & Tự Động Tính Tiền',
    spreadsheet_subtitle: 'Mỗi khoản phí dịch vụ hiển thị thành một cột riêng biệt có Icon + Tên tương ứng',
    btn_formulas: 'Quản Lý Công Thức',
    btn_auto_invoice: 'Tự Động Gửi Hóa Đơn',
    col_room: 'Phòng',
    col_tenant: 'Khách Thuê',
    col_rent: 'Tiền Nhà',
    col_total: '💰 Tổng Cộng',
    col_actions: 'Thao Tác',
    invoices_title: 'Danh Sách Hóa Đơn Đã Phát Hành',
    btn_refresh_invoices: 'Cập Nhật Hóa Đơn',
    col_inv_id: 'Mã Hóa Đơn',
    col_period: 'Kỳ Hóa Đơn',
    col_send_status: 'Trạng Thái Gửi',
    col_pay_status: 'Thanh Toán',
    col_sent_time: 'Ngày Gửi',
    tickets_title: 'Danh Sách Báo Lỗi Từ Khách Thuê',
    tickets_subtitle: 'Tiếp nhận sự cố, cập nhật trạng thái và phản hồi khách thuê',
    col_ticket_id: 'Mã Ticket',
    col_category: 'Phân Loại',
    col_priority: 'Mức Độ',
    col_desc: 'Nội Dung',
    col_time: 'Thời Gian',
    col_status: 'Trạng Thái',
    users_title: 'Quản Lý Tài Khoản Khách Thuê & Duyệt Đăng Ký',
    users_subtitle: 'Duyệt tài khoản mới đăng ký, gán phòng hoặc tạo tài khoản mới',
    btn_create_user: 'Tạo Tài Khoản Mới',
    col_username: 'Tên Đăng Nhập',
    col_fullname: 'Họ Và Tên',
    col_role: 'Vai Trò',
    col_assigned_room: 'Phòng Được Gán',
    col_time_created: 'Ngày Tạo',
    formulas_title: 'Cấu Hình Công Thức Tính Điện & Nước',
    formulas_subtitle: 'Bạn có thể tự quyết định đơn giá cố định hoặc định nghĩa các bậc thang tính toán',
    btn_add_formula: 'Tạo Công Thức Mới',
    my_invoice_title: 'Hóa Đơn Tháng Của Tôi',
    my_invoice_subtitle: 'Xem chi tiết bảng kê diễn giải chỉ số và mã QR thanh toán',
    form_ticket_title: 'Gửi Báo Lỗi / Khiếu Nại',
    lbl_category: 'Loại sự cố',
    lbl_priority: 'Mức độ ưu tiên',
    lbl_desc: 'Mô tả sự cố',
    btn_send_report: 'Gửi Báo Lỗi Cho Admin',
    my_tickets_history: 'Lịch Sử Báo Lỗi',
    col_admin_reply: 'Phản Hồi Admin',
    modal_create_user_title: 'Tạo Tài Khoản Người Dùng Mới',
    btn_cancel: 'Hủy',
    btn_save: 'Lưu Tài Khoản',
    status_approved: 'Đã Duyệt',
    status_pending: 'Chờ Duyệt',
    status_blocked: 'Đã Khóa',
    btn_approve: 'Duyệt',
    btn_delete: 'Xóa'
  },
  en: {
    username: 'Username',
    password: 'Password',
    fullname: 'Full Name',
    login_btn: 'Sign In Now',
    register_btn: 'Submit Registration',
    menu_admin: 'Admin Management',
    menu_tenant: 'Tenant Portal',
    nav_dashboard: 'Dashboard',
    nav_services: 'Service & Utility Setup',
    nav_spreadsheet: 'Utility & Fees Sheet',
    nav_invoices: 'Invoice Manager',
    nav_tickets: 'Issue Tickets',
    nav_users: 'Account Manager',
    nav_my_invoices: 'My Invoices',
    nav_send_ticket: 'Report An Issue',
    billing_period: 'Billing Period:',
    stat_revenue: 'Expected Revenue',
    stat_rooms: 'Occupied Rooms',
    stat_pending: 'Pending Invoices',
    stat_tickets: 'Open Issue Tickets',
    quick_actions: 'Quick Action Shortcuts',
    act_enter_utility: 'Input Readings',
    act_send_invoices: 'Auto Send Invoices',
    act_manage_users: 'Approve Accounts',
    invoice_status: 'Invoice Status Breakdown',
    spreadsheet_title: 'Utility Reading Sheet & Auto Calculator',
    spreadsheet_subtitle: 'Individual distinct columns with matching icon + service name',
    btn_formulas: 'Manage Formulas',
    btn_auto_invoice: 'Auto Send Invoices',
    col_room: 'Room',
    col_tenant: 'Tenant Name',
    col_rent: 'Base Rent',
    col_total: '💰 Grand Total',
    col_actions: 'Actions',
    invoices_title: 'Issued Invoices List',
    btn_refresh_invoices: 'Refresh Invoices',
    col_inv_id: 'Invoice ID',
    col_period: 'Period',
    col_send_status: 'Send Status',
    col_pay_status: 'Payment Status',
    col_sent_time: 'Date Sent',
    tickets_title: 'Tenant Issue Reports & Complaints',
    tickets_subtitle: 'Receive reported issues, update progress, and reply to tenants',
    col_ticket_id: 'Ticket ID',
    col_category: 'Category',
    col_priority: 'Priority',
    col_desc: 'Description',
    col_time: 'Timestamp',
    col_status: 'Status',
    users_title: 'Tenant Account & Approval Management',
    users_subtitle: 'Approve newly registered accounts, assign rooms, or create accounts',
    btn_create_user: 'Create New Account',
    col_username: 'Username',
    col_fullname: 'Full Name',
    col_role: 'Role',
    col_assigned_room: 'Assigned Room',
    col_time_created: 'Created Date',
    formulas_title: 'Utility Calculation Formula Config',
    formulas_subtitle: 'Configure flat rates or EVN tiered rate calculation rules',
    btn_add_formula: 'Create New Formula',
    my_invoice_title: 'My Monthly Invoice',
    my_invoice_subtitle: 'View itemized breakdown, calculation rules, and payment QR',
    form_ticket_title: 'Submit Incident / Issue Report',
    lbl_category: 'Issue Category',
    lbl_priority: 'Priority Level',
    lbl_desc: 'Detailed Description',
    btn_send_report: 'Submit Ticket To Admin',
    my_tickets_history: 'Report History',
    col_admin_reply: 'Admin Response',
    modal_create_user_title: 'Create New User Account',
    btn_cancel: 'Cancel',
    btn_save: 'Save Account',
    status_approved: 'Approved',
    status_pending: 'Pending',
    status_blocked: 'Blocked',
    btn_approve: 'Approve',
    btn_delete: 'Delete'
  }
};

const ICON_LIBRARY = [
  { icon: 'zap', symbol: '⚡', label: 'Điện' },
  { icon: 'droplet', symbol: '💧', label: 'Nước' },
  { icon: 'wifi', symbol: '🌐', label: 'Internet' },
  { icon: 'trash-2', symbol: '🧹', label: 'Rác' },
  { icon: 'bike', symbol: '🛵', label: 'Xe máy' },
  { icon: 'shield-check', symbol: '🛡️', label: 'Bảo vệ' },
  { icon: 'sparkles', symbol: '✨', label: 'Vệ sinh' },
  { icon: 'key', symbol: '🔑', label: 'Thẻ từ' },
  { icon: 'snowflake', symbol: '❄️', label: 'Điều hòa' },
  { icon: 'package', symbol: '📦', label: 'Khác' }
];

const DEFAULT_CLIENT_USERS = [
  { username: 'admin', password: '123', fullName: 'Quản Lý Hệ Thống (Admin)', role: 'admin', roomId: '', status: 'approved' },
  { username: 'nguyenvanan', password: '123', fullName: 'Nguyễn Văn An', role: 'tenant', roomId: 'R101', status: 'approved' },
  { username: 'tranthibich', password: '123', fullName: 'Trần Thị Bích', role: 'tenant', roomId: 'R102', status: 'approved' }
];

let state = {
  lang: 'vi',
  currentUser: null,
  currentView: 'admin-dashboard',
  currentMonth: '2026-08',
  currentHouseId: 'all',
  currentRoomId: 'all',
  theme: 'light',
  houses: [
    { id: 'house_a', name: 'Tòa Nhà A - Cầu Giấy', address: '12 Nguyễn Phong Sắc, Cầu Giấy' },
    { id: 'house_b', name: 'Tòa Nhà B - Bình Thạnh', address: '45 Điện Biên Phủ, Bình Thạnh' }
  ],
  users: DEFAULT_CLIENT_USERS,
  rooms: [
    { id: 'R101', houseId: 'house_a', name: 'Phòng 101 (Tòa A)', tenant: 'Nguyễn Văn An', phone: '0901234567', baseRent: 3500000, headcount: 2, elecFormula: 'elec_flat_3500', waterFormula: 'water_flat_18000' },
    { id: 'R102', houseId: 'house_a', name: 'Phòng 102 (Tòa A)', tenant: 'Trần Thị Bích', phone: '0912345678', baseRent: 4000000, headcount: 3, elecFormula: 'elec_evn_tiered', waterFormula: 'water_flat_18000' },
    { id: 'R201', houseId: 'house_b', name: 'Phòng 201 (Tòa B)', tenant: 'Lê Hoàng Nam', phone: '0987654321', baseRent: 3800000, headcount: 1, elecFormula: 'elec_flat_3500', waterFormula: 'water_headcount_100k' },
    { id: 'R202', houseId: 'house_b', name: 'Phòng 202 (Tòa B)', tenant: 'Phạm Minh Tuấn', phone: '0934567890', baseRent: 4200000, headcount: 2, elecFormula: 'elec_flat_4000', waterFormula: 'water_flat_18000' }
  ],
  services: [
    { id: 'srv_elec', houseId: 'all', houseIds: ['all'], name: 'Tiền Điện', icon: 'zap', symbol: '⚡', calcType: 'formula', formulaId: 'elec_flat_3500', price: 3500, unit: 'Theo chỉ số (kWh)' },
    { id: 'srv_water', houseId: 'all', houseIds: ['all'], name: 'Tiền Nước', icon: 'droplet', symbol: '💧', calcType: 'formula', formulaId: 'water_flat_18000', price: 18000, unit: 'Theo chỉ số (m³)' },
    { id: 'srv_trash', houseId: 'all', houseIds: ['all'], name: 'gom rác', icon: 'trash-2', symbol: '🧹', calcType: 'fixed', price: 50000, unit: 'Cố định / phòng' },
    { id: 'srv_internet', houseId: 'all', houseIds: ['all'], name: 'Internet', icon: 'wifi', symbol: '🌐', calcType: 'fixed', price: 50000, unit: 'Cố định / phòng' },
    { id: 'srv_parking', houseId: 'all', houseIds: ['all'], name: 'Phí Gửi Xe Máy', icon: 'bike', symbol: '🛵', calcType: 'fixed', price: 50000, unit: 'Cố định / phòng' }
  ],
  formulas: [
    { id: 'elec_flat_3500', name: 'Điện Cố Định (3,500đ / kWh)', type: 'flat', rate: 3500, category: 'elec' },
    { id: 'elec_evn_tiered', name: 'Điện Bậc Thang EVN Sinh Hoạt', type: 'tiered', category: 'elec', tiers: [{ max: 50, rate: 1893 }, { max: 100, rate: 1956 }, { max: 200, rate: 2271 }, { max: 300, rate: 2860 }, { max: 'inf', rate: 3197 }] },
    { id: 'water_flat_18000', name: 'Nước Theo Khối (18,000đ / m³)', type: 'flat', rate: 18000, category: 'water' },
    { id: 'water_headcount_100k', name: 'Nước Khoán Đầu Người (Giá Tiền x Số Người)', type: 'headcount', rate: 100000, category: 'water' }
  ],
  readings: {},
  invoices: [],
  tickets: []
};

const API_BASE = '/api';

/* ==========================================================================
   AUTHENTICATION LOGIC
   ========================================================================== */

function setAuthTab(tab) {
  const tabLogin = document.getElementById('tab-login');
  const tabReg = document.getElementById('tab-register');
  const formLogin = document.getElementById('form-login');
  const formReg = document.getElementById('form-register');

  if (tab === 'login') {
    tabLogin.classList.add('active');
    tabReg.classList.remove('active');
    formLogin.style.display = 'block';
    formReg.style.display = 'none';
  } else {
    tabReg.classList.add('active');
    tabLogin.classList.remove('active');
    formReg.style.display = 'block';
    formLogin.style.display = 'none';
  }
}

async function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value.trim();

  if (!username || !password) {
    showToast('Vui lòng nhập tên đăng nhập và mật khẩu!', 'error');
    return;
  }

  try {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    if (res.ok) {
      const data = await res.json();
      if (data.success) {
        state.currentUser = data.user;
        showToast(`Xin chào, ${data.user.fullName}!`, 'success');
        document.getElementById('auth-screen').style.display = 'none';
        document.getElementById('tvk-navbar').style.display = 'flex';
        document.getElementById('app-container').style.display = 'flex';
        setupUserRoleUI();
        await fetchState();
        return;
      } else {
        showToast(data.error || 'Sai tên đăng nhập hoặc mật khẩu!', 'error');
        return;
      }
    }
  } catch (err) {
    console.warn('Flask server fetch error, falling back to local authentication:', err);
  }

  const foundUser = state.users.find(
    u => u.username.toLowerCase() === username.toLowerCase() && u.password === password
  );

  if (foundUser) {
    if (foundUser.status === 'pending') {
      showToast('Tài khoản của bạn đang chờ Admin duyệt!', 'error');
      return;
    }
    state.currentUser = foundUser;
    showToast(`Xin chào, ${foundUser.fullName}!`, 'success');
    document.getElementById('auth-screen').style.display = 'none';
    document.getElementById('tvk-navbar').style.display = 'flex';
    document.getElementById('app-container').style.display = 'flex';
    setupUserRoleUI();
    renderCurrentView();
  } else {
    showToast('Sai tên đăng nhập hoặc mật khẩu! Mật khẩu mặc định: 123', 'error');
  }
}

async function handleRegister(event) {
  event.preventDefault();
  const fullName = document.getElementById('reg-fullname').value.trim();
  const username = document.getElementById('reg-username').value.trim();
  const password = document.getElementById('reg-password').value.trim();

  try {
    const res = await fetch(`${API_BASE}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, fullName })
    });

    const data = await res.json();
    if (res.ok && data.success) {
      showToast(data.message, 'success');
      setAuthTab('login');
      document.getElementById('login-username').value = '';
      document.getElementById('login-password').value = '';
      return;
    }
  } catch (err) {
    console.warn('API error, saving registration offline:', err);
  }

  state.users.push({
    id: `usr_${Date.now()}`,
    username, password, fullName, role: 'tenant', roomId: '', status: 'pending', createdAt: 'Hôm nay'
  });
  showToast('Đăng ký thành công! Vui lòng chờ Admin duyệt tài khoản.', 'success');
  setAuthTab('login');
  document.getElementById('login-username').value = '';
  document.getElementById('login-password').value = '';
}

function handleLogout() {
  state.currentUser = null;
  if (document.getElementById('login-username')) document.getElementById('login-username').value = '';
  if (document.getElementById('login-password')) document.getElementById('login-password').value = '';
  document.getElementById('auth-screen').style.display = 'flex';
  document.getElementById('tvk-navbar').style.display = 'none';
  document.getElementById('app-container').style.display = 'none';
  showToast('Đã đăng xuất tài khoản!', 'info');
}

function setupUserRoleUI() {
  const user = state.currentUser;
  if (!user) return;

  const adminNav = document.querySelector('.admin-nav');
  const tenantNav = document.querySelector('.tenant-nav');
  const houseBox = document.getElementById('nav-house-box');
  const avatarText = document.getElementById('user-avatar-text');
  const nameEl = document.getElementById('user-display-name');
  const roleEl = document.getElementById('user-display-role');

  avatarText.innerText = user.role === 'admin' ? 'AD' : user.username.substring(0, 2).toUpperCase();
  nameEl.innerText = user.fullName;
  roleEl.innerText = user.role === 'admin' ? 'Quản trị viên' : (user.roomId ? `Phòng ${user.roomId.replace('R', '')}` : 'Khách thuê');

  if (user.role === 'admin') {
    adminNav.style.display = 'flex';
    tenantNav.style.display = 'none';
    if (houseBox) houseBox.style.display = 'flex';
    switchView('admin-dashboard');
  } else {
    adminNav.style.display = 'none';
    tenantNav.style.display = 'flex';
    if (houseBox) houseBox.style.display = 'none';
    switchView('tenant-invoices');
  }
}

function renderHouseSelector() {
  const select = document.getElementById('select-house');
  if (!select) return;

  let html = `<option value="all" ${state.currentHouseId === 'all' ? 'selected' : ''}>🏢 Tất Cả Tòa Nhà</option>`;
  state.houses.forEach(h => {
    html += `<option value="${h.id}" ${state.currentHouseId === h.id ? 'selected' : ''}>📍 ${h.name}</option>`;
  });
  select.innerHTML = html;
  renderRoomSelector();
}

function renderRoomSelector() {
  const select = document.getElementById('select-room');
  if (!select) return;

  const houseRooms = state.currentHouseId === 'all' 
    ? state.rooms 
    : state.rooms.filter(r => r.houseId === state.currentHouseId);

  let html = `<option value="all" ${state.currentRoomId === 'all' ? 'selected' : ''}>🚪 Tất Cả Phòng (${houseRooms.length})</option>`;
  houseRooms.forEach(r => {
    html += `<option value="${r.id}" ${state.currentRoomId === r.id ? 'selected' : ''}>Phòng ${r.name.replace('Phòng ', '')}</option>`;
  });
  select.innerHTML = html;
}

function handleHouseChange() {
  const select = document.getElementById('select-house');
  state.currentHouseId = select.value;
  state.currentRoomId = 'all';
  renderRoomSelector();
  renderCurrentView();
}

function handleRoomChange() {
  const select = document.getElementById('select-room');
  state.currentRoomId = select.value;
  renderCurrentView();
}

function setLanguage(lang) {
  state.lang = lang;
  document.getElementById('btn-lang-vi').style.background = lang === 'vi' ? 'rgba(255, 255, 255, 0.4)' : 'transparent';
  document.getElementById('btn-lang-en').style.background = lang === 'en' ? 'rgba(255, 255, 255, 0.4)' : 'transparent';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N[lang] && I18N[lang][key]) {
      el.innerText = I18N[lang][key];
    }
  });

  if (state.currentUser) {
    switchView(state.currentView);
  }
}

async function fetchState() {
  try {
    const res = await fetch(`${API_BASE}/data?month=${state.currentMonth}`);
    if (res.ok) {
      const data = await res.json();
      state.houses = data.houses || state.houses;
      state.users = data.users || state.users;
      state.rooms = data.rooms || state.rooms;
      state.services = data.services || state.services;
      state.formulas = data.formulas || state.formulas;
      state.readings = data.readings || state.readings;
      state.invoices = data.invoices || state.invoices;
      state.tickets = data.tickets || state.tickets;
      renderHouseSelector();
      renderCurrentView();
    }
  } catch (err) {
    console.warn('API fetch warning:', err);
  }
}

function renderCurrentView() {
  switchView(state.currentView);
}

function switchView(viewId) {
  state.currentView = viewId;

  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.getAttribute('data-view') === viewId);
  });

  document.querySelectorAll('.view-panel').forEach(panel => {
    panel.style.display = 'none';
  });

  const targetPanel = document.getElementById(`view-${viewId}`);
  if (targetPanel) {
    targetPanel.style.display = 'block';
  }

  const dict = I18N[state.lang] || I18N.vi;
  const titleEl = document.getElementById('page-title');
  const subtitleEl = document.getElementById('page-subtitle');

  switch (viewId) {
    case 'admin-dashboard':
      titleEl.innerText = dict.nav_dashboard;
      subtitleEl.innerText = 'Thống kê hoạt động và hóa đơn tháng hiện tại';
      renderAdminDashboard();
      break;
    case 'admin-services':
      titleEl.innerText = dict.nav_services;
      subtitleEl.innerText = 'Cấu hình từng loại dịch vụ và quy tắc tính tiền';
      renderServicesConfig();
      break;
    case 'admin-spreadsheet':
      titleEl.innerText = dict.spreadsheet_title;
      subtitleEl.innerText = dict.spreadsheet_subtitle;
      renderSpreadsheet();
      break;
    case 'admin-invoices':
      titleEl.innerText = dict.invoices_title;
      subtitleEl.innerText = 'Xem danh sách và kiểm tra trạng thái thanh toán';
      renderAdminInvoices();
      break;
    case 'admin-rooms':
      titleEl.innerText = 'Quản Lý Phòng Trọ';
      subtitleEl.innerText = 'Thêm, sửa, xóa phòng và cấu hình giá thuê';
      renderRoomsManagement();
      break;
    case 'admin-tickets':
      titleEl.innerText = dict.tickets_title;
      subtitleEl.innerText = dict.tickets_subtitle;
      showTicketList();
      renderAdminTickets();
      break;
    case 'admin-users':
      titleEl.innerText = dict.users_title;
      subtitleEl.innerText = dict.users_subtitle;
      renderAdminUsers();
      break;
    case 'tenant-invoices':
      titleEl.innerText = dict.my_invoice_title;
      subtitleEl.innerText = dict.my_invoice_subtitle;
      renderTenantInvoiceView();
      break;
    case 'tenant-reports':
      titleEl.innerText = dict.form_ticket_title;
      subtitleEl.innerText = 'Gửi báo lỗi sự cố và theo dõi phản hồi';
      renderTenantReportsView();
      break;
  }

  updateBadges();
  lucide.createIcons();
}

/* ==========================================================================
   DYNAMIC MULTI-HOUSE SERVICE & UTILITY CALCULATION ENGINE
   ========================================================================== */

function getFilteredRooms() {
  let rooms = state.rooms;
  if (state.currentHouseId !== 'all') {
    rooms = rooms.filter(r => r.houseId === state.currentHouseId);
  }
  if (state.currentRoomId !== 'all') {
    rooms = rooms.filter(r => r.id === state.currentRoomId);
  }
  return rooms;
}

function serviceMatchesHouse(service, targetHouseId) {
  if (targetHouseId === 'all') return true;
  if (!service.houseId || service.houseId === 'all') return true;
  if (Array.isArray(service.houseIds)) {
    return service.houseIds.includes('all') || service.houseIds.includes(targetHouseId);
  }
  return service.houseId === targetHouseId;
}

function serviceMatchesRoom(service, targetRoomId) {
  if (!targetRoomId) return true;
  if (!service.roomIds || !Array.isArray(service.roomIds) || service.roomIds.includes('all')) {
    return true;
  }
  return service.roomIds.includes(targetRoomId);
}

function getFilteredServices() {
  return state.services.filter(s => serviceMatchesHouse(s, state.currentHouseId));
}

function calculateServiceCostForRoom(service, room) {
  const headcount = room.headcount || 1;
  const price = service.price || 0;
  const unit = service.unit || '';

  if (service.calcType === 'formula') {
    return 0; // Calculated via readings meter
  }
  if (unit === 'Theo đầu người') {
    return price * headcount;
  }
  return price;
}

function calculateRoomServiceTotal(room) {
  const houseId = room.houseId || 'house_a';
  const houseServices = state.services.filter(s => serviceMatchesHouse(s, houseId) && serviceMatchesRoom(s, room.id));

  let serviceTotal = 0;
  let parkingTotal = 0;
  let serviceCount = 0;
  let items = [];

  houseServices.forEach(s => {
    const cost = calculateServiceCostForRoom(s, room);
    const symbol = s.symbol || '📦';
    const name = s.name || '';
    const unit = s.unit || '';
    const nameLower = name.toLowerCase();

    if (s.calcType === 'formula') {
      return;
    }

    if (nameLower.includes('xe') || unit === 'Theo xe / tháng') {
      parkingTotal += cost;
      items.push({ id: s.id, name, symbol, price: s.price, unit, total: cost, isParking: true });
    } else {
      serviceTotal += cost;
      serviceCount++;
      items.push({ id: s.id, name, symbol, price: s.price, unit: unit === 'Theo đầu người' ? `${room.headcount} người x ${formatMoney(s.price)}đ` : unit, total: cost, isParking: false });
    }
  });

  return { serviceTotal, parkingTotal, serviceCount, items };
}

function renderServicesConfig() {
  const houseLabel = document.getElementById('current-house-name-label');
  const currentHouse = state.houses.find(h => h.id === state.currentHouseId);
  if (houseLabel) {
    houseLabel.innerText = currentHouse ? currentHouse.name : 'Tất Cả Tòa Nhà';
  }

  const sBody = document.getElementById('services-table-body');
  sBody.innerHTML = '';

  const activeServices = getFilteredServices();

  if (activeServices.length === 0) {
    sBody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:1.5rem; color:var(--text-secondary);">Chưa có dịch vụ nào. Nhấn "Thêm Dịch Vụ Mới" để tạo.</td></tr>`;
  } else {
    activeServices.forEach(s => {
      let houseBadge = '';
      if (!s.houseId || s.houseId === 'all' || (Array.isArray(s.houseIds) && s.houseIds.includes('all'))) {
        houseBadge = `<span class="badge badge-paid" style="font-size:0.65rem;">🌐 Tất Cả Tòa Nhà</span>`;
      } else if (Array.isArray(s.houseIds)) {
        const names = state.houses.filter(h => s.houseIds.includes(h.id)).map(h => h.name).join(', ');
        houseBadge = `<span class="badge badge-resolved" style="font-size:0.65rem;">📍 ${names || 'Nhiều Tòa'}</span>`;
      } else {
        const house = state.houses.find(h => h.id === s.houseId);
        houseBadge = `<span class="badge badge-resolved" style="font-size:0.65rem;">📍 ${house ? house.name : s.houseId}</span>`;
      }

      let roomBadge = '';
      if (!s.roomIds || (Array.isArray(s.roomIds) && s.roomIds.includes('all'))) {
        roomBadge = `<span class="badge badge-paid" style="font-size:0.65rem;">🚪 Tất Cả Phòng</span>`;
      } else if (Array.isArray(s.roomIds)) {
        const roomNames = state.rooms.filter(r => s.roomIds.includes(r.id)).map(r => r.name.replace('Phòng ', 'P.')).join(', ');
        roomBadge = `<span class="badge badge-resolved" style="font-size:0.65rem;">🔑 ${roomNames || s.roomIds.length + ' phòng'}</span>`;
      }

      let calcTypeHtml = '';
      let ruleHtml = '';

      if (s.calcType === 'formula') {
        const f = state.formulas.find(x => x.id === s.formulaId);
        calcTypeHtml = `
          <span class="badge badge-pending">🧮 THEO CÔNG THỨC</span><br>
          <strong style="color:var(--tvk-blue); font-size:0.85rem;">${f ? f.name : (s.formulaId || 'Bậc thang EVN')}</strong>
        `;
        ruleHtml = `<span class="badge badge-resolved" style="background:#e6f4fe; color:#0178d2;">TẠO CỘT NHẬP CHỈ SỐ CŨ/MỚI</span>`;
      } else {
        calcTypeHtml = `
          <span class="badge badge-paid">💰 CỐ ĐỊNH</span><br>
          <strong style="color:var(--tvk-blue); font-size:0.95rem;">${formatMoney(s.price)} đ</strong>
        `;
        ruleHtml = `<span class="badge badge-paid">TẠO CỘT HIỂN THỊ SỐ TIỀN RÊNG</span>`;
      }

      const iconSymbol = s.symbol || '📦';

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <div style="display:flex; align-items:center; gap:0.6rem;">
            <div style="width:36px; height:36px; border-radius:50%; background:var(--tvk-blue-light); color:var(--tvk-blue); display:flex; align-items:center; justify-content:center; font-size:1.1rem; font-weight:bold;">
              ${iconSymbol}
            </div>
            <div>
              <strong>${s.name}</strong><br>${houseBadge} ${roomBadge}
            </div>
          </div>
        </td>
        <td>${calcTypeHtml}</td>
        <td>${ruleHtml}</td>
        <td style="text-align: right;">
          <button class="btn btn-secondary btn-sm" onclick="editService('${s.id}')" title="Sửa Dịch Vụ & Icon"><i data-lucide="edit"></i> Sửa</button>
          <button class="btn btn-secondary btn-sm" onclick="deleteServiceApi('${s.id}')" style="color: var(--tvk-red);" title="Xóa"><i data-lucide="trash-2"></i></button>
        </td>
      `;
      sBody.appendChild(tr);
    });
  }

  const fGrid = document.getElementById('services-formulas-grid');
  fGrid.innerHTML = '';
  state.formulas.forEach(f => {
    const card = document.createElement('div');
    card.style.cssText = 'padding: 0.85rem 1rem; border: 1px solid var(--border-color); border-radius: var(--radius-md); background: var(--bg-base); display: flex; justify-content: space-between; align-items: center;';
    card.innerHTML = `
      <div>
        <div style="font-weight: 800; color: var(--tvk-blue);">${f.name}</div>
        <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 2px;">
          ${f.type === 'flat' ? `Đơn giá: ${formatMoney(f.rate)} đ` : (f.type === 'headcount' ? `Khoán: ${formatMoney(f.rate)} đ / người` : 'Bậc thang EVN 5 mức')}
        </div>
      </div>
      <div style="display: flex; gap: 0.5rem; align-items: center;">
        <span class="badge ${f.category === 'elec' ? 'badge-resolved' : 'badge-paid'}">${f.category === 'elec' ? 'Điện' : 'Nước'}</span>
        <button class="btn btn-secondary btn-sm" onclick="deleteFormulaApi('${f.id}')" style="color: var(--tvk-red);" title="Xóa"><i data-lucide="trash-2"></i></button>
      </div>
    `;
    fGrid.appendChild(card);
  });

  lucide.createIcons();
}

function renderIconPicker(selectedIcon = 'package') {
  const container = document.getElementById('icon-picker-container');
  if (!container) return;

  let html = '';
  ICON_LIBRARY.forEach(item => {
    const isSelected = item.icon === selectedIcon;
    html += `
      <div class="icon-picker-option ${isSelected ? 'selected' : ''}" onclick="selectServiceIcon('${item.icon}', '${item.symbol}')">
        <span style="font-size:1.3rem;">${item.symbol}</span>
        <span style="font-size:0.7rem; color:var(--text-secondary); margin-top:2px;">${item.label}</span>
      </div>
    `;
  });
  container.innerHTML = html;
}

function selectServiceIcon(iconName, symbolStr) {
  document.getElementById('service-icon').value = iconName;
  document.getElementById('service-symbol').value = symbolStr;
  renderIconPicker(iconName);
}

function openAddHouseModal() {
  document.getElementById('house-id').value = '';
  document.getElementById('house-name').value = '';
  document.getElementById('house-address').value = '';
  document.getElementById('house-desc').value = '';
  document.getElementById('modal-add-house').classList.add('active');
}

async function saveHouse(event) {
  event.preventDefault();
  const id = document.getElementById('house-id').value;
  const name = document.getElementById('house-name').value.trim();
  const address = document.getElementById('house-address').value.trim();
  const description = document.getElementById('house-desc').value.trim();

  const hObj = { id: id || `house_${Date.now()}`, name, address, description };
  const idx = state.houses.findIndex(h => h.id === hObj.id);
  if (idx >= 0) state.houses[idx] = hObj;
  else state.houses.push(hObj);

  state.currentHouseId = hObj.id;

  try {
    await fetch(`${API_BASE}/houses/save`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(hObj)
    });
  } catch (err) {
    console.warn('Saved house locally:', err);
  }

  showToast(`Đã thêm Tòa Nhà "${name}" thành công!`, 'success');
  closeModal('modal-add-house');
  renderHouseSelector();
  renderCurrentView();
}

/* RENDER HIERARCHICAL HOUSE & EXPANDABLE ROOM SCOPE TREE IN SERVICE MODAL */
function renderServiceScopeTree(selectedHouseIds = ['all'], selectedRoomIds = ['all']) {
  const container = document.getElementById('service-scope-container');
  if (!container) return;

  const isAllMasterChecked = (selectedHouseIds.includes('all') || selectedHouseIds.length === state.houses.length) && 
                             (selectedRoomIds.includes('all') || selectedRoomIds.length === state.rooms.length);

  let html = `
    <div style="border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; margin-bottom: 0.25rem;">
      <label class="checkbox-item" style="margin: 0; padding: 0;">
        <input type="checkbox" id="chk-scope-all" value="all" ${isAllMasterChecked ? 'checked' : ''} onchange="toggleAllScopeMaster(this)">
        <span style="font-weight: 800; color: var(--tvk-blue);">🌐 Tất Cả Tòa Nhà & Phòng (Áp dụng toàn bộ hệ thống)</span>
      </label>
    </div>
  `;

  state.houses.forEach(h => {
    const houseRooms = state.rooms.filter(r => (r.houseId === h.id || r.house_id === h.id));
    const isHouseExplicit = isAllMasterChecked || selectedHouseIds.includes('all') || selectedHouseIds.includes(h.id);
    const checkedRoomCount = houseRooms.filter(r => isAllMasterChecked || selectedRoomIds.includes('all') || selectedRoomIds.includes(r.id)).length;
    const isHouseAllChecked = isAllMasterChecked || (isHouseExplicit && (selectedRoomIds.includes('all') || checkedRoomCount === houseRooms.length));

    html += `
      <div style="border: 1px solid var(--border-color); border-radius: var(--radius-sm); background: var(--bg-surface); overflow: hidden;">
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.5rem 0.75rem; background: var(--bg-surface);">
          <label class="checkbox-item" style="margin: 0; padding: 0;">
            <input type="checkbox" class="chk-house-node" data-house="${h.id}" value="${h.id}" ${isHouseAllChecked ? 'checked' : ''} onchange="toggleHouseNodeCheckbox('${h.id}', this)">
            <span style="font-weight: 700;">📍 ${h.name}</span>
          </label>
          
          <button type="button" class="btn btn-secondary btn-sm" onclick="toggleHouseRoomSublist('${h.id}')" style="padding: 3px 10px; font-size: 0.75rem; border-radius: var(--radius-sm);">
            <span id="badge-count-${h.id}">${isHouseAllChecked ? houseRooms.length : checkedRoomCount}/${houseRooms.length} phòng</span>
            <i data-lucide="chevron-down" id="chevron-${h.id}" style="width:14px; height:14px; margin-left:4px;"></i>
          </button>
        </div>

        <div id="sublist-rooms-${h.id}" style="display: none; padding: 0.5rem 0.75rem 0.65rem 2.2rem; background: var(--bg-base); border-top: 1px solid var(--border-color); flex-direction: column; gap: 0.45rem;">
          ${houseRooms.map(r => {
            const isRoomChecked = isHouseAllChecked || selectedRoomIds.includes(r.id);
            return `
              <label class="checkbox-item" style="font-size: 0.85rem; font-weight: 600;">
                <input type="checkbox" class="chk-room-node chk-room-of-${h.id}" data-house="${h.id}" value="${r.id}" ${isRoomChecked ? 'checked' : ''} onchange="updateRoomNodeCheckbox('${h.id}')">
                <span>🔑 ${r.name}</span>
              </label>
            `;
          }).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  lucide.createIcons();
}

function toggleAllScopeMaster(masterChk) {
  const isChecked = masterChk.checked;
  document.querySelectorAll('.chk-house-node').forEach(c => c.checked = isChecked);
  document.querySelectorAll('.chk-room-node').forEach(c => c.checked = isChecked);

  state.houses.forEach(h => {
    const houseRooms = state.rooms.filter(r => (r.houseId === h.id || r.house_id === h.id));
    const badge = document.getElementById(`badge-count-${h.id}`);
    if (badge) badge.innerText = isChecked ? `${houseRooms.length}/${houseRooms.length} phòng` : `0/${houseRooms.length} phòng`;
  });
}

function toggleHouseNodeCheckbox(houseId, houseChk) {
  const isChecked = houseChk.checked;
  document.querySelectorAll(`.chk-room-of-${houseId}`).forEach(c => c.checked = isChecked);

  const houseRooms = state.rooms.filter(r => (r.houseId === houseId || r.house_id === houseId));
  const badge = document.getElementById(`badge-count-${houseId}`);
  if (badge) badge.innerText = isChecked ? `${houseRooms.length}/${houseRooms.length} phòng` : `0/${houseRooms.length} phòng`;

  updateMasterScopeCheckbox();
}

function updateRoomNodeCheckbox(houseId) {
  const roomNodes = Array.from(document.querySelectorAll(`.chk-room-of-${houseId}`));
  const checkedRooms = roomNodes.filter(c => c.checked).length;
  const houseChk = document.querySelector(`.chk-house-node[data-house="${houseId}"]`);

  if (houseChk) {
    houseChk.checked = (checkedRooms === roomNodes.length && roomNodes.length > 0);
  }

  const badge = document.getElementById(`badge-count-${houseId}`);
  if (badge) badge.innerText = `${checkedRooms}/${roomNodes.length} phòng`;

  updateMasterScopeCheckbox();
}

function updateMasterScopeCheckbox() {
  const masterChk = document.getElementById('chk-scope-all');
  const allRooms = Array.from(document.querySelectorAll('.chk-room-node'));
  const allChecked = allRooms.length > 0 && allRooms.every(c => c.checked);
  if (masterChk) masterChk.checked = allChecked;
}

function toggleHouseRoomSublist(houseId) {
  const sublist = document.getElementById(`sublist-rooms-${houseId}`);
  const chevron = document.getElementById(`chevron-${houseId}`);
  if (!sublist) return;

  const isHidden = sublist.style.display === 'none' || sublist.style.display === '';
  sublist.style.display = isHidden ? 'flex' : 'none';
  if (chevron) {
    chevron.setAttribute('data-lucide', isHidden ? 'chevron-up' : 'chevron-down');
    lucide.createIcons();
  }
}

function getSelectedScopeFromTree() {
  const masterChk = document.getElementById('chk-scope-all');
  if (masterChk && masterChk.checked) {
    return { houseIds: ['all'], roomIds: ['all'] };
  }

  const checkedHouses = Array.from(document.querySelectorAll('.chk-house-node'))
    .filter(c => c.checked)
    .map(c => c.value);

  const checkedRooms = Array.from(document.querySelectorAll('.chk-room-node'))
    .filter(c => c.checked)
    .map(c => c.value);

  const houseIds = (checkedHouses.length === state.houses.length || checkedHouses.length === 0) ? ['all'] : checkedHouses;
  const roomIds = (checkedRooms.length === state.rooms.length || checkedRooms.length === 0) ? ['all'] : checkedRooms;

  return { houseIds, roomIds };
}

function toggleServiceCalcFields() {
  const calcType = document.getElementById('service-calc-type').value;
  const boxFixed = document.getElementById('box-service-fixed');
  const boxFormula = document.getElementById('box-service-formula');

  if (calcType === 'formula') {
    boxFixed.style.display = 'none';
    boxFormula.style.display = 'block';

    const formulaSelect = document.getElementById('service-formula-id');
    formulaSelect.innerHTML = state.formulas.map(f => `<option value="${f.id}">${f.name}</option>`).join('');
  } else {
    boxFixed.style.display = 'block';
    boxFormula.style.display = 'none';
  }
}

function openAddServiceModal() {
  document.getElementById('service-id').value = '';
  document.getElementById('service-name').value = '';
  document.getElementById('service-icon').value = 'package';
  document.getElementById('service-symbol').value = '📦';
  document.getElementById('service-calc-type').value = 'fixed';
  document.getElementById('service-price').value = '50000';
  document.getElementById('service-unit').value = 'Cố định / phòng';
  
  renderIconPicker('package');
  toggleServiceCalcFields();

  const initialHouseSelected = state.currentHouseId === 'all' ? ['all'] : [state.currentHouseId];
  const initialRoomSelected = state.currentRoomId === 'all' ? ['all'] : [state.currentRoomId];
  renderServiceScopeTree(initialHouseSelected, initialRoomSelected);
  document.getElementById('modal-service-config').classList.add('active');
}

function editService(srvId) {
  const srv = state.services.find(s => s.id === srvId);
  if (!srv) return;

  let houseIds = ['all'];
  if (Array.isArray(srv.houseIds)) houseIds = srv.houseIds;
  else if (srv.houseId) houseIds = [srv.houseId];

  let roomIds = ['all'];
  if (Array.isArray(srv.roomIds)) roomIds = srv.roomIds;

  renderServiceScopeTree(houseIds, roomIds);
  renderIconPicker(srv.icon || 'package');

  document.getElementById('service-id').value = srv.id;
  document.getElementById('service-name').value = srv.name;
  document.getElementById('service-icon').value = srv.icon || 'package';
  document.getElementById('service-symbol').value = srv.symbol || '📦';
  document.getElementById('service-calc-type').value = srv.calcType || 'fixed';

  toggleServiceCalcFields();

  if (srv.calcType === 'formula') {
    document.getElementById('service-formula-id').value = srv.formulaId || (state.formulas[0] ? state.formulas[0].id : '');
  } else {
    document.getElementById('service-price').value = srv.price || 50000;
    document.getElementById('service-unit').value = srv.unit || 'Cố định / phòng';
  }

  document.getElementById('modal-service-config').classList.add('active');
}

async function saveService(event) {
  event.preventDefault();
  const id = document.getElementById('service-id').value;
  const { houseIds: selectedHouseIds, roomIds: selectedRoomIds } = getSelectedScopeFromTree();
  const name = document.getElementById('service-name').value.trim();
  const icon = document.getElementById('service-icon').value;
  const symbol = document.getElementById('service-symbol').value;
  const calcType = document.getElementById('service-calc-type').value;

  const houseId = selectedHouseIds.length === 1 ? selectedHouseIds[0] : 'all';
  let sObj = { id: id || `srv_${Date.now()}`, houseId, houseIds: selectedHouseIds, roomIds: selectedRoomIds, name, icon, symbol, calcType };

  if (calcType === 'formula') {
    sObj.formulaId = document.getElementById('service-formula-id').value;
    const f = state.formulas.find(x => x.id === sObj.formulaId);
    sObj.price = f ? (f.rate || 0) : 0;
    sObj.unit = 'Theo chỉ số';
  } else {
    sObj.price = parseFloat(document.getElementById('service-price').value) || 0;
    sObj.unit = document.getElementById('service-unit').value;
  }

  const idx = state.services.findIndex(s => s.id === sObj.id);
  if (idx >= 0) state.services[idx] = sObj;
  else state.services.push(sObj);

  // Clear stored readings overrides to enforce real-time recalculation
  if (state.readings[state.currentMonth]) {
    state.rooms.forEach(r => {
      if (state.readings[state.currentMonth][r.id]) {
        delete state.readings[state.currentMonth][r.id].serviceFee;
        delete state.readings[state.currentMonth][r.id].parkingFee;
      }
    });
  }

  try {
    await fetch(`${API_BASE}/services/save`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sObj)
    });
  } catch (err) {
    console.warn('Service saved locally:', err);
  }

  showToast(`Đã lưu dịch vụ "${name}" (${symbol})! Bảng tính & Hóa đơn đã cập nhật.`, 'success');
  closeModal('modal-service-config');
  renderServicesConfig();
  if (state.currentView === 'admin-spreadsheet') renderSpreadsheet();
}

async function deleteServiceApi(srvId) {
  if (!confirm('Bạn có chắc chắn muốn xóa dịch vụ này?')) return;
  state.services = state.services.filter(s => s.id !== srvId);

  if (state.readings[state.currentMonth]) {
    state.rooms.forEach(r => {
      if (state.readings[state.currentMonth][r.id]) {
        delete state.readings[state.currentMonth][r.id].serviceFee;
        delete state.readings[state.currentMonth][r.id].parkingFee;
      }
    });
  }

  try {
    await fetch(`${API_BASE}/services/delete`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: srvId })
    });
  } catch (err) {
    console.warn('Deleted service locally:', err);
  }

  showToast('Đã xóa dịch vụ! Bảng tính & Hóa đơn đã cập nhật.', 'success');
  renderServicesConfig();
  if (state.currentView === 'admin-spreadsheet') renderSpreadsheet();
}

async function deleteFormulaApi(formulaId) {
  if (!confirm('Bạn có chắc chắn muốn xóa công thức này?')) return;
  state.formulas = state.formulas.filter(f => f.id !== formulaId);

  try {
    await fetch(`${API_BASE}/formulas/delete`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: formulaId })
    });
  } catch (err) {
    console.warn('Deleted formula locally:', err);
  }

  showToast('Đã xóa công thức!', 'success');
  renderServicesConfig();
}

/* ==========================================================================
   DYNAMIC SPREADSHEET WITH INDIVIDUAL SERVICE COLUMNS (NO GỘP CHUNG)
   ========================================================================== */

function calculateUtilityAmount(usage, formulaId, headcount = 1) {
  const formula = state.formulas.find(f => f.id === formulaId);
  if (!formula) return Math.round(usage * 3500);

  if (formula.type === 'flat') {
    return Math.round(Math.max(0, usage) * (formula.rate || 0));
  }
  if (formula.type === 'headcount') {
    return Math.round((formula.rate || 0) * headcount);
  }
  if (formula.type === 'tiered' && formula.tiers) {
    let total = 0;
    let remainingUsage = Math.max(0, usage);
    let prevMax = 0;

    for (let tier of formula.tiers) {
      if (remainingUsage <= 0) break;
      const tierMax = (tier.max === 'inf' || tier.max === null) ? Infinity : tier.max;
      const tierLimit = tierMax - prevMax;
      const usageInTier = Math.min(remainingUsage, tierLimit);
      total += usageInTier * tier.rate;
      remainingUsage -= usageInTier;
      prevMax = tierMax;
    }
    return Math.round(total);
  }
  return Math.round(usage * 3500);
}

function getFormulaDescription(formulaId, usage, headcount) {
  const formula = state.formulas.find(f => f.id === formulaId);
  if (!formula) return 'Cố định';
  if (formula.type === 'flat') return `${formula.name} (${formatMoney(formula.rate)}/đv)`;
  if (formula.type === 'headcount') return `${formula.name} (${headcount} người x ${formatMoney(formula.rate)})`;
  if (formula.type === 'tiered') return `${formula.name} (Bậc thang EVN tiêu thụ ${usage} kWh)`;
  return formula.name;
}

function renderAdminDashboard() {
  const activeRooms = getFilteredRooms();
  const monthReadings = state.readings[state.currentMonth] || {};
  let totalRevenue = 0;

  activeRooms.forEach(r => {
    const rd = monthReadings[r.id] || {};
    let roomTot = r.baseRent;

    const houseServices = state.services.filter(s => serviceMatchesHouse(s, r.houseId));
    houseServices.forEach(s => {
      if (s.calcType === 'formula') {
        const isElec = s.name.includes('Điện');
        const usage = isElec ? Math.max(0, (rd.elecNew || 0) - (rd.elecOld || 0)) : Math.max(0, (rd.waterNew || 0) - (rd.waterOld || 0));
        const fId = isElec ? (rd.elecFormula || r.elecFormula) : (rd.waterFormula || r.waterFormula);
        roomTot += calculateUtilityAmount(usage, fId, r.headcount);
      } else {
        roomTot += calculateServiceCostForRoom(s, r);
      }
    });

    totalRevenue += roomTot;
  });

  const monthInvoices = state.invoices.filter(inv => inv.month === state.currentMonth && (state.currentHouseId === 'all' || inv.houseId === state.currentHouseId));
  const pendingInvoices = monthInvoices.filter(inv => inv.status === 'Chờ thanh toán').length;
  const openTickets = state.tickets.filter(t => t.status !== 'Đã hoàn thành').length;

  document.getElementById('stat-total-revenue').innerText = formatMoney(totalRevenue) + ' đ';
  document.getElementById('stat-occupied-rooms').innerText = `${activeRooms.length} phòng`;
  document.getElementById('stat-pending-invoices').innerText = pendingInvoices;
  document.getElementById('stat-open-tickets').innerText = openTickets;

  const summaryBox = document.getElementById('dashboard-invoice-summary');
  if (monthInvoices.length === 0) {
    summaryBox.innerHTML = `
      <div style="padding: 1rem; text-align: center; background: var(--bg-base); border-radius: var(--radius-md); color: var(--text-secondary);">
        Chưa phát hành hóa đơn cho tháng ${formatMonthLabel(state.currentMonth)}.<br>
        Nhấn "Tự Động Gửi Hóa Đơn" để tạo ngay.
      </div>
    `;
  } else {
    const paidCount = monthInvoices.filter(i => i.status === 'Đã thanh toán').length;
    summaryBox.innerHTML = `
      <div style="display: flex; justify-content: space-between;">
        <span>Phát hành:</span><strong>${monthInvoices.length} phòng</strong>
      </div>
      <div style="display: flex; justify-content: space-between;">
        <span>Đã thu:</span><span class="badge badge-paid">${paidCount} phòng</span>
      </div>
      <div style="display: flex; justify-content: space-between;">
        <span>Còn nợ:</span><span class="badge badge-pending">${monthInvoices.length - paidCount} phòng</span>
      </div>
    `;
  }
}

function renderSpreadsheet() {
  const label = document.getElementById('spreadsheet-house-label');
  const currentHouse = state.houses.find(h => h.id === state.currentHouseId);
  if (label) {
    label.innerText = currentHouse ? currentHouse.name : 'Tất Cả Tòa Nhà';
  }

  const activeServices = getFilteredServices();

  // Dynamically Build Individual Table Columns for Every Single Configured Service!
  const theadTr = document.getElementById('spreadsheet-thead-tr');
  let headHtml = `
    <th>Phòng</th>
    <th>Khách Thuê</th>
    <th>Tiền Nhà</th>
  `;

  activeServices.forEach(s => {
    const symbol = s.symbol || '📦';
    if (s.calcType === 'formula') {
      const isElec = s.name.includes('Điện');
      const unitLabel = isElec ? 'kWh' : 'm³';
      headHtml += `
        <th>${s.name} Cũ</th>
        <th>${s.name} Mới</th>
        <th>Số ${s.name} (${unitLabel})</th>
        <th style="background: #e6f4fe; color: #0178d2;">${symbol} ${s.name}</th>
      `;
    } else {
      headHtml += `<th style="background: #e6f4fe; color: #0178d2;">${symbol} ${s.name}</th>`;
    }
  });

  headHtml += `
    <th>💰 Tổng Cộng</th>
    <th>Thao Tác</th>
  `;

  theadTr.innerHTML = headHtml;

  const tbody = document.getElementById('spreadsheet-body');
  tbody.innerHTML = '';
  const monthReadings = state.readings[state.currentMonth] || {};
  const activeRooms = getFilteredRooms();

  if (activeRooms.length === 0) {
    tbody.innerHTML = `<tr><td colspan="20" style="text-align:center; padding:2rem; color:var(--text-secondary);">Chưa có phòng trọ nào phù hợp với bộ lọc.</td></tr>`;
    return;
  }

  activeRooms.forEach(r => {
    const rd = monthReadings[r.id] || {
      elecOld: 0, elecNew: 0, waterOld: 0, waterNew: 0,
      elecFormula: r.elecFormula, waterFormula: r.waterFormula
    };

    let grandTotal = r.baseRent;
    const house = state.houses.find(h => h.id === r.houseId);
    const houseBadge = house ? `<br><span class="badge badge-resolved" style="font-size:0.65rem;">${house.name}</span>` : '';

    let rowHtml = `
      <td><strong>${r.name}</strong>${houseBadge}</td>
      <td>${r.tenant || '<em>(Trống)</em>'} <br><small style="color: var(--text-muted);">${r.headcount} người</small></td>
      <td>${formatMoney(r.baseRent)}</td>
    `;

    // Render Each Active Service as its Own Independent Column!
    activeServices.forEach(s => {
      const isServiceApplicable = serviceMatchesHouse(s, r.houseId);

      if (s.calcType === 'formula') {
        const isElec = s.name.includes('Điện');
        const oldVal = isElec ? rd.elecOld : rd.waterOld;
        const newVal = isElec ? rd.elecNew : rd.waterNew;
        const usage = Math.max(0, (newVal || 0) - (oldVal || 0));
        const fSelected = isElec ? (rd.elecFormula || r.elecFormula) : (rd.waterFormula || r.waterFormula);
        
        const cost = isServiceApplicable ? calculateUtilityAmount(usage, fSelected, r.headcount) : 0;
        grandTotal += cost;

        if (isServiceApplicable) {
          rowHtml += `
            <td><input type="number" class="excel-input" value="${oldVal || 0}" onchange="updateReadingApi('${r.id}', '${isElec ? 'elecOld' : 'waterOld'}', this.value)"></td>
            <td><input type="number" class="excel-input" value="${newVal || 0}" onchange="updateReadingApi('${r.id}', '${isElec ? 'elecNew' : 'waterNew'}', this.value)"></td>
            <td style="text-align: right; font-weight: 800; color: var(--tvk-blue);">${usage}</td>
            <td style="text-align: right; font-weight: 700; color: var(--tvk-blue);">${s.symbol || '🧮'} ${formatMoney(cost)} đ</td>
          `;
        } else {
          rowHtml += `<td colspan="4" style="text-align:center; color:var(--text-muted);">(Không áp dụng)</td>`;
        }
      } else {
        const cost = isServiceApplicable ? calculateServiceCostForRoom(s, r) : 0;
        grandTotal += cost;

        if (isServiceApplicable) {
          rowHtml += `
            <td style="text-align: right; font-weight: 700; color: var(--tvk-blue);">
              ${s.symbol || '📦'} ${formatMoney(cost)} đ
            </td>
          `;
        } else {
          rowHtml += `<td style="text-align:center; color:var(--text-muted);">(Không áp dụng)</td>`;
        }
      }
    });

    rowHtml += `
      <td style="text-align: right; font-weight: 800; color: var(--tvk-orange); font-size: 0.95rem;">💰 ${formatMoney(grandTotal)} đ</td>
      <td>
        <div style="display:flex; gap:0.4rem;">
          <button class="btn btn-secondary btn-sm" onclick="openEditRoomModal('${r.id}')" title="Chỉnh sửa thông tin & giá tiền riêng phòng này">
            <i data-lucide="edit-3"></i> Sửa Giá
          </button>
          <button class="btn btn-secondary btn-sm" onclick="previewRoomInvoice('${r.id}')" title="Xem hóa đơn">
            <i data-lucide="eye"></i>
          </button>
        </div>
      </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = rowHtml;
    tbody.appendChild(tr);
  });
}

function renderFormulaOptions(selectedId, category) {
  return state.formulas
    .filter(f => f.category === category)
    .map(f => `<option value="${f.id}" ${f.id === selectedId ? 'selected' : ''}>${f.name}</option>`)
    .join('');
}

async function updateReadingApi(roomId, field, value) {
  if (!state.readings[state.currentMonth]) state.readings[state.currentMonth] = {};
  if (!state.readings[state.currentMonth][roomId]) state.readings[state.currentMonth][roomId] = {};
  state.readings[state.currentMonth][roomId][field] = (field === 'elecFormula' || field === 'waterFormula') ? value : (parseFloat(value) || 0);

  try {
    await fetch(`${API_BASE}/readings/update`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ month: state.currentMonth, roomId, field, value })
    });
  } catch (err) {
    console.warn('API error, reading updated locally:', err);
  }
  renderSpreadsheet();
}

async function generateAndSendAllInvoices() {
  const monthReadings = state.readings[state.currentMonth] || {};
  state.rooms.forEach(r => {
    const rd = monthReadings[r.id] || { elecOld: 0, elecNew: 0, waterOld: 0, waterNew: 0, elecFormula: r.elecFormula, waterFormula: r.waterFormula };
    let totalAmount = r.baseRent;
    let serviceItems = [];
    let elecCost = 0;
    let waterCost = 0;

    const houseServices = state.services.filter(s => serviceMatchesHouse(s, r.houseId));
    houseServices.forEach(s => {
      const symbol = s.symbol || '📦';
      if (s.calcType === 'formula') {
        const isElec = s.name.includes('Điện');
        const usage = isElec ? Math.max(0, (rd.elecNew || 0) - (rd.elecOld || 0)) : Math.max(0, (rd.waterNew || 0) - (rd.waterOld || 0));
        const fId = isElec ? (rd.elecFormula || r.elecFormula) : (rd.waterFormula || r.waterFormula);
        const cost = calculateUtilityAmount(usage, fId, r.headcount);
        if (isElec) elecCost = cost;
        else waterCost = cost;
        totalAmount += cost;
      } else {
        const cost = calculateServiceCostForRoom(s, r);
        totalAmount += cost;
        serviceItems.push({
          id: s.id,
          name: s.name,
          symbol,
          price: s.price,
          unit: s.unit === 'Theo đầu người' ? `${r.headcount} người x ${formatMoney(s.price)}đ` : s.unit,
          total: cost,
          isParking: s.name.toLowerCase().includes('xe')
        });
      }
    });

    const elecUsage = Math.max(0, (rd.elecNew || 0) - (rd.elecOld || 0));
    const waterUsage = Math.max(0, (rd.waterNew || 0) - (rd.waterOld || 0));

    const invoiceId = `INV-${state.currentMonth.replace('-', '')}-${r.id}`;
    const idx = state.invoices.findIndex(i => i.id === invoiceId);
    const invObj = {
      id: invoiceId, month: state.currentMonth, roomId: r.id, houseId: r.houseId, roomName: r.name, tenant: r.tenant, phone: r.phone,
      baseRent: r.baseRent, elecOld: rd.elecOld, elecNew: rd.elecNew, elecUsage, elecFormula: rd.elecFormula, elecCost,
      waterOld: rd.waterOld, waterNew: rd.waterNew, waterUsage, waterFormula: rd.waterFormula, waterCost,
      serviceFee: serviceItems.reduce((sum, item) => sum + item.total, 0),
      parkingFee: 0,
      serviceItems, otherFees: serviceItems.reduce((sum, item) => sum + item.total, 0), totalAmount, sendStatus: 'Đã gửi tự động', status: idx >= 0 ? state.invoices[idx].status : 'Chờ thanh toán', sentAt: 'Hôm nay'
    };

    if (idx >= 0) state.invoices[idx] = invObj;
    else state.invoices.push(invObj);
  });

  try {
    await fetch(`${API_BASE}/invoices/generate-all`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ month: state.currentMonth })
    });
  } catch (err) {
    console.warn('Invoice generated locally:', err);
  }

  showToast(`Đã phát hành hóa đơn cho tháng ${formatMonthLabel(state.currentMonth)}!`, 'success');
  renderCurrentView();
}

function renderAdminInvoices() {
  const tbody = document.getElementById('admin-invoices-tbody');
  tbody.innerHTML = '';
  const monthInvoices = state.invoices.filter(i => i.month === state.currentMonth && (state.currentHouseId === 'all' || i.houseId === state.currentHouseId));

  if (monthInvoices.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding:2rem; color:var(--text-secondary);">Chưa có hóa đơn tháng này. Nhấn "Cập Nhật Hóa Đơn" để sinh tự động.</td></tr>`;
    return;
  }

  monthInvoices.forEach(inv => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${inv.id}</strong></td>
      <td>${inv.roomName}</td>
      <td>${inv.tenant}</td>
      <td>${formatMonthLabel(inv.month)}</td>
      <td style="font-weight: 800; color: var(--tvk-orange);">${formatMoney(inv.totalAmount)} đ</td>
      <td><span class="badge badge-resolved">${inv.sendStatus}</span></td>
      <td><span class="badge ${inv.status === 'Đã thanh toán' ? 'badge-paid' : 'badge-pending'}">${inv.status}</span></td>
      <td><small style="color: var(--text-muted);">${inv.sentAt || 'Vừa xong'}</small></td>
      <td>
        <div style="display:flex; gap:0.5rem;">
          <button class="btn btn-secondary btn-sm" onclick="viewInvoiceDetail('${inv.id}')"><i data-lucide="eye"></i></button>
          ${inv.status !== 'Đã thanh toán' ? `<button class="btn btn-orange btn-sm" onclick="markInvoicePaidApi('${inv.id}')"><i data-lucide="check-circle"></i> Đã Thu</button>` : ''}
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

async function markInvoicePaidApi(invoiceId) {
  const inv = state.invoices.find(i => i.id === invoiceId);
  if (inv) inv.status = 'Đã thanh toán';

  try {
    await fetch(`${API_BASE}/invoices/mark-paid`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ invoiceId })
    });
  } catch (err) {
    console.warn('Marked paid locally:', err);
  }

  showToast(`Đã xác nhận thu tiền ${invoiceId}!`, 'success');
  renderAdminInvoices();
}

function renderAdminUsers() {
  const tbody = document.getElementById('admin-users-tbody');
  tbody.innerHTML = '';
  const dict = I18N[state.lang] || I18N.vi;

  state.users.forEach(u => {
    const room = state.rooms.find(r => r.id === u.roomId);
    const roomLabel = room ? room.name : (u.roomId ? u.roomId : 'Chưa gán');

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${u.username}</strong></td>
      <td>${u.fullName}</td>
      <td><span class="badge ${u.role === 'admin' ? 'badge-open' : 'badge-resolved'}">${u.role.toUpperCase()}</span></td>
      <td>
        ${u.role === 'tenant' && u.status === 'pending' ? `
          <select id="assign-room-${u.id}" class="form-control" style="width:130px; padding:0.3rem;">
            <option value="">-- Chọn phòng --</option>
            ${state.rooms.map(r => `<option value="${r.id}">${r.name}</option>`).join('')}
          </select>
        ` : `<strong>${roomLabel}</strong>`}
      </td>
      <td>
        <span class="badge ${u.status === 'approved' ? 'badge-paid' : (u.status === 'pending' ? 'badge-pending' : 'badge-open')}">
          ${u.status === 'approved' ? dict.status_approved : (u.status === 'pending' ? dict.status_pending : dict.status_blocked)}
        </span>
      </td>
      <td><small style="color:var(--text-muted);">${u.createdAt || 'Mới'}</small></td>
      <td>
        <div style="display:flex; gap:0.5rem;">
          ${u.status === 'pending' ? `
            <button class="btn btn-blue btn-sm" onclick="approveUserApi('${u.id}')">
              <i data-lucide="check"></i> ${dict.btn_approve}
            </button>
          ` : ''}
          ${u.username !== 'admin' ? `
            <button class="btn btn-secondary btn-sm" onclick="deleteUserApi('${u.id}')" style="color:var(--tvk-red);">
              <i data-lucide="trash-2"></i> ${dict.btn_delete}
            </button>
          ` : ''}
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

async function approveUserApi(userId) {
  const roomSelect = document.getElementById(`assign-room-${userId}`);
  const roomId = roomSelect ? roomSelect.value : '';

  const user = state.users.find(u => u.id === userId);
  if (user) {
    user.status = 'approved';
    if (roomId) user.roomId = roomId;
  }

  try {
    await fetch(`${API_BASE}/users/approve`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, roomId })
    });
  } catch (err) {
    console.warn('Approved user locally:', err);
  }

  showToast('Đã duyệt tài khoản thành công!', 'success');
  renderAdminUsers();
}

async function deleteUserApi(userId) {
  if (!confirm('Bạn có chắc chắn muốn xóa tài khoản này?')) return;
  state.users = state.users.filter(u => u.id !== userId);

  try {
    await fetch(`${API_BASE}/users/delete`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId })
    });
  } catch (err) {
    console.warn('Deleted user locally:', err);
  }

  showToast('Đã xóa tài khoản!', 'success');
  renderAdminUsers();
}

function openCreateUserModal() {
  const roomSelect = document.getElementById('create-room-id');
  roomSelect.innerHTML = state.rooms.map(r => `<option value="${r.id}">${r.name} - ${r.tenant}</option>`).join('');
  document.getElementById('modal-create-user').classList.add('active');
}

function toggleRoomSelectInCreateModal() {
  const role = document.getElementById('create-role').value;
  document.getElementById('box-assign-room').style.display = role === 'tenant' ? 'block' : 'none';
}

async function handleAdminCreateUser(event) {
  event.preventDefault();
  const username = document.getElementById('create-username').value.trim();
  const password = document.getElementById('create-password').value.trim();
  const fullName = document.getElementById('create-fullname').value.trim();
  const role = document.getElementById('create-role').value;
  const roomId = document.getElementById('create-room-id').value;

  const newUser = { id: `usr_${Date.now()}`, username, password, fullName, role, roomId, status: 'approved', createdAt: 'Hôm nay' };
  state.users.push(newUser);

  try {
    await fetch(`${API_BASE}/users/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, fullName, role, roomId })
    });
  } catch (err) {
    console.warn('Created user locally:', err);
  }

  showToast('Tạo tài khoản mới thành công!', 'success');
  closeModal('modal-create-user');
  renderAdminUsers();
}

function renderTenantInvoiceView() {
  const user = state.currentUser;
  const userRoomId = (user && user.roomId) ? user.roomId : (state.rooms[0] ? state.rooms[0].id : 'R101');
  const container = document.getElementById('tenant-invoice-container');

  const invoice = state.invoices.find(i => i.month === state.currentMonth && i.roomId === userRoomId);

  if (!invoice) {
    container.innerHTML = `
      <div class="tvk-card" style="padding: 3rem; text-align: center; color: var(--text-secondary);">
        <i data-lucide="file-question" style="width: 48px; height: 48px; color: var(--tvk-amber); margin-bottom: 1rem;"></i>
        <h3>Chưa Có Hóa Đơn Cho Tháng ${formatMonthLabel(state.currentMonth)}</h3>
        <p style="margin-top: 0.5rem;">Chủ nhà đang tổng hợp chỉ số điện nước và phí dịch vụ. Vui lòng quay lại sau!</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  const room = state.rooms.find(r => r.id === invoice.roomId);
  const house = state.houses.find(h => h.id === (room ? room.houseId : ''));
  const houseName = house ? house.name : 'RENTALPRO MANAGEMENT';
  const houseAddr = house ? house.address : 'Hệ Thống Quản Lý Trọ';

  const autoCalc = room ? calculateRoomServiceTotal(room) : { items: [] };
  const itemsList = (invoice.serviceItems && invoice.serviceItems.length > 0) ? invoice.serviceItems : autoCalc.items;

  let serviceRowsHtml = '';
  let lineNo = 4;
  itemsList.forEach(item => {
    serviceRowsHtml += `
      <tr>
        <td style="padding:0.75rem; font-weight:bold;">${lineNo++}. ${item.symbol || '📦'} ${item.name}</td>
        <td style="padding:0.75rem;">${item.unit}</td>
        <td style="padding:0.75rem; text-align:right; font-weight:700;">${formatMoney(item.total)} đ</td>
      </tr>
    `;
  });

  container.innerHTML = `
    <div style="display: flex; justify-content: flex-end; gap: 1rem; margin-bottom: 1rem;">
      <button class="btn btn-blue" onclick="window.print()">
        <i data-lucide="printer"></i> In / Tải Hóa Đơn PDF
      </button>
    </div>

    <div class="invoice-paper">
      <div style="display:flex; justify-content:space-between; border-bottom:2px solid #e5e9f0; padding-bottom:1.25rem; margin-bottom:1.25rem;">
        <div>
          <h2 style="font-size: 1.75rem; color: #03121a; font-weight:800;">HÓA ĐƠN TIỀN NHÀ</h2>
          <div style="color: #687176;">Mã HĐ: <strong>${invoice.id}</strong> | Kỳ: ${formatMonthLabel(invoice.month)}</div>
        </div>
        <div style="text-align: right;">
          <div style="font-weight: 800; font-size: 1.1rem; color: #0194f3;">${houseName}</div>
          <div style="font-size: 0.85rem; color: #687176;">📍 ${houseAddr}</div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem; font-size: 0.9rem;">
        <div>
          <div style="color: #687176; font-size: 0.8rem; text-transform: uppercase; font-weight: 700;">Thông tin Khách thuê</div>
          <div style="font-weight: 800; font-size: 1.15rem; margin-top: 0.25rem; color: #03121a;">${invoice.tenant}</div>
          <div>Phòng: <strong>${invoice.roomName}</strong></div>
        </div>
        <div style="text-align: right;">
          <div style="color: #687176; font-size: 0.8rem; text-transform: uppercase; font-weight: 700;">Trạng thái thanh toán</div>
          <div style="margin-top: 0.25rem;">
            <span class="badge ${invoice.status === 'Đã thanh toán' ? 'badge-paid' : 'badge-pending'}">${invoice.status}</span>
          </div>
        </div>
      </div>

      <table class="excel-table" style="color: #03121a; width:100%;">
        <thead>
          <tr style="background:#f7f9fa; color:#43494d;">
            <th style="padding:0.75rem;">Mục Chi Phí</th>
            <th style="padding:0.75rem;">Diễn Giải Công Thức & Quy Tắc</th>
            <th style="padding:0.75rem; text-align:right;">Thành Tiền (VNĐ)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding:0.75rem; font-weight:bold;">1. Tiền Thuê Phòng</td><td style="padding:0.75rem;">Cố định theo hợp đồng</td><td style="padding:0.75rem; text-align:right; font-weight:700;">${formatMoney(invoice.baseRent)} đ</td></tr>
          <tr>
            <td style="padding:0.75rem; font-weight:bold;">2. ⚡ Tiền Điện</td>
            <td style="padding:0.75rem;">Chỉ số: ${invoice.elecOld} ➔ ${invoice.elecNew} (${invoice.elecUsage} kWh)<br><small style="color:#687176;">${getFormulaDescription(invoice.elecFormula, invoice.elecUsage, room ? room.headcount : 1)}</small></td>
            <td style="padding:0.75rem; text-align:right; font-weight:700; color:var(--tvk-blue);">${formatMoney(invoice.elecCost)} đ</td>
          </tr>
          <tr>
            <td style="padding:0.75rem; font-weight:bold;">3. 💧 Tiền Nước</td>
            <td style="padding:0.75rem;">Chỉ số: ${invoice.waterOld} ➔ ${invoice.waterNew} (${invoice.waterUsage} m³)<br><small style="color:#687176;">${getFormulaDescription(invoice.waterFormula, invoice.waterUsage, room ? room.headcount : 1)}</small></td>
            <td style="padding:0.75rem; text-align:right; font-weight:700; color:var(--tvk-blue);">${formatMoney(invoice.waterCost)} đ</td>
          </tr>
          ${serviceRowsHtml}
        </tbody>
      </table>

      <div style="background:#f7f9fa; padding:1.25rem; border-radius:12px; display:flex; justify-content:space-between; align-items:center; border:1px solid #e5e9f0; margin-top:1.5rem;">
        <div>
          <div style="font-size: 0.85rem; color: #687176;">TỔNG CỘNG THANH TOÁN</div>
          <div style="font-size: 1.65rem; font-weight: 800; color: #ff5e1f;">${formatMoney(invoice.totalAmount)} VNĐ</div>
        </div>
        <div style="display:flex; align-items:center; gap:0.75rem; background:white; padding:0.5rem 0.75rem; border-radius:8px; border:1px solid #cbd5e1;">
          <div style="width:48px; height:48px; background:#0194f3; color:white; font-weight:bold; font-size:0.7rem; border-radius:4px; display:flex; align-items:center; justify-content:center; text-align:center;">VIETQR<br>PAY</div>
          <div style="font-size:0.75rem; color:#334155;">STK: <strong>9999-8888-6666</strong><br>MBBank (Chủ trọ)</div>
        </div>
      </div>
    </div>
  `;
  lucide.createIcons();
}

function viewInvoiceDetail(invoiceId) {
  const inv = state.invoices.find(i => i.id === invoiceId);
  if (!inv) return;
  const content = document.getElementById('modal-invoice-content');

  const room = state.rooms.find(r => r.id === inv.roomId);
  const autoCalc = room ? calculateRoomServiceTotal(room) : { items: [] };
  const itemsList = (inv.serviceItems && inv.serviceItems.length > 0) ? inv.serviceItems : autoCalc.items;

  let serviceRowsHtml = '';
  let lineNo = 4;
  itemsList.forEach(item => {
    serviceRowsHtml += `<tr><td>${lineNo++}. ${item.symbol || '📦'} ${item.name} (${item.unit})</td><td style="text-align:right;">${formatMoney(item.total)} đ</td></tr>`;
  });

  content.innerHTML = `
    <div class="invoice-paper" style="box-shadow:none; border:1px solid var(--border-color);">
      <h3 style="color:#03121a;">HÓA ĐƠN ${inv.roomName}</h3>
      <div style="margin:1rem 0;">Khách thuê: <strong>${inv.tenant}</strong> (${inv.phone})</div>
      <table class="excel-table" style="color:#03121a;">
        <tr><td>1. Tiền nhà</td><td style="text-align:right;">${formatMoney(inv.baseRent)} đ</td></tr>
        <tr><td>2. ⚡ Tiền điện (${inv.elecUsage} kWh)</td><td style="text-align:right;">${formatMoney(inv.elecCost)} đ</td></tr>
        <tr><td>3. 💧 Tiền nước (${inv.waterUsage} m³)</td><td style="text-align:right;">${formatMoney(inv.waterCost)} đ</td></tr>
        ${serviceRowsHtml}
        <tr style="font-weight:bold; font-size:1.2rem;"><td>TỔNG CỘNG</td><td style="text-align:right; color:#ff5e1f;">${formatMoney(inv.totalAmount)} đ</td></tr>
      </table>
    </div>
  `;
  document.getElementById('modal-invoice-detail').classList.add('active');
  lucide.createIcons();
}

function previewRoomInvoice(roomId) {
  generateAndSendAllInvoices();
  const invoiceId = `INV-${state.currentMonth.replace('-', '')}-${roomId}`;
  viewInvoiceDetail(invoiceId);
}

/* =====================================================================
   ROOM MANAGEMENT VIEW
===================================================================== */
function renderRoomsManagement() {
  const container = document.getElementById('rooms-management-container');
  if (!container) return;

  if (state.rooms.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding:3rem; color:var(--text-secondary);">Chưa có phòng nào. Nhấn "Thêm Phòng Mới" để tạo.</div>`;
    return;
  }

  // Group by house
  const byHouse = {};
  state.rooms.forEach(r => {
    const hid = r.houseId || 'unknown';
    if (!byHouse[hid]) byHouse[hid] = [];
    byHouse[hid].push(r);
  });

  let html = '';
  Object.keys(byHouse).forEach(hid => {
    const house = state.houses.find(h => h.id === hid);
    const rooms = byHouse[hid];
    html += `
      <div style="margin-bottom: 1.5rem;">
        <div style="font-size: 1rem; font-weight: 800; color: var(--tvk-blue); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
          <i data-lucide="building-2" style="width:18px;height:18px;"></i>
          ${house ? house.name : hid}
          <span class="badge badge-resolved" style="font-size:0.7rem;">${rooms.length} phòng</span>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem;">
          ${rooms.map(r => `
            <div class="tvk-card" style="position:relative; padding: 1.1rem 1.25rem;">
              <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.6rem;">
                <div>
                  <div style="font-weight:800; font-size:1rem;">${r.name}</div>
                  <div style="font-size:0.8rem; color:var(--text-secondary);">${r.tenant || 'Chưa có khách'} ${r.phone ? '· ' + r.phone : ''}</div>
                </div>
                <span class="badge ${r.tenant ? 'badge-paid' : 'badge-open'}" style="font-size:0.7rem;">${r.tenant ? 'Đang thuê' : 'Trống'}</span>
              </div>
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.4rem; font-size:0.82rem; margin-bottom:0.75rem;">
                <div><span style="color:var(--text-muted);">Giá thuê:</span><br><strong>${formatMoney(r.baseRent)}đ/tháng</strong></div>
                <div><span style="color:var(--text-muted);">Số người:</span><br><strong>${r.headcount || 1} người</strong></div>
              </div>
              <div style="display:flex; gap:0.5rem;">
                <button class="btn btn-blue btn-sm" style="flex:1; justify-content:center;" onclick="openEditRoomModal('${r.id}')">
                  <i data-lucide="edit-2"></i> Sửa
                </button>
                <button class="btn btn-secondary btn-sm" style="color:var(--color-danger); border-color:var(--color-danger);" onclick="deleteRoom('${r.id}')">
                  <i data-lucide="trash-2"></i>
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  lucide.createIcons();
}

/* =====================================================================
   TICKET DETAIL VIEW WITH COMMENTS
===================================================================== */
let _currentTicketId = null;

function showTicketList() {
  const listView = document.getElementById('ticket-list-view');
  const detailView = document.getElementById('ticket-detail-view');
  if (listView) listView.style.display = 'block';
  if (detailView) detailView.style.display = 'none';
  _currentTicketId = null;
}

function openTicketDetail(ticketId) {
  const ticket = state.tickets.find(t => t.id === ticketId);
  if (!ticket) return;
  _currentTicketId = ticketId;

  const listView = document.getElementById('ticket-list-view');
  const detailView = document.getElementById('ticket-detail-view');
  if (listView) listView.style.display = 'none';
  if (detailView) detailView.style.display = 'block';

  // Fill ticket info
  const priorityClass = ticket.priority === 'Khẩn cấp' ? 'badge-open' : 'badge-pending';
  const statusClass = ticket.status === 'Đã hoàn thành' ? 'badge-paid' : (ticket.status === 'Đang sửa chữa' || ticket.status === 'Đang xử lý' ? 'badge-pending' : 'badge-open');
  const infoEl = document.getElementById('ticket-detail-info');
  if (infoEl) {
    infoEl.innerHTML = `
      <div style="display:flex; flex-direction:column; gap:0.6rem; font-size:0.9rem;">
        <div style="display:flex; justify-content:space-between;">
          <span style="color:var(--text-muted);">Mã Ticket</span>
          <strong>${ticket.id}</strong>
        </div>
        <div style="display:flex; justify-content:space-between;">
          <span style="color:var(--text-muted);">Phòng</span>
          <strong>${ticket.roomName || ticket.roomId}</strong>
        </div>
        <div style="display:flex; justify-content:space-between;">
          <span style="color:var(--text-muted);">Khách Thuê</span>
          <strong>${ticket.tenant}</strong>
        </div>
        <div style="display:flex; justify-content:space-between;">
          <span style="color:var(--text-muted);">Phân Loại</span>
          <span class="badge badge-resolved">${ticket.category}</span>
        </div>
        <div style="display:flex; justify-content:space-between;">
          <span style="color:var(--text-muted);">Mức Độ</span>
          <span class="badge ${priorityClass}">${ticket.priority}</span>
        </div>
        <div style="display:flex; justify-content:space-between;">
          <span style="color:var(--text-muted);">Trạng Thái</span>
          <span class="badge ${statusClass}">${ticket.status}</span>
        </div>
        <div style="display:flex; justify-content:space-between;">
          <span style="color:var(--text-muted);">Thời Gian</span>
          <span>${ticket.timestamp}</span>
        </div>
        <div style="border-top: 1px solid var(--border-color); padding-top:0.6rem;">
          <span style="color:var(--text-muted);">Mô Tả:</span>
          <p style="margin-top:0.3rem; line-height:1.5;">${ticket.description}</p>
        </div>
      </div>
    `;
  }

  // Fill images
  const imagesEl = document.getElementById('ticket-detail-images');
  if (imagesEl) {
    const imgs = ticket.images || [];
    if (imgs.length === 0) {
      imagesEl.innerHTML = `<span style="color:var(--text-muted); font-size:0.85rem;">Không có ảnh đính kèm</span>`;
    } else {
      imagesEl.innerHTML = imgs.map(src => `
        <img src="${src}" style="width:90px; height:90px; object-fit:cover; border-radius:var(--radius-sm); cursor:pointer; border:2px solid var(--border-color);" 
             onclick="window.open('${src}','_blank')" title="Click để xem ảnh lớn">
      `).join('');
    }
  }

  // Fill current status
  const statusSelect = document.getElementById('detail-reply-status');
  if (statusSelect) statusSelect.value = ticket.status || 'Mới tiếp nhận';
  const replyMsg = document.getElementById('detail-reply-message');
  if (replyMsg) replyMsg.value = '';

  // Render comments thread
  renderTicketComments(ticket);
  lucide.createIcons();
}

function renderTicketComments(ticket) {
  const thread = document.getElementById('ticket-comments-thread');
  if (!thread) return;

  const comments = ticket.comments || [];
  if (comments.length === 0 && !ticket.response) {
    thread.innerHTML = `<div style="text-align:center; color:var(--text-muted); font-size:0.85rem; padding:1rem;">Chưa có phản hồi nào.</div>`;
    return;
  }

  // Build comments from legacy response + new comments array
  let allComments = [...comments];
  if (ticket.response && allComments.length === 0) {
    allComments = [{ author: 'Admin', role: 'admin', text: ticket.response, time: ticket.timestamp }];
  }

  thread.innerHTML = allComments.map(c => {
    const isAdmin = c.role === 'admin';
    return `
      <div style="display:flex; flex-direction:column; align-items:${isAdmin ? 'flex-end' : 'flex-start'};">
        <div style="max-width:85%; background:${isAdmin ? 'var(--tvk-blue)' : 'var(--bg-base)'}; color:${isAdmin ? 'white' : 'var(--text-primary)'}; 
             border-radius: ${isAdmin ? '14px 14px 4px 14px' : '14px 14px 14px 4px'}; padding:0.65rem 1rem; font-size:0.85rem; box-shadow: 0 1px 3px rgba(0,0,0,0.08);">
          <div style="font-weight:700; font-size:0.75rem; margin-bottom:0.3rem; opacity:0.85;">${isAdmin ? '👤 Admin' : '🏠 ' + (c.author || 'Khách thuê')}</div>
          ${c.statusChange ? `<div style="font-size:0.72rem; opacity:0.8; margin-bottom:0.2rem;">📋 Trạng thái: <strong>${c.statusChange}</strong></div>` : ''}
          <div>${c.text}</div>
          <div style="font-size:0.7rem; opacity:0.65; margin-top:0.3rem; text-align:right;">${c.time || ''}</div>
        </div>
      </div>
    `;
  }).join('');

  thread.scrollTop = thread.scrollHeight;
}

async function submitAdminTicketComment() {
  if (!_currentTicketId) return;
  const ticket = state.tickets.find(t => t.id === _currentTicketId);
  if (!ticket) return;

  const statusEl = document.getElementById('detail-reply-status');
  const msgEl = document.getElementById('detail-reply-message');
  const newStatus = statusEl ? statusEl.value : ticket.status;
  const message = msgEl ? msgEl.value.trim() : '';

  if (!message) { showToast('Vui lòng nhập nội dung phản hồi', 'error'); return; }

  const now = new Date().toLocaleString('vi-VN');
  const comment = { author: 'Admin', role: 'admin', text: message, time: now, statusChange: newStatus !== ticket.status ? newStatus : null };

  if (!ticket.comments) ticket.comments = [];
  ticket.comments.push(comment);
  ticket.status = newStatus;
  ticket.response = message;

  if (msgEl) msgEl.value = '';

  try {
    await fetch(`${API_BASE}/tickets/reply`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ticketId: ticket.id, status: newStatus, response: message, comment })
    });
  } catch (err) { console.warn('Saved ticket reply locally'); }

  renderTicketComments(ticket);
  // Refresh status badge in info panel
  const statusClass = newStatus === 'Đã hoàn thành' ? 'badge-paid' : (newStatus === 'Đang sửa chữa' || newStatus === 'Đang xử lý' ? 'badge-pending' : 'badge-open');
  const infoEl = document.getElementById('ticket-detail-info');
  if (infoEl) {
    const statusBadge = infoEl.querySelector('[data-status]');
    if (statusBadge) statusBadge.className = `badge ${statusClass}`;
  }
  updateBadges();
  showToast(`Đã gửi phản hồi ticket ${ticket.id}!`, 'success');
}

function renderAdminTickets() {
  const tbody = document.getElementById('admin-tickets-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';
  if (state.tickets.length === 0) {
    tbody.innerHTML = `<tr><td colspan="10" style="text-align:center; padding:2rem; color:var(--text-secondary);">Không có báo lỗi nào.</td></tr>`;
    return;
  }

  state.tickets.forEach(t => {
    const imgCount = (t.images || []).length;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${t.id}</strong></td>
      <td>${t.roomName || t.roomId}</td>
      <td>${t.tenant}</td>
      <td><span class="badge badge-resolved">${t.category}</span></td>
      <td><span class="badge ${t.priority === 'Khẩn cấp' ? 'badge-open' : 'badge-pending'}">${t.priority}</span></td>
      <td style="max-width:200px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${t.description}">${t.description}</td>
      <td>${imgCount > 0 ? `<span class="badge badge-resolved" style="cursor:pointer;" onclick="openTicketDetail('${t.id}')">📷 ${imgCount} ảnh</span>` : '<span style="color:var(--text-muted);">—</span>'}</td>
      <td><small style="color:var(--text-muted);">${t.timestamp}</small></td>
      <td><span class="badge ${t.status === 'Đã hoàn thành' ? 'badge-paid' : (t.status === 'Đang sửa chữa' || t.status === 'Đang xử lý' ? 'badge-pending' : 'badge-open')}">${t.status}</span></td>
      <td>
        <button class="btn btn-blue btn-sm" onclick="openTicketDetail('${t.id}')">
          <i data-lucide="eye"></i> Xem Chi Tiết
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

/* IMAGE UPLOAD FOR TENANT REPORT */
let _tenantImages = [];

function handleTenantImageSelect(event) {
  const files = Array.from(event.target.files);
  const remaining = 5 - _tenantImages.length;
  const toAdd = files.slice(0, remaining);

  toAdd.forEach(file => {
    const reader = new FileReader();
    reader.onload = (e) => {
      _tenantImages.push(e.target.result);
      renderTenantImagePreviews();
    };
    reader.readAsDataURL(file);
  });

  if (files.length > remaining) {
    showToast('Tối đa 5 ảnh mỗi báo lỗi', 'error');
  }
  event.target.value = '';
}

function renderTenantImagePreviews() {
  const container = document.getElementById('tenant-image-previews');
  if (!container) return;
  container.innerHTML = _tenantImages.map((src, i) => `
    <div style="position:relative; display:inline-block;">
      <img src="${src}" style="width:70px; height:70px; object-fit:cover; border-radius:var(--radius-sm); border:2px solid var(--border-color);">
      <button type="button" onclick="removeTenantImage(${i})" style="position:absolute; top:-6px; right:-6px; background:var(--color-danger); color:white; border:none; border-radius:50%; width:18px; height:18px; font-size:10px; cursor:pointer; display:flex; align-items:center; justify-content:center;">×</button>
    </div>
  `).join('');
}

function removeTenantImage(idx) {
  _tenantImages.splice(idx, 1);
  renderTenantImagePreviews();
}



function renderTenantReportsView() {
  const tbody = document.getElementById('tenant-tickets-tbody');
  tbody.innerHTML = '';
  const user = state.currentUser;
  const myTickets = user ? state.tickets.filter(t => t.roomId === user.roomId || t.tenant === user.fullName) : state.tickets;

  if (myTickets.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:2rem; color:var(--text-secondary);">Bạn chưa gửi báo lỗi nào.</td></tr>`;
    return;
  }

  myTickets.forEach(t => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><small style="color:var(--text-muted);">${t.timestamp}</small></td>
      <td><span class="badge badge-resolved">${t.category}</span></td>
      <td>${t.description}</td>
      <td><span class="badge ${t.priority === 'Khẩn cấp' ? 'badge-open' : 'badge-pending'}">${t.priority}</span></td>
      <td><span class="badge ${t.status === 'Đã hoàn thành' ? 'badge-paid' : (t.status === 'Đang sửa chữa' ? 'badge-pending' : 'badge-open')}">${t.status}</span></td>
      <td style="color:var(--tvk-blue); font-weight:600;">${t.response || '<em>Chờ Admin phản hồi...</em>'}</td>
    `;
    tbody.appendChild(tr);
  });
}

async function handleTenantSubmitReport(event) {
  event.preventDefault();
  const user = state.currentUser;
  const roomId = (user && user.roomId) ? user.roomId : (state.rooms[0] ? state.rooms[0].id : 'R101');
  const room = state.rooms.find(r => r.id === roomId);
  const category = document.getElementById('report-category').value;
  const priority = document.getElementById('report-priority').value;
  const description = document.getElementById('report-description').value;
  const now = new Date().toLocaleString('vi-VN');

  const newTicket = {
    id: `TK-${Math.floor(1000 + Math.random() * 9000)}`,
    roomId,
    roomName: room ? room.name : 'Phòng',
    tenant: user ? (user.fullName || user.username) : 'Khách',
    category, priority, description,
    timestamp: now,
    status: 'Mới tiếp nhận',
    response: '',
    comments: [],
    images: [..._tenantImages]
  };
  state.tickets.unshift(newTicket);

  try {
    await fetch(`${API_BASE}/tickets/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ roomId, category, priority, description, images: _tenantImages })
    });
  } catch (err) {
    console.warn('Ticket created locally:', err);
  }

  // Reset
  _tenantImages = [];
  renderTenantImagePreviews();
  showToast('Đã gửi báo lỗi thành công đến Admin!', 'success');
  document.getElementById('tenant-report-form').reset();
  updateBadges();
  renderTenantReportsView();
}

/* Old ticket reply modal kept as stub - now using inline detail view */
function openTicketReplyModal(ticketId) { openTicketDetail(ticketId); }
async function saveTicketResponse(event) { if(event) event.preventDefault(); }

function openEditRoomModal(roomId) {
  const room = state.rooms.find(r => r.id === roomId);
  if (!room) return;
  // Populate and open the room config modal
  const houseSelect = document.getElementById('room-house-id');
  if (houseSelect) {
    houseSelect.innerHTML = state.houses.map(h => `<option value="${h.id}" ${h.id === room.houseId ? 'selected' : ''}>${h.name}</option>`).join('');
  }
  document.getElementById('room-id').value = room.id;
  document.getElementById('room-name').value = room.name || '';
  document.getElementById('room-tenant').value = room.tenant || '';
  document.getElementById('room-phone').value = room.phone || '';
  document.getElementById('room-headcount').value = room.headcount || 1;
  document.getElementById('room-base-rent').value = room.baseRent || '';

  // Populate formula dropdowns
  const formulaOpts = `<option value="">-- Chọn công thức --</option>` +
    state.formulas.map(f => `<option value="${f.id}">${f.name}</option>`).join('');
  const waterSel = document.getElementById('room-water-formula');
  const elecSel = document.getElementById('room-elec-formula');
  if (waterSel) { waterSel.innerHTML = formulaOpts; waterSel.value = room.waterFormulaId || ''; }
  if (elecSel) { elecSel.innerHTML = formulaOpts; elecSel.value = room.elecFormulaId || ''; }

  document.getElementById('modal-room-config').classList.add('active');
}

function deleteRoom(roomId) {
  if (!confirm('Bạn chắc chắn muốn xóa phòng này?')) return;
  state.rooms = state.rooms.filter(r => r.id !== roomId);
  fetch(`${API_BASE}/rooms/delete`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ roomId })
  }).catch(e => console.warn('Delete room locally'));
  showToast('Đã xóa phòng', 'success');
  renderRoomsManagement();
}

function updateBadges() {
  const openTickets = state.tickets.filter(t => t.status !== 'Đã hoàn thành').length;
  const ticketBadge = document.getElementById('admin-ticket-badge');
  if (ticketBadge) {
    ticketBadge.innerText = openTickets;
    ticketBadge.style.display = openTickets > 0 ? 'inline-flex' : 'none';
  }

  const pendingUsers = state.users.filter(u => u.status === 'pending').length;
  const userBadge = document.getElementById('admin-pending-users-badge');
  if (userBadge) {
    userBadge.innerText = pendingUsers;
    userBadge.style.display = pendingUsers > 0 ? 'inline-flex' : 'none';
  }
}

function openFormulaConfigModal() {
  document.getElementById('modal-formula-config').classList.add('active');
}

async function saveFormula(event) {
  event.preventDefault();
  const id = document.getElementById('formula-id').value;
  const name = document.getElementById('formula-name').value;
  const type = document.getElementById('formula-type').value;
  const rate = parseFloat(document.getElementById('formula-rate').value) || 0;

  const fObj = { id: id || `formula_${Date.now()}`, name, type, rate, category: name.toLowerCase().includes('nước') ? 'water' : 'elec' };
  const idx = state.formulas.findIndex(f => f.id === fObj.id);
  if (idx >= 0) state.formulas[idx] = fObj;
  else state.formulas.push(fObj);

  try {
    await fetch(`${API_BASE}/formulas/save`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, name, type, rate })
    });
  } catch (err) {
    console.warn('Saved formula locally:', err);
  }

  showToast('Đã lưu công thức thành công!', 'success');
  closeModal('modal-formula-config');
  renderServicesConfig();
}

function openAddRoomModal() {
  document.getElementById('room-id').value = '';
  document.getElementById('room-name').value = '';
  document.getElementById('room-tenant').value = '';
  document.getElementById('room-phone').value = '';
  document.getElementById('room-headcount').value = '1';
  document.getElementById('room-base-rent').value = '3500000';

  const houseSelect = document.getElementById('room-house-id');
  houseSelect.innerHTML = state.houses.map(h => `<option value="${h.id}">${h.name}</option>`).join('');
  if (state.currentHouseId !== 'all') houseSelect.value = state.currentHouseId;

  const waterSelect = document.getElementById('room-water-formula');
  waterSelect.innerHTML = state.formulas.filter(f => f.category === 'water' || f.type === 'headcount').map(f => `<option value="${f.id}">${f.name}</option>`).join('');

  const elecSelect = document.getElementById('room-elec-formula');
  elecSelect.innerHTML = state.formulas.filter(f => f.category === 'elec' || f.type !== 'headcount').map(f => `<option value="${f.id}">${f.name}</option>`).join('');

  document.getElementById('modal-room-config').classList.add('active');
}

function openEditRoomModal(roomId) {
  const r = state.rooms.find(x => x.id === roomId);
  if (!r) return;

  document.getElementById('room-id').value = r.id;
  document.getElementById('room-name').value = r.name;
  document.getElementById('room-tenant').value = r.tenant || '';
  document.getElementById('room-phone').value = r.phone || '';
  document.getElementById('room-headcount').value = r.headcount || 1;
  document.getElementById('room-base-rent').value = r.baseRent || 0;

  const houseSelect = document.getElementById('room-house-id');
  houseSelect.innerHTML = state.houses.map(h => `<option value="${h.id}" ${h.id === r.houseId ? 'selected' : ''}>${h.name}</option>`).join('');

  const waterSelect = document.getElementById('room-water-formula');
  waterSelect.innerHTML = state.formulas.filter(f => f.category === 'water' || f.type === 'headcount').map(f => `<option value="${f.id}" ${f.id === r.waterFormula ? 'selected' : ''}>${f.name}</option>`).join('');

  const elecSelect = document.getElementById('room-elec-formula');
  elecSelect.innerHTML = state.formulas.filter(f => f.category === 'elec' || f.type !== 'headcount').map(f => `<option value="${f.id}" ${f.id === r.elecFormula ? 'selected' : ''}>${f.name}</option>`).join('');

  document.getElementById('modal-room-config').classList.add('active');
}

async function saveRoomConfig(event) {
  event.preventDefault();
  const id = document.getElementById('room-id').value;
  const houseId = document.getElementById('room-house-id').value;
  const name = document.getElementById('room-name').value.trim();
  const tenant = document.getElementById('room-tenant').value.trim();
  const phone = document.getElementById('room-phone').value.trim();
  const headcount = parseInt(document.getElementById('room-headcount').value) || 1;
  const baseRent = parseFloat(document.getElementById('room-base-rent').value) || 0;
  const waterFormula = document.getElementById('room-water-formula').value;
  const elecFormula = document.getElementById('room-elec-formula').value;

  const rObj = {
    id: id || `R${Date.now().toString().slice(-4)}`,
    houseId, name, tenant, phone, headcount, baseRent, waterFormula, elecFormula
  };

  const idx = state.rooms.findIndex(r => r.id === rObj.id);
  if (idx >= 0) state.rooms[idx] = rObj;
  else state.rooms.push(rObj);

  try {
    await fetch(`${API_BASE}/rooms/save`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(rObj)
    });
  } catch (err) {
    console.warn('Saved room locally:', err);
  }

  showToast(`Đã lưu thông tin phòng "${name}" thành công!`, 'success');
  closeModal('modal-room-config');
  renderRoomSelector();
  renderCurrentView();
}

function handleMonthChange() {
  state.currentMonth = document.getElementById('select-month').value;
  fetchState();
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', state.theme);
  const themeIcon = document.getElementById('theme-icon');
  themeIcon.setAttribute('data-lucide', state.theme === 'dark' ? 'sun-medium' : 'moon');
  lucide.createIcons();
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('active');
}

function formatMoney(num) {
  return new Intl.NumberFormat('vi-VN').format(Math.round(num || 0));
}

function formatMonthLabel(monthStr) {
  const [year, month] = monthStr.split('-');
  return `${month}/${year}`;
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i data-lucide="${type === 'success' ? 'check-circle' : (type === 'error' ? 'alert-circle' : 'info')}" style="color:${type === 'success' ? 'var(--tvk-emerald)' : (type === 'error' ? 'var(--tvk-red)' : 'var(--tvk-blue)')};"></i>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  lucide.createIcons();
  setTimeout(() => toast.remove(), 4000);
}

// App DOM Initializer
document.addEventListener('DOMContentLoaded', () => {
  setLanguage('vi');

  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const view = item.getAttribute('data-view');
      if (view) switchView(view);
    });
  });
});
