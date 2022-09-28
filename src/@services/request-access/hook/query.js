import keys from './key'
import {useQuery} from 'react-query'
import RequestAccessApi from '../request-access-api'

const useGetListRequestAccess = (uid = null) => {
  return useQuery([keys.LIST_REQUEST_ACCESS, uid], () =>
    RequestAccessApi.get_list_request_access(uid),
  )
}

const RequestAccessQuery = {
  useGetListRequestAccess,
}

export default RequestAccessQuery
