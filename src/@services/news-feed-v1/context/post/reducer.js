import POSTS_TYPE from './type'
const listPosts = (state, {type, payload, token}) => {
  switch (type) {
    case POSTS_TYPE.SET_LOADING_COMMENT: {
      return {
        ...state,
        isLoadingComment: payload,
      }
    }
    case POSTS_TYPE.SET_COUNT_COMMENT: {
      return {
        ...state,
        c_comment: payload,
      }
    }
    case POSTS_TYPE.SET_LIST_POST: {
      return {
        ...state,
        listPost: payload.map(item => ({
          id: item.id,
          c_comment: item.c_comment,
          author: item.author_id,
          data: item,
          typePost: item.target_type,
        })),
      }
    }
    default:
      return state
  }
}

export default listPosts
