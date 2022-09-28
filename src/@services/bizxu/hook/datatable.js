import keys from './key'
import {PROXY} from '../../proxy'

const secret_key = localStorage.getItem('refreshToken')
// const userData = localStorage.getItem('userData')
// const uid = userData ? JSON.parse(userData) : null

//** constant api */
const get_list_bizxu_package = PROXY + '/bizxu/bizxu-package'
const get_list_history_bizxu_transaction = PROXY + '/bizxu/bizxu-transaction'
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
 * https://uat.api.bca.hspace.biz/redoc#operation/bizxu_package_list_bizxu_bizxu_package_get
 * Lấy danh sách Bizxu
 * Datatable
 */
const useListBizxuPackage = (params = null) => {
  return {
    ...optionsCallApi(get_list_bizxu_package),
    key: params ? [keys.LIST_BIZXU, ...Object.keys(params)] : [keys.LIST_BIZXU],
    params,
  }
}

/**
 * https://uat.api.bca.hspace.biz/redoc#operation/bizxu_package_list_bizxu_bizxu_package_get
 * Danh sách khóa học
 */
const useListHistoryBizxuTransaction = (params = null) => {
  return {
    ...optionsCallApi(get_list_history_bizxu_transaction),
    key: params
      ? [keys.LIST_BIZXU_TRANSACTION, ...Object.keys(params)]
      : [keys.LIST_BIZXU_TRANSACTION],
    params,
  }
}
const BizxuDatatable = {
  useListBizxuPackage,
  useListHistoryBizxuTransaction,
}

export default BizxuDatatable
