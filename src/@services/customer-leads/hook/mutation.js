import {useMutation, useQueryClient} from 'react-query'
import {toast} from 'react-toastify'
import CustomerLeadsApi from '../customer-leads-api'
import keys from './key'

/***
 * https://api.sasamviet.vn/redoc#operation/Create_funnel_rule___POST_general_create_funnel_rule__post
 * Tạo mới customer funnel
 */
export const useCreateCustomerFunnel = () => {
  return useMutation(CustomerLeadsApi.post_customer_funnel, {
    onSuccess: res => {
      toast.success(res?.message || res?.msg || 'Create Success')
    },
  })
}

/***
 * https://api.sasamviet.vn/redoc#operation/Update_funnel_rule___PUT_general_update_funnel_rule__put
 * Cập nhật funnel trong KHTN
 */
export const useUpdateFunnelCustomerLead = () => {
  const queryClient = useQueryClient()
  return useMutation(CustomerLeadsApi.update_funnel_customer_lead, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.LIST_FUNNEL_CUSTOMER_LEAD)
      toast.success(res?.message || res?.msg)
    },
  })
}

/***
 * https://api.sasamviet.vn/redoc#operation/Delete_funnel_rule__DELETE_general_delete_funnel_rule__id___delete
 * Xóa 1 funnel trong KHTN
 */
export const useDeleteFunnelCustomerLead = () => {
  return useMutation(CustomerLeadsApi.delete_funnel_customer_lead, {
    onSuccess: res => {
      toast.success(res?.message || res?.msg)
    },
  })
}

/***
 * https://uat.api.bca.hspace.biz/redoc#operation/T_o_c_i___t_tags_config_tags_post
 * Tạo Tag Customer Lead
 */
// Create Tag Customer Lead
const usePostTagCustomerLead = () => {
  const queryClient = useQueryClient()
  return useMutation(CustomerLeadsApi.post_tag_customer_leads, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.LIST_TAGS_CUSTOMER_LEAD)
      // if (res.data) {
      //   queryClient.setQueryData(keys.LIST_TAGS_CUSTOMER_LEAD, oldTags => {
      //     return [...oldTags, ...res.data]
      //   })
      // }

      toast.success(res?.message || res?.msg)
    },
  })
}

/***
 * https://api.sasamviet.vn/redoc#operation/G_n_tags_cho_KHTN___POST_general_assign_tag__post
 * Gán Tag cho Khách hàng tiềm năng
 */
// Create Assign Tag Customer Lead
const usePostAssignTagCustomerLead = () => {
  return useMutation(CustomerLeadsApi.post_assign_tag_customer_lead, {
    onSuccess: res => {
      toast.success(res?.message || res?.msg)
    },
  })
}

/***
 * https://api.sasamviet.vn/redoc#operation/Delete_tags_KHTN___POST_general_delete_tag__delete
 * Xóa Tag trong khách hàng tiềm năng
 */
// Delete Tag Customer Lead
const useDeleteTagCustomerLead = () => {
  const queryClient = useQueryClient()
  return useMutation(CustomerLeadsApi.delete_tag_customer_lead, {
    onSuccess: res => {
      queryClient.setQueryData(keys.LIST_TAGS_CUSTOMER_LEAD, oldTags => {
        return oldTags.filter(item => !res.data.find(ele => ele === item.name))
      })

      toast.success(res?.message || res?.msg)
    },
  })
}

/***
 * https://uat.api.bca.hspace.biz/redoc#operation/C_p_nh_t_c_i___t_tags_config_tags__id___put
 * Cập nhật tag Tag trong khách hàng tiềm năng
 */
// Delete Tag Customer Lead
const useUpdateTagCustomerLead = () => {
  const queryClient = useQueryClient()
  return useMutation(CustomerLeadsApi.update_tag_customer_lead, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.LIST_TAGS_CUSTOMER_LEAD)
      toast.success(res?.message || res?.msg)
    },
  })
}

/***
 * https://api.sasamviet.vn/redoc#operation/Unasign_tags__KHTN___POST_general_unassign_tag__post
 * Gỡ 1 tags trong chi tiết KHTN
 */
export const usePostUnAssignTagInDetailCustomerLead = () => {
  const queryClient = useQueryClient()
  return useMutation(CustomerLeadsApi.unassign_tag_customer_lead, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.PROFILE_EXPLOITED_INFO)
    },
  })
}

/***
 * https://uat.api.bca.hspace.biz/redoc#operation/Assign_user___POST_general_assign_user_post
 * Chia dữ liệu cho tài khoản hệ thống
 */
export const useAssignUidAccountSystem = () => {
  const queryClient = useQueryClient()
  return useMutation(CustomerLeadsApi.assign_uid_account_system, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.LIST_CUSTOMER_LEAD_PROFILE_EXPLOITEDS)
      toast.success('Chia dữ liệu thành công!')
    },
  })
}

const CustomerLeadsMutation = {
  useCreateCustomerFunnel,
  usePostTagCustomerLead,
  useUpdateTagCustomerLead,
  usePostAssignTagCustomerLead,
  useDeleteTagCustomerLead,
  useAssignUidAccountSystem,
}

export default CustomerLeadsMutation
