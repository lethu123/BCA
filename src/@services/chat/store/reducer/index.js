const initialState = {
  chats: [],
  contacts: [],
  userProfile: {},
  selectedUser: {},
  isShowRightSidebar: false,
  isShowPopup: false,
  instructorHschool: [],
  studentHschool: [],
  organizationHschool: [],
  following: [],
  userSys: [],
  messengerUnreads: [],
}

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_PROFILE':
      return {...state, userProfile: action.userProfile}
    case 'GET_CHAT_CONTACTS':
      return {
        ...state,
        chats: action.data.chatsContacts,
        contacts: action.data.contacts,
      }
    case 'SELECT_CHAT':
      return {
        ...state,
        selectedUser: action.data,
      }
    case 'SEND_MSG_TO_GROUP': {
      // tìm user hiện tại đang nhắn
      // update list chat
      let listChat = state.selectedUser.chats
      listChat.push(action.data)
      return {
        ...state,
        selectedUser: {
          ...state.selectedUser,
          chats: [...listChat],
        },
      }
    }
    case 'SEND_MESSAGE_TO_GROUP_CHAT_SELECT': {
      let chat = state.chats.filter(ele => ele.id === action.payload.groupId)
      if (chat.length > 0) {
        if (state.selectedUser.chat) {
          let arr = state.chats.map(ele =>
            ele.id === action.payload.groupId
              ? {
                  ...ele,
                  chat: {
                    ...ele.chat,
                    lastMessage: {
                      message: action.payload.data.message,
                      time: action.payload.data.time,
                      senderId: action.payload.data.senderId,
                    },
                  },
                }
              : ele,
          )
          let chat = {
            ...state.selectedUser.chat,
            chat: [...state.selectedUser.chat.chat, action.payload.data],
          }
          return {
            ...state,
            chats: [...arr],
            selectedUser: Object.assign(state.selectedUser, {chat}),
          }
        } else {
          let arr = state.chats.map(ele =>
            ele.id === action.payload.groupId
              ? {
                  ...ele,
                  chat: {
                    ...ele.chat,
                    unseenMsgs: ele.chat.unseenMsgs + 1,
                    lastMessage: {
                      message: action.payload.data.message,
                      time: action.payload.data.time,
                      senderId: action.payload.data.senderId,
                    },
                  },
                }
              : ele,
          )
          return {...state, chats: [...arr]}
        }
      } else {
        if (state.selectedUser.contact) {
          let objChat = state.contacts.filter(
            ele => ele.id === action.payload.groupId,
          )[0]
          objChat.chat = {
            id: action.payload.groupId,
            unseenMsgs:
              state.selectedUser.contact.id === action.payload.groupId ? 0 : 1,
            lastMessage: {
              message: action.payload.data.message,
              time: action.payload.data.time,
              senderId: action.payload.data.senderId,
            },
          }

          return {...state, chats: [...state.chats, objChat]}
        }
        return {...state}
      }
    }

    case 'WS_PUSH_UNREAD_MESSAGE_GROUP_CHAT': {
      if (
        !state.selectedUser.contact &&
        action.payload.sender.user_id !== state.userProfile.id
      ) {
        let arr = state.messengerUnreads.map(ele => {
          if (ele.group_id === action.payload.group_id) {
            return {
              ...ele,
              datetime_created: action.payload.datetime_created,
              newest_message: action.payload.newest_message,
              is_contain_images: action.payload.is_contain_images,
              unread_count: ele.unread_count + 1,
            }
          } else {
            return ele
          }
        })
        return {...state, messengerUnreads: [...arr]}
      } else {
        return {...state}
      }
    }

    case 'TOGGLE_SHOW_RIGHT_SIDEBAR':
      return {...state, isShowRightSidebar: action.payload}

    case 'TOGGLE_SHOW_POPUP_CHAT':
      return {...state, isShowPopup: action.payload}

    case 'SET_DATA_RIGHT_SIDEBAR_INSTRUCTOR_HSCHOOL':
      return {
        ...state,
        instructorHschool: action.payload,
      }
    case 'SET_DATA_RIGHT_SIDEBAR_STUDENT_HSCHOOL':
      return {
        ...state,
        studentHschool: action.payload,
      }

    case 'SET_DATA_RIGHT_SIDEBAR_ORG_HSCHOOL':
      return {
        ...state,
        organizationHschool: action.payload,
      }
    case 'SET_DATA_RIGHT_SIDEBAR_FOLLOWING':
      return {
        ...state,
        following: action.payload,
      }

    case 'SET_DATA_RIGHT_SIDEBAR_USER_SYSTEM':
      return {
        ...state,
        userSys: action.payload,
      }

    case 'CREATE_GROUP_CHAT':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      }

    case 'GET_LIST_UNREAD_MESSAGE_GROUP_CHAT': {
      return {...state, messengerUnreads: action.payload}
    }

    case 'SET_MARK_SEEN_MESSENGER_UNREAD': {
      return {
        ...state,
        messengerUnreads: state.messengerUnreads.filter(
          ele => ele.group_id !== action.payload,
        ),
      }
    }

    case 'MEMBER_ACCEPT_JOIN_TO_GROUP': {
      state.contacts =
        state.contacts.length > 0
          ? state.contacts.map(item => {
              if (item.id === action.payload.groupId) {
                return {
                  ...item,
                  members: [...item.members, action.payload.newMember],
                }
              } else {
                return item
              }
            })
          : []
      if (state.selectedUser.contact) {
        state.selectedUser = {
          ...state.selectedUser,
          contact: {
            ...state.selectedUser.contact,
            members: [
              ...state.selectedUser.contact.members,
              action.payload.newMember,
            ],
          },
        }
      }
      return {...state}
    }
    case 'DELETE_INFO_GROUP_CHAT_SELECT': {
      return {
        ...state,
        chats: [...state.chats.filter(ele => ele.id !== action.payload)],
        contacts: [...state.contacts.filter(ele => ele.id !== action.payload)],
        selectedUser:
          state.selectedUser.contact &&
          state.selectedUser.contact.id === action.payload
            ? {}
            : state.selectedUser,
      }
    }

    case 'DELETE_MESSAGE_OF_GROUP_CHAT_SELECT': {
      return {
        ...state,
        selectedUser: {
          ...state.selectedUser,
          chat: {
            ...state.selectedUser.chat,
            chat: state.selectedUser.chat.chat.filter(
              ele => ele.id !== action.payload.id,
            ),
          },
        },
      }
    }

    case 'NOTIFICATION_USER_ONLINE_JOIN_GROUP': {
      let members = state.selectedUser.contact.members.map(ele => {
        if (parseInt(ele.user_id) === action.payload.userId) {
          return {...ele, status: 'online'}
        } else {
          return ele
        }
      })
      return {
        ...state,
        selectedUser: {
          ...state.selectedUser,
          contact: {
            ...state.selectedUser.contact,
            members,
          },
        },
      }
    }

    default:
      return state
  }
}

export default chatReducer
