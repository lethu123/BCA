import {data} from './data'
import {handleInitialStateReducer} from 'utility/Utils'

// *** Initial State
const initialState = handleInitialStateReducer(data)

const newsfeedReducer = (state = initialState, {payload, type, key}) => {
  switch (type) {
    case 'GET_LIST_POST_NEWSFEED': {
      return {...state, [key]: payload}
    }
    default:
      return state
  }
}

export default newsfeedReducer
