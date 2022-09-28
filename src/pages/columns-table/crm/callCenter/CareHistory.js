import moment from 'moment'

export const CareHistoryColumnTable = [
  {
    name: 'ID',
    selector: 'id',
    maxWidth: '100px',
    cell: row => <p>210528</p>,
  },
  {
    name: 'Loại cuộc gọi',
    selector: 'typeCall',
    maxWidth: '150px',
    cell: row => <p>Inbound</p>,
  },
  {
    name: 'Số điện thoại',
    selector: 'phone',
    maxWidth: '200px',
    cell: row => <p>0366958214</p>,
  },

  {
    name: 'Người thực hiện',
    maxWidth: '200px',

    cell: row => <p>duong2th</p>,
  },
  {
    name: 'Tên sản phẩm',
    maxWidth: '180px',

    cell: row => <p>BH nhân thọ</p>,
  },

  {
    name: 'Thời gian bắt đầu',
    sortable: true,
    maxWidth: '160px',
    cell: row => <p>{moment(new Date()).format('DD-MM-YYYY HH:MM:ss')}</p>,
  },
  {
    name: 'Thời gian kết thúc',
    sortable: true,
    maxWidth: '160px',
    cell: row => <p>{moment(new Date()).format('DD-MM-YYYY HH:MM:ss')}</p>,
  },
  {
    name: 'Thời gian gọi(s)',
    sortable: true,
    maxWidth: '150px',
    cell: row => <p>50</p>,
  },
]
