import keys from './key'
import {useQuery} from 'react-query'
import CustomerApi from '../customer-api'

// const initialStatisticData = {
//   total_fanpage: 0,
//   total_personal_page: 0,
//   total_group: 0,
//   total_post: 0,
//   total_uid: 0,
//   total_lead: 0,
//   total_customer: 0,
//   total_revenue: 0,
// }

/**
 * https://dev.api.bca.hspace.biz/redoc#operation/get_list_keyword_general_get_list_keyword__get
 * Lấy danh sách tất cả các từ khóa
 */
// ** lấy danh sách tất cả các từ khóa
const useListCustomerKeywords = () => {
  return useQuery(
    [keys.LIST_CUSTOMER_KEYWORDS],
    () => CustomerApi.get_list_customer_keyword,
  )
}

const CustomerQuery = {useListCustomerKeywords}

export default CustomerQuery
