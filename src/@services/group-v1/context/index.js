import {createContext, useContext, useReducer, useMemo} from 'react'
import initialStateModal from './initial-state'
import groupReducer from './reducer'
import GROUP_TYPE from './type'

const Context = createContext({
  ...initialStateModal,
})

export const GroupProvider = ({children}) => {
  const [state, dispatch] = useReducer(groupReducer, initialStateModal)

  const setGroupStatePrivacy = data =>
    dispatch({type: GROUP_TYPE.SET_GROUP_STATE_PRIVACY, payload: data})

  const setGroupStatePrivacyOnlyMe = data =>
    dispatch({type: GROUP_TYPE.SET_GROUP_STATE_PRIVACY_ONLY_ME, payload: data})

  const setGroupName = data =>
    dispatch({type: GROUP_TYPE.SET_GROUP_NAME, payload: data})

  const store = useMemo(() => {
    return {
      state,
      setGroupStatePrivacy,
      setGroupStatePrivacyOnlyMe,
      setGroupName,
    }
  }, [state])

  return <Context.Provider value={store}>{children}</Context.Provider>
}

export const useGroupCtx = () => {
  const context = useContext(Context)
  return context
}
