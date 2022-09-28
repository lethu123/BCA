import keys from './key'
const secret_key = localStorage.getItem('refreshToken')
// const userData = localStorage.getItem('userData')
// const uid = userData ? JSON.parse(userData) : null

//** constant api */
const get_list_data_project = '/data/project'

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
 * https://uat.api.bca.hspace.biz/redoc#operation/data_project_list_data_project_get
 * Danh sách các dự án
 */
const useListDataProjectDatatable = params => {
  return {
    ...optionsCallApi(get_list_data_project),
    key: params
      ? [keys.DATA_PROJECT, ...Object.keys(params)]
      : [keys.DATA_PROJECT],
    params,
  }
}

const DataProjectDatatable = {
  useListDataProjectDatatable,
}

export default DataProjectDatatable
