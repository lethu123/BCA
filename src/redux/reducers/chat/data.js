export const data = {
  status: {
    id: 2,
    name: 'online',
  },
  listGroups: [
    {
      id: 2,
      name: 'Group trao đổi thông tin',
      phone: '',
      city: '',
      email: '',
      create_time: '',
      update_time: '',
      ower: {
        user_id: 31,
        username: 'Dominicushuy',
        url: '',
        avatar: '',
        status: 'offline',
      },
      last_message: {
        id: 3,
        user_info: {
          id: 3,
          username: 'Sang',
          avatar: '',
          url: '',
        },
        content: 'tin nhắn cuối cùng nhé',
        create_time: '',
        update_time: '',
      },
      picture: '',
      members: [
        {
          id: 4,
          user_info: {
            id: 3,
            username: 'Sang',
            avatar: '',
            url: '',
          },
          status: 'online',
        },
      ],
      c_unseen_message: 10,
      is_report: false,
      gallery: [
        {
          id: 3,
          src: '',
          create_time: '',
          update_time: '',
          creator: {
            id: 3,
            username: 'Dương',
            avatar: '',
            url: '',
          },
        },
      ],
    },
  ],
  messengers: [
    {
      id: 123,
      group_id: 1,
      user_info: {
        id: 3,
        username: 'Sang',
        avatar: '',
        url: '',
      },
      content: 'xin chào',
      imgs: [{id: 2, src: ''}],
      files: [{id: 4, name: 'file1.pdf', src: ''}],
      create_time: '',
      update_time: '',
    },
  ],
  chatBots: [
    {
      id: 123,
      group_id: 1,
      user_info: {
        id: 3,
        username: 'Sang',
        avatar: '',
        url: '',
      },
      content: 'xin chào',
      imgs: [{id: 2, src: ''}],
      files: [{id: 4, name: 'file1.pdf', src: ''}],
      create_time: '',
      update_time: '',
    },
  ],
}
