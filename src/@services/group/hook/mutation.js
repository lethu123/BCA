import {useMutation, useQueryClient} from 'react-query'
import {toast} from 'react-toastify'
import GroupApi from '../group-api'
import keys from './key'

/***
 * https://uat.api.bca.hspace.biz/redoc#operation/create_group_create_group_post
 * Tạo mới nhóm
 */
export const useCreateGroup = cb => {
  const queryClient = useQueryClient()
  return useMutation(GroupApi.create_group, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.GET_LIST_GROUP_CREATED)
      queryClient.invalidateQueries(keys.GET_LIST_GROUP_EXPLORED)
      if (res.group_id) {
        cb(res.group_id)
      }
      toast.success(res?.message || res?.msg || 'Tạo nhóm thành công')
    },
  })
}

/***
 * https://uat.api.bca.hspace.biz/redoc#operation/update_group_invite_members_group__group_id__post
 * Mời thành viên tham gia nhóm
 */
export const useInviteJoinGroup = () => {
  const queryClient = useQueryClient()
  return useMutation(GroupApi.invite_join_group, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.GET_LIST_INVITED_JOIN_GROUP_IN_GROUP)
    },
  })
}

export const useDeleteGroup = () => {
  const queryClient = useQueryClient()
  return useMutation(GroupApi.delete_group, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.GET_LIST_GROUP_CREATED)
      toast.success('Xóa thành công')
    },
  })
}

/**
 * https://uat.api.bca.hspace.biz/redoc#operation/update_group_update_group_post
 * @returns
 */
const useUpdateGroup = () => {
  const queryClient = useQueryClient()
  return useMutation(GroupApi.update_group, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.GET_INFO_GROUP)
      toast.success('Cập nhật thành công')
    },
  })
}

/**
 * https://group.api.hspace.biz/docs#/Group%20-%20Request%20Join/send_request_join_group_request_join_group_post
 * @returns
 */
const useRequestJoinGroup = () => {
  const queryClient = useQueryClient()
  return useMutation(GroupApi.request_join_group, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.GET_INFO_GROUP)
      toast.success('Yêu cầu tham gia thành công')
    },
  })
}

/**
 * https://group.api.hspace.biz/redoc#operation/accept_invitation_accept_invitation_post
 * Chấp nhận lời mời tham gia nhóm
 * @returns
 */
const useAcceptInviteJoinGroup = () => {
  const queryClient = useQueryClient()
  return useMutation(GroupApi.accept_invite_join_group, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.GET_LIST_INVITED_JOIN_GROUP)
      queryClient.invalidateQueries(keys.GET_MEMBERS_GROUP)
      toast.success('Đã chấp nhận lời mời.')
    },
  })
}

/**
 * https://group.api.hspace.biz/redoc#operation/cancel_invitation_cancel_invitation_post
 * Từ chối lời mời tham gia nhóm
 * @returns
 */
const useRejectInviteJoinGroup = () => {
  const queryClient = useQueryClient()
  return useMutation(GroupApi.reject_invite_join_group, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.GET_LIST_INVITED_JOIN_GROUP)
      toast.success('Đã từ chối lời mời.')
    },
  })
}

/**
 * https://group.api.hspace.biz/docs#/Group%20-%20Invitation/user_reject_invitation_user_reject_invitation_post
 * Hủy lời mời tham gia nhóm (owner group)
 * @returns
 */
const useCancelInviteJoinGroup = () => {
  const queryClient = useQueryClient()
  return useMutation(GroupApi.cancel_invite_join_group, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.GET_LIST_INVITED_JOIN_GROUP_IN_GROUP)
      toast.success('Đã hủy lời mời.')
    },
  })
}

/**
 * https://uat.api.bca.hspace.biz/redoc#operation/reject_request_join_group_reject_request_join_group_post
 * Từ chối yêu cầu tham gia nhóm
 * @returns
 */
const useRejectRequestJoinGroup = () => {
  const queryClient = useQueryClient()
  return useMutation(GroupApi.reject_request_join_group, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.GET_LIST_REQUESTED_JOIN_GROUP_IN_GROUP)
      toast.success('Đã từ chối yêu cầu tham gia.')
    },
  })
}

/**
 * https://group.api.hspace.biz/docs#/Group%20-%20Request%20Join/user_cancel_request_join_group_user_cancel_request_join_group_post
 * Hủy yêu cầu tham gia nhóm
 * @returns
 */
const useCancelRequestJoinGroup = () => {
  const queryClient = useQueryClient()
  return useMutation(GroupApi.cancel_request_join_group, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.GET_LIST_REQUESTED_JOIN_GROUP)
      toast.success('Đã hủy yêu cầu tham gia nhóm.')
    },
  })
}

/**
 * https://uat.api.bca.hspace.biz/redoc#operation/accept_request_join_group_accept_request_join_group_post
 * Chấp nhận yêu cầu tham gia nhóm
 * @returns
 */
const useAcceptRequestJoinGroup = () => {
  const queryClient = useQueryClient()
  return useMutation(GroupApi.accept_request_join_group, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.GET_LIST_REQUESTED_JOIN_GROUP_IN_GROUP)
      queryClient.invalidateQueries(keys.GET_MEMBERS_GROUP)
      toast.success('Đã chấp nhận yêu cầu tham gia.')
    },
  })
}

/**
 * https://uat.api.bca.hspace.biz/redoc#operation/accept_request_join_group_accept_request_join_group_post
 * Xoá member ra khỏi nhóm
 * @returns
 */
const useRemoveMemberGroup = () => {
  const queryClient = useQueryClient()
  return useMutation(GroupApi.remove_member_group, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.GET_MEMBERS_GROUP)
      toast.success('Đã xóa thành viên.')
    },
  })
}

/**
 * https://uat.api.bca.hspace.biz/redoc#operation/Update_group_image_update_group_image_post
 * update cover, avatar group
 * @returns
 */
const useUpdateImageGroup = () => {
  const queryClient = useQueryClient()
  return useMutation(GroupApi.update_image_group, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.GET_INFO_GROUP)
    },
  })
}

const GroupMutation = {
  useCreateGroup,
  useInviteJoinGroup,
  useDeleteGroup,
  useUpdateGroup,
  useRequestJoinGroup,

  useAcceptInviteJoinGroup,
  useRejectInviteJoinGroup,
  useCancelInviteJoinGroup,
  useRejectRequestJoinGroup,
  useCancelRequestJoinGroup,
  useAcceptRequestJoinGroup,
  useRemoveMemberGroup,

  useUpdateImageGroup,
}

export default GroupMutation
