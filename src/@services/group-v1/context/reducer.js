import GROUP_TYPE from './type'

const groupReducer = (state, {type, payload, metadata}) => {
  switch (type) {
    case GROUP_TYPE.SET_GROUP_STATE_PRIVACY: {
      return {
        ...state,
        privacy: payload,
      }
    }
    case GROUP_TYPE.SET_GROUP_STATE_PRIVACY_ONLY_ME: {
      return {
        ...state,
        privacy_onlyMe: payload,
      }
    }
    case GROUP_TYPE.SET_GROUP_NAME: {
      return {
        ...state,
        group_name: payload,
      }
    }
    default:
      return state
  }
}

export default groupReducer
