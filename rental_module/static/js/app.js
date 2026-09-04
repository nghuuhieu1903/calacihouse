/* ==========================================================================
   RENTALPRO - DYNAMIC INDIVIDUAL COLUMN SPREADSHEET ENGINE
   ========================================================================== */

const I18N = {
  vi: {
    auth_subtitle: 'Hệ thống Quản lý Phòng trọ & Hóa đơn Tự động',
    auth_trial_accounts: '🔑 Tài Khoản Dùng Thử:',
    auth_admin_label: 'Admin',
    auth_tenant_label: 'Khách (P.101)',
    username: 'Tên đăng nhập',
    password: 'Mật khẩu',
    fullname: 'Họ và Tên',
    login_btn: 'Đăng Nhập Ngay',
    menu_admin: 'Quản Lý Admin',
    menu_tenant: 'Cổng Khách Thuê',
    menu_investor: 'Cổng Chủ Đầu Tư',
    nav_dashboard: 'Tổng Quan',
    nav_services: 'Cấu Hình Dịch Vụ & Điện Nước',
    nav_spreadsheet: 'Bảng Tính Điện Nước & Phụ Phí',
    nav_invoices: 'Quản Lý Hóa Đơn',
    nav_tickets: 'Xử Lý Báo Lỗi',
    nav_users: 'Quản Lý Tài Khoản',
    nav_investor_dashboard: 'Tổng Quan Đầu Tư',
    view_investor_dashboard_subtitle: 'Số liệu thống kê & doanh thu tổng hợp của tòa nhà bạn đầu tư',
    role_investor_label: 'Chủ đầu tư',
    option_role_investor: 'Chủ Đầu Tư (Investor)',
    menu_saler: 'Cổng Kinh Doanh',
    nav_saler_rooms: 'Phòng Trống',
    saler_rooms_subtitle: 'Danh sách phòng còn trống kèm giá phòng và bảng giá dịch vụ áp dụng',
    role_saler_label: 'Nhân viên kinh doanh',
    option_role_saler: 'Nhân Viên Kinh Doanh (Saler)',
    saler_rooms_title: 'Danh Sách Phòng Trống',
    saler_rooms_empty_state: 'Hiện không có phòng trống nào.',
    saler_vacant_unit_label: 'phòng trống',
    saler_services_label: 'Dịch vụ / Điện nước áp dụng',
    saler_missing_label: 'Còn thiếu',
    saler_commission_label: 'Hoa hồng dự kiến khi giới thiệu thành công',
    lbl_saler_commission_percent: 'Hoa Hồng Saler (% của Tiền Cọc):',
    lbl_room_deposit: 'Tiền Cọc (VNĐ) — dùng để tính hoa hồng Saler',
    toast_commission_saved: 'Đã lưu tỷ lệ hoa hồng!',
    saler_area_label: 'Diện tích',
    lbl_room_area: 'Diện Tích (m²)',
    lbl_room_capacity: 'Số Người Tổng (Sức chứa — chỉ để tham khảo, không tính vào công thức)',
    lbl_room_vehicle_count: 'Số Xe Gửi (để tính phí gửi xe = đơn giá × số xe)',
    lbl_room_vehicle_count_short: 'Số xe',
    lbl_dorm_occupant_contracts: 'Hợp đồng từng người',
    hint_room_vehicle_count_dorm: 'Phòng KTX: số xe tự động tính theo dịch vụ phí xe đã chọn cho từng tài khoản trong Quản Lý Tài Khoản, không sửa trực tiếp ở đây được.',
    capacity_label: 'Sức chứa:',
    lbl_room_description: 'Mô Tả / Ghi Chú Phòng (hiển thị công khai cho Saler)',
    btn_room_photos: 'Ảnh Phòng (Saler xem được)',
    select_room_photo: 'Chọn ảnh phòng',
    lbl_saler_photos_list: 'Danh Sách Ảnh (Saler xem được)',
    room_photos_empty_state: 'Chưa có ảnh phòng nào.',
    toast_photo_added: 'Đã thêm ảnh phòng!',
    toast_photo_deleted: 'Đã xoá ảnh phòng!',
    confirm_delete_photo: 'Bạn có chắc muốn xoá ảnh này?',
    tooltip_activate_room: 'Bấm để kích hoạt (nhập thông tin khách thuê)',
    tooltip_deactivate_room: 'Bấm để bỏ kích hoạt (đánh dấu phòng trống, hiện cho Saler)',
    confirm_deactivate_room: 'Bỏ kích hoạt phòng này? Phòng sẽ được đánh dấu Trống và hiện ra cho các bạn Saler.',
    toast_room_deactivated: 'Đã đánh dấu phòng Trống — Saler có thể thấy phòng này.',
    confirm_deactivate_room_title: 'Bỏ Kích Hoạt Phòng?',
    btn_deactivate_room: 'Bỏ Kích Hoạt',
    btn_confirm: 'Xác Nhận',
    confirm_modal_default_title: 'Xác Nhận',
    modal_activate_room_title: 'Kích Hoạt Phòng',
    btn_activate_room: 'Kích Hoạt',
    toast_tenant_name_required: 'Vui lòng nhập tên khách thuê để kích hoạt phòng!',
    toast_room_activated: 'Đã kích hoạt phòng — phòng không còn hiện cho Saler.',
    inv_stat_revenue: 'Doanh thu tháng này',
    inv_stat_occupancy: 'Tỷ lệ lấp đầy',
    inv_stat_collected: 'Đã thu tháng này',
    inv_stat_outstanding: 'Công nợ chưa thu',
    inv_stat_tickets: 'Báo lỗi đang mở',
    inv_profit_title: 'Lợi Nhuận Dự Kiến Nhận Tháng Này',
    inv_profit_revenue_label: 'Doanh thu tháng này:',
    inv_profit_expenses_label: 'Trừ chi phí lắp đặt/sửa chữa:',
    inv_profit_desc: 'Con số dự kiến dựa trên doanh thu và chi phí đã ghi nhận trong tháng — có thể thay đổi nếu có cập nhật thêm.',
    inv_breakdown_title: 'Cơ Cấu Doanh Thu Tháng',
    inv_house_breakdown_title: 'Doanh Thu Theo Tòa Nhà',
    inv_rooms_title: 'Chi Tiết Doanh Thu Theo Phòng',
    inv_expenses_title: 'Chi Phí Lắp Đặt / Sửa Chữa Tháng Này',
    inv_expenses_desc: 'Các khoản chi này đã được trừ vào doanh thu chia sẻ trước khi tính phần bạn nhận được.',
    lbl_total_row: 'Tổng',
    col_house: 'Tòa Nhà',
    col_headcount: 'Số Người',
    nav_my_invoices: 'Hóa Đơn Của Tôi',
    nav_send_ticket: 'Gửi Báo Lỗi / Khiếu Nại',
    billing_period: 'Kỳ hóa đơn:',
    month_select_prefix: 'Tháng',
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
    my_invoice_subtitle: 'Xem chi tiết bảng kê diễn giải chỉ số và trạng thái thanh toán',
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
    btn_activate: 'Kích Hoạt',
    btn_deactivate: 'Vô Hiệu Hóa',
    btn_delete: 'Xóa',
    view_admin_dashboard_subtitle: 'Thống kê hoạt động và hóa đơn tháng hiện tại',
    view_admin_services_subtitle: 'Cấu hình từng loại dịch vụ và quy tắc tính tiền',
    view_admin_invoices_subtitle: 'Xem danh sách và kiểm tra trạng thái thanh toán',
    view_admin_houses_title: 'Quản Lý Tòa Nhà',
    view_admin_houses_subtitle: 'Thêm, sửa tên và địa chỉ các tòa nhà / dãy trọ',
    view_admin_rooms_title: 'Quản Lý Phòng Trọ',
    view_admin_rooms_subtitle: 'Thêm, sửa, xóa phòng và cấu hình giá thuê',
    view_admin_meter_photos_title: 'Cập Nhật Ảnh Số Điện',
    view_admin_meter_photos_subtitle: 'Chụp và gửi ảnh số điện mới hàng tháng cho từng phòng. Sau khi bấm Hoàn Thành, ảnh sẽ được khoá lại.',
    mp_elec_new_label: 'Số Điện Mới',
    mp_locked_badge: 'Đã Hoàn Thành',
    mp_locked_note: 'Đã hoàn thành — chỉ Super Admin mới sửa/xoá được ảnh này.',
    mp_btn_complete: 'Hoàn Thành',
    mp_need_photo_first: 'Vui lòng chụp ảnh số điện trước khi bấm Hoàn Thành!',
    mp_confirm_delete_photo: 'Xoá ảnh số điện này? Bạn có thể chụp lại ảnh khác ngay sau đó.',
    mp_confirm_complete: 'Xác nhận Hoàn Thành? Sau khi hoàn thành, bạn sẽ không thể xoá/sửa ảnh này nữa — chỉ Super Admin mới mở khoá được.',
    mp_toast_completed: 'Đã đánh dấu Hoàn Thành! Ảnh đã được khoá.',
    mp_btn_delete_photo: 'Xoá Ảnh',
    mp_toast_locked_error: 'Có lỗi xảy ra, vui lòng thử lại.',
    view_admin_permissions_title: 'Cấu Hình Phân Quyền Hạn',
    view_admin_permissions_subtitle: 'Tùy chỉnh quyền hạn của Admin, Quản lý và Khách thuê',
    view_tenant_contract_title: 'Hợp Đồng Của Tôi',
    view_tenant_contract_subtitle: 'Ảnh hợp đồng và tài liệu liên quan do chủ nhà cung cấp',
    view_tenant_reports_subtitle: 'Gửi báo lỗi sự cố và theo dõi phản hồi',
    toast_login_missing_fields: 'Vui lòng nhập tên đăng nhập và mật khẩu!',
    toast_login_greeting: 'Xin chào, ',
    toast_login_wrong_credentials: 'Sai tên đăng nhập hoặc mật khẩu!',
    toast_login_wrong_credentials_default: 'Sai tên đăng nhập hoặc mật khẩu! Mật khẩu mặc định: 123',
    toast_account_pending_approval: 'Tài khoản của bạn đang chờ Admin duyệt!',
    toast_account_blocked: 'Tài khoản của bạn đã bị khóa!',
    toast_view_not_permitted: 'Bạn không có quyền truy cập trang này. Liên hệ Super Admin để được cấp quyền.',
    toast_action_not_permitted: 'Bạn không có quyền thực hiện thao tác này. Thay đổi chưa được lưu — dữ liệu đã được khôi phục.',
    toast_logout_success: 'Đã đăng xuất tài khoản!',
    toast_session_ended: 'Phiên đăng nhập đã kết thúc (mật khẩu vừa được đổi hoặc tài khoản bị khóa). Vui lòng đăng nhập lại!',
    role_superadmin_label: 'Super Admin',
    role_admin_label: 'Quản trị viên',
    role_manager_label: 'Quản lý',
    role_tenant_label: 'Khách thuê',
    all_houses_label: 'Tất Cả Tòa Nhà',
    all_rooms_label: 'Tất Cả Phòng',
    multiple_houses_label: 'Nhiều Tòa',
    houses_unit_label: 'tòa nhà',
    rooms_unit_label: 'phòng',
    house_no_rooms_label: 'Chưa có phòng',
    services_empty_state: 'Chưa có dịch vụ nào. Nhấn "Thêm Dịch Vụ Mới" để tạo.',
    services_empty_for_house: 'Không có dịch vụ nào riêng cho "{house}" — dịch vụ khác vẫn còn, chỉ đang bị lọc theo tòa nhà này thôi.',
    users_empty_for_house: 'Không có tài khoản nào thuộc "{house}" — tài khoản khác vẫn còn, chỉ đang bị lọc theo tòa nhà này thôi.',
    btn_show_all_houses: 'Xem Tất Cả Tòa Nhà',
    calc_type_formula: 'THEO CÔNG THỨC',
    calc_type_fixed: 'CỐ ĐỊNH',
    evn_tiered_default_label: 'Bậc thang EVN',
    rule_creates_reading_columns: 'TẠO CỘT NHẬP CHỈ SỐ CŨ/MỚI',
    rule_creates_amount_column: 'TẠO CỘT HIỂN THỊ SỐ TIỀN RÊNG',
    title_edit_service_icon: 'Sửa Dịch Vụ & Icon',
    btn_edit: 'Sửa',
    formula_rate_label: 'Đơn giá: ',
    formula_headcount_label: 'Khoán: ',
    formula_per_person_label: 'người',
    formula_evn_tiered_label: 'Bậc thang EVN 5 mức',
    category_elec: 'Điện',
    category_water: 'Nước',
    icon_label_zap: 'Điện',
    icon_label_droplet: 'Nước',
    icon_label_wifi: 'Internet',
    'icon_label_trash-2': 'Rác',
    icon_label_bike: 'Xe máy',
    'icon_label_shield-check': 'Bảo vệ',
    icon_label_sparkles: 'Vệ sinh',
    icon_label_key: 'Thẻ từ',
    icon_label_snowflake: 'Điều hòa',
    icon_label_package: 'Khác',
    toast_house_added_prefix: 'Đã thêm Tòa Nhà ',
    toast_house_added_suffix: ' thành công!',
    toast_house_updated_prefix: 'Đã cập nhật Tòa Nhà ',
    toast_house_updated_suffix: ' thành công!',
    toast_no_house_selected: 'Vui lòng chọn một tòa nhà để sửa.',
    scope_all_houses_rooms: 'Tất Cả Tòa Nhà & Phòng (Áp dụng toàn bộ hệ thống)',
    toast_service_saved_prefix: 'Đã lưu dịch vụ ',
    toast_service_saved_suffix: '! Bảng tính & Hóa đơn đã cập nhật.',
    confirm_delete_service: 'Bạn có chắc chắn muốn xóa dịch vụ này?',
    toast_service_deleted: 'Đã xóa dịch vụ! Bảng tính & Hóa đơn đã cập nhật.',
    toast_invalid_formula: 'Công thức không hợp lệ! Chỉ dùng số, chữ x, và + − × ÷ ( )',
    formula_desc_fixed: 'Cố định',
    dashboard_no_invoices_prefix: 'Chưa phát hành hóa đơn cho tháng ',
    dashboard_no_invoices_hint: 'Nhấn "Tự Động Gửi Hóa Đơn" để tạo ngay.',
    dashboard_issued_label: 'Phát hành:',
    dashboard_collected_label: 'Đã thu:',
    dashboard_outstanding_label: 'Còn nợ:',
    col_old_reading: 'Cũ',
    col_new_reading: 'Mới',
    col_usage_prefix: 'Số ',
    spreadsheet_empty_state: 'Chưa có phòng trọ nào phù hợp với bộ lọc.',
    empty_tenant_label: '(Trống)',
    not_applicable_label: '(Không áp dụng)',
    title_edit_room_price: 'Chỉnh sửa thông tin & giá tiền riêng phòng này',
    title_move_up: 'Di chuyển lên',
    title_move_down: 'Di chuyển xuống',
    title_drag_to_reorder: 'Kéo để sắp xếp lại vị trí',
    btn_edit_price: 'Sửa Giá',
    title_view_invoice: 'Xem hóa đơn',
    invoices_empty_state: 'Chưa có hóa đơn tháng này. Nhấn "Cập Nhật Hóa Đơn" để sinh tự động.',
    btn_mark_collected: 'Đã Thu',
    toast_invoices_issued_prefix: 'Đã phát hành hóa đơn cho tháng ',
    toast_invoice_marked_paid_prefix: 'Đã xác nhận thu tiền ',
    unassigned_label: 'Chưa gán',
    room_deleted_label: 'Phòng đã bị xóa',
    unassigned_none_placeholder: 'Chưa gán / Không có',
    vacant_label: 'Trống',
    select_room_placeholder: 'Chọn phòng',
    new_label: 'Mới',
    confirm_delete_user: 'Bạn có chắc chắn muốn xóa tài khoản này?',
    toast_user_approved: 'Đã duyệt tài khoản thành công!',
    toast_user_activated: 'Đã kích hoạt tài khoản!',
    toast_user_deactivated: 'Đã vô hiệu hóa tài khoản!',
    toast_previous_tenant_deactivated_prefix: 'Đã tự động vô hiệu hóa tài khoản khách thuê cũ của phòng này: ',
    toast_user_deleted: 'Đã xóa tài khoản!',
    toast_user_created: 'Tạo tài khoản mới thành công!',
    toast_user_updated: 'Đã cập nhật tài khoản và phân quyền thành công!',
    toast_user_updated_with_password: 'Đã cập nhật tài khoản và đặt lại mật khẩu thành công!',
    loading_label: 'Đang tải...',
    contract_empty_title: 'Chưa Có Ảnh Hợp Đồng',
    contract_empty_desc: 'Chủ nhà chưa tải lên ảnh hợp đồng hoặc tài liệu nào cho phòng của bạn.',
    invoice_empty_title_prefix: 'Chưa Có Hóa Đơn Cho Tháng ',
    invoice_empty_desc: 'Chủ nhà đang tổng hợp chỉ số điện nước và phí dịch vụ. Vui lòng quay lại sau!',
    default_house_addr_label: 'Hệ Thống Quản Lý Trọ',
    btn_print_invoice: 'In / Tải Hóa Đơn PDF',
    btn_view_calc_detail: 'Xem Chi Tiết Cách Tính',
    btn_hide_calc_detail: 'Thu Gọn',
    invoice_paper_title: 'HÓA ĐƠN TIỀN NHÀ',
    invoice_id_label: 'Mã HĐ:',
    invoice_period_label: 'Kỳ:',
    tenant_info_label: 'Thông tin Khách thuê',
    room_label: 'Phòng:',
    payment_status_label: 'Trạng thái thanh toán',
    col_cost_item: 'Mục Chi Phí',
    col_formula_explanation: 'Diễn Giải Công Thức & Quy Tắc',
    col_amount_vnd: 'Thành Tiền (VNĐ)',
    line_room_rent: 'Tiền Thuê Phòng',
    line_room_rent_short: 'Tiền nhà',
    line_fixed_by_contract: 'Cố định theo hợp đồng',
    rent_prorated_note_prefix: 'Tính theo hợp đồng: ',
    rent_prorated_note_days_suffix: 'ngày trong tháng',
    line_electricity: 'Tiền Điện',
    line_electricity_short: 'Tiền điện',
    line_water: 'Tiền Nước',
    line_water_short: 'Tiền nước',
    reading_label: 'Chỉ số:',
    btn_meter_photo_view: 'Xem ảnh công tơ',
    btn_meter_photo_upload: 'Tải ảnh công tơ',
    btn_meter_photo_replace: 'Thay ảnh khác',
    meter_old_label: 'Số cũ',
    meter_new_label: 'Số mới',
    meter_photo_empty: 'Chưa có ảnh công tơ cho hóa đơn này.',
    modal_meter_photo_title: 'Ảnh Công Tơ',
    grand_total_label: 'TỔNG CỘNG THANH TOÁN',
    total_label_short: 'TỔNG CỘNG',
    bank_account_label: 'STK:',
    landlord_label: 'Chủ trọ',
    invoice_detail_title_prefix: 'HÓA ĐƠN ',
    tenant_colon_label: 'Khách thuê:',
    rooms_empty_state: 'Chưa có phòng nào. Nhấn "Thêm Phòng Mới" để tạo.',
    no_tenant_label: 'Chưa có khách',
    status_occupied: 'Đang thuê',
    rent_price_label: 'Giá thuê:',
    per_month_label: 'tháng',
    headcount_label: 'Số người:',
    contract_photos_label: 'Ảnh Hợp Đồng',
    toast_select_image_first: 'Vui lòng chọn một ảnh trước',
    toast_image_too_large: 'Ảnh quá lớn, không thể nén xuống dưới 5MB. Vui lòng chọn ảnh khác.',
    toast_image_compress_failed: 'Không đọc được file này. Vui lòng chọn một ảnh hợp lệ.',
    default_document_label: 'Tài liệu',
    toast_document_added: 'Đã thêm ảnh hợp đồng!',
    toast_upload_error: 'Lỗi khi tải ảnh lên',
    toast_server_connection_error: 'Lỗi kết nối máy chủ',
    confirm_delete_document: 'Xóa ảnh tài liệu này?',
    toast_document_deleted: 'Đã xóa ảnh tài liệu',
    room_documents_empty_state: 'Chưa có ảnh hợp đồng nào cho phòng này.',
    lbl_document_visible_to: 'Ai xem được ảnh này',
    lbl_occupants_config: 'Cấu Hình Từng Người Ở',
    room_occupants_empty_state: 'Chưa có tài khoản khách thuê nào gán vào phòng này.',
    toast_occupant_settings_saved: 'Đã lưu cấu hình người ở.',
    document_visible_all_members: 'Tất cả thành viên phòng',
    toast_document_visibility_updated: 'Đã cập nhật người xem được ảnh.',
    col_ticket_id: 'Mã Ticket',
    description_colon_label: 'Mô Tả:',
    no_attached_images: 'Không có ảnh đính kèm',
    title_click_to_enlarge: 'Click để xem ảnh lớn',
    no_responses_yet: 'Chưa có phản hồi nào.',
    default_tenant_label: 'Khách thuê',
    status_colon_label: 'Trạng thái:',
    title_view_larger_image: 'Xem ảnh lớn',
    toast_max_completion_images: 'Tối đa 5 ảnh nghiệm thu',
    toast_max_expense_images: 'Tối đa 5 ảnh minh chứng',
    toast_enter_reply_content: 'Vui lòng nhập nội dung phản hồi',
    toast_ticket_reply_sent_prefix: 'Đã gửi phản hồi ticket ',
    tickets_empty_state: 'Không có báo lỗi nào.',
    images_unit_label: 'ảnh',
    btn_view_details: 'Chi Tiết',
    confirm_delete_ticket: 'Bạn có chắc chắn muốn xóa báo lỗi này?',
    toast_ticket_deleted: 'Đã xóa báo lỗi!',
    toast_max_ticket_images: 'Tối đa 5 ảnh mỗi báo lỗi',
    my_tickets_empty_state: 'Bạn chưa gửi báo lỗi nào.',
    waiting_admin_reply: 'Chờ Admin phản hồi...',
    btn_view_and_discuss: 'Xem & Trao Đổi',
    default_guest_label: 'Khách',
    toast_ticket_sent: 'Đã gửi báo lỗi thành công đến Admin!',
    toast_ticket_send_failed: 'Gửi báo lỗi thất bại, vui lòng thử lại.',
    confirm_delete_room: 'Bạn chắc chắn muốn xóa phòng này?',
    toast_room_deleted: 'Đã xóa phòng',
    toast_room_deleted_tenant_unlinked_prefix: 'Đã gỡ liên kết phòng khỏi tài khoản khách thuê ',
    confirm_delete_house: 'Bạn chắc chắn muốn xóa tòa nhà này? (Sẽ không xóa được nếu vẫn còn phòng hoặc tài khoản chủ đầu tư gắn với tòa nhà này)',
    toast_house_deleted: 'Đã xóa tòa nhà',
    toast_room_saved_prefix: 'Đã lưu thông tin phòng ',
    toast_room_saved_suffix: ' thành công!',
    request_content_label: 'Nội dung yêu cầu:',
    no_discussion_yet: 'Chưa có trao đổi nào.',
    toast_enter_comment_content: 'Vui lòng nhập nội dung ý kiến',
    toast_comment_sent: 'Đã gửi trao đổi thành công!',
    toast_permissions_saved: 'Đã lưu cấu hình phân quyền hệ thống!',
    toast_permissions_save_error: 'Lỗi lưu cấu hình phân quyền!',
    status_paid: 'Đã thanh toán',
    status_awaiting_payment: 'Chờ thanh toán',
    status_sent_auto: 'Đã gửi tự động',
    today_label: 'Hôm nay',
    just_now_label: 'Vừa xong',
    status_ticket_done: 'Hoàn thành',
    status_ticket_processing: 'Đang xử lý',
    status_ticket_open: 'Chưa xử lý',
    status_ticket_new: 'Mới nhận',
    status_ticket_fixing: 'Đang sửa',
    status_ticket_waiting_parts: 'Chờ phụ tùng',
    category_invoice: 'Hóa đơn',
    category_electricity: 'Điện',
    category_water_issue: 'Nước',
    category_furniture: 'Nội thất',
    category_other: 'Khác',
    priority_normal: 'Thường',
    priority_urgent: 'Khẩn cấp',
    lbl_select_house: '🏢 Chọn Tòa Nhà:',
    title_add_new_house: 'Thêm Tòa Nhà Mới',
    title_edit_house: 'Sửa Tòa Nhà',
    btn_house_short: 'Tòa Nhà',
    title_toggle_theme: 'Đổi giao diện Sáng/Tối',
    title_logout: 'Đăng Xuất',
    nav_houses: 'Quản Lý Tòa Nhà',
    nav_rooms: 'Quản Lý Phòng',
    nav_meter_photos: 'Cập Nhật Ảnh Số Điện',
    nav_permissions: 'Phân Quyền Hệ Thống',
    nav_data_retention: 'Sao Lưu Dữ Liệu',
    retention_title: '🗄️ Sao Lưu & Dọn Dữ Liệu Cũ',
    retention_desc: 'Tự động giải phóng bộ nhớ trên server — hóa đơn/số điện nước lưu 3 tháng gần nhất, báo lỗi lưu 1 năm, cảnh báo trước 7 ngày để bạn kịp tải sao lưu.',
    retention_download_now_title: '⬇️ Tải Dữ Liệu Về Máy',
    retention_download_now_desc: 'Tải bất cứ lúc nào, không cần chờ đến hạn xoá.',
    btn_download_invoices: 'Tải Hoá Đơn (PDF)',
    btn_download_tickets_pdf: 'Tải Ticket Kèm Ảnh (PDF)',
    btn_download_tickets: 'Tải Ticket (JSON)',
    btn_download_selected_tickets: 'Tải Về ({count} đã chọn)',
    modal_download_tickets_title: 'Tải Ticket Đã Chọn',
    modal_download_tickets_count: 'Đã chọn {count} ticket. Chọn định dạng để tải về:',
    retention_policy_title: '📋 Quy Tắc Đang Áp Dụng',
    retention_rule_invoices: 'Hóa đơn & số điện nước: giữ lại 3 tháng gần nhất, tự động xoá tháng cũ hơn.',
    retention_rule_tickets: 'Báo lỗi (ticket): giữ lại 1 năm kể từ ngày gửi, tự động xoá sau đó. Xoá tay không tính vào quy tắc này.',
    retention_rule_warning: 'Luôn cảnh báo trước 7 ngày trên trang này trước khi thực sự xoá, để bạn kịp tải sao lưu về máy nếu cần.',
    retention_rule_scope: 'Ảnh hợp đồng, ảnh phòng, Tòa Nhà/Phòng/Dịch Vụ không bị ảnh hưởng — chỉ áp dụng cho hóa đơn, số điện nước và ticket theo thời gian.',
    retention_last_run_title: '🕐 Lần Kiểm Tra Gần Nhất',
    retention_not_checked_yet: 'Đang kiểm tra...',
    retention_pending_invoices: 'Hóa đơn & số điện nước từ {month} trở về trước sẽ tự động bị xoá trong vòng 7 ngày tới.',
    retention_pending_tickets: '{count} báo lỗi sắp tròn 1 năm, sẽ tự động bị xoá trong vòng 7 ngày tới.',
    retention_all_clear: 'Hiện không có dữ liệu nào sắp bị xoá.',
    retention_summary_deleted_invoices: 'Đã tự động xoá {count} hóa đơn cũ.',
    retention_summary_deleted_readings: 'Đã xoá số điện nước các tháng: {months}.',
    retention_summary_deleted_tickets: 'Đã tự động xoá {count} báo lỗi quá 1 năm.',
    retention_summary_nothing_deleted: 'Chưa có dữ liệu nào bị xoá ở lần kiểm tra gần nhất.',
    toast_retention_auto_deleted: 'Đã tự động dọn dữ liệu cũ: {invoices} hóa đơn, {tickets} báo lỗi.',
    btn_download_backup: 'Tải Sao Lưu',
    btn_download_backup_zip: 'Tải ZIP Hóa Đơn (PDF)',
    btn_download_backup_json: 'Tải JSON (dữ liệu thô)',
    nav_site_settings: 'Thiết Lập Trang',
    lbl_site_name: 'Tên Website (hiển thị trên thanh điều hướng)',
    lbl_page_title: 'Tiêu Đề Trang',
    lbl_page_description: 'Mô Tả Trang',
    lbl_page_keywords: 'Từ Khoá Về Trang',
    lbl_share_image: 'Hình Ảnh Khi Chia Sẻ',
    lbl_favicon: 'Hình Ảnh Favicon',
    btn_choose_image: 'Chọn ảnh',
    btn_save_site_settings: 'Lưu Thiết Lập',
    toast_site_settings_saved: 'Đã lưu thiết lập trang!',
    nav_investor_report: 'Báo Cáo Chủ Đầu Tư',
    view_admin_investor_report_title: 'Báo Cáo Chủ Đầu Tư',
    view_admin_investor_report_subtitle: 'Tính toán doanh thu chia sẻ và số tiền chủ đầu tư nhận được mỗi tháng',
    ir_expenses_title: '🔧 Chi Phí Lắp Đặt / Sửa Chữa Trong Tháng',
    ir_expenses_desc: 'Các khoản chi này sẽ được trừ vào doanh thu trước khi tính phần chia cho chủ đầu tư.',
    btn_add_expense: 'Thêm Chi Phí',
    ir_fee_percent_label: 'Tỷ lệ % Quản lý giữ lại (còn lại là phần chủ đầu tư):',
    col_expense_desc: 'Mô Tả',
    col_expense_house: 'Tòa Nhà',
    col_expense_amount: 'Số Tiền',
    ir_expenses_empty: 'Chưa có khoản chi lắp đặt / sửa chữa nào trong tháng này.',
    modal_add_expense_title: 'Thêm Chi Phí Lắp Đặt / Sửa Chữa',
    modal_edit_expense_title: 'Sửa Chi Phí Lắp Đặt / Sửa Chữa',
    modal_expense_detail_title: 'Chi Tiết Khoản Chi',
    ir_no_description_hint: 'Không có mô tả chi tiết.',
    lbl_expense_house: 'Tòa Nhà',
    lbl_expense_month: 'Tháng',
    lbl_expense_name: 'Tên Chi Phí (hiển thị cho Chủ Đầu Tư)',
    lbl_expense_desc: 'Mô Tả Chi Tiết (chỉ xem khi bấm vào dấu !)',
    lbl_expense_amount: 'Số Tiền (VNĐ)',
    lbl_expense_photo: 'Ảnh minh chứng',
    lbl_payment_proof: 'Ảnh Minh Chứng Đã Đóng Tiền',
    hint_payment_proof: 'Chụp lại màn hình chuyển khoản hoặc biên lai — tối đa 5 ảnh. Chủ nhà sẽ xem để xác nhận.',
    hint_payment_proof_admin: 'Nếu khách đưa tiền/chuyển khoản trực tiếp mà chưa dùng hệ thống, bạn có thể tự thêm ảnh minh chứng ở đây — tối đa 5 ảnh.',
    hint_payment_proof_per_occupant: 'Phòng KTX có nhiều người — mỗi người có mục ảnh riêng, chỉ người đó thấy được ảnh của mình.',
    lbl_payment_proof_shared: 'Chung (chưa gán người)',
    toast_payment_proof_saved: 'Đã lưu ảnh minh chứng thanh toán.',
    btn_upload_photo: 'Tải Ảnh Lên',
    btn_change_photo: 'Đổi Ảnh',
    btn_save_expense: 'Lưu Chi Phí',
    toast_expense_saved: 'Đã lưu khoản chi phí!',
    toast_expense_deleted: 'Đã xóa khoản chi phí!',
    confirm_delete_expense: 'Bạn chắc chắn muốn xóa khoản chi phí này?',
    modal_add_icon_title: 'Thêm Biểu Tượng Icon',
    modal_edit_icon_title: 'Sửa Biểu Tượng Icon',
    lbl_icon_emoji: 'Emoji',
    hint_icon_emoji: 'Dán 1 emoji bất kỳ vào đây (bàn phím điện thoại/Windows đều có sẵn bảng emoji).',
    lbl_icon_label: 'Tên gọi',
    btn_save_icon: 'Lưu',
    btn_add_custom_icon: 'Thêm mới',
    toast_icon_saved: 'Đã lưu biểu tượng icon!',
    toast_icon_deleted: 'Đã xóa biểu tượng icon!',
    confirm_delete_icon: 'Bạn chắc chắn muốn xóa biểu tượng icon này?',
    ir_invoices_counted_label: 'hóa đơn được tính trong tháng này',
    ir_line_rent: 'Tổng tiền nhà',
    ir_line_other_services: 'Dịch vụ khác (internet, rác, gửi xe...)',
    ir_line_water_share: 'Tiền nước (chủ đầu tư nhận 50%)',
    ir_of_label: 'của',
    ir_line_elec_excluded: 'Tiền điện (không tính, đã xử lý riêng)',
    ir_not_counted_label: 'Không tính',
    ir_fixed_amount_label: 'số tiền cố định',
    ir_line_expenses: 'Trừ chi phí lắp đặt / sửa chữa',
    ir_line_gross_revenue: 'Tổng tiền nhà + dịch vụ',
    ir_of_gross_label: 'trên tổng tiền nhà + dịch vụ',
    ir_line_net_revenue: 'Doanh thu chia sẻ',
    ir_line_manager_share: 'Phần quản lý giữ lại',
    ir_line_investor_share: 'Chủ đầu tư nhận',
    ir_of_fixed_label: 'cố định / tháng',
    ir_option_percent_of_gross: 'Theo % trên tổng tiền nhà + dịch vụ',
    ir_option_fixed_monthly: 'Số tiền cố định / tháng (VNĐ)',
    ir_manager_fee_config_title: 'Cách tính phần Quản lý giữ lại cho tòa nhà này',
    option_investor_full: 'Gửi toàn bộ (100%)',
    option_investor_percent: 'Theo phần trăm (%)',
    option_investor_fixed: 'Số tiền cố định / tháng (VNĐ)',
    ir_service_toggle_title: 'Chọn dịch vụ gửi cho Chủ Đầu Tư (Điện, Nước, dịch vụ khác) của tòa nhà này',
    ir_service_toggle_desc: 'Dịch vụ nào bạn tự thu (không tích) sẽ không tính vào doanh thu chia sẻ — bạn có thể gửi tiền hoặc giữ lại tùy thỏa thuận với từng chủ đầu tư.',
    ir_actual_amount_label: 'Thực tế',
    toast_service_investor_share_saved: 'Đã lưu cấu hình chia sẻ dịch vụ!',
    ir_override_title: 'Ghi đè số tiền báo cáo tháng này (thủ công)',
    ir_override_hint: 'Số tự động tính theo công thức trên:',
    ir_override_placeholder: 'Để trống = dùng số tự động tính',
    ir_override_active_label: 'Đang dùng số ghi đè thủ công, không phải số tự động tính',
    btn_clear_override: 'Bỏ Ghi Đè',
    toast_manager_fee_saved: 'Đã lưu cách tính phần quản lý!',
    toast_override_amount_required: 'Vui lòng nhập số tiền ghi đè!',
    toast_override_saved: 'Đã lưu số tiền ghi đè!',
    toast_override_cleared: 'Đã bỏ ghi đè, quay lại số tự động tính!',
    ir_summary_title: '📊 Tổng Hợp Theo Tòa Nhà',
    ir_select_house_hint: 'Chọn một tòa nhà cụ thể ở thanh trên để xem báo cáo chi tiết từng dòng.',
    ir_no_house_hint: 'Chưa có tòa nhà nào để lập báo cáo.',
    ir_no_investor_hint: 'Tòa nhà này chưa có chủ đầu tư nào được gán — vào Quản Lý Tài Khoản để gán trước khi cấu hình dịch vụ chia sẻ.',
    ir_select_investor_label: 'Chủ Đầu Tư:',
    hint_investor_share_moved: 'Việc chia sẻ dịch vụ này cho Chủ Đầu Tư nào được cấu hình riêng ở trang "Báo Cáo Chủ Đầu Tư", không phải ở đây.',
    ir_no_invoices_hint: 'Chưa có hóa đơn nào trong tháng này để tính báo cáo.',
    total_label: 'TỔNG CỘNG',
    nav_my_contract: 'Hợp Đồng Của Tôi',
    services_config_title: 'Bảng Cấu Hình Dịch Vụ & Điện Nước',
    btn_add_service: 'Thêm Dịch Vụ Mới',
    services_config_desc: 'Match 100% với Bảng Tính Điện Nước: Khi cấu hình Cố Định ➔ Bảng tính chỉ hiển thị số tiền. Khi cấu hình Công Thức ➔ Bảng tính tự động hiện ô nhập chỉ số Cũ/Mới. Bạn có thể chọn và sửa biểu tượng Icon cho từng dịch vụ bên dưới.',
    th_icon_service_name: 'Biểu Tượng & Tên Dịch Vụ',
    th_type_price: 'Hình Thức & Đơn Giá',
    th_spreadsheet_rule: 'Quy Tắc Match Bảng Tính',
    formulas_library_title: 'Thư Viện Công Thức',
    btn_create_formula: 'Tạo Công Thức',
    formulas_library_desc: 'Tạo sẵn công thức tính theo kWh/m³ để gán cho các dịch vụ tính theo chỉ số.',
    services_done_title: 'Đã hoàn tất cấu hình Dịch vụ & Điện nước?',
    services_done_desc: 'Chuyển sang Bảng Tính Điện Nước để nhập chỉ số cũ/mới tháng này.',
    btn_open_spreadsheet: 'Mở Bảng Tính Điện Nước',
    rooms_mgmt_title: '🚪 Quản Lý Phòng Trọ',
    rooms_mgmt_desc: 'Thêm, sửa, xóa phòng trong các tòa nhà. Cấu hình giá thuê và công thức tính tiền.',
    btn_add_room: 'Thêm Phòng Mới',
    houses_mgmt_title: '🏢 Quản Lý Tòa Nhà',
    houses_mgmt_desc: 'Thêm, sửa tên và địa chỉ các tòa nhà / dãy trọ trong hệ thống.',
    btn_add_house: 'Thêm Tòa Nhà Mới',
    lbl_house_address_short: 'Địa chỉ:',
    houses_empty_state: 'Chưa có tòa nhà nào. Bấm "Thêm Tòa Nhà Mới" để bắt đầu.',
    col_images: 'Ảnh',
    ticket_info_title: '📋 Thông Tin Báo Lỗi',
    attached_images_title: '📷 Ảnh Đính Kèm',
    responses_progress_title: '💬 Phản Hồi & Tiến Trình',
    lbl_update_status: 'Cập nhật trạng thái',
    option_waiting_parts: 'Chờ phụ tùng / vật tư',
    lbl_resolution_note: 'Ghi chú / phương án xử lý',
    ph_resolution_note: 'Nhập hướng dẫn, lịch hẹn hoặc phương án xử lý...',
    lbl_attach_completion_photos: '📷 Đính kèm ảnh hoàn thành / nghiệm thu (tùy chọn)',
    select_completion_photos: 'Chọn ảnh hoàn thành (tối đa 5 ảnh)',
    btn_send_reply: 'Gửi Phản Hồi',
    permissions_matrix_title: '🛠️ Bảng Phân Quyền Hạn Hệ Thống',
    permissions_matrix_desc: 'Thiết lập quyền Xem / Thêm / Sửa cho từng nhóm tài khoản, theo từng chức năng (Quản lý, Chủ đầu tư, Khách thuê)',
    permissions_admin_note: '🔑 Admin luôn có toàn quyền Xem/Thêm/Sửa ở mọi chức năng (trừ Xoá và bảng phân quyền này). Xoá chỉ dành riêng cho Super Admin, không thể cấp cho vai trò khác.',
    th_permission_function: 'Chức Năng',
    th_role_admin: '🔑 Quản Trị Viên (Admin)',
    th_role_manager: '💼 Quản Lý (Manager)',
    th_role_investor: '🏘️ Chủ Đầu Tư (Investor)',
    th_role_tenant: '🏠 Khách Thuê (Tenant)',
    th_action_view: '👁️ Xem',
    th_action_create: '➕ Thêm',
    th_action_edit: '✏️ Sửa',
    th_action_delete: '🗑️ Xoá',
    tab_role_manager: 'Quản Lý',
    tab_role_investor: 'Chủ Đầu Tư',
    tab_role_tenant: 'Khách Thuê',
    hint_delete_superadmin_only: 'Chỉ Super Admin mới xoá được',
    btn_save_permissions: 'Lưu Cấu Hình Phân Quyền',
    my_contract_title: 'Hợp Đồng & Tài Liệu Của Tôi',
    my_contract_desc: 'Ảnh hợp đồng thuê nhà và các tài liệu liên quan do chủ nhà cung cấp',
    option_cat_invoice: 'Sai chỉ số / Khiếu nại Hóa đơn',
    option_cat_electricity: 'Sự cố Hệ thống Điện',
    option_cat_water: 'Sự cố Đường Nước / Rò rỉ',
    option_cat_furniture: 'Hỏng Hóc Nội Thất / Thiết Bị',
    option_cat_other: 'Phản ánh Khác',
    option_priority_urgent: 'Khẩn cấp (Cần xử lý ngay)',
    ph_issue_description: 'Nhập chi tiết vấn đề bạn đang gặp phải...',
    lbl_attach_issue_photos: '📷 Đính kèm ảnh sự cố (tùy chọn)',
    select_issue_photos: 'Nhấn để chọn ảnh (JPG, PNG, tối đa 5 ảnh)',
    modal_add_house_title: 'Thêm Tòa Nhà / Dãy Trọ Mới',
    modal_edit_house_title: 'Sửa Tòa Nhà / Dãy Trọ',
    lbl_house_name: 'Tên Tòa Nhà / Dãy Trọ',
    lbl_address: 'Địa chỉ',
    lbl_description_note: 'Ghi chú mô tả',
    btn_save_house: 'Lưu Tòa Nhà',
    modal_service_config_title: 'Cấu Hình Dịch Vụ & Biểu Tượng Icon',
    lbl_choose_icon: 'Chọn Biểu Tượng Icon Cho Dịch Vụ',
    lbl_apply_scope: 'Áp dụng cho Tòa Nhà & Phòng Chỉ Định (Tích chọn Tòa nhà hoặc mở rộng chọn Phòng riêng)',
    lbl_service_name: 'Tên dịch vụ / Chi phí',
    lbl_calc_method: 'Phương thức tính tiền',
    option_calc_fixed: '💰 Số Tiền Cố Định (Bảng tính chỉ hiện số tiền)',
    option_calc_formula: '🧮 Tính Theo Chỉ Số (Bảng tính hiện ô điền Chỉ số Cũ/Mới)',
    lbl_price_per_month: 'Đơn giá / Tháng (VNĐ)',
    lbl_application_type: 'Hình thức áp dụng',
    lbl_apply_headcount_single: 'Nhân theo số người ở cả với phòng đơn',
    hint_apply_headcount_single: 'Phòng KTX luôn nhân theo số người. Bật thêm cho phòng đơn nếu dịch vụ này (VD: tiền nước) thật sự tính theo đầu người — để trống thì phòng đơn chỉ tính đúng 1 mức giá, không nhân theo "Số Người" (vì ô đó ở phòng đơn chỉ để ghi chú).',
    option_unit_fixed_room: 'Cố định / phòng',
    option_unit_per_person: 'Theo số người ở (VNĐ / người)',
    option_unit_per_vehicle: 'Theo xe / tháng',
    lbl_custom_formula: 'Công thức tính riêng (dùng "x" = chỉ số tiêu thụ Mới − Cũ)',
    ph_custom_formula: 'VD: x*3500 hoặc x*3500+50000',
    hint_custom_formula: 'Chỉ dùng số, chữ x, và các phép + − × ÷ ( ). Ví dụ: x*3500 (đơn giá cố định/đơn vị), (x-50)*3500 (trừ 50 đơn vị miễn phí).',
    btn_save_service: 'Lưu Dịch Vụ',
    option_role_tenant: 'Khách Thuê (Tenant)',
    option_role_superadmin: '🔑 Super Admin (Toàn quyền)',
    option_role_admin: 'Quản Trị Viên (Admin - không xoá được)',
    option_role_manager: 'Quản Lý (Manager)',
    lbl_choose_house: 'Chọn tòa nhà',
    lbl_choose_investor_houses: 'Tòa nhà được xem (có thể chọn nhiều)',
    modal_edit_user_title: 'Chỉnh Sửa & Phân Quyền Thành Viên',
    lbl_role_permission: 'Vai trò / Quyền hạn',
    lbl_residing_room: 'Phòng lưu trú',
    lbl_has_vehicle: 'Có gửi xe (tính phí gửi xe riêng cho người này)',
    lbl_vehicle_service: 'Gửi xe (chọn dịch vụ phí xe)',
    option_no_vehicle: 'Không gửi xe',
    lbl_account_status: 'Trạng thái tài khoản',
    option_status_approved: 'Đã duyệt (Hoạt động)',
    option_status_pending: 'Chờ duyệt (Chưa kích hoạt)',
    option_status_blocked: 'Khóa tài khoản',
    lbl_reset_password: 'Đặt lại mật khẩu mới',
    reset_password_hint: 'Để trống nếu không muốn thay đổi mật khẩu. Chỉ điền khi khách quên mật khẩu cần cấp lại.',
    ph_new_password: 'Nhập mật khẩu mới (để trống = giữ nguyên)',
    btn_save_changes: 'Lưu Thay Đổi',
    modal_invoice_detail_title: 'Chi Tiết Hóa Đơn',
    modal_ticket_detail_title: 'Chi Tiết Báo Lỗi & Trao Đổi',
    feedback_title: '💬 Ý Kiến Phản Hồi',
    ph_your_comment: 'Nhập ý kiến của bạn...',
    btn_send: 'Gửi',
    modal_formula_config_title: 'Công Thức Tính',
    lbl_formula_name: 'Tên công thức',
    lbl_formula_type: 'Loại công thức tính toán',
    option_formula_headcount: '👤 Giá tiền x Số người ở (Tính khoán theo đầu người)',
    option_formula_flat: '⚡/💧 Cố định theo chỉ số sử dụng (đ / kWh hoặc m³)',
    option_formula_tiered: '📊 Bậc thang EVN / Nhà nước',
    lbl_formula_rate: 'Đơn giá (VNĐ / đv hoặc VNĐ / người)',
    btn_close: 'Đóng',
    btn_save_formula: 'Lưu Công Thức',
    modal_room_config_title: 'Cấu Hình Thông Tin & Giá Tiền Phòng Riêng',
    lbl_belongs_to_house: 'Thuộc Tòa Nhà',
    lbl_room_name: 'Tên Phòng',
    lbl_tenant_name: 'Tên Khách Thuê',
    lbl_phone_number: 'Số Điện Thoại',
    lbl_room_type: 'Loại Phòng',
    option_room_type_single: '🚪 Phòng Đơn (1 hóa đơn trọn gói cho cả phòng)',
    option_room_type_dorm: '🛏️ Phòng Ký Túc Xá (tiền điện chia đều theo số người ở)',
    hint_room_type_dorm: 'Giá thuê phòng bên dưới nên nhập theo mức 1 người. Tiền điện của cả phòng sẽ tự động chia đều cho Số Người Ở trước khi tính vào hóa đơn. Tiền nước & dịch vụ khác giữ nguyên, không chia.',
    lbl_room_rent_price_dorm: 'Giá Tiền Thuê / 1 Người (VNĐ/tháng)',
    lbl_headcount_full: 'Số Người Ở (Để tính tiền khoán x số người)',
    lbl_room_rent_price: 'Giá Tiền Thuê Phòng (VNĐ/tháng)',
    lbl_water_formula: 'Công Thức / Cách Tính Tiền Nước Cho Phòng Này',
    lbl_elec_formula: 'Công Thức Tiền Điện Áp Dụng Cho Phòng Này',
    btn_save_room_config: 'Lưu Cấu Hình Phòng',
    lbl_add_new_photo: 'Thêm Ảnh Mới',
    select_contract_photo: 'Chọn ảnh hợp đồng / tài liệu',
    btn_add_to_list: 'Thêm Vào Danh Sách',
    lbl_saved_photos_list: 'Danh Sách Ảnh Đã Lưu (Khách thuê xem được)',
    lbl_contract_duration: 'Thời Hạn Hợp Đồng',
    lbl_contract_start: 'Ngày Bắt Đầu',
    lbl_contract_end: 'Ngày Kết Thúc',
    btn_save_contract_duration: 'Lưu Thời Hạn Hợp Đồng',
    toast_contract_duration_saved: 'Đã lưu thời hạn hợp đồng!',
    contract_duration_label: 'Thời hạn hợp đồng',
    contract_no_end_date: 'Không xác định ngày kết thúc',
    contract_status_expired: 'Hết hạn',
    contract_status_expiring_soon: 'Sắp hết hạn',
    contract_days_left_suffix: 'ngày nữa hết hạn'
  },
  en: {
    auth_subtitle: 'Rental House Management & Automated Billing System',
    auth_trial_accounts: '🔑 Demo Accounts:',
    auth_admin_label: 'Admin',
    auth_tenant_label: 'Tenant (Room 101)',
    username: 'Username',
    password: 'Password',
    fullname: 'Full Name',
    login_btn: 'Sign In Now',
    menu_admin: 'Admin Management',
    menu_tenant: 'Tenant Portal',
    menu_investor: 'Investor Portal',
    nav_dashboard: 'Dashboard',
    nav_services: 'Service & Utility Setup',
    nav_spreadsheet: 'Utility & Fees Sheet',
    nav_invoices: 'Invoice Manager',
    nav_tickets: 'Issue Tickets',
    nav_users: 'Account Manager',
    nav_investor_dashboard: 'Investor Overview',
    view_investor_dashboard_subtitle: 'Statistics and consolidated revenue for the building(s) you invested in',
    role_investor_label: 'Investor',
    option_role_investor: 'Investor',
    menu_saler: 'Sales Portal',
    nav_saler_rooms: 'Vacant Rooms',
    saler_rooms_subtitle: 'List of currently vacant rooms with pricing and applicable service fees',
    role_saler_label: 'Saler',
    option_role_saler: 'Saler',
    saler_rooms_title: 'Vacant Rooms',
    saler_rooms_empty_state: 'No vacant rooms right now.',
    saler_vacant_unit_label: 'vacant',
    saler_services_label: 'Applicable services / utilities',
    saler_missing_label: 'Still needed',
    saler_commission_label: 'Commission if you bring a tenant',
    lbl_saler_commission_percent: 'Saler Commission (% of Deposit):',
    lbl_room_deposit: 'Deposit (VNĐ) — used to compute the saler commission',
    toast_commission_saved: 'Commission rate saved!',
    saler_area_label: 'Area',
    lbl_room_area: 'Area (m²)',
    lbl_room_capacity: 'Total Capacity (informational only, not used in any formula)',
    lbl_room_vehicle_count: 'Vehicle Count (used for parking fee = price × vehicle count)',
    lbl_room_vehicle_count_short: 'Vehicles',
    lbl_dorm_occupant_contracts: 'Per-occupant contracts',
    hint_room_vehicle_count_dorm: 'Dorm room: vehicle count is auto-calculated from each account\'s chosen parking-fee service in Account Management — not directly editable here.',
    capacity_label: 'Capacity:',
    lbl_room_description: 'Room description / notes (publicly shown to Saler)',
    btn_room_photos: 'Room Photos (visible to Saler)',
    select_room_photo: 'Choose room photo',
    lbl_saler_photos_list: 'Photo List (visible to Saler)',
    room_photos_empty_state: 'No room photos yet.',
    toast_photo_added: 'Room photo added!',
    toast_photo_deleted: 'Room photo deleted!',
    confirm_delete_photo: 'Are you sure you want to delete this photo?',
    tooltip_activate_room: 'Click to activate (enter tenant info)',
    tooltip_deactivate_room: 'Click to deactivate (mark as vacant, visible to Saler)',
    confirm_deactivate_room: 'Deactivate this room? It will be marked Vacant and shown to salers.',
    toast_room_deactivated: 'Room marked Vacant — salers can now see it.',
    confirm_deactivate_room_title: 'Deactivate Room?',
    btn_deactivate_room: 'Deactivate',
    btn_confirm: 'Confirm',
    confirm_modal_default_title: 'Confirm',
    modal_activate_room_title: 'Activate Room',
    btn_activate_room: 'Activate',
    toast_tenant_name_required: 'Please enter a tenant name to activate this room!',
    toast_room_activated: 'Room activated — no longer shown to salers.',
    inv_stat_revenue: 'Revenue this month',
    inv_stat_occupancy: 'Occupancy rate',
    inv_stat_collected: 'Collected this month',
    inv_stat_outstanding: 'Outstanding balance',
    inv_stat_tickets: 'Open issue tickets',
    inv_profit_title: 'Expected Take-Home Profit This Month',
    inv_profit_revenue_label: 'Revenue this month:',
    inv_profit_expenses_label: 'Less installation/repair costs:',
    inv_profit_desc: 'An estimate based on the revenue and costs recorded so far this month — may change if more is added.',
    inv_breakdown_title: 'Monthly Revenue Breakdown',
    inv_house_breakdown_title: 'Revenue By Building',
    inv_rooms_title: 'Revenue Detail By Room',
    inv_expenses_title: 'Installation / Repair Costs This Month',
    inv_expenses_desc: 'These costs were already deducted from the shared revenue before your share was calculated.',
    lbl_total_row: 'Total',
    col_house: 'Building',
    col_headcount: 'Occupants',
    nav_my_invoices: 'My Invoices',
    nav_send_ticket: 'Report An Issue',
    billing_period: 'Billing Period:',
    month_select_prefix: 'Month',
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
    my_invoice_subtitle: 'View itemized breakdown, calculation rules, and payment status',
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
    btn_activate: 'Activate',
    btn_deactivate: 'Deactivate',
    btn_delete: 'Delete',
    view_admin_dashboard_subtitle: 'Activity and current month invoice statistics',
    view_admin_services_subtitle: 'Configure each service type and its pricing rules',
    view_admin_invoices_subtitle: 'View the list and check payment status',
    view_admin_houses_title: 'Building Management',
    view_admin_houses_subtitle: 'Add and edit building names and addresses',
    view_admin_rooms_title: 'Room Management',
    view_admin_rooms_subtitle: 'Add, edit, delete rooms and configure rent prices',
    view_admin_meter_photos_title: 'Electricity Meter Photo Updates',
    view_admin_meter_photos_subtitle: 'Take and submit each room\'s new electricity reading photo every month. Once marked Complete, the photo gets locked.',
    mp_elec_new_label: 'New Electricity Reading',
    mp_locked_badge: 'Completed',
    mp_locked_note: 'Completed — only Super Admin can edit/delete this photo now.',
    mp_btn_complete: 'Complete',
    mp_need_photo_first: 'Please take a photo of the electricity meter before marking Complete!',
    mp_confirm_delete_photo: 'Delete this electricity meter photo? You can take a new one right after.',
    mp_confirm_complete: 'Confirm Complete? After this, you will no longer be able to delete/edit this photo — only Super Admin can unlock it.',
    mp_toast_completed: 'Marked Complete! The photo is now locked.',
    mp_btn_delete_photo: 'Delete Photo',
    mp_toast_locked_error: 'Something went wrong, please try again.',
    view_admin_permissions_title: 'Permissions Configuration',
    view_admin_permissions_subtitle: 'Customize permissions for Admin, Manager and Tenant roles',
    view_tenant_contract_title: 'My Contract',
    view_tenant_contract_subtitle: 'Contract photos and related documents provided by the landlord',
    view_tenant_reports_subtitle: 'Submit issue reports and track responses',
    toast_login_missing_fields: 'Please enter your username and password!',
    toast_login_greeting: 'Welcome, ',
    toast_login_wrong_credentials: 'Incorrect username or password!',
    toast_login_wrong_credentials_default: 'Incorrect username or password! Default password: 123',
    toast_account_pending_approval: 'Your account is pending Admin approval!',
    toast_account_blocked: 'Your account has been blocked!',
    toast_view_not_permitted: 'You do not have access to this page. Contact Super Admin for access.',
    toast_action_not_permitted: 'You do not have permission to do this. Your change was not saved — data has been restored.',
    toast_logout_success: 'Logged out successfully!',
    toast_session_ended: 'Your session has ended (the password was changed or the account was locked). Please sign in again.',
    role_superadmin_label: 'Super Admin',
    role_admin_label: 'Administrator',
    role_manager_label: 'Manager',
    role_tenant_label: 'Tenant',
    all_houses_label: 'All Houses',
    all_rooms_label: 'All Rooms',
    multiple_houses_label: 'Multiple Houses',
    houses_unit_label: 'houses',
    rooms_unit_label: 'rooms',
    house_no_rooms_label: 'No rooms yet',
    services_empty_state: 'No services yet. Click "Add New Service" to create one.',
    services_empty_for_house: 'No services specific to "{house}" — other services still exist, this is just filtered to this one house.',
    users_empty_for_house: 'No accounts belong to "{house}" — other accounts still exist, this is just filtered to this one house.',
    btn_show_all_houses: 'Show All Houses',
    calc_type_formula: 'BY FORMULA',
    calc_type_fixed: 'FIXED',
    evn_tiered_default_label: 'EVN Tiered Rate',
    rule_creates_reading_columns: 'CREATES OLD/NEW READING COLUMNS',
    rule_creates_amount_column: 'CREATES SEPARATE AMOUNT COLUMN',
    title_edit_service_icon: 'Edit Service & Icon',
    btn_edit: 'Edit',
    formula_rate_label: 'Rate: ',
    formula_headcount_label: 'Flat fee: ',
    formula_per_person_label: 'person',
    formula_evn_tiered_label: '5-Tier EVN Rate',
    category_elec: 'Electricity',
    category_water: 'Water',
    icon_label_zap: 'Electricity',
    icon_label_droplet: 'Water',
    icon_label_wifi: 'Internet',
    'icon_label_trash-2': 'Trash',
    icon_label_bike: 'Motorbike',
    'icon_label_shield-check': 'Security',
    icon_label_sparkles: 'Cleaning',
    icon_label_key: 'Key Card',
    icon_label_snowflake: 'Air Conditioning',
    icon_label_package: 'Other',
    toast_house_added_prefix: 'Added house ',
    toast_house_added_suffix: ' successfully!',
    toast_house_updated_prefix: 'Updated house ',
    toast_house_updated_suffix: ' successfully!',
    toast_no_house_selected: 'Please select a house to edit.',
    scope_all_houses_rooms: 'All Houses & Rooms (applies system-wide)',
    toast_service_saved_prefix: 'Saved service ',
    toast_service_saved_suffix: '! Spreadsheet & invoices updated.',
    confirm_delete_service: 'Are you sure you want to delete this service?',
    toast_service_deleted: 'Service deleted! Spreadsheet & invoices updated.',
    toast_invalid_formula: 'Invalid formula! Only numbers, x, and + − × ÷ ( ) are allowed',
    formula_desc_fixed: 'Fixed',
    dashboard_no_invoices_prefix: 'No invoices issued yet for ',
    dashboard_no_invoices_hint: 'Click "Auto Send Invoices" to generate them now.',
    dashboard_issued_label: 'Issued:',
    dashboard_collected_label: 'Collected:',
    dashboard_outstanding_label: 'Outstanding:',
    col_old_reading: 'Old',
    col_new_reading: 'New',
    col_usage_prefix: 'Usage ',
    spreadsheet_empty_state: 'No rooms match the current filter.',
    empty_tenant_label: '(Vacant)',
    not_applicable_label: '(Not applicable)',
    title_edit_room_price: 'Edit this room\'s details & individual pricing',
    title_move_up: 'Move up',
    title_move_down: 'Move down',
    title_drag_to_reorder: 'Drag to reorder',
    btn_edit_price: 'Edit Price',
    title_view_invoice: 'View invoice',
    invoices_empty_state: 'No invoices for this month yet. Click "Refresh Invoices" to generate automatically.',
    btn_mark_collected: 'Collected',
    toast_invoices_issued_prefix: 'Invoices issued for ',
    toast_invoice_marked_paid_prefix: 'Payment confirmed for ',
    unassigned_label: 'Unassigned',
    room_deleted_label: 'Room deleted',
    unassigned_none_placeholder: 'Unassigned / None',
    vacant_label: 'Vacant',
    select_room_placeholder: 'Select room',
    new_label: 'New',
    confirm_delete_user: 'Are you sure you want to delete this account?',
    toast_user_approved: 'Account approved successfully!',
    toast_user_activated: 'Account activated!',
    toast_user_deactivated: 'Account deactivated!',
    toast_previous_tenant_deactivated_prefix: 'Automatically deactivated this room\'s previous tenant account: ',
    toast_user_deleted: 'Account deleted!',
    toast_user_created: 'New account created successfully!',
    toast_user_updated: 'Account and permissions updated successfully!',
    toast_user_updated_with_password: 'Account updated and password reset successfully!',
    loading_label: 'Loading...',
    contract_empty_title: 'No Contract Photos Yet',
    contract_empty_desc: 'The landlord has not uploaded any contract photos or documents for your room yet.',
    invoice_empty_title_prefix: 'No Invoice Yet For ',
    invoice_empty_desc: 'The landlord is still compiling utility readings and service fees. Please check back later!',
    default_house_addr_label: 'Rental Management System',
    btn_print_invoice: 'Print / Download Invoice PDF',
    btn_view_calc_detail: 'View Calculation Detail',
    btn_hide_calc_detail: 'Hide Detail',
    invoice_paper_title: 'RENT INVOICE',
    invoice_id_label: 'Invoice ID:',
    invoice_period_label: 'Period:',
    tenant_info_label: 'Tenant Information',
    room_label: 'Room:',
    payment_status_label: 'Payment Status',
    col_cost_item: 'Cost Item',
    col_formula_explanation: 'Formula & Calculation Rule Explanation',
    col_amount_vnd: 'Amount (VND)',
    line_room_rent: 'Room Rent',
    line_room_rent_short: 'Room rent',
    line_fixed_by_contract: 'Fixed as per contract',
    rent_prorated_note_prefix: 'Prorated by contract: ',
    rent_prorated_note_days_suffix: 'days this month',
    line_electricity: 'Electricity',
    line_electricity_short: 'Electricity',
    line_water: 'Water',
    line_water_short: 'Water',
    reading_label: 'Reading:',
    btn_meter_photo_view: 'View meter photos',
    btn_meter_photo_upload: 'Upload meter photo',
    btn_meter_photo_replace: 'Replace photo',
    meter_old_label: 'Old reading',
    meter_new_label: 'New reading',
    meter_photo_empty: 'No meter photos uploaded for this invoice yet.',
    modal_meter_photo_title: 'Meter Photos',
    grand_total_label: 'TOTAL AMOUNT DUE',
    total_label_short: 'TOTAL',
    bank_account_label: 'Account No:',
    landlord_label: 'Landlord',
    invoice_detail_title_prefix: 'INVOICE ',
    tenant_colon_label: 'Tenant:',
    rooms_empty_state: 'No rooms yet. Click "Add New Room" to create one.',
    no_tenant_label: 'No tenant',
    status_occupied: 'Occupied',
    rent_price_label: 'Rent price:',
    per_month_label: 'month',
    headcount_label: 'Headcount:',
    contract_photos_label: 'Contract Photos',
    toast_select_image_first: 'Please select an image first',
    toast_image_too_large: 'Image is too large to compress under 5MB. Please choose a different photo.',
    toast_image_compress_failed: 'Could not read this file. Please choose a valid image.',
    default_document_label: 'Document',
    toast_document_added: 'Contract photo added!',
    toast_upload_error: 'Error uploading image',
    toast_server_connection_error: 'Server connection error',
    confirm_delete_document: 'Delete this document photo?',
    toast_document_deleted: 'Document photo deleted',
    room_documents_empty_state: 'No contract photos yet for this room.',
    lbl_document_visible_to: 'Who can see this photo',
    lbl_occupants_config: 'Per-Occupant Settings',
    room_occupants_empty_state: 'No tenant accounts assigned to this room yet.',
    toast_occupant_settings_saved: 'Occupant settings saved.',
    document_visible_all_members: 'Everyone in the room',
    toast_document_visibility_updated: 'Updated who can see this photo.',
    col_ticket_id: 'Ticket ID',
    description_colon_label: 'Description:',
    no_attached_images: 'No attached images',
    title_click_to_enlarge: 'Click to view full size',
    no_responses_yet: 'No responses yet.',
    default_tenant_label: 'Tenant',
    status_colon_label: 'Status:',
    title_view_larger_image: 'View larger image',
    toast_max_completion_images: 'Maximum 5 completion photos',
    toast_max_expense_images: 'Maximum 5 proof photos',
    toast_enter_reply_content: 'Please enter a reply message',
    toast_ticket_reply_sent_prefix: 'Reply sent for ticket ',
    tickets_empty_state: 'No issue reports yet.',
    images_unit_label: 'images',
    btn_view_details: 'Details',
    confirm_delete_ticket: 'Are you sure you want to delete this report?',
    toast_ticket_deleted: 'Report deleted!',
    toast_max_ticket_images: 'Maximum 5 images per report',
    my_tickets_empty_state: 'You have not submitted any reports yet.',
    waiting_admin_reply: 'Waiting for Admin reply...',
    btn_view_and_discuss: 'View & Discuss',
    default_guest_label: 'Guest',
    toast_ticket_sent: 'Report sent to Admin successfully!',
    toast_ticket_send_failed: 'Failed to send the report, please try again.',
    confirm_delete_room: 'Are you sure you want to delete this room?',
    toast_room_deleted: 'Room deleted',
    toast_room_deleted_tenant_unlinked_prefix: 'Unlinked this room from tenant account ',
    confirm_delete_house: 'Are you sure you want to delete this building? (Deletion is blocked while it still has rooms or an investor account assigned to it)',
    toast_house_deleted: 'Building deleted',
    toast_room_saved_prefix: 'Room information saved for ',
    toast_room_saved_suffix: ' successfully!',
    request_content_label: 'Request details:',
    no_discussion_yet: 'No discussion yet.',
    toast_enter_comment_content: 'Please enter your comment',
    toast_comment_sent: 'Comment sent successfully!',
    toast_permissions_saved: 'System permissions configuration saved!',
    toast_permissions_save_error: 'Error saving permissions configuration!',
    status_paid: 'Paid',
    status_awaiting_payment: 'Awaiting Payment',
    status_sent_auto: 'Sent Automatically',
    today_label: 'Today',
    just_now_label: 'Just now',
    status_ticket_done: 'Completed',
    status_ticket_processing: 'In Progress',
    status_ticket_open: 'Not Started',
    status_ticket_new: 'New',
    status_ticket_fixing: 'Repairing',
    status_ticket_waiting_parts: 'Awaiting Parts',
    category_invoice: 'Invoice',
    category_electricity: 'Electricity',
    category_water_issue: 'Water',
    category_furniture: 'Furniture',
    category_other: 'Other',
    priority_normal: 'Normal',
    priority_urgent: 'Urgent',
    lbl_select_house: '🏢 Select House:',
    title_add_new_house: 'Add New House',
    title_edit_house: 'Edit House',
    btn_house_short: 'House',
    title_toggle_theme: 'Toggle Light/Dark Mode',
    title_logout: 'Log Out',
    nav_houses: 'Building Management',
    nav_rooms: 'Room Management',
    nav_meter_photos: 'Electricity Meter Photo Updates',
    nav_permissions: 'System Permissions',
    nav_data_retention: 'Data Backup',
    retention_title: '🗄️ Backup & Clean Up Old Data',
    retention_desc: 'Automatically frees up storage on the server — invoices/meter readings kept for the trailing 3 months, tickets kept 1 year, with a 7-day warning before anything is actually deleted so you have time to back up.',
    retention_download_now_title: '⬇️ Download Data',
    retention_download_now_desc: 'Download anytime — no need to wait for the deletion deadline.',
    btn_download_invoices: 'Download Invoices (PDF)',
    btn_download_tickets_pdf: 'Download Tickets with Photos (PDF)',
    btn_download_tickets: 'Download Tickets (JSON)',
    btn_download_selected_tickets: 'Download ({count} selected)',
    modal_download_tickets_title: 'Download Selected Tickets',
    modal_download_tickets_count: '{count} ticket(s) selected. Choose a format to download:',
    retention_policy_title: '📋 Current Policy',
    retention_rule_invoices: 'Invoices & meter readings: kept for the trailing 3 months, older ones deleted automatically.',
    retention_rule_tickets: 'Tickets: kept for 1 year from when they were sent, then deleted automatically. Manually deleting one has no effect on this rule.',
    retention_rule_warning: 'Always shows a 7-day warning on this page before actually deleting anything, so you have time to download a backup if needed.',
    retention_rule_scope: 'Contract photos, room photos, and Houses/Rooms/Services are not affected — this only applies to invoices, meter readings, and tickets, based on their age.',
    retention_last_run_title: '🕐 Last Check',
    retention_not_checked_yet: 'Checking...',
    retention_pending_invoices: 'Invoices & meter readings from {month} and earlier will be automatically deleted within the next 7 days.',
    retention_pending_tickets: '{count} ticket(s) about to turn 1 year old will be automatically deleted within the next 7 days.',
    retention_all_clear: 'Nothing is currently scheduled for deletion.',
    retention_summary_deleted_invoices: 'Automatically deleted {count} old invoice(s).',
    retention_summary_deleted_readings: 'Deleted meter readings for: {months}.',
    retention_summary_deleted_tickets: 'Automatically deleted {count} ticket(s) over 1 year old.',
    retention_summary_nothing_deleted: 'Nothing was deleted on the last check.',
    toast_retention_auto_deleted: 'Automatically cleaned up old data: {invoices} invoice(s), {tickets} ticket(s).',
    btn_download_backup: 'Download Backup',
    btn_download_backup_zip: 'Download Invoices ZIP (PDF)',
    btn_download_backup_json: 'Download JSON (raw data)',
    nav_site_settings: 'Page Settings',
    lbl_site_name: 'Site Name (shown in the navbar)',
    lbl_page_title: 'Page Title',
    lbl_page_description: 'Page Description',
    lbl_page_keywords: 'Page Keywords',
    lbl_share_image: 'Share Image',
    lbl_favicon: 'Favicon Image',
    btn_choose_image: 'Choose image',
    btn_save_site_settings: 'Save Settings',
    toast_site_settings_saved: 'Page settings saved!',
    nav_investor_report: 'Investor Report',
    view_admin_investor_report_title: 'Investor Report',
    view_admin_investor_report_subtitle: 'Calculate shared revenue and the payout owed to the investor each month',
    ir_expenses_title: '🔧 Installation / Repair Costs This Month',
    ir_expenses_desc: 'These costs are deducted from revenue before splitting the payout with the investor.',
    btn_add_expense: 'Add Cost',
    ir_fee_percent_label: 'Management fee % kept (remainder goes to the investor):',
    col_expense_desc: 'Description',
    col_expense_house: 'House',
    col_expense_amount: 'Amount',
    ir_expenses_empty: 'No installation / repair costs recorded for this month yet.',
    modal_add_expense_title: 'Add Installation / Repair Cost',
    modal_edit_expense_title: 'Edit Installation / Repair Cost',
    modal_expense_detail_title: 'Expense Detail',
    ir_no_description_hint: 'No detailed note.',
    lbl_expense_house: 'House',
    lbl_expense_month: 'Month',
    lbl_expense_name: 'Expense Name (shown to Investor)',
    lbl_expense_desc: 'Detailed Note (only visible via the ! icon)',
    lbl_expense_amount: 'Amount (VND)',
    lbl_expense_photo: 'Proof photo',
    lbl_payment_proof: 'Payment Proof Photos',
    hint_payment_proof: 'Attach a screenshot of the bank transfer or a receipt — up to 5 photos. The landlord will check these to confirm payment.',
    hint_payment_proof_admin: 'If a tenant paid in person or by transfer before using the system, you can add proof photos yourself here — up to 5 photos.',
    hint_payment_proof_per_occupant: 'This is a dorm room with multiple people — each occupant has their own photo gallery, only visible to them.',
    lbl_payment_proof_shared: 'Shared (unassigned)',
    toast_payment_proof_saved: 'Payment proof saved.',
    btn_upload_photo: 'Upload Photo',
    btn_change_photo: 'Change Photo',
    btn_save_expense: 'Save Cost',
    toast_expense_saved: 'Cost saved!',
    toast_expense_deleted: 'Cost deleted!',
    confirm_delete_expense: 'Are you sure you want to delete this cost?',
    modal_add_icon_title: 'Add Icon',
    modal_edit_icon_title: 'Edit Icon',
    lbl_icon_emoji: 'Emoji',
    hint_icon_emoji: 'Paste any emoji here (your phone/Windows keyboard has an emoji picker built in).',
    lbl_icon_label: 'Label',
    btn_save_icon: 'Save',
    btn_add_custom_icon: 'Add new',
    toast_icon_saved: 'Icon saved!',
    toast_icon_deleted: 'Icon deleted!',
    confirm_delete_icon: 'Are you sure you want to delete this icon?',
    ir_invoices_counted_label: 'invoices counted this month',
    ir_line_rent: 'Total room rent',
    ir_line_other_services: 'Other services (internet, trash, parking...)',
    ir_line_water_share: 'Water fee (investor gets 50%)',
    ir_of_label: 'of',
    ir_line_elec_excluded: 'Electricity fee (excluded, handled separately)',
    ir_not_counted_label: 'Not counted',
    ir_fixed_amount_label: 'fixed amount',
    ir_line_expenses: 'Less: installation / repair costs',
    ir_line_gross_revenue: 'Total rent + services',
    ir_of_gross_label: 'of total rent + services',
    ir_line_net_revenue: 'Shared revenue',
    ir_line_manager_share: 'Management share',
    ir_line_investor_share: 'Investor receives',
    ir_of_fixed_label: 'fixed / month',
    ir_option_percent_of_gross: '% of total rent + services',
    ir_option_fixed_monthly: 'Fixed amount / month (VND)',
    ir_manager_fee_config_title: 'How the management share is calculated for this house',
    option_investor_full: 'Send in full (100%)',
    option_investor_percent: 'As a percentage (%)',
    option_investor_fixed: 'Fixed amount / month (VND)',
    ir_service_toggle_title: 'Choose which services to share with the Investor (electricity, water, other services) for this house',
    ir_service_toggle_desc: 'Any service you leave unchecked (you collect it yourself) is excluded from shared revenue — send that money to the investor or keep it, per your arrangement with them.',
    ir_actual_amount_label: 'Actual',
    toast_service_investor_share_saved: 'Service sharing settings saved!',
    ir_override_title: 'Manually override this month\'s reported amount',
    ir_override_hint: 'Auto-calculated by the formula above:',
    ir_override_placeholder: 'Leave blank = use the auto-calculated amount',
    ir_override_active_label: 'Using a manual override, not the auto-calculated amount',
    btn_clear_override: 'Clear Override',
    toast_manager_fee_saved: 'Management fee formula saved!',
    toast_override_amount_required: 'Please enter an override amount!',
    toast_override_saved: 'Override saved!',
    toast_override_cleared: 'Override cleared, back to the auto-calculated amount!',
    ir_summary_title: '📊 Summary By House',
    ir_select_house_hint: 'Pick a specific house in the top bar to see the line-by-line report.',
    ir_no_house_hint: 'No houses to report on yet.',
    ir_no_investor_hint: 'No investor is assigned to this house yet — assign one in Quản Lý Tài Khoản before configuring shared services.',
    ir_select_investor_label: 'Investor:',
    hint_investor_share_moved: 'Which investor(s) this service is shared with is configured on the "Báo Cáo Chủ Đầu Tư" page, not here.',
    ir_no_invoices_hint: 'No invoices this month to calculate a report from.',
    total_label: 'TOTAL',
    nav_my_contract: 'My Contract',
    services_config_title: 'Service & Utility Configuration Table',
    btn_add_service: 'Add New Service',
    services_config_desc: '100% matched to the Utility Spreadsheet: Fixed config ➔ spreadsheet shows only the amount. Formula config ➔ spreadsheet automatically shows Old/New reading input cells. You can choose and edit the icon for each service below.',
    th_icon_service_name: 'Icon & Service Name',
    th_type_price: 'Type & Unit Price',
    th_spreadsheet_rule: 'Spreadsheet Matching Rule',
    formulas_library_title: 'Formula Library',
    btn_create_formula: 'Create Formula',
    formulas_library_desc: 'Pre-create kWh/m³ formulas to assign to reading-based services.',
    services_done_title: 'Finished configuring Services & Utilities?',
    services_done_desc: 'Switch to the Utility Spreadsheet to enter this month\'s old/new readings.',
    btn_open_spreadsheet: 'Open Utility Spreadsheet',
    rooms_mgmt_title: '🚪 Room Management',
    rooms_mgmt_desc: 'Add, edit, and delete rooms across houses. Configure rent prices and calculation formulas.',
    btn_add_room: 'Add New Room',
    houses_mgmt_title: '🏢 Building Management',
    houses_mgmt_desc: 'Add and edit the name and address of each building / boarding house.',
    btn_add_house: 'Add New Building',
    lbl_house_address_short: 'Address:',
    houses_empty_state: 'No buildings yet. Click "Add New Building" to start.',
    col_images: 'Images',
    ticket_info_title: '📋 Report Information',
    attached_images_title: '📷 Attached Images',
    responses_progress_title: '💬 Responses & Progress',
    lbl_update_status: 'Update status',
    option_waiting_parts: 'Awaiting parts / materials',
    lbl_resolution_note: 'Note / resolution plan',
    ph_resolution_note: 'Enter instructions, appointment, or resolution plan...',
    lbl_attach_completion_photos: '📷 Attach completion / inspection photos (optional)',
    select_completion_photos: 'Select completion photos (up to 5)',
    btn_send_reply: 'Send Reply',
    permissions_matrix_title: '🛠️ System Permissions Matrix',
    permissions_matrix_desc: 'Set View / Create / Edit permissions per account group and function (Manager, Investor, Tenant)',
    permissions_admin_note: '🔑 Admin always has full View/Create/Edit access to every function (except Delete and this permissions screen itself). Delete is reserved for Super Admin only and can\'t be granted to any other role.',
    th_permission_function: 'Function',
    th_role_admin: '🔑 Administrator (Admin)',
    th_role_manager: '💼 Manager',
    th_role_investor: '🏘️ Investor',
    th_role_tenant: '🏠 Tenant',
    th_action_view: '👁️ View',
    th_action_create: '➕ Create',
    th_action_edit: '✏️ Edit',
    th_action_delete: '🗑️ Delete',
    tab_role_manager: 'Manager',
    tab_role_investor: 'Investor',
    tab_role_tenant: 'Tenant',
    hint_delete_superadmin_only: 'Only Super Admin can delete',
    btn_save_permissions: 'Save Permissions Configuration',
    my_contract_title: 'My Contract & Documents',
    my_contract_desc: 'Rental contract photos and related documents provided by the landlord',
    option_cat_invoice: 'Incorrect reading / Invoice complaint',
    option_cat_electricity: 'Electrical system issue',
    option_cat_water: 'Water line issue / leak',
    option_cat_furniture: 'Furniture / equipment damage',
    option_cat_other: 'Other feedback',
    option_priority_urgent: 'Urgent (Needs immediate attention)',
    ph_issue_description: 'Enter details of the issue you are experiencing...',
    lbl_attach_issue_photos: '📷 Attach issue photos (optional)',
    select_issue_photos: 'Click to select images (JPG, PNG, up to 5)',
    modal_add_house_title: 'Add New House / Property',
    modal_edit_house_title: 'Edit House / Property',
    lbl_house_name: 'House / Property Name',
    lbl_address: 'Address',
    lbl_description_note: 'Description note',
    btn_save_house: 'Save House',
    modal_service_config_title: 'Service & Icon Configuration',
    lbl_choose_icon: 'Choose an Icon for the Service',
    lbl_apply_scope: 'Apply to Specific Houses & Rooms (select a house or expand to select individual rooms)',
    lbl_service_name: 'Service / Fee Name',
    lbl_calc_method: 'Calculation Method',
    option_calc_fixed: '💰 Fixed Amount (spreadsheet shows only the amount)',
    option_calc_formula: '🧮 By Reading (spreadsheet shows Old/New reading input cells)',
    lbl_price_per_month: 'Price / Month (VND)',
    lbl_application_type: 'Application Type',
    lbl_apply_headcount_single: 'Also multiply by occupants on a single room',
    hint_apply_headcount_single: 'A dorm room always multiplies by occupant count. Turn this on for a single room only if this service (e.g. a per-person water fee) genuinely bills per person — leave it off and a single room bills a flat price, ignoring "Occupants" (that field is informational there).',
    option_unit_fixed_room: 'Fixed / room',
    option_unit_per_person: 'Per occupant (VND / person)',
    option_unit_per_vehicle: 'Per vehicle / month',
    lbl_custom_formula: 'Custom formula (use "x" = usage, New − Old)',
    ph_custom_formula: 'e.g. x*3500 or x*3500+50000',
    hint_custom_formula: 'Only numbers, the letter x, and + − × ÷ ( ) are allowed. Example: x*3500 (flat rate/unit), (x-50)*3500 (first 50 units free).',
    btn_save_service: 'Save Service',
    option_role_tenant: 'Tenant',
    option_role_superadmin: '🔑 Super Admin (Full access)',
    option_role_admin: 'Administrator (Admin - cannot delete)',
    option_role_manager: 'Manager',
    lbl_choose_house: 'Choose house',
    lbl_choose_investor_houses: 'Houses this investor can see (multiple allowed)',
    modal_edit_user_title: 'Edit User & Permissions',
    lbl_role_permission: 'Role / Permission',
    lbl_residing_room: 'Assigned room',
    lbl_has_vehicle: 'Has a vehicle (billed for parking separately)',
    lbl_vehicle_service: 'Vehicle parking (choose a fee service)',
    option_no_vehicle: 'No vehicle',
    lbl_account_status: 'Account status',
    option_status_approved: 'Approved (Active)',
    option_status_pending: 'Pending (Not activated)',
    option_status_blocked: 'Blocked',
    lbl_reset_password: 'Reset password',
    reset_password_hint: 'Leave blank to keep the current password. Only fill in when the tenant forgot their password and needs a reset.',
    ph_new_password: 'Enter new password (leave blank to keep current)',
    btn_save_changes: 'Save Changes',
    modal_invoice_detail_title: 'Invoice Details',
    modal_ticket_detail_title: 'Report Details & Discussion',
    feedback_title: '💬 Feedback',
    ph_your_comment: 'Enter your comment...',
    btn_send: 'Send',
    modal_formula_config_title: 'Calculation Formula',
    lbl_formula_name: 'Formula name',
    lbl_formula_type: 'Formula type',
    option_formula_headcount: '👤 Rate x Number of occupants (flat fee per person)',
    option_formula_flat: '⚡/💧 Fixed rate per usage reading (VND / kWh or m³)',
    option_formula_tiered: '📊 EVN / Government tiered rate',
    lbl_formula_rate: 'Rate (VND / unit or VND / person)',
    btn_close: 'Close',
    btn_save_formula: 'Save Formula',
    modal_room_config_title: 'Room Information & Custom Pricing Configuration',
    lbl_belongs_to_house: 'Belongs to House',
    lbl_room_name: 'Room Name',
    lbl_tenant_name: 'Tenant Name',
    lbl_phone_number: 'Phone Number',
    lbl_room_type: 'Room Type',
    option_room_type_single: '🚪 Single Room (one all-inclusive bill for the whole room)',
    option_room_type_dorm: '🛏️ Dorm Room (electricity split evenly across occupants)',
    hint_room_type_dorm: 'Enter the rent below as the per-person rate. The room\'s total electricity cost is automatically split evenly across Number of Occupants before being added to the bill. Water & other services are not split.',
    lbl_room_rent_price_dorm: 'Rent Per Person (VND/month)',
    lbl_headcount_full: 'Number of Occupants (used for per-person flat fees)',
    lbl_room_rent_price: 'Room Rent Price (VND/month)',
    lbl_water_formula: 'Water Calculation Formula For This Room',
    lbl_elec_formula: 'Electricity Formula Applied To This Room',
    btn_save_room_config: 'Save Room Configuration',
    lbl_add_new_photo: 'Add New Photo',
    select_contract_photo: 'Select contract / document photo',
    btn_add_to_list: 'Add To List',
    lbl_saved_photos_list: 'Saved Photos List (visible to tenant)',
    lbl_contract_duration: 'Contract Duration',
    lbl_contract_start: 'Start Date',
    lbl_contract_end: 'End Date',
    btn_save_contract_duration: 'Save Contract Duration',
    toast_contract_duration_saved: 'Contract duration saved!',
    contract_duration_label: 'Contract duration',
    contract_no_end_date: 'No end date set',
    contract_status_expired: 'Expired',
    contract_status_expiring_soon: 'Expiring soon',
    contract_days_left_suffix: 'days left'
  }
};

function t(key) {
  return (I18N[state.lang] && I18N[state.lang][key]) || (I18N.vi && I18N.vi[key]) || key;
}

// Maps internal (Vietnamese) status/enum strings used for data comparisons
// to a translated display label, without touching the stored values themselves.
const STATUS_LABEL_MAP = {
  'Đã thanh toán': 'status_paid',
  'Chờ thanh toán': 'status_awaiting_payment',
  'Đã gửi tự động': 'status_sent_auto',
  'Hôm nay': 'today_label',
  'Vừa xong': 'just_now_label',
  'Đã hoàn thành': 'status_ticket_done',
  'Đang xử lý': 'status_ticket_processing',
  'Chưa xử lý': 'status_ticket_open',
  'Đã duyệt': 'status_approved',
  'Chờ duyệt': 'status_pending',
  'Đã khóa': 'status_blocked',
  'Mới tiếp nhận': 'status_ticket_new',
  'Đang sửa chữa': 'status_ticket_fixing',
  'Chờ phụ tùng': 'status_ticket_waiting_parts',
  'Hóa đơn': 'category_invoice',
  'Điện': 'category_electricity',
  'Nước': 'category_water_issue',
  'Nội thất': 'category_furniture',
  'Khác': 'category_other',
  'Bình thường': 'priority_normal',
  'Khẩn cấp': 'priority_urgent'
};

function statusLabel(viText) {
  const key = STATUS_LABEL_MAP[viText];
  return key ? t(key) : viText;
}

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

// Was hardcoded '2026-08' — correct for however long "today" actually
// fell in August 2026, but would have silently gone stale as soon as the
// real calendar rolled into September and nobody had touched the Kỳ Hóa
// Đơn dropdown yet. Derived from the real clock instead, same formula
// renderMonthSelector() already uses for the dropdown's own options.
function currentMonthStr() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
}

let state = {
  lang: 'vi',
  currentUser: null,
  currentView: 'admin-dashboard',
  currentMonth: currentMonthStr(),
  currentHouseId: 'all',
  currentRoomId: 'all',
  theme: 'light',
  permissions: [],
  // houses/users/rooms/services used to ship pre-loaded with hardcoded
  // demo data (fake houses, fake rooms, fake services) as the initial
  // value here — meant for briefly rendering *something* before the real
  // backend existed. Every render before fetchState() completed used to
  // show that fake data as if it were real, and login had an "offline"
  // fallback that let anyone in with hardcoded demo credentials against
  // it if the (same-origin, always-actually-there) server request ever
  // failed. Empty now — the loading overlay (see showAppLoadingOverlay)
  // covers the real gap while fetchState() runs, so there's nothing left
  // that ever needs this placeholder data to render.
  houses: [],
  users: [],
  rooms: [],
  services: [],
  formulas: [],
  readings: {},
  invoices: [],
  tickets: [],
  roomDocuments: {},
  roomPhotos: {},
  salerCommissionPercent: 0,
  investorExpenses: [],
  investorReportOverrides: [],
  siteSettings: { siteName: 'CalaciHouse', title: 'CalaciHouse - Hệ Thống Quản Lý Phòng Trọ', description: '', keywords: '', shareImage: '', favicon: '' },
  customIcons: []
};

const API_BASE = '/api';

// Wraps a mutating POST request with the response check most of this
// file's save/edit handlers used to skip — fetch() only rejects on a
// network failure, NEVER on an HTTP error status, so a plain
// `try { await fetch(...) } catch { ... }` around a 403 (wrong
// permission), 400, or 500 response doesn't throw at all: the code falls
// straight through to whatever "success" toast came next. Combined with
// updating state.* optimistically *before* the request, that showed a
// manager without 'houses':'edit', say, a convincing "saved!" toast and
// the edited value sitting right there in the list — even though the
// server had just rejected the write and never persisted it. Re-syncs
// from the server on any failure (permission denied, validation error,
// lost connection, ...) instead of trying to hand-unwind whatever
// optimistic edit was already applied locally.
async function postAndVerify(url, body) {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || data.success === false) {
      showToast(data.error || t('toast_action_not_permitted'), 'error');
      await fetchState();
      return null;
    }
    return data;
  } catch (err) {
    showToast(t('toast_server_connection_error'), 'error');
    await fetchState();
    return null;
  }
}

// Set while switchView() is running because a browser back/forward
// (popstate) triggered it — see the listener near DOMContentLoaded below —
// so switchView() itself knows not to push ANOTHER history entry for a
// navigation that came from history in the first place.
let _isPopStateNav = false;

// Client-side id for a new record, sent to the server as-is (it becomes the
// row's primary key — the backend only falls back to generating its own id
// when this is omitted). Timestamp alone isn't enough: two records created
// within the same millisecond (or, for the old room/ticket generators this
// replaced, the same 10-second/9000-value window) would collide and one
// would silently overwrite the other via REPLACE INTO. The random suffix
// makes that practically impossible.
function genId(prefix) {
  return `${prefix}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
}

/* ==========================================================================
   AUTHENTICATION LOGIC
   ========================================================================== */

async function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value.trim();

  if (!username || !password) {
    showToast(t('toast_login_missing_fields'), 'error');
    return;
  }

  try {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    // The login route responds with a real JSON body (success:false + a
    // specific reason) on a rejected login, but as an HTTP 400 — which
    // isn't `res.ok`. That used to fall straight through to the offline
    // local-fallback authentication below without even parsing the
    // response, silently ignoring the server's answer (wrong password,
    // pending approval, or — the one that matters here — an account an
    // admin just deactivated) and letting the login succeed anyway
    // against the fallback's hardcoded demo credentials. Parse the JSON
    // regardless of status and always return on it — only a genuine
    // network failure (server unreachable) should fall through.
    const data = await res.json();
    if (data.success) {
      state.currentUser = data.user;
      showToast(`${t('toast_login_greeting')}${data.user.fullName}!`, 'success');
      document.getElementById('auth-screen').style.display = 'none';
      document.getElementById('cala-navbar').style.display = 'flex';
      document.getElementById('app-container').style.display = 'flex';
      // setupUserRoleUI() (which ends by calling switchView()) used to run
      // here, BEFORE fetchState() — rendering whichever view with
      // state.houses/rooms/services still at their hardcoded placeholder
      // values (and every permission-gated nav tab wrongly hidden, since
      // state.permissions was still empty too) for however long the fetch
      // took. A loading overlay instead of that flash of wrong data, until
      // the real thing is actually ready to show.
      showAppLoadingOverlay();
      await fetchState(true);
      hideAppLoadingOverlay();
      setupUserRoleUI();
      // No-op for anyone but superadmin — see checkDataRetention(). This
      // is the actual trigger for "automatic" old-data cleanup in a
      // deployment with no cron of its own: once per login, not on every
      // single request.
      checkDataRetention();
    } else {
      showToast(data.error || t('toast_login_wrong_credentials'), 'error');
    }
    return;
  } catch (err) {
    console.warn('Flask server fetch error, falling back to local authentication:', err);
  }

  const foundUser = state.users.find(
    u => u.username.toLowerCase() === username.toLowerCase() && u.password === password
  );

  if (foundUser) {
    if (foundUser.status === 'pending') {
      showToast(t('toast_account_pending_approval'), 'error');
      return;
    }
    if (foundUser.status === 'blocked') {
      showToast(t('toast_account_blocked'), 'error');
      return;
    }
    state.currentUser = foundUser;
    showToast(`${t('toast_login_greeting')}${foundUser.fullName}!`, 'success');
    document.getElementById('auth-screen').style.display = 'none';
    document.getElementById('cala-navbar').style.display = 'flex';
    document.getElementById('app-container').style.display = 'flex';
    setupUserRoleUI();
    renderCurrentView();
  } else {
    showToast(t('toast_login_wrong_credentials_default'), 'error');
  }
}

// Drops back to the login screen without calling the logout endpoint —
// for when the SERVER has already ended the session (password reset,
// account locked or deleted while logged in) and the page only finds out
// from a 401. Mirrors handleLogout()'s teardown so the app doesn't end up
// half-logged-out: stale state left in memory would otherwise still
// render behind the login card and flash back on the next re-login.
function forceLoginScreen(message) {
  state.currentUser = null;
  const usernameEl = document.getElementById('login-username');
  const passwordEl = document.getElementById('login-password');
  if (usernameEl) usernameEl.value = '';
  if (passwordEl) passwordEl.value = '';
  hideAppLoadingOverlay();
  document.querySelectorAll('.modal-backdrop.active').forEach(m => m.classList.remove('active'));
  document.getElementById('auth-screen').style.display = 'flex';
  document.getElementById('cala-navbar').style.display = 'none';
  document.getElementById('app-container').style.display = 'none';
  if (message) showToast(message, 'error');
  if (history.state && history.state.calaciView) {
    history.replaceState(null, '', location.pathname + location.search);
  }
}

async function handleLogout() {
  try {
    await fetch(`${API_BASE}/auth/logout`, { method: 'POST' });
  } catch (err) {
    console.warn('Could not clear server session:', err);
  }
  state.currentUser = null;
  if (document.getElementById('login-username')) document.getElementById('login-username').value = '';
  if (document.getElementById('login-password')) document.getElementById('login-password').value = '';
  document.getElementById('auth-screen').style.display = 'flex';
  document.getElementById('cala-navbar').style.display = 'none';
  document.getElementById('app-container').style.display = 'none';
  showToast(t('toast_logout_success'), 'info');

  // Clears the view history switchView() built up during the session that
  // just ended — otherwise the first several back-gestures after logging
  // out would each land on a dead, un-restorable entry from the old
  // session (see the popstate handler's `!state.currentUser` guard)
  // before finally leaving the site, instead of leaving on the first one.
  if (history.state && history.state.calaciView) {
    history.replaceState(null, '', location.pathname + location.search);
  }
}

// Applies siteName/title/description/keywords/shareImage/favicon to every
// place they're visible: the browser tab (<title>, favicon), search/social
// previews (meta tags), and in-app branding (navbar + login screen). Called
// once before login (via the public settings endpoint, since the login
// screen needs it before anyone's authenticated) and again after fetchState()
// picks up the same object from get_full_state, in case it changed mid-session.
function applySiteSettings(settings) {
  if (!settings) return;
  state.siteSettings = settings;

  const siteName = settings.siteName || 'CalaciHouse';
  document.querySelectorAll('#navbar-site-name, #auth-site-name').forEach(el => { el.textContent = siteName; });

  const titleTag = document.getElementById('page-title-tag');
  if (titleTag) document.title = settings.title || siteName;

  const descTag = document.getElementById('meta-description-tag');
  if (descTag && settings.description) descTag.setAttribute('content', settings.description);
  const keywordsTag = document.getElementById('meta-keywords-tag');
  if (keywordsTag) keywordsTag.setAttribute('content', settings.keywords || '');
  const ogTitleTag = document.getElementById('meta-og-title-tag');
  if (ogTitleTag) ogTitleTag.setAttribute('content', settings.title || siteName);
  const ogDescTag = document.getElementById('meta-og-description-tag');
  if (ogDescTag && settings.description) ogDescTag.setAttribute('content', settings.description);
  // Points at the real, independently-fetchable /og-image route (see
  // routes.py) instead of the raw stored data: URL — a link-preview
  // crawler is what actually needs this value (see index()'s own
  // server-rendered version of this same tag), and a data: URI isn't
  // something it can fetch at all. This client-side update just keeps an
  // already-open tab's DOM consistent with that after a settings change;
  // it has no effect on what a crawler sees.
  const ogImageTag = document.getElementById('meta-og-image-tag');
  if (ogImageTag) ogImageTag.setAttribute('content', settings.shareImage ? `${location.origin}/og-image` : '');

  if (settings.favicon) {
    let faviconLink = document.getElementById('favicon-link-tag');
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.id = 'favicon-link-tag';
      faviconLink.rel = 'icon';
      document.head.appendChild(faviconLink);
    }
    faviconLink.href = settings.favicon;
  }
}

async function fetchPublicSiteSettings() {
  try {
    const res = await fetch(`${API_BASE}/settings/public`);
    const data = await res.json();
    if (data.success) applySiteSettings(data.settings);
  } catch (err) {
    console.warn('Could not fetch public site settings:', err);
  }
}

function showAppLoadingOverlay() {
  const el = document.getElementById('app-loading-overlay');
  if (el) el.style.display = 'flex';
}

function hideAppLoadingOverlay() {
  const el = document.getElementById('app-loading-overlay');
  if (el) el.style.display = 'none';
}

async function restoreSession() {
  try {
    const res = await fetch(`${API_BASE}/auth/me`);
    if (res.ok) {
      const data = await res.json();
      if (data.success) {
        state.currentUser = data.user;
        document.getElementById('auth-screen').style.display = 'none';
        document.getElementById('cala-navbar').style.display = 'flex';
        document.getElementById('app-container').style.display = 'flex';
        // Same reasoning as handleLogin() — show a loading overlay instead
        // of rendering a view against the still-placeholder state.
        showAppLoadingOverlay();
        await fetchState(true);
        hideAppLoadingOverlay();
        setupUserRoleUI();
        checkDataRetention();
      }
    }
  } catch (err) {
    console.warn('No active session, showing login screen:', err);
  }
}

// Delete endpoints are hardcoded @superadmin_required server-side (see
// routes.py) — even an "admin" account with full add/edit access cannot
// delete anything, by design (only "superadmin" can). Hide delete buttons
// for everyone else too, rather than showing a button that only 403s.
function canDelete() {
  return !!(state.currentUser && state.currentUser.role === 'superadmin');
}

// Feature x action(view/create/edit/delete) permissions — mirrors
// permission_required() in auth.py exactly (same feature keys, same
// role/action carve-outs), since this only drives what's SHOWN in the UI;
// the backend decorator is the actual authority. 'delete' isn't stored in
// the matrix at all (always superadmin-only, a fixed rule from the
// original 5-role design) — canDelete() already covers that everywhere
// this matters, so it's never passed as an action here.
function hasPermission(role, featureKey, action) {
  if (role === 'superadmin') return true;
  // "admin" sees/manages everything superadmin does except deleting and
  // editing the permission matrix itself — both unconditional, not driven
  // by the matrix below, so promoting someone to admin never needs a
  // matrix visit first.
  if (role === 'admin') return true;
  if (!state.permissions) return false;
  const feature = state.permissions.find(p => p.key === featureKey);
  if (!feature || !feature[role]) return false;
  return !!feature[role][action];
}

// Single source of truth for which admin-nav view needs which permission —
// each key needs 'view' on the matching feature to reach that tab at all.
// admin-spreadsheet checks 'edit' on services instead: it's where readings
// actually get entered/changed, not just viewed, and managers aren't
// allowed by default.
const ADMIN_TAB_PERMISSIONS = {
  'admin-dashboard': null,
  'admin-houses': ['houses', 'view'],
  'admin-services': ['services', 'view'],
  'admin-spreadsheet': ['services', 'edit'],
  'admin-invoices': ['invoices', 'view'],
  'admin-investor-report': ['investor_report', 'view'],
  'admin-rooms': ['rooms', 'view'],
  'admin-tickets': ['tickets', 'view'],
  'admin-users': ['accounts', 'view']
};

// Used both to hide/show the matching sidebar tab (setupUserRoleUI, below)
// and — just as importantly — inside switchView() itself to actually
// BLOCK rendering a restricted view. Hiding the nav button alone doesn't
// stop anything on its own: several other buttons in this app (Dashboard's
// "Phím Tắt Thao Tác Nhanh", the services page's own "Mở Bảng Tính..."
// button, ...) call switchView('admin-services')/('admin-spreadsheet')
// directly and were never individually permission-checked, so a manager
// without 'services' access could still reach full service/formula
// editing through those even with the matching nav tab hidden. Checking
// once here instead closes that off for every current AND future button
// that navigates this way, rather than relying on each one to remember.
function canAccessAdminView(role, viewId) {
  if (viewId === 'admin-permissions') return role === 'superadmin';
  if (viewId === 'admin-data-retention') return role === 'superadmin';
  // Manager's home is Xử Lý Báo Lỗi, not the revenue-oriented Tổng Quan —
  // deliberately hardcoded per-role rather than a matrix toggle, since
  // there's no "view" action on a feature called 'dashboard' to hang a
  // checkbox off of; admin/superadmin still land there as usual.
  if (viewId === 'admin-dashboard') return role !== 'manager';
  // Meter-photo submission is a dedicated Manager tool (see its own view's
  // comments) — deliberately not in the permission matrix, but admin/
  // superadmin can still reach it directly since they can do anything a
  // manager can. Only the nav tab itself stays manager-only, to avoid
  // cluttering their sidebar with a tool they already have a fuller
  // version of (the Bảng Tính page).
  if (viewId === 'admin-meter-photos') return role === 'manager' || role === 'admin' || role === 'superadmin';
  if (viewId in ADMIN_TAB_PERMISSIONS) {
    const pair = ADMIN_TAB_PERMISSIONS[viewId];
    return !pair || hasPermission(role, pair[0], pair[1]);
  }
  // Not an admin-nav view at all (investor/saler/tenant's own views, or
  // the login screen) — those are gated by which nav SECTION shows for
  // the role, handled separately below, not by this per-tab matrix.
  return true;
}

function setupUserRoleUI() {
  const user = state.currentUser;
  if (!user) return;

  const adminNav = document.querySelector('.admin-nav');
  const tenantNav = document.querySelector('.tenant-nav');
  const investorNav = document.querySelector('.investor-nav');
  const salerNav = document.querySelector('.saler-nav');
  const houseBox = document.getElementById('nav-house-box');
  const monthBox = document.getElementById('nav-month-box');
  const avatarText = document.getElementById('user-avatar-text');
  const nameEl = document.getElementById('user-display-name');
  const roleEl = document.getElementById('user-display-role');
  const usernameEl = document.getElementById('user-display-username');

  if (user.role === 'superadmin') {
    avatarText.innerText = 'SA';
    roleEl.innerText = t('role_superadmin_label');
  } else if (user.role === 'admin') {
    avatarText.innerText = 'AD';
    roleEl.innerText = t('role_admin_label');
  } else if (user.role === 'manager') {
    avatarText.innerText = 'QL';
    roleEl.innerText = t('role_manager_label');
  } else if (user.role === 'investor') {
    avatarText.innerText = 'CD';
    roleEl.innerText = t('role_investor_label');
  } else if (user.role === 'saler') {
    avatarText.innerText = 'KD';
    roleEl.innerText = t('role_saler_label');
  } else {
    avatarText.innerText = user.username.substring(0, 2).toUpperCase();
    roleEl.innerText = user.roomId ? `${t('col_room')} ${user.roomId.replace('R', '')}` : t('role_tenant_label');
  }

  nameEl.innerText = user.fullName;
  if (usernameEl) usernameEl.innerText = `@${user.username}`;

  if (user.role === 'superadmin' || user.role === 'admin' || user.role === 'manager') {
    adminNav.style.display = 'flex';
    tenantNav.style.display = 'none';
    if (investorNav) investorNav.style.display = 'none';
    // Admin/Quản lý chọn Tòa Nhà & Kỳ ngay trong trang Quản Lý Hóa Đơn thay
    // vì navbar — bớt chiếm chỗ trên các trang khác.
    if (houseBox) houseBox.style.display = 'none';
    if (monthBox) monthBox.style.display = 'none';

    // Hide/show sidebar elements based on permissions — each tab needs
    // 'view' on the matching feature. admin-spreadsheet checks 'edit' on
    // services instead: it's where readings actually get entered/changed,
    // not just viewed, and managers are NOT allowed by default.
    let firstView = null;
    Object.keys(ADMIN_TAB_PERMISSIONS).forEach(view => {
      const btn = document.querySelector(`.admin-nav [data-view="${view}"]`);
      if (btn) {
        const allowed = canAccessAdminView(user.role, view);
        btn.style.display = allowed ? 'flex' : 'none';
        if (allowed && !firstView) {
          firstView = view;
        }
      }
    });
    // Manager's landing view is always Xử Lý Báo Lỗi specifically (not
    // just "whichever tab happens to come first" — admin-houses would
    // otherwise win that by object-key order for a manager who only has
    // houses:view), as long as they still have tickets:view at all.
    if (user.role === 'manager' && canAccessAdminView('manager', 'admin-tickets')) {
      firstView = 'admin-tickets';
    }

    // Phân Quyền Hệ Thống and Thiết Lập Trang aren't in the `tabs` map
    // above — both are fixed superadmin-only levers, never driven by the
    // matrix itself (you can't grant "edit the permission matrix" via the
    // permission matrix), matching their routes' @superadmin_required
    // server-side.
    const meterPhotosNav = document.querySelector('.admin-nav [data-view="admin-meter-photos"]');
    if (meterPhotosNav) meterPhotosNav.style.display = user.role === 'manager' ? 'flex' : 'none';
    const permissionsNav = document.querySelector('.admin-nav [data-view="admin-permissions"]');
    if (permissionsNav) permissionsNav.style.display = user.role === 'superadmin' ? 'flex' : 'none';
    const siteSettingsNav = document.getElementById('nav-site-settings');
    if (siteSettingsNav) siteSettingsNav.style.display = user.role === 'superadmin' ? 'flex' : 'none';
    const dataRetentionNav = document.getElementById('nav-data-retention');
    if (dataRetentionNav) dataRetentionNav.style.display = user.role === 'superadmin' ? 'flex' : 'none';

    // Shortcut buttons OUTSIDE the sidebar that jump straight to one of
    // the views above (Dashboard's "Phím Tắt Thao Tác Nhanh", the
    // spreadsheet page's own "Cấu Hình Dịch Vụ..." button) — switchView()
    // itself blocks an unpermitted manager from actually landing on the
    // page these point to now, but leaving the button visible just to
    // bounce them back with an error toast is a worse experience than not
    // showing it at all.
    const toggleBtn = (id, allowed) => {
      const el = document.getElementById(id);
      if (el) el.style.display = allowed ? '' : 'none';
    };
    toggleBtn('qa-btn-services', canAccessAdminView(user.role, 'admin-services'));
    toggleBtn('qa-btn-spreadsheet', canAccessAdminView(user.role, 'admin-spreadsheet'));
    toggleBtn('qa-btn-send-invoices', hasPermission(user.role, 'invoices', 'create'));
    toggleBtn('sp-btn-services', canAccessAdminView(user.role, 'admin-services'));
    toggleBtn('sp-btn-send-invoices', hasPermission(user.role, 'invoices', 'create'));
    toggleBtn('btn-add-house', hasPermission(user.role, 'houses', 'create'));
    toggleBtn('btn-add-room', hasPermission(user.role, 'rooms', 'create'));
    toggleBtn('btn-add-service', hasPermission(user.role, 'services', 'create'));
    toggleBtn('btn-add-expense', hasPermission(user.role, 'investor_expenses', 'create'));
    toggleBtn('btn-add-user', hasPermission(user.role, 'accounts', 'create'));
    toggleBtn('admin-reply-form-box', hasPermission(user.role, 'tickets', 'edit'));

    // Dashboard money widgets — tied to the same 'invoices':'view'
    // permission that already gates the whole Quản Lý Hóa Đơn tab, so a
    // manager without invoice access doesn't see revenue/collection
    // figures folded into their dashboard either. Superadmin/admin always
    // pass hasPermission(), so this never hides anything for them.
    const canSeeMoney = hasPermission(user.role, 'invoices', 'view');
    toggleBtn('stat-card-revenue', canSeeMoney);
    toggleBtn('stat-card-pending-invoices', canSeeMoney);
    toggleBtn('dashboard-invoice-status-card', canSeeMoney);
    const lowerGrid = document.getElementById('dashboard-lower-grid');
    if (lowerGrid) lowerGrid.style.gridTemplateColumns = canSeeMoney ? '2fr 1fr' : '1fr';

    // history.state.calaciView (see switchView()'s own pushState/
    // replaceState calls) already faithfully records whatever tab was
    // open — but until now nothing ever read it back on a fresh page
    // load, only on an in-app back/forward gesture. That meant a manager
    // going room-by-room through Bảng Tính Điện Nước / Cập Nhật Ảnh Số
    // Điện got dumped back to the default landing tab on EVERY reload —
    // and a mobile browser reloading a backgrounded tab after the
    // camera/file picker closes is exactly that, once per photo. Safe to
    // trust here specifically: switchView() re-validates the restored id
    // against this role's own permissions before actually showing it, so
    // a stale/foreign view id just falls back to firstView/admin-dashboard
    // on its own.
    const lastView = history.state && history.state.calaciView;
    if (lastView && document.getElementById(`view-${lastView}`)) {
      switchView(lastView);
    } else if (firstView) {
      switchView(firstView);
    } else {
      switchView('admin-dashboard');
    }
  } else if (user.role === 'investor') {
    adminNav.style.display = 'none';
    tenantNav.style.display = 'none';
    if (investorNav) investorNav.style.display = 'flex';
    if (salerNav) salerNav.style.display = 'none';
    if (houseBox) houseBox.style.display = 'flex';
    switchView('investor-dashboard');
  } else if (user.role === 'saler') {
    adminNav.style.display = 'none';
    tenantNav.style.display = 'none';
    if (investorNav) investorNav.style.display = 'none';
    if (salerNav) salerNav.style.display = 'flex';
    if (houseBox) houseBox.style.display = 'none';
    switchView('saler-rooms');
  } else {
    adminNav.style.display = 'none';
    tenantNav.style.display = 'flex';
    if (investorNav) investorNav.style.display = 'none';
    if (salerNav) salerNav.style.display = 'none';
    if (houseBox) houseBox.style.display = 'none';
    switchView('tenant-invoices');
  }
}

function renderHouseSelector() {
  let html = `<option value="all" ${state.currentHouseId === 'all' ? 'selected' : ''}>🏢 Tất Cả Tòa Nhà</option>`;
  state.houses.forEach(h => {
    html += `<option value="${h.id}" ${state.currentHouseId === h.id ? 'selected' : ''}>📍 ${h.name}</option>`;
  });
  // Two copies exist in the DOM at once — the navbar one (Khách thuê/Chủ
  // đầu tư) and the one inside trang Quản Lý Hóa Đơn (Admin/Quản lý). Only
  // one is ever visible per role, but keep both populated/in sync so
  // switching roles or views never shows a stale selector.
  ['select-house', 'invoices-select-house', 'spreadsheet-select-house', 'ir-select-house', 'meterphotos-select-house', 'users-select-house'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  });
  renderRoomSelector();
}

// Kỳ (billing period) options span 2 months back through 2 months forward
// from today's REAL date, regenerated fresh — this used to be a hardcoded
// "Tháng 08/2026, 07, 06" baked into the HTML in 5 different places, which
// would have silently gone stale (no current month in the list at all)
// the moment the real calendar month rolled past whatever was last
// hardcoded there. The +2-forward window is deliberate: some
// bookings/events only ever get set up up to 2 months ahead, and need a
// billing period to file against before that month actually arrives.
function renderMonthSelector() {
  const now = new Date();
  const months = [];
  for (let offset = -2; offset <= 2; offset++) {
    const d = new Date(now.getFullYear(), now.getMonth() + offset, 1);
    months.push(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`);
  }
  // (Same formula as currentMonthStr() above, used for state's initial
  // default — kept inline here since this loop already needs a Date per
  // offset anyway.)
  // Whatever's currently selected stays a real option even if it falls
  // outside that window (e.g. state carried over from a previous session
  // on a different date) — never silently switch the selected period out
  // from under the user.
  if (!months.includes(state.currentMonth)) months.push(state.currentMonth);
  months.sort();

  const html = months.map(monthStr => {
    const [y, m] = monthStr.split('-');
    return `<option value="${monthStr}" ${monthStr === state.currentMonth ? 'selected' : ''}>${t('month_select_prefix')} ${m}/${y}</option>`;
  }).join('');

  ['select-month', 'invoices-select-month', 'spreadsheet-select-month', 'ir-select-month', 'meterphotos-select-month'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  });
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

function handleHouseChange(sourceEl) {
  const value = sourceEl ? sourceEl.value : document.getElementById('select-house').value;
  state.currentHouseId = value;
  state.currentRoomId = 'all';
  ['select-house', 'invoices-select-house', 'spreadsheet-select-house', 'ir-select-house', 'meterphotos-select-house', 'users-select-house'].forEach(id => {
    const el = document.getElementById(id);
    if (el && el !== sourceEl) el.value = value;
  });
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
  const navVi = document.getElementById('btn-lang-vi');
  const navEn = document.getElementById('btn-lang-en');
  if (navVi) navVi.style.background = lang === 'vi' ? 'rgba(255, 255, 255, 0.4)' : 'transparent';
  if (navEn) navEn.style.background = lang === 'en' ? 'rgba(255, 255, 255, 0.4)' : 'transparent';

  const authVi = document.getElementById('auth-btn-lang-vi');
  const authEn = document.getElementById('auth-btn-lang-en');
  if (authVi) authVi.style.background = lang === 'vi' ? 'var(--cala-blue)' : 'transparent';
  if (authVi) authVi.style.color = lang === 'vi' ? '#ffffff' : 'var(--text-primary)';
  if (authEn) authEn.style.background = lang === 'en' ? 'var(--cala-blue)' : 'transparent';
  if (authEn) authEn.style.color = lang === 'en' ? '#ffffff' : 'var(--text-primary)';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N[lang] && I18N[lang][key]) {
      el.innerText = I18N[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (I18N[lang] && I18N[lang][key]) {
      el.setAttribute('title', I18N[lang][key]);
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (I18N[lang] && I18N[lang][key]) {
      el.setAttribute('placeholder', I18N[lang][key]);
    }
  });

  // Regenerated on every language switch too — the option text embeds
  // t('month_select_prefix') ("Tháng"/"Month"), which needs to update
  // along with everything else data-i18n already covers above.
  renderMonthSelector();

  // switchView() (below, when logged in) calls this too, but on a genuinely
  // fresh/logged-out visit that branch never runs — leaving the login
  // screen's own icons (e.g. the plane-takeoff logo) as un-rendered blank
  // <i> tags forever, since nothing else on this screen ever calls it.
  lucide.createIcons();

  if (state.currentUser) {
    switchView(state.currentView);
  }
}

async function fetchState(skipRender) {
  // skipRender: used only by the very first fetch after login/session-
  // restore (see handleLogin/restoreSession) — at that point
  // state.currentView is still its just-booted initial value, not
  // whatever tab the user actually had open. Rendering it here would (a)
  // flash the wrong view for an instant and, worse, (b) push that wrong
  // view onto history.state, clobbering the real last-open view
  // (history.state.calaciView, restored separately by setupUserRoleUI())
  // before it ever got a chance to be read back. Every other caller of
  // fetchState() (a save's resync, a manual refresh) still wants this —
  // it's specifically the pre-first-render call that doesn't.
  try {
    const res = await fetch(`${API_BASE}/data?month=${state.currentMonth}`);
    // The server now drops a session the moment the account behind it
    // stops holding up — an admin reset its password, locked it, or
    // deleted it (see validate_session() in auth.py). Before this, a 401
    // here fell through the `if (res.ok)` silently and the page just sat
    // there showing the data it had already loaded, so someone who'd been
    // locked out kept reading a stale screen and every save they tried
    // failed with a bare "không có quyền". Send them back to the login
    // screen with a reason instead.
    if (res.status === 401) {
      forceLoginScreen(t('toast_session_ended'));
      return;
    }
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
      state.permissions = data.permissions || state.permissions;
      state.roomDocuments = data.roomDocuments || state.roomDocuments;
      state.roomPhotos = data.roomPhotos || state.roomPhotos;
      state.salerCommissionPercent = data.salerCommissionPercent || 0;
      state.investorExpenses = data.investorExpenses || state.investorExpenses;
      state.investorReportOverrides = data.investorReportOverrides || state.investorReportOverrides;
      state.customIcons = data.customIcons || state.customIcons;
      if (data.siteSettings) applySiteSettings(data.siteSettings);
      renderHouseSelector();
      if (!skipRender) renderCurrentView();
    }
  } catch (err) {
    console.warn('API fetch warning:', err);
  }
}

function renderCurrentView() {
  switchView(state.currentView);
}

function switchView(viewId) {
  // Hiding a nav tab only stops someone from clicking IT — it does nothing
  // about the other buttons scattered around the app (Dashboard quick
  // actions, a page's own "mở trang khác" shortcuts, ...) that call
  // switchView() with a hardcoded view id directly. Checking it here too
  // means a manager without 'services' access, say, can't reach full
  // service/formula editing through one of those instead, even if that
  // particular button was never individually permission-gated.
  const currentRole = state.currentUser && state.currentUser.role;
  if (currentRole && ['superadmin', 'admin', 'manager'].includes(currentRole) && !canAccessAdminView(currentRole, viewId)) {
    showToast(t('toast_view_not_permitted'), 'error');
    // admin-dashboard is itself off-limits to manager (see
    // canAccessAdminView) — falling back to it here would just bounce a
    // blocked manager into another blocked page instead of a real one.
    viewId = currentRole === 'manager' ? 'admin-tickets' : 'admin-dashboard';
  }

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
      subtitleEl.innerText = dict.view_admin_dashboard_subtitle;
      renderAdminDashboard();
      break;
    case 'admin-services':
      titleEl.innerText = dict.nav_services;
      subtitleEl.innerText = dict.view_admin_services_subtitle;
      renderServicesConfig();
      break;
    case 'admin-spreadsheet':
      titleEl.innerText = dict.spreadsheet_title;
      subtitleEl.innerText = dict.spreadsheet_subtitle;
      renderSpreadsheet();
      break;
    case 'admin-invoices':
      titleEl.innerText = dict.invoices_title;
      subtitleEl.innerText = dict.view_admin_invoices_subtitle;
      renderAdminInvoices();
      break;
    case 'admin-investor-report':
      titleEl.innerText = dict.view_admin_investor_report_title;
      subtitleEl.innerText = dict.view_admin_investor_report_subtitle;
      renderInvestorReport();
      break;
    case 'admin-houses':
      titleEl.innerText = dict.view_admin_houses_title;
      subtitleEl.innerText = dict.view_admin_houses_subtitle;
      renderHousesManagement();
      break;
    case 'admin-rooms':
      titleEl.innerText = dict.view_admin_rooms_title;
      subtitleEl.innerText = dict.view_admin_rooms_subtitle;
      renderRoomsManagement();
      break;
    case 'admin-meter-photos':
      titleEl.innerText = dict.view_admin_meter_photos_title;
      subtitleEl.innerText = dict.view_admin_meter_photos_subtitle;
      renderManagerMeterPhotos();
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
    case 'admin-permissions':
      titleEl.innerText = dict.view_admin_permissions_title;
      subtitleEl.innerText = dict.view_admin_permissions_subtitle;
      renderAdminPermissions();
      break;
    case 'admin-data-retention':
      titleEl.innerText = dict.retention_title;
      subtitleEl.innerText = dict.retention_desc;
      renderDataRetentionView();
      break;
    case 'investor-dashboard':
      titleEl.innerText = dict.nav_investor_dashboard;
      subtitleEl.innerText = dict.view_investor_dashboard_subtitle;
      renderInvestorDashboard();
      break;
    case 'saler-rooms':
      titleEl.innerText = dict.nav_saler_rooms;
      subtitleEl.innerText = dict.saler_rooms_subtitle;
      renderSalerRooms();
      break;
    case 'tenant-invoices':
      titleEl.innerText = dict.my_invoice_title;
      subtitleEl.innerText = dict.my_invoice_subtitle;
      renderTenantInvoiceView();
      break;
    case 'tenant-contract':
      titleEl.innerText = dict.view_tenant_contract_title;
      subtitleEl.innerText = dict.view_tenant_contract_subtitle;
      renderTenantContractView();
      break;
    case 'tenant-reports':
      titleEl.innerText = dict.form_ticket_title;
      subtitleEl.innerText = dict.view_tenant_reports_subtitle;
      renderTenantReportsView();
      break;
  }

  updateBadges();
  // Every render*() case above already scopes its own icon rebuild to just
  // what it touched (see renderIcons()) — this used to be an unscoped
  // lucide.createIcons() instead, which re-tore-down and rebuilt every
  // icon on the ENTIRE page (sidebar nav, navbar, ...) on every single
  // menu click, on top of whatever the view's own render already did. That
  // was real, felt jank on every navigation, not just first load. Scoped
  // to just the panel that changed — still covers view-admin-dashboard's
  // own static icons (never touched by a render*() call) the first time
  // it's visited; nothing here ever un-converts an already-rendered <svg>
  // back to a plain <i>, so it doesn't need re-touching after that.
  renderIcons(targetPanel);

  // Everything in this app lives at one URL and switches views purely in
  // JS state, so without this, the browser's own history has nothing to
  // do with in-app navigation at all — a phone's edge swipe-back gesture
  // (or the hardware/gesture back button) has no in-app "previous page" to
  // return to, and immediately leaves the site for whatever page was open
  // before it. Recording each view as its own history entry gives that
  // gesture somewhere to go first: back through Tổng Quan → Hóa Đơn → ...
  // the same way it would on a normal multi-page site, only leaving
  // calaci.io.vn once that stack is exhausted. Skipped entirely when this
  // call came FROM a popstate event (would just push the same entry right
  // back) and when re-selecting the view already on top (a data refresh
  // via renderCurrentView(), or tapping the already-active nav item).
  if (!_isPopStateNav && !(history.state && history.state.calaciView === viewId)) {
    const method = (history.state && history.state.calaciView) ? 'pushState' : 'replaceState';
    history[method]({ calaciView: viewId }, '', location.pathname + location.search);
  }
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

// houseIds (what the scope picker actually writes) is the source of truth
// and is checked FIRST — houseId is only a legacy single-value mirror that
// saveService() collapses to 'all' whenever more than one building is
// picked, so testing it first made a service scoped to 2 of 4 buildings
// show up (and get billed) under all 4. Mirrors service_matches_house()
// in services.py exactly.
function serviceMatchesHouse(service, targetHouseId) {
  if (!targetHouseId || targetHouseId === 'all') return true;
  if (Array.isArray(service.houseIds) && service.houseIds.length) {
    return service.houseIds.includes('all') || service.houseIds.includes(targetHouseId);
  }
  if (!service.houseId || service.houseId === 'all') return true;
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
  const price = service.price || 0;
  const unit = service.unit || '';

  if (service.calcType === 'formula') {
    return 0; // Calculated via readings meter
  }
  if (unit === 'Theo đầu người') {
    // A dorm room's per-person services always multiply by headcount; a
    // single room only does when this service opted in via
    // applyHeadcountSingle (Cấu Hình Dịch Vụ) — its headcount is
    // otherwise just informational. Mirrors
    // calculate_room_services_total() in services.py.
    const headcount = (room.roomType === 'dorm' || service.applyHeadcountSingle) ? (room.headcount || 1) : 1;
    return price * headcount;
  }
  if (unit === 'Theo xe / tháng') {
    // A KTX room's occupants can be split across more than one parking
    // service (see _apply_dorm_vehicle_counts in services.py) — use THIS
    // service's own count when that breakdown exists; a single room (no
    // per-service breakdown) falls back to its one flat vehicleCount.
    const vehicleCount = room.vehicleCountByService ? (room.vehicleCountByService[service.id] || 0) : (room.vehicleCount || 0);
    return price * vehicleCount;
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
      const svcVehicleCount = room.vehicleCountByService ? (room.vehicleCountByService[s.id] || 0) : (room.vehicleCount || 0);
      const parkingUnit = unit === 'Theo xe / tháng' ? `${svcVehicleCount} xe x ${formatMoney(s.price)}đ` : unit;
      items.push({ id: s.id, name, symbol, price: s.price, unit: parkingUnit, total: cost, isParking: true });
    } else {
      serviceTotal += cost;
      serviceCount++;
      const perPersonCount = (room.roomType === 'dorm' || s.applyHeadcountSingle) ? (room.headcount || 1) : 1;
      items.push({ id: s.id, name, symbol, price: s.price, unit: unit === 'Theo đầu người' ? `${perPersonCount} ${t('formula_per_person_label')} x ${formatMoney(s.price)}đ` : unit, total: cost, isParking: false });
    }
  });

  return { serviceTotal, parkingTotal, serviceCount, items };
}

// Renders a scope badge (which houses/rooms a service applies to) for the
// Cấu Hình Dịch Vụ list — full names up to 3, otherwise a plain count with
// the full list as a hover tooltip, so a service scoped to a dozen+ rooms
// doesn't blow the row out into an unreadable wall of names. Full detail
// is always one click away in the edit modal's scope tree regardless.
function scopeSummaryBadge({ isAll, allLabel, allIcon, partIcon, names, unitLabel }) {
  if (isAll) {
    return `<span class="badge badge-paid" style="font-size:0.65rem;">${allIcon} ${allLabel}</span>`;
  }
  const label = names.length === 0 ? unitLabel
    : names.length <= 3 ? names.join(', ')
    : `${names.length} ${unitLabel}`;
  const titleAttr = names.length > 3 ? ` title="${names.join(', ').replace(/"/g, '&quot;')}"` : '';
  return `<span class="badge badge-resolved" style="font-size:0.65rem;"${titleAttr}>${partIcon} ${label}</span>`;
}

function renderServicesConfig() {
  const houseLabel = document.getElementById('current-house-name-label');
  const currentHouse = state.houses.find(h => h.id === state.currentHouseId);
  if (houseLabel) {
    houseLabel.innerText = currentHouse ? currentHouse.name : t('all_houses_label');
  }

  const sBody = document.getElementById('services-table-body');
  sBody.innerHTML = '';

  const activeServices = getFilteredServices();

  if (activeServices.length === 0) {
    // "0 dịch vụ" reads as "mất hết dữ liệu" if the admin doesn't
    // register that the Tòa Nhà dropdown up top is filtering this table
    // too — easy to miss, especially switching houses while mid-task on
    // a different page. Distinguish "genuinely nothing configured
    // anywhere yet" from "you're just looking at one house that happens
    // to have none of its own" — the latter gets a direct way out
    // instead of the same generic empty state either way.
    if (state.services.length > 0 && state.currentHouseId !== 'all') {
      sBody.innerHTML = `
        <tr><td colspan="4" style="text-align:center; padding:1.5rem; color:var(--text-secondary);">
          ${tFmt('services_empty_for_house', { house: currentHouse ? currentHouse.name : state.currentHouseId })}<br>
          <button type="button" class="btn btn-secondary btn-sm" style="margin-top:0.6rem;" onclick="document.getElementById('select-house').value='all'; handleHouseChange(null);">${t('btn_show_all_houses')}</button>
        </td></tr>
      `;
    } else {
      sBody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:1.5rem; color:var(--text-secondary);">${t('services_empty_state')}</td></tr>`;
    }
  } else {
    activeServices.forEach((s, idx) => {
      // Full names for 3 or fewer, otherwise just a count (with the full
      // list still available as a hover tooltip) — spelling out every
      // one of 10+ room names inline made this list unreadable, and the
      // full detail is one click away anyway (editService() shows it in
      // full in the scope tree). See scopeSummaryBadge() below.
      const houseBadge = scopeSummaryBadge({
        isAll: !s.houseId || s.houseId === 'all' || (Array.isArray(s.houseIds) && s.houseIds.includes('all')),
        allLabel: t('all_houses_label'), allIcon: '🌐', partIcon: '📍',
        names: Array.isArray(s.houseIds) ? state.houses.filter(h => s.houseIds.includes(h.id)).map(h => h.name)
          : (state.houses.find(h => h.id === s.houseId) ? [state.houses.find(h => h.id === s.houseId).name] : [s.houseId]),
        unitLabel: t('houses_unit_label')
      });

      const roomBadge = scopeSummaryBadge({
        isAll: !s.roomIds || (Array.isArray(s.roomIds) && s.roomIds.includes('all')),
        allLabel: t('all_rooms_label'), allIcon: '🚪', partIcon: '🔑',
        names: Array.isArray(s.roomIds) ? state.rooms.filter(r => s.roomIds.includes(r.id)).map(r => r.name.replace('Phòng ', 'P.')) : [],
        unitLabel: t('rooms_unit_label')
      });

      let calcTypeHtml = '';
      let ruleHtml = '';

      if (s.calcType === 'formula') {
        calcTypeHtml = `
          <span class="badge badge-pending">🧮 ${t('calc_type_formula')}</span><br>
          <strong style="color:var(--cala-blue); font-size:0.85rem;">x = ${s.customFormula || '?'}</strong>
        `;
        ruleHtml = `<span class="badge badge-resolved" style="background:#e6f4fe; color:#0178d2;">${t('rule_creates_reading_columns')}</span>`;
      } else {
        calcTypeHtml = `
          <span class="badge badge-paid">💰 ${t('calc_type_fixed')}</span><br>
          <strong style="color:var(--cala-blue); font-size:0.95rem;">${formatMoney(s.price)} đ</strong>
        `;
        ruleHtml = `<span class="badge badge-paid">${t('rule_creates_amount_column')}</span>`;
      }

      const iconSymbol = s.symbol || '📦';

      const canEditThisService = hasPermission(state.currentUser.role, 'services', 'edit');
      const tr = document.createElement('tr');
      tr.className = 'drag-reorder-row';
      if (canEditThisService) {
        tr.draggable = true;
        tr.addEventListener('dragstart', () => dragRowStart('services', s.id));
        tr.addEventListener('dragover', dragRowOver);
        tr.addEventListener('dragleave', dragRowLeave);
        tr.addEventListener('drop', (event) => dragRowDrop(event, 'services', s.id));
        tr.addEventListener('dragend', dragRowEnd);
      }
      tr.innerHTML = `
        <td>
          <div style="display:flex; align-items:center; gap:0.6rem;">
            ${canEditThisService ? `<i data-lucide="grip-vertical" class="drag-handle-grip" title="${t('title_drag_to_reorder')}"></i>` : ''}
            <div style="width:36px; height:36px; border-radius:50%; background:var(--cala-blue-light); color:var(--cala-blue); display:flex; align-items:center; justify-content:center; font-size:1.1rem; font-weight:bold; flex-shrink:0;">
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
          ${hasPermission(state.currentUser.role, 'services', 'edit') ? `
          <span style="display:inline-flex; flex-direction:column; vertical-align:middle; margin-right:0.3rem;">
            <button type="button" class="btn btn-secondary btn-sm" style="padding:1px 4px;" title="${t('title_move_up')}" ${idx === 0 ? 'disabled' : ''} onclick="moveService('${s.id}', -1)"><i data-lucide="chevron-up" style="width:12px;height:12px;pointer-events:none;"></i></button>
            <button type="button" class="btn btn-secondary btn-sm" style="padding:1px 4px;" title="${t('title_move_down')}" ${idx === activeServices.length - 1 ? 'disabled' : ''} onclick="moveService('${s.id}', 1)"><i data-lucide="chevron-down" style="width:12px;height:12px;pointer-events:none;"></i></button>
          </span>` : ''}
          ${hasPermission(state.currentUser.role, 'services', 'edit') ? `<button class="btn btn-secondary btn-sm" onclick="editService('${s.id}')" title="${t('title_edit_service_icon')}"><i data-lucide="edit"></i> ${t('btn_edit')}</button>` : ''}
          ${canDelete() ? `<button class="btn btn-secondary btn-sm" onclick="deleteServiceApi('${s.id}')" style="color: var(--cala-red);" title="${t('btn_delete')}"><i data-lucide="trash-2"></i></button>` : ''}
        </td>
      `;
      sBody.appendChild(tr);
    });
  }

  renderIcons(sBody);
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
        <span style="font-size:0.7rem; color:var(--text-secondary); margin-top:2px;">${t('icon_label_' + item.icon)}</span>
      </div>
    `;
  });

  // Admin-added icons on top of the fixed built-in set above — editable/
  // deletable in place (built-ins stay fixed since other default services
  // already reference their icon ids and translated labels).
  (state.customIcons || []).forEach(item => {
    const isSelected = item.id === selectedIcon;
    html += `
      <div class="icon-picker-option ${isSelected ? 'selected' : ''}" style="position:relative;" onclick="selectServiceIcon('${item.id}', '${item.symbol}')">
        <div style="position:absolute; top:3px; right:3px; display:flex; gap:3px;">
          <button type="button" class="icon-picker-mini-btn" title="${t('btn_edit')}" onclick="event.stopPropagation(); openEditCustomIconPrompt('${item.id}')"><i data-lucide="pencil"></i></button>
        </div>
        <span style="font-size:1.3rem;">${item.symbol}</span>
        <span style="font-size:0.7rem; color:var(--text-secondary); margin-top:2px;">${item.label}</span>
      </div>
    `;
  });

  html += `
    <div class="icon-picker-option icon-picker-add" onclick="openAddCustomIconPrompt()">
      <span style="font-size:1.3rem;">+</span>
      <span style="font-size:0.7rem; margin-top:2px;">${t('btn_add_custom_icon')}</span>
    </div>
  `;

  container.innerHTML = html;
  renderIcons(container);
}

function selectServiceIcon(iconName, symbolStr) {
  document.getElementById('service-icon').value = iconName;
  document.getElementById('service-symbol').value = symbolStr;
  renderIconPicker(iconName);
}

function openAddCustomIconPrompt() {
  document.getElementById('custom-icon-id').value = '';
  document.getElementById('custom-icon-symbol').value = '';
  document.getElementById('custom-icon-label').value = '';
  document.getElementById('modal-custom-icon-title').querySelector('span').innerText = t('modal_add_icon_title');
  document.getElementById('btn-delete-custom-icon').style.display = 'none';
  document.getElementById('modal-custom-icon').classList.add('active');
}

function openEditCustomIconPrompt(iconId) {
  const item = (state.customIcons || []).find(i => i.id === iconId);
  if (!item) return;
  document.getElementById('custom-icon-id').value = item.id;
  document.getElementById('custom-icon-symbol').value = item.symbol;
  document.getElementById('custom-icon-label').value = item.label;
  document.getElementById('modal-custom-icon-title').querySelector('span').innerText = t('modal_edit_icon_title');
  document.getElementById('btn-delete-custom-icon').style.display = 'inline-flex';
  document.getElementById('modal-custom-icon').classList.add('active');
}

async function persistCustomIcons() {
  return !!(await postAndVerify(`${API_BASE}/custom-icons/save`, { icons: state.customIcons }));
}

async function saveCustomIcon(event) {
  event.preventDefault();
  const id = document.getElementById('custom-icon-id').value;
  const symbol = document.getElementById('custom-icon-symbol').value.trim();
  const label = document.getElementById('custom-icon-label').value.trim();
  if (!symbol || !label) return;

  if (id) {
    const item = state.customIcons.find(i => i.id === id);
    if (item) { item.symbol = symbol; item.label = label; }
  } else {
    const newItem = { id: genId('icon_'), symbol, label };
    state.customIcons.push(newItem);
    selectServiceIcon(newItem.id, newItem.symbol);
  }

  const ok = await persistCustomIcons();
  if (!ok) { renderIconPicker(document.getElementById('service-icon').value); return; }
  renderIconPicker(document.getElementById('service-icon').value);
  closeModal('modal-custom-icon');
  showToast(t('toast_icon_saved'), 'success');
}

async function deleteCustomIcon() {
  const id = document.getElementById('custom-icon-id').value;
  if (!id) return;
  if (!confirm(t('confirm_delete_icon'))) return;

  state.customIcons = state.customIcons.filter(i => i.id !== id);
  // The service currently being edited might have this icon selected —
  // fall back to the default so the form isn't left pointing at a symbol
  // that no longer exists in the picker.
  if (document.getElementById('service-icon').value === id) {
    selectServiceIcon('package', '📦');
  }
  const ok = await persistCustomIcons();
  if (!ok) { renderIconPicker(document.getElementById('service-icon').value); return; }
  renderIconPicker(document.getElementById('service-icon').value);
  closeModal('modal-custom-icon');
  showToast(t('toast_icon_deleted'), 'success');
}

function openAddHouseModal() {
  document.getElementById('house-id').value = '';
  document.getElementById('house-name').value = '';
  document.getElementById('house-address').value = '';
  document.getElementById('house-desc').value = '';
  document.getElementById('modal-house-title').textContent = t('modal_add_house_title');
  document.getElementById('modal-add-house').classList.add('active');
}

function openEditHouseModal(houseId) {
  const house = state.houses.find(h => h.id === (houseId || state.currentHouseId));
  if (!house) {
    showToast(t('toast_no_house_selected'), 'error');
    return;
  }
  document.getElementById('house-id').value = house.id;
  document.getElementById('house-name').value = house.name || '';
  document.getElementById('house-address').value = house.address || '';
  document.getElementById('house-desc').value = house.description || '';
  document.getElementById('modal-house-title').textContent = t('modal_edit_house_title');
  document.getElementById('modal-add-house').classList.add('active');
}

async function saveHouse(event) {
  event.preventDefault();
  const id = document.getElementById('house-id').value;
  const isEdit = !!id;
  const name = document.getElementById('house-name').value.trim();
  const address = document.getElementById('house-address').value.trim();
  const description = document.getElementById('house-desc').value.trim();

  const hObj = { id: id || genId('house_'), name, address, description };

  // Applied to local state only after the server actually confirms the
  // write (see postAndVerify) — a manager without 'houses':'edit' used to
  // see this succeed regardless, since the old code updated state.houses
  // and showed "saved!" before even checking the response.
  const data = await postAndVerify(`${API_BASE}/houses/save`, hObj);
  if (!data) return;

  const idx = state.houses.findIndex(h => h.id === hObj.id);
  if (idx >= 0) state.houses[idx] = hObj;
  else state.houses.push(hObj);

  state.currentHouseId = hObj.id;

  if (isEdit) {
    showToast(`${t('toast_house_updated_prefix')}"${name}"${t('toast_house_updated_suffix')}`, 'success');
  } else {
    showToast(`${t('toast_house_added_prefix')}"${name}"${t('toast_house_added_suffix')}`, 'success');
  }
  closeModal('modal-add-house');
  renderHouseSelector();
  renderHousesManagement();
  renderCurrentView();
}

function renderHousesManagement() {
  const container = document.getElementById('houses-management-container');
  if (!container) return;

  if (state.houses.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding:3rem; color:var(--text-secondary);">${t('houses_empty_state')}</div>`;
    return;
  }

  const canEditHouses = hasPermission(state.currentUser.role, 'houses', 'edit');
  container.innerHTML = `
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem;">
      ${state.houses.map((h, idx) => {
        const roomCount = state.rooms.filter(r => r.houseId === h.id).length;
        return `
          <div class="cala-card drag-reorder-row" style="padding: 1.1rem 1.25rem;" ${canEditHouses ? `draggable="true" data-drag-id="${h.id}" ondragstart="dragRowStart('houses','${h.id}')" ondragover="dragRowOver(event)" ondragleave="dragRowLeave(event)" ondrop="dragRowDrop(event,'houses','${h.id}')" ondragend="dragRowEnd(event)"` : ''}>
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.6rem;">
              <div style="display:flex; align-items:flex-start; gap:0.5rem; min-width:0;">
                ${canEditHouses ? `
                <i data-lucide="grip-vertical" class="drag-handle-grip" title="${t('title_drag_to_reorder')}"></i>
                <div style="display:flex; flex-direction:column; gap:1px; flex-shrink:0; margin-top:2px;">
                  <button type="button" class="btn btn-secondary btn-sm" style="padding:1px 4px;" title="${t('title_move_up')}" ${idx === 0 ? 'disabled' : ''} onclick="moveHouse('${h.id}', -1)"><i data-lucide="chevron-up" style="width:12px;height:12px;pointer-events:none;"></i></button>
                  <button type="button" class="btn btn-secondary btn-sm" style="padding:1px 4px;" title="${t('title_move_down')}" ${idx === state.houses.length - 1 ? 'disabled' : ''} onclick="moveHouse('${h.id}', 1)"><i data-lucide="chevron-down" style="width:12px;height:12px;pointer-events:none;"></i></button>
                </div>
                ` : ''}
                <div style="min-width:0;">
                  <div style="font-weight:800; font-size:1rem;">${h.name}</div>
                  <div style="font-size:0.8rem; color:var(--text-secondary); margin-top:2px;">${t('lbl_house_address_short')} ${h.address || '—'}</div>
                </div>
              </div>
              <span class="badge badge-resolved" style="font-size:0.7rem; flex-shrink:0;">${roomCount} ${t('rooms_unit_label')}</span>
            </div>
            ${h.description ? `<div style="font-size:0.82rem; color:var(--text-secondary); margin-bottom:0.75rem;">${h.description}</div>` : ''}
            <div style="display:flex; gap:0.5rem; margin-top:0.75rem;">
              ${hasPermission(state.currentUser.role, 'houses', 'edit') ? `<button class="btn btn-blue btn-sm" style="flex:1; justify-content:center;" onclick="openEditHouseModal('${h.id}')">
                <i data-lucide="edit-2"></i> ${t('btn_edit')}
              </button>` : ''}
              ${canDelete() ? `<button class="btn btn-secondary btn-sm" style="color:var(--color-danger); border-color:var(--color-danger);" onclick="deleteHouseConfirm('${h.id}')">
                <i data-lucide="trash-2"></i>
              </button>` : ''}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
  renderIcons(container);
}

// Swaps this house with its neighbor and persists the whole new order —
// same pattern as moveRoom()/reorderRoomsApi() below, see those for why a
// flat sort_order alone is enough.
async function moveHouse(houseId, direction) {
  const idx = state.houses.findIndex(h => h.id === houseId);
  const swapIdx = idx + direction;
  if (idx < 0 || swapIdx < 0 || swapIdx >= state.houses.length) return;
  [state.houses[idx], state.houses[swapIdx]] = [state.houses[swapIdx], state.houses[idx]];

  renderHousesManagement();
  renderHouseSelector();
  const data = await postAndVerify(`${API_BASE}/houses/reorder`, { houseIds: state.houses.map(h => h.id) });
  if (!data) return;
}

/* =====================================================================
   GENERIC DRAG-TO-REORDER — native HTML5 drag/drop, shared by Quản Lý
   Tòa Nhà, Quản Lý Phòng and Cấu Hình Dịch Vụ. Faster than repeated
   arrow-button clicks for a long list; the arrow buttons stay too since
   native HTML5 drag doesn't work reliably on touch/mobile.
===================================================================== */
let _dragReorderSource = null; // { kind, id }

function dragRowStart(kind, id) {
  _dragReorderSource = { kind, id };
}

function dragRowOver(event) {
  event.preventDefault();
  const row = event.currentTarget;
  if (row) row.classList.add('drag-reorder-over');
}

function dragRowLeave(event) {
  const row = event.currentTarget;
  if (row) row.classList.remove('drag-reorder-over');
}

function dragRowEnd(event) {
  document.querySelectorAll('.drag-reorder-over').forEach(el => el.classList.remove('drag-reorder-over'));
  // dragRowDrop() already clears _dragReorderSource itself right after
  // reading it — NOT also clearing it here matters because dragend (this
  // handler, fired on the drag SOURCE) isn't reliably guaranteed to run
  // strictly after drop (fired on the TARGET) finishes across every
  // browser/automation environment; clearing it here too raced drop's own
  // read of it to null in some cases, silently turning every drop into a
  // no-op.
}

function dragRowDrop(event, kind, targetId, extra) {
  event.preventDefault();
  const row = event.currentTarget;
  if (row) row.classList.remove('drag-reorder-over');
  const source = _dragReorderSource;
  _dragReorderSource = null;
  if (!source || source.kind !== kind || source.id === targetId) return;
  if (kind === 'houses') reorderHousesByDrag(source.id, targetId);
  else if (kind === 'services') reorderServicesByDrag(source.id, targetId);
  else if (kind === 'rooms') reorderRoomsByDrag(source.id, targetId);
}

// Moves `fromId` next to `toId`, within the same array — used by all
// three reorderXByDrag() functions below. Direction matters: dropping A
// onto the very next item B and always inserting "at B's position" put A
// right back where it started (removing A shifts B left by one, so
// re-inserting A there lands on A's own old spot — a silent no-op for
// adjacent drags specifically). Inserting AFTER the target when moving
// down the list (and before it when moving up) matches the drag actually
// landing where the user dropped it either way.
function arrayMoveBeforeTarget(arr, fromId, toId, idKey = 'id') {
  const fromIdx = arr.findIndex(x => x[idKey] === fromId);
  const toIdxOriginal = arr.findIndex(x => x[idKey] === toId);
  if (fromIdx < 0 || toIdxOriginal < 0 || fromIdx === toIdxOriginal) return false;
  const movingDown = fromIdx < toIdxOriginal;
  const [item] = arr.splice(fromIdx, 1);
  let insertIdx = arr.findIndex(x => x[idKey] === toId);
  if (movingDown) insertIdx += 1;
  arr.splice(insertIdx, 0, item);
  return true;
}

async function reorderHousesByDrag(fromId, toId) {
  if (!arrayMoveBeforeTarget(state.houses, fromId, toId)) return;
  renderHousesManagement();
  renderHouseSelector();
  const data = await postAndVerify(`${API_BASE}/houses/reorder`, { houseIds: state.houses.map(h => h.id) });
  if (!data) return;
}

// Same idea as moveHouse() above / moveRoom() below, but swaps within
// whatever's currently ON SCREEN (getFilteredServices() — the Tòa Nhà
// filter can narrow this to a subset) rather than the whole list, then
// applies that same swap to the two services' real positions in
// state.services — so e.g. reordering while filtered to one house still
// persists a sensible position relative to everything else. Lets two
// services (say, both "tính tiền điện") get moved next to each other for
// side-by-side comparison, instead of a fixed, unchangeable list order.
async function moveService(serviceId, direction) {
  const activeServices = getFilteredServices();
  const idx = activeServices.findIndex(s => s.id === serviceId);
  const swapIdx = idx + direction;
  if (idx < 0 || swapIdx < 0 || swapIdx >= activeServices.length) return;

  const realIdxA = state.services.findIndex(s => s.id === activeServices[idx].id);
  const realIdxB = state.services.findIndex(s => s.id === activeServices[swapIdx].id);
  [state.services[realIdxA], state.services[realIdxB]] = [state.services[realIdxB], state.services[realIdxA]];

  renderServicesConfig();
  if (state.currentView === 'admin-spreadsheet') renderSpreadsheet();
  const data = await postAndVerify(`${API_BASE}/services/reorder`, { serviceIds: state.services.map(s => s.id) });
  if (!data) return;
}

async function reorderServicesByDrag(fromId, toId) {
  if (!arrayMoveBeforeTarget(state.services, fromId, toId)) return;
  renderServicesConfig();
  if (state.currentView === 'admin-spreadsheet') renderSpreadsheet();
  const data = await postAndVerify(`${API_BASE}/services/reorder`, { serviceIds: state.services.map(s => s.id) });
  if (!data) return;
}

async function deleteHouseConfirm(houseId) {
  if (!confirm(t('confirm_delete_house'))) return;

  // Deleting a house is blocked server-side while it still has rooms or an
  // investor assigned to it (either would silently go orphaned otherwise —
  // see delete_house() in services.py) — wait for that answer instead of
  // removing it from view optimistically, or a blocked delete would still
  // make the house vanish from this screen until the next refresh.
  try {
    const res = await fetch(`${API_BASE}/houses/delete`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: houseId })
    });
    const data = await res.json();
    if (!data.success) {
      showToast(data.error || t('toast_server_connection_error'), 'error');
      return;
    }
  } catch (err) {
    showToast(t('toast_server_connection_error'), 'error');
    return;
  }

  state.houses = state.houses.filter(h => h.id !== houseId);
  if (state.currentHouseId === houseId) state.currentHouseId = 'all';

  showToast(t('toast_house_deleted'), 'success');
  renderHouseSelector();
  renderHousesManagement();
  renderCurrentView();
}

/* RENDER HIERARCHICAL HOUSE & EXPANDABLE ROOM SCOPE TREE IN SERVICE MODAL */
function renderServiceScopeTree(selectedHouseIds = ['all'], selectedRoomIds = ['all']) {
  const container = document.getElementById('service-scope-container');
  if (!container) return;

  const isAllMasterChecked = (selectedHouseIds.includes('all') || selectedHouseIds.length === state.houses.length) && 
                             (selectedRoomIds.includes('all') || selectedRoomIds.length === state.rooms.length);

  let html = `
    <div style="border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; margin-bottom: 0.25rem; flex-shrink: 0;">
      <label class="checkbox-item" style="margin: 0; padding: 0;">
        <input type="checkbox" id="chk-scope-all" value="all" ${isAllMasterChecked ? 'checked' : ''} onchange="toggleAllScopeMaster(this)">
        <span style="font-weight: 800; color: var(--cala-blue);">🌐 ${t('scope_all_houses_rooms')}</span>
      </label>
    </div>
  `;

  state.houses.forEach(h => {
    const houseRooms = state.rooms.filter(r => (r.houseId === h.id || r.house_id === h.id));
    const houseHasRooms = houseRooms.length > 0;
    const isHouseExplicit = isAllMasterChecked || selectedHouseIds.includes('all') || selectedHouseIds.includes(h.id);
    const checkedRoomCount = houseRooms.filter(r => isAllMasterChecked || selectedRoomIds.includes('all') || selectedRoomIds.includes(r.id)).length;
    // A building with zero rooms trivially satisfies "checkedRoomCount ===
    // houseRooms.length" (0 === 0) — without the houseHasRooms guard this
    // showed every empty building as fully ticked any time the scope was
    // house-wide but not literally the master "🌐 Tất Cả" (e.g. a service
    // scoped to specific rooms in *other* buildings), even though nothing
    // was ever actually selected there. Only the true "applies to
    // everything, including rooms added later" master checkbox should
    // check an empty building.
    const isHouseAllChecked = isAllMasterChecked || (isHouseExplicit && houseHasRooms && (selectedRoomIds.includes('all') || checkedRoomCount === houseRooms.length));
    const disableHouseChk = !houseHasRooms && !isAllMasterChecked;

    html += `
      <div style="border: 1px solid var(--border-color); border-radius: var(--radius-sm); background: var(--bg-surface); overflow: hidden; flex-shrink: 0; ${disableHouseChk ? 'opacity: 0.55;' : ''}">
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.5rem 0.75rem; background: var(--bg-surface);">
          <label class="checkbox-item" style="margin: 0; padding: 0;" title="${disableHouseChk ? t('house_no_rooms_label') : ''}">
            <input type="checkbox" class="chk-house-node" data-house="${h.id}" value="${h.id}" ${isHouseAllChecked ? 'checked' : ''} ${disableHouseChk ? 'disabled' : ''} onchange="toggleHouseNodeCheckbox('${h.id}', this)">
            <span style="font-weight: 700;">📍 ${h.name}</span>
          </label>

          <button type="button" class="btn btn-secondary btn-sm" onclick="toggleHouseRoomSublist('${h.id}')" ${houseHasRooms ? '' : 'disabled'} style="padding: 3px 10px; font-size: 0.75rem; border-radius: var(--radius-sm);">
            <span id="badge-count-${h.id}">${houseHasRooms ? `${isHouseAllChecked ? houseRooms.length : checkedRoomCount}/${houseRooms.length} ${t('rooms_unit_label')}` : t('house_no_rooms_label')}</span>
            ${houseHasRooms ? `<i data-lucide="chevron-down" id="chevron-${h.id}" style="width:14px; height:14px; margin-left:4px;"></i>` : ''}
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
  renderIcons(container);
}

function toggleAllScopeMaster(masterChk) {
  const isChecked = masterChk.checked;
  // Re-rendering (rather than patching each checkbox/badge/disabled state
  // by hand) keeps this in sync with renderServiceScopeTree's own rules —
  // in particular, an empty building's checkbox is disabled outside of
  // this master-all state, and a hand-patch here would leave it looking
  // disabled even while freshly checked.
  renderServiceScopeTree(isChecked ? ['all'] : [], isChecked ? ['all'] : []);
}

function toggleHouseNodeCheckbox(houseId, houseChk) {
  const isChecked = houseChk.checked;
  document.querySelectorAll(`.chk-room-of-${houseId}`).forEach(c => c.checked = isChecked);

  const houseRooms = state.rooms.filter(r => (r.houseId === houseId || r.house_id === houseId));
  const badge = document.getElementById(`badge-count-${houseId}`);
  if (badge) badge.innerText = isChecked ? `${houseRooms.length}/${houseRooms.length} ${t('rooms_unit_label')}` : `0/${houseRooms.length} ${t('rooms_unit_label')}`;

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
  if (badge) badge.innerText = `${checkedRooms}/${roomNodes.length} ${t('rooms_unit_label')}`;

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
    renderIcons(chevron.parentElement);
  }

  if (isHidden) {
    // #service-scope-container is a short, internally-scrolling box — a
    // sublist expanding further down can land partly or fully below the
    // visible area with no obvious scrollbar hinting it's there.
    // scrollIntoView({block:'nearest'}) turned out unreliable here (it
    // often decided no scroll was needed even when the sublist's bottom
    // edge was genuinely clipped), so scroll by the exact clipped amount
    // instead. requestAnimationFrame waits for the display:flex change
    // above to actually reflow before measuring positions.
    requestAnimationFrame(() => {
      const container = document.getElementById('service-scope-container');
      if (!container) return;
      const containerRect = container.getBoundingClientRect();
      const sublistRect = sublist.getBoundingClientRect();
      const clippedBy = sublistRect.bottom - containerRect.bottom;
      if (clippedBy > 0) {
        container.scrollBy({ top: clippedBy + 8, behavior: 'smooth' });
      }
    });
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

  const roomIds = (checkedRooms.length === state.rooms.length || checkedRooms.length === 0) ? ['all'] : checkedRooms;

  // A house node only ticks itself once EVERY one of its rooms is ticked
  // (see updateRoomNodeCheckbox), so picking a handful of rooms inside one
  // building left checkedHouses empty — which the "|| length === 0" rule
  // below then recorded as houseIds: ['all'], i.e. "every building". The
  // rooms themselves still narrowed the billing correctly, but the service
  // showed up under every building in Cấu Hình Dịch Vụ. When specific
  // rooms are picked, derive the buildings from those rooms instead of
  // falling through to 'all'.
  let houseIds;
  if (roomIds.includes('all')) {
    houseIds = (checkedHouses.length === state.houses.length || checkedHouses.length === 0) ? ['all'] : checkedHouses;
  } else {
    const derived = Array.from(new Set(
      checkedRooms
        .map(roomId => (state.rooms.find(r => r.id === roomId) || {}).houseId)
        .filter(Boolean)
    ));
    // Rooms spanning every building is the same thing as "all buildings" —
    // recording it that way keeps a building added LATER covered, matching
    // what the master checkbox means everywhere else.
    houseIds = (derived.length === 0 || derived.length === state.houses.length) ? ['all'] : derived;
  }

  return { houseIds, roomIds };
}

function toggleServiceCalcFields() {
  const calcType = document.getElementById('service-calc-type').value;
  const boxFixed = document.getElementById('box-service-fixed');
  const boxFormula = document.getElementById('box-service-formula');

  if (calcType === 'formula') {
    boxFixed.style.display = 'none';
    boxFormula.style.display = 'block';
  } else {
    boxFixed.style.display = 'block';
    boxFormula.style.display = 'none';
  }
  toggleServiceHeadcountSingleBox();
}

// Only a "Theo đầu người" service ever needs to say whether it also
// multiplies by headcount on a single room (a dorm room's per-person
// services always do, unconditionally) — every other "Hình thức áp
// dụng" option has nothing to do with headcount at all.
function toggleServiceHeadcountSingleBox() {
  const calcType = document.getElementById('service-calc-type').value;
  const unit = document.getElementById('service-unit').value;
  const box = document.getElementById('box-service-headcount-single');
  if (box) box.style.display = (calcType !== 'formula' && unit === 'Theo đầu người') ? 'block' : 'none';
}

function openAddServiceModal() {
  document.getElementById('service-id').value = '';
  document.getElementById('service-name').value = '';
  document.getElementById('service-icon').value = 'package';
  document.getElementById('service-symbol').value = '📦';
  document.getElementById('service-calc-type').value = 'fixed';
  document.getElementById('service-price').value = '50000';
  document.getElementById('service-unit').value = 'Cố định / phòng';
  document.getElementById('service-custom-formula').value = '';
  document.getElementById('service-apply-headcount-single').checked = false;

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
    document.getElementById('service-custom-formula').value = srv.customFormula || '';
  } else {
    document.getElementById('service-price').value = srv.price || 50000;
    document.getElementById('service-unit').value = srv.unit || 'Cố định / phòng';
  }
  document.getElementById('service-apply-headcount-single').checked = !!srv.applyHeadcountSingle;
  toggleServiceHeadcountSingleBox();

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
  // investorShare (per-investor now, not managed by this form at all —
  // see Báo Cáo Chủ Đầu Tư) is deliberately left out of this payload;
  // the server carries the existing value forward untouched when it's
  // absent (see save_service in services.py), same as any other field
  // this form doesn't ask about.
  let sObj = { id: id || genId('srv_'), houseId, houseIds: selectedHouseIds, roomIds: selectedRoomIds, name, icon, symbol, calcType };

  if (calcType === 'formula') {
    const customFormula = document.getElementById('service-custom-formula').value.trim();
    if (!customFormula || !/^[0-9x+\-*/(). ]+$/.test(customFormula)) {
      showToast(t('toast_invalid_formula'), 'error');
      return;
    }
    sObj.customFormula = customFormula;
    sObj.price = 0;
    sObj.unit = 'Theo chỉ số';
  } else {
    sObj.price = parseFloat(document.getElementById('service-price').value) || 0;
    sObj.unit = document.getElementById('service-unit').value;
    if (sObj.unit === 'Theo đầu người') {
      sObj.applyHeadcountSingle = document.getElementById('service-apply-headcount-single').checked;
    }
  }

  const data = await postAndVerify(`${API_BASE}/services/save`, sObj);
  if (!data) return;

  // Uses the server's own returned object, not the locally-built sObj —
  // sObj deliberately never included investorShare (see above), and the
  // server's response is the one place that still has it (carried
  // forward from whatever was already saved). Using sObj here would
  // otherwise wipe every investor's sharing config from memory for the
  // rest of this session, even though the database itself is untouched.
  const savedService = data.service || sObj;
  const idx = state.services.findIndex(s => s.id === savedService.id);
  if (idx >= 0) state.services[idx] = savedService;
  else state.services.push(savedService);

  // Clear stored readings overrides to enforce real-time recalculation
  if (state.readings[state.currentMonth]) {
    state.rooms.forEach(r => {
      if (state.readings[state.currentMonth][r.id]) {
        delete state.readings[state.currentMonth][r.id].serviceFee;
        delete state.readings[state.currentMonth][r.id].parkingFee;
      }
    });
  }

  showToast(`${t('toast_service_saved_prefix')}"${name}" (${symbol})${t('toast_service_saved_suffix')}`, 'success');
  closeModal('modal-service-config');
  renderServicesConfig();
  if (state.currentView === 'admin-spreadsheet') renderSpreadsheet();
}

async function deleteServiceApi(srvId) {
  if (!confirm(t('confirm_delete_service'))) return;

  // Used to remove it from state.services optimistically BEFORE
  // confirming the delete actually succeeded server-side (a plain fetch
  // with no response check at all) — a rejected/failed request still
  // showed "đã xoá thành công" and left the service gone from view, with
  // nothing to tell the admin it hadn't really been deleted. postAndVerify
  // resyncs from the server on any failure instead.
  const data = await postAndVerify(`${API_BASE}/services/delete`, { id: srvId });
  if (!data) return;

  state.services = state.services.filter(s => s.id !== srvId);

  if (state.readings[state.currentMonth]) {
    state.rooms.forEach(r => {
      if (state.readings[state.currentMonth][r.id]) {
        delete state.readings[state.currentMonth][r.id].serviceFee;
        delete state.readings[state.currentMonth][r.id].parkingFee;
      }
    });
  }

  showToast(t('toast_service_deleted'), 'success');
  renderServicesConfig();
  if (state.currentView === 'admin-spreadsheet') renderSpreadsheet();
}

/* ==========================================================================
   DYNAMIC SPREADSHEET WITH INDIVIDUAL SERVICE COLUMNS (NO GỘP CHUNG)
   ========================================================================== */

// Each formula-type service now carries its own inline expression (e.g.
// "x*3500" or "(x-50)*3500") instead of pointing at a shared library entry —
// x stands in for the meter usage (Mới − Cũ). Whitelist the characters
// before ever handing the string to Function(): admin-authored, but this
// still closes off arbitrary code execution if that string's origin ever
// changes (e.g. imported data) rather than trusting it implicitly.
function evalCustomFormula(expr, usage) {
  if (!expr || typeof expr !== 'string') return 0;
  const trimmed = expr.trim();
  if (!trimmed || !/^[0-9x+\-*/(). ]+$/.test(trimmed)) return 0;
  try {
    const substituted = trimmed.replace(/x/g, `(${Math.max(0, usage)})`);
    const result = Function(`"use strict"; return (${substituted});`)();
    return Number.isFinite(result) ? Math.round(result) : 0;
  } catch (err) {
    return 0;
  }
}

function getFormulaDescription(formulaExpr, usage, splitHeadcount) {
  if (!formulaExpr) return t('formula_desc_fixed');
  const amount = evalCustomFormula(formulaExpr, usage);
  const base = `x=${usage} → ${formulaExpr} = ${formatMoney(amount)}đ`;
  if (splitHeadcount && splitHeadcount > 1) {
    return `${base} ÷ ${splitHeadcount} ${t('formula_per_person_label')} = ${formatMoney(Math.round(amount / splitHeadcount))}đ`;
  }
  return base;
}

// The room's invoice is one single bill covering every occupant, so it must
// carry the full electricity cost regardless of room type — dividing it
// here (as earlier versions did) undercounted a dorm room's electricity by
// a factor of its headcount, since nothing ever multiplied it back.
// Per-occupant electricity share is a display-only concern, computed
// separately where needed (see the tenant invoice view) — never subtracted
// from what's actually billed.
function utilityCostForRoom(formulaExpr, usage, isElec, room) {
  return evalCustomFormula(formulaExpr, usage);
}

// Dorm rooms store baseRent as the per-person rate (see the room-type hint
// in the room form) — the amount actually owed for the room is that rate
// times headcount. Single rooms bill baseRent as-is.
function roomRentTotal(room) {
  const baseRent = (room && room.baseRent) || 0;
  if (room && room.roomType === 'dorm') {
    return baseRent * Math.max(1, room.headcount || 1);
  }
  return baseRent;
}

// Room-rent line explanation for invoices — just the per-person rate, no
// headcount mentioned (the row's own amount column already shows the total).
function roomRentFormulaDescription(room, forAdmin) {
  if (!room || room.roomType !== 'dorm') return forAdmin ? '' : t('line_fixed_by_contract');
  return `${formatMoney(room.baseRent)}đ / ${t('formula_per_person_label')}`;
}

// Only set (by room_rent_for_month() in services.py) when a single
// room's own contractStart/contractEnd actually narrowed this month's
// rent below the full configured amount — explains a smaller-than-usual
// "Tiền nhà" line instead of leaving it looking miscalculated.
function rentProrationNoteHtml(inv) {
  const p = inv && inv.rentProration;
  if (!p) return '';
  return `<br><small style="color:var(--cala-orange);">⏱ ${t('rent_prorated_note_prefix')}${p.occupiedDays}/${p.daysInMonth} ${t('rent_prorated_note_days_suffix')}</small>`;
}

function renderAdminDashboard() {
  const activeRooms = getFilteredRooms();
  const monthReadings = state.readings[state.currentMonth] || {};
  let totalRevenue = 0;

  activeRooms.forEach(r => {
    const rd = monthReadings[r.id] || {};
    let roomTot = roomRentTotal(r);

    const houseServices = state.services.filter(s => serviceMatchesHouse(s, r.houseId) && serviceMatchesRoom(s, r.id));
    houseServices.forEach(s => {
      if (s.calcType === 'formula') {
        const isElec = s.name.includes('Điện');
        const usage = isElec ? Math.max(0, (rd.elecNew || 0) - (rd.elecOld || 0)) : Math.max(0, (rd.waterNew || 0) - (rd.waterOld || 0));
        roomTot += utilityCostForRoom(s.customFormula, usage, isElec, r);
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
  document.getElementById('stat-occupied-rooms').innerText = `${activeRooms.length} ${t('rooms_unit_label')}`;
  document.getElementById('stat-pending-invoices').innerText = pendingInvoices;
  document.getElementById('stat-open-tickets').innerText = openTickets;

  const summaryBox = document.getElementById('dashboard-invoice-summary');
  if (monthInvoices.length === 0) {
    summaryBox.innerHTML = `
      <div style="padding: 1rem; text-align: center; background: var(--bg-base); border-radius: var(--radius-md); color: var(--text-secondary);">
        ${t('dashboard_no_invoices_prefix')}${formatMonthLabel(state.currentMonth)}.<br>
        ${t('dashboard_no_invoices_hint')}
      </div>
    `;
  } else {
    const paidCount = monthInvoices.filter(i => i.status === 'Đã thanh toán').length;
    summaryBox.innerHTML = `
      <div style="display: flex; justify-content: space-between;">
        <span>${t('dashboard_issued_label')}</span><strong>${monthInvoices.length} ${t('rooms_unit_label')}</strong>
      </div>
      <div style="display: flex; justify-content: space-between;">
        <span>${t('dashboard_collected_label')}</span><span class="badge badge-paid">${paidCount} ${t('rooms_unit_label')}</span>
      </div>
      <div style="display: flex; justify-content: space-between;">
        <span>${t('dashboard_outstanding_label')}</span><span class="badge badge-pending">${monthInvoices.length - paidCount} ${t('rooms_unit_label')}</span>
      </div>
    `;
  }
}

function renderInvestorDashboard() {
  const investorId = state.currentUser.id;
  const activeRooms = getFilteredRooms();
  const monthReadings = state.readings[state.currentMonth] || {};

  let totalRent = 0, totalElec = 0, totalWater = 0, totalService = 0;
  let occupiedCount = 0;

  // A vacant room has no tenant paying rent — it must not contribute to
  // "doanh thu" (revenue) or "công nợ" (outstanding) even if an invoice
  // record happens to exist for it, since nobody actually owes that money.
  activeRooms.forEach(r => {
    if (!r.tenant) return;
    occupiedCount++;
    totalRent += roomRentTotal(r);

    const rd = monthReadings[r.id] || {};
    // Only services checked "gửi cho Chủ Đầu Tư" count toward what the
    // investor's own dashboard shows — this is their own account, so
    // anything left unchecked must stay invisible here too, not just on
    // the admin-facing report.
    const houseServices = state.services.filter(s => serviceMatchesHouse(s, r.houseId) && serviceMatchesRoom(s, r.id) && getInvestorShareFor(s, investorId).enabled);
    houseServices.forEach(s => {
      const share = getInvestorShareFor(s, investorId);
      if (s.calcType === 'formula') {
        const isElec = s.name.includes('Điện');
        const usage = isElec ? Math.max(0, (rd.elecNew || 0) - (rd.elecOld || 0)) : Math.max(0, (rd.waterNew || 0) - (rd.waterOld || 0));
        const cost = utilityCostForRoom(s.customFormula, usage, isElec, r);
        const shared = investorShareForAmount(share, cost);
        if (isElec) totalElec += shared; else totalWater += shared;
      } else {
        const cost = calculateServiceCostForRoom(s, r);
        totalService += investorShareForAmount(share, cost);
      }
    });
  });

  const totalRevenue = totalRent + totalElec + totalWater + totalService;

  // Same reasoning for collected/outstanding: an invoice tied to a room
  // that's vacant right now isn't real money owed by anyone, so it's
  // excluded from both regardless of what its stored status says.
  const occupiedRoomIds = new Set(state.rooms.filter(r => r.tenant).map(r => r.id));
  const monthInvoices = state.invoices.filter(inv => inv.month === state.currentMonth && (state.currentHouseId === 'all' || inv.houseId === state.currentHouseId) && occupiedRoomIds.has(inv.roomId));
  const paidInvoices = monthInvoices.filter(i => i.status === 'Đã thanh toán');
  const pendingInvoices = monthInvoices.filter(i => i.status !== 'Đã thanh toán');
  const collectedAmount = paidInvoices.reduce((sum, i) => sum + computeInvestorInvoiceBreakdown(i, investorId).total, 0);
  const outstandingAmount = pendingInvoices.reduce((sum, i) => sum + computeInvestorInvoiceBreakdown(i, investorId).total, 0);

  const openTickets = state.tickets.filter(tk => tk.status !== 'Đã hoàn thành').length;
  const occupancyRate = activeRooms.length ? Math.round((occupiedCount / activeRooms.length) * 100) : 0;

  const setText = (id, val) => { const el = document.getElementById(id); if (el) el.innerText = val; };
  setText('inv-stat-revenue', formatMoney(totalRevenue) + ' đ');
  setText('inv-stat-occupancy', `${occupiedCount}/${activeRooms.length} (${occupancyRate}%)`);
  setText('inv-stat-collected', formatMoney(collectedAmount) + ' đ');
  setText('inv-stat-outstanding', formatMoney(outstandingAmount) + ' đ');
  setText('inv-stat-tickets', openTickets);

  // Lợi Nhuận Dự Kiến — the headline "how much will I actually get this
  // month" number: this month's revenue share minus this month's
  // installation/repair deductions. Computed from the same totalRevenue
  // projection as inv-stat-revenue (not tied to whether invoices have
  // actually been marked paid yet), so it reads as "expected", matching
  // the disclaimer text under it.
  const totalExpensesForProfit = state.investorExpenses
    .filter(e => e.month === state.currentMonth && (state.currentHouseId === 'all' || e.houseId === state.currentHouseId))
    .reduce((s, e) => s + (e.amount || 0), 0);
  const netProfit = totalRevenue - totalExpensesForProfit;
  setText('investor-profit-revenue', formatMoney(totalRevenue) + ' đ');
  setText('investor-profit-expenses', '−' + formatMoney(totalExpensesForProfit) + ' đ');
  const netProfitEl = document.getElementById('investor-profit-net');
  if (netProfitEl) {
    netProfitEl.innerText = formatMoney(netProfit) + ' đ';
    netProfitEl.style.color = netProfit < 0 ? '#ffb4b4' : '#fff';
  }

  const breakdownEl = document.getElementById('investor-revenue-breakdown');
  if (breakdownEl) {
    const parts = [
      { label: t('line_room_rent_short'), value: totalRent, color: 'var(--cala-blue)' },
      { label: t('line_electricity_short'), value: totalElec, color: 'var(--cala-amber)' },
      { label: t('line_water_short'), value: totalWater, color: '#38bdf8' },
      { label: t('nav_services'), value: totalService, color: 'var(--cala-emerald)' }
    ];
    const sum = parts.reduce((s, p) => s + p.value, 0) || 1;
    breakdownEl.innerHTML = `
      <div style="display:flex; height:14px; border-radius:var(--radius-full); overflow:hidden; margin-bottom:1rem;">
        ${parts.map(p => `<div style="width:${(p.value / sum * 100).toFixed(2)}%; background:${p.color};" title="${p.label}: ${formatMoney(p.value)}đ"></div>`).join('')}
      </div>
      <div style="display:flex; flex-wrap:wrap; gap:0.85rem;">
        ${parts.map(p => `
          <div style="display:flex; align-items:center; gap:0.4rem; font-size:0.82rem;">
            <span style="width:10px; height:10px; border-radius:50%; background:${p.color}; display:inline-block; flex-shrink:0;"></span>
            ${p.label}: <strong>${formatMoney(p.value)} đ</strong>
          </div>
        `).join('')}
      </div>
    `;
  }

  const tbody = document.getElementById('investor-rooms-table-body');
  if (tbody) {
    // Vacant rooms are left out entirely here — no tenant means no money
    // involved, and a "—" row still invited investors to ask what it
    // meant. Simpler and unambiguous to just not list it.
    const occupiedRooms = activeRooms.filter(r => r.tenant);
    if (occupiedRooms.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:1.5rem; color:var(--text-secondary);">${t('spreadsheet_empty_state')}</td></tr>`;
    } else {
      tbody.innerHTML = occupiedRooms.map(r => {
        const inv = monthInvoices.find(i => i.roomId === r.id);
        const total = inv ? computeInvestorInvoiceBreakdown(inv, investorId).total : roomRentTotal(r);
        const statusBadge = inv
          ? `<span class="badge ${inv.status === 'Đã thanh toán' ? 'badge-paid' : 'badge-pending'}">${statusLabel(inv.status)}</span>`
          : `<span class="badge badge-resolved">${t('dashboard_no_invoices_hint')}</span>`;
        const house = state.houses.find(h => h.id === r.houseId);
        return `
          <tr>
            <td><strong>${r.name}</strong>${house ? `<br><small style="color:var(--text-muted);">${house.name}</small>` : ''}</td>
            <td>${r.tenant}</td>
            <td>${r.headcount}</td>
            <td>${formatMoney(roomRentTotal(r))} đ</td>
            <td style="font-weight:800; color:var(--cala-orange);">${formatMoney(total)} đ</td>
            <td>${statusBadge}</td>
            <td>${inv ? `<button class="btn btn-secondary btn-sm" onclick="viewInvestorInvoiceDetail('${inv.id}')"><i data-lucide="eye"></i> ${t('btn_view_details')}</button>` : ''}</td>
          </tr>
        `;
      }).join('');
      // Tổng row — so the investor never has to add the "Tổng Cộng"
      // column up by hand to know what the house/rooms owe in total.
      const roomsRentSum = occupiedRooms.reduce((s, r) => s + roomRentTotal(r), 0);
      const roomsTotalSum = occupiedRooms.reduce((s, r) => {
        const inv = monthInvoices.find(i => i.roomId === r.id);
        return s + (inv ? computeInvestorInvoiceBreakdown(inv, investorId).total : roomRentTotal(r));
      }, 0);
      tbody.innerHTML += `
        <tr style="background: var(--bg-base); font-weight: 800;">
          <td colspan="3">${t('lbl_total_row')}</td>
          <td>${formatMoney(roomsRentSum)} đ</td>
          <td style="color:var(--cala-orange);">${formatMoney(roomsTotalSum)} đ</td>
          <td colspan="2"></td>
        </tr>
      `;
      renderIcons(tbody);
    }
  }

  const houseBreakdownCard = document.getElementById('investor-house-breakdown-card');
  const houseBreakdownBody = document.getElementById('investor-house-breakdown-body');
  if (houseBreakdownCard && houseBreakdownBody) {
    if (state.houses.length > 1) {
      houseBreakdownCard.style.display = 'block';
      let houseBreakdownSum = 0;
      houseBreakdownBody.innerHTML = state.houses.map(h => {
        const houseInvoices = state.invoices.filter(i => i.month === state.currentMonth && i.houseId === h.id && occupiedRoomIds.has(i.roomId));
        const houseTotal = houseInvoices.reduce((s, i) => s + computeInvestorInvoiceBreakdown(i, investorId).total, 0);
        houseBreakdownSum += houseTotal;
        const houseRooms = state.rooms.filter(r => r.houseId === h.id);
        const houseOccupied = houseRooms.filter(r => r.tenant).length;
        return `
          <tr>
            <td><strong>${h.name}</strong></td>
            <td>${houseOccupied}/${houseRooms.length}</td>
            <td style="font-weight:800; color:var(--cala-orange);">${formatMoney(houseTotal)} đ</td>
          </tr>
        `;
      }).join('');
      houseBreakdownBody.innerHTML += `
        <tr style="background: var(--bg-base); font-weight: 800;">
          <td colspan="2">${t('lbl_total_row')}</td>
          <td style="color:var(--cala-orange);">${formatMoney(houseBreakdownSum)} đ</td>
        </tr>
      `;
    } else {
      houseBreakdownCard.style.display = 'none';
    }
  }

  const expensesCard = document.getElementById('investor-expenses-card');
  const expensesBody = document.getElementById('investor-expenses-list-body');
  if (expensesCard && expensesBody) {
    const monthExpenses = state.investorExpenses.filter(e => e.month === state.currentMonth && (state.currentHouseId === 'all' || e.houseId === state.currentHouseId));
    if (monthExpenses.length > 0) {
      expensesCard.style.display = 'block';
      expensesBody.innerHTML = monthExpenses.map(e => {
        const house = state.houses.find(h => h.id === e.houseId);
        return `
          <tr>
            <td>${e.name || e.description} <button type="button" class="btn btn-secondary btn-sm" title="${t('modal_expense_detail_title')}" onclick="viewExpenseDetail('${e.id}')" style="padding:2px 5px; margin-left:0.3rem;"><i data-lucide="circle-alert" style="width:13px; height:13px; pointer-events:none;"></i></button></td>
            <td>${house ? house.name : e.houseId}</td>
            <td style="text-align:right; font-weight:700; color:var(--cala-red);">−${formatMoney(e.amount)} đ</td>
          </tr>
        `;
      }).join('');
      const expensesSum = monthExpenses.reduce((s, e) => s + (e.amount || 0), 0);
      expensesBody.innerHTML += `
        <tr style="background: var(--bg-base); font-weight: 800;">
          <td colspan="2">${t('lbl_total_row')}</td>
          <td style="text-align:right; color:var(--cala-red);">−${formatMoney(expensesSum)} đ</td>
        </tr>
      `;
      renderIcons(expensesBody);
    } else {
      expensesCard.style.display = 'none';
    }
  }
}

function renderSpreadsheet() {
  const label = document.getElementById('spreadsheet-house-label');
  const currentHouse = state.houses.find(h => h.id === state.currentHouseId);
  if (label) {
    label.innerText = currentHouse ? currentHouse.name : t('all_houses_label');
  }

  const activeServices = getFilteredServices();

  // Dynamically Build Individual Table Columns for Every Single Configured Service!
  const theadTr = document.getElementById('spreadsheet-thead-tr');
  let headHtml = `
    <th>${t('col_room')}</th>
    <th>${t('col_tenant')}</th>
    <th>${t('col_rent')}</th>
  `;

  activeServices.forEach(s => {
    const symbol = s.symbol || '📦';
    if (s.calcType === 'formula') {
      const isElec = s.name.includes('Điện');
      const unitLabel = isElec ? 'kWh' : 'm³';
      headHtml += `
        <th>${s.name} ${t('col_old_reading')}</th>
        <th>${s.name} ${t('col_new_reading')}</th>
        <th>${t('col_usage_prefix')}${s.name} (${unitLabel})</th>
        <th style="background: #e6f4fe; color: #0178d2;">${symbol} ${s.name}</th>
      `;
    } else {
      headHtml += `<th style="background: #e6f4fe; color: #0178d2;">${symbol} ${s.name}</th>`;
    }
  });

  headHtml += `
    <th>${t('col_total')}</th>
    <th>${t('col_actions')}</th>
  `;

  theadTr.innerHTML = headHtml;

  const tbody = document.getElementById('spreadsheet-body');
  tbody.innerHTML = '';
  const monthReadings = state.readings[state.currentMonth] || {};
  const activeRooms = getFilteredRooms();

  if (activeRooms.length === 0) {
    tbody.innerHTML = `<tr><td colspan="20" style="text-align:center; padding:2rem; color:var(--text-secondary);">${t('spreadsheet_empty_state')}</td></tr>`;
    return;
  }

  activeRooms.forEach(r => {
    const rd = monthReadings[r.id] || { elecOld: 0, elecNew: 0, waterOld: 0, waterNew: 0 };

    let grandTotal = roomRentTotal(r);
    const house = state.houses.find(h => h.id === r.houseId);
    const houseBadge = house ? `<br><span class="badge badge-resolved" style="font-size:0.65rem;">${house.name}</span>` : '';

    let rowHtml = `
      <td><strong>${r.name}</strong>${houseBadge}</td>
      <td>${r.tenant || `<em>${t('empty_tenant_label')}</em>`} <br><small style="color: var(--text-muted);">${r.headcount} ${t('formula_per_person_label')}</small></td>
      <td>${formatMoney(roomRentTotal(r))}</td>
    `;

    // Render Each Active Service as its Own Independent Column!
    activeServices.forEach(s => {
      // House match alone isn't enough — a service scoped to specific
      // rooms (e.g. "Nước KTX" applied only to the dorm rooms) must not
      // show/charge for every OTHER room in the same house too, or a
      // room outside its scope both misses its own water service AND
      // gets billed for one that was never meant for it.
      const isServiceApplicable = serviceMatchesHouse(s, r.houseId) && serviceMatchesRoom(s, r.id);

      if (s.calcType === 'formula') {
        const isElec = s.name.includes('Điện');
        const oldVal = isElec ? rd.elecOld : rd.waterOld;
        const newVal = isElec ? rd.elecNew : rd.waterNew;
        const usage = Math.max(0, (newVal || 0) - (oldVal || 0));

        const cost = isServiceApplicable ? utilityCostForRoom(s.customFormula, usage, isElec, r) : 0;
        grandTotal += cost;

        if (isServiceApplicable) {
          const oldField = isElec ? 'elecOld' : 'waterOld';
          const newField = isElec ? 'elecNew' : 'waterNew';
          const oldPhoto = isElec ? rd.elecOldPhoto : rd.waterOldPhoto;
          const newPhoto = isElec ? rd.elecNewPhoto : rd.waterNewPhoto;
          rowHtml += `
            <td>
              <div style="display:flex; align-items:center; gap:0.4rem;">
                <input type="number" class="excel-input" value="${oldVal || 0}" onchange="updateReadingApi('${r.id}', '${oldField}', this.value)">
                ${meterPhotoButtonHtml(r.id, oldField + 'Photo', oldPhoto)}
              </div>
            </td>
            <td>
              <div style="display:flex; align-items:center; gap:0.4rem;">
                <input type="number" class="excel-input" value="${newVal || 0}" onchange="updateReadingApi('${r.id}', '${newField}', this.value)">
                ${meterPhotoButtonHtml(r.id, newField + 'Photo', newPhoto)}
              </div>
            </td>
            <td style="text-align: right; font-weight: 800; color: var(--cala-blue);">${usage}</td>
            <td style="text-align: right; font-weight: 700; color: var(--cala-blue);">${s.symbol || '🧮'} ${formatMoney(cost)} đ</td>
          `;
        } else {
          rowHtml += `<td colspan="4" style="text-align:center; color:var(--text-muted);">${t('not_applicable_label')}</td>`;
        }
      } else {
        const cost = isServiceApplicable ? calculateServiceCostForRoom(s, r) : 0;
        grandTotal += cost;

        if (isServiceApplicable) {
          rowHtml += `
            <td style="text-align: right; font-weight: 700; color: var(--cala-blue);">
              ${s.symbol || '📦'} ${formatMoney(cost)} đ
            </td>
          `;
        } else {
          rowHtml += `<td style="text-align:center; color:var(--text-muted);">${t('not_applicable_label')}</td>`;
        }
      }
    });

    rowHtml += `
      <td style="text-align: right; font-weight: 800; color: var(--cala-orange); font-size: 0.95rem;">💰 ${formatMoney(grandTotal)} đ</td>
      <td>
        <div style="display:flex; gap:0.4rem;">
          ${hasPermission(state.currentUser.role, 'rooms', 'edit') ? `<button class="btn btn-secondary btn-sm" onclick="openEditRoomModal('${r.id}')" title="${t('title_edit_room_price')}">
            <i data-lucide="edit-3"></i> ${t('btn_edit_price')}
          </button>` : ''}
          <button class="btn btn-secondary btn-sm" onclick="previewRoomInvoice('${r.id}')" title="${t('title_view_invoice')}">
            <i data-lucide="eye"></i>
          </button>
        </div>
      </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = rowHtml;
    tbody.appendChild(tr);
  });
  // switchView() covers this on first navigating into this screen, but
  // every edit (typing a reading, uploading a meter photo) calls
  // renderSpreadsheet() again on its own afterward — without this, the
  // freshly rebuilt <i data-lucide="camera/edit-3/eye"> tags stay
  // un-rendered blank icons until the next full view switch. Scoped to
  // just this table body — every reading edit rebuilds the whole table, so
  // an unscoped call here would also re-render the entire sidebar's icons
  // on every single keystroke's blur.
  renderIcons(tbody);
}

function isReadingTextField(field) {
  return field.endsWith('Photo');
}

function meterPhotoButtonHtml(roomId, field, photoDataUrl) {
  const inputId = `meter-photo-input-${roomId}-${field}`;
  const hasPhoto = !!photoDataUrl;
  return `
    <input type="file" accept="image/*" id="${inputId}" style="display:none" onchange="handleMeterPhotoUpload(event, '${roomId}', '${field}')">
    <button type="button" class="photo-toggle-btn${hasPhoto ? ' has-photo' : ''}" title="${hasPhoto ? t('btn_meter_photo_view') : t('btn_meter_photo_upload')}"
      onclick="${hasPhoto ? `viewMeterPhoto('${roomId}', '${field}')` : `document.getElementById('${inputId}').click()`}">
      <i data-lucide="camera"></i>
    </button>
  `;
}

async function handleMeterPhotoUpload(event, roomId, field) {
  const file = event.target.files[0];
  event.target.value = '';
  if (!file) return;
  try {
    const dataUrl = await compressImageFile(file);
    updateReadingApi(roomId, field, dataUrl);
  } catch (err) {
    showToast(t(err.message === 'too-large' ? 'toast_image_too_large' : 'toast_image_compress_failed'), 'error');
  }
}

async function viewMeterPhoto(roomId, field) {
  const rd = (state.readings[state.currentMonth] || {})[roomId] || {};
  const cached = rd[field];
  if (!cached) return;
  const inputId = `meter-photo-input-${roomId}-${field}`;
  const content = document.getElementById('modal-meter-photo-content');
  document.getElementById('modal-meter-photo').classList.add('active');
  if (!content) return;
  // The bulk state only ever holds a boolean placeholder for a photo
  // fetched from the server (see get_readings_light() in storage.py) —
  // only a value just uploaded this session is the real data: URL
  // already, letting that skip the round trip.
  const dataUrl = typeof cached === 'string' && cached.startsWith('data:')
    ? cached
    : await fetchReadingPhoto(state.currentMonth, roomId, field);
  if (!dataUrl) return;
  content.innerHTML = `
    <img src="${dataUrl}" style="width:100%; border-radius:var(--radius-md);">
    <div style="display:flex; gap:0.5rem; margin-top:0.75rem;">
      <button type="button" class="btn btn-sm" style="flex:1; justify-content:center;" onclick="document.getElementById('${inputId}').click()">
        <i data-lucide="upload"></i> ${t('btn_meter_photo_replace')}
      </button>
      <button type="button" class="btn btn-sm" style="flex:1; justify-content:center; color:var(--color-danger); border-color:var(--color-danger);" onclick="deleteMeterPhoto('${roomId}', '${field}')">
        <i data-lucide="trash-2"></i> ${t('mp_btn_delete_photo')}
      </button>
    </div>
  `;
  renderIcons(content);
}

async function deleteMeterPhoto(roomId, field) {
  const ok = await showConfirmModal(t('mp_confirm_delete_photo'), { danger: true, okLabel: t('btn_delete') });
  if (!ok) return;
  await updateReadingApi(roomId, field, '');
  closeModal('modal-meter-photo');
}

async function fetchReadingPhoto(month, roomId, field) {
  try {
    const res = await fetch(`${API_BASE}/readings/photo?month=${encodeURIComponent(month)}&roomId=${encodeURIComponent(roomId)}&field=${encodeURIComponent(field)}`);
    const data = await res.json();
    return data.success ? data.photo : '';
  } catch (err) {
    console.warn('Could not load meter photo:', err);
    return '';
  }
}

async function openInvoiceMeterPhotos(invoiceId) {
  const inv = state.invoices.find(i => i.id === invoiceId);
  if (!inv) return;
  const content = document.getElementById('modal-meter-photo-content');
  if (!content) return;
  document.getElementById('modal-meter-photo').classList.add('active');

  // Same in-memory-real-URL-vs-server-boolean-placeholder split as
  // viewMeterPhoto() — see get_invoices_light() in storage.py.
  const flagged = [
    { label: t('line_electricity_short') + ' - ' + t('meter_old_label'), field: 'elecOldPhoto', cached: inv.elecOldPhoto },
    { label: t('line_electricity_short') + ' - ' + t('meter_new_label'), field: 'elecNewPhoto', cached: inv.elecNewPhoto },
    { label: t('line_water_short') + ' - ' + t('meter_old_label'), field: 'waterOldPhoto', cached: inv.waterOldPhoto },
    { label: t('line_water_short') + ' - ' + t('meter_new_label'), field: 'waterNewPhoto', cached: inv.waterNewPhoto }
  ].filter(p => p.cached);

  content.innerHTML = `<p style="text-align:center; color:var(--text-secondary); padding:1rem 0;">${t('loading_label')}</p>`;
  const pairs = (await Promise.all(flagged.map(async p => ({
    label: p.label,
    url: (typeof p.cached === 'string' && p.cached.startsWith('data:')) ? p.cached : await fetchInvoicePhoto(invoiceId, p.field)
  })))).filter(p => p.url);

  if (pairs.length === 0) {
    content.innerHTML = `<p style="text-align:center; color:var(--text-secondary); padding:1rem 0;">${t('meter_photo_empty')}</p>`;
  } else {
    content.innerHTML = `
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(160px, 1fr)); gap:0.75rem;">
        ${pairs.map(p => `
          <div>
            <div style="font-size:0.75rem; font-weight:700; margin-bottom:0.35rem; color:var(--text-secondary);">${p.label}</div>
            <img src="${p.url}" style="width:100%; border-radius:var(--radius-md); border:1px solid var(--border-color);">
          </div>
        `).join('')}
      </div>
    `;
  }
  renderIcons(content);
}

async function fetchInvoicePhoto(invoiceId, field) {
  try {
    const res = await fetch(`${API_BASE}/invoices/photo?invoiceId=${encodeURIComponent(invoiceId)}&field=${encodeURIComponent(field)}`);
    const data = await res.json();
    return data.success ? data.photo : '';
  } catch (err) {
    console.warn('Could not load invoice meter photo:', err);
    return '';
  }
}

async function updateReadingApi(roomId, field, value) {
  if (!state.readings[state.currentMonth]) state.readings[state.currentMonth] = {};
  if (!state.readings[state.currentMonth][roomId]) state.readings[state.currentMonth][roomId] = {};
  state.readings[state.currentMonth][roomId][field] = isReadingTextField(field) ? value : (parseFloat(value) || 0);

  const data = await postAndVerify(`${API_BASE}/readings/update`, { month: state.currentMonth, roomId, field, value });
  if (!data) return;
  renderSpreadsheet();
}

async function generateAndSendAllInvoices() {
  const monthReadings = state.readings[state.currentMonth] || {};
  state.rooms.forEach(r => {
    const rd = monthReadings[r.id] || { elecOld: 0, elecNew: 0, waterOld: 0, waterNew: 0 };
    let totalAmount = roomRentTotal(r);
    let serviceItems = [];
    let elecCost = 0;
    let waterCost = 0;
    let elecFormulaText = '';
    let waterFormulaText = '';

    const houseServices = state.services.filter(s => serviceMatchesHouse(s, r.houseId) && serviceMatchesRoom(s, r.id));
    houseServices.forEach(s => {
      const symbol = s.symbol || '📦';
      if (s.calcType === 'formula') {
        const isElec = s.name.includes('Điện');
        const usage = isElec ? Math.max(0, (rd.elecNew || 0) - (rd.elecOld || 0)) : Math.max(0, (rd.waterNew || 0) - (rd.waterOld || 0));
        const cost = utilityCostForRoom(s.customFormula, usage, isElec, r);
        if (isElec) { elecCost = cost; elecFormulaText = s.customFormula || ''; }
        else { waterCost = cost; waterFormulaText = s.customFormula || ''; }
        totalAmount += cost;
      } else {
        const cost = calculateServiceCostForRoom(s, r);
        totalAmount += cost;
        const perPersonCount = (r.roomType === 'dorm' || s.applyHeadcountSingle) ? (r.headcount || 1) : 1;
        serviceItems.push({
          id: s.id,
          name: s.name,
          symbol,
          price: s.price,
          unit: s.unit === 'Theo đầu người' ? `${perPersonCount} ${t('formula_per_person_label')} x ${formatMoney(s.price)}đ` : s.unit,
          total: cost,
          isParking: s.name.toLowerCase().includes('xe')
        });
      }
    });

    const elecUsage = Math.max(0, (rd.elecNew || 0) - (rd.elecOld || 0));
    const waterUsage = Math.max(0, (rd.waterNew || 0) - (rd.waterOld || 0));

    const invoiceId = formatInvoiceId(r.name, state.currentMonth);
    // Matched by roomId + month, not the id string above — two rooms in
    // different houses can share the same name (nothing enforces
    // uniqueness across houses), which would otherwise collide on the
    // same invoiceId and let one room's invoice silently overwrite the
    // other's here. Mirrors the same fix in _rebuild_invoices (services.py).
    const idx = state.invoices.findIndex(i => i.roomId === r.id && i.month === state.currentMonth);
    const invObj = {
      id: invoiceId, month: state.currentMonth, roomId: r.id, houseId: r.houseId, roomName: r.name, tenant: r.tenant, phone: r.phone,
      baseRent: roomRentTotal(r), elecOld: rd.elecOld, elecNew: rd.elecNew, elecUsage, elecFormula: elecFormulaText, elecCost,
      waterOld: rd.waterOld, waterNew: rd.waterNew, waterUsage, waterFormula: waterFormulaText, waterCost,
      serviceFee: serviceItems.reduce((sum, item) => sum + item.total, 0),
      parkingFee: 0,
      serviceItems, otherFees: serviceItems.reduce((sum, item) => sum + item.total, 0), totalAmount, sendStatus: 'Đã gửi tự động', status: idx >= 0 ? state.invoices[idx].status : 'Chờ thanh toán', sentAt: 'Hôm nay'
    };

    if (idx >= 0) state.invoices[idx] = invObj;
    else state.invoices.push(invObj);
  });

  const data = await postAndVerify(`${API_BASE}/invoices/generate-all`, { month: state.currentMonth });
  if (!data) return;

  showToast(`${t('toast_invoices_issued_prefix')}${formatMonthLabel(state.currentMonth)}!`, 'success');
  renderCurrentView();
}

function renderAdminInvoices() {
  const tbody = document.getElementById('admin-invoices-tbody');
  tbody.innerHTML = '';
  const monthInvoices = state.invoices.filter(i => i.month === state.currentMonth && (state.currentHouseId === 'all' || i.houseId === state.currentHouseId));

  // Invoices accumulate over time in whatever order they happened to get
  // (re)generated in — an existing room's invoice gets updated in place
  // (keeping its old array position) while a brand-new one gets appended
  // at the end, so the list drifts further from the actual room order the
  // longer the app's been used ("thứ tự đang xấu quá khi làm hoá đơn
  // tổng"). Re-sort by each invoice's room's position in the
  // admin-arranged state.rooms order (server-side sort_order) every
  // render instead of trusting the array's own order.
  const roomOrderIndex = new Map(state.rooms.map((r, i) => [r.id, i]));
  monthInvoices.sort((a, b) => {
    const idxA = roomOrderIndex.has(a.roomId) ? roomOrderIndex.get(a.roomId) : Infinity;
    const idxB = roomOrderIndex.has(b.roomId) ? roomOrderIndex.get(b.roomId) : Infinity;
    return idxA - idxB;
  });

  if (monthInvoices.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding:2rem; color:var(--text-secondary);">${t('invoices_empty_state')}</td></tr>`;
    return;
  }

  monthInvoices.forEach(inv => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td data-label="${t('col_inv_id')}"><strong>${inv.id}</strong></td>
      <td data-label="${t('col_room')}">${inv.roomName}</td>
      <td data-label="${t('col_tenant')}">${inv.tenant}</td>
      <td data-label="${t('col_period')}">${formatMonthLabel(inv.month)}</td>
      <td data-label="${t('col_total')}" style="font-weight: 800; color: var(--cala-orange);">${formatMoney(inv.totalAmount)} đ</td>
      <td data-label="${t('col_send_status')}"><span class="badge badge-resolved">${statusLabel(inv.sendStatus)}</span></td>
      <td data-label="${t('col_pay_status')}">
        <span class="badge ${inv.status === 'Đã thanh toán' ? 'badge-paid' : 'badge-pending'}">${statusLabel(inv.status)}</span>
        ${(inv.paymentProofPhotos || []).length ? `<i data-lucide="camera" title="${t('lbl_payment_proof')}" style="width:14px; height:14px; margin-left:0.3rem; vertical-align:middle; color:var(--cala-blue);"></i>` : ''}
      </td>
      <td data-label="${t('col_sent_time')}"><small style="color: var(--text-muted);">${inv.sentAt ? statusLabel(inv.sentAt) : t('just_now_label')}</small></td>
      <td data-label="${t('col_actions')}">
        <div style="display:flex; gap:0.5rem;">
          <button class="btn btn-secondary btn-sm" onclick="viewInvoiceDetail('${inv.id}')"><i data-lucide="eye"></i></button>
          ${inv.status !== 'Đã thanh toán' ? `<button class="btn btn-orange btn-sm" onclick="markInvoicePaidApi('${inv.id}')"><i data-lucide="check-circle"></i> ${t('btn_mark_collected')}</button>` : ''}
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
  renderIcons(tbody);
}

async function markInvoicePaidApi(invoiceId) {
  const inv = state.invoices.find(i => i.id === invoiceId);
  if (inv) inv.status = 'Đã thanh toán';

  const data = await postAndVerify(`${API_BASE}/invoices/mark-paid`, { invoiceId });
  if (!data) return;

  showToast(`${t('toast_invoice_marked_paid_prefix')}${invoiceId}!`, 'success');
  renderAdminInvoices();
}

/* ==========================================================================
   INVESTOR PAYOUT REPORT
   Doanh thu chia sẻ = Tổng tiền nhà + Dịch vụ khác + 50% tiền nước
                        − Chi phí lắp đặt/sửa chữa trong tháng
   (Tiền điện không tính — đã được quản lý xử lý riêng.)
   Chủ đầu tư nhận = Doanh thu chia sẻ × (100 − % quản lý giữ lại)
   ========================================================================== */

// Applies one service's investor-share config to an actually-billed amount:
// disabled -> nothing sent to the investor; full -> the whole amount;
// percent -> a configured % of it; fixed -> a flat VNĐ figure regardless of
// the real amount (the gap is the admin's undisclosed profit margin).
function investorShareForAmount(investorShare, actualAmount) {
  if (!investorShare || !investorShare.enabled) return 0;
  const mode = investorShare.mode || 'full';
  if (mode === 'percent') return actualAmount * ((investorShare.value || 0) / 100);
  if (mode === 'fixed') return investorShare.value || 0;
  return actualAmount;
}

// service.investorShare used to be one {enabled, mode, value} object
// applying to every investor who could see that service's house — no way
// to share it with one investor but not another on the same house. It's
// now a map ({investorId: {enabled, mode, value}}); this reads one
// investor's own entry, defaulting to "not shared" when they have none —
// deliberately no automatic fallback to anyone else's config or an
// old-style single default, so a service is only ever visible to an
// investor once someone explicitly turns it on for them.
function getInvestorShareFor(service, investorId) {
  const map = service.investorShare || {};
  return map[investorId] || { enabled: false, mode: 'full', value: 0 };
}

// Every investor account that could currently see `houseId` — used to
// populate the Chủ Đầu Tư picker on Báo Cáo Chủ Đầu Tư (a house can have
// more than one investor, e.g. co-owners, each with their own visibility
// into what gets shared with them).
function investorsForHouse(houseId) {
  return state.users.filter(u => {
    if (u.role !== 'investor') return false;
    const ids = u.houseIds && u.houseIds.length ? u.houseIds : (u.houseId ? [u.houseId] : []);
    return ids.includes('all') || ids.includes(houseId);
  });
}

// Computes what a single invoice looks like once every service's
// investor-share config is applied — room rent always in full, each
// elec/water/fixed service either dropped (disabled), shown in full,
// shown as a %, or shown as a flat configured figure. Shared by the
// admin-facing investor report, the investor's own dashboard totals, and
// the investor's own invoice-detail modal, so all three always agree.
function computeInvestorInvoiceBreakdown(inv, investorId) {
  const rent = inv.baseRent || 0;
  const services = [];

  // elecCost/waterCost aren't tagged with a service id on the invoice —
  // re-derive which formula service produced each one the same way
  // generateAndSendAllInvoices() does (name-contains-"Điện" convention).
  const formulaServices = state.services.filter(s => s.calcType === 'formula' && serviceMatchesHouse(s, inv.houseId) && serviceMatchesRoom(s, inv.roomId));
  formulaServices.forEach(s => {
    const investorShare = getInvestorShareFor(s, investorId);
    if (!investorShare.enabled) return;
    const isElec = s.name.includes('Điện');
    const actual = isElec ? (inv.elecCost || 0) : (inv.waterCost || 0);
    services.push({
      id: s.id,
      name: s.name,
      symbol: s.symbol || (isElec ? '⚡' : '💧'),
      unit: isElec ? `${inv.elecUsage || 0} kWh` : `${inv.waterUsage || 0} m³`,
      mode: investorShare.mode || 'full',
      value: investorShare.value || 0,
      shared: investorShareForAmount(investorShare, actual)
    });
  });

  (inv.serviceItems || []).forEach(item => {
    const s = state.services.find(sv => sv.id === item.id);
    // A service that's since been deleted but is still referenced by an
    // old invoice's line items has no config left to look up at all —
    // keep showing it shared in full rather than silently dropping a
    // historical invoice's own numbers.
    const investorShare = s ? getInvestorShareFor(s, investorId) : { enabled: true, mode: 'full', value: 0 };
    if (!investorShare.enabled) return;
    services.push({
      id: item.id,
      name: item.name,
      symbol: item.symbol || '📦',
      unit: item.unit,
      mode: investorShare.mode || 'full',
      value: investorShare.value || 0,
      shared: investorShareForAmount(investorShare, item.total || 0)
    });
  });

  const total = rent + services.reduce((s, x) => s + x.shared, 0);
  return { rent, services, total };
}

// generate_all_invoices() creates one invoice for EVERY room every month,
// vacant or not, so a room's configured rent still shows up as a real
// invoice amount even after it's deactivated/emptied (no tenant) — used
// to reach both computeHouseServiceSummary and computeInvestorReportData
// below, so a deactivated house could still "generate" nonzero revenue
// on Báo Cáo Chủ Đầu Tư even though renderInvestorDashboard (the
// investor's own view of the same numbers) already excluded these.
// Nobody actually owes this money, so it's filtered out here too.
function occupiedRoomIdSet() {
  return new Set(state.rooms.filter(r => r.tenant).map(r => r.id));
}

// Every service that applies to this house — including ones NOT currently
// shared with the investor — with its actual billed total this month and
// what would be shared under its current investorShare config. Powers the
// inline toggle list on the report card, so admin can flip a service
// on/off (or switch % vs fixed) without leaving this page — unlike
// computeInvestorInvoiceBreakdown(), which only ever surfaces the
// already-enabled ones for the revenue math itself.
function computeHouseServiceSummary(houseId, month, investorId) {
  const occupiedRoomIds = occupiedRoomIdSet();
  const invoices = state.invoices.filter(i => i.month === month && i.houseId === houseId && occupiedRoomIds.has(i.roomId));
  const houseServices = state.services.filter(s => serviceMatchesHouse(s, houseId));

  return houseServices.map(service => {
    let actual = 0;
    if (service.calcType === 'formula') {
      const isElec = service.name.includes('Điện');
      invoices.forEach(inv => {
        if (serviceMatchesRoom(service, inv.roomId)) {
          actual += isElec ? (inv.elecCost || 0) : (inv.waterCost || 0);
        }
      });
    } else {
      invoices.forEach(inv => {
        const item = (inv.serviceItems || []).find(it => it.id === service.id);
        if (item) actual += item.total || 0;
      });
    }
    const investorShare = getInvestorShareFor(service, investorId);
    return { service, actual, investorShare, shared: investorShareForAmount(investorShare, actual) };
  });
}

function computeInvestorReportData(houseId, month, investorId) {
  const occupiedRoomIds = occupiedRoomIdSet();
  const invoices = state.invoices.filter(i => i.month === month && i.houseId === houseId && occupiedRoomIds.has(i.roomId));
  // Room rent is always sent to the investor in full — it's not part of
  // the per-service opt-in/opt-out system at all.
  const rent = invoices.reduce((s, i) => s + (i.baseRent || 0), 0);

  const serviceTotals = {};
  invoices.forEach(inv => {
    computeInvestorInvoiceBreakdown(inv, investorId).services.forEach(sv => {
      if (!serviceTotals[sv.id]) {
        serviceTotals[sv.id] = { name: sv.name, symbol: sv.symbol, mode: sv.mode, value: sv.value, shared: 0 };
      }
      serviceTotals[sv.id].shared += sv.shared;
    });
  });

  const serviceBreakdown = Object.values(serviceTotals);
  const servicesShared = serviceBreakdown.reduce((s, x) => s + x.shared, 0);

  const expenses = state.investorExpenses
    .filter(e => e.month === month && e.houseId === houseId)
    .reduce((s, e) => s + (e.amount || 0), 0);

  // X = (Tổng tiền nhà + tổng tiền dịch vụ) − chi phí sửa chữa − phần quản
  // lý giữ lại — each house has its own fee arrangement (a % of gross, or
  // a flat VNĐ/month regardless of revenue), since different investors
  // negotiate differently. The full repair cost always comes out of the
  // investor's share alone, never shared with the management cut.
  const house = state.houses.find(h => h.id === houseId);
  const managerFee = (house && house.managerFee) || { mode: 'percent', value: 20 };
  const grossRevenue = rent + servicesShared;
  const managerShare = managerFee.mode === 'fixed' ? (managerFee.value || 0) : grossRevenue * ((managerFee.value || 0) / 100);
  const sharedRevenue = grossRevenue - expenses;
  const computedInvestorShare = grossRevenue - expenses - managerShare;

  // A manual override replaces the formula-computed payout entirely for
  // this one house+month — for the rare case where what was actually
  // agreed/paid doesn't match either formula that month.
  const override = state.investorReportOverrides.find(o => o.houseId === houseId && o.month === month);
  const investorShare = override ? override.amount : computedInvestorShare;

  return {
    invoiceCount: invoices.length, rent, serviceBreakdown, servicesShared, expenses,
    grossRevenue, sharedRevenue, managerFee, managerShare, computedInvestorShare,
    investorShare, override, month
  };
}

// Lets admin flip a service's investorShare on/off (and switch %/fixed)
// right on the report card, scoped to whichever house is selected — no
// trip to Cấu Hình Dịch Vụ needed. Some houses the admin covers utilities
// themselves and shares the money with the investor; others the investor
// pays their own, so this needs to be a quick per-house, per-service
// toggle rather than a one-time global setting.
function renderHouseServiceToggleList(house, month, investorId) {
  const summary = computeHouseServiceSummary(house.id, month, investorId);
  if (summary.length === 0) return '';

  const rows = summary.map(({ service, actual, investorShare, shared }) => {
    const isElec = service.calcType === 'formula' && service.name.includes('Điện');
    const isWater = service.calcType === 'formula' && !isElec;
    const icon = service.symbol || (isElec ? '⚡' : isWater ? '💧' : '📦');
    const showValue = investorShare.enabled && investorShare.mode !== 'full';
    return `
      <div style="display:flex; flex-wrap:wrap; align-items:center; gap:0.6rem; padding:0.6rem 0; border-bottom:1px solid var(--border-color);">
        <label style="display:flex; align-items:center; gap:0.4rem; min-width:180px; cursor:pointer; flex:1;">
          <input type="checkbox" id="svc-enabled-${service.id}" ${investorShare.enabled ? 'checked' : ''} onchange="toggleServiceInvestorFieldsInline('${service.id}')">
          <span>${icon} ${service.name}</span>
        </label>
        <span style="font-size:0.78rem; color:var(--text-secondary); white-space:nowrap;">${t('ir_actual_amount_label')}: ${formatMoney(actual)}đ</span>
        <select id="svc-mode-${service.id}" class="form-control" style="width:auto; min-width:150px; ${investorShare.enabled ? '' : 'display:none;'}" onchange="toggleServiceInvestorFieldsInline('${service.id}')">
          <option value="full" ${investorShare.mode === 'full' ? 'selected' : ''}>${t('option_investor_full')}</option>
          <option value="percent" ${investorShare.mode === 'percent' ? 'selected' : ''}>${t('option_investor_percent')}</option>
          <option value="fixed" ${investorShare.mode === 'fixed' ? 'selected' : ''}>${t('option_investor_fixed')}</option>
        </select>
        <input type="number" id="svc-value-${service.id}" class="form-control" style="width:110px; ${showValue ? '' : 'display:none;'}" value="${investorShare.value || 0}" min="0">
        <button type="button" class="btn btn-secondary btn-sm" onclick="saveServiceInvestorShareInline('${service.id}')"><i data-lucide="save"></i></button>
        <strong style="margin-left:auto; color:var(--cala-blue); white-space:nowrap;">${formatMoney(shared)} đ</strong>
      </div>
    `;
  }).join('');

  return `
    <div style="margin-top:1.25rem; padding:1rem 1.1rem; border-radius:var(--radius-md); background:var(--bg-base); border:1px solid var(--border-color);">
      <div style="font-weight:700; font-size:0.85rem; margin-bottom:0.3rem;">${t('ir_service_toggle_title')}</div>
      <p style="font-size:0.78rem; color:var(--text-secondary); margin-bottom:0.5rem;">${t('ir_service_toggle_desc')}</p>
      ${rows}
    </div>
  `;
}

function toggleServiceInvestorFieldsInline(serviceId) {
  const enabled = document.getElementById(`svc-enabled-${serviceId}`).checked;
  const modeSelect = document.getElementById(`svc-mode-${serviceId}`);
  const valueInput = document.getElementById(`svc-value-${serviceId}`);
  modeSelect.style.display = enabled ? '' : 'none';
  valueInput.style.display = enabled && modeSelect.value !== 'full' ? '' : 'none';
}

async function saveServiceInvestorShareInline(serviceId) {
  const service = state.services.find(s => s.id === serviceId);
  if (!service) return;

  const enabled = document.getElementById(`svc-enabled-${serviceId}`).checked;
  const mode = document.getElementById(`svc-mode-${serviceId}`).value;
  const value = parseFloat(document.getElementById(`svc-value-${serviceId}`).value) || 0;
  // Only ever touches THIS investor's own entry in the map — every other
  // investor who can also see this service keeps whatever's already
  // configured for them, untouched.
  if (!service.investorShare) service.investorShare = {};
  service.investorShare = { ...service.investorShare, [_selectedReportInvestorId]: { enabled, mode, value: mode === 'full' ? 0 : value } };

  const data = await postAndVerify(`${API_BASE}/services/save`, service);
  if (!data) { renderInvestorReport(); return; }
  showToast(t('toast_service_investor_share_saved'), 'success');
  renderInvestorReport();
}

function renderInvestorReportCard(house, d, investorId) {
  const line = (label, value, opts = {}) => `
    <div style="display:flex; justify-content:space-between; gap:1rem; ${opts.style || ''}">
      <span>${label}</span>
      <strong>${opts.prefix || ''}${formatMoney(value)} đ</strong>
    </div>
  `;
  const feeLabel = d.managerFee.mode === 'fixed'
    ? t('ir_of_fixed_label')
    : `${d.managerFee.value}% ${t('ir_of_gross_label')}`;

  return `
    <div class="cala-card">
      <div style="margin-bottom:1.25rem;">
        <h3 style="margin-bottom:0.25rem;">📊 ${house.name}</h3>
        <p style="font-size:0.85rem; color:var(--text-secondary);">${d.invoiceCount} ${t('ir_invoices_counted_label')}</p>
      </div>

      <div style="display:flex; flex-direction:column; gap:0.65rem; font-size:0.92rem;">
        ${line('🏠 ' + t('ir_line_rent'), d.rent)}
        ${d.serviceBreakdown.map(sv => line(
          `${sv.symbol} ${sv.name}${sv.mode !== 'full' ? ` <small style="color:var(--text-secondary);">(${sv.mode === 'percent' ? sv.value + '%' : t('ir_fixed_amount_label')})</small>` : ''}`,
          sv.shared, { prefix: '+' }
        )).join('')}
        <hr style="border-color:var(--border-color); width:100%;">
        ${line(t('ir_line_gross_revenue'), d.grossRevenue, { style: 'font-size:1.05rem; font-weight:800;' })}
        ${line(`${t('ir_line_manager_share')} (${feeLabel})`, d.managerShare, { prefix: '−', style: 'color:var(--cala-red);' })}
        ${line('🔧 ' + t('ir_line_expenses'), d.expenses, { prefix: '−', style: 'color:var(--cala-red);' })}
      </div>

      ${renderHouseServiceToggleList(house, d.month, investorId)}

      <!-- PER-HOUSE MANAGEMENT FEE FORMULA — % of gross or a flat VNĐ/month,
           since each investor's arrangement can differ. -->
      <div style="margin-top:1.25rem; padding:1rem 1.1rem; border-radius:var(--radius-md); background:var(--bg-base); border:1px solid var(--border-color);">
        <div style="font-weight:700; font-size:0.85rem; margin-bottom:0.6rem;">${t('ir_manager_fee_config_title')}</div>
        <div style="display:flex; flex-wrap:wrap; align-items:center; gap:0.6rem;">
          <select id="mf-mode-${house.id}" class="form-control" style="width:auto; min-width:170px;">
            <option value="percent" ${d.managerFee.mode === 'percent' ? 'selected' : ''}>${t('ir_option_percent_of_gross')}</option>
            <option value="fixed" ${d.managerFee.mode === 'fixed' ? 'selected' : ''}>${t('ir_option_fixed_monthly')}</option>
          </select>
          <input type="number" id="mf-value-${house.id}" class="form-control" style="width:150px;" value="${d.managerFee.value}" min="0">
          <button type="button" class="btn btn-secondary btn-sm" onclick="saveHouseManagerFee('${house.id}')"><i data-lucide="save"></i> ${t('btn_save_icon')}</button>
        </div>
      </div>

      <!-- MONTHLY MANUAL OVERRIDE — for the rare month where what's actually
           being reported to the investor doesn't match either formula. -->
      <div style="margin-top:0.85rem; padding:1rem 1.1rem; border-radius:var(--radius-md); background:var(--bg-base); border:1px solid var(--border-color);">
        <div style="font-weight:700; font-size:0.85rem; margin-bottom:0.3rem;">${t('ir_override_title')}</div>
        <p style="font-size:0.78rem; color:var(--text-secondary); margin-bottom:0.6rem;">${t('ir_override_hint')} <strong>${formatMoney(d.computedInvestorShare)} đ</strong></p>
        <div style="display:flex; flex-wrap:wrap; align-items:center; gap:0.6rem;">
          <input type="number" id="override-value-${house.id}" class="form-control" style="width:180px;" value="${d.override ? d.override.amount : ''}" placeholder="${t('ir_override_placeholder')}">
          <button type="button" class="btn btn-secondary btn-sm" onclick="saveInvestorReportOverride('${house.id}')"><i data-lucide="save"></i> ${t('btn_save_icon')}</button>
          ${d.override ? `<button type="button" class="btn btn-secondary btn-sm" onclick="clearInvestorReportOverride('${house.id}')" style="color:var(--cala-red);"><i data-lucide="rotate-ccw"></i> ${t('btn_clear_override')}</button>` : ''}
        </div>
      </div>

      <div style="margin-top:1.25rem; padding:1.25rem; border-radius:var(--radius-lg); background:linear-gradient(135deg, var(--cala-blue-light) 0%, #ffffff 100%); border:1px solid #bce2fd; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
        <div>
          <div style="font-weight:800; color:var(--cala-blue-dark);">${t('ir_line_investor_share')}</div>
          ${d.override ? `<div style="font-size:0.72rem; color:var(--cala-orange); font-weight:700; margin-top:2px;">✏️ ${t('ir_override_active_label')}</div>` : ''}
        </div>
        <div style="font-size:1.6rem; font-weight:800; color:var(--cala-blue);">${formatMoney(d.investorShare)} đ</div>
      </div>
    </div>
  `;
}

async function saveHouseManagerFee(houseId) {
  const mode = document.getElementById(`mf-mode-${houseId}`).value;
  const value = parseFloat(document.getElementById(`mf-value-${houseId}`).value) || 0;
  const house = state.houses.find(h => h.id === houseId);
  if (house) house.managerFee = { mode, value };

  const data = await postAndVerify(`${API_BASE}/houses/manager-fee/save`, { houseId, mode, value });
  if (!data) { renderInvestorReport(); return; }
  showToast(t('toast_manager_fee_saved'), 'success');
  renderInvestorReport();
}

async function saveInvestorReportOverride(houseId) {
  const input = document.getElementById(`override-value-${houseId}`);
  const value = input.value.trim();
  if (value === '') { showToast(t('toast_override_amount_required'), 'error'); return; }
  const amount = parseFloat(value) || 0;
  const month = state.currentMonth;

  const idx = state.investorReportOverrides.findIndex(o => o.houseId === houseId && o.month === month);
  const oObj = { id: `${houseId}_${month}`, houseId, month, amount };
  if (idx >= 0) state.investorReportOverrides[idx] = oObj;
  else state.investorReportOverrides.push(oObj);

  const data = await postAndVerify(`${API_BASE}/investor-report-overrides/save`, { houseId, month, amount });
  if (!data) { renderInvestorReport(); return; }
  showToast(t('toast_override_saved'), 'success');
  renderInvestorReport();
}

async function clearInvestorReportOverride(houseId) {
  const month = state.currentMonth;
  state.investorReportOverrides = state.investorReportOverrides.filter(o => !(o.houseId === houseId && o.month === month));

  const data = await postAndVerify(`${API_BASE}/investor-report-overrides/delete`, { houseId, month });
  if (!data) { renderInvestorReport(); return; }
  showToast(t('toast_override_cleared'), 'success');
  renderInvestorReport();
}

function renderInvestorReportSummaryTable(houses, month) {
  let totalShared = 0, totalExpenses = 0, totalInvestor = 0;
  const rows = houses.map(h => {
    // A house can have more than one investor, each with their own
    // shared-services config — this summary row can only show one set of
    // numbers, so it uses whichever investor comes first for that house
    // (matches renderInvestorReport()'s own default). Open that house on
    // its own (not "Tất Cả Toà Nhà") to switch between investors.
    const houseInvestorId = investorsForHouse(h.id)[0] ? investorsForHouse(h.id)[0].id : null;
    const d = computeInvestorReportData(h.id, month, houseInvestorId);
    totalShared += d.sharedRevenue;
    totalExpenses += d.expenses;
    totalInvestor += d.investorShare;
    return `
      <tr>
        <td><strong>${h.name}</strong></td>
        <td style="text-align:right;">${formatMoney(d.sharedRevenue)} đ</td>
        <td style="text-align:right;">${formatMoney(d.expenses)} đ</td>
        <td style="text-align:right; font-weight:800; color:var(--cala-blue);">${formatMoney(d.investorShare)} đ</td>
      </tr>
    `;
  }).join('');

  return `
    <div class="cala-card">
      <h3 style="margin-bottom:1rem;">${t('ir_summary_title')} — ${formatMonthLabel(month)}</h3>
      <div class="excel-table-wrapper">
        <table class="excel-table">
          <thead>
            <tr>
              <th>${t('col_house')}</th>
              <th style="text-align:right;">${t('ir_line_net_revenue')}</th>
              <th style="text-align:right;">${t('ir_line_expenses')}</th>
              <th style="text-align:right;">${t('ir_line_investor_share')}</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
            <tr style="font-weight:800; background:var(--bg-base);">
              <td>${t('total_label')}</td>
              <td style="text-align:right;">${formatMoney(totalShared)} đ</td>
              <td style="text-align:right;">${formatMoney(totalExpenses)} đ</td>
              <td style="text-align:right; color:var(--cala-blue);">${formatMoney(totalInvestor)} đ</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style="font-size:0.85rem; color:var(--text-secondary); margin-top:0.75rem;">${t('ir_select_house_hint')}</p>
    </div>
  `;
}

// Which investor's own config Báo Cáo Chủ Đầu Tư is currently showing —
// a house can have more than one investor (co-owners), each with their
// OWN independent set of shared services, so this page always has to
// operate on behalf of one specific investor at a time, never "the
// house's investor" as if there could only be one.
let _selectedReportInvestorId = null;

function renderInvestorReport() {
  renderInvestorExpensesTable();

  const container = document.getElementById('investor-report-breakdown-container');
  if (!container) return;

  if (state.houses.length === 0) {
    container.innerHTML = `<div class="cala-card" style="text-align:center; color:var(--text-secondary);">${t('ir_no_house_hint')}</div>`;
    return;
  }

  const month = state.currentMonth;

  if (state.currentHouseId === 'all') {
    container.innerHTML = renderInvestorReportSummaryTable(state.houses, month);
    return;
  }

  const house = state.houses.find(h => h.id === state.currentHouseId);
  if (!house) {
    container.innerHTML = '';
    return;
  }

  const houseInvestors = investorsForHouse(house.id);
  if (!houseInvestors.some(u => u.id === _selectedReportInvestorId)) {
    _selectedReportInvestorId = houseInvestors[0] ? houseInvestors[0].id : null;
  }

  if (!_selectedReportInvestorId) {
    container.innerHTML = `<div class="cala-card" style="text-align:center; color:var(--text-secondary);">${t('ir_no_investor_hint')}</div>`;
    return;
  }

  const d = computeInvestorReportData(house.id, month, _selectedReportInvestorId);
  container.innerHTML = investorSelectorHtml(houseInvestors) + renderInvestorReportCard(house, d, _selectedReportInvestorId);
  renderIcons(container);
}

function investorSelectorHtml(investors) {
  // Nothing to actually pick with 0 or 1 investor — showing a disabled
  // one-option dropdown would just be visual noise; the report card's
  // own house name already makes clear whose numbers these are then.
  if (investors.length <= 1) return '';
  return `
    <div class="cala-card" style="margin-bottom:1rem; display:flex; align-items:center; gap:0.6rem; flex-wrap:wrap;">
      <label style="font-weight:700; font-size:0.85rem; display:flex; align-items:center; gap:0.4rem;"><i data-lucide="user"></i> ${t('ir_select_investor_label')}</label>
      <select class="form-control" style="width:auto; min-width:200px;" onchange="changeReportInvestor(this.value)">
        ${investors.map(u => `<option value="${u.id}" ${u.id === _selectedReportInvestorId ? 'selected' : ''}>${u.fullName || u.username}</option>`).join('')}
      </select>
    </div>
  `;
}

function changeReportInvestor(investorId) {
  _selectedReportInvestorId = investorId;
  renderInvestorReport();
}

function renderInvestorExpensesTable() {
  const tbody = document.getElementById('investor-expenses-table-body');
  if (!tbody) return;

  const month = state.currentMonth;
  const houseId = state.currentHouseId;
  const rows = state.investorExpenses.filter(e => e.month === month && (houseId === 'all' || e.houseId === houseId));

  if (rows.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:1.5rem; color:var(--text-secondary);">${t('ir_expenses_empty')}</td></tr>`;
    return;
  }

  tbody.innerHTML = rows.map(e => {
    const house = state.houses.find(h => h.id === e.houseId);
    return `
      <tr>
        <td>${e.name || e.description} <button type="button" class="btn btn-secondary btn-sm" title="${t('modal_expense_detail_title')}" onclick="viewExpenseDetail('${e.id}')" style="padding:2px 5px; margin-left:0.3rem;"><i data-lucide="circle-alert" style="width:13px; height:13px; pointer-events:none;"></i></button></td>
        <td>${house ? house.name : e.houseId}</td>
        <td style="text-align:right; font-weight:700; color:var(--cala-red);">${formatMoney(e.amount)} đ</td>
        <td style="text-align:right;">
          <div style="display:flex; gap:0.5rem; justify-content:flex-end;">
            ${hasPermission(state.currentUser.role, 'investor_expenses', 'edit') ? `<button class="btn btn-secondary btn-sm" onclick="openEditInvestorExpenseModal('${e.id}')"><i data-lucide="edit-2"></i></button>` : ''}
            ${canDelete() ? `<button class="btn btn-secondary btn-sm" onclick="deleteInvestorExpenseApi('${e.id}')" style="color:var(--cala-red);"><i data-lucide="trash-2"></i></button>` : ''}
          </div>
        </td>
      </tr>
    `;
  }).join('');

  renderIcons(tbody);
}

// Was a single _pendingExpensePhotoDataUrl — an admin adding a repair
// expense often has more than one proof photo to show (the invoice, the
// bank transfer, before/after shots, ...), so this is now a list, same
// max-5-with-individual-remove pattern as ticket/admin-reply images
// (_adminImages).
let _pendingExpenseImages = [];

function renderExpensePhotoPreview() {
  const container = document.getElementById('ie-photo-preview');
  if (!container) return;
  container.innerHTML = _pendingExpenseImages.map((src, i) => `
    <div style="position:relative; display:inline-block;">
      <img src="${src}" onclick="viewDocumentFullSize('${src}')" style="width:64px; height:64px; object-fit:cover; border-radius:var(--radius-sm); cursor:pointer; border:1px solid var(--border-color);">
      <button type="button" onclick="removeExpensePhoto(${i})" style="position:absolute; top:-6px; right:-6px; background:var(--color-danger); color:white; border:none; border-radius:50%; width:18px; height:18px; font-size:10px; cursor:pointer; display:flex; align-items:center; justify-content:center;">×</button>
    </div>
  `).join('') + (_pendingExpenseImages.length < 5 ? `
    <button type="button" class="btn btn-secondary" onclick="document.getElementById('ie-photo-input').click()">
      <i data-lucide="camera"></i> <span data-i18n="btn_upload_photo">${t('btn_upload_photo')}</span>
    </button>
  ` : '');
  renderIcons(container);
}

function handleExpensePhotoSelect(event) {
  const files = Array.from(event.target.files);
  const remaining = 5 - _pendingExpenseImages.length;
  const toAdd = files.slice(0, remaining);

  toAdd.forEach(async file => {
    try {
      const dataUrl = await compressImageFile(file);
      _pendingExpenseImages.push(dataUrl);
      renderExpensePhotoPreview();
    } catch (err) {
      showToast(t(err.message === 'too-large' ? 'toast_image_too_large' : 'toast_image_compress_failed'), 'error');
    }
  });

  if (files.length > remaining) {
    showToast(t('toast_max_expense_images'), 'error');
  }
  event.target.value = '';
}

function removeExpensePhoto(idx) {
  _pendingExpenseImages.splice(idx, 1);
  renderExpensePhotoPreview();
}

// The "!" icon next to an expense's short name (both admin's own table and
// the investor's own dashboard list) opens this to show the fuller note +
// proof photos — kept out of the main line so the investor sees a clean
// "name — amount" row by default and only digs in if they want to.
// e.photos is a same-length array of boolean placeholders once it came
// from the bulk /api/data payload (see Storage.get_investor_expenses_light())
// — only real data: URLs still sitting in memory from this session's own
// just-picked files skip the round trip; everything else fetches the
// real bytes here.
async function fetchInvestorExpensePhotos(expenseId, cached) {
  if (Array.isArray(cached) && cached.every(p => typeof p === 'string' && p.startsWith('data:'))) return cached;
  try {
    const res = await fetch(`${API_BASE}/investor-expenses/photos?expenseId=${encodeURIComponent(expenseId)}`);
    const data = await res.json();
    return data.success ? data.photos : [];
  } catch (err) {
    console.warn('Could not load expense photos:', err);
    return [];
  }
}

async function viewExpenseDetail(expenseId) {
  const e = state.investorExpenses.find(x => x.id === expenseId);
  if (!e) return;
  document.getElementById('expense-detail-name').innerText = e.name || e.description;
  document.getElementById('expense-detail-description').innerText = e.description || t('ir_no_description_hint');
  const photoEl = document.getElementById('expense-detail-photo');
  const expenseDetailModal = document.getElementById('modal-expense-detail');
  const hasPhotos = (e.photos || []).length > 0;
  photoEl.innerHTML = hasPhotos ? `<div style="text-align:center; padding:1rem 0; color:var(--text-secondary);">${t('loading_label')}</div>` : '';
  expenseDetailModal.classList.add('active');
  if (hasPhotos) {
    const photos = await fetchInvestorExpensePhotos(expenseId, e.photos);
    photoEl.innerHTML = photos.length ? `
      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(120px, 1fr)); gap:0.5rem;">
        ${photos.map(p => `<img src="${p}" onclick="viewDocumentFullSize('${p}')" style="width:100%; height:120px; object-fit:cover; border-radius:var(--radius-sm); cursor:pointer; border:1px solid var(--border-color);">`).join('')}
      </div>
    ` : '';
  }
  renderIcons(expenseDetailModal);
}

function openAddInvestorExpenseModal() {
  document.getElementById('ie-id').value = '';
  document.getElementById('ie-house-id').innerHTML = state.houses.map(h => `<option value="${h.id}">${h.name}</option>`).join('');
  if (state.currentHouseId !== 'all') document.getElementById('ie-house-id').value = state.currentHouseId;
  document.getElementById('ie-month').value = state.currentMonth;
  document.getElementById('ie-name').value = '';
  document.getElementById('ie-description').value = '';
  document.getElementById('ie-amount').value = '';
  _pendingExpenseImages = [];
  renderExpensePhotoPreview();
  document.getElementById('modal-investor-expense-title').innerHTML = `<i data-lucide="wrench" style="color: var(--cala-orange); vertical-align: middle;"></i> ${t('modal_add_expense_title')}`;
  const addExpenseModal = document.getElementById('modal-investor-expense');
  addExpenseModal.classList.add('active');
  renderIcons(addExpenseModal);
}

async function openEditInvestorExpenseModal(expenseId) {
  const e = state.investorExpenses.find(x => x.id === expenseId);
  if (!e) return;
  document.getElementById('ie-id').value = e.id;
  document.getElementById('ie-house-id').innerHTML = state.houses.map(h => `<option value="${h.id}">${h.name}</option>`).join('');
  document.getElementById('ie-house-id').value = e.houseId;
  document.getElementById('ie-month').value = e.month;
  document.getElementById('ie-name').value = e.name || '';
  document.getElementById('ie-description').value = e.description;
  document.getElementById('ie-amount').value = e.amount;
  _pendingExpenseImages = (e.photos || []).length ? await fetchInvestorExpensePhotos(expenseId, e.photos) : [];
  renderExpensePhotoPreview();
  document.getElementById('modal-investor-expense-title').innerHTML = `<i data-lucide="wrench" style="color: var(--cala-orange); vertical-align: middle;"></i> ${t('modal_edit_expense_title')}`;
  const editExpenseModal = document.getElementById('modal-investor-expense');
  editExpenseModal.classList.add('active');
  renderIcons(editExpenseModal);
}

async function submitInvestorExpense(event) {
  event.preventDefault();
  const id = document.getElementById('ie-id').value;
  const houseId = document.getElementById('ie-house-id').value;
  const month = document.getElementById('ie-month').value;
  const name = document.getElementById('ie-name').value.trim();
  const description = document.getElementById('ie-description').value.trim();
  const amount = parseFloat(document.getElementById('ie-amount').value) || 0;
  const photos = _pendingExpenseImages;

  const eObj = { id: id || genId('exp_'), houseId, month, name, description, amount, photos };

  const data = await postAndVerify(`${API_BASE}/investor-expenses/save`, eObj);
  if (!data) return;

  const idx = state.investorExpenses.findIndex(x => x.id === eObj.id);
  if (idx >= 0) state.investorExpenses[idx] = { ...state.investorExpenses[idx], ...eObj };
  else state.investorExpenses.push(eObj);

  showToast(t('toast_expense_saved'), 'success');
  closeModal('modal-investor-expense');
  renderInvestorReport();
}

async function deleteInvestorExpenseApi(expenseId) {
  if (!confirm(t('confirm_delete_expense'))) return;
  state.investorExpenses = state.investorExpenses.filter(e => e.id !== expenseId);

  try {
    await fetch(`${API_BASE}/investor-expenses/delete`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: expenseId })
    });
  } catch (err) {
    console.warn('Deleted expense locally:', err);
  }

  showToast(t('toast_expense_deleted'), 'success');
  renderInvestorReport();
}

// Whether user `u` belongs to `targetHouseId` — tenant via their room's
// house, investor/manager via houseIds (possibly ['all']). An account
// with no house info at all (admin/superadmin/saler, or a tenant not yet
// assigned a room) always matches: filtering by house has no meaningful
// answer for it either way, so hiding it would just be confusing rather
// than correct.
function userMatchesHouse(u, targetHouseId) {
  if (targetHouseId === 'all') return true;
  if (u.role === 'tenant') {
    const room = state.rooms.find(r => r.id === u.roomId);
    return !room || room.houseId === targetHouseId;
  }
  const houseIds = u.houseIds && u.houseIds.length ? u.houseIds : (u.houseId ? [u.houseId] : []);
  return houseIds.length === 0 || houseIds.includes('all') || houseIds.includes(targetHouseId);
}

function renderAdminUsers() {
  const tbody = document.getElementById('admin-users-tbody');
  tbody.innerHTML = '';
  const dict = I18N[state.lang] || I18N.vi;

  const filteredUsers = state.users.filter(u => userMatchesHouse(u, state.currentHouseId));

  // Grouped by "Vai Trò" first (staff roles highest → tenant last, the
  // most numerous and the one "Phòng Được Gán" actually means something
  // for), then by "Phòng Được Gán" within the same role — a tenant's
  // room sorted by that room's own position in Quản Lý Phòng (so this
  // list reads top-to-bottom the same order the rooms themselves are
  // arranged in), unassigned accounts sorted last, username as the
  // final tie-break.
  const roleSortOrder = ['superadmin', 'admin', 'manager', 'saler', 'investor', 'tenant'];
  const roomOrderIndex = new Map(state.rooms.map((r, i) => [r.id, i]));
  filteredUsers.sort((a, b) => {
    const roleA = roleSortOrder.indexOf(a.role);
    const roleB = roleSortOrder.indexOf(b.role);
    const rankA = roleA === -1 ? roleSortOrder.length : roleA;
    const rankB = roleB === -1 ? roleSortOrder.length : roleB;
    if (rankA !== rankB) return rankA - rankB;
    const posA = roomOrderIndex.has(a.roomId) ? roomOrderIndex.get(a.roomId) : Infinity;
    const posB = roomOrderIndex.has(b.roomId) ? roomOrderIndex.get(b.roomId) : Infinity;
    if (posA !== posB) return posA - posB;
    return (a.username || '').localeCompare(b.username || '');
  });

  if (filteredUsers.length === 0 && state.users.length > 0 && state.currentHouseId !== 'all') {
    const currentHouse = state.houses.find(h => h.id === state.currentHouseId);
    tbody.innerHTML = `
      <tr><td colspan="7" style="text-align:center; padding:1.5rem; color:var(--text-secondary);">
        ${tFmt('users_empty_for_house', { house: currentHouse ? currentHouse.name : state.currentHouseId })}<br>
        <button type="button" class="btn btn-secondary btn-sm" style="margin-top:0.6rem;" onclick="document.getElementById('users-select-house').value='all'; handleHouseChange(null);">${t('btn_show_all_houses')}</button>
      </td></tr>
    `;
    return;
  }

  filteredUsers.forEach(u => {
    const room = state.rooms.find(r => r.id === u.roomId);
    // Deleting a room now clears roomId off any tenant pointing at it, but
    // older data from before that fix (or a room deleted some other way)
    // can still leave this pointing at nothing — show that plainly instead
    // of the bare, meaningless room id string.
    let roomLabel = room ? room.name : (u.roomId ? `⚠️ ${t('room_deleted_label')}` : t('unassigned_label'));
    if (u.role === 'investor') {
      const investorHouseIds = u.houseIds && u.houseIds.length ? u.houseIds : (u.houseId ? [u.houseId] : []);
      if (investorHouseIds.includes('all')) {
        roomLabel = `🌐 ${t('all_houses_label')}`;
      } else if (investorHouseIds.length) {
        roomLabel = investorHouseIds
          .map(hid => state.houses.find(h => h.id === hid))
          .filter(Boolean)
          .map(h => `📍 ${h.name}`)
          .join(', ') || t('unassigned_label');
      } else {
        roomLabel = t('unassigned_label');
      }
    }

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${u.username}</strong></td>
      <td>${u.fullName}</td>
      <td><span class="badge ${u.role === 'superadmin' ? 'badge-open' : (u.role === 'admin' ? 'badge-pending' : 'badge-resolved')}">${u.role.toUpperCase()}</span></td>
      <td>
        ${u.role === 'tenant' && u.status === 'pending' ? `
          <select id="assign-room-${u.id}" class="form-control" style="width:130px; padding:0.3rem;">
            <option value="">-- ${t('select_room_placeholder')} --</option>
            ${state.rooms.map(r => `<option value="${r.id}">${r.name}</option>`).join('')}
          </select>
        ` : `<strong>${roomLabel}</strong>`}
      </td>
      <td>
        <span class="badge ${u.status === 'approved' ? 'badge-paid' : (u.status === 'pending' ? 'badge-pending' : 'badge-open')}">
          ${u.status === 'approved' ? dict.status_approved : (u.status === 'pending' ? dict.status_pending : dict.status_blocked)}
        </span>
      </td>
      <td><small style="color:var(--text-muted);">${u.createdAt ? statusLabel(u.createdAt) : t('new_label')}</small></td>
      <td>
        <div style="display:flex; gap:0.5rem;">
          ${u.status === 'pending' && hasPermission(state.currentUser.role, 'accounts', 'edit') ? `
            <button class="btn btn-blue btn-sm" onclick="approveUserApi('${u.id}')">
              <i data-lucide="check"></i> ${dict.btn_approve}
            </button>
          ` : ''}
          ${u.id !== 'usr_admin' && u.status !== 'pending' && hasPermission(state.currentUser.role, 'accounts', 'edit') ? (
            u.status === 'approved' ? `
              <button class="btn btn-secondary btn-sm" style="color:var(--cala-orange); border-color:var(--cala-orange);" onclick="setUserActiveApi('${u.id}', false)" title="${t('btn_deactivate')}">
                <i data-lucide="user-x"></i> ${t('btn_deactivate')}
              </button>
            ` : `
              <button class="btn btn-secondary btn-sm" style="color:var(--cala-emerald); border-color:var(--cala-emerald);" onclick="setUserActiveApi('${u.id}', true)" title="${t('btn_activate')}">
                <i data-lucide="user-check"></i> ${t('btn_activate')}
              </button>
            `
          ) : ''}
          ${hasPermission(state.currentUser.role, 'accounts', 'edit') ? `<button class="btn btn-blue btn-sm" onclick="openEditUserModal('${u.id}')">
            <i data-lucide="edit-2"></i> ${t('btn_edit')}
          </button>` : ''}
          ${u.id !== 'usr_admin' && canDelete() ? `
            <button class="btn btn-secondary btn-sm" onclick="deleteUserApi('${u.id}')" style="color:var(--cala-red);">
              <i data-lucide="trash-2"></i> ${dict.btn_delete}
            </button>
          ` : ''}
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
  // switchView() covers this on the first navigation into this screen, but
  // approve/deactivate/save/delete all re-render this table in place
  // afterward without going through switchView again — without this, their
  // buttons' icons (including the new activate/deactivate ones) render as
  // blank <i> tags until the next full view switch.
  renderIcons(tbody);
}

async function approveUserApi(userId) {
  const roomSelect = document.getElementById(`assign-room-${userId}`);
  const roomId = roomSelect ? roomSelect.value : '';

  const data = await postAndVerify(`${API_BASE}/users/approve`, { userId, roomId });
  if (!data) return;

  const user = state.users.find(u => u.id === userId);
  if (user) {
    user.status = 'approved';
    if (roomId) user.roomId = roomId;
  }
  // The room this tenant just got assigned to may already have a
  // different approved tenant account on it — that account just moved
  // out, so the server switches it off automatically. Reflect that
  // locally and let the admin know who.
  applyDeactivatedUsernames(data.deactivatedUsernames);

  showToast(t('toast_user_approved'), 'success');
  renderAdminUsers();
}

// Shared by approve/edit flows — both can trigger the "old tenant on this
// room gets auto-deactivated" side effect (see _deactivate_other_tenants_in_room
// in services.py).
function applyDeactivatedUsernames(usernames) {
  if (!usernames || !usernames.length) return;
  usernames.forEach(username => {
    const u = state.users.find(x => x.username === username);
    if (u) u.status = 'blocked';
  });
  showToast(`${t('toast_previous_tenant_deactivated_prefix')}${usernames.map(u => '@' + u).join(', ')}`, 'info');
}

async function setUserActiveApi(userId, isActive) {
  const user = state.users.find(u => u.id === userId);
  if (user) user.status = isActive ? 'approved' : 'blocked';
  renderAdminUsers();

  try {
    const res = await fetch(`${API_BASE}/users/set-active`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, isActive })
    });
    const data = await res.json();
    if (!data.success) {
      showToast(data.error || t('toast_server_connection_error'), 'error');
      if (user) user.status = isActive ? 'blocked' : 'approved';
      renderAdminUsers();
      return;
    }
  } catch (err) {
    console.warn('Toggled user active state locally:', err);
  }

  showToast(t(isActive ? 'toast_user_activated' : 'toast_user_deactivated'), 'success');
}

async function deleteUserApi(userId) {
  if (!confirm(t('confirm_delete_user'))) return;

  const data = await postAndVerify(`${API_BASE}/users/delete`, { userId });
  if (!data) return;

  state.users = state.users.filter(u => u.id !== userId);
  showToast(t('toast_user_deleted'), 'success');
  renderAdminUsers();
}

function populateHouseOptions(selectEl, includeAllOption) {
  if (!selectEl) return;
  let html = includeAllOption ? `<option value="all">🌐 ${t('all_houses_label')}</option>` : '';
  html += state.houses.map(h => `<option value="${h.id}">${h.name}</option>`).join('');
  selectEl.innerHTML = html;
}

// An investor can be assigned several specific houses (not just one) — a
// checkbox list instead of the single <select> tenants use, since a tenant
// only ever lives in one house/room but an investor may co-own several
// buildings. "Tất cả tòa nhà" is a sentinel ('all') that also auto-covers
// any house added later, so it disables the individual checkboxes below it
// rather than just meaning "every current house checked".
function renderInvestorHouseCheckboxes(containerId, selectedHouseIds) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const isAll = (selectedHouseIds || []).includes('all');
  container.innerHTML = `
    <label style="display:flex; align-items:center; gap:0.5rem; font-weight:700; cursor:pointer;">
      <input type="checkbox" class="investor-house-chk-all" ${isAll ? 'checked' : ''} onchange="toggleInvestorHouseAll(this)">
      🌐 ${t('all_houses_label')}
    </label>
    <div class="investor-house-chk-list" style="display:flex; flex-direction:column; gap:0.4rem; margin-left:1.6rem; ${isAll ? 'opacity:0.5;' : ''}">
      ${state.houses.map(h => `
        <label style="display:flex; align-items:center; gap:0.5rem; cursor:pointer;">
          <input type="checkbox" value="${h.id}" ${isAll ? 'disabled' : ''} ${(selectedHouseIds || []).includes(h.id) ? 'checked' : ''}>
          ${h.name}
        </label>
      `).join('')}
    </div>
  `;
}

function toggleInvestorHouseAll(checkbox) {
  const list = checkbox.parentElement.nextElementSibling;
  if (!list) return;
  list.style.opacity = checkbox.checked ? '0.5' : '1';
  list.querySelectorAll('input[type=checkbox]').forEach(cb => {
    cb.disabled = checkbox.checked;
    if (checkbox.checked) cb.checked = false;
  });
}

function getSelectedInvestorHouseIds(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return [];
  const allChk = container.querySelector('.investor-house-chk-all');
  if (allChk && allChk.checked) return ['all'];
  return Array.from(container.querySelectorAll('.investor-house-chk-list input[type=checkbox]:checked')).map(cb => cb.value);
}

// The server rejects a non-superadmin trying to grant the superadmin role
// anyway (see /api/users/create and /api/users/save), but hiding the
// option here avoids someone picking it and getting a confusing 403.
function hideSuperadminOptionUnlessSelf(selectId) {
  const select = document.getElementById(selectId);
  const opt = select && select.querySelector('option[value="superadmin"]');
  if (opt) opt.style.display = (state.currentUser && state.currentUser.role === 'superadmin') ? '' : 'none';
}

function openCreateUserModal() {
  document.getElementById('form-create-user').reset();
  toggleRoomSelectInCreateModal();
  hideSuperadminOptionUnlessSelf('create-role');
  document.getElementById('modal-create-user').classList.add('active');
}

function handleCreateHouseChange() {
  const houseId = document.getElementById('create-house-id').value;
  const roomSelect = document.getElementById('create-room-id');
  if (!roomSelect) return;
  const filteredRooms = state.rooms.filter(r => r.houseId === houseId);
  roomSelect.innerHTML = filteredRooms.map(r => `<option value="${r.id}">${r.name} (${r.tenant || t('vacant_label')})</option>`).join('');
  toggleCreateDormFields();
}

// The vehicle-service picker + per-person contract dates only make sense
// for a dorm room, where each resident is billed (and may have signed up)
// individually — a single room's one tenant pays one lump-sum total and
// shares the room's own contract dates instead, so there's nothing
// per-person to fill in there.
function toggleCreateDormFields() {
  const room = state.rooms.find(r => r.id === document.getElementById('create-room-id').value);
  const isDorm = !!(room && room.roomType === 'dorm');
  const box = document.getElementById('box-create-dorm-fields');
  if (box) box.style.display = isDorm ? 'block' : 'none';
  if (isDorm) {
    populateVehicleServiceOptions('create-vehicle-service', room, '');
  } else {
    document.getElementById('create-vehicle-service').value = '';
    document.getElementById('create-contract-start').value = '';
    document.getElementById('create-contract-end').value = '';
  }
}

// Lists the fixed-fee services that would actually bill THIS room as a
// vehicle/parking charge (same test calculate_room_services_total()
// itself uses: name contains "xe", or the dedicated per-vehicle unit) —
// a KTX room's residents can be split across more than one of these
// (e.g. "Phí Gửi Xe Máy Chung Cư" vs "...Căn Hộ"), so this is a specific
// service to assign per person, not a plain yes/no.
function populateVehicleServiceOptions(selectId, room, selectedServiceId) {
  const select = document.getElementById(selectId);
  if (!select || !room) return;
  const vehicleServices = state.services.filter(s =>
    s.calcType !== 'formula' &&
    serviceMatchesHouse(s, room.houseId) && serviceMatchesRoom(s, room.id) &&
    ((s.name || '').toLowerCase().includes('xe') || s.unit === 'Theo xe / tháng')
  );
  select.innerHTML = `<option value="">${t('option_no_vehicle')}</option>` +
    vehicleServices.map(s => `<option value="${s.id}" ${s.id === selectedServiceId ? 'selected' : ''}>${s.symbol || '🛵'} ${s.name}</option>`).join('');
  select.value = selectedServiceId || '';
}

function toggleRoomSelectInCreateModal() {
  const role = document.getElementById('create-role').value;
  const isTenant = role === 'tenant';
  const isInvestor = role === 'investor';
  const houseBox = document.getElementById('box-create-assign-house');
  const investorHouseBox = document.getElementById('box-create-investor-houses');
  const roomBox = document.getElementById('box-assign-room');
  if (houseBox) houseBox.style.display = isTenant ? 'block' : 'none';
  if (investorHouseBox) investorHouseBox.style.display = isInvestor ? 'block' : 'none';
  if (roomBox) roomBox.style.display = isTenant ? 'block' : 'none';

  if (isTenant) {
    populateHouseOptions(document.getElementById('create-house-id'), false);
    handleCreateHouseChange();
  } else if (isInvestor) {
    renderInvestorHouseCheckboxes('create-investor-houses-container', []);
  }
}

function openEditUserModal(userId) {
  const u = state.users.find(x => x.id === userId);
  if (!u) return;

  document.getElementById('edit-user-id').value = u.id;
  document.getElementById('edit-username').value = u.username;
  document.getElementById('edit-fullname').value = u.fullName;
  hideSuperadminOptionUnlessSelf('edit-role');
  document.getElementById('edit-role').value = u.role;
  document.getElementById('edit-status').value = u.status;

  toggleRoomSelectInEditModal();

  const houseSelect = document.getElementById('edit-house-id');
  if (u.role === 'investor') {
    // Migration-safe fallback for accounts saved before multi-house
    // support: houseIds is populated server-side from the legacy single
    // houseId when absent, but re-derive here too in case of stale state.
    const investorHouseIds = u.houseIds && u.houseIds.length ? u.houseIds : (u.houseId ? [u.houseId] : []);
    renderInvestorHouseCheckboxes('edit-investor-houses-container', investorHouseIds);
  } else {
    const userRoom = state.rooms.find(r => r.id === u.roomId);
    const userHouseId = userRoom ? userRoom.houseId : (state.houses[0] ? state.houses[0].id : '');
    if (houseSelect && userHouseId) houseSelect.value = userHouseId;
    handleEditHouseChange(u.roomId);
    // handleEditHouseChange() above already calls toggleEditDormFields()
    // to size the box for the room — call it again now with this user's
    // own saved values so a dorm tenant's picker/dates actually prefill
    // instead of resetting to empty every time this modal reopens.
    toggleEditDormFields(u);
  }

  // Clear password field - always blank when modal opens
  const pwdField = document.getElementById('edit-new-password');
  if (pwdField) pwdField.value = '';
  const editUserModal = document.getElementById('modal-edit-user');
  editUserModal.classList.add('active');
  renderIcons(editUserModal);
}

function handleEditHouseChange(selectedRoomId = '') {
  const houseSelect = document.getElementById('edit-house-id');
  const houseId = houseSelect ? houseSelect.value : '';
  const roomSelect = document.getElementById('edit-room-id');
  if (!roomSelect) return;
  const filteredRooms = state.rooms.filter(r => r.houseId === houseId);
  roomSelect.innerHTML = `<option value="">-- ${t('unassigned_none_placeholder')} --</option>` +
    filteredRooms.map(r => `<option value="${r.id}" ${r.id === selectedRoomId ? 'selected' : ''}>${r.name} (${r.tenant || t('vacant_label')})</option>`).join('');
  toggleEditDormFields();
}

function toggleEditDormFields(prefill) {
  const room = state.rooms.find(r => r.id === document.getElementById('edit-room-id').value);
  const isDorm = !!(room && room.roomType === 'dorm');
  const box = document.getElementById('box-edit-dorm-fields');
  if (box) box.style.display = isDorm ? 'block' : 'none';
  if (isDorm) {
    populateVehicleServiceOptions('edit-vehicle-service', room, prefill ? prefill.vehicleServiceId : '');
    document.getElementById('edit-contract-start').value = prefill ? (prefill.contractStart || '') : '';
    document.getElementById('edit-contract-end').value = prefill ? (prefill.contractEnd || '') : '';
  } else {
    document.getElementById('edit-vehicle-service').value = '';
    document.getElementById('edit-contract-start').value = '';
    document.getElementById('edit-contract-end').value = '';
  }
}

function toggleRoomSelectInEditModal() {
  const role = document.getElementById('edit-role').value;
  const isTenant = role === 'tenant';
  const isInvestor = role === 'investor';
  const houseBox = document.getElementById('box-edit-assign-house');
  const investorHouseBox = document.getElementById('box-edit-investor-houses');
  const roomBox = document.getElementById('box-edit-assign-room');
  if (houseBox) houseBox.style.display = isTenant ? 'block' : 'none';
  if (investorHouseBox) investorHouseBox.style.display = isInvestor ? 'block' : 'none';
  if (roomBox) roomBox.style.display = isTenant ? 'block' : 'none';

  if (isTenant) {
    populateHouseOptions(document.getElementById('edit-house-id'), false);
    handleEditHouseChange();
  } else if (isInvestor) {
    renderInvestorHouseCheckboxes('edit-investor-houses-container', []);
  }
}

async function handleAdminSaveUser(event) {
  event.preventDefault();
  const id = document.getElementById('edit-user-id').value;
  const fullName = document.getElementById('edit-fullname').value.trim();
  const role = document.getElementById('edit-role').value;
  const roomId = role === 'tenant' ? document.getElementById('edit-room-id').value : '';
  const houseIds = role === 'investor' ? getSelectedInvestorHouseIds('edit-investor-houses-container') : [];
  const isDormTenant = role === 'tenant' && document.getElementById('box-edit-dorm-fields').style.display !== 'none';
  const vehicleServiceId = isDormTenant ? document.getElementById('edit-vehicle-service').value : '';
  const contractStart = isDormTenant ? document.getElementById('edit-contract-start').value : '';
  const contractEnd = isDormTenant ? document.getElementById('edit-contract-end').value : '';
  const status = document.getElementById('edit-status').value;
  const newPasswordField = document.getElementById('edit-new-password');
  const newPassword = newPasswordField ? newPasswordField.value.trim() : '';

  const payload = { id, fullName, role, roomId, houseIds, vehicleServiceId, contractStart, contractEnd, status };
  if (newPassword) payload.newPassword = newPassword;

  const data = await postAndVerify(`${API_BASE}/users/save`, payload);
  if (!data) return;

  const uIdx = state.users.findIndex(u => u.id === id);
  if (uIdx >= 0) {
    state.users[uIdx].fullName = fullName;
    state.users[uIdx].role = role;
    state.users[uIdx].roomId = roomId;
    state.users[uIdx].houseIds = houseIds;
    state.users[uIdx].houseId = houseIds[0] || '';
    state.users[uIdx].vehicleServiceId = vehicleServiceId;
    state.users[uIdx].contractStart = contractStart;
    state.users[uIdx].contractEnd = contractEnd;
    state.users[uIdx].status = status;
  }
  applyDeactivatedUsernames(data.deactivatedUsernames);

  const msg = newPassword
    ? t('toast_user_updated_with_password')
    : t('toast_user_updated');
  showToast(msg, 'success');
  closeModal('modal-edit-user');
  renderAdminUsers();
}

async function handleAdminCreateUser(event) {
  event.preventDefault();
  const username = document.getElementById('create-username').value.trim();
  const password = document.getElementById('create-password').value.trim();
  const fullName = document.getElementById('create-fullname').value.trim();
  const role = document.getElementById('create-role').value;
  const roomId = role === 'tenant' ? document.getElementById('create-room-id').value : '';
  const houseIds = role === 'investor' ? getSelectedInvestorHouseIds('create-investor-houses-container') : [];
  const isDormTenant = role === 'tenant' && document.getElementById('box-create-dorm-fields').style.display !== 'none';
  const vehicleServiceId = isDormTenant ? document.getElementById('create-vehicle-service').value : '';
  const contractStart = isDormTenant ? document.getElementById('create-contract-start').value : '';
  const contractEnd = isDormTenant ? document.getElementById('create-contract-end').value : '';

  const data = await postAndVerify(`${API_BASE}/users/create`, { username, password, fullName, role, roomId, houseIds, vehicleServiceId, contractStart, contractEnd });
  if (!data) return;

  // Pushes the server's own returned user object rather than a locally-
  // guessed one — the id here is always server-generated (see
  // create_user_by_admin), so a client-side genId('usr_') stand-in would
  // never actually match what got saved.
  state.users.push(data.user);

  showToast(t('toast_user_created'), 'success');
  closeModal('modal-create-user');
  renderAdminUsers();
}

async function renderTenantContractView() {
  const user = state.currentUser;
  const userRoomId = (user && user.roomId) ? user.roomId : (state.rooms[0] ? state.rooms[0].id : 'R101');
  const room = state.rooms.find(r => r.id === userRoomId);
  const container = document.getElementById('tenant-contract-container');
  if (!container) return;

  // switchView() already made this panel visible before this async
  // function got here — without a placeholder, whatever was in this
  // container from the last visit (or nothing, the first time) stays on
  // screen for the length of the fetch below, which reads as a stray
  // blank/stale flash right after tapping the tab.
  container.innerHTML = `<div style="text-align:center; padding:3rem; color:var(--text-secondary);">${t('loading_label')}</div>`;

  // Same reasoning as openRoomDocumentsModal() — the bulk state only ever
  // carries light (no dataUrl) entries now, so this tenant's own contract
  // photos are fetched in full here, once, when they open this tab.
  await fetchRoomDocumentsFull(userRoomId);
  const docs = state.roomDocuments[userRoomId] || [];

  const durationHtml = (room && (room.contractStart || room.contractEnd)) ? `
    <div class="cala-card" style="padding: 1rem 1.25rem; margin-bottom: 1rem; display:flex; align-items:center; gap:0.75rem; flex-wrap:wrap;">
      <i data-lucide="calendar" style="width: 20px; height: 20px; color: var(--cala-blue); flex-shrink:0;"></i>
      <div>
        <div style="font-size: 0.78rem; color: var(--text-muted);">${t('contract_duration_label')}</div>
        <strong>${room.contractStart || '?'} → ${room.contractEnd || t('contract_no_end_date')}</strong>
      </div>
      ${contractStatusBadgeHtml(room)}
    </div>
  ` : '';

  if (docs.length === 0) {
    container.innerHTML = durationHtml + `
      <div class="cala-card" style="padding: 3rem; text-align: center; color: var(--text-secondary);">
        <i data-lucide="file-image" style="width: 48px; height: 48px; color: var(--cala-amber); margin-bottom: 1rem;"></i>
        <h3>${t('contract_empty_title')}</h3>
        <p style="margin-top: 0.5rem;">${t('contract_empty_desc')}</p>
      </div>
    `;
    renderIcons(container);
    return;
  }

  container.innerHTML = durationHtml + `
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1rem;">
      ${docs.map(d => `
        <div class="cala-card" style="padding: 0.85rem; cursor: pointer;" onclick="viewDocumentFullSize('${d.dataUrl}')">
          <img src="${d.dataUrl}" style="width: 100%; height: 160px; object-fit: cover; border-radius: var(--radius-md); margin-bottom: 0.6rem;">
          <div style="font-weight: 700; font-size: 0.9rem;">${d.label}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;">${d.uploadedAt}</div>
        </div>
      `).join('')}
    </div>
  `;
  renderIcons(container);
}

function renderTenantInvoiceView() {
  const user = state.currentUser;
  const userRoomId = (user && user.roomId) ? user.roomId : (state.rooms[0] ? state.rooms[0].id : 'R101');
  const container = document.getElementById('tenant-invoice-container');

  const invoice = state.invoices.find(i => i.month === state.currentMonth && i.roomId === userRoomId);

  if (!invoice) {
    container.innerHTML = `
      <div class="cala-card" style="padding: 3rem; text-align: center; color: var(--text-secondary);">
        <i data-lucide="file-question" style="width: 48px; height: 48px; color: var(--cala-amber); margin-bottom: 1rem;"></i>
        <h3>${t('invoice_empty_title_prefix')}${formatMonthLabel(state.currentMonth)}</h3>
        <p style="margin-top: 0.5rem;">${t('invoice_empty_desc')}</p>
      </div>
    `;
    renderIcons(container);
    return;
  }

  const room = state.rooms.find(r => r.id === invoice.roomId);
  const house = state.houses.find(h => h.id === (room ? room.houseId : ''));
  const houseName = house ? house.name : 'CALACIHOUSE MANAGEMENT';
  const houseAddr = house ? house.address : t('default_house_addr_label');

  // The invoice record holds the whole room's bill (one shared meter, one
  // combined total). For a dorm room that isn't what any one tenant owes —
  // each occupant pays their own rent and their share of electricity
  // separately — so this page (unlike admin's, which needs the room-wide
  // total) shows the individual's portion: per-person rent as configured,
  // electricity divided across headcount, water/services unchanged (never
  // split — see the room-type hint in the room form).
  const isDorm = room && room.roomType === 'dorm';
  const headcount = Math.max(1, (room && room.headcount) || 1);
  const personalRent = isDorm ? (room.baseRent || 0) : invoice.baseRent;
  const personalElec = isDorm ? Math.round((invoice.elecCost || 0) / headcount) : invoice.elecCost;
  const personalTotal = personalRent + personalElec + (invoice.waterCost || 0) + (invoice.otherFees || 0);

  const autoCalc = room ? calculateRoomServiceTotal(room) : { items: [] };
  const itemsList = (invoice.serviceItems && invoice.serviceItems.length > 0) ? invoice.serviceItems : autoCalc.items;

  // elecFormula/waterFormula are only ever non-empty when a matching
  // formula-type service was actually found for this room at invoice-
  // generation time (see _rebuild_invoices in services.py) — an empty
  // one means no such service is configured (deleted, or never set up;
  // e.g. a room billed by "Tiền nước phòng" fixed fee instead of a
  // by-meter service). These rows used to render unconditionally with a
  // hardcoded "1."/"2."/"3." line numbering, showing a stale "Tiền Nước
  // (0 m³)" line for rooms with no water-by-meter service at all.
  let lineNo = 1;
  const rentLineNo = lineNo++;
  const elecLineNo = invoice.elecFormula ? lineNo++ : null;
  const waterLineNo = invoice.waterFormula ? lineNo++ : null;

  let serviceRowsHtml = '';
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
    <div style="display: flex; justify-content: flex-end; gap: 0.6rem; margin-bottom: 1rem; flex-wrap: wrap;">
      <button class="btn btn-secondary" id="btn-toggle-invoice-detail" style="display:none;" onclick="toggleInvoiceDetailView()">
        <i data-lucide="eye"></i> <span>${t('btn_view_calc_detail')}</span>
      </button>
      <button class="btn btn-blue" onclick="window.print()">
        <i data-lucide="printer"></i> ${t('btn_print_invoice')}
      </button>
    </div>

    <div class="invoice-paper">
      <div class="invoice-header-row" style="display:flex; justify-content:space-between; border-bottom:2px solid #e5e9f0; padding-bottom:1.25rem; margin-bottom:1.25rem;">
        <div>
          <h2 class="invoice-header-title" style="font-size: 1.75rem; color: #03121a; font-weight:800;">${t('invoice_paper_title')}</h2>
          <div style="color: #687176;">${t('invoice_id_label')} <strong>${invoice.id}</strong> | ${t('invoice_period_label')} ${formatMonthLabel(invoice.month)}</div>
        </div>
        <div class="invoice-header-meta" style="text-align: right;">
          <div style="font-weight: 800; font-size: 1.1rem; color: #0194f3;">${houseName}</div>
          <div style="font-size: 0.85rem; color: #687176;">📍 ${houseAddr}</div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem; font-size: 0.9rem;">
        <div>
          <div style="color: #687176; font-size: 0.8rem; text-transform: uppercase; font-weight: 700;">${t('tenant_info_label')}</div>
          <div style="font-weight: 800; font-size: 1.15rem; margin-top: 0.25rem; color: #03121a;">${invoice.tenant}</div>
          <div>${t('room_label')} <strong>${invoice.roomName}</strong></div>
        </div>
        <div style="text-align: right;">
          <div style="color: #687176; font-size: 0.8rem; text-transform: uppercase; font-weight: 700;">${t('payment_status_label')}</div>
          <div style="margin-top: 0.25rem;">
            <span class="badge ${invoice.status === 'Đã thanh toán' ? 'badge-paid' : 'badge-pending'}">${statusLabel(invoice.status)}</span>
          </div>
        </div>
      </div>

      <div class="excel-table-wrapper">
      <table class="excel-table" style="color: #03121a; width:100%;">
        <thead>
          <tr style="background:#f7f9fa; color:#43494d;">
            <th style="padding:0.75rem;">${t('col_cost_item')}</th>
            <th style="padding:0.75rem;">${t('col_formula_explanation')}</th>
            <th style="padding:0.75rem; text-align:right;">${t('col_amount_vnd')}</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding:0.75rem; font-weight:bold;">${rentLineNo}. ${t('line_room_rent')}</td><td style="padding:0.75rem;">${roomRentFormulaDescription(room, false)}${rentProrationNoteHtml(invoice)}</td><td style="padding:0.75rem; text-align:right; font-weight:700;">${formatMoney(personalRent)} đ</td></tr>
          ${elecLineNo ? `
          <tr>
            <td style="padding:0.75rem; font-weight:bold;">${elecLineNo}. ⚡ ${t('line_electricity')}
              <button type="button" class="btn btn-sm" title="${t('btn_meter_photo_view')}" style="padding:2px 5px; margin-left:0.35rem;" onclick="openInvoiceMeterPhotos('${invoice.id}')">
                <i data-lucide="camera" style="width:13px; height:13px; pointer-events:none;"></i>
              </button>
            </td>
            <td style="padding:0.75rem;">${t('reading_label')} ${invoice.elecOld} ➔ ${invoice.elecNew} (${invoice.elecUsage} kWh)<br><small style="color:#687176;">${getFormulaDescription(invoice.elecFormula, invoice.elecUsage, isDorm ? headcount : 0)}</small></td>
            <td style="padding:0.75rem; text-align:right; font-weight:700; color:var(--cala-blue);">${formatMoney(personalElec)} đ</td>
          </tr>` : ''}
          ${waterLineNo ? `
          <tr>
            <td style="padding:0.75rem; font-weight:bold;">${waterLineNo}. 💧 ${t('line_water')}
              <button type="button" class="btn btn-sm" title="${t('btn_meter_photo_view')}" style="padding:2px 5px; margin-left:0.35rem;" onclick="openInvoiceMeterPhotos('${invoice.id}')">
                <i data-lucide="camera" style="width:13px; height:13px; pointer-events:none;"></i>
              </button>
            </td>
            <td style="padding:0.75rem;">${t('reading_label')} ${invoice.waterOld} ➔ ${invoice.waterNew} (${invoice.waterUsage} m³)<br><small style="color:#687176;">${getFormulaDescription(invoice.waterFormula, invoice.waterUsage)}</small></td>
            <td style="padding:0.75rem; text-align:right; font-weight:700; color:var(--cala-blue);">${formatMoney(invoice.waterCost)} đ</td>
          </tr>` : ''}
          ${serviceRowsHtml}
        </tbody>
      </table>
      </div>

      <div style="background:#f7f9fa; padding:1.25rem; border-radius:12px; text-align:right; border:1px solid #e5e9f0; margin-top:1.5rem;">
        <div style="font-size: 0.85rem; color: #687176;">${t('grand_total_label')}</div>
        <div style="font-size: 1.65rem; font-weight: 800; color: #ff5e1f;">${formatMoney(personalTotal)} VNĐ</div>
      </div>

      <div class="cala-card" style="margin-top:1.5rem;">
        <h4 style="margin-bottom:0.5rem; color:var(--cala-blue);"><i data-lucide="camera" style="vertical-align:middle;"></i> ${t('lbl_payment_proof')}</h4>
        <p style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:0.75rem;">${t('hint_payment_proof')}</p>
        <div id="payment-proof-preview" style="display:flex; flex-wrap:wrap; gap:0.5rem;"></div>
      </div>
    </div>
  `;
  renderIcons(container);
  // assignedTo is left null — the server always forces a tenant's own
  // uploads to their own user id (see /api/invoices/payment-proof/add),
  // and the GET route already filters the fetch down to 'all' + their
  // own id, so a KTX occupant only ever sees/uploads their own photos
  // here even though the invoice itself is shared by the whole room.
  loadPaymentProofSections([{ containerId: 'payment-proof-preview', assignedTo: null }], invoice.id, true);
}

// Multi-photo proof-of-payment gallery + upload, shared between the
// tenant's own invoice view (one section, server-filtered to their own
// photos) and admin's invoice detail (one section per KTX occupant, so
// each occupant's photos stay visually separated from their roommates'
// even though they share the same room/invoice — see assignedTo on the
// backend). Each add/remove hits the server immediately (no separate
// Save button), same UX as every other single-field auto-save in this
// app.
let _paymentProofSections = {}; // containerId -> { invoiceId, assignedTo, canEdit, photos }

// One GET per invoice (not per section) — a dorm room with several
// occupants renders several sections but they all draw from the same
// server response, split client-side by assignedTo. A null assignedTo
// means "don't filter, show everything the server returned" — used for
// the tenant's own view, where the server itself already filtered the
// response down to 'all' + their own id.
async function loadPaymentProofSections(sections, invoiceId, canEdit) {
  const all = await fetchInvoicePaymentProofs(invoiceId);
  sections.forEach(s => {
    const photos = s.assignedTo ? all.filter(p => (p.assignedTo || 'all') === s.assignedTo) : all;
    _paymentProofSections[s.containerId] = { invoiceId, assignedTo: s.assignedTo, canEdit, photos };
    renderPaymentProofSection(s.containerId);
  });
}

async function fetchInvoicePaymentProofs(invoiceId) {
  try {
    const res = await fetch(`${API_BASE}/invoices/payment-proof/photos?invoiceId=${encodeURIComponent(invoiceId)}`);
    const data = await res.json();
    return data.success ? data.photos : [];
  } catch (err) {
    console.warn('Could not load payment proof photos:', err);
    return [];
  }
}

function renderPaymentProofSection(containerId) {
  const sec = _paymentProofSections[containerId];
  const container = document.getElementById(containerId);
  if (!sec || !container) return;
  const photosHtml = sec.photos.map(p => `
    <div style="position:relative; display:inline-block;">
      <img src="${p.dataUrl}" onclick="viewDocumentFullSize('${p.dataUrl}')" style="width:80px; height:80px; object-fit:cover; border-radius:var(--radius-sm); cursor:pointer; border:1px solid var(--border-color);">
      ${sec.canEdit ? `<button type="button" onclick="removePaymentProofPhoto('${containerId}','${p.id}')" style="position:absolute; top:-6px; right:-6px; background:var(--color-danger); color:white; border:none; border-radius:50%; width:18px; height:18px; font-size:10px; cursor:pointer; display:flex; align-items:center; justify-content:center;">×</button>` : ''}
    </div>
  `).join('');
  const uploadHtml = (sec.canEdit && sec.photos.length < 5) ? `
    <input type="file" accept="image/*" multiple id="${containerId}-input" style="display:none" onchange="handlePaymentProofSelect(event,'${containerId}')">
    <button type="button" class="btn btn-secondary" onclick="document.getElementById('${containerId}-input').click()">
      <i data-lucide="camera"></i> <span>${t('btn_upload_photo')}</span>
    </button>
  ` : '';
  container.innerHTML = (photosHtml + uploadHtml) || `<span style="color:var(--text-secondary); font-size:0.85rem;">${t('meter_photo_empty')}</span>`;
  renderIcons(container);
}

function handlePaymentProofSelect(event, containerId) {
  const sec = _paymentProofSections[containerId];
  if (!sec) return;
  const files = Array.from(event.target.files);
  const remaining = 5 - sec.photos.length;
  const toAdd = files.slice(0, remaining);

  toAdd.forEach(async file => {
    try {
      const dataUrl = await compressImageFile(file);
      await addPaymentProofPhoto(containerId, dataUrl);
    } catch (err) {
      showToast(t(err.message === 'too-large' ? 'toast_image_too_large' : 'toast_image_compress_failed'), 'error');
    }
  });

  if (files.length > remaining) {
    showToast(t('toast_max_expense_images'), 'error');
  }
  event.target.value = '';
}

async function addPaymentProofPhoto(containerId, dataUrl) {
  const sec = _paymentProofSections[containerId];
  if (!sec) return;
  const body = { invoiceId: sec.invoiceId, dataUrl };
  if (sec.assignedTo) body.assignedTo = sec.assignedTo;
  const data = await postAndVerify(`${API_BASE}/invoices/payment-proof/add`, body);
  if (!data || !data.photo) return;
  sec.photos.push({ ...data.photo, dataUrl });
  renderPaymentProofSection(containerId);
  syncInvoicePaymentProofCount(sec.invoiceId);
  showToast(t('toast_payment_proof_saved'), 'success');
}

async function removePaymentProofPhoto(containerId, photoId) {
  const sec = _paymentProofSections[containerId];
  if (!sec) return;
  const data = await postAndVerify(`${API_BASE}/invoices/payment-proof/delete`, { invoiceId: sec.invoiceId, photoId });
  if (!data) return;
  sec.photos = sec.photos.filter(p => p.id !== photoId);
  renderPaymentProofSection(containerId);
  syncInvoicePaymentProofCount(sec.invoiceId);
  showToast(t('toast_payment_proof_saved'), 'success');
}

// Keeps the light state.invoices[].paymentProofPhotos entries (used for
// the camera badge/count in renderAdminInvoices, and for deciding which
// read-only occupant sections to show before their own fetch resolves)
// roughly in sync after an add/remove, without a full fetchState()
// round trip. Only covers whichever sections for this invoice are
// currently loaded (e.g. only the tenant's own section, or only the
// admin occupant sections actually open) — harmless undercount that
// self-corrects on the next data refresh.
function syncInvoicePaymentProofCount(invoiceId) {
  const inv = state.invoices.find(i => i.id === invoiceId);
  if (!inv) return;
  const entries = [];
  Object.values(_paymentProofSections)
    .filter(s => s.invoiceId === invoiceId)
    .forEach(s => s.photos.forEach(p => entries.push({ id: p.id, assignedTo: p.assignedTo || s.assignedTo || 'all', uploadedAt: p.uploadedAt })));
  inv.paymentProofPhotos = entries;
}

// On phones the invoice table defaults to just service name + price (see
// the .show-detail CSS toggle) — this button reveals/hides the calculation
// breakdown column (meter readings, formula used) for tenants who want it.
function toggleInvoiceDetailView() {
  const paper = document.querySelector('.invoice-paper');
  const btn = document.getElementById('btn-toggle-invoice-detail');
  if (!paper) return;
  const showing = paper.classList.toggle('show-detail');
  if (btn) {
    btn.innerHTML = showing
      ? `<i data-lucide="eye-off"></i> <span>${t('btn_hide_calc_detail')}</span>`
      : `<i data-lucide="eye"></i> <span>${t('btn_view_calc_detail')}</span>`;
    renderIcons(btn);
  }
}

function viewInvoiceDetail(invoiceId) {
  const inv = state.invoices.find(i => i.id === invoiceId);
  if (!inv) return;
  const content = document.getElementById('modal-invoice-content');
  // First month a tenant pays, they usually hand cash/transfer straight to
  // the admin and haven't touched the system yet — so whoever can edit
  // invoices should be able to add proof photos here too, not only the
  // tenant from their own invoice view.
  const canEditInvoiceProof = hasPermission(state.currentUser.role, 'invoices', 'edit');

  const room = state.rooms.find(r => r.id === inv.roomId);
  const autoCalc = room ? calculateRoomServiceTotal(room) : { items: [] };
  const itemsList = (inv.serviceItems && inv.serviceItems.length > 0) ? inv.serviceItems : autoCalc.items;

  // Same reasoning as renderTenantInvoiceView(): elecFormula/waterFormula
  // are only non-empty when a matching formula-type service actually
  // exists for this room — an empty one (e.g. water billed via "Tiền
  // nước phòng" fixed fee, no by-meter service configured at all) used
  // to still render a stale "Tiền nước (0 m³) — 0đ" row unconditionally.
  let lineNo = 1;
  const rentLineNo = lineNo++;
  const elecLineNo = inv.elecFormula ? lineNo++ : null;
  const waterLineNo = inv.waterFormula ? lineNo++ : null;

  let serviceRowsHtml = '';
  itemsList.forEach(item => {
    serviceRowsHtml += `<tr><td>${lineNo++}. ${item.symbol || '📦'} ${item.name} (${item.unit})</td><td style="text-align:right;">${formatMoney(item.total)} đ</td></tr>`;
  });

  const ppSections = paymentProofSections(inv, room);
  const ppVisible = ppSections.filter(s => canEditInvoiceProof || s.count > 0);
  const paymentProofBlockHtml = ppVisible.length ? `
    <div style="margin-top:1.25rem;">
      ${canEditInvoiceProof ? `<p style="font-size:0.8rem; color:var(--text-secondary); margin:0 0 0.25rem;">${t(ppSections.length > 1 ? 'hint_payment_proof_per_occupant' : 'hint_payment_proof_admin')}</p>` : ''}
      ${ppVisible.map(s => paymentProofCardHtml(s, canEditInvoiceProof)).join('')}
    </div>
  ` : '';

  content.innerHTML = `
    <div class="invoice-paper" style="box-shadow:none; border:1px solid var(--border-color);">
      <h3 style="color:#03121a;">${t('invoice_detail_title_prefix')}${inv.roomName}</h3>
      <div style="margin:1rem 0;">${t('tenant_colon_label')} <strong>${inv.tenant}</strong> (${inv.phone})</div>
      <table class="excel-table" style="color:#03121a;">
        <tr><td>${rentLineNo}. ${t('line_room_rent_short')}${room && room.roomType === 'dorm' ? `<br><small style="color:#687176;">${roomRentFormulaDescription(room, true)}</small>` : ''}${rentProrationNoteHtml(inv)}</td><td style="text-align:right;">${formatMoney(inv.baseRent)} đ</td></tr>
        ${elecLineNo ? `
        <tr><td>${elecLineNo}. ⚡ ${t('line_electricity_short')} (${inv.elecUsage} kWh)
          <button type="button" class="btn btn-sm" title="${t('btn_meter_photo_view')}" style="padding:2px 5px; margin-left:0.35rem;" onclick="openInvoiceMeterPhotos('${inv.id}')">
            <i data-lucide="camera" style="width:13px; height:13px; pointer-events:none;"></i>
          </button>
        </td><td style="text-align:right;">${formatMoney(inv.elecCost)} đ</td></tr>` : ''}
        ${waterLineNo ? `
        <tr><td>${waterLineNo}. 💧 ${t('line_water_short')} (${inv.waterUsage} m³)
          <button type="button" class="btn btn-sm" title="${t('btn_meter_photo_view')}" style="padding:2px 5px; margin-left:0.35rem;" onclick="openInvoiceMeterPhotos('${inv.id}')">
            <i data-lucide="camera" style="width:13px; height:13px; pointer-events:none;"></i>
          </button>
        </td><td style="text-align:right;">${formatMoney(inv.waterCost)} đ</td></tr>` : ''}
        ${serviceRowsHtml}
        <tr style="font-weight:bold; font-size:1.2rem;"><td>${t('total_label_short')}</td><td style="text-align:right; color:#ff5e1f;">${formatMoney(inv.totalAmount)} đ</td></tr>
      </table>
      ${paymentProofBlockHtml}
    </div>
  `;
  document.getElementById('modal-invoice-detail').classList.add('active');
  renderIcons(content);
  if (ppVisible.length) loadPaymentProofSections(ppVisible, inv.id, canEditInvoiceProof);
}

// A KTX/dorm room's one invoice is shared by every occupant, so their
// proof photos are kept visually separate — one gallery per occupant —
// instead of one pile everybody's photos get dumped into. A normal
// (single-tenant) room just gets the one gallery, tagged to that
// tenant (or 'all' if the room currently has no resolvable tenant
// account, e.g. vacant).
function paymentProofSections(inv, room) {
  const isDorm = !!(room && room.roomType === 'dorm');
  const occupants = isDorm ? getRoomTenants(room.id) : [];
  const countFor = (assignedTo) => (inv.paymentProofPhotos || []).filter(p => (p.assignedTo || 'all') === assignedTo).length;
  if (isDorm && occupants.length > 1) {
    const sections = occupants.map(u => ({
      containerId: `pp-${inv.id}-${u.id}`,
      assignedTo: u.id,
      label: u.fullName || u.username,
      count: countFor(u.id)
    }));
    const sharedCount = countFor('all');
    if (sharedCount > 0) {
      sections.push({ containerId: `pp-${inv.id}-all`, assignedTo: 'all', label: t('lbl_payment_proof_shared'), count: sharedCount });
    }
    return sections;
  }
  const assignedTo = occupants[0] ? occupants[0].id : 'all';
  return [{ containerId: `pp-${inv.id}-${assignedTo}`, assignedTo, label: null, count: countFor(assignedTo) }];
}

function paymentProofCardHtml(section, canEdit) {
  if (!canEdit && section.count === 0) return '';
  const title = section.label ? `${t('lbl_payment_proof')} — ${section.label}` : t('lbl_payment_proof');
  return `
    <div class="cala-card" style="margin-top:0.75rem;">
      <h4 style="margin-bottom:0.4rem; color:var(--cala-blue); font-size:0.95rem;"><i data-lucide="camera" style="vertical-align:middle;"></i> ${title}</h4>
      <div id="${section.containerId}" style="display:flex; flex-wrap:wrap; gap:0.5rem;">
        <div style="color:var(--text-secondary); font-size:0.85rem;">${t('loading_label')}</div>
      </div>
    </div>
  `;
}

// Investor-facing counterpart to viewInvoiceDetail() — the investor's own
// account must only ever see what's actually configured to be shared with
// them (room rent always in full, each service per its investorShare
// setting), never the tenant's real total.
function viewInvestorInvoiceDetail(invoiceId) {
  const inv = state.invoices.find(i => i.id === invoiceId);
  if (!inv) return;
  const content = document.getElementById('modal-invoice-content');
  const breakdown = computeInvestorInvoiceBreakdown(inv, state.currentUser.id);

  let lineNo = 1;
  let rowsHtml = `<tr><td>${lineNo++}. 🏠 ${t('line_room_rent_short')}</td><td style="text-align:right;">${formatMoney(breakdown.rent)} đ</td></tr>`;
  breakdown.services.forEach(sv => {
    rowsHtml += `<tr><td>${lineNo++}. ${sv.symbol} ${sv.name}${sv.unit ? ` (${sv.unit})` : ''}</td><td style="text-align:right;">${formatMoney(sv.shared)} đ</td></tr>`;
  });

  content.innerHTML = `
    <div class="invoice-paper" style="box-shadow:none; border:1px solid var(--border-color);">
      <h3 style="color:#03121a;">${t('invoice_detail_title_prefix')}${inv.roomName}</h3>
      <div style="margin:1rem 0;">${t('tenant_colon_label')} <strong>${inv.tenant}</strong></div>
      <table class="excel-table" style="color:#03121a;">
        ${rowsHtml}
        <tr style="font-weight:bold; font-size:1.2rem;"><td>${t('total_label_short')}</td><td style="text-align:right; color:#ff5e1f;">${formatMoney(breakdown.total)} đ</td></tr>
      </table>
    </div>
  `;
  document.getElementById('modal-invoice-detail').classList.add('active');
  renderIcons(content);
}

function previewRoomInvoice(roomId) {
  generateAndSendAllInvoices();
  const room = state.rooms.find(r => r.id === roomId);
  const invoiceId = formatInvoiceId(room ? room.name : roomId, state.currentMonth);
  viewInvoiceDetail(invoiceId);
}

/* =====================================================================
   ROOM MANAGEMENT VIEW
===================================================================== */
function renderRoomsManagement() {
  const commissionInput = document.getElementById('saler-commission-percent');
  if (commissionInput && document.activeElement !== commissionInput) {
    commissionInput.value = state.salerCommissionPercent || '';
  }

  const container = document.getElementById('rooms-management-container');
  if (!container) return;

  if (state.rooms.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding:3rem; color:var(--text-secondary);">${t('rooms_empty_state')}</div>`;
    return;
  }

  // Group by house — rooms stay in the exact order state.rooms already
  // has them in (server-side sort_order, see moveRoom()/reorderRoomsApi()
  // below), no re-derived sort here anymore. This used to re-sort every
  // house's rooms by the numeric part of the room name on every render,
  // which would have silently undone any manual reordering the moment
  // this page re-rendered.
  const byHouse = {};
  state.rooms.forEach(r => {
    const hid = r.houseId || 'unknown';
    if (!byHouse[hid]) byHouse[hid] = [];
    byHouse[hid].push(r);
  });

  // Houses themselves are walked in state.houses's own order (also
  // server-sorted) rather than Object.keys(byHouse) — that would reflect
  // whatever order houses happened to be first *encountered* while
  // looping over rooms above, not the admin's actual arranged house
  // order. Any room whose houseId doesn't match a known house (orphaned
  // reference) still gets a trailing group so it's never silently
  // dropped from the page.
  const orderedHouseIds = state.houses.map(h => h.id);
  Object.keys(byHouse).forEach(hid => { if (!orderedHouseIds.includes(hid)) orderedHouseIds.push(hid); });

  let html = '';
  orderedHouseIds.forEach((hid, houseIdx) => {
    const rooms = byHouse[hid];
    if (!rooms || rooms.length === 0) return;
    const house = state.houses.find(h => h.id === hid);
    html += `
      <div style="margin-bottom: 1.5rem;">
        <div style="font-size: 1rem; font-weight: 800; color: var(--cala-blue); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
          <i data-lucide="building-2" style="width:18px;height:18px;"></i>
          ${house ? house.name : hid}
          <span class="badge badge-resolved" style="font-size:0.7rem;">${rooms.length} ${t('rooms_unit_label')}</span>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem;">
          ${rooms.map((r, roomIdx) => `
            <div class="cala-card drag-reorder-row" style="position:relative; padding: 1.1rem 1.25rem;" ${hasPermission(state.currentUser.role, 'rooms', 'edit') ? `draggable="true" ondragstart="dragRowStart('rooms','${r.id}')" ondragover="dragRowOver(event)" ondragleave="dragRowLeave(event)" ondrop="dragRowDrop(event,'rooms','${r.id}')" ondragend="dragRowEnd(event)"` : ''}>
              <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.6rem;">
                <div style="display:flex; align-items:flex-start; gap:0.5rem; min-width:0;">
                  ${hasPermission(state.currentUser.role, 'rooms', 'edit') ? `
                  <i data-lucide="grip-vertical" class="drag-handle-grip" title="${t('title_drag_to_reorder')}"></i>
                  <div style="display:flex; flex-direction:column; gap:1px; flex-shrink:0; margin-top:2px;">
                    <button type="button" class="btn btn-secondary btn-sm" style="padding:1px 4px;" title="${t('title_move_up')}" ${roomIdx === 0 ? 'disabled' : ''} onclick="moveRoom('${r.id}', -1)"><i data-lucide="chevron-up" style="width:12px;height:12px;pointer-events:none;"></i></button>
                    <button type="button" class="btn btn-secondary btn-sm" style="padding:1px 4px;" title="${t('title_move_down')}" ${roomIdx === rooms.length - 1 ? 'disabled' : ''} onclick="moveRoom('${r.id}', 1)"><i data-lucide="chevron-down" style="width:12px;height:12px;pointer-events:none;"></i></button>
                  </div>
                  ` : ''}
                  <div style="min-width:0;">
                    <div style="font-weight:800; font-size:1rem;">${r.name}</div>
                    <div style="font-size:0.8rem; color:var(--text-secondary);">${r.tenant || t('no_tenant_label')} ${r.phone ? '· ' + r.phone : ''}</div>
                  </div>
                </div>
                ${hasPermission(state.currentUser.role, 'rooms', 'edit') ? `
                <label class="switch-toggle" onclick="event.preventDefault(); toggleRoomActive('${r.id}');" title="${r.tenant ? t('tooltip_deactivate_room') : t('tooltip_activate_room')}">
                  <input type="checkbox" ${r.tenant ? 'checked' : ''} readonly>
                  <span class="switch-slider"></span>
                </label>
                ` : `<span class="badge ${r.tenant ? 'badge-paid' : 'badge-open'}" style="font-size:0.68rem;">${r.tenant ? t('status_occupied') : t('vacant_label')}</span>`}
              </div>
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.4rem; font-size:0.82rem; margin-bottom:0.75rem;">
                <div><span style="color:var(--text-muted);">${t('rent_price_label')}</span><br><strong>${formatMoney(r.baseRent)}đ/${t('per_month_label')}</strong></div>
                <div><span style="color:var(--text-muted);">${t('headcount_label')}</span><br><strong>${r.headcount || 1} ${t('formula_per_person_label')}</strong></div>
                ${r.roomType === 'dorm' && r.capacity ? `<div><span style="color:var(--text-muted);">${t('capacity_label')}</span><br><strong>${r.capacity} ${t('formula_per_person_label')}</strong></div>` : ''}
                <div><span style="color:var(--text-muted);">🛵 ${t('lbl_room_vehicle_count_short')}</span><br><strong>${r.vehicleCount || 0}</strong></div>
              </div>
              ${r.roomType === 'dorm' ? dormOccupantContractsHtml(r) : (r.contractStart || r.contractEnd ? `
                <div style="display:flex; align-items:center; gap:0.4rem; font-size:0.78rem; color:var(--text-secondary); margin-bottom:0.75rem;">
                  <i data-lucide="calendar" style="width:13px; height:13px; flex-shrink:0;"></i>
                  <span>${r.contractStart || '?'} → ${r.contractEnd || t('contract_no_end_date')}</span>
                  ${contractStatusBadgeHtml(r)}
                </div>
              ` : '')}
              <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
                ${hasPermission(state.currentUser.role, 'rooms', 'edit') ? `<button class="btn btn-blue btn-sm" style="flex:1; justify-content:center;" onclick="openEditRoomModal('${r.id}')">
                  <i data-lucide="edit-2"></i> ${t('btn_edit')}
                </button>` : ''}
                <button class="btn btn-orange btn-sm" style="flex:1; justify-content:center;" onclick="openRoomDocumentsModal('${r.id}')">
                  <i data-lucide="image"></i> ${t('contract_photos_label')}${(state.roomDocuments[r.id] || []).length ? ` (${(state.roomDocuments[r.id] || []).length})` : ''}
                </button>
                ${canDelete() ? `<button class="btn btn-secondary btn-sm" style="color:var(--color-danger); border-color:var(--color-danger);" onclick="deleteRoom('${r.id}')">
                  <i data-lucide="trash-2"></i>
                </button>` : ''}
              </div>
              <button class="btn btn-secondary btn-sm" style="width:100%; justify-content:center; margin-top:0.5rem;" onclick="openRoomPhotosModal('${r.id}')">
                <i data-lucide="camera"></i> ${t('btn_room_photos')}${(state.roomPhotos[r.id] || []).length ? ` (${(state.roomPhotos[r.id] || []).length})` : ''}
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  renderIcons(container);
}

// Moves one room up/down within its own house's group (direction is -1 or
// +1) — swaps it with the adjacent room, then rebuilds state.rooms as one
// flat list (every house in its current order, each house's rooms in
// their now-updated order) and persists that exact sequence as
// everyone's sort_order. A single flat sort_order this way is enough on
// its own to reproduce the same nesting anywhere else rooms are listed
// (Bảng Tính, Hóa Đơn, ...) — no separate per-house numbering needed.
async function moveRoom(roomId, direction) {
  const room = state.rooms.find(r => r.id === roomId);
  if (!room) return;
  const hid = room.houseId || 'unknown';
  const houseRooms = state.rooms.filter(r => (r.houseId || 'unknown') === hid);
  const idx = houseRooms.findIndex(r => r.id === roomId);
  const swapIdx = idx + direction;
  if (swapIdx < 0 || swapIdx >= houseRooms.length) return;

  // Swap by finding each room's position in the real state.rooms array
  // (houseRooms is a filtered copy) and exchanging them there.
  const realIdxA = state.rooms.findIndex(r => r.id === houseRooms[idx].id);
  const realIdxB = state.rooms.findIndex(r => r.id === houseRooms[swapIdx].id);
  [state.rooms[realIdxA], state.rooms[realIdxB]] = [state.rooms[realIdxB], state.rooms[realIdxA]];

  renderRoomsManagement();
  await reorderRoomsApi();
}

async function reorderRoomsApi() {
  const data = await postAndVerify(`${API_BASE}/rooms/reorder`, { roomIds: state.rooms.map(r => r.id) });
  if (!data) return;
}

// Drag handlers are only ever wired up between two rooms rendered inside
// the same house's own sublist (see renderRoomsManagement()'s rooms.map
// above), so moving fromId to sit at toId's position in the flat
// state.rooms array can't cross into a different house's block.
async function reorderRoomsByDrag(fromId, toId) {
  if (!arrayMoveBeforeTarget(state.rooms, fromId, toId)) return;
  renderRoomsManagement();
  await reorderRoomsApi();
}

// Manager-only page for submitting the new electricity meter reading photo
// — deliberately narrower than the admin Bảng Tính spreadsheet (only
// elecNew + its photo, card layout like Quản Lý Phòng) and backed by its
// own 'meter_readings' permission instead of 'services':'edit', so a
// manager doesn't also gain rights to edit service/formula config. Once a
// room is marked Hoàn Thành its photo is locked — see elecPhotoButtonHtml.
function renderManagerMeterPhotos() {
  const container = document.getElementById('meter-photos-container');
  if (!container) return;

  const rooms = getFilteredRooms();
  if (rooms.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding:3rem; color:var(--text-secondary);">${t('rooms_empty_state')}</div>`;
    return;
  }

  // Rooms stay in state.rooms's own order (server-side sort_order, same
  // admin-arranged order as Quản Lý Phòng) — no re-derived numeric-name
  // sort here anymore. Houses are walked in state.houses's own order too,
  // not just whichever order they were first encountered in above.
  const byHouse = {};
  rooms.forEach(r => {
    const hid = r.houseId || 'unknown';
    if (!byHouse[hid]) byHouse[hid] = [];
    byHouse[hid].push(r);
  });
  const orderedHouseIds = state.houses.map(h => h.id);
  Object.keys(byHouse).forEach(hid => { if (!orderedHouseIds.includes(hid)) orderedHouseIds.push(hid); });

  const monthReadings = state.readings[state.currentMonth] || {};

  let html = '';
  orderedHouseIds.forEach(hid => {
    const houseRooms = byHouse[hid];
    if (!houseRooms || houseRooms.length === 0) return;
    const house = state.houses.find(h => h.id === hid);
    html += `
      <div style="margin-bottom: 1.5rem;">
        <div style="font-size: 1rem; font-weight: 800; color: var(--cala-blue); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
          <i data-lucide="building-2" style="width:18px;height:18px;"></i>
          ${house ? house.name : hid}
          <span class="badge badge-resolved" style="font-size:0.7rem;">${houseRooms.length} ${t('rooms_unit_label')}</span>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem;">
          ${houseRooms.map(r => {
            const rd = monthReadings[r.id] || {};
            const locked = !!rd.elecPhotoLocked;
            const elecNew = rd.elecNew || 0;
            const elecNewPhoto = rd.elecNewPhoto || '';
            return `
              <div class="cala-card" style="padding: 1.1rem 1.25rem;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.75rem;">
                  <div>
                    <div style="font-weight:800; font-size:1rem;">${r.name}</div>
                    <div style="font-size:0.8rem; color:var(--text-secondary);">${r.tenant || t('no_tenant_label')}</div>
                  </div>
                  ${locked ? `<span class="badge badge-resolved" style="font-size:0.68rem; white-space:nowrap; display:flex; align-items:center; gap:3px;"><i data-lucide="lock" style="width:11px;height:11px;"></i> ${t('mp_locked_badge')}</span>` : ''}
                </div>
                <label style="font-size:0.78rem; color:var(--text-muted); font-weight:700;">${t('mp_elec_new_label')}</label>
                <div style="display:flex; gap:0.5rem; align-items:center; margin:0.35rem 0 0.85rem;">
                  <input type="number" class="form-control" style="flex:1;" value="${elecNew}" ${locked ? 'disabled' : ''}
                    onchange="saveElecReadingField('${r.id}', 'elecNew', this.value)">
                  ${elecPhotoButtonHtml(r.id, elecNewPhoto, locked)}
                </div>
                ${!locked ? `
                  <button class="btn btn-orange btn-sm" style="width:100%; justify-content:center;" onclick="completeElecReading('${r.id}')">
                    <i data-lucide="check-circle"></i> ${t('mp_btn_complete')}
                  </button>
                ` : `
                  <div style="text-align:center; font-size:0.78rem; color:var(--cala-emerald); font-weight:700;">
                    ${t('mp_locked_note')}
                  </div>
                `}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  renderIcons(container);
}

function elecPhotoButtonHtml(roomId, photoDataUrl, locked) {
  const inputId = `elec-photo-input-${roomId}`;
  const hasPhoto = !!photoDataUrl;
  if (locked) {
    // No file input at all while locked — nothing to click into except
    // viewing the existing photo (view-only branch inside viewElecPhoto).
    // Locked only ever happens once a photo has actually been uploaded and
    // marked Hoàn Thành, so this is always the has-photo state.
    return `
      <button type="button" class="photo-toggle-btn has-photo"
        title="${t('btn_meter_photo_view')}" onclick="viewElecPhoto('${roomId}')">
        <i data-lucide="camera"></i>
      </button>
    `;
  }
  return `
    <input type="file" accept="image/*" id="${inputId}" style="display:none" onchange="handleElecPhotoUpload(event, '${roomId}')">
    <button type="button" class="photo-toggle-btn${hasPhoto ? ' has-photo' : ''}"
      title="${hasPhoto ? t('btn_meter_photo_view') : t('btn_meter_photo_upload')}"
      onclick="${hasPhoto ? `viewElecPhoto('${roomId}')` : `document.getElementById('${inputId}').click()`}">
      <i data-lucide="camera"></i>
    </button>
  `;
}

async function viewElecPhoto(roomId) {
  const rd = (state.readings[state.currentMonth] || {})[roomId] || {};
  const cached = rd.elecNewPhoto;
  if (!cached) return;
  const locked = !!rd.elecPhotoLocked;
  const inputId = `elec-photo-input-${roomId}`;
  const content = document.getElementById('modal-elec-photo-content');
  document.getElementById('modal-elec-photo').classList.add('active');
  if (!content) return;
  const dataUrl = typeof cached === 'string' && cached.startsWith('data:')
    ? cached
    : await fetchReadingPhoto(state.currentMonth, roomId, 'elecNewPhoto');
  if (!dataUrl) return;
  content.innerHTML = `
    <img src="${dataUrl}" style="width:100%; border-radius:var(--radius-md);">
    ${!locked ? `
      <div style="display:flex; gap:0.5rem; margin-top:0.75rem;">
        <input type="file" accept="image/*" id="${inputId}" style="display:none" onchange="handleElecPhotoUpload(event, '${roomId}')">
        <button type="button" class="btn btn-sm" style="flex:1; justify-content:center;" onclick="document.getElementById('${inputId}').click()">
          <i data-lucide="upload"></i> ${t('btn_meter_photo_replace')}
        </button>
        <button type="button" class="btn btn-sm" style="flex:1; justify-content:center; color:var(--color-danger); border-color:var(--color-danger);" onclick="deleteElecPhoto('${roomId}')">
          <i data-lucide="trash-2"></i> ${t('mp_btn_delete_photo')}
        </button>
      </div>
    ` : `
      <div style="margin-top:0.75rem; font-size:0.8rem; color:var(--text-muted); text-align:center; display:flex; align-items:center; justify-content:center; gap:5px;">
        <i data-lucide="lock" style="width:14px;height:14px;"></i> ${t('mp_locked_note')}
      </div>
    `}
  `;
  renderIcons(content);
}

async function saveElecReadingField(roomId, field, value) {
  if (!state.readings[state.currentMonth]) state.readings[state.currentMonth] = {};
  if (!state.readings[state.currentMonth][roomId]) state.readings[state.currentMonth][roomId] = {};
  state.readings[state.currentMonth][roomId][field] = field.endsWith('Photo') ? value : (parseFloat(value) || 0);

  const data = await postAndVerify(`${API_BASE}/readings/elec-photo/save`, { month: state.currentMonth, roomId, field, value });
  if (!data) return;
  renderManagerMeterPhotos();
}

async function handleElecPhotoUpload(event, roomId) {
  const file = event.target.files[0];
  event.target.value = '';
  if (!file) return;
  try {
    const dataUrl = await compressImageFile(file);
    await saveElecReadingField(roomId, 'elecNewPhoto', dataUrl);
    closeModal('modal-elec-photo');
  } catch (err) {
    showToast(t(err.message === 'too-large' ? 'toast_image_too_large' : 'toast_image_compress_failed'), 'error');
  }
}

async function deleteElecPhoto(roomId) {
  const ok = await showConfirmModal(t('mp_confirm_delete_photo'), { danger: true, okLabel: t('btn_delete') });
  if (!ok) return;
  await saveElecReadingField(roomId, 'elecNewPhoto', '');
  closeModal('modal-elec-photo');
}

async function completeElecReading(roomId) {
  const rd = (state.readings[state.currentMonth] || {})[roomId] || {};
  if (!rd.elecNewPhoto) {
    showToast(t('mp_need_photo_first'), 'error');
    return;
  }
  const ok = await showConfirmModal(t('mp_confirm_complete'), { okLabel: t('mp_btn_complete') });
  if (!ok) return;
  try {
    const res = await fetch(`${API_BASE}/readings/elec-photo/complete`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ month: state.currentMonth, roomId })
    });
    const data = await res.json();
    if (data.success) {
      if (!state.readings[state.currentMonth]) state.readings[state.currentMonth] = {};
      state.readings[state.currentMonth][roomId] = data.reading;
      showToast(t('mp_toast_completed'), 'success');
    } else {
      showToast(data.error || t('mp_toast_locked_error'), 'error');
    }
  } catch (err) {
    showToast(t('mp_toast_locked_error'), 'error');
  }
  renderManagerMeterPhotos();
}

// Saler portal — the backend already filters state.rooms down to vacant
// rooms only (see get_full_state's 'saler' branch in services.py), so
// everything here is public-safe: no tenant/phone/contract data ever
// reaches this render.
function renderSalerRooms() {
  const container = document.getElementById('saler-rooms-container');
  if (!container) return;

  if (state.rooms.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding:3rem; color:var(--text-secondary);">${t('saler_rooms_empty_state')}</div>`;
    return;
  }

  // One flat overview list (not grouped into per-house sections) — house
  // name is shown inline on each row instead, since a saler scans across
  // all houses at once looking for "which room, what price" first and
  // only expands the ones worth a closer look. Already in the admin-
  // arranged order (server-side sort_order, house then room) — no
  // re-derived sort needed here.
  const rooms = state.rooms;

  const servicePriceHtml = s => {
    if (s.calcType === 'formula') {
      return `<span class="badge badge-pending" style="font-size:0.68rem;">🧮 x = ${s.customFormula || '?'}</span>`;
    }
    return `<span class="badge badge-paid" style="font-size:0.68rem;">${formatMoney(s.price)} đ${s.unit ? ' / ' + s.unit : ''}</span>`;
  };

  container.innerHTML = `
    <div style="display:flex; flex-direction:column; gap:0.75rem;">
      ${rooms.map(r => {
        const house = state.houses.find(h => h.id === r.houseId);
        const roomServices = state.services.filter(s => serviceMatchesHouse(s, r.houseId) && serviceMatchesRoom(s, r.id));
        const photos = state.roomPhotos[r.id] || [];
        return `
        <div class="cala-card" style="padding: 0; overflow: hidden;">
          <div style="display:flex; justify-content:space-between; align-items:center; gap:0.75rem; padding:1rem 1.25rem; cursor:pointer;" onclick="toggleSalerRoomDetail('${r.id}')">
            <div style="display:flex; align-items:center; gap:0.75rem; min-width:0;">
              <div style="font-weight:800; font-size:1rem; white-space:nowrap;">${r.name}</div>
              <span style="font-size:0.8rem; color:var(--text-secondary); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;"><i data-lucide="building-2" style="width:13px; height:13px; vertical-align:-2px;"></i> ${house ? house.name : ''}</span>
            </div>
            <div style="display:flex; align-items:center; gap:0.85rem; flex-shrink:0;">
              <strong style="color:var(--cala-orange); white-space:nowrap;">${formatMoney(r.baseRent)}đ/${t('per_month_label')}</strong>
              <button type="button" class="btn btn-secondary btn-sm" id="saler-room-toggle-${r.id}" style="padding:0.35rem; transition: transform 0.15s ease;">
                <i data-lucide="chevron-down" style="pointer-events:none;"></i>
              </button>
            </div>
          </div>
          <div id="saler-room-detail-${r.id}" style="display:none; padding: 0 1.25rem 1.25rem; border-top:1px solid var(--border-color);">
            <div id="saler-room-photos-${r.id}" data-photo-count="${photos.length}">${photos.length ? '' : '<div style="margin-top:0.9rem;"></div>'}</div>
            <div style="display:flex; justify-content:flex-end; margin-bottom:0.6rem;">
              <span class="badge badge-open" style="font-size:0.7rem;">${typeof r.missingCount === 'number' ? `${t('saler_missing_label')} ${r.missingCount}` : t('vacant_label')}</span>
            </div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.4rem; font-size:0.82rem; margin-bottom:0.75rem;">
              <div><span style="color:var(--text-muted);">${t('rent_price_label')}</span><br><strong>${formatMoney(r.baseRent)}đ/${t('per_month_label')}</strong></div>
              ${r.capacity ? `<div><span style="color:var(--text-muted);">${t('capacity_label')}</span><br><strong>${r.capacity} ${t('formula_per_person_label')}</strong></div>` : ''}
              ${typeof r.missingCount === 'number' ? `<div><span style="color:var(--text-muted);">${t('saler_missing_label')}</span><br><strong style="color:var(--cala-red);">${r.missingCount} ${t('formula_per_person_label')}</strong></div>` : ''}
              ${r.area ? `<div><span style="color:var(--text-muted);">${t('saler_area_label')}</span><br><strong>${r.area} m²</strong></div>` : ''}
            </div>
            ${r.deposit && state.salerCommissionPercent ? `
              <div class="cala-card" style="background: var(--cala-blue-light); padding:0.6rem 0.85rem; margin-bottom:0.75rem; display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:0.78rem; color:var(--cala-blue-dark);">${t('saler_commission_label')}</span>
                <strong style="color:var(--cala-blue-dark);">${formatMoney(r.deposit * state.salerCommissionPercent / 100)}đ</strong>
              </div>
            ` : ''}
            ${r.description ? `<div style="font-size:0.82rem; color:var(--text-secondary); margin-bottom:0.75rem; white-space:pre-wrap;">${r.description}</div>` : ''}
            ${roomServices.length ? `
              <div style="border-top: 1px solid var(--border-color); padding-top:0.6rem;">
                <div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:0.4rem;">${t('saler_services_label')}</div>
                <div style="display:flex; flex-wrap:wrap; gap:0.4rem;">
                  ${roomServices.map(s => `
                    <span style="display:inline-flex; align-items:center; gap:0.3rem; font-size:0.78rem;">
                      ${s.symbol || '📦'} ${s.name} ${servicePriceHtml(s)}
                    </span>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>
        </div>
      `;
      }).join('')}
    </div>
  `;
  renderIcons(container);
}

// Rooms a saler is browsing whose photos have already been fetched in
// full this session — avoids re-fetching every time the same room's card
// is collapsed and re-expanded.
const _salerPhotosLoaded = new Set();

function renderSalerRoomPhotosStrip(roomId) {
  const stripEl = document.getElementById(`saler-room-photos-${roomId}`);
  if (!stripEl) return;
  const photos = state.roomPhotos[roomId] || [];
  stripEl.innerHTML = photos.length ? `
    <div style="display:flex; gap:0.4rem; overflow-x:auto; margin:0.9rem 0 0.75rem;">
      ${photos.map(p => `<img src="${p.dataUrl}" onclick="viewDocumentFullSize('${p.dataUrl}')" style="width:84px; height:84px; object-fit:cover; border-radius:var(--radius-sm); cursor:pointer; flex-shrink:0;">`).join('')}
    </div>
  ` : '<div style="margin-top:0.9rem;"></div>';
}

async function toggleSalerRoomDetail(roomId) {
  const detail = document.getElementById(`saler-room-detail-${roomId}`);
  const toggleBtn = document.getElementById(`saler-room-toggle-${roomId}`);
  if (!detail) return;
  const isOpen = detail.style.display !== 'none';
  detail.style.display = isOpen ? 'none' : 'block';
  if (toggleBtn) toggleBtn.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';

  // Fetch this room's actual photo bytes only the first time it's opened —
  // state.roomPhotos starts out light (id/label/uploadedAt only, see
  // get_full_state's _light_photo_map) so every room's listing photos
  // don't have to load up front for a saler just scanning names/prices.
  const stripEl = document.getElementById(`saler-room-photos-${roomId}`);
  const hasPhotos = stripEl && Number(stripEl.dataset.photoCount) > 0;
  if (!isOpen && hasPhotos && !_salerPhotosLoaded.has(roomId)) {
    _salerPhotosLoaded.add(roomId);
    await fetchRoomPhotosFull(roomId);
    renderSalerRoomPhotosStrip(roomId);
  }
}

/* =====================================================================
   ROOM DOCUMENTS — CONTRACT & RELATED IMAGES (ADMIN UPLOAD / TENANT VIEW)
===================================================================== */
let _currentDocRoomId = null;
let _pendingDocDataUrl = null;

// Replaces the light (no dataUrl) entries state.roomDocuments[roomId] came
// with in the bulk /api/data payload with the real, full ones (including
// each photo's actual base64 data) for just this one room — see
// get_full_state's _light_photo_map and the /api/rooms/documents/<id>
// route.
async function fetchRoomDocumentsFull(roomId) {
  try {
    const res = await fetch(`${API_BASE}/rooms/documents/${roomId}`);
    const data = await res.json();
    if (data.success) state.roomDocuments[roomId] = data.documents;
  } catch (err) {
    console.warn('Could not fetch full room documents:', err);
  }
}

async function fetchRoomPhotosFull(roomId) {
  try {
    const res = await fetch(`${API_BASE}/rooms/photos/${roomId}`);
    const data = await res.json();
    if (data.success) state.roomPhotos[roomId] = data.photos;
  } catch (err) {
    console.warn('Could not fetch full room photos:', err);
  }
}

// Tenant accounts sharing one roomId — only meaningfully more than one
// entry for a dorm/KTX room, where a document's visibility actually needs
// choosing rather than defaulting to "the room's one tenant".
function getRoomTenants(roomId) {
  return state.users.filter(u => u.role === 'tenant' && u.roomId === roomId);
}

async function openRoomDocumentsModal(roomId) {
  _currentDocRoomId = roomId;
  _pendingDocDataUrl = null;
  const room = state.rooms.find(r => r.id === roomId);
  const titleEl = document.getElementById('room-documents-modal-title');
  if (titleEl) titleEl.innerText = room ? `${t('contract_photos_label')} - ${room.name}` : t('contract_photos_label');

  const labelInput = document.getElementById('room-document-label');
  if (labelInput) labelInput.value = '';
  const previewEl = document.getElementById('room-document-pending-preview');
  if (previewEl) previewEl.innerHTML = '';

  // Only worth showing "who can see this" when there's an actual choice —
  // a room with 0 or 1 tenant account has no roommate to hide anything
  // from, so this stays hidden and every upload just defaults to 'all'.
  const roomTenants = getRoomTenants(roomId);
  const assignWrap = document.getElementById('room-document-assign-wrap');
  const assignSelect = document.getElementById('room-document-assigned-to');
  if (assignWrap && assignSelect) {
    if (roomTenants.length > 1) {
      assignSelect.innerHTML = `<option value="all">${t('document_visible_all_members')}</option>` +
        roomTenants.map(u => `<option value="${u.id}">${u.fullName || u.username}</option>`).join('');
      assignWrap.style.display = 'block';
    } else {
      assignWrap.style.display = 'none';
    }
  }

  // Room-level contract dates only mean anything for a single room's one
  // tenant — a KTX room's occupants each get their own instead (see
  // renderRoomOccupantsConfig), shown in place of this box.
  const isDorm = !!(room && room.roomType === 'dorm');
  const durationBox = document.getElementById('room-contract-duration-box');
  const occupantsBox = document.getElementById('room-occupants-config-box');
  if (durationBox) durationBox.style.display = isDorm ? 'none' : 'block';
  if (occupantsBox) occupantsBox.style.display = isDorm ? 'block' : 'none';
  if (isDorm) {
    renderRoomOccupantsConfig(roomId);
  } else {
    const startInput = document.getElementById('room-contract-start');
    const endInput = document.getElementById('room-contract-end');
    if (startInput) startInput.value = (room && room.contractStart) || '';
    if (endInput) endInput.value = (room && room.contractEnd) || '';
  }

  // The bulk /api/data payload only ever carries id/label/uploadedAt for
  // these (see get_full_state's _light_photo_map) — the actual image
  // bytes for this one room are fetched here, only when its modal is
  // actually opened, instead of every room's photos loading on every page
  // load regardless of whether anyone ever looks at them.
  await fetchRoomDocumentsFull(roomId);

  renderRoomDocumentsList();
  const roomDocsModal = document.getElementById('modal-room-documents');
  roomDocsModal.classList.add('active');
  renderIcons(roomDocsModal);
}

// KTX room's own per-occupant settings — vehicle service + contract dates
// — right inside the room's own modal instead of having to go edit each
// tenant account separately in Quản Lý Tài Khoản. Each row saves on its
// own via /api/users/save (same route the account-edit form already
// uses), carrying that tenant's other existing fields forward untouched.
function renderRoomOccupantsConfig(roomId) {
  const container = document.getElementById('room-occupants-config-list');
  if (!container) return;
  const room = state.rooms.find(r => r.id === roomId);
  const occupants = getRoomTenants(roomId);

  if (occupants.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding:1rem; color:var(--text-secondary); font-size:0.85rem;">${t('room_occupants_empty_state')}</div>`;
    return;
  }

  // Saving here goes through /api/users/save (update_user_by_admin),
  // gated server-side by accounts:edit — a role with rooms:edit but not
  // accounts:edit (a Manager scoped narrowly, say) could otherwise see a
  // working-looking Lưu button that just 403s every time.
  const canEditAccounts = hasPermission(state.currentUser.role, 'accounts', 'edit');
  container.innerHTML = occupants.map(u => `
    <div class="cala-card" style="padding:0.75rem; margin-bottom:0.6rem;">
      <div style="font-weight:700; font-size:0.9rem; margin-bottom:0.5rem;">${u.fullName || u.username}</div>
      <label style="font-size:0.75rem; color:var(--text-secondary); display:block; margin-bottom:0.25rem;">${t('lbl_vehicle_service')}</label>
      <select id="occ-vehicle-${u.id}" class="form-control" style="margin-bottom:0.5rem;" ${canEditAccounts ? '' : 'disabled'}></select>
      <div style="display:flex; gap:0.5rem;">
        <div style="flex:1;">
          <label style="font-size:0.72rem; color:var(--text-secondary); display:block; margin-bottom:0.25rem;">${t('lbl_contract_start')}</label>
          <input type="date" id="occ-start-${u.id}" class="form-control" value="${u.contractStart || ''}" ${canEditAccounts ? '' : 'disabled'}>
        </div>
        <div style="flex:1;">
          <label style="font-size:0.72rem; color:var(--text-secondary); display:block; margin-bottom:0.25rem;">${t('lbl_contract_end')}</label>
          <input type="date" id="occ-end-${u.id}" class="form-control" value="${u.contractEnd || ''}" ${canEditAccounts ? '' : 'disabled'}>
        </div>
      </div>
      ${canEditAccounts ? `
      <button type="button" class="btn btn-blue btn-sm" style="margin-top:0.5rem; width:100%; justify-content:center;" onclick="saveOccupantSettings('${u.id}')">
        <i data-lucide="save"></i> ${t('btn_save_icon')}
      </button>
      ` : ''}
    </div>
  `).join('');

  occupants.forEach(u => populateVehicleServiceOptions(`occ-vehicle-${u.id}`, room, u.vehicleServiceId));
  renderIcons(container);
}

async function saveOccupantSettings(userId) {
  const u = state.users.find(x => x.id === userId);
  if (!u) return;
  const vehicleServiceId = document.getElementById(`occ-vehicle-${userId}`).value;
  const contractStart = document.getElementById(`occ-start-${userId}`).value;
  const contractEnd = document.getElementById(`occ-end-${userId}`).value;

  // Sends this tenant's other existing fields along unchanged — /api/users/save
  // (update_user_by_admin) expects a full profile update, not a partial patch.
  const payload = {
    id: u.id, fullName: u.fullName, role: u.role, roomId: u.roomId, status: u.status,
    houseIds: u.houseIds, vehicleServiceId, contractStart, contractEnd
  };
  const data = await postAndVerify(`${API_BASE}/users/save`, payload);
  if (!data) return;

  u.vehicleServiceId = vehicleServiceId;
  u.contractStart = contractStart;
  u.contractEnd = contractEnd;
  showToast(t('toast_occupant_settings_saved'), 'success');
  renderRoomsManagement();
}

async function saveRoomContractDates() {
  if (!_currentDocRoomId) return;
  const startInput = document.getElementById('room-contract-start');
  const endInput = document.getElementById('room-contract-end');
  const contractStart = startInput ? startInput.value : '';
  const contractEnd = endInput ? endInput.value : '';

  try {
    const res = await fetch(`${API_BASE}/rooms/contract/save`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ roomId: _currentDocRoomId, contractStart, contractEnd })
    });
    const data = await res.json();
    if (data.success) {
      const room = state.rooms.find(r => r.id === _currentDocRoomId);
      if (room) { room.contractStart = contractStart; room.contractEnd = contractEnd; }
      renderRoomsManagement();
      showToast(t('toast_contract_duration_saved'), 'success');
    } else {
      showToast(data.error || t('toast_upload_error'), 'error');
    }
  } catch (err) {
    showToast(t('toast_server_connection_error'), 'error');
  }
}

// Days-left math is local-date based (no time component) so "today" always
// reads as 0 days left rather than drifting negative from time-of-day.
function contractStatusBadgeHtml(room) {
  if (!room || !room.contractEnd) return '';
  const end = new Date(room.contractEnd + 'T00:00:00');
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const daysLeft = Math.round((end - today) / 86400000);
  if (daysLeft < 0) {
    return `<span class="badge badge-open" style="font-size:0.68rem;">${t('contract_status_expired')}</span>`;
  }
  if (daysLeft <= 30) {
    return `<span class="badge badge-pending" style="font-size:0.68rem;">${t('contract_status_expiring_soon')} · ${daysLeft} ${t('contract_days_left_suffix')}</span>`;
  }
  return '';
}

// A KTX room's occupants can each have signed up at a different time —
// the room's own single contractStart/End (still used for a single room)
// can't represent that, so this lists every current approved tenant on
// this room with their OWN contract dates + the same expiring-soon/
// expired badge contractStatusBadgeHtml() already draws per-room.
function dormOccupantContractsHtml(room) {
  const occupants = state.users.filter(u => u.role === 'tenant' && u.status === 'approved' && u.roomId === room.id && (u.contractStart || u.contractEnd));
  if (occupants.length === 0) return '';
  return `
    <div style="font-size:0.78rem; color:var(--text-secondary); margin-bottom:0.75rem;">
      <div style="font-weight:700; margin-bottom:0.3rem; display:flex; align-items:center; gap:0.3rem;">
        <i data-lucide="calendar" style="width:13px; height:13px;"></i> ${t('lbl_dorm_occupant_contracts')}
      </div>
      ${occupants.map(u => `
        <div style="display:flex; justify-content:space-between; align-items:center; gap:0.4rem; padding:0.2rem 0;">
          <span>${u.fullName || u.username}: ${u.contractStart || '?'} → ${u.contractEnd || t('contract_no_end_date')}</span>
          ${contractStatusBadgeHtml(u)}
        </div>
      `).join('')}
    </div>
  `;
}

async function handleRoomDocumentSelect(event) {
  const file = event.target.files[0];
  event.target.value = '';
  if (!file) return;
  try {
    _pendingDocDataUrl = await compressImageFile(file);
    const previewEl = document.getElementById('room-document-pending-preview');
    if (previewEl) {
      previewEl.innerHTML = `<img src="${_pendingDocDataUrl}" style="width:90px; height:90px; object-fit:cover; border-radius:var(--radius-sm); border:2px solid var(--cala-blue);">`;
    }
  } catch (err) {
    showToast(t(err.message === 'too-large' ? 'toast_image_too_large' : 'toast_image_compress_failed'), 'error');
  }
}

async function uploadRoomDocument() {
  if (!_currentDocRoomId) return;
  if (!_pendingDocDataUrl) { showToast(t('toast_select_image_first'), 'error'); return; }

  const labelInput = document.getElementById('room-document-label');
  const label = (labelInput && labelInput.value.trim()) || t('default_document_label');
  const assignWrap = document.getElementById('room-document-assign-wrap');
  const assignSelect = document.getElementById('room-document-assigned-to');
  const assignedTo = (assignWrap && assignWrap.style.display !== 'none' && assignSelect) ? assignSelect.value : 'all';

  try {
    const res = await fetch(`${API_BASE}/rooms/documents/upload`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ roomId: _currentDocRoomId, label, dataUrl: _pendingDocDataUrl, assignedTo })
    });
    const data = await res.json();
    if (data.success) {
      if (!state.roomDocuments[_currentDocRoomId]) state.roomDocuments[_currentDocRoomId] = [];
      state.roomDocuments[_currentDocRoomId].push(data.document);
      _pendingDocDataUrl = null;
      if (labelInput) labelInput.value = '';
      const previewEl = document.getElementById('room-document-pending-preview');
      if (previewEl) previewEl.innerHTML = '';
      renderRoomDocumentsList();
      renderRoomsManagement();
      showToast(t('toast_document_added'), 'success');
    } else {
      showToast(data.error || t('toast_upload_error'), 'error');
    }
  } catch (err) {
    showToast(t('toast_server_connection_error'), 'error');
  }
}

async function deleteRoomDocument(docId) {
  if (!_currentDocRoomId) return;
  if (!confirm(t('confirm_delete_document'))) return;

  try {
    const res = await fetch(`${API_BASE}/rooms/documents/delete`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ roomId: _currentDocRoomId, id: docId })
    });
    const data = await res.json();
    if (data.success) {
      state.roomDocuments[_currentDocRoomId] = (state.roomDocuments[_currentDocRoomId] || []).filter(d => d.id !== docId);
      renderRoomDocumentsList();
      renderRoomsManagement();
      showToast(t('toast_document_deleted'), 'success');
    }
  } catch (err) {
    showToast(t('toast_server_connection_error'), 'error');
  }
}

function renderRoomDocumentsList() {
  const container = document.getElementById('room-documents-list');
  if (!container || !_currentDocRoomId) return;
  const docs = state.roomDocuments[_currentDocRoomId] || [];

  if (docs.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding:1.5rem; color:var(--text-secondary); font-size:0.85rem;">${t('room_documents_empty_state')}</div>`;
    return;
  }

  const roomTenants = getRoomTenants(_currentDocRoomId);
  // Only worth a "who sees this" control at all when there's more than
  // one tenant account on the room to choose between.
  const showAssign = roomTenants.length > 1;

  container.innerHTML = docs.map(d => {
    const assignedTo = d.assignedTo || 'all';
    const assignedUser = roomTenants.find(u => u.id === assignedTo);
    return `
    <div class="cala-card" style="padding:0.75rem; display:flex; align-items:center; gap:0.75rem; margin-bottom:0.6rem; flex-wrap:wrap;">
      <img src="${d.dataUrl}" onclick="viewDocumentFullSize('${d.dataUrl}')" style="width:56px; height:56px; object-fit:cover; border-radius:var(--radius-sm); cursor:pointer; flex-shrink:0;">
      <div style="flex:1; min-width:120px;">
        <div style="font-weight:700; font-size:0.9rem;">${d.label}</div>
        <div style="font-size:0.75rem; color:var(--text-muted);">${d.uploadedAt}</div>
        ${showAssign ? `
          <div style="margin-top:0.4rem; display:flex; align-items:center; gap:0.4rem;">
            <i data-lucide="eye" style="width:13px; height:13px; color:var(--text-muted); flex-shrink:0;"></i>
            <select class="form-control" style="font-size:0.75rem; padding:0.25rem 0.5rem; height:auto;" onchange="reassignRoomDocument('${d.id}', this.value)">
              <option value="all" ${assignedTo === 'all' ? 'selected' : ''}>${t('document_visible_all_members')}</option>
              ${roomTenants.map(u => `<option value="${u.id}" ${assignedTo === u.id ? 'selected' : ''}>${u.fullName || u.username}</option>`).join('')}
            </select>
          </div>
        ` : (assignedUser ? `<div style="font-size:0.72rem; color:var(--cala-blue); margin-top:0.2rem;">👁️ ${assignedUser.fullName || assignedUser.username}</div>` : '')}
      </div>
      ${canDelete() ? `<button type="button" class="btn btn-secondary btn-sm" style="color:var(--color-danger); border-color:var(--color-danger);" onclick="deleteRoomDocument('${d.id}')">
        <i data-lucide="trash-2"></i>
      </button>` : ''}
    </div>
  `;
  }).join('');
  renderIcons(container);
}

async function reassignRoomDocument(docId, assignedTo) {
  if (!_currentDocRoomId) return;
  const doc = (state.roomDocuments[_currentDocRoomId] || []).find(d => d.id === docId);
  if (doc) doc.assignedTo = assignedTo;
  const data = await postAndVerify(`${API_BASE}/rooms/documents/assign`, { roomId: _currentDocRoomId, id: docId, assignedTo });
  if (!data) { await fetchRoomDocumentsFull(_currentDocRoomId); renderRoomDocumentsList(); return; }
  showToast(t('toast_document_visibility_updated'), 'success');
}

// Used by every "click a photo thumbnail to see it bigger" spot that
// isn't the ticket-photo call sites (which already call
// openImageLightbox directly): room documents, room photos, investor
// expense receipts, tenant's own contract photos. All of these used to
// open a brand new browser tab and write the image into it — same fix as
// tickets, same shared popup, instead of a second, inconsistent
// mechanism.
function viewDocumentFullSize(dataUrl) {
  openImageLightbox(dataUrl);
}

/* =====================================================================
   ROOM PHOTOS — PUBLIC LISTING PHOTOS SHOWN TO THE SALER ROLE
   (separate from room documents above, which are private contract scans)
===================================================================== */
let _currentPhotoRoomId = null;
let _pendingPhotoDataUrl = null;

async function openRoomPhotosModal(roomId) {
  _currentPhotoRoomId = roomId;
  _pendingPhotoDataUrl = null;
  const room = state.rooms.find(r => r.id === roomId);
  const titleEl = document.getElementById('room-photos-modal-title');
  if (titleEl) titleEl.innerText = room ? `${t('btn_room_photos')} - ${room.name}` : t('btn_room_photos');

  const labelInput = document.getElementById('room-photo-label');
  if (labelInput) labelInput.value = '';
  const previewEl = document.getElementById('room-photo-pending-preview');
  if (previewEl) previewEl.innerHTML = '';

  await fetchRoomPhotosFull(roomId);

  renderRoomPhotosList();
  const roomPhotosModal = document.getElementById('modal-room-photos');
  roomPhotosModal.classList.add('active');
  renderIcons(roomPhotosModal);
}

async function handleRoomPhotoSelect(event) {
  const file = event.target.files[0];
  event.target.value = '';
  if (!file) return;
  try {
    _pendingPhotoDataUrl = await compressImageFile(file);
    const previewEl = document.getElementById('room-photo-pending-preview');
    if (previewEl) {
      previewEl.innerHTML = `<img src="${_pendingPhotoDataUrl}" style="width:90px; height:90px; object-fit:cover; border-radius:var(--radius-sm); border:2px solid var(--cala-blue);">`;
    }
  } catch (err) {
    showToast(t(err.message === 'too-large' ? 'toast_image_too_large' : 'toast_image_compress_failed'), 'error');
  }
}

async function uploadRoomPhoto() {
  if (!_currentPhotoRoomId) return;
  if (!_pendingPhotoDataUrl) { showToast(t('toast_select_image_first'), 'error'); return; }

  const labelInput = document.getElementById('room-photo-label');
  const label = (labelInput && labelInput.value.trim()) || '';

  try {
    const res = await fetch(`${API_BASE}/rooms/photos/upload`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ roomId: _currentPhotoRoomId, label, dataUrl: _pendingPhotoDataUrl })
    });
    const data = await res.json();
    if (data.success) {
      if (!state.roomPhotos[_currentPhotoRoomId]) state.roomPhotos[_currentPhotoRoomId] = [];
      state.roomPhotos[_currentPhotoRoomId].push(data.photo);
      _pendingPhotoDataUrl = null;
      if (labelInput) labelInput.value = '';
      const previewEl = document.getElementById('room-photo-pending-preview');
      if (previewEl) previewEl.innerHTML = '';
      renderRoomPhotosList();
      renderRoomsManagement();
      showToast(t('toast_photo_added'), 'success');
    } else {
      showToast(data.error || t('toast_upload_error'), 'error');
    }
  } catch (err) {
    showToast(t('toast_server_connection_error'), 'error');
  }
}

async function deleteRoomPhoto(photoId) {
  if (!_currentPhotoRoomId) return;
  if (!confirm(t('confirm_delete_photo'))) return;

  try {
    const res = await fetch(`${API_BASE}/rooms/photos/delete`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ roomId: _currentPhotoRoomId, id: photoId })
    });
    const data = await res.json();
    if (data.success) {
      state.roomPhotos[_currentPhotoRoomId] = (state.roomPhotos[_currentPhotoRoomId] || []).filter(p => p.id !== photoId);
      renderRoomPhotosList();
      renderRoomsManagement();
      showToast(t('toast_photo_deleted'), 'success');
    }
  } catch (err) {
    showToast(t('toast_server_connection_error'), 'error');
  }
}

function renderRoomPhotosList() {
  const container = document.getElementById('room-photos-list');
  if (!container || !_currentPhotoRoomId) return;
  const photos = state.roomPhotos[_currentPhotoRoomId] || [];

  if (photos.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding:1.5rem; color:var(--text-secondary); font-size:0.85rem;">${t('room_photos_empty_state')}</div>`;
    return;
  }

  container.innerHTML = photos.map(p => `
    <div class="cala-card" style="padding:0.75rem; display:flex; align-items:center; gap:0.75rem; margin-bottom:0.6rem;">
      <img src="${p.dataUrl}" onclick="viewDocumentFullSize('${p.dataUrl}')" style="width:56px; height:56px; object-fit:cover; border-radius:var(--radius-sm); cursor:pointer; flex-shrink:0;">
      <div style="flex:1; min-width:0;">
        <div style="font-weight:700; font-size:0.9rem;">${p.label || t('btn_room_photos')}</div>
        <div style="font-size:0.75rem; color:var(--text-muted);">${p.uploadedAt}</div>
      </div>
      ${canDelete() ? `<button type="button" class="btn btn-secondary btn-sm" style="color:var(--color-danger); border-color:var(--color-danger);" onclick="deleteRoomPhoto('${p.id}')">
        <i data-lucide="trash-2"></i>
      </button>` : ''}
    </div>
  `).join('');
  renderIcons(container);
}

// Toggles a room's occupancy: has a tenant name ⇒ "Active" (hidden from
// Saler); tenant cleared ⇒ "Inactive/Vacant" (shown to Saler). Deactivating
// just needs a confirm + clearing tenant/phone; activating needs a tenant
// name, so it opens the normal edit form instead of guessing one.
async function toggleRoomActive(roomId) {
  const r = state.rooms.find(x => x.id === roomId);
  if (!r) return;

  if (r.tenant) {
    const ok = await showConfirmModal(t('confirm_deactivate_room'), {
      title: t('confirm_deactivate_room_title'),
      okLabel: t('btn_deactivate_room'),
      danger: true
    });
    if (!ok) return;
    const rObj = { ...r, tenant: '', phone: '' };
    const data = await postAndVerify(`${API_BASE}/rooms/save`, rObj);
    if (!data) return;
    r.tenant = '';
    r.phone = '';
    renderRoomsManagement();
    showToast(t('toast_room_deactivated'), 'success');
  } else {
    openActivateRoomModal(roomId);
  }
}

let _activateRoomId = null;

// Turning the switch back on needs a tenant name (occupancy is derived
// from that field, see get_full_state's saler filter), but re-opening the
// full "Sửa Phòng" form just to type one name felt like the switch didn't
// do anything — a lot of unrelated fields (loại phòng, giá, diện tích...)
// for what should be a one-step un-deactivate. This is the same
// tenant/phone-only shortcut, just scoped to activation.
function openActivateRoomModal(roomId) {
  _activateRoomId = roomId;
  document.getElementById('activate-room-tenant').value = '';
  document.getElementById('activate-room-phone').value = '';
  document.getElementById('modal-activate-room').classList.add('active');
}

async function submitActivateRoom() {
  if (!_activateRoomId) return;
  const r = state.rooms.find(x => x.id === _activateRoomId);
  if (!r) return;

  const tenant = document.getElementById('activate-room-tenant').value.trim();
  const phone = document.getElementById('activate-room-phone').value.trim();
  if (!tenant) {
    showToast(t('toast_tenant_name_required'), 'error');
    return;
  }

  const rObj = { ...r, tenant, phone };
  const data = await postAndVerify(`${API_BASE}/rooms/save`, rObj);
  if (!data) return;
  r.tenant = tenant;
  r.phone = phone;
  closeModal('modal-activate-room');
  renderRoomsManagement();
  showToast(t('toast_room_activated'), 'success');
}

/* =====================================================================
   TICKET DETAIL VIEW WITH COMMENTS
===================================================================== */
let _currentTicketId = null;
let _adminImages = [];

function showTicketList() {
  const listView = document.getElementById('ticket-list-view');
  const detailView = document.getElementById('ticket-detail-view');
  if (listView) listView.style.display = 'block';
  if (detailView) detailView.style.display = 'none';
  _currentTicketId = null;
}

async function fetchFullTicket(ticketId) {
  const idx = state.tickets.findIndex(t => t.id === ticketId);
  if (idx < 0) return null;
  try {
    const res = await fetch(`${API_BASE}/tickets/${ticketId}`);
    if (res.ok) {
      const data = await res.json();
      if (data.success) {
        state.tickets[idx] = data.ticket;
      }
    }
  } catch (err) {
    console.warn('Could not fetch full ticket, using cached summary:', err);
  }
  return state.tickets[idx];
}

async function openTicketDetail(ticketId) {
  const ticket = await fetchFullTicket(ticketId);
  if (!ticket) return;
  _currentTicketId = ticketId;

  _adminImages = [];
  renderAdminImagePreviews();

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
          <span style="color:var(--text-muted);">${t('col_ticket_id')}</span>
          <strong>${ticket.id}</strong>
        </div>
        <div style="display:flex; justify-content:space-between;">
          <span style="color:var(--text-muted);">${t('col_room')}</span>
          <strong>${ticket.roomName || ticket.roomId}</strong>
        </div>
        <div style="display:flex; justify-content:space-between;">
          <span style="color:var(--text-muted);">${t('col_tenant')}</span>
          <strong>${ticket.tenant}</strong>
        </div>
        <div style="display:flex; justify-content:space-between;">
          <span style="color:var(--text-muted);">${t('col_category')}</span>
          <span class="badge badge-resolved">${statusLabel(ticket.category)}</span>
        </div>
        <div style="display:flex; justify-content:space-between;">
          <span style="color:var(--text-muted);">${t('col_priority')}</span>
          <span class="badge ${priorityClass}">${statusLabel(ticket.priority)}</span>
        </div>
        <div style="display:flex; justify-content:space-between;">
          <span style="color:var(--text-muted);">${t('col_status')}</span>
          <span class="badge ${statusClass}">${statusLabel(ticket.status)}</span>
        </div>
        <div style="display:flex; justify-content:space-between;">
          <span style="color:var(--text-muted);">${t('col_time')}</span>
          <span>${ticket.timestamp}</span>
        </div>
        <div style="border-top: 1px solid var(--border-color); padding-top:0.6rem;">
          <span style="color:var(--text-muted);">${t('description_colon_label')}</span>
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
      imagesEl.innerHTML = `<span style="color:var(--text-muted); font-size:0.85rem;">${t('no_attached_images')}</span>`;
    } else {
      imagesEl.innerHTML = imgs.map(src => `
        <img src="${src}" style="width:90px; height:90px; object-fit:cover; border-radius:var(--radius-sm); cursor:pointer; border:2px solid var(--border-color);"
             onclick="openImageLightbox('${src}')" title="${t('title_click_to_enlarge')}">
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
  renderIcons(document.getElementById('ticket-detail-view'));
}

function renderTicketComments(ticket) {
  const thread = document.getElementById('ticket-comments-thread');
  if (!thread) return;

  const comments = ticket.comments || [];
  if (comments.length === 0 && !ticket.response) {
    thread.innerHTML = `<div style="text-align:center; color:var(--text-muted); font-size:0.85rem; padding:1rem;">${t('no_responses_yet')}</div>`;
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
        <div style="max-width:85%; background:${isAdmin ? 'var(--cala-blue)' : 'var(--bg-base)'}; color:${isAdmin ? 'white' : 'var(--text-primary)'};
             border-radius: ${isAdmin ? '14px 14px 4px 14px' : '14px 14px 14px 4px'}; padding:0.65rem 1rem; font-size:0.85rem; box-shadow: 0 1px 3px rgba(0,0,0,0.08);">
          <div style="font-weight:700; font-size:0.75rem; margin-bottom:0.3rem; opacity:0.85;">${isAdmin ? '👤 Admin' : '🏠 ' + (c.author || t('default_tenant_label'))}</div>
          ${c.statusChange ? `<div style="font-size:0.72rem; opacity:0.8; margin-bottom:0.2rem;">📋 ${t('status_colon_label')} <strong>${statusLabel(c.statusChange)}</strong></div>` : ''}
          <div>${c.text}</div>
          ${c.images && c.images.length > 0 ? `
            <div style="display:flex; flex-wrap:wrap; gap:0.25rem; margin-top:0.4rem;">
              ${c.images.map(img => `
                <img src="${img}" style="width:70px; height:70px; object-fit:cover; border-radius:4px; cursor:pointer; border:1px solid ${isAdmin ? 'rgba(255,255,255,0.4)' : 'var(--border-color)'};" onclick="openImageLightbox('${img}')" title="${t('title_view_larger_image')}">
              `).join('')}
            </div>
          ` : ''}
          <div style="font-size:0.7rem; opacity:0.65; margin-top:0.3rem; text-align:right;">${c.time || ''}</div>
        </div>
      </div>
    `;
  }).join('');

  thread.scrollTop = thread.scrollHeight;
}

function handleAdminImageSelect(event) {
  const files = Array.from(event.target.files);
  const remaining = 5 - _adminImages.length;
  const toAdd = files.slice(0, remaining);

  toAdd.forEach(async file => {
    try {
      const dataUrl = await compressImageFile(file);
      _adminImages.push(dataUrl);
      renderAdminImagePreviews();
    } catch (err) {
      showToast(t(err.message === 'too-large' ? 'toast_image_too_large' : 'toast_image_compress_failed'), 'error');
    }
  });

  if (files.length > remaining) {
    showToast(t('toast_max_completion_images'), 'error');
  }
  event.target.value = '';
}

function renderAdminImagePreviews() {
  const container = document.getElementById('admin-image-previews');
  if (!container) return;
  container.innerHTML = _adminImages.map((src, i) => `
    <div style="position:relative; display:inline-block;">
      <img src="${src}" style="width:70px; height:70px; object-fit:cover; border-radius:var(--radius-sm); border:2px solid var(--border-color);">
      <button type="button" onclick="removeAdminImage(${i})" style="position:absolute; top:-6px; right:-6px; background:var(--color-danger); color:white; border:none; border-radius:50%; width:18px; height:18px; font-size:10px; cursor:pointer; display:flex; align-items:center; justify-content:center;">×</button>
    </div>
  `).join('');
}

function removeAdminImage(idx) {
  _adminImages.splice(idx, 1);
  renderAdminImagePreviews();
}

async function submitAdminTicketComment() {
  if (!_currentTicketId) return;
  const ticket = state.tickets.find(t => t.id === _currentTicketId);
  if (!ticket) return;

  const statusEl = document.getElementById('detail-reply-status');
  const msgEl = document.getElementById('detail-reply-message');
  const newStatus = statusEl ? statusEl.value : ticket.status;
  const message = msgEl ? msgEl.value.trim() : '';

  if (!message) { showToast(t('toast_enter_reply_content'), 'error'); return; }

  const now = new Date().toLocaleString('vi-VN');
  const comment = { 
    author: 'Admin', 
    role: 'admin', 
    text: message, 
    time: now, 
    statusChange: newStatus !== ticket.status ? newStatus : null,
    images: [..._adminImages]
  };

  if (msgEl) msgEl.value = '';
  _adminImages = [];
  renderAdminImagePreviews();

  const data = await postAndVerify(`${API_BASE}/tickets/reply`, { ticketId: ticket.id, status: newStatus, response: message, comment });
  if (!data) return;

  if (!ticket.comments) ticket.comments = [];
  ticket.comments.push(comment);
  ticket.status = newStatus;
  ticket.response = message;

  renderTicketComments(ticket);
  // Refresh status badge in info panel
  const statusClass = newStatus === 'Đã hoàn thành' ? 'badge-paid' : (newStatus === 'Đang sửa chữa' || newStatus === 'Đang xử lý' ? 'badge-pending' : 'badge-open');
  const infoEl = document.getElementById('ticket-detail-info');
  if (infoEl) {
    const statusBadge = infoEl.querySelector('[data-status]');
    if (statusBadge) statusBadge.className = `badge ${statusClass}`;
  }
  updateBadges();
  showToast(`${t('toast_ticket_reply_sent_prefix')}${ticket.id}!`, 'success');
}

function ticketStatusBadgeClass(status) {
  return status === 'Đã hoàn thành' ? 'badge-paid' : (status === 'Đang sửa chữa' || status === 'Đang xử lý' ? 'badge-pending' : 'badge-open');
}

// Same tri-state as ticketStatusBadgeClass, as a suffix for the row icon's
// tinted background instead of a badge color.
function ticketStatusIconClass(status) {
  return status === 'Đã hoàn thành' ? 'status-paid' : (status === 'Đang sửa chữa' || status === 'Đang xử lý' ? 'status-pending' : 'status-open');
}

function ticketCategoryIcon(category) {
  const map = { 'Hóa đơn': 'receipt', 'Điện': 'zap', 'Nước': 'droplet', 'Nội thất': 'armchair', 'Khác': 'circle-help' };
  return map[category] || 'wrench';
}

// Ticket-list checkbox selection, for the "Tải Về" bulk-download button —
// a Set survives re-renders (e.g. after a status change) without losing
// the user's picks, unlike re-deriving it from checkbox DOM state each time.
let _selectedTicketIds = new Set();

function renderAdminTickets() {
  const tbody = document.getElementById('admin-tickets-tbody');
  const cardsBox = document.getElementById('admin-tickets-cards');
  if (!tbody) return;
  tbody.innerHTML = '';
  if (cardsBox) cardsBox.innerHTML = '';

  // Drop selections for tickets that no longer exist (deleted, or a stale
  // selection from before a refetch) so the count/button stay honest.
  const liveIds = new Set(state.tickets.map(t => t.id));
  _selectedTicketIds.forEach(id => { if (!liveIds.has(id)) _selectedTicketIds.delete(id); });

  if (state.tickets.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:2rem; color:var(--text-secondary);">${t('tickets_empty_state')}</td></tr>`;
    if (cardsBox) cardsBox.innerHTML = `<div style="text-align:center; padding:2rem; color:var(--text-secondary);">${t('tickets_empty_state')}</div>`;
    updateTicketSelectionUI();
    return;
  }

  const canDeleteTickets = canDelete();

  state.tickets.forEach(t => {
    const imgCount = t.imagesCount != null ? t.imagesCount : (t.images || []).length;
    const checked = _selectedTicketIds.has(t.id);
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><input type="checkbox" ${checked ? 'checked' : ''} onchange="toggleTicketSelection('${t.id}', this.checked)"></td>
      <td><strong>${t.id}</strong></td>
      <td>${t.roomName || t.roomId}</td>
      <td><span class="badge badge-resolved">${statusLabel(t.category)}</span></td>
      <td><span class="badge ${t.priority === 'Khẩn cấp' ? 'badge-open' : 'badge-pending'}">${statusLabel(t.priority)}</span></td>
      <td><small style="color:var(--text-muted);">${t.timestamp}</small></td>
      <td><span class="badge ${ticketStatusBadgeClass(t.status)}">${statusLabel(t.status)}</span></td>
      <td>
        <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
          <button class="btn btn-blue btn-sm" onclick="openTicketDetail('${t.id}')">
            <i data-lucide="eye"></i> ${window.t('btn_view_details')}
          </button>
          ${canDeleteTickets ? `
          <button class="btn btn-secondary btn-sm" style="color:var(--cala-red);" onclick="deleteTicketApi('${t.id}')">
            <i data-lucide="trash-2"></i>
          </button>` : ''}
        </div>
      </td>
    `;
    tbody.appendChild(tr);

    if (cardsBox) {
      const card = document.createElement('div');
      card.className = 'ticket-card';
      card.innerHTML = `
        <div class="ticket-card-top">
          <label style="display:flex; align-items:center; gap:0.4rem;" onclick="event.stopPropagation();">
            <input type="checkbox" ${checked ? 'checked' : ''} onchange="toggleTicketSelection('${t.id}', this.checked)">
            <strong>${t.id}</strong>
          </label>
          <span class="badge ${ticketStatusBadgeClass(t.status)}">${statusLabel(t.status)}</span>
        </div>
        <div class="ticket-card-room">${t.roomName || t.roomId} · ${t.tenant}</div>
        <div class="ticket-card-tags">
          <span class="badge badge-resolved">${statusLabel(t.category)}</span>
          <span class="badge ${t.priority === 'Khẩn cấp' ? 'badge-open' : 'badge-pending'}">${statusLabel(t.priority)}</span>
        </div>
        <p class="ticket-card-desc">${t.description || ''}</p>
        <div class="ticket-card-meta">
          <small>${t.timestamp}</small>
          <div class="ticket-card-meta-right">
            ${imgCount > 0 ? `<span>📷 ${imgCount}</span>` : ''}
            ${canDeleteTickets ? `<button class="ticket-card-delete" onclick="event.stopPropagation(); deleteTicketApi('${t.id}')"><i data-lucide="trash-2"></i></button>` : ''}
          </div>
        </div>
      `;
      card.onclick = (e) => {
        if (e.target.closest('.ticket-card-delete') || e.target.tagName === 'INPUT' || e.target.tagName === 'LABEL') return;
        openTicketDetail(t.id);
      };
      cardsBox.appendChild(card);
    }
  });

  renderIcons(tbody);
  if (cardsBox) renderIcons(cardsBox);
  updateTicketSelectionUI();
}

function toggleTicketSelection(ticketId, checked) {
  if (checked) _selectedTicketIds.add(ticketId);
  else _selectedTicketIds.delete(ticketId);
  updateTicketSelectionUI();
}

function toggleSelectAllTickets(checked) {
  if (checked) state.tickets.forEach(t => _selectedTicketIds.add(t.id));
  else _selectedTicketIds.clear();
  renderAdminTickets();
}

function updateTicketSelectionUI() {
  const count = _selectedTicketIds.size;
  const btn = document.getElementById('btn-download-selected-tickets');
  const label = document.getElementById('btn-download-selected-tickets-label');
  if (btn) btn.style.display = count > 0 ? 'inline-flex' : 'none';
  if (label) label.textContent = tFmt('btn_download_selected_tickets', { count });
  const selectAll = document.getElementById('ticket-select-all');
  if (selectAll) selectAll.checked = state.tickets.length > 0 && count === state.tickets.length;
}

function openTicketDownloadModal() {
  if (_selectedTicketIds.size === 0) return;
  const countEl = document.getElementById('modal-download-tickets-count');
  if (countEl) countEl.textContent = tFmt('modal_download_tickets_count', { count: _selectedTicketIds.size });
  document.getElementById('modal-download-tickets').classList.add('active');
}

function downloadSelectedTickets(format) {
  const ids = Array.from(_selectedTicketIds).join(',');
  const endpoint = format === 'pdf' ? 'export-all-tickets-zip' : 'export-all-tickets';
  const url = `${API_BASE}/backup/${endpoint}?ids=${encodeURIComponent(ids)}`;
  const a = document.createElement('a');
  a.href = url;
  document.body.appendChild(a);
  a.click();
  a.remove();
  closeModal('modal-download-tickets');
}

async function deleteTicketApi(ticketId) {
  if (!confirm(t('confirm_delete_ticket'))) return;
  state.tickets = state.tickets.filter(t => t.id !== ticketId);
  try {
    await fetch(`${API_BASE}/tickets/delete`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ticketId })
    });
  } catch (err) { console.warn('Deleted ticket locally'); }
  showToast(t('toast_ticket_deleted'), 'success');
  renderAdminTickets();
}

/* IMAGE UPLOAD FOR TENANT REPORT */
let _tenantImages = [];

function handleTenantImageSelect(event) {
  const files = Array.from(event.target.files);
  const remaining = 5 - _tenantImages.length;
  const toAdd = files.slice(0, remaining);

  toAdd.forEach(async file => {
    try {
      const dataUrl = await compressImageFile(file);
      _tenantImages.push(dataUrl);
      renderTenantImagePreviews();
    } catch (err) {
      showToast(t(err.message === 'too-large' ? 'toast_image_too_large' : 'toast_image_compress_failed'), 'error');
    }
  });

  if (files.length > remaining) {
    showToast(t('toast_max_ticket_images'), 'error');
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
  const cardsBox = document.getElementById('tenant-tickets-cards');
  tbody.innerHTML = '';
  if (cardsBox) cardsBox.innerHTML = '';
  const user = state.currentUser;
  const myTickets = user ? state.tickets.filter(t => t.roomId === user.roomId || t.tenant === user.fullName) : state.tickets;

  if (myTickets.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:2rem; color:var(--text-secondary);">${t('my_tickets_empty_state')}</td></tr>`;
    if (cardsBox) cardsBox.innerHTML = `<div style="text-align:center; padding:2rem; color:var(--text-secondary);">${t('my_tickets_empty_state')}</div>`;
    return;
  }

  myTickets.forEach(t => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><small style="color:var(--text-muted);">${t.timestamp}</small></td>
      <td><span class="badge badge-resolved">${statusLabel(t.category)}</span></td>
      <td>${t.description}</td>
      <td><span class="badge ${t.priority === 'Khẩn cấp' ? 'badge-open' : 'badge-pending'}">${statusLabel(t.priority)}</span></td>
      <td><span class="badge ${ticketStatusBadgeClass(t.status)}">${statusLabel(t.status)}</span></td>
      <td style="color:var(--cala-blue); font-weight:600;">${t.response || `<em>${window.t('waiting_admin_reply')}</em>`}</td>
      <td>
        <button class="btn btn-blue btn-sm" onclick="openTenantTicketDetail('${t.id}')">
          <i data-lucide="message-square"></i> ${window.t('btn_view_and_discuss')}
        </button>
      </td>
    `;
    tbody.appendChild(tr);

    if (cardsBox) {
      const card = document.createElement('div');
      card.className = 'tenant-ticket-row';
      card.onclick = () => openTenantTicketDetail(t.id);
      card.innerHTML = `
        <div class="tenant-ticket-row-icon ${ticketStatusIconClass(t.status)}">
          <i data-lucide="${ticketCategoryIcon(t.category)}"></i>
        </div>
        <div class="tenant-ticket-row-main">
          <div class="tenant-ticket-row-top">
            <strong>${statusLabel(t.category)}</strong>
            <span class="badge ${ticketStatusBadgeClass(t.status)}">${statusLabel(t.status)}</span>
          </div>
          <small class="tenant-ticket-row-time">${t.timestamp}</small>
        </div>
        <span class="tenant-ticket-row-chevron"><i data-lucide="chevron-right"></i></span>
      `;
      cardsBox.appendChild(card);
    }
  });

  renderIcons(tbody);
  if (cardsBox) renderIcons(cardsBox);
}

async function handleTenantSubmitReport(event) {
  event.preventDefault();
  const user = state.currentUser;
  const roomId = (user && user.roomId) ? user.roomId : (state.rooms[0] ? state.rooms[0].id : 'R101');
  const category = document.getElementById('report-category').value;
  const priority = document.getElementById('report-priority').value;
  const description = document.getElementById('report-description').value;

  // Waits for the server's response instead of pushing a locally-built
  // ticket first — the sequential TK-0000 id is only ever assigned by
  // Storage.next_ticket_number() server-side (see create_ticket), so
  // there's no client-generated id to show optimistically here.
  try {
    const res = await fetch(`${API_BASE}/tickets/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ roomId, category, priority, description, images: _tenantImages })
    });
    const data = await res.json();
    if (data.success && data.ticket) {
      state.tickets.unshift(data.ticket);
    } else {
      showToast(t('toast_ticket_send_failed'), 'error');
      return;
    }
  } catch (err) {
    showToast(t('toast_ticket_send_failed'), 'error');
    return;
  }

  // Reset
  _tenantImages = [];
  renderTenantImagePreviews();
  showToast(t('toast_ticket_sent'), 'success');
  document.getElementById('tenant-report-form').reset();
  updateBadges();
  renderTenantReportsView();
}

/* Old ticket reply modal kept as stub - now using inline detail view */
function openTicketReplyModal(ticketId) { openTicketDetail(ticketId); }
async function saveTicketResponse(event) { if(event) event.preventDefault(); }

async function deleteRoom(roomId) {
  if (!confirm(t('confirm_delete_room'))) return;
  state.rooms = state.rooms.filter(r => r.id !== roomId);
  showToast(t('toast_room_deleted'), 'success');
  renderRoomsManagement();

  try {
    const res = await fetch(`${API_BASE}/rooms/delete`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: roomId, roomId: roomId })
    });
    const data = await res.json();
    // The room's tenant account (if any) had its room link cleared server-
    // side rather than left pointing at a now-deleted room — let the admin
    // know that account needs a new room assignment.
    if (data.unlinkedUsername) {
      const tenantUser = state.users.find(u => u.username === data.unlinkedUsername);
      if (tenantUser) tenantUser.roomId = '';
      showToast(`${t('toast_room_deleted_tenant_unlinked_prefix')}@${data.unlinkedUsername}`, 'info');
    }
  } catch (e) {
    console.warn('Delete room locally', e);
  }
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

// Swaps the rent field's label + shows/hides the explainer paragraph based
// on the selected Loại Phòng — purely cosmetic, doesn't touch any value.
function toggleRoomTypeHint() {
  const isDorm = document.getElementById('room-type').value === 'dorm';
  const hint = document.getElementById('room-type-hint');
  const rentLabel = document.getElementById('lbl-room-base-rent');
  const capacityBox = document.getElementById('box-room-capacity');
  if (hint) hint.style.display = isDorm ? 'block' : 'none';
  if (rentLabel) rentLabel.innerText = isDorm ? t('lbl_room_rent_price_dorm') : t('lbl_room_rent_price');
  if (capacityBox) capacityBox.style.display = isDorm ? 'block' : 'none';

  // A dorm room's vehicle count is derived from its residents' individual
  // "Có gửi xe" checkboxes (Quản Lý Tài Khoản) — editing it directly here
  // would just get silently overwritten on the next read, so lock the
  // field and point to where it's actually managed instead.
  const vehicleInput = document.getElementById('room-vehicle-count');
  const vehicleHint = document.getElementById('hint-room-vehicle-count');
  if (vehicleInput) vehicleInput.disabled = isDorm;
  if (vehicleHint) vehicleHint.style.display = isDorm ? 'block' : 'none';
}

async function saveSalerCommissionPercent() {
  const input = document.getElementById('saler-commission-percent');
  const percent = parseFloat(input.value) || 0;
  try {
    const res = await fetch(`${API_BASE}/settings/saler-commission/save`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ percent })
    });
    const data = await res.json();
    if (data.success) {
      state.salerCommissionPercent = data.percent;
      showToast(t('toast_commission_saved'), 'success');
    } else {
      showToast(data.error || t('toast_server_connection_error'), 'error');
    }
  } catch (err) {
    showToast(t('toast_server_connection_error'), 'error');
  }
}

function openAddRoomModal() {
  document.getElementById('room-id').value = '';
  document.getElementById('room-name').value = '';
  document.getElementById('room-tenant').value = '';
  document.getElementById('room-phone').value = '';
  document.getElementById('room-type').value = 'single';
  document.getElementById('room-headcount').value = '1';
  document.getElementById('room-base-rent').value = '3500000';
  document.getElementById('room-area').value = '';
  document.getElementById('room-description').value = '';
  document.getElementById('room-capacity').value = '';
  document.getElementById('room-deposit').value = '';
  document.getElementById('room-vehicle-count').value = '';
  toggleRoomTypeHint();

  const houseSelect = document.getElementById('room-house-id');
  houseSelect.innerHTML = state.houses.map(h => `<option value="${h.id}">${h.name}</option>`).join('');
  if (state.currentHouseId !== 'all') houseSelect.value = state.currentHouseId;

  document.getElementById('modal-room-config').classList.add('active');
}

function openEditRoomModal(roomId) {
  const r = state.rooms.find(x => x.id === roomId);
  if (!r) return;

  document.getElementById('room-id').value = r.id;
  document.getElementById('room-name').value = r.name;
  document.getElementById('room-tenant').value = r.tenant || '';
  document.getElementById('room-phone').value = r.phone || '';
  document.getElementById('room-type').value = r.roomType || 'single';
  document.getElementById('room-headcount').value = r.headcount || 1;
  document.getElementById('room-base-rent').value = r.baseRent || 0;
  document.getElementById('room-area').value = r.area || '';
  document.getElementById('room-description').value = r.description || '';
  document.getElementById('room-capacity').value = r.capacity || '';
  document.getElementById('room-deposit').value = r.deposit || '';
  document.getElementById('room-vehicle-count').value = r.vehicleCount || '';
  toggleRoomTypeHint();

  const houseSelect = document.getElementById('room-house-id');
  houseSelect.innerHTML = state.houses.map(h => `<option value="${h.id}" ${h.id === r.houseId ? 'selected' : ''}>${h.name}</option>`).join('');

  document.getElementById('modal-room-config').classList.add('active');
}

async function saveRoomConfig(event) {
  event.preventDefault();
  const id = document.getElementById('room-id').value;
  const houseId = document.getElementById('room-house-id').value;
  const name = document.getElementById('room-name').value.trim();
  const tenant = document.getElementById('room-tenant').value.trim();
  const phone = document.getElementById('room-phone').value.trim();
  const roomType = document.getElementById('room-type').value;
  const headcount = parseInt(document.getElementById('room-headcount').value) || 1;
  const baseRent = parseFloat(document.getElementById('room-base-rent').value) || 0;
  const area = parseFloat(document.getElementById('room-area').value) || 0;
  const description = document.getElementById('room-description').value.trim();
  const capacity = parseInt(document.getElementById('room-capacity').value) || 0;
  const deposit = parseFloat(document.getElementById('room-deposit').value) || 0;
  const vehicleCount = parseInt(document.getElementById('room-vehicle-count').value) || 0;

  const rObj = {
    id: id || genId('R'),
    houseId, name, tenant, phone, roomType, headcount, baseRent, area, description, capacity, deposit, vehicleCount
  };

  const data = await postAndVerify(`${API_BASE}/rooms/save`, rObj);
  if (!data) return;

  const idx = state.rooms.findIndex(r => r.id === rObj.id);
  if (idx >= 0) state.rooms[idx] = rObj;
  else state.rooms.push(rObj);

  showToast(`${t('toast_room_saved_prefix')}"${name}"${t('toast_room_saved_suffix')}`, 'success');
  closeModal('modal-room-config');
  renderRoomSelector();
  renderCurrentView();
}

function handleMonthChange(sourceEl) {
  const value = sourceEl ? sourceEl.value : document.getElementById('select-month').value;
  state.currentMonth = value;
  ['select-month', 'invoices-select-month', 'spreadsheet-select-month', 'ir-select-month', 'meterphotos-select-month'].forEach(id => {
    const el = document.getElementById(id);
    if (el && el !== sourceEl) el.value = value;
  });
  fetchState();
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', state.theme);
  const themeIcon = document.getElementById('theme-icon');
  themeIcon.setAttribute('data-lucide', state.theme === 'dark' ? 'sun-medium' : 'moon');
  renderIcons(themeIcon.parentElement);
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('active');
}

// lucide.createIcons() re-builds *every* [data-lucide] element on the whole
// page each time it runs, not just newly-added ones — the <svg> it produces
// keeps the same data-lucide attribute, so the next call's document-wide
// query matches it again and tears it down/rebuilds it for no reason. That's
// a fixed cost of a few ms once per page navigation, but this app calls
// lucide.createIcons() after every toast, confirm dialog, table-row edit and
// modal open — dozens of times during a normal session — and on a weaker
// mobile CPU that adds up to real, felt lag while just using the app.
// Passing the specific container that was actually just (re)rendered scopes
// the rebuild to only its own icons instead of the whole document.
function renderIcons(root) {
  if (typeof lucide === 'undefined') return;
  lucide.createIcons({ root: root || document });
}

// Enlarges any ticket/meter photo inline as a popup instead of opening a
// new browser tab — used across the admin ticket detail view, the reply
// thread's attached images, and the tenant-facing ticket detail modal.
function openImageLightbox(src) {
  const img = document.getElementById('image-lightbox-img');
  if (img) img.src = src;
  document.getElementById('modal-image-lightbox').classList.add('active');
}

// In-app replacement for the browser's native confirm() — same yes/no
// question, styled to match the rest of the app instead of the unstyled
// top-of-viewport browser dialog. Returns a Promise<boolean>, so callers
// just `await` it where they used to check confirm()'s return value.
let _confirmModalResolve = null;

function showConfirmModal(message, options = {}) {
  return new Promise(resolve => {
    _confirmModalResolve = resolve;
    document.getElementById('confirm-modal-title').innerText = options.title || t('confirm_modal_default_title');
    document.getElementById('confirm-modal-message').innerText = message;
    const okBtn = document.getElementById('confirm-modal-ok-btn');
    okBtn.innerText = options.okLabel || t('btn_confirm');
    okBtn.className = `btn ${options.danger ? 'btn-secondary' : 'btn-orange'}`;
    okBtn.style.color = options.danger ? 'var(--color-danger)' : '';
    okBtn.style.borderColor = options.danger ? 'var(--color-danger)' : '';
    const iconBox = document.getElementById('confirm-modal-icon-box');
    iconBox.style.background = options.danger ? '#ffecee' : '#fff2ec';
    iconBox.style.color = options.danger ? 'var(--cala-red)' : 'var(--cala-orange)';
    const confirmModal = document.getElementById('modal-confirm');
    confirmModal.classList.add('active');
    renderIcons(confirmModal);
  });
}

function resolveConfirmModal(result) {
  document.getElementById('modal-confirm').classList.remove('active');
  if (_confirmModalResolve) {
    const resolve = _confirmModalResolve;
    _confirmModalResolve = null;
    resolve(result);
  }
}

/* ==========================================================================
   IMAGE COMPRESSION — every photo upload (meter readings, room documents,
   ticket attachments) goes through this so nothing over ~5MB ever reaches
   the server. Downscales long edge to 1600px and re-encodes as JPEG,
   stepping quality/size down until under the cap while staying readable.
   ========================================================================== */
const IMAGE_MAX_BYTES = 5 * 1024 * 1024;
const IMAGE_MAX_DIMENSION = 1600;
const IMAGE_MIN_DIMENSION = 480;

function compressImageFile(file) {
  return new Promise((resolve, reject) => {
    if (!file.type || !file.type.startsWith('image/')) {
      reject(new Error('not-an-image'));
      return;
    }

    const reader = new FileReader();
    reader.onerror = () => reject(new Error('read-failed'));
    reader.onload = (e) => {
      const img = new Image();
      img.onerror = () => reject(new Error('load-failed'));
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        let width = img.width;
        let height = img.height;
        const scale = Math.min(1, IMAGE_MAX_DIMENSION / Math.max(width, height));
        canvas.width = Math.round(width * scale);
        canvas.height = Math.round(height * scale);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        let quality = 0.85;
        let dataUrl = canvas.toDataURL('image/jpeg', quality);

        // Step 1: reduce quality first — cheapest way to shrink size
        while (dataUrl.length > IMAGE_MAX_BYTES && quality > 0.35) {
          quality -= 0.1;
          dataUrl = canvas.toDataURL('image/jpeg', quality);
        }

        // Step 2: still too big (huge original) — shrink dimensions too
        while (dataUrl.length > IMAGE_MAX_BYTES && Math.min(canvas.width, canvas.height) > IMAGE_MIN_DIMENSION) {
          canvas.width = Math.round(canvas.width * 0.8);
          canvas.height = Math.round(canvas.height * 0.8);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          dataUrl = canvas.toDataURL('image/jpeg', quality);
        }

        if (dataUrl.length > IMAGE_MAX_BYTES) {
          reject(new Error('too-large'));
          return;
        }
        resolve(dataUrl);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

function formatMoney(num) {
  return new Intl.NumberFormat('vi-VN').format(Math.round(num || 0));
}

function formatMonthLabel(monthStr) {
  const [year, month] = monthStr.split('-');
  return `${month}/${year}`;
}

// INV_<tên phòng>_<tháng><2 số cuối năm> — e.g. "INV_Phòng 101_0826" for
// August 2026. Mirrored exactly in _rebuild_invoices (services.py), which
// is the actual source of truth once a save round-trips to the server;
// this client-side copy only needs to match closely enough to look up
// the right invoice locally right after generating it.
function formatInvoiceId(roomName, monthStr) {
  const [year, month] = monthStr.split('-');
  return `INV_${roomName}_${month}${year.slice(-2)}`;
}

// t('some_key_with_{placeholder}') then swap in each named value — reads
// easier at the call site than the usual prefix/suffix pair of i18n keys
// stitched around a bare number, for messages with several moving parts.
function tFmt(key, replacements) {
  let str = t(key);
  Object.keys(replacements || {}).forEach(k => { str = str.split(`{${k}}`).join(replacements[k]); });
  return str;
}

/* =====================================================================
   SAO LƯU & DỌN DỮ LIỆU CŨ — automatic retention (see
   check_data_retention() in services.py for the actual policy/grace-
   period logic; this is purely the status display + download links).
===================================================================== */
let _retentionStatus = null;

async function checkDataRetention() {
  if (!state.currentUser || state.currentUser.role !== 'superadmin') return;
  try {
    const res = await fetch(`${API_BASE}/data-retention/status?month=${state.currentMonth}`);
    const data = await res.json();
    if (!data.success) return;
    _retentionStatus = data;

    const badge = document.getElementById('retention-pending-badge');
    const hasPending = !!data.pendingInvoiceMonth || data.pendingTicketCount > 0;
    if (badge) badge.style.display = hasPending ? 'inline-flex' : 'none';

    if (data.deletedInvoiceCount > 0 || data.deletedTicketCount > 0) {
      showToast(tFmt('toast_retention_auto_deleted', { invoices: data.deletedInvoiceCount, tickets: data.deletedTicketCount }), 'info');
    }
    if (state.currentView === 'admin-data-retention') renderDataRetentionView();
  } catch (err) {
    console.warn('Could not check data retention:', err);
  }
}

function renderDataRetentionView() {
  const warnBox = document.getElementById('retention-warning-box');
  const summaryBox = document.getElementById('retention-last-run-summary');
  if (!warnBox || !summaryBox) return;

  if (!_retentionStatus) {
    warnBox.innerHTML = '';
    summaryBox.innerHTML = `<em>${t('retention_not_checked_yet')}</em>`;
    checkDataRetention();
    return;
  }

  const s = _retentionStatus;
  let warnHtml = '';
  if (s.pendingInvoiceMonth) {
    warnHtml += `
      <div class="cala-card" style="background:#fff2ec; border:1px solid #ffd4c2; margin-bottom:0.75rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem;">
        <strong style="color:var(--cala-orange); display:flex; align-items:center; gap:0.4rem;"><i data-lucide="alert-triangle"></i> ${tFmt('retention_pending_invoices', { month: formatMonthLabel(s.pendingInvoiceMonth) })}</strong>
        <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
          <a class="btn btn-orange btn-sm" href="${API_BASE}/backup/export-invoices-zip?month=${state.currentMonth}">
            <i data-lucide="file-archive"></i> ${t('btn_download_backup_zip')}
          </a>
          <a class="btn btn-secondary btn-sm" href="${API_BASE}/backup/export-invoices?month=${state.currentMonth}">
            <i data-lucide="download"></i> ${t('btn_download_backup_json')}
          </a>
        </div>
      </div>
    `;
  }
  if (s.pendingTicketCount > 0) {
    warnHtml += `
      <div class="cala-card" style="background:#fff2ec; border:1px solid #ffd4c2; margin-bottom:0.75rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem;">
        <strong style="color:var(--cala-orange); display:flex; align-items:center; gap:0.4rem;"><i data-lucide="alert-triangle"></i> ${tFmt('retention_pending_tickets', { count: s.pendingTicketCount })}</strong>
        <a class="btn btn-orange btn-sm" href="${API_BASE}/backup/export-tickets">
          <i data-lucide="download"></i> ${t('btn_download_backup')}
        </a>
      </div>
    `;
  }
  if (!warnHtml) {
    warnHtml = `<div class="cala-card" style="background:#e6f9f2; border:1px solid #b3f2db; color:var(--cala-emerald); display:flex; align-items:center; gap:0.5rem;"><i data-lucide="check-circle"></i> ${t('retention_all_clear')}</div>`;
  }
  warnBox.innerHTML = warnHtml;

  const lines = [];
  if (s.deletedInvoiceCount > 0) lines.push(tFmt('retention_summary_deleted_invoices', { count: s.deletedInvoiceCount }));
  if (s.deletedReadingMonths && s.deletedReadingMonths.length) lines.push(tFmt('retention_summary_deleted_readings', { months: s.deletedReadingMonths.map(formatMonthLabel).join(', ') }));
  if (s.deletedTicketCount > 0) lines.push(tFmt('retention_summary_deleted_tickets', { count: s.deletedTicketCount }));
  summaryBox.innerHTML = lines.length ? lines.map(l => `<div>${l}</div>`).join('') : `<em>${t('retention_summary_nothing_deleted')}</em>`;

  renderIcons(warnBox);
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i data-lucide="${type === 'success' ? 'check-circle' : (type === 'error' ? 'alert-circle' : 'info')}" style="color:${type === 'success' ? 'var(--cala-emerald)' : (type === 'error' ? 'var(--cala-red)' : 'var(--cala-blue)')};"></i>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  renderIcons(toast);
  setTimeout(() => toast.remove(), 4000);
}
let _currentTenantTicketId = null;

async function openTenantTicketDetail(ticketId) {
  const ticket = await fetchFullTicket(ticketId);
  if (!ticket) return;
  _currentTenantTicketId = ticketId;

  // Fill ticket info
  const priorityClass = ticket.priority === 'Khẩn cấp' ? 'badge-open' : 'badge-pending';
  const statusClass = ticket.status === 'Đã hoàn thành' ? 'badge-paid' : (ticket.status === 'Đang sửa chữa' || ticket.status === 'Đang xử lý' ? 'badge-pending' : 'badge-open');
  
  const infoEl = document.getElementById('tenant-ticket-info');
  if (infoEl) {
    infoEl.innerHTML = `
      <div style="display:flex; justify-content:space-between;">
        <span style="color:var(--text-muted);">${t('col_ticket_id')}</span>
        <strong>${ticket.id}</strong>
      </div>
      <div style="display:flex; justify-content:space-between;">
        <span style="color:var(--text-muted);">${t('col_category')}</span>
        <span class="badge badge-resolved">${statusLabel(ticket.category)}</span>
      </div>
      <div style="display:flex; justify-content:space-between;">
        <span style="color:var(--text-muted);">${t('col_priority')}</span>
        <span class="badge ${priorityClass}">${statusLabel(ticket.priority)}</span>
      </div>
      <div style="display:flex; justify-content:space-between;">
        <span style="color:var(--text-muted);">${t('col_status')}</span>
        <span class="badge ${statusClass}">${statusLabel(ticket.status)}</span>
      </div>
      <div style="display:flex; justify-content:space-between;">
        <span style="color:var(--text-muted);">${t('col_time')}</span>
        <span>${ticket.timestamp}</span>
      </div>
      <div style="border-top: 1px solid var(--border-color); padding-top:0.4rem; margin-top:0.4rem;">
        <span style="color:var(--text-muted);">${t('request_content_label')}</span>
        <p style="margin-top:0.25rem; line-height:1.4;">${ticket.description}</p>
      </div>
    `;
  }

  // Fill images
  const imagesEl = document.getElementById('tenant-ticket-images');
  if (imagesEl) {
    const imgs = ticket.images || [];
    if (imgs.length === 0) {
      imagesEl.innerHTML = `<span style="color:var(--text-muted); font-size:0.8rem;">${t('no_attached_images')}</span>`;
    } else {
      imagesEl.innerHTML = imgs.map(src => `
        <img src="${src}" style="width:70px; height:70px; object-fit:cover; border-radius:var(--radius-sm); cursor:pointer; border:2px solid var(--border-color);"
             onclick="openImageLightbox('${src}')" title="${t('title_click_to_enlarge')}">
      `).join('');
    }
  }

  // Render comments thread
  renderTenantTicketComments(ticket);
  document.getElementById('tenant-reply-text').value = '';
  const tenantTicketModal = document.getElementById('modal-tenant-ticket-detail');
  tenantTicketModal.classList.add('active');
  renderIcons(tenantTicketModal);
}

function renderTenantTicketComments(ticket) {
  const thread = document.getElementById('tenant-comments-thread');
  if (!thread) return;

  const comments = ticket.comments || [];
  if (comments.length === 0 && !ticket.response) {
    thread.innerHTML = `<div style="text-align:center; color:var(--text-muted); font-size:0.8rem; padding:1rem;">${t('no_discussion_yet')}</div>`;
    return;
  }

  let allComments = [...comments];
  if (ticket.response && allComments.length === 0) {
    allComments = [{ author: 'Admin', role: 'admin', text: ticket.response, time: ticket.timestamp }];
  }

  thread.innerHTML = allComments.map(c => {
    const isAdmin = c.role === 'admin';
    return `
      <div style="display:flex; flex-direction:column; align-items:${isAdmin ? 'flex-start' : 'flex-end'};">
        <div style="max-width:85%; background:${isAdmin ? 'var(--bg-base)' : 'var(--cala-blue)'}; color:${isAdmin ? 'var(--text-primary)' : 'white'};
             border-radius: ${isAdmin ? '14px 14px 14px 4px' : '14px 14px 4px 14px'}; padding:0.5rem 0.85rem; font-size:0.8rem; box-shadow: 0 1px 3px rgba(0,0,0,0.08);">
          <div style="font-weight:700; font-size:0.7rem; margin-bottom:0.25rem; opacity:0.85;">${isAdmin ? '👤 Admin' : '🏠 ' + t('default_tenant_label')}</div>
          ${c.statusChange ? `<div style="font-size:0.68rem; opacity:0.8; margin-bottom:0.15rem;">📋 ${t('status_colon_label')} <strong>${statusLabel(c.statusChange)}</strong></div>` : ''}
          <div>${c.text}</div>
          ${c.images && c.images.length > 0 ? `
            <div style="display:flex; flex-wrap:wrap; gap:0.25rem; margin-top:0.4rem;">
              ${c.images.map(img => `
                <img src="${img}" style="width:70px; height:70px; object-fit:cover; border-radius:4px; cursor:pointer; border:1px solid ${isAdmin ? 'var(--border-color)' : 'rgba(255,255,255,0.4)'};" onclick="openImageLightbox('${img}')" title="${t('title_view_larger_image')}">
              `).join('')}
            </div>
          ` : ''}
          <div style="font-size:0.65rem; opacity:0.65; margin-top:0.25rem; text-align:right;">${c.time || ''}</div>
        </div>
      </div>
    `;
  }).join('');

  thread.scrollTop = thread.scrollHeight;
}

async function submitTenantTicketComment() {
  if (!_currentTenantTicketId) return;
  const ticket = state.tickets.find(t => t.id === _currentTenantTicketId);
  if (!ticket) return;

  const msgEl = document.getElementById('tenant-reply-text');
  const message = msgEl ? msgEl.value.trim() : '';

  if (!message) { showToast(t('toast_enter_comment_content'), 'error'); return; }

  const now = new Date().toLocaleString('vi-VN');
  const comment = {
    author: state.currentUser ? (state.currentUser.fullName || state.currentUser.username) : t('default_tenant_label'),
    role: 'tenant', 
    text: message, 
    time: now, 
    statusChange: null 
  };

  if (msgEl) msgEl.value = '';

  const data = await postAndVerify(`${API_BASE}/tickets/tenant-reply`, { ticketId: ticket.id, comment });
  if (!data) return;

  if (!ticket.comments) ticket.comments = [];
  ticket.comments.push(comment);

  renderTenantTicketComments(ticket);
  showToast(t('toast_comment_sent'), 'success');
}

// Feature x action(view/create/edit/delete) permissions, one role edited
// at a time (role tabs, like the reference screenshot) rather than every
// role crammed into one wide table. 'delete' is never a real checkbox —
// it's a fixed superadmin-only rule from the original 5-role design, not
// a per-role toggle — so that column always renders locked.
const PERMISSION_ROLES = ['manager', 'investor', 'tenant'];
let permissionsActiveRole = 'manager';

// Reads the currently-visible tab's checkboxes back into state.permissions
// before switching tabs or saving, so edits to a role you're not currently
// looking at (already synced from an earlier tab visit) aren't lost.
function syncPermissionsTabToState() {
  const role = permissionsActiveRole;
  document.querySelectorAll('#permissions-matrix-tbody input[type="checkbox"]').forEach(cb => {
    const featureKey = cb.getAttribute('data-feature');
    const action = cb.getAttribute('data-action');
    const feature = state.permissions.find(p => p.key === featureKey);
    if (feature && feature[role]) feature[role][action] = cb.checked;
  });
}

function switchPermissionsRoleTab(role) {
  syncPermissionsTabToState();
  permissionsActiveRole = role;
  renderAdminPermissions();
}

function renderAdminPermissions() {
  const tabsContainer = document.getElementById('permissions-role-tabs');
  const roleTabLabels = {
    manager: `💼 ${t('tab_role_manager')}`,
    investor: `🏘️ ${t('tab_role_investor')}`,
    tenant: `🏠 ${t('tab_role_tenant')}`
  };
  if (tabsContainer) {
    tabsContainer.innerHTML = PERMISSION_ROLES.map(role => `
      <button type="button" class="btn ${role === permissionsActiveRole ? 'btn-blue' : 'btn-secondary'} btn-sm" onclick="switchPermissionsRoleTab('${role}')">
        ${roleTabLabels[role]}
      </button>
    `).join('');
  }

  const tbody = document.getElementById('permissions-matrix-tbody');
  if (!tbody) return;

  const roleData = f => f[permissionsActiveRole] || {};
  const cellHtml = (f, action) => {
    const data = roleData(f);
    if (!(action in data)) return `<td style="text-align:center; color:var(--text-muted);">—</td>`;
    return `<td style="text-align:center;"><input type="checkbox" data-feature="${f.key}" data-action="${action}" ${data[action] ? 'checked' : ''}></td>`;
  };

  tbody.innerHTML = '';
  state.permissions.forEach(p => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="font-weight: 600; padding: 0.75rem 1rem;">${p.name}</td>
      ${cellHtml(p, 'view')}
      ${cellHtml(p, 'create')}
      ${cellHtml(p, 'edit')}
      <td style="text-align:center; color:var(--text-muted);" title="${t('hint_delete_superadmin_only')}"><i data-lucide="lock" style="width:14px; height:14px;"></i></td>
    `;
    tbody.appendChild(tr);
  });
  renderIcons(tbody);
}

async function savePermissionsMatrix() {
  syncPermissionsTabToState();
  const matrix = JSON.parse(JSON.stringify(state.permissions));

  try {
    await fetch(`${API_BASE}/permissions/save`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ matrix })
    });
    state.permissions = matrix;
    showToast(t('toast_permissions_saved'), 'success');
    setupUserRoleUI();
  } catch (err) {
    showToast(t('toast_permissions_save_error'), 'error');
  }
}

async function openSiteSettingsModal() {
  // state.siteSettings only ever carries a boolean placeholder for
  // shareImage now (see get_full_state) — fetch the real stored value
  // here, only when this form is actually opened, instead of every page
  // load shipping a full social-preview photo nobody but this form needs.
  let s = state.siteSettings || {};
  try {
    const res = await fetch(`${API_BASE}/settings/full`);
    const data = await res.json();
    if (data.success) s = data.settings;
  } catch (err) {
    console.warn('Could not load full site settings:', err);
  }
  document.getElementById('site-settings-name').value = s.siteName || '';
  document.getElementById('site-settings-title').value = s.title || '';
  document.getElementById('site-settings-description').value = s.description || '';
  document.getElementById('site-settings-keywords').value = s.keywords || '';
  document.getElementById('site-settings-share-image').value = s.shareImage || '';
  document.getElementById('site-settings-favicon').value = s.favicon || '';
  updateSiteSettingsImagePreview('site-settings-share-image');
  updateSiteSettingsImagePreview('site-settings-favicon');
  document.getElementById('modal-site-settings').classList.add('active');
}

function updateSiteSettingsImagePreview(inputId) {
  const input = document.getElementById(inputId);
  const preview = document.getElementById(`${inputId}-preview`);
  if (!input || !preview) return;
  if (input.value) {
    preview.src = input.value;
    preview.style.display = 'block';
  } else {
    preview.style.display = 'none';
  }
}

async function handleSiteSettingsImageSelect(event, targetInputId) {
  const file = event.target.files[0];
  event.target.value = '';
  if (!file) return;
  try {
    const dataUrl = await compressImageFile(file);
    document.getElementById(targetInputId).value = dataUrl;
    updateSiteSettingsImagePreview(targetInputId);
  } catch (err) {
    showToast(t(err.message === 'too-large' ? 'toast_image_too_large' : 'toast_image_compress_failed'), 'error');
  }
}

async function saveSiteSettings() {
  const payload = {
    siteName: document.getElementById('site-settings-name').value.trim(),
    title: document.getElementById('site-settings-title').value.trim(),
    description: document.getElementById('site-settings-description').value.trim(),
    keywords: document.getElementById('site-settings-keywords').value.trim(),
    shareImage: document.getElementById('site-settings-share-image').value.trim(),
    favicon: document.getElementById('site-settings-favicon').value.trim()
  };

  try {
    const res = await fetch(`${API_BASE}/settings/save`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (!data.success) {
      showToast(data.error || t('toast_server_connection_error'), 'error');
      return;
    }
    applySiteSettings(data.settings);
    showToast(t('toast_site_settings_saved'), 'success');
    closeModal('modal-site-settings');
  } catch (err) {
    showToast(t('toast_server_connection_error'), 'error');
  }
}

// MOBILE SIDEBAR TOGGLE
function toggleSidebar() {
  document.getElementById('sidebar')?.classList.toggle('open');
  document.getElementById('sidebar-overlay')?.classList.toggle('active');
}

function closeSidebar() {
  document.getElementById('sidebar')?.classList.remove('open');
  document.getElementById('sidebar-overlay')?.classList.remove('active');
}

// The top navbar wraps to 2-3 rows on narrow screens (house/month selectors,
// language/theme/logout controls), so its real height isn't a fixed number.
// The off-canvas sidebar needs to start right below it — keep --navbar-height
// in sync via ResizeObserver so it's correct after login, language switch,
// house-list load, or just rotating the phone.
function syncNavbarHeight() {
  const navbar = document.querySelector('.cala-navbar');
  if (navbar) document.documentElement.style.setProperty('--navbar-height', navbar.offsetHeight + 'px');
}

// App DOM Initializer
document.addEventListener('DOMContentLoaded', () => {
  setLanguage('vi');

  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const view = item.getAttribute('data-view');
      if (view) switchView(view);
      closeSidebar();
    });
  });

  const navbarEl = document.querySelector('.cala-navbar');
  if (navbarEl) {
    syncNavbarHeight();
    new ResizeObserver(syncNavbarHeight).observe(navbarEl);
  }

  fetchPublicSiteSettings();
  restoreSession();

  // Pairs with the history.pushState/replaceState calls at the end of
  // switchView() — this is what actually makes the phone's swipe-back
  // gesture (or hardware/gesture back button) step back through the
  // app's own views instead of leaving the site immediately.
  window.addEventListener('popstate', (event) => {
    const view = event.state && event.state.calaciView;
    // No calaciView means either a not-logged-in visit (never pushed
    // anything) or the stack is exhausted — nothing to restore in-app, so
    // just let it be; the *next* back gesture is what actually leaves
    // calaci.io.vn, same as reaching the start of a normal browsing
    // history.
    if (!view || !state.currentUser) return;
    _isPopStateNav = true;
    switchView(view);
    _isPopStateNav = false;
    closeSidebar();
    document.querySelectorAll('.modal-backdrop.active').forEach(m => m.classList.remove('active'));
  });
});
