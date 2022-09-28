const data = {
  personalFacebookStatistic: {
    total_add_new_friend: 200,
    total_friend_from_request: 40,
    total_comment: 400,
    total_like: 1000,
  },
  personalFacebookSetting: {
    c_add_new_friend_of_day: 0,
    max_add_new_friend_of_day: 45,
    c_comment_like_of_day: 0,
    max_comment_like_of_day: 100,
  },
  listPersonalFacebooks: [
    {
      id: 1,
      facebook_sasam: 1,
      facebook_sasam_info: {
        id: 1,
        avatar: '',
        name: 'Đại lý 1',
        link: '',
      },
      impact_user_link: 1024,
      impact_user_link_info: {
        id: 1024,
        avatar: '',
        name: 'Huy vip',
        link: '',
      },
      is_friend: 'yes', // yes || no || pending
      action_name: 2,
      action_name_info: {
        id: 2,
        name: 'Thêm bạn bè',
      },
      action_type: 'New', // New || Redo
      status: 'pending', // pending  || complete || deleted
      campaign: 3,
      campaign_info: {
        id: 3,
        name: 'abcdef',
      },
      date_get_data: '10-10-2022 11:56:27 AM',
      date_of_execution: '10-10-2022 11:56:27 AM',
      data_sources: 2,
      data_source_info: {
        id: 2,
        type: 'Post', // Post || Group || Fanpage
        link: '',
      },
      type_lead: 2,
      type_lead_info: {
        id: 2,
        name: 'Quan tâm',
      },
      kind_of_interest: 1,
      kind_of_interest_info: {
        id: 1,
        name: 'Xương Khớp',
      },
      create_time: '10-10-2022 11:56:27 AM',
      update_time: '10-10-2022 11:56:27 AM',
    },
  ],
}

export default data
