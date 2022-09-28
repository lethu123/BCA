import MODAL_TYPE from './type'

const modalReducer = (state, {type, payload, metadata}) => {
  switch (type) {
    case MODAL_TYPE.TOGGLE_MODAL: {
      return {
        ...state,
        isToggleModal: payload,
      }
    }
    case MODAL_TYPE.SET_POSITION_MODAL: {
      return {
        ...state,
        stepper: payload,
      }
    }
    case MODAL_TYPE.SET_ID_CATEGORY: {
      return {
        ...state,
        id_category: payload,
      }
    }
    case MODAL_TYPE.SET_ID_POST: {
      return {
        ...state,
        id_post: payload,
      }
    }
    case MODAL_TYPE.SET_STATE_PRIVACY: {
      return {
        ...state,
        privacy: payload,
      }
    }
    case MODAL_TYPE.SET_ADD_PHOTO: {
      return {
        ...state,
        img_arr: [...state.img_arr, ...payload],
      }
    }
    case MODAL_TYPE.SET_POST_VALUE: {
      return {
        ...state,
        postValue: payload,
      }
    }
    case MODAL_TYPE.SET_TAG_FRIEND: {
      return {
        ...state,
        tag_friends: payload,
      }
    }

    case MODAL_TYPE.SET_WITH_FRIEND: {
      return {
        ...state,
        with_friends: payload,
      }
    }
    case MODAL_TYPE.SET_HASH_TAGS: {
      return {
        ...state,
        hash_tags: payload,
      }
    }
    case MODAL_TYPE.SET_BOOK_MARK: {
      return {
        ...state,
        list_bookMark: payload,
      }
    }
    case MODAL_TYPE.TOGGLE_SUB_MODAL_ACTION: {
      return {
        ...state,
        isToggleSubModal: payload,
      }
    }
    case MODAL_TYPE.GET_DETAIL_POST: {
      return {
        ...state,
        post_id: payload.id,
        hash_tags: payload.hash_tags,
        id_category: payload.id_category,
        img_arr: payload.img_arr,
        list_bookMark: payload.list_bookMark,
        postValue: payload.postValue,
        tag_friends: payload.tag_friends,
        embedding_link: payload.embedding_link,
        video: payload.video,
      }
    }

    case MODAL_TYPE.DELETE_IMAGE: {
      return {
        ...state,
        img_arr: state.img_arr.filter(img => img.name !== payload.name),
      }
    }
    case MODAL_TYPE.DELETE_VIDEO: {
      return {
        ...state,
        video: null,
      }
    }

    case MODAL_TYPE.RESET_FORM_CREATE_POST: {
      return {
        ...state,
        post_id: null,
        isToggleModal: false,
        isToggleSubModal: false,
        stepper: 0,
        id_category: '',
        id_post: null, //not id of post detail
        privacy: {
          id: 1,
        },
        img_arr: [],
        postValue: '',
        tag_friends: [],
        list_bookMark: [],
        hash_tags: [],
        video: null,
      }
    }

    case MODAL_TYPE.UPLOAD_VIDEO_POST: {
      return {
        ...state,
        video: payload,
      }
    }
    default:
      return state
  }
}

export default modalReducer
