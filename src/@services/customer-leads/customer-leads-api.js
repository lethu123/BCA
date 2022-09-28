import {handleAxios} from '../ultils'
  const PROXY = 'http://115.74.230.12:2308'

const secret_key = localStorage.getItem('refreshToken')

const setupHeader = (url, params = {}) =>
  handleAxios(url, 'get', null, {'s-key': secret_key}, params)

const CustomerLeadsApi = {
  get_list_profile_leads: (search, page, limit, params, enabled) =>
    enabled &&
    limit > 0 &&
    setupHeader('/statistic/get-list-profile', {
      search,
      page,
      limit,
      ...params,
    }),

  get_list_tags_customer_lead: params =>
    handleAxios('/config/tags', null, {}, params),
  get_list_education_of_customer_lead: setupHeader(
    '/general/get_list_education',
  ),
  get_list_job_of_customer_lead: setupHeader('/general/get-list-jobs'),
  get_list_places_lived_customer_lead: setupHeader(
    '/general/get-list-placelived',
  ),
  // *** Lấy danh sách các hành động của funnel
  get_list_funnel_action: setupHeader('/general/get-list-action/'),

  //*** Lấy danh sách các toán tử của funnels
  get_list_funnel_operator: setupHeader('/general/get-list-operator/'),

  // *** Lấy danh sách funnel trong KHTN
  get_list_funnel_customer_lead: setupHeader('/general/get-list-funnel-rule/'),

  // *** Lấy danh sách các profile
  get_list_profile_exploited: (search, page, limit, params, enabled) =>
    enabled &&
    limit > 0 &&
    setupHeader('/statistic/get-list-profile', {
      search,
      page,
      limit,
      ...params,
    }),

  //*** Tạo mới 1 Customer Funnel
  post_customer_funnel: data =>
    handleAxios('/general/create-funnel-rule/', 'post', data, {
      's-key': secret_key,
    }),

  // *** Update 1 customer funnel
  update_funnel_customer_lead: data =>
    handleAxios('/general/update-funnel-rule/', 'put', data, {
      's-key': secret_key,
    }),

  // *** Delete 1 customer funnnel
  delete_funnel_customer_lead: id =>
    handleAxios(`/general/delete-funnel-rule/${id}/`, 'delete', {
      's-key': secret_key,
    }),
  // *** Tạo mới 1 Tag
  post_tag_customer_leads: data =>
    handleAxios('/config/tags', 'post', data, {
      's-key': secret_key,
    }),
  update_tag_customer_lead: data => {
    const id = data.id
    delete data.id
    return handleAxios(`/config/tags/${id}/`, 'put', data, {
      's-key': secret_key,
    })
  },

  // *** Gắn tag cho Khách hàng tiềm năng
  post_assign_tag_customer_lead: data =>
    handleAxios('/general/assign_tag/', 'post', data, {
      's-key': secret_key,
    }),

  // *** Xóa tag khách hàng tiềm Năng
  delete_tag_customer_lead: data =>
    handleAxios('/general/delete_tag/', 'delete', data.form, {
      's-key': secret_key,
    }).then(res => ({...res, data: data.data})),

  // *** Lấy thông tin chi tiết của 1 trang cá nhân
  get_user_profile_exploited_info: id =>
    setupHeader(`/general/get_profile_info/${id}`),

  // *** Gỡ tag trong KHTN
  unassign_tag_customer_lead: data =>
    handleAxios('/general/unassign_tag/', 'post', data, {'s-key': secret_key}),

  // *** Danh sách relationship
  get_list_relationship: () =>
    handleAxios('/general/get-list-relationship', 'get', null, {
      's-key': secret_key,
    }),

  // *** Danh sách nhóm
  get_list_group: () =>
    handleAxios('/general/get-list-group', 'get', null, {'s-key': secret_key}),

  assign_uid_account_system: data =>
    handleAxios('/general/assign-user', 'post', data),
  get_list_statistic: () => handleAxios('/general/get-list-statistics/', 'get'),
}

export default CustomerLeadsApi
