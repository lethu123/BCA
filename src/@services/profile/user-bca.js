import axios from 'axios'
const PROXY = 'https://uat.api.bca.hspace.biz'

const handleAxios = async (
  url,
  method,
  data = null,
  headers = {},
  params = {},
) => {
  const secret_key = localStorage.getItem('refreshToken')

  if (secret_key) {
    headers = {
      ...headers,
      's-key': secret_key,
      'Access-Control-Allow-Origin': '*',
    }
  }

  axios.defaults.baseURL = PROXY

  return await axios({
    method,
    url,
    data,
    headers,
    params,
  }).then(res => res.data)
}

const UserApi = {
  get_profile_user: id =>
    handleAxios(PROXY + `/profile/get-detail/${id}`, 'get', null, {}, {}),
  update_profile_user: data =>
    handleAxios(PROXY + `/profile/update`, 'put', data, {}, {}),
  get_social_link_profile_user: id =>
    handleAxios(PROXY + `/sociallink/get-detail/${id}`, 'get', null, {}, {}),
  update_social_link_profile_user: data =>
    handleAxios(PROXY + `/sociallink/update`, 'put', data, {}, {}),
  get_info_to_change_password_user: () =>
    handleAxios(PROXY + `/account/password/change`, 'get'),
  update_info_to_change_password_user: data =>
    handleAxios(PROXY + `/account/password/change`, 'post', data),
  create_profile_reference: data =>
    handleAxios(PROXY + '/profile-ref', 'post', data),

    get_list_user_system: () => handleAxios(PROXY + '')
}

export default UserApi
