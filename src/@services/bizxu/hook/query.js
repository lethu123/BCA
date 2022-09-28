import keys from './key'
import {useQuery} from 'react-query'
import BizxuApi from '../bizxu-api'

/**
 * https://uat.api.bca.hspace.biz/redoc#operation/bizxu_package_list_bizxu_bizxu_package_get
 * Danh sách khóa học
 */
const useListBizxuPackageCenter = (params = null) => {
  return useQuery([keys.LIST_BIZXU, params], () =>
    BizxuApi.get_list_bizxu_page(params),
  )
}

/**
 * https://uat.api.bca.hspace.biz/redoc#operation/bizxu_transaction_detail_bizxu_bizxu_transaction__package_id__get
 */
const useDetailBizxuPackage = id => {
  return useQuery(
    [keys.DETAIL_BIZXU, id],
    () => BizxuApi.get_detail_bizxu_package_transaction(id),
    {
      enabled: !!id,
    },
  )
}

/**
 * https://uat.api.bca.hspace.biz/redoc#operation/bizxu_category_list_bizxu_transaction_category_get
 */
const useCategoryTransaction = () => {
  return useQuery([keys.CATEGORY_TRANSACTION], () =>
    BizxuApi.get_list_category_transaction(),
  )
}

/**
 * https://uat.api.bca.hspace.biz/redoc#operation/bizxu_transaction_type_list_bizxu_transaction_type_get
 */
const useTransactionType = () => {
  return useQuery([keys.TRANSACTION_TYPE], () =>
    BizxuApi.get_list_transaction_type(),
  )
}

/**
 * https://uat.api.bca.hspace.biz/redoc#operation/bizxu_transaction_status_type_list_bizxu_transaction_status_type_get
 */
const useTransactionStatus = () => {
  return useQuery([keys.TRANSACTION_STATUS], () =>
    BizxuApi.get_list_transaction_status(),
  )
}

/**
 *https://uat.api.bca.hspace.biz/redoc#operation/get_user_bizxu_bizxu_get_user_bizxu_get
 */
const useStatisticTotalTransaction = () => {
  return useQuery([keys.STATISTIC_TOTAL_TRANSACTION], () =>
    BizxuApi.get_statistic_total_transaction(),
  )
}

const BizxuQuery = {
  useListBizxuPackageCenter,
  useDetailBizxuPackage,
  useCategoryTransaction,
  useTransactionType,
  useTransactionStatus,
  useStatisticTotalTransaction,
}

export default BizxuQuery
