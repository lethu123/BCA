import keys from './key'
import {useQuery} from 'react-query'
import PostApi from '../post-api'

const useGetListPostByUser = id =>
  useQuery([keys.GET_LIST_POST_BY_USER, id], () =>
    PostApi.get_list_post_by_user_query(id),
  )

const useGetInfoPost = id =>
  useQuery([keys.GET_INFO_POST, id], () => PostApi.get_info_post(id), {
    enabled: !!id,
  })

/**
 * http://13.229.29.156:8000/docs#/Comment/Update_a_comment_comment_put
 * get list comment of post
 */
const useGetListComment = (id, time = null) => {
  return useQuery(
    [keys.GET_LIST_COMMENT, id, time],
    () => PostApi.get_comments(id),
    {
      staleTime: 0,
    },
  )
}

// ** get list post of  group
const useGetListGroupPost = groupId => {
  return useQuery(
    [keys.GET_LIST_GROUP_POST, groupId],
    () => PostApi.get_list_post_query({group_id: groupId}),
    {enabled: !!groupId},
  )
}

const useGetListAllPost = (params = null) => {
  return useQuery(
    [keys.GET_LIST_ALL_POST, params],
    () => PostApi.get_list_all_post_query(params),
    {refetchOnMount: true},
  )
}
/**
 * http://13.229.29.156:8000/docs#/Comment/Update_a_comment_comment_put
 * get list reply comment of post
 */
const useGetListReplyComment = id => {
  return useQuery(
    [keys.GET_LIST_REPLY_COMMENT, id],
    () => PostApi.get_reply_comments(id),
    {enabled: !!id},
  )
}

/** Lấy chi tiết một user (profile user)
 * https://uat.api.bca.hspace.biz/redoc#operation/get_list_profile_profile_get_get
 * @param {*} uid
 * @returns
 */
const useUerInfo = uid => {
  return useQuery([keys.GET_USER_INFO], () => PostApi.get_user_info(uid))
}

/** Thống kê post trong phần quản lí cộng đồng
 * https://uat.api.bca.hspace.biz/redoc#operation/Get_post_statistic_given_Meta_target_id_post_statistic_get
 * @param {*} params
 * @returns
 */
const useStatisticPost = params => {
  return useQuery([keys.GET_STATISTIC_POST], () =>
    PostApi.get_statistic_post(params),
  )
}

const PostQuery = {
  useGetListPostByUser,
  useGetListComment,
  useGetListAllPost,
  useGetListReplyComment,
  useUerInfo,
  useGetInfoPost,
  useGetListGroupPost,
  useStatisticPost,
}

export default PostQuery
