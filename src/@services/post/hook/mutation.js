import {useMutation, useQueryClient} from 'react-query'
import {toast} from 'react-toastify'
import PostApi from '../post-api'
import keys from './key'

// *** create post by user ***
const useCreatePostByUser = () => {
  const queryClient = useQueryClient()
  return useMutation(PostApi.create_post_by_user_query, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.GET_LIST_POST_BY_USER)
      queryClient.invalidateQueries(keys.GET_LIST_ALL_POST)
      queryClient.invalidateQueries(keys.GET_LIST_GROUP_POST)
      toast.success('Tạo bài viết thành công')
    },
  })
}

// Delete post by user
const useDeletePostByUser = () => {
  const queryClient = useQueryClient()
  return useMutation(PostApi.delete_post_by_user_query, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.GET_LIST_POST_BY_USER)
      queryClient.invalidateQueries(keys.GET_LIST_ALL_POST)
      toast.success('Xóa bài viết thành công')
    },
  })
}

// update post by user
const useUpdatePostByUser = () => {
  const queryClient = useQueryClient()
  return useMutation(PostApi.update_post_by_user_query, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.GET_LIST_POST_BY_USER)
      queryClient.invalidateQueries(keys.GET_LIST_ALL_POST)
      toast.success('Cập nhật bài viết thành công')
    },
  })
}

// *** Like post
const useLikePost = cb => {
  return useMutation(PostApi.like_post, {
    onSuccess: res => cb(),
    onError: () => {
      toast.error('Lỗi. Xin thử lại!')
    },
  })
}

// *** UnLike post
const useUnLikePost = cb => {
  return useMutation(PostApi.unlike_post, {
    onSuccess: res => cb(),
    onError: () => {
      toast.error('Lỗi. Xin thử lại!')
    },
  })
}
// *** Tạo, Chỉnh sửa comment
// *** Mutation
const useHandleComment = id => {
  const queryClient = useQueryClient()
  return useMutation(
    id ? PostApi.update_comment : PostApi.create_comment,

    {
      onSuccess: res => {
        queryClient.invalidateQueries(keys.GET_LIST_COMMENT) // *** Gọi lại api danh sách cmt
      },
    },
  )
}

// *** Xóa comment
const useDeleteComment = () => {
  const queryClient = useQueryClient()
  return useMutation(PostApi.delete_comment, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.GET_LIST_COMMENT) // *** Gọi lại api danh sách cmt
    },
    onError: () => {
      toast.error('Không thể xóa bình luận. Thử lại!')
    },
  })
}

const useHandleReplyComment = id => {
  const queryClient = useQueryClient()
  return useMutation(
    id ? PostApi.update_reply_comment : PostApi.create_reply_comment,

    {
      onSuccess: res => {
        queryClient.invalidateQueries(keys.GET_LIST_REPLY_COMMENT) // *** Gọi lại api danh sách cmt
      },
    },
  )
}

// *** Xóa reply comment
const useDeleteReplyComment = () => {
  const queryClient = useQueryClient()
  return useMutation(PostApi.delete_reply_comment, {
    onSuccess: res => {
      queryClient.invalidateQueries(keys.GET_LIST_REPLY_COMMENT) // *** Gọi lại api danh sách cmt
    },
    onError: () => {
      toast.error('Không thể xóa phản hồi. Thử lại!')
    },
  })
}

const PostMutation = {
  useHandleComment,
  useHandleReplyComment,
  useDeleteComment,
  useDeleteReplyComment,

  useCreatePostByUser,
  useDeletePostByUser,
  useUpdatePostByUser,

  useLikePost,
  useUnLikePost,
}

export default PostMutation
