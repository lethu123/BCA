// *** Hành động
// *** Bán hàng
import notification_action from './icons/notification_action.png'
import sms_action from './icons/sms_action.png'
import email_action from './icons/email_action.png'
import messenger_action from './icons/messenger_action.png'
import add_friend_action from './icons/add_friend_action.png'

// *** Chăm sóc facebook
import add_friend_facebook_action from './icons/add_friend_facebook_action.png'
import send_messenger_facebook_action from './icons/send_messenger_facebook_action.png'
import comment_post_facebook_action from './icons/comment_post_facebook_action.png'
import like_post_facebook_action from './icons/like_post_facebook_action.png'
import cancel_request_add_friend_facebook_action from './icons/cancel_request_add_friend_facebook_action.png'
import delete_friend_facebook_action from './icons/delete_friend_facebook_action.png'
import join_group_facebook_action from './icons/join_group_facebook_action.png'
import write_post_group_facebook_action from './icons/write_post_group_facebook_action.png'
import comment_post_group_facebook_action from './icons/comment_post_group_facebook_action.png'
import like_post_group_facebook_action from './icons/like_post_group_facebook_action.png'
import like_page_facebook_action from './icons/like_page_facebook_action.png'
import comment_post_page_facebook_action from './icons/comment_post_page_facebook_action.png'
import like_post_page_facebook_action from './icons/like_post_page_facebook_action.png'
import create_post_sasam_action from './icons/create_post_sasam_action.png'
import comment_post_sasam_action from './icons/comment_post_sasam_action.png'
import like_comment_sasam_action from './icons/like_comment_sasam_action.png'
import reply_comment_sasam_action from './icons/reply_comment_sasam_action.png'

// *** Quyết định
import duration_time from './icons/duration_time.png'
// import timeline from './icons/timeline.png'
import branching from './icons/branching.png'
import branching_condition from './icons/branching_condition.png'
import fork_interaction from './icons/fork_interaction.png'
// import repeat from './icons/repeat.png'
import concurrently from './icons/concurrently.png'
import exit from './icons/exit.png'

const salesCampaignActions = [
  // {
  //   id: 1,
  //   title: 'Thông báo',
  //   subtitle: 'Gửi thông báo qua web',
  //   icon: notification_action,
  //   code: 'notification_action',
  // },

  {
    id: 2,
    title: 'SMS',
    subtitle: 'Gửi tin nhắn đến điện thoại',
    icon: sms_action,
    code: 'sms_action',
  },
  {
    id: 3,
    title: 'Email',
    subtitle: 'Gửi email đến khách hàng',
    icon: email_action,
    code: 'email_action',
  },
  {
    id: 4,
    title: 'Messenger',
    subtitle: 'Gửi tin nhắn qua messenger',
    icon: messenger_action,
    code: 'messenger_action',
  },
  {
    id: 5,
    title: 'Kết bạn',
    subtitle: 'Kết bạn trên facebook',
    icon: add_friend_action,
    code: 'add_friend_action',
    isNoSetting: true,
  },
  {
    id: 6,
    title: 'Bình luận',
    subtitle: 'Bình luận bài viết',
    icon: comment_post_facebook_action,
    code: 'comment_post_facebook_action',
  },
]

const decides = [
  {
    id: 101,
    title: 'Khoảng thời gian',
    subtitle:
      'Cài đặt Khoảng thời gian để thực hiện node tiếp theo (ngày/giờ/phút/giây)',
    icon: duration_time,
    code: 'duration_time',
  },
  // {
  //   id: 102,
  //   title: 'Mốc thời gian',
  //   subtitle: 'Cài đặt mốc thời gian để thực hiện node tiếp theo (1/1/2022)',
  //   icon: timeline,
  //   code: 'timeline',
  // },
  // {
  //   id: 103,
  //   title: 'Chia nhánh',
  //   subtitle:
  //     'Chia nguồn dữ liệu ra thành nhiều phần theo % để thực hiện các node tiếp theo',
  //   icon: branching,
  //   code: 'branching',
  // },
  // {
  //   id: 104,
  //   title: 'Điều kiện rẽ nhánh',
  //   subtitle:
  //     'Chia nhánh Yes/No dựa vào điều kiện lọc (chọn các trường từ nguồn dữ liệu)',
  //   icon: branching_condition,
  //   code: 'branching_condition',
  // },
  {
    id: 105,
    title: 'Tương tác rẽ nhánh',
    subtitle:
      'Chia nhánh Yes/No dựa vào điều kiện lọc (kết quả trả về từ tác động của khách hàng)',
    icon: fork_interaction,
    code: 'fork_interaction',
  },
  // {
  //   id: 106,
  //   title: 'Lặp',
  //   subtitle: 'Lặp lại 1 đoạn quy trình trước đó với n lần',
  //   icon: repeat,
  //   code: 'repeat',
  // },
  {
    id: 106,
    title: 'Song song',
    subtitle: 'Thực hiện n hành động cùng lúc (tối đa 5)',
    icon: concurrently,
    code: 'concurrently',
    isNoSetting: true,
  },
  {
    id: 107,
    title: 'Kết thúc',
    subtitle: 'Kết thúc một hành động',
    icon: exit,
    code: 'exit',
    isNoSetting: true,
  },
]
const decideAutoTasks = [
  {
    id: 101,
    title: 'Khoảng thời gian',
    subtitle:
      'Cài đặt Khoảng thời gian để thực hiện node tiếp theo (ngày/giờ/phút/giây)',
    icon: duration_time,
    code: 'duration_time',
  },
  // {
  //   id: 102,
  //   title: 'Mốc thời gian',
  //   subtitle: 'Cài đặt mốc thời gian để thực hiện node tiếp theo (1/1/2022)',
  //   icon: timeline,
  //   code: 'timeline',
  // },
  {
    id: 103,
    title: 'Song song',
    subtitle: 'Thực hiện n hành động cùng lúc',
    icon: concurrently,
    code: 'concurrently',
    isNoSetting: true,
  },
  {
    id: 104,
    title: 'Kết thúc',
    subtitle: 'Kết thúc một hành động',
    icon: exit,
    code: 'exit',
    isNoSetting: true,
  },
]

