const customerAutomationData = {
  orders: {
    statistic: {
      total: 3,
      complete: 2,
      total_type: 2,
      quantity: 3,
      total_money: 2300000,
    },
    datas: [
      {
        id: 12,
        status: 'Đã xác nhận',
        amount: 20,
        total_money: '123123',
        create_time: '',
        update_time: '',
      },
    ],
  },
  contacts: {
    statistic: {
      phone: 3,
      email: 2,
      sms: 2,
      social: 3,
      total_money: 2300000,
    },
    phones: [
      {
        id: 2,
        phone_type: 'Outbound',
        mission_type: 'Tư vấn KH',
        result: 'KH mua hàng',
        start_date: '',
        end_date: '',
        time_of_call: 400,
      },
    ],
    emails: [
      {
        id: 1,
        topic: 'Chúc mừng sinh nhật',
        campaign_info: {
          id: 3,
          name: 'Sinh nhật',
        },
        create_time: '',
        send_date: '',
        received_date: '',
        status: 'Đã nhận', // Đã nhận || Đã xem || Đã trả lời
      },
    ],
    text_messages: [
      {
        id: 1,
        topic: 'Chúc mừng sinh nhật',
        campaign_info: {
          id: 3,
          name: 'Sinh nhật',
        },
        create_time: '',
        send_date: '',
      },
    ],
    socials: [
      {
        id: 1,
        topic: 'Chúc mừng sinh nhật',
        campaign_info: {
          id: 3,
          name: 'Sinh nhật',
        },
        create_time: '',
        send_date: '',
        received_date: '',
        status: 'Đã nhận', // Đã nhận  || Đã trả lời
      },
    ],
  },
  campaign: {
    statistic: {
      total: 3,
      total_interactions: 2,
      total_attending: 2,
      total_order: 3,
      turnover: 2300000,
      cost: 123123,
    },
    datas: [
      {
        id: 1,
        name: 'Sinh nhật',
        create_time: '',
        start_date: '',
        end_date: '',
        result: 'KH mua hàng', // KH từ chối  || KH không trả lời
      },
    ],
  },
}
const customerDetail = {
  id: 1,
  fullname: 'Huy cute',
  phone: '0930123123',
  email: 'huy@gmail.com',
  address: '',
  payment_method: 2,
  payment_method_info: {
    id: 2,
    type: 'MOMO',
    account_name: 'NGUYEN LE GIA HUY',
    account_number: '1234567890934',
    code: 'BARC0032UK',
  },
  avatar: '',
  date_of_last_purchase: '10-10-1996',
  birthday: '10-10-1996',
  city: 'Vung tau',
  district: 'VT',
  wards: '',
  profession: '',
  age: '',
  total_order: 2,
  total_money: 200.0, // float
  level: 2,
  level_info: {
    id: 2,
    name: 'Thành viên đồng',
  },
  socials_link: [
    {
      id: 1,
      url: '',
      type: 'facebook',
    },
    {
      id: 1,
      url: '',
      type: 'zalo',
    },
  ],
  data_source: 1,
  data_source_info: {
    id: 1,
    name: 'Khai thác dữ liệu',
  },
  kind_of_interest: 1,
  kind_of_interest_info: {
    id: 1,
    name: 'Xương Khớp',
  },
  workplaces: 'apple',
  gender: 'Nam',
  marital_status: 'Độc thân',
  preference: ['Ăn', 'ngủ', 'du lịch'],
  demography: ['abc', 'def'],
  favorite_subject: ['a', 'b', 'c'],
  subject_of_interest: ['d', 'e', 'f'],
  user_id: 2,
  user_info: {
    id: 31,
    username: 'Dominicushuy',
    avatar: '',
    url: '',
  },
  accumulated_point: 200000,
  accumulated_point_used: 50000,
  create_time: '10-10-2022 11:56:27 AM',
  update_time: '10-10-2022 11:56:27 AM',
  ...customerAutomationData,
}

const data = {
  // *** Admin - Khách hàng
  customerStatistic: {
    total_customer: 1000,
    total_product: 200,
    total_order: 123,
    total_revenue: 12312312,
  },
  listCustomers: [
    {
      id: 1,
      fullname: 'Huy cute',
      phone: '0930123123',
      email: 'huy@gmail.com',
      address: '',
      type: 'lead',
      payment_method: 2,
      payment_method_info: {
        id: 2,
        type: 'MOMO',
        account_name: 'NGUYEN LE GIA HUY',
        account_number: '1234567890934',
        code: 'BARC0032UK',
      },
      data_source: 1,
      data_source_info: {
        id: 1,
        name: 'Robot',
      },
      create_time: '10-10-2022 11:56:27 AM',
      update_time: '10-10-2022 11:56:27 AM',
      avatar_url: '',
      date_of_last_purchase: '10-10-1996',
      birthday: '10-10-1996',
      city: 'Vung tau',
      district: 'VT',
      wards: '',
      profession: '',
      age: '',
      total_order: 2,
      total_money: 200.0, // float
      level: 2,
      level_info: {
        id: 2,
        name: 'Thành viên đồng',
      },
    },
  ],
  customerDetail: customerDetail,
}

export default data
