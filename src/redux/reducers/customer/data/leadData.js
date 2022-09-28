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
  post_id: 23,
  data_source: 1,
  data_source_info: {
    id: 1,
    name: 'Robot',
  },
  create_time: '10-10-2022 11:56:27 AM',
  update_time: '10-10-2022 11:56:27 AM',
  avatar: '',
  date_of_last_purchase: '10-10-1996',
  birthday: '10-10-1996',
  city: 'Vung tau',
  district: 'VT',
  wards: '',
  profession: '',
  status_contact: 2,
  status_contact_info: {
    id: 2,
    name: 'Khách hàng đang bận',
  },
  type_lead: 1,
  type_lead_info: {
    id: 1,
    name: 'Quan tâm', // Quan tâm || Yêu thích || Mua || Tiếp cận
  },
  kind_of_interest: 1,
  kind_of_interest_info: {
    id: 1,
    name: 'Xương Khớp',
  },

  //Detail
  workplaces: 'apple',
  age: '',
  gender: 'Nam',
  marital_status: 'Độc thân',
  preference: ['Ăn', 'ngủ', 'du lịch'],
  demography: ['abc', 'def'],
  favorite_subject: ['a', 'b', 'c'],
  subject_of_interest: ['d', 'e', 'f'],
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
  user_id: 2, //id của user tạo
  user_info: {
    id: 31,
    username: 'Dominicushuy',
    avatar: '',
    url: '',
  },
  ...customerAutomationData,
}

const data = {
  // *** Admin - Khách hàng Tiềm năng
  leadStatistic: {
    total_lead: 1000,
    total_lead_consultant: 200,
    total_lead_from_robot: 123,
    total_lead_manual_input: 123,
    total_order: 123,
    total_revenue: 1000000000,
  },
  listLeads: [
    {
      id: 1,
      fullname: 'Huy cute',
      phone: '0930123123',
      email: 'huy@gmail.com',
      address: '',
      post_id: 23,
      data_source: 1,
      data_source_info: {
        id: 1,
        name: 'Robot',
      },
      create_time: '10-10-2022 11:56:27 AM',
      update_time: '10-10-2022 11:56:27 AM',
      avatar: '',
      date_of_last_purchase: '10-10-1996',
      birthday: '10-10-1996',
      city: 'Vung tau',
      district: 'VT',
      wards: '',
      profession: '',
      status_contact: 2,
      status_contact_info: {
        id: 2,
        name: 'Khách hàng đang bận',
      },
      type_lead: 1,
      type_lead_info: {
        id: 1,
        name: 'Quan tâm', // Quan tâm || Yêu thích || Mua || Tiếp cận
      },
      kind_of_interest: 1,
      kind_of_interest_info: {
        id: 1,
        name: 'Xương Khớp',
      },
    },
  ],
  leadDetail: customerDetail,
}

export default data
