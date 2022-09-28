import * as link_api from './../../api/customer/customerApi'
import axios from 'axios'

const secret_key = localStorage.getItem('refreshToken')
const userData = localStorage.getItem('userData')
const uid = userData ? JSON.parse(userData) : null

// *** CHĂM SÓC FACEBOOK
/**
 * https://api.sasamviet.vn/redoc#operation/fb_sasamviet_statistics_statistic_fb_sasamviet_statistics_get
 * Lấy thông tin thống kê tổng của chăm sóc facebook / facebook cá nhân
 */
export const getStatisticPersonalFacebookQuery = async () => {
  return await axios
    .get(link_api.get_statistic_personal_facebook_api, {
      headers: {'s-key': secret_key},
    })
    .then(res => res.data)
}

// *** KHAI THÁC KHÁCH HÀNG TIỀM NĂNG
/**
 * https://api.sasamviet.vn/redoc#operation/post_links_statistic_statistic_post_links_statistic_get
 * Lấy thông tin thống kê link của user đăng nhập đã post lên hệ thống
 */
export const getStatisticUserLinkMyPostQuery = async () => {
  return await axios
    .get(link_api.get_statistic_user_link_my_post_api, {
      headers: {'s-key': secret_key},
    })
    .then(res => res.data)
}

/**
 * https://api.sasamviet.vn/redoc#operation/all_links_posted_by_user_statistic_all_links_posted_by_user_get
 * Lấy danh sách thông tin link của user đã post lên hệ thống (User)
 * Data table
 */
export const getListAllLinkCrawlOfUserQuery = () => {
  return {
    url: link_api.get_list_all_link_crawl_of_user_api,
    headers: {'s-key': secret_key},
    uid: uid.uid,
  }
}

/**
 * https://api.sasamviet.vn/redoc#operation/group_mining_statistic_statistic_group_mining_statistic_get
 * Lấy thông tin thống kê dữ liệu tổng của khai thác nhóm (Admin)
 */
export const getStatisticGroupExploitedQuery = async () => {
  return await axios
    .get(link_api.get_statistic_group_exploited_api, {
      headers: {'s-key': secret_key},
    })
    .then(res => res.data)
}

/**
 * https://api.sasamviet.vn/redoc#operation/add_links_crawl_add_links_post
 * Thêm link khai thác khách hàng tiềm năng
 */
export const postAddLinkCrawlQuery = async data => {
  return await axios
    .post(link_api.post_add_link_crawl_api, data, {
      headers: {'s-key': secret_key},
    })
    .then(res => res.data)
}

/**
 * https://api.sasamviet.vn/redoc#operation/get_group_info_statistic_get_group_info__group_id__get
 * Lấy thông tin chi tiết của một nhóm (Khai thác nhóm - Cx)
 */
export const getGroupExploitedInfoQuery = async id => {
  return await axios
    .get(link_api.get_group_exploited_info_api.replace(':id', id), {
      headers: {'s-key': secret_key},
    })
    .then(res => res.data)
}

/**
 * https://api.sasamviet.vn/redoc#operation/recent_retrieval_link_general_recent_retrieval_link_get
 * Lấy danh sách các link trích xuất gần đây khai thác khách hàng tiềm năng
 */
export const getListRecentlyExtractedLinkQuery = async type => {
  return await axios
    .get(link_api.get_list_recently_extracted_link_api, {
      headers: {'s-key': secret_key},
      params: {type},
    })
    .then(res => res.data)
}

/**
 * https://api.sasamviet.vn/redoc#operation/group_mining_list_general_group_mining_list_get
 * Lấy danh sách các nhóm của khai thác nhóm
 * Datatable
 */
export const getListGroupExploitedQuery = () => {
  return {
    url: link_api.get_list_group_exploited_api,
    headers: {'s-key': secret_key},
  }
}

/**
 * https://api.sasamviet.vn/redoc#operation/post_mining_statistic_general_post_mining_statistic_get
 * Lấy thông tin thống kê dữ liệu tổng của khai thác post
 */
export const getStatisticPostExploitedQuery = async () => {
  return await axios
    .get(link_api.get_statistic_post_exploited_api, {
      headers: {'s-key': secret_key},
    })
    .then(res => res.data)
}

