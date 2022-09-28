import {createContext, useContext, useReducer, useMemo} from 'react'
import TYPE from './type'
import INITIALSTATE from './initial-state'
import REDUCER from './reducer'

const Context = createContext(INITIALSTATE)

export const Provider = ({children}) => {
  const [state, dispatch] = useReducer(REDUCER, INITIALSTATE)

  const add_friend = data => dispatch({type: TYPE.ADD_FRIEND, payload: data})

  const filter_condition = data =>
    dispatch({type: TYPE.FILTER_CONDITION, payload: data})

  const type_comment = data =>
    dispatch({type: TYPE.TYPE_COMMENT, payload: data})

  const manual_datas = data =>
    dispatch({type: TYPE.MANUAL_DATAS, payload: data})

  const store = useMemo(() => {
    return {
      state,
      add_friend,
      filter_condition,
      type_comment,
      manual_datas,
    }
  }, [state])

  return <Context.Provider value={store}>{children}</Context.Provider>
}

export const useSettingCommentCtx = () => {
  const context = useContext(Context)
  return context
}
