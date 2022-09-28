import moment from 'moment'

export const CallCenterColumnTable = [
  {
    name: 'ID',
    selector: 'id',
    maxWidth: '100px',
    cell: row => <p>210528</p>,
  },
  {
    name: 'Số HD',
    selector: 'contractID',
    maxWidth: '150px',
    cell: row => <p>12345</p>,
  },
  {
    name: 'Tên sản phẩm',
    selector: 'name',
    maxWidth: '200px',
    cell: row => <p>BH nhân thọ</p>,
  },

  {
    name: 'Số phí BH',
    maxWidth: '200px',
    sortable: true,

    cell: row => <p>10000000</p>,
  },
  {
    name: 'Số năm',
    maxWidth: '100px',
    center: true,
    cell: row => <p>2</p>,
  },

  {
    name: 'Ngày hiệu lực HD',
    sortable: true,
    maxWidth: '160px',
    cell: row => <p>{moment(new Date()).format('DD-MM-YYYY')}</p>,
  },
]
