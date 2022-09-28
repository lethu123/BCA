// import {toast} from 'react-toastify'
import {ChatService} from '@services/chat/query'

import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from 'redux/reducers/async/asyncReducer'
import {toast} from 'react-toastify'
import {ChatQuery} from '@services/chat/hook'
import {useQuery} from 'react-query'
import ChatApi from '@services/chat/chat-api'

export const createChatGroupAction =
  (data, toUserId, user, toUsername) => async dispatch => {
    try {
      dispatch(asyncActionStart())
      let response = await ChatService.createChatGroup(data)

      if (response) {
        let contact = {
          id: response.group_id,
          fullName: data.name,
          role: '',
          about: data.name,
          avatar: data.icon_base64 || data.icon,
          status: 'offline',
          members: [
            {
              user_id: user.id,
              picture: user.picture,
              url: user.url,
              username: user.username,
              status: 'online',
            },
          ],
          actives: [],
        }
        dispatch({
          type: 'CREATE_GROUP_CHAT',
          payload: contact,
        })
        if (window.location.pathname !== '/chat') {
          dispatch({type: 'TOGGLE_SHOW_POPUP_CHAT', payload: true})
        } else {
          dispatch(selectChat(response.group_id, user.id))
        }

        let invitation = await ChatService.createInvitationChatGroups(
          {
            user_id: user.id,
            notification_receiver: [toUserId],
            invitations: [toUserId],
          },
          response.group_id,
        )

        if (invitation) {
          toast.success(
            `Invite join group chat ${data.name} success, waiting ${toUsername} approve`,
          )
        }

        dispatch(asyncActionFinish())
      }
    } catch (error) {
      dispatch(asyncActionError(error))
    }
  }

export const getListChatGroupAction = (user_id, group_id) => async dispatch => {
  try {
    let response = await ChatService.getChatGroups(user_id)
    if (response) {
      let contacts = response.groups.map(ele => ({
        id: ele._id,
        fullName: ele.name,
        role: '',
        about: ele.name,
        avatar: ele.icon_base64 || ele.icon,
        status: 'offline',
        members: ele.members.map((ele, idx) => ({
          ...ele,
          status: idx === 0 ? 'online' : 'offline',
        })),
        actives: ele.active_members,
      }))
      let arr = []
      response.groups.forEach(ele => {
        if (ele.last_message.newest_message) {
          arr.push({
            id: ele._id,
            fullName: ele.name,
            role: '',
            about: ele.name,
            avatar: ele.icon_base64 || ele.icon,
            status: 'offline',
            members: ele.members.map((ele, idx) => ({
              ...ele,
              status: idx === 0 ? 'online' : 'offline',
            })),
            actives: ele.active_members,
            chat: {
              id: ele._id,
              unseenMsgs: ele.unread_count,
              lastMessage: {
                message: ele.last_message.newest_message,
                time: new Date(
                  new Date(ele.last_message.datetime_updated).getTime() +
                    7 * 60 * 60 * 1000,
                ).toISOString(),
                senderId:
                  ele.last_message.sender && ele.last_message.sender.user_id,
              },
            },
          })
        }
      })

      dispatch({
        type: 'GET_CHAT_CONTACTS',
        data: {
          chatsContacts: arr,
          contacts,
        },
      })

      if (group_id) {
        dispatch(selectChat(group_id, user_id))
      }
    }
  } catch (error) {
    console.log(error)
  }
}

// ** Get User Profile
export const getUserProfile = () => {
  return dispatch => {
    const userData = JSON.parse(localStorage.getItem('userData'))
    let {id, avatar, username, short_bio} = userData
    return dispatch({
      type: 'GET_USER_PROFILE',
      userProfile: {
        id,
        avatar,
        fullName: username,
        role: 'admin',
        about: short_bio,
        status: 'online',
        settings: {
          isTwoStepAuthVerificationEnabled: true,
          isNotificationsOn: false,
        },
      },
    })
  }
}

// ** Select Chat
export const selectChat = (groupId, userId) => {
  return async dispatch => {
    try {
      let response = await ChatService.getAllMessageChatGroups(userId, groupId)
      const listContact = response.message.map(item => item.user_id)
      let contacts = listContact.filter(
        (item, index) => listContact.indexOf(item) === index,
      )

      dispatch({
        type: 'SELECT_CHAT',
        data: {
          groupId,
          chats: response.message,
          contacts,
        },
      })
    } catch (error) {
      console.log(error)
    }
  }
}

// export const selectChat = (groupId, userId) => {
//   return async dispatch => {
//     try {
//       const {data} = ChatQuery.useGetAllMessageGroup(groupId, userId)
//       let response = await ChatService.getAllMessageChatGroups(userId, groupId)
//       if (response.message.length > 0) {
//         dispatch({
//           type: 'SELECT_CHAT',
//           data: {
//             groupId,
//             chats: {
//               id: groupId,
//               unseenMsgs: 0,
//               chat: response.message.map((ele, idx) => ({
//                 id: ele._id,
//                 message: ele.content,
//                 time: ele.datetime_created,
//                 senderId: ele.user_id,
//                 images: ele.attachment_image_url,
//                 viewerIds: ele.viewer_ids,
//               })),
//             },
//           },
//         })
//         let listMgs = response.message.filter(
//           msg => !msg.viewer_ids.includes(userId),
//         )
//         listMgs.forEach(async element => {
//           await ChatService.updateMessageChatGroups(
//             {
//               user_id: element.user_id,
//               content: element.content,
//               is_removed: false,
//               viewer_ids: [...element.viewer_ids, userId],
//             },
//             element._id,
//           )
//         })
//       } else {
//         dispatch({
//           type: 'SELECT_CHAT',
//           data: {
//             groupId,
//             chats: {
//               id: groupId,
//               unseenMsgs: 0,
//               chat: [],
//             },
//           },
//         })
//       }
//     } catch (error) {
//       console.log(error)
//     }
//   }
// }

