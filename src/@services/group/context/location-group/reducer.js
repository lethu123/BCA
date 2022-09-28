import TYPE from './type'

const locationGroupReducer = (state, {type, payload, metadata}) => {
  switch (type) {
    // step 1
    case TYPE.SETTING_REVIEW_GROUP: {
      return {
        ...state,
        newGroup: {...state.newGroup, [payload.name]: payload.value},
      }
    }
    // step 3

    default:
      return state
  }
}

export default locationGroupReducer
