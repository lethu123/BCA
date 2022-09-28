import {handleAxios} from '../ultils'
import {PROXY} from '@services/proxy'
// const PROXY = 'https://uat.api.bca.hspace.biz'
// const PROXY = 'http://13.229.29.156:8001'

const PostApi = {
  create_comment: data => handleAxios(PROXY + '/comment', 'post', data),
  update_comment: data => handleAxios(PROXY + '/comment', 'put', data),
  delete_comment: id => handleAxios(PROXY + '/comment', 'delete', id),
  get_comments: target_id =>
    handleAxios(PROXY + '/comment', 'get', {}, {}, {target_id}),
  create_reply_comment: data =>
    handleAxios(PROXY + '/reply-comment', 'post', data),
  update_reply_comment: data =>
    handleAxios(PROXY + '/reply-comment', 'put', data),
  delete_reply_comment: id =>
    handleAxios(PROXY + '/reply-comment', 'delete', id),
  get_reply_comments: comment_id =>
    handleAxios(PROXY + '/reply-comment', 'get', {}, {}, {comment_id}),
  create_post_by_user_query: data => handleAxios(PROXY + '/post', 'post', data),
  get_list_post_by_user_query: user_id =>
    user_id ? handleAxios(PROXY + `/post`, 'get', null, {}, {user_id}) : {},
  get_info_post: id => handleAxios(PROXY + '/post_info', 'get', null, {}, {id}),
  delete_post_by_user_query: data =>
    handleAxios(PROXY + `/post`, 'delete', data, {}, {}),
  update_post_by_user_query: data =>
    handleAxios(PROXY + `/post`, 'put', data, {}, {}),
  get_list_all_post_query: params =>
    handleAxios(PROXY + `/all-post`, 'get', null, {}, params),
  get_user_info: uid => handleAxios(`/profile/get-detail/${uid}`, 'get'),
  get_statistic_post: params =>
    handleAxios('/post_statistic', 'get', null, {}, params),

  like_post: data => handleAxios(PROXY + '/like-post', 'patch', data),
  unlike_post: data => handleAxios(PROXY + '/unlike-post', 'patch', data),

  get_list_post_query: (params = {}) =>
    handleAxios(
      PROXY + `/all-post`,
      'get',
      null,
      {},
      {page: 1, limit: 5, ...params},
    ),
}

export default PostApi
