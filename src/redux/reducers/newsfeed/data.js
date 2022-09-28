const postItem = {
  id: 1,
  user_info: {
    id: 1,
    username: 'Le Quyen',
    avatar: '',
    url: '',
  },
  content: 'atest tao bai viet',
  imgs: [
    {
      id: 2,
      src: '',
    },
  ],
  create_time: '',
  update_time: '',
  is_like: true,
  c_comment: 100,
  c_like: 1000,
  is_hiden: false,
  is_report: false,
  is_off_comment: false,
  gift_score: {
    score: 100000,
    amount: 1,
  },
  comment: {
    data: [
      {
        id: 2,
        user_info: {
          id: 1,
          username: 'Le Quyen',
          avatar: '',
          url: '',
        },
        text: '',
        is_like: true,
        create_time: '',
        update_time: '',
        reply_comment: [
          {
            id: 2,
            user_info: {
              id: 1,
              username: 'Le Quyen',
              avatar: '',
              url: '',
            },
            text: '',
            is_like: true,
            create_time: '',
            update_time: '',
          },
        ],
      },
    ],
    metadata: {
      num_pages: 1,
      count: 1,
      limit: 4,
    },
  },
}

export const data = {
  listPosts: [postItem],
  dataTables: [],
}
