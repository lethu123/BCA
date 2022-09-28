import {handleAxios} from '../ultils'

const secret_key = localStorage.getItem('refreshToken')

const setupHeader = (url, params = {}) =>
  handleAxios(url, 'get', null, {'s-key': secret_key}, params)

const CustomerApi = {
  // *** Lấy danh sách các từ khóa
  get_list_customer_keyword: setupHeader('/general/get-list-keyword/'),
}

export default CustomerApi
