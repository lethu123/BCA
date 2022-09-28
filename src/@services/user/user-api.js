import {handleAxios} from '../ultils'
import {PROXY} from '@services/proxy'

const UserApi = {
  get_list_user_system: params =>
    handleAxios(PROXY + `/account/list_users`, 'get', null, {}, params),
}

export default UserApi
