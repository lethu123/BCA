// *** Initial State
const initialState = {
  users: [],
  notifications: [],
  unreads: [],
}

const handleUsername = (users, uid) => {
  if (users?.length) {
    const findUser = users.find(ele => ele.user_id === uid)
    return findUser
      ? {...findUser, user_name: findUser.profile?.name || findUser.user_name}
      : null
  }
  return null
}

const notificationReducer = (state = initialState, {payload, type}) => {
  switch (type) {
    case 'LIST_USER_SYSTEM':
      return {
        ...state,
        users: payload,
      }
    case 'LIST_NOTIFICTION_UNREAD':
      return {
        ...state,
        unreads: payload.map(noti => ({
          ...noti,
          sender: handleUsername(state.users, noti.sender_id),
        })),
      }
    case 'LIST_NOTIFICTION':
      return {
        ...state,
        notifications: payload.map(noti => ({
          ...noti,
          sender: handleUsername(state.users, noti.sender_id),
        })),
      }
    case 'ADD_NOTIFICTION': {
      const sender = handleUsername(state.users, payload.sender_id)
      return {
        ...state,
        unreads: [{...payload, sender}, ...state.unreads],
        notifications: [{...payload, sender}, ...state.notifications],
      }
    }

    case 'READ_ALL_NOTIFICTION':
      return {
        ...state,
        unreads: [],
        notifications: state.notifications.map(it => ({...it, is_read: true})),
      }
    case 'READ_NOTIFICTION': {
      return {
        ...state,
        unreads: state.unreads.filter(it => it._id !== payload),
        notifications: state.notifications.map(it =>
          it._id === payload ? {...it, is_read: true} : it,
        ),
      }
    }

    default:
      return state
  }
}

export default notificationReducer
