import {handleAxios} from '../ultils'
import {PROXY} from '@services/proxy'
// const PROXY = 'https://uat.api.bca.hspace.biz'
// const PROXY = 'http://13.229.29.156:8001'

const NotificationApi = {
  get_all_notification: user_id =>
    handleAxios(PROXY + `/notification/${user_id}/all`, 'get'),
  get_unread_notification: user_id =>
    handleAxios(PROXY + `/notification/${user_id}/unread`, 'get'),
  read_notifiction: (user_id, noti_id) =>
    handleAxios(
      PROXY + `/notification/${user_id}/read`,
      'post',
      noti_id ? {noti_id} : null,
    ),

  // cài đặt thông báo
  get_config_notifications: params =>
    handleAxios('/config/notification', 'get', null, {}, params),
  create_config_noti: data => handleAxios('/config/notification', 'post', data),
}

export default NotificationApi
