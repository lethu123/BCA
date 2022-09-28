import moment from 'moment'
export const DetailCampaignColumnTable = [
  {
    name: 'Tên khách hàng',
    maxWidth: '250px',
    selector: 'campaign',
    cell: row => <p className="text-primary">Marry</p>,
  },
  {
    name: 'Điện thoại',
    maxWidth: '150px',
    selector: 'phone',
    cell: row => <p>0322584796</p>,
  },
  {
    name: 'Email',

    maxWidth: '180px',
    selector: 'email',
    cell: row => <p>khacvu0505@gmail.com</p>,
  },
  {
    name: 'Mua hàng',
    maxWidth: '120px',
    selector: 'buy',
    cell: row => <p>Có</p>,
  },
  {
    name: 'Đơn hàng',
    maxWidth: '100px',
    selector: 'received_date',

    cell: row => <p>ABC</p>,
  },
  {
    name: 'Tổng tiền',
    maxWidth: '120px',
    selector: 'status',
    sortable: true,
    cell: row => <p>1000000</p>,
  },

  {
    name: 'Ngày mua hàng',
    maxWidth: '160px',
    selector: 'status',
    sortable: true,
    cell: row => <p>{moment(new Date()).format('YYYY-MM-DD HH:MM:ss')}</p>,
  },
  {
    name: 'Ngày tạo',
    maxWidth: '160px',
    selector: 'status',
    sortable: true,
    cell: row => <p>{moment(new Date()).format('YYYY-MM-DD HH:MM:ss')}</p>,
  },
]