const takeCareOfFacebookActions = [
  {
    id: 201,
    title: 'Kết bạn',
    subtitle: 'Gửi lời mời kết bạn đến facebook cá nhân',
    icon: add_friend_facebook_action,
    code: 'add_friend_facebook_action',
    type: 'personal',
    isNoSetting: true,
  },
  {
    id: 202,
    title: 'Nhắn tin',
    subtitle: 'Nhắn tin đến cá nhân qua messenger',
    icon: send_messenger_facebook_action,
    code: 'send_messenger_facebook_action',
    type: 'personal',
  },
  {
    id: 203,
    title: 'Bình luận',
    subtitle: 'Bình luận bài viết trong trang cá nhân',
    icon: comment_post_facebook_action,
    code: 'comment_post_facebook_action',
    type: 'personal',
  },
  {
    id: 204,
    title: 'Like',
    subtitle: 'Like bài viết trong trang cá nhân',
    icon: like_post_facebook_action,
    code: 'like_post_facebook_action',
    type: 'personal',
  },
  {
    id: 205,
    title: 'Hủy kết bạn',
    subtitle: 'Hủy yêu cầu kết bạn',
    icon: cancel_request_add_friend_facebook_action,
    code: 'cancel_request_add_friend_facebook_action',
    type: 'personal',
    isNoSetting: true,
  },
  {
    id: 206,
    title: 'Xóa bạn bè',
    subtitle: 'Xóa bạn bè khỏi danh sách kết bạn',
    icon: delete_friend_facebook_action,
    code: 'delete_friend_facebook_action',
    type: 'personal',
    isNoSetting: true,
  },
  {
    id: 207,
    title: 'Tham gia nhóm',
    subtitle: 'Gửi yêu cầu tham gia nhóm',
    icon: join_group_facebook_action,
    code: 'join_group_facebook_action',
    type: 'group',
    isNoSetting: true,
  },
  {
    id: 208,
    title: 'Viết bài nhóm',
    subtitle: 'Tạo bài viết trong nhóm',
    icon: write_post_group_facebook_action,
    code: 'write_post_group_facebook_action',
    type: 'group',
  },
  {
    id: 209,
    title: 'Bình luận nhóm',
    subtitle: 'Bình luận bài viết trong nhóm',
    icon: comment_post_group_facebook_action,
    code: 'comment_post_group_facebook_action',
    type: 'group',
  },
  {
    id: 210,
    title: 'Like bài viết nhóm',
    subtitle: 'Like bài viết trong nhóm',
    icon: like_post_group_facebook_action,
    code: 'like_post_group_facebook_action',
    type: 'group',
  },
  {
    id: 211,
    title: 'Like page',
    subtitle: 'Like trang tương tác',
    icon: like_page_facebook_action,
    code: 'like_page_facebook_action',
    type: 'page',
    isNoSetting: true,
  },
  {
    id: 212,
    title: 'Bình luận trang',
    subtitle: 'Bình luận bài viết của trang',
    icon: comment_post_page_facebook_action,
    code: 'comment_post_page_facebook_action',
    type: 'page',
  },
  {
    id: 213,
    title: 'Like',
    subtitle: 'Like bài viết của trang',
    icon: like_post_page_facebook_action,
    code: 'like_post_page_facebook_action',
    type: 'page',
  },
  {
    id: 214,
    title: 'Viết bài',
    subtitle: 'Tạo bài viết trong trang Sasam',
    icon: create_post_sasam_action,
    code: 'create_post_sasam_action',
    type: 'sasam',
  },
  {
    id: 215,
    title: 'Bình luận bài viết',
    subtitle: 'Bình luận bài viết trong trang Sasam',
    icon: comment_post_sasam_action,
    code: 'comment_post_sasam_action',
    type: 'sasam',
  },
  {
    id: 216,
    title: 'Like bình luận',
    subtitle: 'Like bình luận trong trang Sasam',
    icon: like_comment_sasam_action,
    code: 'like_comment_sasam_action',
    type: 'sasam',
  },
  {
    id: 217,
    title: 'Trả lời bình luận',
    subtitle: 'Trả lời bình luận trong bài viết của Sasam',
    icon: reply_comment_sasam_action,
    code: 'reply_comment_sasam_action',
    type: 'sasam',
  },
]

export {
  salesCampaignActions,
  takeCareOfFacebookActions,
  decides,
  decideAutoTasks,
}
