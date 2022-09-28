export const options = [
  {
    value: 'sms',
    options: [
      {
        value: 'sent',
        label: '1. Đã gửi tin nhắn thành công',
      },
      {
        value: 'unreply_over_timeout',
        label:
          '2. Đã gửi tin nhắn thành công nhưng sau một khoảng thời gian chưa trả lời',
        type: 'time',
        isDisabled: true,
      },
      {
        value: 'reply_after',
        label: '3. Đã trả lời tin nhắn sau một khoảng thời gian',
        type: 'time',
        isDisabled: true,
      },
      {
        value: 'replied_without_keyword',
        label: '4. Đã trả lời tin nhắn KHÔNG CÓ Keyword',
        type: 'tag',
        isDisabled: true,
      },
      {
        value: 'replied_keyword',
        label: '5. Đã trả lời tin nhắn CÓ Keyword',
        type: 'tag',
        isDisabled: true,
      },
    ],
  },
  {
    value: 'email',
    options: [
      {
        value: 'sent',
        label: '1. Đã gửi email thành công',
      },
      {
        value: 'unreply_over_timeout',
        label:
          '2. Đã gửi email thành công nhưng sau một khoảng thời gian chưa trả lời',
        type: 'time',
        config: {
          type: '',
          value: null,
        },
      },
      {
        value: 'reply_after',
        label: '3. Đã trả lời email sau một khoảng thời gian',
        type: 'time',
        config: {
          type: '',
          value: null,
        },
      },
      {
        value: 'replied_without_keyword',
        label: '4. Đã trả lời email KHÔNG CHỨA Keyword',
        type: 'tag',
      },
      {
        value: 'replied_keyword',
        label: '5. Đã trả lời email CHỨA Keyword',
        type: 'tag',
        config: [],
      },
      {
        value: 'is_spam',
        label: '6. Thư vào spam',
      },
    ],
  },
  {
    value: 'messenger',
    options: [
      {
        value: 'block',
        label: '1. Gửi không thành công.',
      },
      {
        value: 'ignore',
        label: '2. Chưa trả lời sau một khoảng thời gian.',
        type: 'time',
        config: {
          type: '',
          value: null,
        },
      },

      {
        value: 'reply_with_keyword',
        label: '3. Đã trả lời chứa keyword',
        type: 'tag',
        config: [],
      },
      {
        value: 'reply_without_keyword',
        label: '4. Đã trả lời messenger KHÔNG CHỨA Keyword',
        type: 'tag',
        config: [],
      },
      {
        value: 'reaction_positive',
        label: '5. Biểu cảm tin nhắn tích cực',
        type: 'checkbox',
        config: [],
        lists: [
          {
            name: 'like',
            label: 'Like',
          },
          {
            name: 'love',
            label: 'Yêu thích',
          },
          {
            name: 'care',
            label: 'Quan tâm',
          },
          {
            name: 'smile',
            label: 'Haha',
          },
        ],
      },
      {
        value: 'reaction_negative',
        label: '6. Biểu cảm tin nhắn tiêu cực',
        type: 'checkbox',
        config: [],
        lists: [
          {
            name: 'angry',
            label: 'Giận dữ',
          },
          {
            name: 'sad',
            label: 'Buồn',
          },
        ],
      },
    ],
  },
  {
    value: 'comment',
    options: [
      {
        value: 'reply_after',
        label: '1. Đã trả lời bình luận sau một khoảng thời gian',
        type: 'time',
        config: {
          type: '',
          value: null,
        },
      },
      {
        value: 'replied_without_keyword',
        label: '2. Đã trả lời bình luận KHÔNG CHỨA Keyword',
      },
      {
        value: 'replied_keyword',
        label: '3. Đã trả lời bình luận CHỨA Keyword',
        type: 'tag',
        config: [],
      },
      {
        value: 'reaction_positive',
        label: '4. Biểu cảm bình luận tích cực',
        type: 'checkbox',
        config: [],
        lists: [
          {
            name: 'like',
            label: 'Like',
          },
          {
            name: 'love',
            label: 'Yêu thích',
          },
          {
            name: 'care',
            label: 'Quan tâm',
          },
          {
            name: 'smile',
            label: 'Haha',
          },
        ],
      },
      {
        value: 'reaction_negative',
        label: '5. Biểu cảm bình luận tiêu cực',
        type: 'checkbox',
        config: [],
        lists: [
          {
            name: 'angry',
            label: 'Giận dữ',
          },
          {
            name: 'sad',
            label: 'Buồn',
          },
        ],
      },
    ],
  },
  {
    value: 'add_friend',
    options: [
      // {
      //   value: 'sent',
      //   label: '1. Đã gửi lời mời kết bạn thành công',
      // },
      // {
      //   value: 'ignore',
      //   label: '2. Lời mời kết bạn chưa Accept sau một khoảng thời gian',
      //   type: 'time',
      //   config: {
      //     type: '',
      //     value: null,
      //   },
      // },
      // {
      //   value: 'waiting',
      //   label: '3. Đang chờ lời mời kết bạn',
      // },
      // {
      //   value: 'accepted',
      //   label: '4. Đã đồng ý lời mời kết bạn',
      // },
      {
        value: 'block',
        label: '1. Gửi không thành công',
      },
      {
        value: 'ignore',
        label: '2. Lời mời kết bạn chưa Accept sau một khoảng thời gian',
        type: 'time',
        config: {
          type: '',
          value: null,
        },
      },
      {
        value: 'accepted',
        label: '3. Đã đồng ý lời mời',
      },
    ],
  },
]
