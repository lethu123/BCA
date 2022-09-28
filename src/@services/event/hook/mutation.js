import {useMutation, useQueryClient} from 'react-query'
import {toast} from 'react-toastify'
import keys from './key'
import EventApi from '../event-api'

/**
 * https://uat.api.bca.hspace.biz/redoc#operation/create_event_event_event_post
 * @returns
 */
const useCreateEvent = () => {
  const queryClient = useQueryClient()
  return useMutation(EventApi.create_event, {
    onSuccess: res => {
      if (res) {
        toast.success(res?.message || res?.msg || 'Tạo sự kiện thành công')
        queryClient.invalidateQueries(keys.LIST_EVENT)
      }
    },
  })
}

/**
 * https://uat.api.bca.hspace.biz/redoc#operation/update_event_following_ID_event_event__id__put
 * @returns
 */
const useUpdateEvent = () => {
  const queryClient = useQueryClient()
  return useMutation(EventApi.update_event, {
    onSuccess: res => {
      if (res) {
        toast.success(res?.message || res?.msg || 'Cập nhật sự kiện thành công')
        queryClient.invalidateQueries(keys.LIST_EVENT)
      }
    },
  })
}

/**
 * https://uat.api.bca.hspace.biz/redoc#operation/delete_event_following_ID_delete_event_delete
 * @returns
 */
const useDeleteEvent = () => {
  const queryClient = useQueryClient()
  return useMutation(EventApi.delete_event, {
    onSuccess: res => {
      if (res) {
        toast.success(res?.message || res?.msg || 'Xóa event thành công')
        queryClient.invalidateQueries(keys.LIST_EVENT)
      }
    },
  })
}

/**
 * https://uat.api.bca.hspace.biz/redoc#operation/Invite_event_event_invite_event_post
 * @returns
 */
const useInviteJoinEvent = () => {
  return useMutation(EventApi.invite_join_event, {
    onSuccess: res => {
      if (res) {
        toast.success(res?.message || res?.msg || 'Mời thành công')
      }
    },
  })
}

/**
 * https://uat.api.bca.hspace.biz/redoc#operation/Join_event_event_join_event_post
 * @returns
 */
const useJoinEvent = () => {
  return useMutation(EventApi.user_join_event, {
    onSuccess: res => {
      if (res) {
        toast.success(res?.message || res?.msg || 'Đã tham gia sự kiện')
      }
    },
  })
}

const EventMutation = {
  useCreateEvent,
  useDeleteEvent,
  useUpdateEvent,
  useInviteJoinEvent,
  useJoinEvent,
}

export default EventMutation
