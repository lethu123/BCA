import {handleAxios} from '../ultils'

// const secret_key = localStorage.getItem('refreshToken')

// const setupHeader = (url, params = {}) =>
//   handleAxios(url, 'get', null, {'s-key': secret_key}, params)

const BizxuApi = {
  create_bizxu_package: data =>
    handleAxios('/bizxu/bizxu-package', 'post', data),
  update_bizxu_package: data =>
    handleAxios(`/bizxu/bizxu-package/${data.id}`, 'put', data),
  buy_bizxu_package: data =>
    handleAxios('/bizxu/bizxu-package/buy', 'post', data),
  get_list_bizxu_page: params =>
    handleAxios('/bizxu/bizxu-package', 'get', null, {}, params),
  get_detail_bizxu_package_transaction: id =>
    handleAxios(`/bizxu/bizxu-transaction/${id}`, 'get'),
  update_bizxu_transaction: data => {
    return handleAxios(`/bizxu/bizxu-transaction-state`, 'put', data)
  },
  get_list_category_transaction: () =>
    handleAxios('/bizxu/transaction-category', 'get', null, {}, {limit: 1000}),
  get_list_transaction_type: () =>
    handleAxios('/bizxu/transaction-type', 'get', null, {}, {limit: 1000}),
  get_list_transaction_status: () =>
    handleAxios(
      '/bizxu/transaction-status-type',
      'get',
      null,
      {},
      {limit: 1000},
    ),

  get_statistic_total_transaction: () =>
    handleAxios('/bizxu/get-user-bizxu', 'get'),
}

export default BizxuApi
