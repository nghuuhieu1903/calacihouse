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
    inv_breakdown_title: 'Cơ Cấu Doanh Thu Tháng',
    inv_house_breakdown_title: 'Doanh Thu Theo Tòa Nhà',
    inv_rooms_title: 'Chi Tiết Doanh Thu Theo Phòng',
    col_house: 'Tòa Nhà',
    col_headcount: 'Số Người',
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
    toast_logout_success: 'Đã đăng xuất tài khoản!',
    role_superadmin_label: 'Super Admin',
    role_admin_label: 'Quản trị viên',
    role_manager_label: 'Quản lý',
    role_tenant_label: 'Khách thuê',
    all_houses_label: 'Tất Cả Tòa Nhà',
    all_rooms_label: 'Tất Cả Phòng',
    multiple_houses_label: 'Nhiều Tòa',
    rooms_unit_label: 'phòng',
    house_no_rooms_label: 'Chưa có phòng',
    services_empty_state: 'Chưa có dịch vụ nào. Nhấn "Thêm Dịch Vụ Mới" để tạo.',
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
    col_ticket_id: 'Mã Ticket',
    description_colon_label: 'Mô Tả:',
    no_attached_images: 'Không có ảnh đính kèm',
    title_click_to_enlarge: 'Click để xem ảnh lớn',
    no_responses_yet: 'Chưa có phản hồi nào.',
    default_tenant_label: 'Khách thuê',
    status_colon_label: 'Trạng thái:',
    title_view_larger_image: 'Xem ảnh lớn',
    toast_max_completion_images: 'Tối đa 5 ảnh nghiệm thu',
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
    nav_permissions: 'Phân Quyền Hệ Thống',
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
    lbl_expense_house: 'Tòa Nhà',
    lbl_expense_month: 'Tháng',
    lbl_expense_desc: 'Mô Tả',
    lbl_expense_amount: 'Số Tiền (VNĐ)',
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
    ir_line_net_revenue: 'Doanh thu chia sẻ',
    ir_line_manager_share: 'Phần quản lý giữ lại',
    ir_line_investor_share: 'Chủ đầu tư nhận',
    ir_summary_title: '📊 Tổng Hợp Theo Tòa Nhà',
    ir_select_house_hint: 'Chọn một tòa nhà cụ thể ở thanh trên để xem báo cáo chi tiết từng dòng.',
    ir_no_house_hint: 'Chưa có tòa nhà nào để lập báo cáo.',
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
    modal_edit_user_title: 'Chỉnh Sửa & Phân Quyền Thành Viên',
    lbl_role_permission: 'Vai trò / Quyền hạn',
    lbl_residing_room: 'Phòng lưu trú',
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
    inv_breakdown_title: 'Monthly Revenue Breakdown',
    inv_house_breakdown_title: 'Revenue By Building',
    inv_rooms_title: 'Revenue Detail By Room',
    col_house: 'Building',
    col_headcount: 'Occupants',
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
    toast_logout_success: 'Logged out successfully!',
    role_superadmin_label: 'Super Admin',
    role_admin_label: 'Administrator',
    role_manager_label: 'Manager',
    role_tenant_label: 'Tenant',
    all_houses_label: 'All Houses',
    all_rooms_label: 'All Rooms',
    multiple_houses_label: 'Multiple Houses',
    rooms_unit_label: 'rooms',
    house_no_rooms_label: 'No rooms yet',
    services_empty_state: 'No services yet. Click "Add New Service" to create one.',
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
    col_ticket_id: 'Ticket ID',
    description_colon_label: 'Description:',
    no_attached_images: 'No attached images',
    title_click_to_enlarge: 'Click to view full size',
    no_responses_yet: 'No responses yet.',
    default_tenant_label: 'Tenant',
    status_colon_label: 'Status:',
    title_view_larger_image: 'View larger image',
    toast_max_completion_images: 'Maximum 5 completion photos',
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
    nav_permissions: 'System Permissions',
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
    lbl_expense_house: 'House',
    lbl_expense_month: 'Month',
    lbl_expense_desc: 'Description',
    lbl_expense_amount: 'Amount (VND)',
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
    ir_line_net_revenue: 'Shared revenue',
    ir_line_manager_share: 'Management share',
    ir_line_investor_share: 'Investor receives',
    ir_summary_title: '📊 Summary By House',
    ir_select_house_hint: 'Pick a specific house in the top bar to see the line-by-line report.',
    ir_no_house_hint: 'No houses to report on yet.',
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
    modal_edit_user_title: 'Edit User & Permissions',
    lbl_role_permission: 'Role / Permission',
    lbl_residing_room: 'Assigned room',
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

const DEFAULT_CLIENT_USERS = [
  { username: 'admin', password: '123', fullName: 'Quản Lý Hệ Thống (Admin)', role: 'superadmin', roomId: '', status: 'approved' },
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
  permissions: [],
  houses: [
    { id: 'house_a', name: 'Tòa Nhà A - Cầu Giấy', address: '12 Nguyễn Phong Sắc, Cầu Giấy' },
    { id: 'house_b', name: 'Tòa Nhà B - Bình Thạnh', address: '45 Điện Biên Phủ, Bình Thạnh' }
  ],
  users: DEFAULT_CLIENT_USERS,
  rooms: [
    { id: 'R101', houseId: 'house_a', name: 'Phòng 101 (Tòa A)', tenant: 'Nguyễn Văn An', phone: '0901234567', baseRent: 3500000, headcount: 2 },
    { id: 'R102', houseId: 'house_a', name: 'Phòng 102 (Tòa A)', tenant: 'Trần Thị Bích', phone: '0912345678', baseRent: 4000000, headcount: 3 },
    { id: 'R201', houseId: 'house_b', name: 'Phòng 201 (Tòa B)', tenant: 'Lê Hoàng Nam', phone: '0987654321', baseRent: 3800000, headcount: 1 },
    { id: 'R202', houseId: 'house_b', name: 'Phòng 202 (Tòa B)', tenant: 'Phạm Minh Tuấn', phone: '0934567890', baseRent: 4200000, headcount: 2 }
  ],
  services: [
    { id: 'srv_elec', houseId: 'all', houseIds: ['all'], name: 'Tiền Điện', icon: 'zap', symbol: '⚡', calcType: 'formula', customFormula: 'x*3500', price: 0, unit: 'Theo chỉ số (kWh)' },
    { id: 'srv_water', houseId: 'all', houseIds: ['all'], name: 'Tiền Nước', icon: 'droplet', symbol: '💧', calcType: 'formula', customFormula: 'x*18000', price: 0, unit: 'Theo chỉ số (m³)' },
    { id: 'srv_trash', houseId: 'all', houseIds: ['all'], name: 'gom rác', icon: 'trash-2', symbol: '🧹', calcType: 'fixed', price: 50000, unit: 'Cố định / phòng' },
    { id: 'srv_internet', houseId: 'all', houseIds: ['all'], name: 'Internet', icon: 'wifi', symbol: '🌐', calcType: 'fixed', price: 50000, unit: 'Cố định / phòng' },
    { id: 'srv_parking', houseId: 'all', houseIds: ['all'], name: 'Phí Gửi Xe Máy', icon: 'bike', symbol: '🛵', calcType: 'fixed', price: 50000, unit: 'Cố định / phòng' }
  ],
  formulas: [],
  readings: {},
  invoices: [],
  tickets: [],
  roomDocuments: {},
  roomPhotos: {},
  salerCommissionPercent: 0,
  investorExpenses: [],
  investorFeePercent: 20,
  siteSettings: { siteName: 'CalaciHouse', title: 'CalaciHouse - Hệ Thống Quản Lý Phòng Trọ', description: '', keywords: '', shareImage: '', favicon: '' },
  customIcons: []
};

