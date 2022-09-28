import {handleAxios} from '../ultils'

const secret_key = localStorage.getItem('refreshToken')
const setupHeader = (url, params = {}) =>
  handleAxios(url, 'get', null, {'s-key': secret_key}, params)

const ChatApi = {
  user: {
    'right-sidebar': () =>
      setupHeader('https://uat.api.bca.hspace.biz/account/list_users'),
  },
  create_group: data =>
    handleAxios('https://chat.api.hspace.biz/groups_chat/create', 'post', data),
  get_groups: user_id =>
    setupHeader('https://chat.api.hspace.biz/groups_chat/all', {user_id}),
  get_all_message_group: (group_id, user_id) => {
    setupHeader(`https://chat.api.hspace.biz/msg/group/${group_id}/all`, {
      user_id,
    })
  },
  get_info_group: (group_id, user_id) => {
    setupHeader(`https://chat.api.hspace.biz/groups_chat/${group_id}/info`, {
      user_id,
    })
  },
  send_msg_to_group: (group_id, data) =>
    handleAxios(
      `https://chat.api.hspace.biz/chat/${group_id}`,
      'post',
      null,
      {},
      data,
    ),
}

export default ChatApi
