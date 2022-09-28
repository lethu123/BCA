import {createContext, useContext, useReducer, useMemo} from 'react'
import TYPE from './type'
import {initialStateEmail} from './initial-state'
import REDUCER from './reducer'

const Context = createContext({
  ...initialStateEmail,
})

export const Provider = ({children}) => {
  const [state, dispatch] = useReducer(REDUCER, initialStateEmail)

  // step 1
  const settingSendEmail = data =>
    dispatch({type: TYPE.SETTING_SEND_EMAIL, payload: data})

  // step 3
  const chooseLibEmail = data =>
    dispatch({type: TYPE.CHOOSE_LIB_EMAIL, payload: data})

  const typeAttachedLink = data =>
    dispatch({type: TYPE.TYPE_ATTACHED_LINK, payload: data})

  const addSeoLinkExternal = data =>
    dispatch({
      type: TYPE.ADD_SEO_LINK_EXTERNAL,
      payload: data,
    })

  const updateSeoLinkExternal = data =>
    dispatch({
      type: TYPE.UPDATE_SEO_LINK_EXTERNAL,
      payload: data,
    })

  const deleteSeoLinkExternal = id =>
    dispatch({type: TYPE.DELETE_SEO_LINK_EXTERNAL, payload: id})

  const addSeoLinkSystem = data =>
    dispatch({
      type: TYPE.SEO_LINK_SYSTEM,
      payload: data,
    })

  const getSeoLinkSystem = data =>
    dispatch({
      type: TYPE.GET_SEO_LINK_SYSTEM,
      payload: data.data,
      metadata: data.metadata,
    })

  const deleteSeoLinkSystem = index =>
    dispatch({type: TYPE.DELETE_SEO_LINK_SYSTEM, payload: index})

  const store = useMemo(() => {
    return {
      state,
      settingSendEmail,

      chooseLibEmail,
      typeAttachedLink,
      addSeoLinkExternal,
      addSeoLinkSystem,
      deleteSeoLinkExternal,
      deleteSeoLinkSystem,
      getSeoLinkSystem,
      updateSeoLinkExternal,
    }
  }, [state])

  return <Context.Provider value={store}>{children}</Context.Provider>
}

export const useSettingEmailCtx = () => {
  const context = useContext(Context)
  return context
}
