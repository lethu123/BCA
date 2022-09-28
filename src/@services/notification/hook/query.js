import keys from './key'
import {useQuery} from 'react-query'
import NotificationApi from '../notification-api'

/**
 * https://uat.api.bca.hspace.biz/redoc#operation/get_all_notification_notification__user_id__all_get
 * get all notification of current user
 */

const useGetAllNotification = (id, isNoti) => {
  return useQuery(
    [keys.GET_ALL_NOTIFICATION, id],
    () => NotificationApi.get_all_notification(id),
    {
      enabled: !!id && isNoti,
    },
  )
}

/**
 * https://uat.api.bca.hspace.biz/redoc#operation/Danh_s_ch_c_i___t_th_ng_b_o_config_notification_get
 * get all notification of current user
 */

// const useGetConfigNotification = (params = null) => {
//   return useQuery([keys.GET_CONFIG_NOTIFICATIONS, params], () =>
//     NotificationApi.get_config_notifications(params),
//   )
// }

const NotificationQuery = {
  useGetAllNotification,
  // useGetConfigNotification,
}

export default NotificationQuery
