// *** fake data
const commonSection = {
  id: 1,
  title: '',
  sub_title: '',
  description: '',
  url: '',
  link_youtube: '',
  imgs: [
    {id: 1, src: ''},
    {id: 1, src: ''},
  ],
}

const productCards = [
  {
    id: 1,
    img: '',
    saleOff: 40,
    name: 'demo1',
    price: 100,
    sold: 2,
    rating: 3.5,
    category: '',
  },
]

const categories = [{id: 1, name: '', img: ''}]

export const data = {
  categories: categories,
  departments: {
    banner: [],
    mainProducts: productCards,
    newProducts: productCards,
    bestSellings: productCards,
    saleOffs: productCards,
  },
  introduce: {
    banners: [
      {id: 1, src: ''},
      {id: 1, src: ''},
    ],
    title: '',
    landingPageCards: [
      {
        id: 1,
        title: '',
        subTitle: '',
        img: '',
        slug: '',
      },
    ],
    aboutUs: {
      title: '',
      description: '',
      imgs: ['', ''],
    },
    partners: [
      {id: 1, src: ''},
      {id: 1, src: ''},
    ],
    breackingNews: [{}],
  },
  landingPageDetail: {
    id: 1,
    sections: [commonSection],
  },
  landingPages: [
    {
      id: 1,
      sections: [commonSection],
    },
  ],
  memberCompanies: [commonSection],
  achievements: [commonSection],
  mediaSourcesReporteds: [commonSection],
  committees: [commonSection],
  news: [{id: 1, time: '', img: '', title: '', description: ''}],
  newDetail: {
    ...commonSection,
    comments: [
      {
        id: 1,
        text: '',
        time: '',
        user_info: {id: 1, username: 'Le Quyen', avatar: '', url: ''},
      },
    ],
  },
  partners: [commonSection],
  contacts: [
    {
      id: 1,
      text: 'TRỤ SỞ CHÍNH: 430C1 Nguyễn Huệ, Phường Phú Khương, TP. Bến Tre, Tỉnh Bến Tre.............HOTLINE: 0889 78 78 78',
    },
    {
      id: 2,
      text: 'CỬA HÀNG KINH DOANH: Gian E13 Trung tâm thương mại và trang thiết bị y tế, số 134/1 Tô Hiến Thành, Phường 15, Quận 10, Tp Hồ Chí Minh............HOTLINE: 0985 98 96 98',
    },
  ],
  contactSubmits: [
    {id: 1, fullname: '', email: '', phone: '', description: ''},
    {id: 1, fullname: '', email: '', phone: '', description: ''},
  ], //Adimin

  footer: {
    company_name: '',
    contact: '',
    licensing: {
      number: '',
      date: '',
    },
    social_links: [
      {id: 1, url: '', type: 'facebook'},
      {id: 2, url: '', type: 'zalo'},
      {id: 3, url: '', type: 'youtube'},
      {id: 4, url: '', type: 'tiktok'},
      {id: 5, url: '', type: 'instagram'},
    ],
    quick_link_menus: [{id: 1, text: 'tin tức', link: ''}],
    services: [{id: 1, text: 'tìm kiếm', link: ''}],
    opening_hour: '',
  },
}
