import {data} from './data'
import {handleInitialStateReducer} from 'utility/Utils'

// *** Initial State
const initialState = handleInitialStateReducer(data)

const homePageReducer = (state = initialState, {payload, type}) => {
  switch (type) {
    default:
      return state
  }
}

export default homePageReducer
