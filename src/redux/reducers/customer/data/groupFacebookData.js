const data = {
  // *** Personal
  groupFacebookStatistic: {
    total_request_join_group: 200,
    total_group_joined: 40,
    total_post: 400,
    total_comment: 400,
    total_like: 1000,
  },
  groupFacebookSetting: {
    c_join_new_group_of_day: 0,
    max_join_new_group_of_day: 45,
    c_comment_like_of_day: 0,
    max_comment_like_of_day: 100,
    c_post_of_day: 0,
    max_post_of_day: 100,
  },
  listGroupFacebooks: [
    {
      id: 1,
      facebook_sasam: 1,
      facebook_sasam_info: {
        id: 1,
        avatar: '',
        name: 'Đại lý 1',
        link: '',
      },
      impact_group_link: 1024,
      impact_group_link_info: {
        id: 1024,
        avatar: '',
        name: 'Huy vip',
        link: '',
      },
      is_joined: 'Yes', // yes || no || pending
      action_name: 2,
      action_name_info: {
        id: 2,
        name: 'Tham gia group',
      },
      action_type: 'New', // New || Redo
      status: 'pending', // pending  || complete || deleted
      type_group: 'interaction', // interaction || opponent
      campaign: 3,
      campaign_info: {
        id: 3,
        name: 'abcdef',
      },
      date_get_data: '10-10-2022 11:56:27 AM',
      date_of_execution: '10-10-2022 11:56:27 AM',
      create_time: '10-10-2022 11:56:27 AM',
      update_time: '10-10-2022 11:56:27 AM',
    },
  ],
}

export default data
