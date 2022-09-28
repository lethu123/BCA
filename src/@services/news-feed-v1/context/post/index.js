import {createContext, useContext, useReducer, useMemo} from 'react'
import initialPosts from './initial-state'
import POSTS_TYPE from './type'
import listPosts from './reducer'

const Context = createContext({
  ...initialPosts,
})

export const PostProvider = ({children, initialValue = {}}) => {
  const [state, dispatch] = useReducer(listPosts, initialPosts)

  const setLoadingComment = data => {
    dispatch({type: POSTS_TYPE.SET_LOADING_COMMENT, payload: {data}})
  }
  const setCountComment = data => {
    dispatch({type: POSTS_TYPE.SET_COUNT_COMMENT, payload: data})
  }
  const setListPost = data => {
    dispatch({type: POSTS_TYPE.SET_LIST_POST, payload: data})
  }

  const store = useMemo(() => {
    return {
      state: {...state, ...initialValue},
      setLoadingComment,
      setCountComment,
      setListPost,
    }
  }, [initialValue, state])

  return <Context.Provider value={store}>{children}</Context.Provider>
}

export const usePostsCtx = () => {
  const context = useContext(Context)
  return context
}
