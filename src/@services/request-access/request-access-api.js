import {handleAxios} from '../ultils'
import {PROXY} from '@services/proxy'

const RequestAccessApi = {
  get_list_request_access: uid =>
    handleAxios(
      PROXY + `/profile/get-list-user-reference`,
      'get',
      null,
      {},
      {uid},
    ),
  update_formality_receive_data: data =>
    handleAxios(PROXY + '/update-data-receive-stage', 'post', data),
}

export default RequestAccessApi
