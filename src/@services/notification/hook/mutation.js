import {useMutation, useQueryClient} from 'react-query'
import {toast} from 'react-toastify'
import NotificationApi from '../notification-api'
import keys from './key'

// *** https://uat.api.bca.hspace.biz/redoc#operation/T_o_c_i___t_th_ng_b_o_config_notification_post
// *** create config notifiacrion
const useCreateConfigNoti = () => {
  const queryClient = useQueryClient()
  return useMutation(NotificationApi.create_config_noti, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.GET_CONFIG_NOTIFICATIONS)
      toast.success('Tạo thông báo thành công')
    },
  })
}

const NotificationMutation = {useCreateConfigNoti}

export default NotificationMutation
