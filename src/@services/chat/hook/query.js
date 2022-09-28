import keys from './key'
import {useQuery} from 'react-query'
import ChatApi from '../chat-api'

// *** Danh sách user suggestion chat right sidebar
const useGetListUserRightSidebar = () => {
  return useQuery([keys.LIST_USER_RIGHT_SIDEBAR], () =>
    ChatApi.user['right-sidebar'](),
  )
}

/**
 * Danh sách group chat
 * https://chat.api.hspace.biz/redoc#operation/list_all_group_chat_groups_chat_all_get
 * @param {*} user_id
 * @returns
 */
const useGetListGroupChat = user_id => {
  return useQuery([keys.GROUPS_CHAT], () => ChatApi.get_groups(user_id))
}

/**
 * Nội dung tin nhắn của group
 * https://chat.api.hspace.biz/redoc#operation/all_messages_msg_group__group_id__all_get
 * @param {*} user_id
 * @returns
 */
const useGetAllMessageGroup = (group_id, user_id) => {
  return useQuery(
    [keys.ALL_MESSAGE_GROUP],
    () => ChatApi.get_all_message_group(group_id, user_id),
    {enabled: !!group_id},
  )
}

/** Chi tiết một group
 * https://chat.api.hspace.biz/redoc#operation/get_a_group_chat_info_groups_chat__group_id__info_get
 * @param {*} group_id
 * @param {*} user_id
 * @returns
 */
const useGetInfomationGroup = (group_id, user_id) => {
  return useQuery(
    [keys.INFORMATION_GROUP],
    () => ChatApi.get_info_group(group_id, user_id),
    {enabled: !!group_id},
  )
}

const ChatQuery = {
  useGetListUserRightSidebar,
  useGetListGroupChat,
  useGetAllMessageGroup,
  useGetInfomationGroup,
}

export default ChatQuery
