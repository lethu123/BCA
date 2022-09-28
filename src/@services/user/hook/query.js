import keys from './key'
import {useQuery} from 'react-query'
import UserApi from '../user-api'

const useGetListAllUserSys = (params = null) => {
  return useQuery([keys.GET_LIST_USER_SYSTEM, params], () =>
    UserApi.get_list_user_system(params),
  )
}

const UserQuery = {
  useGetListAllUserSys,
}

export default UserQuery
