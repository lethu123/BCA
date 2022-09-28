import keys from './key'
import {PROXY} from '../../proxy'

const secret_key = localStorage.getItem('refreshToken')

const get_list_config_notification_api = PROXY + '/config/notification'

//** constant api */

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
 * https://uat.api.bca.hspace.biz/redoc#operation/Danh_s_ch_c_i___t_th_ng_b_o_config_notification_get
 * get all notification of current user
 */
const useGetListConfigNotification = () => {
  return {
    ...optionsCallApi(get_list_config_notification_api),
    key: [keys.GET_CONFIG_NOTIFICATIONS],
  }
}

const NotificationDatatable = {
  useGetListConfigNotification,
}

export default NotificationDatatable
