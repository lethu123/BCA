import keys from './key'
import {PROXY} from '../../proxy'

const secret_key = localStorage.getItem('refreshToken')
// const userData = localStorage.getItem('userData')
// const uid = userData ? JSON.parse(userData) : null

//** constant api */
const list_requested_join_group =
  PROXY + '/user_list_request_join_group/:user_id'
const list_requested_join_group_in_group =
  PROXY + '/group_list_request_join_group/:group_id'
const list_invited_join_group = PROXY + '/user_list_invitation/:user_id'
const list_invited_join_group_in_group =
  PROXY + '/group_list_invitation_sent/:group_id'

const get_list_all_group = PROXY + '/admin_list_all_groups'

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
 * https://group.api.hspace.biz/redoc#operation/list_request_join_group_list_request_join_group_get
 * Danh sách yêu cầu tham gia nhóm
 * Datatable
 */
const useListRequestedJoindGroupByUser = user_id => {
  return {
    ...optionsCallApi(list_requested_join_group.replace(':user_id', user_id)),
    key: [keys.GET_LIST_REQUESTED_JOIN_GROUP, user_id],
  }
}

/**
 * https://uat.api.bca.hspace.biz/redoc#operation/group_list_request_join_group_group_list_request_join_group__group_id__get
 * Danh sách yêu cầu tham gia nhóm
 * Datatable
 */
const useListRequestedJoindGroupByGroup = (user_id, group_id) => {
  return {
    ...optionsCallApi(
      list_requested_join_group_in_group.replace(':group_id', group_id),
    ),
    key: [keys.GET_LIST_REQUESTED_JOIN_GROUP_IN_GROUP],
    params: {
      user_id,
    },
  }
}

/**
 * https://group.api.hspace.biz/redoc#operation/list_invitation_list_invitation__user_id__get
 * Danh sách lời mời tham gia nhóm
 * Datatable
 */
const useListInvitedJoindGroupByUser = user_id => {
  return {
    ...optionsCallApi(list_invited_join_group.replace(':user_id', user_id)),
    key: [keys.GET_LIST_INVITED_JOIN_GROUP, user_id],
  }
}

/**
 * https://uat.api.bca.hspace.biz/redoc#operation/group_list_invitation_sent_group_list_invitation_sent__group_id__get
 * Danh sách lời mời user tham gia nhóm
 * Datatable
 */
const useListInvitedJoindGroupByGroup = (user_id, group_id) => {
  return {
    ...optionsCallApi(
      list_invited_join_group_in_group.replace(':group_id', group_id),
    ),
    key: [keys.GET_LIST_INVITED_JOIN_GROUP_IN_GROUP, user_id],
    params: {user_id},
  }
}

/**
 * https://group.api.hspace.biz/redoc#tag/Group-Admin
 * Danh sách tất cả nhóm trong hệ thống
 * Datatable
 */
const useListAllGroupSystem = data => {
  return {
    ...optionsCallApi(get_list_all_group),
    key: [keys.GET_ALL_GROUP_SYSTEM],
    params: data,
  }
}

const GroupDatatable = {
  useListRequestedJoindGroupByUser,
  useListInvitedJoindGroupByUser,
  useListRequestedJoindGroupByGroup,
  useListInvitedJoindGroupByGroup,
  useListAllGroupSystem,
}

export default GroupDatatable
