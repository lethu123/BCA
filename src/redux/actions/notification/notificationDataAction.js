import NotificationApi from '@services/notification/notification-api'
import UserApi from '@services/user/user-api'

/**
 * https://uat.api.bca.hspace.biz/redoc#operation/get_all_notification_notification__user_id__all_get
 * get all notification of current user
 */
export const getListNotificationSystem = id => async dispatch => {
  return await NotificationApi.get_all_notification(id).then(res =>
    dispatch({type: 'LIST_NOTIFICTION', payload: res.data}),
  )
}

/**
 * https://notification.api.hspace.biz/redoc#operation/unread_message_notification__user_id__unread_get
 * get list  notification unread of current user
 */
export const getListNotificationUnread = id => async dispatch => {
  return await NotificationApi.get_unread_notification(id).then(res => {
    dispatch({type: 'LIST_NOTIFICTION_UNREAD', payload: res.data})
  })
}

/**
 * https://notification.api.hspace.biz/redoc#operation/mark_notification_as_seen_notification__user_id__read_post
 *
 * @param {*} userId
 * @param {*} notiId
 * @returns
 */
export const readNotification = (userId, notiId) => dispatch => {
  return NotificationApi.read_notifiction(userId, notiId).then(res => {
    if (!notiId) dispatch({type: 'READ_ALL_NOTIFICTION'})
    else dispatch({type: 'READ_NOTIFICTION', payload: notiId})
  })
}

// Lắng nghe thông báo bắn từ socket
export const addNotification = data => dispatch =>
  dispatch({type: 'ADD_NOTIFICTION', payload: data})

export const getListUserSystem = () => async dispatch => {
  return await UserApi.get_list_user_system().then(res =>
    dispatch({type: 'LIST_USER_SYSTEM', payload: res.data}),
  )
}
