import keys from './key'
import {useQuery} from 'react-query'
import TakeCareOfFBApi from '../take-care-of-fb-api'
import {data} from 'redux/reducers/customer/data'

/**
 * https://api.sasamviet.vn/redoc#operation/fb_sasamviet_statistics_statistic_fb_sasamviet_statistics_get
 * Lấy thông tin thống kê tổng của chăm sóc facebook / facebook cá nhân
 */
// *** Lấy thông tin thống kê tổng của chăm sóc facebook / facebook cá nhân
const usePersonalFacebookStatistic = () => {
  const initialData = data.personalFacebookStatistic
  const {data: dataQuery} = useQuery(
    ['fb', keys.PERSONAL_FACEBOOK_STATISTIC],
    () => TakeCareOfFBApi.get_statistic_personal_facebook,
  )
  return {dataQuery, initialData}
}

const TakeCareOfFBQuery = {usePersonalFacebookStatistic}

export default TakeCareOfFBQuery
