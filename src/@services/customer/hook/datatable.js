import keys from './key'
import {PROXY} from '../../proxy'

const secret_key = localStorage.getItem('refreshToken')
// const userData = localStorage.getItem('userData')
// const uid = userData ? JSON.parse(userData) : null

//** constant api */
const get_list_group_exploited_api = PROXY + '/general/mining_list'
const get_list_post_exploited_api = PROXY + '/general/post_mining_list'
const get_list_uid_exploited_api = PROXY + '/general/get_all_uid'
/**
 * helper function
 */
const optionsCallApi = url => {
  return {
    url: url,
    headers: {'s-key': secret_key},
  }
}

/**
 * https://api.sasamviet.vn/redoc#operation/group_mining_list_general_group_mining_list_get
 * Lấy danh sách các nhóm của khai thác nhóm
 * Datatable
 */
const useListLinkExploited = () => {
  return {
    ...optionsCallApi(get_list_group_exploited_api),
    key: ['cx', keys.LIST_GROUP_EXPLOITEDS],
  }
}

/**
 * https://api.sasamviet.vn/redoc#operation/post_mining_statistic_general_post_mining_statistic_get
 * Lấy danh sách các bài post của khai thác post
 * Datatable
 */
const useListPostExploited = () => {
  return {
    ...optionsCallApi(get_list_post_exploited_api),
    key: ['cx', keys.LIST_POST_EXPLOITEDS],
  }
}

/**
 * https://api.sasamviet.vn/redoc#operation/get_all_uid_general_get_all_uid_get
 * Lấy thông danh sách các uid
 * Data Table
 */
const useListUidExploited = () => {
  return {
    ...optionsCallApi(get_list_uid_exploited_api),
    key: [keys.LIST_CUSTOMER_LEAD_PROFILE_EXPLOITEDS],
  }
}

const ExploiteCustomerLeadsDatatable = {
  useListLinkExploited,
  useListPostExploited,
  useListUidExploited,
}

export default ExploiteCustomerLeadsDatatable
