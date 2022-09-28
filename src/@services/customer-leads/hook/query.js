import keys from './key'
import {useQuery} from 'react-query'
import CustomerLeadsApi from '../customer-leads-api'

/**
 * https://dev.api.bca.hspace.biz/redoc#operation/get_list_profile_statistic_get_list_profile_get
 * Lấy thông danh sách các user
 */
const useListProfileLeads = (
  search,
  page = 1,
  limit = 20,
  params = {},
  enabled = true,
) => {
  return useQuery(
    [keys.LIST_CUSTOMER_LEAD_PROFILE_EXPLOITEDS, search, page, limit, params],
    () =>
      CustomerLeadsApi.get_list_profile_leads(
        search,
        page,
        limit,
        params,
        enabled,
      ),
    {staleTime: 0},
  )
}

const prefectListProfileLeads = (
  search,
  page,
  limit,
  params,
  enabled = true,
) => {
  return {
    key: [keys.LIST_CUSTOMER_LEAD_PROFILE_EXPLOITEDS],
    fn: CustomerLeadsApi.get_list_profile_leads(
      search,
      page,
      limit,
      params,
      enabled,
    ),
  }
}

/**
 * https://uat.api.bca.hspace.biz/redoc#operation/Danh_s_ch_c_i___t_tags_config_tags_get
 * Danh sách tags khách hàng tiềm năng
 */
// *** Lấy danh sách tags khách hàng tiềm năng
const useListTagsCustomerLead = (params = null) => {
  return useQuery([keys.LIST_TAGS_CUSTOMER_LEAD, params], () =>
    CustomerLeadsApi.get_list_tags_customer_lead(params),
  )
}

/**
 * https://api.sasamviet.vn/redoc#operation/Potential_customers_list_education_general_get_list_education_get
 * Danh sách học vấn của khách hàng tiềm năng
 */
// *** Lấy danh sách học vấn khách hàng tiềm năng
const useListEducationOfCustomerLead = () => {
  return useQuery(
    [keys.LIST_EDUCATION_OF_CUSTOMER_LEAD],
    () => CustomerLeadsApi.get_list_education_of_customer_lead,
  )
}

/**
 * https://api.sasamviet.vn/redoc#operation/Potential_customers_list_jobs_general_get_list_jobs_get
 * Danh sách công việc của khách hàng tiềm năng
 */
// *** Lấy danh sách công việc của khách hàng tiềm năng
const useListJobOfCustomerLead = () => {
  return useQuery(
    [keys.LIST_JOB_OF_CUSTOMER_LEAD],
    () => CustomerLeadsApi.get_list_job_of_customer_lead,
  )
}

/**
 * https://api.sasamviet.vn/redoc#operation/Potential_Customers_List_Places_Lived_general_get_list_placelived_get
 * Danh sách nơi ở của khách hàng tiềm năng
 */
// *** Lấy danh sách nơi ở của khách hàng tiềm năng
const useListPlaceLiveCustomerLead = () => {
  return useQuery(
    [keys.LIST_PLACES_LIVED_CUSTOMER_LEAD],
    () => CustomerLeadsApi.get_list_places_lived_customer_lead,
  )
}

/**
 * https://api.sasamviet.vn/redoc#operation/Get_list_action___GET_general_get_list_action__get
 * Lấy danh sách các action funnel
 */
// *** Lấy danh sách action funnel
const useListFunnelAction = () => {
  return useQuery(
    [keys.LIST_FUNNEL_ACTION_CUSTOMER_LEAD],
    () => CustomerLeadsApi.get_list_funnel_action,
  )
}

/**
 * https://api.sasamviet.vn/redoc#operation/Get_list_operator___GET_general_get_list_operator__get
 * Lấy danh sách các operator funnel
 */
// *** Lấy danh sách các funnel operator
const useListFunnelOperator = () => {
  return useQuery(
    [keys.LIST_FUNNEL_OPERATOR_CUSTOMER_LEAD],
    () => CustomerLeadsApi.get_list_funnel_operator,
  )
}

/***
 * https://api.sasamviet.vn/redoc#operation/Get_list_funnel_rule___GET_general_get_list_funnel_rule__get
 * Lấy danh sách các funnel trong KHTN
 */
// *** Lấy danh sách funnel trong KHTN
const useListFunnelCustomerLead = () => {
  return useQuery(
    [keys.LIST_FUNNEL_CUSTOMER_LEAD],
    () => CustomerLeadsApi.get_list_funnel_customer_lead,
  )
}

/**
 * https://dev.api.bca.hspace.biz/redoc#operation/get_list_profile_statistic_get_list_profile_get
 * Lấy thông danh sách các user
 */
// ** lấy danh sách các profile EXPORT (khách hàng tiềm năng)
const useListProfileLeadExports = (
  search,
  page = 1,
  limit,
  params = {},
  enabled = true,
) => {
  return useQuery(
    [keys.LIST_PROFILE_EXPLOITED_EXPORTS, page, search, params, limit],
    () =>
      CustomerLeadsApi.get_list_profile_exploited(
        search,
        page,
        limit,
        params,
        enabled,
      ),
  )
}

/**
 * https://api.sasamviet.vn/redoc#operation/get_profile_info_general_get_profile_info__uid__get
 * Lấy thông tin chi tiết của 1 trang cá nhân
 */
const useProfileExploitedInfo = id => {
  return useQuery(
    [keys.PROFILE_EXPLOITED_INFO, id],
    () => CustomerLeadsApi.get_user_profile_exploited_info(id),
    {refetchOnMount: true},
  )
}

/**
 * http://115.74.230.12:2308/redoc#operation/Potential_customers_list_relationship_general_get_list_relationship_get
 * list relationship
 */
const useListRelationship = () => {
  return useQuery([keys.LIST_RELATIONSHIP], () =>
    CustomerLeadsApi.get_list_relationship(),
  )
}

/**
 * http://115.74.230.12:2308/redoc#operation/Potential_customers_list_group_general_get_list_group_get
 * LIST GROUP
 */
const useListGroupFB = () => {
  return useQuery([keys.LIST_GROUP_FB], () => CustomerLeadsApi.get_list_group())
}

const useListStatistics = () => {
  return useQuery([keys.LIST_STATISTICS], () =>
    CustomerLeadsApi.get_list_statistic(),
  )
}

const CustomerLeadsQuery = {
  prefectListProfileLeads,
  useListProfileLeads,
  useListTagsCustomerLead,
  useListEducationOfCustomerLead,
  useListJobOfCustomerLead,
  useListPlaceLiveCustomerLead,
  useListFunnelAction,
  useListFunnelOperator,
  useListFunnelCustomerLead,
  useListProfileLeadExports,
  useProfileExploitedInfo,
  useListRelationship,
  useListGroupFB,
  useListStatistics,
}

export default CustomerLeadsQuery
