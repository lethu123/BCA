import {useMutation, useQueryClient} from 'react-query'
import {toast} from 'react-toastify'

import {queryKeys} from 'react-query/constants'
import AutomationApi from '../automation-api'
import keys from './key'

// *** Xóa 1 autojob / autotask
// *** Mutation
const useDeleteAutoJobAutomation = () => {
  const queryClient = useQueryClient()
  return useMutation(AutomationApi.common.delete_auto_job_auto_task_query, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.GET_LIST_AUTO_JOB) // *** Gọi lại api danh sách autojob
      queryClient.invalidateQueries(keys.GET_LIST_AUTO_TASK) // *** Gọi lại api danh sách autotask
      queryClient.invalidateQueries(keys.GET_STATISTIC_AUTOMATION) // *** Gọi lại api thống kê
      toast.success(res?.message || res?.msg || 'Xóa thành công')
    },
  })
}

// *** Tạo mới 1 auto job automation
// *** Mutation
const useHandleAutojobAutomation = (type, id) => {
  const queryClient = useQueryClient()
  return useMutation(
    id === 'create'
      ? type === 'job'
        ? AutomationApi.autojob.create_auto_job_automation_query
        : AutomationApi.autotask.create_auto_task_automation_query
      : AutomationApi.common.update_action_flow_automation_query,

    {
      onSuccess: res => {
        queryClient.invalidateQueries(keys.GET_LIST_AUTO_JOB)
        queryClient.invalidateQueries(keys.GET_LIST_AUTO_TASK)
        toast.success(
          res?.message ||
            res?.msg ||
            `${id === 'create' ? 'Tạo mới' : 'Cập nhật'} ${
              type === 'job' ? 'autojob' : 'autotask'
            } thành công !`,
        )
      },
    },
  )
}

// *** Tạo mới 1 chiến dịch
// *** Mutation
const useHandleCampaign = id => {
  const queryClient = useQueryClient()
  return useMutation(
    id
      ? AutomationApi.common.update_campaign_query
      : AutomationApi.common.create_campaign_query,

    {
      onSuccess: res => {
        queryClient.invalidateQueries(queryKeys.automation.getListSaleCampaign) // *** Call api list sale campain
        queryClient.invalidateQueries(
          queryKeys.automation.getStatisticSaleCampaign,
        ) // *** Gọi lại api thống kê
        toast.success(
          res?.message ||
            res?.msg ||
            `${id ? 'Cập nhật' : 'Tạo'} chiến dịch thành công`,
        )
      },
    },
  )
}

// *** Xóa 1 chiến dịch
// *** Mutation
const useDeleteSaleCampain = () => {
  const queryClient = useQueryClient()
  return useMutation(AutomationApi.common.delete_sale_campain_query, {
    onSuccess: res => {
      queryClient.invalidateQueries(queryKeys.automation.getListAllCampaign) // *** Call api list sale campain
      queryClient.invalidateQueries(
        queryKeys.automation.getStatisticSaleCampaign,
      ) // *** Gọi lại api thống kê
      toast.success(res?.message || res?.msg || 'Xóa thành công')
    },
    onError: () => {
      toast.error('Không thể xóa chiến dịch. Thử lại!')
    },
  })
}

// *** update status campain
const useUpdateStatusCampain = () => {
  const queryClient = useQueryClient()
  return useMutation(AutomationApi.common.update_status_campaign_query, {
    onSuccess: res => {
      queryClient.invalidateQueries(queryKeys.automation.getListAllCampaign) // *** Call api get lists campain
      toast.success(
        res?.message || res?.msg || 'Cập nhật trạng thái thành công',
      )
    },
  })
}

// *** create metadata
const useCreateMetadata = () => {
  const queryClient = useQueryClient()
  return useMutation(AutomationApi.common.get_metadata_website, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.GET_MEATADATA_WEBSITE) // *** Call api get lists campain
      console.log('test nha', res)
      toast.success(
        res?.message || res?.msg || 'Cập nhật trạng thái thành công',
      )
    },
  })
}

// *** create a filter mutation
const useCreateFilter = cb => {
  const queryClient = useQueryClient()
  return useMutation(AutomationApi.filter.create_automation_filter, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.GET_LIST_DATA_FILTER_AUTOMATION)
      cb()
      toast.success(res?.message || res?.msg || 'Tạo mới bộ lọc thành công')
    },
  })
}

// *** delete a filter mutation
const useDeleteFilter = () => {
  const queryClient = useQueryClient()
  return useMutation(AutomationApi.filter.delete_automation_filter, {
    onSuccess: res => {
      // *** Gọi lại api filter
      queryClient.invalidateQueries(keys.GET_LIST_DATA_FILTER_AUTOMATION)
      toast.success(res?.message || res?.msg || 'Xóa thành công')
    },
  })
}

// *** update a filter mutation
const useUpdateFilter = cb => {
  const queryClient = useQueryClient()
  return useMutation(AutomationApi.filter.update_automation_filter, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.GET_LIST_DATA_FILTER_AUTOMATION)
      cb()
      toast.success(res?.message || res?.msg || 'Cập nhật thành công')
    },
  })
}

// *** Create template email
const useCreateTemplateEmail = () => {
  const queryClient = useQueryClient()
  return useMutation(AutomationApi.common.create_template_email, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.GET_TEMPLATE_EMAIL)
      toast.success('Tạo template email thành công')
    },
  })
}

const AutomationMutation = {
  useDeleteAutoJobAutomation,
  useHandleAutojobAutomation,
  useHandleCampaign,
  useDeleteSaleCampain,
  useUpdateStatusCampain,
  useCreateMetadata,

  // *** Filter
  useCreateFilter,
  useDeleteFilter,
  useUpdateFilter,

  useCreateTemplateEmail,
}
export default AutomationMutation
