import {useMutation, useQueryClient} from 'react-query'
import {toast} from 'react-toastify'
import DataProjectApi from '../data-project-api'
import keys from './key'

const useBuyProjectData = () => {
  const queryClient = useQueryClient()
  return useMutation(DataProjectApi.buy_project_data, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.DATA_PROJECT)
      toast.success('Mua dữ liệu thành công!')
    },
    onError: error => {
      console.log('error', error.response)
      toast.error(
        error.response?.data.metadata.message ||
          'Đã xảy ra lỗi, vui lòng thử lại!',
      )
    },
  })
}
/**
 * https://uat.api.bca.hspace.biz/redoc#operation/data_project_create_data_project_post
 * @returns
 */
const useCreateProject = () => {
  const queryClient = useQueryClient()
  return useMutation(DataProjectApi.create_project_data, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.DATA_PROJECT)
      toast.success('Tạo gói dữ liệu thành công!')
    },
  })
}

const DataProjectMutation = {
  useBuyProjectData,
  useCreateProject,
}

export default DataProjectMutation
