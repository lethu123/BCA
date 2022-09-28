import {createContext, useContext, useReducer, useMemo} from 'react'
import initialStateModal from './initial-state'
import MODAL_TYPE from './type'
import modalReducer from './reducer'

const Context = createContext({
  ...initialStateModal,
})

export const ModalProvider = ({children}) => {
  const [state, dispatch] = useReducer(modalReducer, initialStateModal)

  const toggleModaAction = data =>
    dispatch({type: MODAL_TYPE.TOGGLE_MODAL, payload: data})

  const setPositionModal = data =>
    dispatch({type: MODAL_TYPE.SET_POSITION_MODAL, payload: data})

  const setIdCategory = data =>
    dispatch({type: MODAL_TYPE.SET_ID_CATEGORY, payload: data})

  const setIdPost = data =>
    dispatch({type: MODAL_TYPE.SET_ID_POST, payload: data})

  const setStatePrivacy = data =>
    dispatch({type: MODAL_TYPE.SET_STATE_PRIVACY, payload: data})

  const setAddPhoto = data =>
    dispatch({type: MODAL_TYPE.SET_ADD_PHOTO, payload: data})

  const setPostValue = data =>
    dispatch({type: MODAL_TYPE.SET_POST_VALUE, payload: data})

  const setTagFriend = data =>
    dispatch({type: MODAL_TYPE.SET_TAG_FRIEND, payload: data})

  const setWithFriend = data =>
    dispatch({type: MODAL_TYPE.SET_WITH_FRIEND, payload: data})

  const setHashTag = data =>
    dispatch({type: MODAL_TYPE.SET_HASH_TAGS, payload: data})

  const setBookMark = data =>
    dispatch({type: MODAL_TYPE.SET_BOOK_MARK, payload: data})
  const toggleSubModalAction = data =>
    dispatch({type: MODAL_TYPE.TOGGLE_SUB_MODAL_ACTION, payload: data})

  const getDetailOfPost = data => {
    dispatch({type: MODAL_TYPE.GET_DETAIL_POST, payload: data})
  }

  const deteleImgAction = data => {
    dispatch({type: MODAL_TYPE.DELETE_IMAGE, payload: data})
  }
  const deteleVideo = () => {
    dispatch({type: MODAL_TYPE.DELETE_VIDEO})
  }

  const resetFormAction = () => {
    dispatch({type: MODAL_TYPE.RESET_FORM_CREATE_POST})
  }

  const uploadVideoPost = data => {
    dispatch({type: MODAL_TYPE.UPLOAD_VIDEO_POST, payload: data})
  }

  const store = useMemo(() => {
    return {
      state,
      toggleModaAction,
      setPositionModal,
      setIdCategory,
      setIdPost,
      setStatePrivacy,
      setAddPhoto,
      setPostValue,
      setTagFriend,
      setWithFriend,
      setHashTag,
      setBookMark,
      toggleSubModalAction,
      getDetailOfPost,
      deteleImgAction,
      resetFormAction,
      uploadVideoPost,
      deteleVideo,
    }
  }, [state])

  return <Context.Provider value={store}>{children}</Context.Provider>
}

export const useModalCtx = () => {
  const context = useContext(Context)
  return context
}