/**
 * https://api.sasamviet.vn/redoc#operation/post_mining_statistic_general_post_mining_statistic_get
 * Lấy danh sách các bài post của khai thác post
 * Datatable
 */
export const getListPostExploitedQuery = () => {
  return {
    url: link_api.get_list_post_exploited_api,
    headers: {'s-key': secret_key},
  }
}

/**
 * https://api.sasamviet.vn/redoc#operation/post_mining_statistic_general_post_mining_statistic_get
 * Lấy thông tin chi tiết của 1 bài post
 * Datatable
 */
export const getPostExploitedInfoQuery = async id => {
  return await axios
    .get(link_api.get_post_exploited_info_api.replace(':id', id), {
      headers: {'s-key': secret_key},
    })
    .then(res => res.data)
}

/**
 * https://api.sasamviet.vn/redoc#operation/fanpage_mining_statistic_statistic_fanpage_mining_statistic_get
 * Lấy thông tin thống kê tổng của khai thác fanpage
 */
export const getStatisticFanpageExploitedQuery = async () => {
  return await axios
    .get(link_api.get_statistic_fanpage_exploited_api, {
      headers: {'s-key': secret_key},
    })
    .then(res => res.data)
}

/**
 * https://api.sasamviet.vn/redoc#operation/fanpage_mining_statistic_statistic_fanpage_mining_statistic_get
 * Lấy thông tin thống kê tổng của khai thác fanpage
 */
export const getStatisticProfileExploitedQuery = async () => {
  return await axios
    .get(link_api.get_statistic_profile_exploited_api, {
      headers: {'s-key': secret_key},
    })
    .then(res => res.data)
}

/**
 * https://api.sasamviet.vn/redoc#operation/get_fanpage_info_general_get_fanpage_info__uid__get
 * Lấy thông tin chi tiết của 1 fanpage
 */
export const getFanpageExploitedInfoQuery = async id => {
  return await axios
    .get(link_api.get_fanpage_exploited_info_api.replace(':id', id), {
      headers: {'s-key': secret_key},
    })
    .then(res => res.data)
}

/**
 * https://api.sasamviet.vn/redoc#operation/get_profile_info_general_get_profile_info__uid__get
 * Lấy thông tin chi tiết của 1 trang cá nhân
 */
export const getUserProfileExploitedInfoQuery = async id => {
  return await axios
    .get(link_api.get_user_profile_exploited_info_api.replace(':id', id), {
      headers: {'s-key': secret_key},
    })
    .then(res => res.data)
}

/**
 * https://api.sasamviet.vn/redoc#operation/get_all_uid_general_get_all_uid_get
 * Lấy thông danh sách các uid
 * Data Table
 */
export const getListUidExploitedQuery = () => {
  return {
    url: link_api.get_list_uid_exploited_api,
    headers: {'s-key': secret_key},
  }
}

/**
 * https://dev.api.bca.hspace.biz/redoc#operation/get_list_profile_statistic_get_list_profile_get
 * Lấy thông danh sách các user
 * Data Table
 */
export const getListProfileExploitedQuery = () => {
  return {
    url: link_api.get_list_profile_exploited_api,
    headers: {'s-key': secret_key},
  }
}

/**
 * https://dev.api.bca.hspace.biz/redoc#operation/get_list_profile_statistic_get_list_profile_get
 * Lấy thông danh sách các user
 */
export const getListProfileLeadsQuery = async (
  search,
  page,
  limit,
  params,
  enabled = true,
) => {
  if (enabled && limit > 0) {
    return await axios
      .get(link_api.get_list_profile_exploited_api, {
        headers: {'s-key': secret_key},
        params: {search, page, limit, ...params},
      })
      .then(res => res.data)
  }
}

/**
 * https://dev.api.bca.hspace.biz/redoc#operation/get_list_keyword_general_get_list_keyword__get
 * Lấy danh sách tất cả các từ khóa
 */
export const getListCustomerKeywordsQuery = async () => {
  return await axios
    .get(link_api.get_list_customer_keyword_api, {
      headers: {'s-key': secret_key},
    })
    .then(res => res.data)
}
