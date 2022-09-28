import {PROXY} from './../proxy'

// *** CHẮM SÓC FACEBOOK
// *** Lấy thông tin thống kê tổng của chăm sóc facebook / facebook cá nhân
export const get_statistic_personal_facebook_api =
  PROXY + '/statistic/fb-sasamviet-statistics'

// *** KHAI THÁC KHÁCH HÀNG TIỀM NĂNG
// *** Lấy thông tin thống kê link của user đăng nhập đã post lên hệ thống (User)
export const get_statistic_user_link_my_post_api =
  PROXY + '/statistic/post_links_statistic'

// *** Lấy danh sách thông tin link của user đã post lên hệ thống (User)
export const get_list_all_link_crawl_of_user_api =
  PROXY + '/statistic/all_links_posted_by_user'

// *** Lấy thông tin thống kê dữ liệu tổng của khai thác nhóm (Admin)
export const get_statistic_group_exploited_api =
  PROXY + '/statistic/group_mining_statistic'

// *** Thêm link khai thác khách hàng tiềm năng
export const post_add_link_crawl_api = PROXY + '/crawl/add_links'

// *** Lấy thông tin chi tiết của một nhóm
export const get_group_exploited_info_api =
  PROXY + '/statistic/get_group_info/:id'

// *** Lấy danh sách các link trích xuất gần đây khai thác khách hàng tiềm năng
export const get_list_recently_extracted_link_api =
  PROXY + '/general/recent_retrieval_link'

// *** Lấy danh sách các nhóm của khai thác nhóm
export const get_list_group_exploited_api = PROXY + '/general/mining_list'

// *** Lấy thông tin thống kê dữ liệu tổng của khai thác post
export const get_statistic_post_exploited_api =
  PROXY + '/general/post_mining_statistic'

// *** Lấy danh sách các bài post của khai thác post
export const get_list_post_exploited_api = PROXY + '/general/post_mining_list'

// *** Lấy thông tin chi tiết của 1 bài post
export const get_post_exploited_info_api = PROXY + '/general/get_post_info/:id'

// *** Lấy thông tin thống kê tổng của khai thác fanpage
export const get_statistic_fanpage_exploited_api =
  PROXY + '/statistic/fanpage_mining_statistic'

// *** Lấy thông tin chi tiết của 1 fanpage
export const get_fanpage_exploited_info_api =
  PROXY + '/general/get_fanpage_info/:id'

// *** Lấy thông tin thống kê tổng của khai thác trang cá nhân
export const get_statistic_profile_exploited_api =
  PROXY + '/statistic/profile_mining_statistic'

// *** Lấy thông tin chi tiết của 1 trang cá nhân
export const get_user_profile_exploited_info_api =
  PROXY + '/general/get_profile_info/:id'

// *** Lấy danh sách các uid
export const get_list_uid_exploited_api = PROXY + '/general/get_all_uid'

// *** Lấy danh sách các profile
export const get_list_profile_exploited_api =
  PROXY + '/statistic/get-list-profile'

// *** Lấy danh sách các từ khóa
export const get_list_customer_keyword_api =
  PROXY + '/general/get-list-keyword/'
