import keys from './key'
const secret_key = localStorage.getItem('refreshToken')
// const userData = localStorage.getItem('userData')
// const uid = userData ? JSON.parse(userData) : null

//** constant api */
const get_list_data_quantity = '/config/data-quantity'

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
 * https://uat.api.bca.hspace.biz/redoc#operation/Danh_s_ch_c_i___t_s__l__ng_d__li_u_config_data_quantity_get
 * Lấy danh sách số lượng data
 * Datatable
 */
const useListDataQuantity = params => {
  return {
    ...optionsCallApi(get_list_data_quantity),
    key: params
      ? [keys.DATA_QUANTITY, ...Object.keys(params)]
      : [keys.DATA_QUANTITY],
    params,
  }
}

const DataCenterDatatable = {
  useListDataQuantity,
}

export default DataCenterDatatable
