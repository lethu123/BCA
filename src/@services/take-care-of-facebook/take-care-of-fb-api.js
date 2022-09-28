import {handleAxios} from '../ultils'

const secret_key = localStorage.getItem('refreshToken')

const setupHeader = (url, params = {}) =>
  handleAxios(url, 'get', null, {'s-key': secret_key}, params)

const TakeCareOfFBApi = {
  // *** Lấy thông tin thống kê tổng của chăm sóc facebook / facebook cá nhân
  get_statistic_personal_facebook: setupHeader(
    '/statistic/fb-sasamviet-statistics',
  ),
}

export default TakeCareOfFBApi
