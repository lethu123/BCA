import keys from './key'
import {useQuery} from 'react-query'
import UserApi from '../user-bca'

// *** Lấy chi tiết user profile
const useGetUserProfile = id =>
  useQuery([keys.GET_PROFILE_USER, id], () => UserApi.get_profile_user(id))

// Lấy chi tiết liên kết mạng xã hội
const useGetSocialLinkUserProfile = id =>
  useQuery([keys.GET_SOCIAL_LINK_USER], () =>
    UserApi.get_social_link_profile_user(id),
  )

// Lấy chi tiết liên kết mạng xã hội
const useGetInfoToChangePasswordUser = () =>
  useQuery([keys.GET_INFO_TO_CHANGE_PASSWORD_USER], () =>
    UserApi.get_info_to_change_password_user(),
  )

/**
 * https://uat.api.bca.hspace.biz/redoc#operation/list_users_account_list_users_get
 * get list all user post
 */
const useGetListUserSystem = () => {
  return useQuery([keys.GET_USERS_SYSTEM], () => UserApi.get_list_user_system())
}

const UserQuery = {
  useGetUserProfile,
  useGetSocialLinkUserProfile,
  useGetInfoToChangePasswordUser,
  useGetListUserSystem,
}

export default UserQuery
