import {useMutation, useQueryClient} from 'react-query'
// import {toast} from 'react-toastify'

import ChatApi from '../chat-api'
import keys from './key'

// *** Tạo mới 1 auto job automation
// *** Mutation
//*** https://chat.api.hspace.biz/redoc#operation/create_group_chat_groups_chat_create_post
const useCreateGroup = () => {
  const queryClient = useQueryClient()
  return useMutation(
    ChatApi.create_group,

    {
      onSuccess: res => {
        queryClient.invalidateQueries(keys.GROUPS_CHAT)
        // toast.success(
        //   res?.message ||
        //     res?.msg ||
        //     `${id === 'create' ? 'Tạo mới' : 'Cập nhật'} ${
        //       type === 'job' ? 'autojob' : 'autotask'
        //     } thành công !`,
        // )
      },
    },
  )
}

const ChatMutation = {
  useCreateGroup,
}
export default ChatMutation
