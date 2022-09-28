import keys from './key'
import {PROXY} from '../../proxy'

const secret_key = localStorage.getItem('refreshToken')
// const userData = localStorage.getItem('userData')
// const uid = userData ? JSON.parse(userData) : null

//** constant api */
const list_event_manage = PROXY + '/event/event'
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
 * https://event.api.hspace.biz/redoc/#operation/event_event_list
 * List event
 */
const useListEventManage = (params = null) => {
  return {
    ...optionsCallApi(list_event_manage),
    key: params ? [keys.LIST_EVENT, ...Object.keys(params)] : [keys.LIST_EVENT],
    params,
  }
}

const EventDatatable = {
  useListEventManage,
}

export default EventDatatable
