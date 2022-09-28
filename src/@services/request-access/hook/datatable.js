import keys from './key'
import {PROXY} from '../../proxy'

const secret_key = localStorage.getItem('refreshToken')
// const userData = localStorage.getItem('userData')
// const uid = userData ? JSON.parse(userData) : null

//** constant api */
const list_event_manage = PROXY + '/profile/get-list-user-reference'
/**
 * helper function
 */
const optionsCallApi = url => {
  return {
    url: url,
    headers: {'s-key': secret_key},
  }
}

/**
 * https://uat.api.bca.hspace.biz/redoc#operation/get_list_user_reference_profile_get_list_user_reference_get
 * List request access
 */
const useListRequestAccess = (params = null) => {
  return {
    ...optionsCallApi(list_event_manage),
    key: params
      ? [keys.LIST_REQUEST_ACCESS, ...Object.keys(params)]
      : [keys.LIST_REQUEST_ACCESS],
    params,
  }
}

const RequestDatatable = {
  useListRequestAccess,
}

export default RequestDatatable
