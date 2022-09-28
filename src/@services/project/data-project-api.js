import {handleAxios} from '../ultils'

// const secret_key = localStorage.getItem('refreshToken')

// const setupHeader = (url, params = {}) =>
//   handleAxios(url, 'get', null, {'s-key': secret_key}, params)

const DataProjectApi = {
  get_list_project_data: params =>
    handleAxios('/data/project', 'get', null, {}, params),
  buy_project_data: data => handleAxios('/data/project/buy', 'post', data),
  create_project_data: data => handleAxios('/data/project', 'post', data),
  get_list_project_kind: () => handleAxios('/data/project-kind', 'get'),
  get_list_project_type: () => handleAxios('/data/project-type', 'get'),
}

export default DataProjectApi
