const commonData = {
  id: 1,
  customer_id: 31,
  customer_info: {
    id: 31,
    fullname: 'Gia Huy',
    phone: '0933332121',
  },
  customer_code: '123321',
  order_code: '12332123',
  status: 'pending',
  amount_of_product: 2,
  order_creation_date: '',
  delivery_date: '',
  delivery_address: '',
  total_price: 1000000,
  accumulated_point: 1000,
  shipping_fee: 12300,
  note: '',
  payment_method: {
    type: 'MOMO',
    account_name: 'NGUYEN LE GIA HUY',
    account_number: '1234567890934',
    code: 'BARC0032UK',
  },
  products_info: [
    {
      id: 1,
      name: 'Headphones',
      qty: 2,
      price: 200000,
      picture: '',
    },
  ],
  voucher_info: {
    id: 1,
    title: '',
    describe: '',
    duration: '',
    img: 'imgurl',
    expirationDate: '',
  },
  creator_id: null, //TH null là KH mua hàng, còn ko là do admin hoặc đại lý tạo
  warehouses_transport: null,

  activity_log: [
    {
      id: 1,
      time: '15:00 21/8/2022',
      text: 'Giao hàng thành công',
      img: [{id: 2, src: ''}],
    },
  ],
}
export const data = {
  myInvoice: [commonData],
  invoiceDetail: commonData,
}