export const getListUnreadMessageChatGroupsAction =
  userId => async dispatch => {
    try {
      let response = await ChatService.getListUnreadMessageChatGroups(userId)
      if (response) {
        dispatch({
          type: 'GET_LIST_UNREAD_MESSAGE_GROUP_CHAT',
          payload: response,
        })
      }
    } catch (error) {
      dispatch(asyncActionError(error))
    }
  }

export const markSeenGroupChatNotificationAction =
  groupId => async dispatch => {
    let id = JSON.parse(localStorage.getItem('userData')).id
    dispatch({type: 'SET_MARK_SEEN_MESSENGER_UNREAD', payload: groupId})
    dispatch(selectChat(groupId, id))
  }

/** send message
 * https://chat.api.hspace.biz/redoc#operation/send_message_to_group_chat__group_id__post
 * @param {*} group_id
 * @param {*} data
 * @returns
 */
export const sendMessageChatGroupsAction =
  (group_id, data) => async dispatch => {
    try {
      const response = await ChatApi.send_msg_to_group(group_id, data)
      dispatch({
        type: 'SEND_MSG_TO_GROUP',
        data: {
          attachment_image_public_ids: null,
          attachment_image_url: data.attachment_image_url,
          content: data.content,
          datetime_created: new Date(),
          datetime_updated: null,
          group_id: group_id,
          is_removed: false,
          user_id: data.user_id,
          viewer_ids: [],
          _id: response.message_id,
        },
      })
    } catch (error) {
      toast.error('Fail to send messenger')
      dispatch(asyncActionError(error))
    }
  }

export const deleteChatGroupAction = (group_id, user_id) => async dispatch => {
  try {
    dispatch(asyncActionStart())
    let response = await ChatService.deleteChatGroups(group_id)
    if (response.status === 200) {
      dispatch(getListChatGroupAction(user_id))
      toast.success('Delete Success')
      dispatch(asyncActionFinish())
    }
  } catch (error) {
    toast.error('Delete group fail')
    dispatch(asyncActionError(error))
  }
}

export const editChatGroupAction =
  (data, group_id, newMember) => async dispatch => {
    try {
      dispatch(asyncActionStart())
      let response = await ChatService.editChatGroups(data, group_id)

      if (response) {
        dispatch(getListChatGroupAction(data.user_id))

        if (newMember.length > 0) {
          dispatch(
            createInvitationChatGroupsAction(
              newMember.map(member => member.id),
              group_id,
              `Invite ${data.members
                .map(member => member.value)
                .join(', ')} join to ${
                response.name
              } group  success, waiting to approve`,
              data.user_id,
            ),
          )
        }

        dispatch(asyncActionFinish())
        toast.success('Update Success')
      }
    } catch (error) {
      toast.error('Update fail')
      dispatch(asyncActionError(error))
    }
  }

export const createInvitationChatGroupsAction =
  (userReceiver, groupId, textToast, userId) => async dispatch => {
    try {
      let dataInvitation = {
        user_id: userId,
        notification_receiver: userReceiver,
        invitations: userReceiver,
      }
      let invitation = await ChatService.createInvitationChatGroups(
        dataInvitation,
        groupId,
      )
      if (invitation) {
        toast.success(textToast)
      }
    } catch (error) {
      dispatch(asyncActionError(error))
    }
  }

export const updateMessengerSeen = async (data, id) => {
  try {
    await ChatService.updateMessageChatGroups(data, id)
  } catch (error) {
    console.log(error)
  }
}

export const updateMessageChatGroupsAction =
  (id, data, user_id) => async dispatch => {
    try {
      dispatch(asyncActionStart())
      let response = await ChatService.updateMessageChatGroups(
        {
          user_id,
          content: data.msg,
          is_removed: false,
          viewer_ids: data.viewerIds,
        },
        id,
      )
      if (response) {
        dispatch({
          type: 'UPDATE_MESSAGE_OF_GROUP_CHAT_SELECT',
          payload: {
            id,
            textContent: data.msg,
          },
        })
        toast.success('Update Success!')
        dispatch(asyncActionFinish())
      }
    } catch (error) {
      toast.error('Cannot Update')
      dispatch(asyncActionError(error))
    }
  }

export const deleteMessageChatGroupsAction =
  (id, user_id) => async dispatch => {
    try {
      dispatch(asyncActionStart())
      let response = await ChatService.deleteMessageChatGroups(
        {user_id, is_permanent: true, message_id: id},
        id,
      )

      if (response.status === 200) {
        dispatch({
          type: 'DELETE_MESSAGE_OF_GROUP_CHAT_SELECT',
          payload: {
            id,
          },
        })
        toast.success('Delete Success!')
        dispatch(asyncActionFinish())
      }
    } catch (error) {
      toast.error('Cannot delete')
      dispatch(asyncActionError(error))
    }
  }
