export const dataSourceCustomer = [
  {
    id: 1,
    key: 'code',
    label: 'Mã khách hàng',
    type: 'text',
  },
  {
    id: 2,
    key: 'name',
    label: 'Tên',
    type: 'text',
  },
  {
    id: 3,
    key: 'mail',
    label: 'Email',
    type: 'email',
  },

  {
    id: 4,
    key: 'phone',
    label: 'Số điện thoại',
    type: 'text',
  },
  {
    id: 5,
    key: 'birthday',
    label: 'Ngày sinh',
    type: 'date',
  },
  {
    id: 6,
    key: 'level',
    label: 'Cấp độ',
    type: 'select',
    subtype: 'text',
    options: [
      {
        value: '1',
        label: 'Thành viên đồng',
      },
      {
        value: '2',
        label: 'Thành viên bạc',
      },
      {
        value: '3',
        label: 'Thành viên vàng',
      },
      {
        value: '4',
        label: 'Thành viên kim cương',
      },
    ],
  },
  {
    id: 7,
    key: 'is_friend',
    label: 'Bạn bè facebook',
    type: 'select',
    subtype: 'boolean',
    options: [
      {
        value: 'true',
        label: 'True',
      },
      {
        value: '2',
        label: 'False',
      },
    ],
  },
  {
    id: 9,
    key: 'create',
    label: 'Ngày tạo',
    type: 'date',
  },
  {
    id: 10,
    key: 'province',
    label: 'Tỉnh/Thành phố',
    type: 'text',
  },
  {
    id: 11,
    key: 'district',
    label: 'Quận/Huyện',
    type: 'text',
  },
  {
    id: 12,
    key: 'ward',
    label: 'Phường/Xã',
    type: 'text',
  },
  {
    id: 13,
    key: 'address',
    label: 'Địa chỉ cụ thể',
    type: 'text',
  },
  {
    id: 14,
    key: 'major',
    label: 'Nghề nghiệp',
    type: 'text',
  },
  {
    id: 15,
    key: 'gender',
    label: 'Giới tính',
    type: 'select',
    subtype: 'text',
    options: [
      {
        value: 'male',
        label: 'Nam',
      },
      {
        value: 'female',
        label: 'Nữ',
      },
    ],
  },
  {
    id: 16,
    key: 'amount',
    label: 'Số lượng đơn hàng',
    type: 'text',
  },
  {
    id: 17,
    key: 'total_money',
    label: 'Tổng thành tiền',
    type: 'number',
  },
  {
    id: 18,
    key: 'ranking',
    label: 'Ranking theo tổng tiền mua',
    type: 'text',
  },
  {
    id: 19,
    key: 'end_date_bought',
    label: 'Ngày mua hàng cuối cùng',
    type: 'date',
  },
  {
    id: 20,
    key: 'end_product_bought',
    label: 'Sản phẩm lần mua cuối',
    type: 'text',
  },
  {
    id: 21,
    key: 'frend_equest',
    label: 'Yêu cầu kết bạn Facebook',
    type: 'select',
    subtype: 'boolean',
    options: [
      {
        value: 'male',
        label: 'Nam',
      },
      {
        value: 'female',
        label: 'Nữ',
      },
    ],
  },
  {
    id: 22,
    key: 'frend_FB',
    label: 'Bạn bè Facebook',
    type: 'select',
    subtype: 'boolean',
    options: [
      {
        value: 'male',
        label: 'Nam',
      },
      {
        value: 'female',
        label: 'Nữ',
      },
    ],
  },
  {
    id: 25,
    key: 'leads',
    label: 'Khách hàng tiềm năng',
    type: 'select',
    subtype: 'text',
    options: [
      {
        value: '1',
        label: 'Tiếp cận',
      },
      {
        value: '2',
        label: 'Quan tâm',
      },
      {
        value: '3',
        label: 'Yêu thích',
      },
      {
        value: '4',
        label: 'Mua',
      },
    ],
  },
  {
    id: 26,
    key: 'status',
    label: 'Trạng thái',
    type: 'select',
    subtype: 'text',
    options: [
      {
        value: '1',
        label: 'Chuyển leads',
      },
      {
        value: '2',
        label: 'Mới',
      },
    ],
  },
  {
    id: 23,
    key: 'date_change_leads',
    label: 'Ngày chuyển Leads gần nhất',
    type: 'date',
  },
  {
    id: 24,
    key: 'date_change_leads1',
    label: 'Ngày chuyển Leads gần nhất',
    type: 'date',
  },
]

export const dataSourceFB = [
  {
    id: 1,
    value: '',
    key: 'uid',
    label: 'UID',
    type: 'text',
    typeUID: ['personal', 'group', 'fanpage'],
  },
  {
    id: 2,
    value: '',
    key: 'type_of_interaction',
    label: 'Loại tương tác',
    type: 'select',
    subtype: 'text',
    options: [
      {
        value: '1',
        label: 'Tương tác',
      },
      {
        value: '2',
        label: 'Đối thủ',
      },
    ],
    typeUID: ['group', 'fanpage'],
  },
  {
    id: 3,
    value: '',
    key: 'sent_friend_request',
    label: 'Gửi yêu cầu kêt bạn',
    type: 'select',
    subtype: 'boolean',
    options: [
      {
        value: 'true',
        label: 'True',
      },
      {
        value: 'false',
        label: 'False',
      },
    ],
    typeUID: ['personal'],
  },
  {
    id: 4,
    value: '',
    key: 'friend',
    label: 'Bạn bè',
    type: 'select',
    subtype: 'boolean',
    options: [
      {
        value: 'true',
        label: 'True',
      },
      {
        value: 'false',
        label: 'False',
      },
    ],
    typeUID: ['personal'],
  },
  {
    id: 5,
    value: '',
    key: 'join_group',
    label: 'Gửi yêu cầu tham gia Group',
    type: 'select',
    subtype: 'boolean',
    options: [
      {
        value: 'true',
        label: 'True',
      },
      {
        value: 'false',
        label: 'False',
      },
    ],
    typeUID: ['group'],
  },
  {
    id: 6,
    value: '',
    key: 'joined_group',
    label: 'Đã tham gia Group',
    type: 'select',
    subtype: 'boolean',
    options: [
      {
        value: 'true',
        label: 'True',
      },
      {
        value: 'false',
        label: 'False',
      },
    ],
    typeUID: ['group'],
  },
  {
    id: 7,
    value: '',
    key: 'link_fanpage',
    label: 'Link FanPage',
    type: 'select',
    subtype: 'boolean',
    options: [
      {
        value: 'true',
        label: 'True',
      },
      {
        value: 'false',
        label: 'False',
      },
    ],
    typeUID: ['fanpage'],
  },
]
