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

export const data = {
  productDetail: {
    id: 1,
    name: 'SARMENTOSA IMMUNE SUPPORT (75 ML) (BỔ PHẾ HÓA ĐỜM)',
    price: 220000,
    procedure: 'Chai dạng xịt 75ml',
    purpose: 'abc,def',
    number_of_SPRCA: '1/2020/1301015435-DKCB',
    sku: 'IMMUNE - 75',
    trademark: 'SA SÂM VIỆT',
    type: 'Khác',
    sold: 200,
    describe: [commonSection],
    guide: [commonSection],
    introduced: [commonSection],
    link_youtube: '',
    comments: [
      {
        id: 1,
        rating: 3,
        user_info: {
          id: 31,
          username: 'Dominicushuy',
          avatar: '',
          url: '',
        },
        text: '',
      },
    ],
  },
  relatedProducts: [
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
  ],
  seenProducts: [
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
  ],
  recentProducts: [
    // my cart page
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
  ],
  carts: [
    {
      id: 1,
      name: 'Headphones',
      qty: 2,
      price: 200000,
      picture: '',
    },
  ],
}
