import TYPE from './type'

const settingEmailReducer = (state, {type, payload, metadata}) => {
  switch (type) {
    // step 1
    case TYPE.SETTING_SEND_EMAIL: {
      return {
        ...state,
        [payload.name]: payload.value,
      }
    }
    // step 3
    case TYPE.CHOOSE_LIB_EMAIL: {
      return {
        ...state,
        email_template: payload,
      }
    }
    case TYPE.TYPE_ATTACHED_LINK: {
      return {
        ...state,
        type_attached_link: payload,
      }
    }
    case TYPE.UPDATE_SEO_LINK_EXTERNAL: {
      return {
        ...state,
        sid_current: {sid: payload.sid, url: payload.url || ''},
        seo_link_external: state.seo_link_external.map(item =>
          item.sid === payload.sid
            ? {
                ...item,
                ...payload,
              }
            : item,
        ),
      }
    }

    case TYPE.ADD_SEO_LINK_EXTERNAL: {
      return {
        ...state,
        sid_current: {sid: null, url: ''},
        seo_link_external: [...state.seo_link_external, payload],
      }
    }

    case TYPE.DELETE_SEO_LINK_EXTERNAL: {
      return {
        ...state,
        seo_link_external: state.seo_link_external.filter(
          item => item.sid !== payload,
        ),
      }
    }

    case TYPE.SEO_LINK_SYSTEM: {
      return {
        ...state,
        seo_link_system: [...state.seo_link_system, payload],
      }
    }

    case TYPE.GET_SEO_LINK_SYSTEM: {
      return {
        ...state,
        list_seo_link_system: payload,
        metadata: {...metadata},
      }
    }

    case TYPE.DELETE_SEO_LINK_SYSTEM: {
      return {
        ...state,
        seo_link_system: state.seo_link_system.filter(
          item => item._id !== payload,
        ),
      }
    }

    default:
      return state
  }
}

export default settingEmailReducer
