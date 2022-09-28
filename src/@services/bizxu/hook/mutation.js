import {useMutation, useQueryClient} from 'react-query'
import {toast} from 'react-toastify'

import BizxuApi from '../bizxu-api'
import keys from './key'

/**
 * https://uat.api.bca.hspace.biz/redoc#operation/bizxu_package_create_bizxu_bizxu_package_post
 * @returns
 */
const useCreateBizxuPackage = () => {
  const queryClient = useQueryClient()
  return useMutation(BizxuApi.create_bizxu_package, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.LIST_BIZXU)
      toast.success(res?.message || res?.msg || 'Tạo thành công!')
    },
  })
}

/**
 * https://uat.api.bca.hspace.biz/redoc#operation/bizxu_package_update_bizxu_bizxu_package__package_id__put
 * @returns
 */
const useUpdateBizxuPackage = () => {
  const queryClient = useQueryClient()
  return useMutation(BizxuApi.update_bizxu_package, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.LIST_BIZXU)
      toast.success(res?.message || res?.msg || 'Update thành công!')
    },
  })
}

/**
 * https://uat.api.bca.hspace.biz/redoc#operation/bizxu_package_buy_bizxu_bizxu_package_buy_post
 * @returns
 */
const useBuyBizxuPackage = () => {
  const queryClient = useQueryClient()
  return useMutation(BizxuApi.buy_bizxu_package, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.LIST_BIZXU_TRANSACTION)
      queryClient.invalidateQueries(keys.STATISTIC_TOTAL_TRANSACTION)
      toast.success(res?.message || res?.msg || 'Giao dịch thành công!')
    },
  })
}

/**
 * https://uat.api.bca.hspace.biz/redoc#operation/bizxu_transaction_update_bizxu_bizxu_transaction__package_id__put
 * update trạng thái giao dịch bizxu
 * @returns
 */
const useUpdateBizxuTransaction = () => {
  const queryClient = useQueryClient()
  return useMutation(BizxuApi.update_bizxu_transaction, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.LIST_BIZXU_TRANSACTION)
      toast.success(res?.message || res?.msg || 'Cập nhật thành công!')
    },
  })
}

const BizxuMutation = {
  useCreateBizxuPackage,
  useUpdateBizxuPackage,
  useBuyBizxuPackage,
  useUpdateBizxuTransaction,
}

export default BizxuMutation
