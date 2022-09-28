import axios from 'axios'
import * as link_api from '../constant'

/**
 * https://chat.hspaces.net/redoc#operation/create_group_groups_create_post
 * @param {*} data
 */

const createChatGroup = async data => {
  return await axios
    .post(link_api.create_group_chat__API, data)
    .then(res => res.data)
}

/**
 * https://chat.hspaces.net/redoc#operation/list_group_groups_get
 * @param {*} user_id
 */

const getChatGroups = async user_id => {
  return await axios
    .get(link_api.get_list_groups_chat__API, {params: {user_id}})
    .then(res => res.data)
}

/**
 * https://chat.hspaces.net/redoc#operation/edit_group_groups__group_id__put
 * @param {*} group_id
 * @param {*} data
 */

const editChatGroups = async (data, group_id) => {
  return await axios
    .put(link_api.edit_info_group_chat_API.replace(':id', group_id), data)
    .then(res => res.data)
}

/**
 * https://chat.hspaces.net/redoc#operation/delete_group_groups__group_id__delete
 * @param {*} group_id
 */

const deleteChatGroups = async group_id => {
  return await axios.delete(
    link_api.delete_group_chat__API.replace(':id', group_id),
  )
}

/**
 * https://chat.hspaces.net/redoc#operation/all_messages_msg_group__group_id__get
 * @param {*} group_id
 * @param {*} user_id
 */

const getAllMessageChatGroups = async (user_id, group_id) => {
  return await axios
    .get(
      link_api.get_all_messages_chat_of_group__API.replace(':id', group_id),
      {params: {user_id}},
    )
    .then(res => res.data)
}

/**
 * https://chat.hspaces.net/redoc#operation/edit_message_msg__message_id__put
 * @param {*} id
 * @param {*} data
 */

const updateMessageChatGroups = async (data, id) => {
  return await axios
    .put(link_api.edit_message_chat_of_group_API.replace(':id', id), data)
    .then(res => res.data)
}

/**
 * https://chat.hspaces.net/redoc#operation/remove_message_msg__message_id__delete
 * @param {*} group_id
 * @param {*} data
 */

const deleteMessageChatGroups = async (data, id) => {
  return await axios.delete(
    link_api.delete_message_chat_of_group_API.replace(':id', id),
    {params: data},
  )
}

/**
 * https://chat.hspaces.net/redoc#operation/send_message_to_group_chat__group_id__post
 * @param {*} group_id
 * @param {*} data
 */

const sendMessageChatGroups = async (data, group_id) => {
  return await axios.post(
    link_api.send_message_chat_of_group_API.replace(':id', group_id),
    data,
  )
}

/**
 * https://chat.hspaces.net/redoc#operation/unread_message_msg_unread__user_id__get
 * @param {*} user_id
 */

const getListUnreadMessageChatGroups = async user_id => {
  return await axios
    .get(
      link_api.get_list_unread_messenger_chat_of_group_API.replace(
        ':id',
        user_id,
      ),
    )
    .then(res => res.data)
}

/**
 * https://chat.hspaces.net/redoc#operation/create_invitation_chat__group_id__invitation_post
 * @param {*} group_id
 * @param {*} data
 */

const createInvitationChatGroups = async (data, group_id) => {
  return await axios
    .post(
      link_api.create_invitation_to_group_chat_hschool_API.replace(
        ':id',
        group_id,
      ),
      data,
    )
    .then(res => res.data)
}

export const ChatService = {
  createChatGroup,
  getChatGroups,
  editChatGroups,
  deleteChatGroups,
  getAllMessageChatGroups,
  sendMessageChatGroups,
  updateMessageChatGroups,
  deleteMessageChatGroups,
  getListUnreadMessageChatGroups,
  createInvitationChatGroups,
}