const API_BASE = '/api';

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
      setupUserRoleUI();
      await fetchState();
      // setupUserRoleUI()'s permission-gated nav items (rooms/houses/
      // invoices/tickets/accounts/...) read state.permissions, which is
      // still the empty [] default at the call above — every one of those
      // tabs evaluates to hidden. Re-run now that fetchState() has loaded
      // the real matrix, or a manager account never sees anything beyond
      // Tổng Quan for the rest of the session.
      setupUserRoleUI();
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
  const ogImageTag = document.getElementById('meta-og-image-tag');
  if (ogImageTag) ogImageTag.setAttribute('content', settings.shareImage || '');

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
        setupUserRoleUI();
        await fetchState();
        // Same reasoning as handleLogin() — re-run once state.permissions
        // is actually populated.
        setupUserRoleUI();
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
    const tabs = {
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

    let firstView = null;
    Object.keys(tabs).forEach(view => {
      const btn = document.querySelector(`.admin-nav [data-view="${view}"]`);
      if (btn) {
        const pair = tabs[view];
        const allowed = !pair || hasPermission(user.role, pair[0], pair[1]);
        btn.style.display = allowed ? 'flex' : 'none';
        if (allowed && !firstView) {
          firstView = view;
        }
      }
    });

    // Phân Quyền Hệ Thống and Thiết Lập Trang aren't in the `tabs` map
    // above — both are fixed superadmin-only levers, never driven by the
    // matrix itself (you can't grant "edit the permission matrix" via the
    // permission matrix), matching their routes' @superadmin_required
    // server-side.
    const permissionsNav = document.querySelector('.admin-nav [data-view="admin-permissions"]');
    if (permissionsNav) permissionsNav.style.display = user.role === 'superadmin' ? 'flex' : 'none';
    const siteSettingsNav = document.getElementById('nav-site-settings');
    if (siteSettingsNav) siteSettingsNav.style.display = user.role === 'superadmin' ? 'flex' : 'none';

    if (firstView) {
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
  ['select-house', 'invoices-select-house', 'spreadsheet-select-house'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  });
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

function handleHouseChange(sourceEl) {
  const value = sourceEl ? sourceEl.value : document.getElementById('select-house').value;
  state.currentHouseId = value;
  state.currentRoomId = 'all';
  ['select-house', 'invoices-select-house', 'spreadsheet-select-house'].forEach(id => {
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

  // switchView() (below, when logged in) calls this too, but on a genuinely
  // fresh/logged-out visit that branch never runs — leaving the login
  // screen's own icons (e.g. the plane-takeoff logo) as un-rendered blank
  // <i> tags forever, since nothing else on this screen ever calls it.
  lucide.createIcons();

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
      state.permissions = data.permissions || state.permissions;
      state.roomDocuments = data.roomDocuments || state.roomDocuments;
      state.roomPhotos = data.roomPhotos || state.roomPhotos;
      state.salerCommissionPercent = data.salerCommissionPercent || 0;
      state.investorExpenses = data.investorExpenses || state.investorExpenses;
      state.customIcons = data.customIcons || state.customIcons;
      if (data.siteSettings) applySiteSettings(data.siteSettings);
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
      items.push({ id: s.id, name, symbol, price: s.price, unit: unit === 'Theo đầu người' ? `${room.headcount} ${t('formula_per_person_label')} x ${formatMoney(s.price)}đ` : unit, total: cost, isParking: false });
    }
  });

  return { serviceTotal, parkingTotal, serviceCount, items };
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
    sBody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:1.5rem; color:var(--text-secondary);">${t('services_empty_state')}</td></tr>`;
  } else {
    activeServices.forEach(s => {
      let houseBadge = '';
      if (!s.houseId || s.houseId === 'all' || (Array.isArray(s.houseIds) && s.houseIds.includes('all'))) {
        houseBadge = `<span class="badge badge-paid" style="font-size:0.65rem;">🌐 ${t('all_houses_label')}</span>`;
      } else if (Array.isArray(s.houseIds)) {
        const names = state.houses.filter(h => s.houseIds.includes(h.id)).map(h => h.name).join(', ');
        houseBadge = `<span class="badge badge-resolved" style="font-size:0.65rem;">📍 ${names || t('multiple_houses_label')}</span>`;
      } else {
        const house = state.houses.find(h => h.id === s.houseId);
        houseBadge = `<span class="badge badge-resolved" style="font-size:0.65rem;">📍 ${house ? house.name : s.houseId}</span>`;
      }

      let roomBadge = '';
      if (!s.roomIds || (Array.isArray(s.roomIds) && s.roomIds.includes('all'))) {
        roomBadge = `<span class="badge badge-paid" style="font-size:0.65rem;">🚪 ${t('all_rooms_label')}</span>`;
      } else if (Array.isArray(s.roomIds)) {
        const roomNames = state.rooms.filter(r => s.roomIds.includes(r.id)).map(r => r.name.replace('Phòng ', 'P.')).join(', ');
        roomBadge = `<span class="badge badge-resolved" style="font-size:0.65rem;">🔑 ${roomNames || s.roomIds.length + ' ' + t('rooms_unit_label')}</span>`;
      }

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

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <div style="display:flex; align-items:center; gap:0.6rem;">
            <div style="width:36px; height:36px; border-radius:50%; background:var(--cala-blue-light); color:var(--cala-blue); display:flex; align-items:center; justify-content:center; font-size:1.1rem; font-weight:bold;">
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
          <button class="btn btn-secondary btn-sm" onclick="editService('${s.id}')" title="${t('title_edit_service_icon')}"><i data-lucide="edit"></i> ${t('btn_edit')}</button>
          ${canDelete() ? `<button class="btn btn-secondary btn-sm" onclick="deleteServiceApi('${s.id}')" style="color: var(--cala-red);" title="${t('btn_delete')}"><i data-lucide="trash-2"></i></button>` : ''}
        </td>
      `;
      sBody.appendChild(tr);
    });
  }

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
  lucide.createIcons();
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
  try {
    await fetch(`${API_BASE}/custom-icons/save`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ icons: state.customIcons })
    });
  } catch (err) {
    console.warn('Custom icons saved locally:', err);
  }
}

function saveCustomIcon(event) {
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

  persistCustomIcons();
  renderIconPicker(document.getElementById('service-icon').value);
  closeModal('modal-custom-icon');
  showToast(t('toast_icon_saved'), 'success');
}

function deleteCustomIcon() {
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
  persistCustomIcons();
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

  container.innerHTML = `
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem;">
      ${state.houses.map(h => {
        const roomCount = state.rooms.filter(r => r.houseId === h.id).length;
        return `
          <div class="cala-card" style="padding: 1.1rem 1.25rem;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.6rem;">
              <div>
                <div style="font-weight:800; font-size:1rem;">${h.name}</div>
                <div style="font-size:0.8rem; color:var(--text-secondary); margin-top:2px;">${t('lbl_house_address_short')} ${h.address || '—'}</div>
              </div>
              <span class="badge badge-resolved" style="font-size:0.7rem; flex-shrink:0;">${roomCount} ${t('rooms_unit_label')}</span>
            </div>
            ${h.description ? `<div style="font-size:0.82rem; color:var(--text-secondary); margin-bottom:0.75rem;">${h.description}</div>` : ''}
            <div style="display:flex; gap:0.5rem; margin-top:0.75rem;">
              <button class="btn btn-blue btn-sm" style="flex:1; justify-content:center;" onclick="openEditHouseModal('${h.id}')">
                <i data-lucide="edit-2"></i> ${t('btn_edit')}
              </button>
              ${canDelete() ? `<button class="btn btn-secondary btn-sm" style="color:var(--color-danger); border-color:var(--color-danger);" onclick="deleteHouseConfirm('${h.id}')">
                <i data-lucide="trash-2"></i>
              </button>` : ''}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
  lucide.createIcons();
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
  lucide.createIcons();
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
    lucide.createIcons();
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
  } else {
    boxFixed.style.display = 'block';
    boxFormula.style.display = 'none';
  }
}

function toggleServiceInvestorFields() {
  const enabled = document.getElementById('service-investor-enabled').checked;
  const box = document.getElementById('box-service-investor-fields');
  const mode = document.getElementById('service-investor-mode').value;
  const valueInput = document.getElementById('service-investor-value');

  box.style.display = enabled ? 'block' : 'none';
  valueInput.style.display = mode === 'full' ? 'none' : 'block';
  valueInput.placeholder = mode === 'percent' ? 'VD: 50' : 'VD: 50000';
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
  document.getElementById('service-investor-enabled').checked = true;
  document.getElementById('service-investor-mode').value = 'full';
  document.getElementById('service-investor-value').value = '';

  renderIconPicker('package');
  toggleServiceCalcFields();
  toggleServiceInvestorFields();

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

  const investorShare = srv.investorShare || { enabled: true, mode: 'full', value: 0 };
  document.getElementById('service-investor-enabled').checked = !!investorShare.enabled;
  document.getElementById('service-investor-mode').value = investorShare.mode || 'full';
  document.getElementById('service-investor-value').value = investorShare.value || '';
  toggleServiceInvestorFields();

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
  const investorEnabled = document.getElementById('service-investor-enabled').checked;
  const investorMode = document.getElementById('service-investor-mode').value;
  const investorValue = parseFloat(document.getElementById('service-investor-value').value) || 0;
  const investorShare = { enabled: investorEnabled, mode: investorMode, value: investorMode === 'full' ? 0 : investorValue };
  let sObj = { id: id || genId('srv_'), houseId, houseIds: selectedHouseIds, roomIds: selectedRoomIds, name, icon, symbol, calcType, investorShare };

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

  showToast(`${t('toast_service_saved_prefix')}"${name}" (${symbol})${t('toast_service_saved_suffix')}`, 'success');
  closeModal('modal-service-config');
  renderServicesConfig();
  if (state.currentView === 'admin-spreadsheet') renderSpreadsheet();
}

async function deleteServiceApi(srvId) {
  if (!confirm(t('confirm_delete_service'))) return;
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
  const activeRooms = getFilteredRooms();
  const monthReadings = state.readings[state.currentMonth] || {};

  let totalRent = 0, totalElec = 0, totalWater = 0, totalService = 0;
  let occupiedCount = 0;

  activeRooms.forEach(r => {
    if (r.tenant) occupiedCount++;
    totalRent += roomRentTotal(r);

    const rd = monthReadings[r.id] || {};
    // Only services checked "gửi cho Chủ Đầu Tư" count toward what the
    // investor's own dashboard shows — this is their own account, so
    // anything left unchecked must stay invisible here too, not just on
    // the admin-facing report.
    const houseServices = state.services.filter(s => serviceMatchesHouse(s, r.houseId) && serviceMatchesRoom(s, r.id) && s.investorShare && s.investorShare.enabled);
    houseServices.forEach(s => {
      if (s.calcType === 'formula') {
        const isElec = s.name.includes('Điện');
        const usage = isElec ? Math.max(0, (rd.elecNew || 0) - (rd.elecOld || 0)) : Math.max(0, (rd.waterNew || 0) - (rd.waterOld || 0));
        const cost = utilityCostForRoom(s.customFormula, usage, isElec, r);
        const shared = investorShareForAmount(s.investorShare, cost);
        if (isElec) totalElec += shared; else totalWater += shared;
      } else {
        const cost = calculateServiceCostForRoom(s, r);
        totalService += investorShareForAmount(s.investorShare, cost);
      }
    });
  });

  const totalRevenue = totalRent + totalElec + totalWater + totalService;

  const monthInvoices = state.invoices.filter(inv => inv.month === state.currentMonth && (state.currentHouseId === 'all' || inv.houseId === state.currentHouseId));
  const paidInvoices = monthInvoices.filter(i => i.status === 'Đã thanh toán');
  const pendingInvoices = monthInvoices.filter(i => i.status !== 'Đã thanh toán');
  const collectedAmount = paidInvoices.reduce((sum, i) => sum + computeInvestorInvoiceBreakdown(i).total, 0);
  const outstandingAmount = pendingInvoices.reduce((sum, i) => sum + computeInvestorInvoiceBreakdown(i).total, 0);

  const openTickets = state.tickets.filter(tk => tk.status !== 'Đã hoàn thành').length;
  const occupancyRate = activeRooms.length ? Math.round((occupiedCount / activeRooms.length) * 100) : 0;

  const setText = (id, val) => { const el = document.getElementById(id); if (el) el.innerText = val; };
  setText('inv-stat-revenue', formatMoney(totalRevenue) + ' đ');
  setText('inv-stat-occupancy', `${occupiedCount}/${activeRooms.length} (${occupancyRate}%)`);
  setText('inv-stat-collected', formatMoney(collectedAmount) + ' đ');
  setText('inv-stat-outstanding', formatMoney(outstandingAmount) + ' đ');
  setText('inv-stat-tickets', openTickets);

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
    if (activeRooms.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:1.5rem; color:var(--text-secondary);">${t('spreadsheet_empty_state')}</td></tr>`;
    } else {
      tbody.innerHTML = activeRooms.map(r => {
        const inv = monthInvoices.find(i => i.roomId === r.id);
        const total = inv ? computeInvestorInvoiceBreakdown(inv).total : roomRentTotal(r);
        const statusBadge = inv
          ? `<span class="badge ${inv.status === 'Đã thanh toán' ? 'badge-paid' : 'badge-pending'}">${statusLabel(inv.status)}</span>`
          : `<span class="badge badge-resolved">${t('dashboard_no_invoices_hint')}</span>`;
        const house = state.houses.find(h => h.id === r.houseId);
        return `
          <tr>
            <td><strong>${r.name}</strong>${house ? `<br><small style="color:var(--text-muted);">${house.name}</small>` : ''}</td>
            <td>${r.tenant || `<em>${t('empty_tenant_label')}</em>`}</td>
            <td>${r.headcount}</td>
            <td>${formatMoney(roomRentTotal(r))} đ</td>
            <td style="font-weight:800; color:var(--cala-orange);">${formatMoney(total)} đ</td>
            <td>${statusBadge}</td>
            <td>${inv ? `<button class="btn btn-secondary btn-sm" onclick="viewInvestorInvoiceDetail('${inv.id}')"><i data-lucide="eye"></i> ${t('btn_view_details')}</button>` : ''}</td>
          </tr>
        `;
      }).join('');
      lucide.createIcons();
    }
  }

  const houseBreakdownCard = document.getElementById('investor-house-breakdown-card');
  const houseBreakdownBody = document.getElementById('investor-house-breakdown-body');
  if (houseBreakdownCard && houseBreakdownBody) {
    if (state.houses.length > 1) {
      houseBreakdownCard.style.display = 'block';
      houseBreakdownBody.innerHTML = state.houses.map(h => {
        const houseInvoices = state.invoices.filter(i => i.month === state.currentMonth && i.houseId === h.id);
        const houseTotal = houseInvoices.reduce((s, i) => s + computeInvestorInvoiceBreakdown(i).total, 0);
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
    } else {
      houseBreakdownCard.style.display = 'none';
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
              <input type="number" class="excel-input" value="${oldVal || 0}" onchange="updateReadingApi('${r.id}', '${oldField}', this.value)">
              ${meterPhotoButtonHtml(r.id, oldField + 'Photo', oldPhoto)}
            </td>
            <td>
              <input type="number" class="excel-input" value="${newVal || 0}" onchange="updateReadingApi('${r.id}', '${newField}', this.value)">
              ${meterPhotoButtonHtml(r.id, newField + 'Photo', newPhoto)}
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
          <button class="btn btn-secondary btn-sm" onclick="openEditRoomModal('${r.id}')" title="${t('title_edit_room_price')}">
            <i data-lucide="edit-3"></i> ${t('btn_edit_price')}
          </button>
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
  // un-rendered blank icons until the next full view switch.
  lucide.createIcons();
}

function isReadingTextField(field) {
  return field.endsWith('Photo');
}

function meterPhotoButtonHtml(roomId, field, photoDataUrl) {
  const inputId = `meter-photo-input-${roomId}-${field}`;
  const hasPhoto = !!photoDataUrl;
  return `
    <input type="file" accept="image/*" id="${inputId}" style="display:none" onchange="handleMeterPhotoUpload(event, '${roomId}', '${field}')">
    <button type="button" class="btn btn-sm" title="${hasPhoto ? t('btn_meter_photo_view') : t('btn_meter_photo_upload')}"
      style="padding:2px 5px; margin-top:2px; ${hasPhoto ? 'color:var(--cala-blue); border-color:var(--cala-blue);' : ''}"
      onclick="${hasPhoto ? `viewMeterPhoto('${roomId}', '${field}')` : `document.getElementById('${inputId}').click()`}">
      <i data-lucide="camera" style="width:13px; height:13px; pointer-events:none;"></i>
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

function viewMeterPhoto(roomId, field) {
  const rd = (state.readings[state.currentMonth] || {})[roomId] || {};
  const dataUrl = rd[field];
  if (!dataUrl) return;
  const inputId = `meter-photo-input-${roomId}-${field}`;
  const content = document.getElementById('modal-meter-photo-content');
  if (content) {
    content.innerHTML = `
      <img src="${dataUrl}" style="width:100%; border-radius:var(--radius-md);">
      <button type="button" class="btn btn-sm" style="margin-top:0.75rem;" onclick="document.getElementById('${inputId}').click()">
        <i data-lucide="upload"></i> ${t('btn_meter_photo_replace')}
      </button>
    `;
  }
  document.getElementById('modal-meter-photo').classList.add('active');
  lucide.createIcons();
}

function openInvoiceMeterPhotos(invoiceId) {
  const inv = state.invoices.find(i => i.id === invoiceId);
  if (!inv) return;
  const content = document.getElementById('modal-meter-photo-content');
  if (!content) return;

  const pairs = [
    { label: t('line_electricity_short') + ' - ' + t('meter_old_label'), url: inv.elecOldPhoto },
    { label: t('line_electricity_short') + ' - ' + t('meter_new_label'), url: inv.elecNewPhoto },
    { label: t('line_water_short') + ' - ' + t('meter_old_label'), url: inv.waterOldPhoto },
    { label: t('line_water_short') + ' - ' + t('meter_new_label'), url: inv.waterNewPhoto }
  ].filter(p => p.url);

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
  document.getElementById('modal-meter-photo').classList.add('active');
  lucide.createIcons();
}

async function updateReadingApi(roomId, field, value) {
  if (!state.readings[state.currentMonth]) state.readings[state.currentMonth] = {};
  if (!state.readings[state.currentMonth][roomId]) state.readings[state.currentMonth][roomId] = {};
  state.readings[state.currentMonth][roomId][field] = isReadingTextField(field) ? value : (parseFloat(value) || 0);

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
        serviceItems.push({
          id: s.id,
          name: s.name,
          symbol,
          price: s.price,
          unit: s.unit === 'Theo đầu người' ? `${r.headcount} ${t('formula_per_person_label')} x ${formatMoney(s.price)}đ` : s.unit,
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
      baseRent: roomRentTotal(r), elecOld: rd.elecOld, elecNew: rd.elecNew, elecUsage, elecFormula: elecFormulaText, elecCost,
      waterOld: rd.waterOld, waterNew: rd.waterNew, waterUsage, waterFormula: waterFormulaText, waterCost,
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

  showToast(`${t('toast_invoices_issued_prefix')}${formatMonthLabel(state.currentMonth)}!`, 'success');
  renderCurrentView();
}

function renderAdminInvoices() {
  const tbody = document.getElementById('admin-invoices-tbody');
  tbody.innerHTML = '';
  const monthInvoices = state.invoices.filter(i => i.month === state.currentMonth && (state.currentHouseId === 'all' || i.houseId === state.currentHouseId));

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
      <td data-label="${t('col_pay_status')}"><span class="badge ${inv.status === 'Đã thanh toán' ? 'badge-paid' : 'badge-pending'}">${statusLabel(inv.status)}</span></td>
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
  lucide.createIcons();
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

function updateInvestorFeePercent(value) {
  const v = parseFloat(value);
  state.investorFeePercent = isNaN(v) ? 20 : Math.min(100, Math.max(0, v));
  renderInvestorReport();
}

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

// Computes what a single invoice looks like once every service's
// investor-share config is applied — room rent always in full, each
// elec/water/fixed service either dropped (disabled), shown in full,
// shown as a %, or shown as a flat configured figure. Shared by the
// admin-facing investor report, the investor's own dashboard totals, and
// the investor's own invoice-detail modal, so all three always agree.
function computeInvestorInvoiceBreakdown(inv) {
  const rent = inv.baseRent || 0;
  const services = [];

  // elecCost/waterCost aren't tagged with a service id on the invoice —
  // re-derive which formula service produced each one the same way
  // generateAndSendAllInvoices() does (name-contains-"Điện" convention).
  const formulaServices = state.services.filter(s => s.calcType === 'formula' && serviceMatchesHouse(s, inv.houseId) && serviceMatchesRoom(s, inv.roomId));
  formulaServices.forEach(s => {
    if (!s.investorShare || !s.investorShare.enabled) return;
    const isElec = s.name.includes('Điện');
    const actual = isElec ? (inv.elecCost || 0) : (inv.waterCost || 0);
    services.push({
      id: s.id,
      name: s.name,
      symbol: s.symbol || (isElec ? '⚡' : '💧'),
      unit: isElec ? `${inv.elecUsage || 0} kWh` : `${inv.waterUsage || 0} m³`,
      mode: s.investorShare.mode || 'full',
      value: s.investorShare.value || 0,
      shared: investorShareForAmount(s.investorShare, actual)
    });
  });

  (inv.serviceItems || []).forEach(item => {
    const s = state.services.find(sv => sv.id === item.id);
    const investorShare = s ? s.investorShare : { enabled: true, mode: 'full', value: 0 };
    if (!investorShare || !investorShare.enabled) return;
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

function computeInvestorReportData(houseId, month) {
  const invoices = state.invoices.filter(i => i.month === month && i.houseId === houseId);
  // Room rent is always sent to the investor in full — it's not part of
  // the per-service opt-in/opt-out system at all.
  const rent = invoices.reduce((s, i) => s + (i.baseRent || 0), 0);

  const serviceTotals = {};
  invoices.forEach(inv => {
    computeInvestorInvoiceBreakdown(inv).services.forEach(sv => {
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

  const sharedRevenue = rent + servicesShared - expenses;
  const feePercent = state.investorFeePercent != null ? state.investorFeePercent : 20;
  const managerShare = sharedRevenue * (feePercent / 100);
  const investorShare = sharedRevenue - managerShare;

  return { invoiceCount: invoices.length, rent, serviceBreakdown, servicesShared, expenses, sharedRevenue, feePercent, managerShare, investorShare };
}

function renderInvestorReportCard(house, d) {
  const line = (label, value, opts = {}) => `
    <div style="display:flex; justify-content:space-between; gap:1rem; ${opts.style || ''}">
      <span>${label}</span>
      <strong>${opts.prefix || ''}${formatMoney(value)} đ</strong>
    </div>
  `;
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
        ${line('🔧 ' + t('ir_line_expenses'), d.expenses, { prefix: '−', style: 'color:var(--cala-red);' })}
        <hr style="border-color:var(--border-color); width:100%;">
        ${line(t('ir_line_net_revenue'), d.sharedRevenue, { style: 'font-size:1.05rem; font-weight:800;' })}
        ${line(`${t('ir_line_manager_share')} (${d.feePercent}%)`, d.managerShare)}
      </div>

      <div style="margin-top:1.25rem; padding:1.25rem; border-radius:var(--radius-lg); background:linear-gradient(135deg, var(--cala-blue-light) 0%, #ffffff 100%); border:1px solid #bce2fd; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
        <div style="font-weight:800; color:var(--cala-blue-dark);">${t('ir_line_investor_share')} (${100 - d.feePercent}%)</div>
        <div style="font-size:1.6rem; font-weight:800; color:var(--cala-blue);">${formatMoney(d.investorShare)} đ</div>
      </div>
    </div>
  `;
}

function renderInvestorReportSummaryTable(houses, month) {
  let totalShared = 0, totalExpenses = 0, totalInvestor = 0;
  const rows = houses.map(h => {
    const d = computeInvestorReportData(h.id, month);
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

function renderInvestorReport() {
  renderInvestorExpensesTable();

  const feeInput = document.getElementById('ir-fee-percent');
  if (feeInput && document.activeElement !== feeInput) {
    feeInput.value = state.investorFeePercent;
  }

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
  const d = computeInvestorReportData(house.id, month);
  container.innerHTML = renderInvestorReportCard(house, d);
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
        <td>${e.description}</td>
        <td>${house ? house.name : e.houseId}</td>
        <td style="text-align:right; font-weight:700; color:var(--cala-red);">${formatMoney(e.amount)} đ</td>
        <td style="text-align:right;">
          <div style="display:flex; gap:0.5rem; justify-content:flex-end;">
            <button class="btn btn-secondary btn-sm" onclick="openEditInvestorExpenseModal('${e.id}')"><i data-lucide="edit-2"></i></button>
            ${canDelete() ? `<button class="btn btn-secondary btn-sm" onclick="deleteInvestorExpenseApi('${e.id}')" style="color:var(--cala-red);"><i data-lucide="trash-2"></i></button>` : ''}
          </div>
        </td>
      </tr>
    `;
  }).join('');

  lucide.createIcons();
}

function openAddInvestorExpenseModal() {
  document.getElementById('ie-id').value = '';
  document.getElementById('ie-house-id').innerHTML = state.houses.map(h => `<option value="${h.id}">${h.name}</option>`).join('');
  if (state.currentHouseId !== 'all') document.getElementById('ie-house-id').value = state.currentHouseId;
  document.getElementById('ie-month').value = state.currentMonth;
  document.getElementById('ie-description').value = '';
  document.getElementById('ie-amount').value = '';
  document.getElementById('modal-investor-expense-title').innerHTML = `<i data-lucide="wrench" style="color: var(--cala-orange); vertical-align: middle;"></i> ${t('modal_add_expense_title')}`;
  document.getElementById('modal-investor-expense').classList.add('active');
  lucide.createIcons();
}

function openEditInvestorExpenseModal(expenseId) {
  const e = state.investorExpenses.find(x => x.id === expenseId);
  if (!e) return;
  document.getElementById('ie-id').value = e.id;
  document.getElementById('ie-house-id').innerHTML = state.houses.map(h => `<option value="${h.id}">${h.name}</option>`).join('');
  document.getElementById('ie-house-id').value = e.houseId;
  document.getElementById('ie-month').value = e.month;
  document.getElementById('ie-description').value = e.description;
  document.getElementById('ie-amount').value = e.amount;
  document.getElementById('modal-investor-expense-title').innerHTML = `<i data-lucide="wrench" style="color: var(--cala-orange); vertical-align: middle;"></i> ${t('modal_edit_expense_title')}`;
  document.getElementById('modal-investor-expense').classList.add('active');
  lucide.createIcons();
}

async function submitInvestorExpense(event) {
  event.preventDefault();
  const id = document.getElementById('ie-id').value;
  const houseId = document.getElementById('ie-house-id').value;
  const month = document.getElementById('ie-month').value;
  const description = document.getElementById('ie-description').value.trim();
  const amount = parseFloat(document.getElementById('ie-amount').value) || 0;

  const eObj = { id: id || genId('exp_'), houseId, month, description, amount };
  const idx = state.investorExpenses.findIndex(x => x.id === eObj.id);
  if (idx >= 0) state.investorExpenses[idx] = { ...state.investorExpenses[idx], ...eObj };
  else state.investorExpenses.push(eObj);

  try {
    await fetch(`${API_BASE}/investor-expenses/save`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(eObj)
    });
  } catch (err) {
    console.warn('Saved expense locally:', err);
  }

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

function renderAdminUsers() {
  const tbody = document.getElementById('admin-users-tbody');
  tbody.innerHTML = '';
  const dict = I18N[state.lang] || I18N.vi;

  state.users.forEach(u => {
    const room = state.rooms.find(r => r.id === u.roomId);
    // Deleting a room now clears roomId off any tenant pointing at it, but
    // older data from before that fix (or a room deleted some other way)
    // can still leave this pointing at nothing — show that plainly instead
    // of the bare, meaningless room id string.
    let roomLabel = room ? room.name : (u.roomId ? `⚠️ ${t('room_deleted_label')}` : t('unassigned_label'));
    if (u.role === 'investor') {
      const house = state.houses.find(h => h.id === u.houseId);
      roomLabel = u.houseId === 'all' ? `🌐 ${t('all_houses_label')}` : (house ? `📍 ${house.name}` : t('unassigned_label'));
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
          ${u.status === 'pending' ? `
            <button class="btn btn-blue btn-sm" onclick="approveUserApi('${u.id}')">
              <i data-lucide="check"></i> ${dict.btn_approve}
            </button>
          ` : ''}
          ${u.id !== 'usr_admin' && u.status !== 'pending' ? (
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
          <button class="btn btn-blue btn-sm" onclick="openEditUserModal('${u.id}')">
            <i data-lucide="edit-2"></i> ${t('btn_edit')}
          </button>
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
  lucide.createIcons();
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
    const res = await fetch(`${API_BASE}/users/approve`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, roomId })
    });
    const data = await res.json();
    // The room this tenant just got assigned to may already have a
    // different approved tenant account on it — that account just moved
    // out, so the server switches it off automatically. Reflect that
    // locally and let the admin know who.
    applyDeactivatedUsernames(data.deactivatedUsernames);
  } catch (err) {
    console.warn('Approved user locally:', err);
  }

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

  showToast(t('toast_user_deleted'), 'success');
  renderAdminUsers();
}

function populateHouseOptions(selectEl, includeAllOption) {
  if (!selectEl) return;
  let html = includeAllOption ? `<option value="all">🌐 ${t('all_houses_label')}</option>` : '';
  html += state.houses.map(h => `<option value="${h.id}">${h.name}</option>`).join('');
  selectEl.innerHTML = html;
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
}

function toggleRoomSelectInCreateModal() {
  const role = document.getElementById('create-role').value;
  const isTenant = role === 'tenant';
  const isInvestor = role === 'investor';
  const houseBox = document.getElementById('box-create-assign-house');
  const roomBox = document.getElementById('box-assign-room');
  if (houseBox) houseBox.style.display = (isTenant || isInvestor) ? 'block' : 'none';
  if (roomBox) roomBox.style.display = isTenant ? 'block' : 'none';

  const houseSelect = document.getElementById('create-house-id');
  if (isInvestor) {
    populateHouseOptions(houseSelect, true);
  } else if (isTenant) {
    populateHouseOptions(houseSelect, false);
    handleCreateHouseChange();
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
    if (houseSelect) houseSelect.value = u.houseId || 'all';
  } else {
    const userRoom = state.rooms.find(r => r.id === u.roomId);
    const userHouseId = userRoom ? userRoom.houseId : (state.houses[0] ? state.houses[0].id : '');
    if (houseSelect && userHouseId) houseSelect.value = userHouseId;
    handleEditHouseChange(u.roomId);
  }

  // Clear password field - always blank when modal opens
  const pwdField = document.getElementById('edit-new-password');
  if (pwdField) pwdField.value = '';
  document.getElementById('modal-edit-user').classList.add('active');
  lucide.createIcons();
}

function handleEditHouseChange(selectedRoomId = '') {
  const houseSelect = document.getElementById('edit-house-id');
  const houseId = houseSelect ? houseSelect.value : '';
  const roomSelect = document.getElementById('edit-room-id');
  if (!roomSelect) return;
  const filteredRooms = state.rooms.filter(r => r.houseId === houseId);
  roomSelect.innerHTML = `<option value="">-- ${t('unassigned_none_placeholder')} --</option>` +
    filteredRooms.map(r => `<option value="${r.id}" ${r.id === selectedRoomId ? 'selected' : ''}>${r.name} (${r.tenant || t('vacant_label')})</option>`).join('');
}

function toggleRoomSelectInEditModal() {
  const role = document.getElementById('edit-role').value;
  const isTenant = role === 'tenant';
  const isInvestor = role === 'investor';
  const houseBox = document.getElementById('box-edit-assign-house');
  const roomBox = document.getElementById('box-edit-assign-room');
  if (houseBox) houseBox.style.display = (isTenant || isInvestor) ? 'block' : 'none';
  if (roomBox) roomBox.style.display = isTenant ? 'block' : 'none';

  const houseSelect = document.getElementById('edit-house-id');
  if (isInvestor) {
    populateHouseOptions(houseSelect, true);
  } else if (isTenant) {
    populateHouseOptions(houseSelect, false);
    handleEditHouseChange();
  }
}

async function handleAdminSaveUser(event) {
  event.preventDefault();
  const id = document.getElementById('edit-user-id').value;
  const fullName = document.getElementById('edit-fullname').value.trim();
  const role = document.getElementById('edit-role').value;
  const roomId = role === 'tenant' ? document.getElementById('edit-room-id').value : '';
  const houseId = role === 'investor' ? document.getElementById('edit-house-id').value : '';
  const status = document.getElementById('edit-status').value;
  const newPasswordField = document.getElementById('edit-new-password');
  const newPassword = newPasswordField ? newPasswordField.value.trim() : '';

  const uIdx = state.users.findIndex(u => u.id === id);
  if (uIdx >= 0) {
    state.users[uIdx].fullName = fullName;
    state.users[uIdx].role = role;
    state.users[uIdx].roomId = roomId;
    state.users[uIdx].houseId = houseId;
    state.users[uIdx].status = status;
  }

  const payload = { id, fullName, role, roomId, houseId, status };
  if (newPassword) payload.newPassword = newPassword;

  try {
    const res = await fetch(`${API_BASE}/users/save`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    applyDeactivatedUsernames(data.deactivatedUsernames);
  } catch (err) {
    console.warn('Saved user locally:', err);
  }

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
  const houseId = role === 'investor' ? document.getElementById('create-house-id').value : '';

  const newUser = { id: genId('usr_'), username, password, fullName, role, roomId, houseId, status: 'approved', createdAt: 'Hôm nay' };
  state.users.push(newUser);

  try {
    await fetch(`${API_BASE}/users/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, fullName, role, roomId, houseId })
    });
  } catch (err) {
    console.warn('Created user locally:', err);
  }

  showToast(t('toast_user_created'), 'success');
  closeModal('modal-create-user');
  renderAdminUsers();
}

function renderTenantContractView() {
  const user = state.currentUser;
  const userRoomId = (user && user.roomId) ? user.roomId : (state.rooms[0] ? state.rooms[0].id : 'R101');
  const room = state.rooms.find(r => r.id === userRoomId);
  const container = document.getElementById('tenant-contract-container');
  if (!container) return;

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
    lucide.createIcons();
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
  lucide.createIcons();
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
    lucide.createIcons();
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
          <tr><td style="padding:0.75rem; font-weight:bold;">${rentLineNo}. ${t('line_room_rent')}</td><td style="padding:0.75rem;">${roomRentFormulaDescription(room, false)}</td><td style="padding:0.75rem; text-align:right; font-weight:700;">${formatMoney(personalRent)} đ</td></tr>
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
    </div>
  `;
  lucide.createIcons();
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
    lucide.createIcons();
  }
}

function viewInvoiceDetail(invoiceId) {
  const inv = state.invoices.find(i => i.id === invoiceId);
  if (!inv) return;
  const content = document.getElementById('modal-invoice-content');

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

  content.innerHTML = `
    <div class="invoice-paper" style="box-shadow:none; border:1px solid var(--border-color);">
      <h3 style="color:#03121a;">${t('invoice_detail_title_prefix')}${inv.roomName}</h3>
      <div style="margin:1rem 0;">${t('tenant_colon_label')} <strong>${inv.tenant}</strong> (${inv.phone})</div>
      <table class="excel-table" style="color:#03121a;">
        <tr><td>${rentLineNo}. ${t('line_room_rent_short')}${room && room.roomType === 'dorm' ? `<br><small style="color:#687176;">${roomRentFormulaDescription(room, true)}</small>` : ''}</td><td style="text-align:right;">${formatMoney(inv.baseRent)} đ</td></tr>
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
    </div>
  `;
  document.getElementById('modal-invoice-detail').classList.add('active');
  lucide.createIcons();
}

// Investor-facing counterpart to viewInvoiceDetail() — the investor's own
// account must only ever see what's actually configured to be shared with
// them (room rent always in full, each service per its investorShare
// setting), never the tenant's real total.
function viewInvestorInvoiceDetail(invoiceId) {
  const inv = state.invoices.find(i => i.id === invoiceId);
  if (!inv) return;
  const content = document.getElementById('modal-invoice-content');
  const breakdown = computeInvestorInvoiceBreakdown(inv);

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

  // Group by house
  const byHouse = {};
  state.rooms.forEach(r => {
    const hid = r.houseId || 'unknown';
    if (!byHouse[hid]) byHouse[hid] = [];
    byHouse[hid].push(r);
  });

  // Sort by the numeric part of the room name (e.g. "Phòng 4401" -> 4401)
  // so rooms read in ascending order instead of whatever order they were
  // created/saved in. Falls back to plain text comparison for names with
  // no digits at all.
  const roomSortKey = r => {
    const match = (r.name || '').match(/\d+/);
    return match ? parseInt(match[0], 10) : null;
  };
  Object.keys(byHouse).forEach(hid => {
    byHouse[hid].sort((a, b) => {
      const numA = roomSortKey(a);
      const numB = roomSortKey(b);
      if (numA !== null && numB !== null && numA !== numB) return numA - numB;
      if (numA !== null && numB === null) return -1;
      if (numA === null && numB !== null) return 1;
      return (a.name || '').localeCompare(b.name || '');
    });
  });

  let html = '';
  Object.keys(byHouse).forEach(hid => {
    const house = state.houses.find(h => h.id === hid);
    const rooms = byHouse[hid];
    html += `
      <div style="margin-bottom: 1.5rem;">
        <div style="font-size: 1rem; font-weight: 800; color: var(--cala-blue); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
          <i data-lucide="building-2" style="width:18px;height:18px;"></i>
          ${house ? house.name : hid}
          <span class="badge badge-resolved" style="font-size:0.7rem;">${rooms.length} ${t('rooms_unit_label')}</span>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem;">
          ${rooms.map(r => `
            <div class="cala-card" style="position:relative; padding: 1.1rem 1.25rem;">
              <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.6rem;">
                <div>
                  <div style="font-weight:800; font-size:1rem;">${r.name}</div>
                  <div style="font-size:0.8rem; color:var(--text-secondary);">${r.tenant || t('no_tenant_label')} ${r.phone ? '· ' + r.phone : ''}</div>
                </div>
                <label class="switch-toggle" onclick="event.preventDefault(); toggleRoomActive('${r.id}');" title="${r.tenant ? t('tooltip_deactivate_room') : t('tooltip_activate_room')}">
                  <input type="checkbox" ${r.tenant ? 'checked' : ''} readonly>
                  <span class="switch-slider"></span>
                </label>
              </div>
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.4rem; font-size:0.82rem; margin-bottom:0.75rem;">
                <div><span style="color:var(--text-muted);">${t('rent_price_label')}</span><br><strong>${formatMoney(r.baseRent)}đ/${t('per_month_label')}</strong></div>
                <div><span style="color:var(--text-muted);">${t('headcount_label')}</span><br><strong>${r.headcount || 1} ${t('formula_per_person_label')}</strong></div>
                ${r.roomType === 'dorm' && r.capacity ? `<div><span style="color:var(--text-muted);">${t('capacity_label')}</span><br><strong>${r.capacity} ${t('formula_per_person_label')}</strong></div>` : ''}
              </div>
              ${r.contractStart || r.contractEnd ? `
                <div style="display:flex; align-items:center; gap:0.4rem; font-size:0.78rem; color:var(--text-secondary); margin-bottom:0.75rem;">
                  <i data-lucide="calendar" style="width:13px; height:13px; flex-shrink:0;"></i>
                  <span>${r.contractStart || '?'} → ${r.contractEnd || t('contract_no_end_date')}</span>
                  ${contractStatusBadgeHtml(r)}
                </div>
              ` : ''}
              <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
                <button class="btn btn-blue btn-sm" style="flex:1; justify-content:center;" onclick="openEditRoomModal('${r.id}')">
                  <i data-lucide="edit-2"></i> ${t('btn_edit')}
                </button>
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
  lucide.createIcons();
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

  const byHouse = {};
  state.rooms.forEach(r => {
    const hid = r.houseId || 'unknown';
    if (!byHouse[hid]) byHouse[hid] = [];
    byHouse[hid].push(r);
  });

  const roomSortKey = r => {
    const match = (r.name || '').match(/\d+/);
    return match ? parseInt(match[0], 10) : null;
  };
  Object.keys(byHouse).forEach(hid => {
    byHouse[hid].sort((a, b) => {
      const numA = roomSortKey(a);
      const numB = roomSortKey(b);
      if (numA !== null && numB !== null && numA !== numB) return numA - numB;
      if (numA !== null && numB === null) return -1;
      if (numA === null && numB !== null) return 1;
      return (a.name || '').localeCompare(b.name || '');
    });
  });

  const servicePriceHtml = s => {
    if (s.calcType === 'formula') {
      return `<span class="badge badge-pending" style="font-size:0.68rem;">🧮 x = ${s.customFormula || '?'}</span>`;
    }
    return `<span class="badge badge-paid" style="font-size:0.68rem;">${formatMoney(s.price)} đ${s.unit ? ' / ' + s.unit : ''}</span>`;
  };

  let html = '';
  Object.keys(byHouse).forEach(hid => {
    const house = state.houses.find(h => h.id === hid);
    const rooms = byHouse[hid];
    html += `
      <div style="margin-bottom: 1.5rem;">
        <div style="font-size: 1rem; font-weight: 800; color: var(--cala-blue); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
          <i data-lucide="building-2" style="width:18px;height:18px;"></i>
          ${house ? house.name : hid}
          <span class="badge badge-open" style="font-size:0.7rem;">${rooms.length} ${t('saler_vacant_unit_label')}</span>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem;">
          ${rooms.map(r => {
            const roomServices = state.services.filter(s => serviceMatchesHouse(s, r.houseId) && serviceMatchesRoom(s, r.id));
            const photos = state.roomPhotos[r.id] || [];
            return `
            <div class="cala-card" style="padding: 1.1rem 1.25rem;">
              ${photos.length ? `
                <div style="display:flex; gap:0.4rem; overflow-x:auto; margin-bottom:0.75rem;">
                  ${photos.map(p => `<img src="${p.dataUrl}" onclick="viewDocumentFullSize('${p.dataUrl}')" style="width:84px; height:84px; object-fit:cover; border-radius:var(--radius-sm); cursor:pointer; flex-shrink:0;">`).join('')}
                </div>
              ` : ''}
              <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.6rem;">
                <div style="font-weight:800; font-size:1rem;">${r.name}</div>
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
          `;
          }).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  lucide.createIcons();
}

/* =====================================================================
   ROOM DOCUMENTS — CONTRACT & RELATED IMAGES (ADMIN UPLOAD / TENANT VIEW)
===================================================================== */
let _currentDocRoomId = null;
let _pendingDocDataUrl = null;

function openRoomDocumentsModal(roomId) {
  _currentDocRoomId = roomId;
  _pendingDocDataUrl = null;
  const room = state.rooms.find(r => r.id === roomId);
  const titleEl = document.getElementById('room-documents-modal-title');
  if (titleEl) titleEl.innerText = room ? `${t('contract_photos_label')} - ${room.name}` : t('contract_photos_label');

  const labelInput = document.getElementById('room-document-label');
  if (labelInput) labelInput.value = '';
  const previewEl = document.getElementById('room-document-pending-preview');
  if (previewEl) previewEl.innerHTML = '';

  const startInput = document.getElementById('room-contract-start');
  const endInput = document.getElementById('room-contract-end');
  if (startInput) startInput.value = (room && room.contractStart) || '';
  if (endInput) endInput.value = (room && room.contractEnd) || '';

  renderRoomDocumentsList();
  document.getElementById('modal-room-documents').classList.add('active');
  lucide.createIcons();
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

  try {
    const res = await fetch(`${API_BASE}/rooms/documents/upload`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ roomId: _currentDocRoomId, label, dataUrl: _pendingDocDataUrl })
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

  container.innerHTML = docs.map(d => `
    <div class="cala-card" style="padding:0.75rem; display:flex; align-items:center; gap:0.75rem; margin-bottom:0.6rem;">
      <img src="${d.dataUrl}" onclick="viewDocumentFullSize('${d.dataUrl}')" style="width:56px; height:56px; object-fit:cover; border-radius:var(--radius-sm); cursor:pointer; flex-shrink:0;">
      <div style="flex:1; min-width:0;">
        <div style="font-weight:700; font-size:0.9rem;">${d.label}</div>
        <div style="font-size:0.75rem; color:var(--text-muted);">${d.uploadedAt}</div>
      </div>
      ${canDelete() ? `<button type="button" class="btn btn-secondary btn-sm" style="color:var(--color-danger); border-color:var(--color-danger);" onclick="deleteRoomDocument('${d.id}')">
        <i data-lucide="trash-2"></i>
      </button>` : ''}
    </div>
  `).join('');
  lucide.createIcons();
}

function viewDocumentFullSize(dataUrl) {
  const win = window.open('');
  if (win) {
    win.document.write(`<img src="${dataUrl}" style="max-width:100%; display:block; margin:0 auto;">`);
  }
}

/* =====================================================================
   ROOM PHOTOS — PUBLIC LISTING PHOTOS SHOWN TO THE SALER ROLE
   (separate from room documents above, which are private contract scans)
===================================================================== */
let _currentPhotoRoomId = null;
let _pendingPhotoDataUrl = null;

function openRoomPhotosModal(roomId) {
  _currentPhotoRoomId = roomId;
  _pendingPhotoDataUrl = null;
  const room = state.rooms.find(r => r.id === roomId);
  const titleEl = document.getElementById('room-photos-modal-title');
  if (titleEl) titleEl.innerText = room ? `${t('btn_room_photos')} - ${room.name}` : t('btn_room_photos');

  const labelInput = document.getElementById('room-photo-label');
  if (labelInput) labelInput.value = '';
  const previewEl = document.getElementById('room-photo-pending-preview');
  if (previewEl) previewEl.innerHTML = '';

  renderRoomPhotosList();
  document.getElementById('modal-room-photos').classList.add('active');
  lucide.createIcons();
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
  lucide.createIcons();
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
    try {
      await fetch(`${API_BASE}/rooms/save`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(rObj)
      });
      r.tenant = '';
      r.phone = '';
      renderRoomsManagement();
      showToast(t('toast_room_deactivated'), 'success');
    } catch (err) {
      showToast(t('toast_server_connection_error'), 'error');
    }
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
  try {
    await fetch(`${API_BASE}/rooms/save`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(rObj)
    });
    r.tenant = tenant;
    r.phone = phone;
    closeModal('modal-activate-room');
    renderRoomsManagement();
    showToast(t('toast_room_activated'), 'success');
  } catch (err) {
    showToast(t('toast_server_connection_error'), 'error');
  }
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
             onclick="window.open('${src}','_blank')" title="${t('title_click_to_enlarge')}">
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
                <img src="${img}" style="width:70px; height:70px; object-fit:cover; border-radius:4px; cursor:pointer; border:1px solid ${isAdmin ? 'rgba(255,255,255,0.4)' : 'var(--border-color)'};" onclick="window.open('${img}', '_blank')" title="${t('title_view_larger_image')}">
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

  if (!ticket.comments) ticket.comments = [];
  ticket.comments.push(comment);
  ticket.status = newStatus;
  ticket.response = message;

  if (msgEl) msgEl.value = '';
  _adminImages = [];
  renderAdminImagePreviews();

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

function renderAdminTickets() {
  const tbody = document.getElementById('admin-tickets-tbody');
  const cardsBox = document.getElementById('admin-tickets-cards');
  if (!tbody) return;
  tbody.innerHTML = '';
  if (cardsBox) cardsBox.innerHTML = '';

  if (state.tickets.length === 0) {
    tbody.innerHTML = `<tr><td colspan="10" style="text-align:center; padding:2rem; color:var(--text-secondary);">${t('tickets_empty_state')}</td></tr>`;
    if (cardsBox) cardsBox.innerHTML = `<div style="text-align:center; padding:2rem; color:var(--text-secondary);">${t('tickets_empty_state')}</div>`;
    return;
  }

  const canDeleteTickets = canDelete();

  state.tickets.forEach(t => {
    const imgCount = t.imagesCount != null ? t.imagesCount : (t.images || []).length;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${t.id}</strong></td>
      <td>${t.roomName || t.roomId}</td>
      <td>${t.tenant}</td>
      <td><span class="badge badge-resolved">${statusLabel(t.category)}</span></td>
      <td><span class="badge ${t.priority === 'Khẩn cấp' ? 'badge-open' : 'badge-pending'}">${statusLabel(t.priority)}</span></td>
      <td style="max-width:200px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${t.description}">${t.description}</td>
      <td>${imgCount > 0 ? `<span class="badge badge-resolved" style="cursor:pointer;" onclick="openTicketDetail('${t.id}')">📷 ${imgCount} ${window.t('images_unit_label')}</span>` : '<span style="color:var(--text-muted);">—</span>'}</td>
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
      card.onclick = () => openTicketDetail(t.id);
      card.innerHTML = `
        <div class="ticket-card-top">
          <strong>${t.id}</strong>
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
      cardsBox.appendChild(card);
    }
  });

  if (typeof lucide !== 'undefined') lucide.createIcons();
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

  if (typeof lucide !== 'undefined') lucide.createIcons();
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
    id: genId('TK-'),
    roomId,
    roomName: room ? room.name : t('col_room'),
    tenant: user ? (user.fullName || user.username) : t('default_guest_label'),
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
      body: JSON.stringify({ id: newTicket.id, roomId, category, priority, description, images: _tenantImages })
    });
  } catch (err) {
    console.warn('Ticket created locally:', err);
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

  const rObj = {
    id: id || genId('R'),
    houseId, name, tenant, phone, roomType, headcount, baseRent, area, description, capacity, deposit
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

  showToast(`${t('toast_room_saved_prefix')}"${name}"${t('toast_room_saved_suffix')}`, 'success');
  closeModal('modal-room-config');
  renderRoomSelector();
  renderCurrentView();
}

function handleMonthChange(sourceEl) {
  const value = sourceEl ? sourceEl.value : document.getElementById('select-month').value;
  state.currentMonth = value;
  ['select-month', 'invoices-select-month', 'spreadsheet-select-month'].forEach(id => {
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
  lucide.createIcons();
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('active');
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
    document.getElementById('modal-confirm').classList.add('active');
    lucide.createIcons();
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

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i data-lucide="${type === 'success' ? 'check-circle' : (type === 'error' ? 'alert-circle' : 'info')}" style="color:${type === 'success' ? 'var(--cala-emerald)' : (type === 'error' ? 'var(--cala-red)' : 'var(--cala-blue)')};"></i>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  lucide.createIcons();
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
             onclick="window.open('${src}','_blank')" title="${t('title_click_to_enlarge')}">
      `).join('');
    }
  }

  // Render comments thread
  renderTenantTicketComments(ticket);
  document.getElementById('tenant-reply-text').value = '';
  document.getElementById('modal-tenant-ticket-detail').classList.add('active');
  lucide.createIcons();
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
                <img src="${img}" style="width:70px; height:70px; object-fit:cover; border-radius:4px; cursor:pointer; border:1px solid ${isAdmin ? 'var(--border-color)' : 'rgba(255,255,255,0.4)'};" onclick="window.open('${img}', '_blank')" title="${t('title_view_larger_image')}">
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

  if (!ticket.comments) ticket.comments = [];
  ticket.comments.push(comment);

  if (msgEl) msgEl.value = '';

  try {
    await fetch(`${API_BASE}/tickets/reply`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ticketId: ticket.id, status: ticket.status, response: ticket.response, comment })
    });
  } catch (err) { console.warn('Saved ticket reply locally'); }

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
  lucide.createIcons();
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

function openSiteSettingsModal() {
  const s = state.siteSettings || {};
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
});
