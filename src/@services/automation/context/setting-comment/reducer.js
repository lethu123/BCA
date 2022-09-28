import TYPE from './type'

const settingCommentReducer = (state, {type, payload}) => {
  switch (type) {
    case TYPE.ADD_FRIEND:
      return {...state, accounts: payload}
    case TYPE.FILTER_CONDITION:
      return {
        ...state,
        condition: {
          ...state.condition,
          [payload.key]: payload.value,
        },
      }
    case TYPE.TYPE_COMMENT:
      return {...state, type: payload}
    case TYPE.MANUAL_DATAS:
      return {...state, manual_datas: payload}

    default:
      return state
  }
}

export default settingCommentReducer
