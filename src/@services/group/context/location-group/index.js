import {createContext, useContext, useReducer, useMemo} from 'react'
import TYPE from './type'
import {initialStateEmail} from './initial-state'
import REDUCER from './reducer'

const Context = createContext({
  ...initialStateEmail,
})

export const Provider = ({children}) => {
  const [state, dispatch] = useReducer(REDUCER, initialStateEmail)

  // setting review group
  const settingReviewGroup = data =>
    dispatch({type: TYPE.SETTING_REVIEW_GROUP, payload: data})

  const store = useMemo(() => {
    return {
      state,
      settingReviewGroup,
    }
  }, [state])

  return <Context.Provider value={store}>{children}</Context.Provider>
}

export const useLocationGroupCtx = () => {
  const context = useContext(Context)
  return context
}
