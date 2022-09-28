import {useMutation, useQueryClient} from 'react-query'
import {toast} from 'react-toastify'
import UserApi from '../user-bca'
import keys from './key'

const useUpdateProfileUser = () => {
  const queryClient = useQueryClient()
  return useMutation(UserApi.update_profile_user, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.GET_PROFILE_USER)
      toast.success('Cập nhật thông tin thành công')
    },
  })
}

const useUpdateSocialLinkProfileUser = () => {
  const queryClient = useQueryClient()
  return useMutation(UserApi.update_social_link_profile_user, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.GET_SOCIAL_LINK_USER)
      toast.success('Cập nhật thông tin thành công')
    },
  })
}

const useUpdateInfoToChangePasswordUser = () => {
  const queryClient = useQueryClient()
  return useMutation(UserApi.update_info_to_change_password_user, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.GET_INFO_TO_CHANGE_PASSWORD_USER)
      toast.success('Cập nhật mật khẩu thành công')
    },
  })
}

const useCreateProfileReference = cb => {
  const queryClient = useQueryClient()
  return useMutation(UserApi.create_profile_reference, {
    onSuccess: res => {
      queryClient.invalidateQueries('LIST_REQUEST_ACCESS')
      cb()
    },
  })
}

const UserMutation = {
  useUpdateProfileUser,
  useUpdateSocialLinkProfileUser,
  useUpdateInfoToChangePasswordUser,
  useCreateProfileReference,
}

export default UserMutation
