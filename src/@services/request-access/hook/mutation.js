import {useMutation, useQueryClient} from 'react-query'
import {toast} from 'react-toastify'
import RequestAccessApi from '../request-access-api'
import keys from './key'

// *** create post by user ***
const useUpdateFormalityReceiveData = () => {
  const queryClient = useQueryClient()
  return useMutation(RequestAccessApi.update_formality_receive_data, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.LIST_REQUEST_ACCESS)
      toast.success('Đã đổi hình thức nhận data')
    },
  })
}

const RequestAccessMutation = {
  useUpdateFormalityReceiveData,
}

export default RequestAccessMutation
