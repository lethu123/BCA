import {handleAxios} from '../ultils'

const PROXY = 'https://group.api.hspace.biz'
// const PROXY = ''

const GroupApi = {
  create_group: data => handleAxios(PROXY + '/create_group', 'post', data),
  invite_join_group: ({data, group_id}) =>
    handleAxios(PROXY + `/invite_members/group/${group_id}`, 'post', data),
  get_list_appellation: () => handleAxios(PROXY + '/list_label', 'get'),
  get_info_appellation: params =>
    handleAxios(PROXY + '/label_info', 'get', null, {}, params),
  get_list_group_created: (uid, params) =>
    handleAxios(PROXY + `/all_group_created/${uid}`, 'get', null, {}, params),
  get_list_group_explored: (uid, params) =>
    handleAxios(PROXY + `/all_group_discover/${uid}`, 'get', null, {}, params),
  get_list_group_joined: (uid, params) =>
    handleAxios(PROXY + `/all_group_joined/${uid}`, 'get', null, {}, params),
  get_info_group: (group_id, user_id) =>
    handleAxios(
      `${PROXY}/group_info/${group_id}`,
      'get',
      null,
      {},
      {group_id, user_id},
    ),
  delete_group: data => handleAxios(PROXY + '/delete_group', 'delete', data),
  update_group: data => handleAxios(PROXY + '/update_group', 'post', data),

  get_address: () =>
    handleAxios(
      'https://gist.githubusercontent.com/hspaces/e2dfbf434482c417583bf41abb0f66c5/raw/be24797790534d832f5750b267793a191faaaa70/gis.hspace.biz.json',
      'get',
    ),
  get_members_group: group_id =>
    handleAxios(PROXY + '/list_group_members', 'get', null, {}, {group_id}),
  request_join_group: data =>
    handleAxios(PROXY + '/request_join_group', 'post', data),

  accept_invite_join_group: data =>
    handleAxios(PROXY + '/accept_invitation', 'post', data),
  reject_invite_join_group: data =>
    handleAxios(
      'https://group.api.hspace.biz/user_reject_invitation',
      'post',
      data,
    ),
  cancel_invite_join_group: data =>
    handleAxios(
      'https://group.api.hspace.biz/group_cancel_invitation',
      'post',
      data,
    ),
  cancel_request_join_group: data =>
    handleAxios(
      'https://group.api.hspace.biz/user_cancel_request_join_group',
      'post',
      data,
    ),
  reject_request_join_group: data =>
    handleAxios(PROXY + '/reject_request_join_group', 'post', data),
  accept_request_join_group: data =>
    handleAxios(PROXY + '/accept_request_join_group', 'post', data),
  remove_member_group: data =>
    handleAxios(PROXY + '/remove_members', 'post', data),
  get_statistic_group: () => handleAxios(PROXY + '/group_statitic', 'get'),

  update_image_group: data =>
    handleAxios(PROXY + '/update_group_image', 'post', data),
}

export default GroupApi
