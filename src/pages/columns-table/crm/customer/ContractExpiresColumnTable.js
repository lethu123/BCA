import moment from 'moment'
import avatar from 'assets/images/avatars/9.png'

// *** Table Intl Column
export const ContractExpiresColumnTable = [
  {
    name: 'Mã khách hàng',
    selector: 'idcustomer',
    maxWidth: '80px',
    cell: row => <p>10</p>,
  },
  {
    name: 'Tên sản phẩm',
    selector: 'name',
    maxWidth: '120px',
    cell: row => <p>BH nhân thọ</p>,
  },

  {
    name: 'Ngày hiệu lực HD',
    selector: 'date',
    maxWidth: '140px',
    cell: row => <p>{moment(new Date()).format('DD/MM/YYYY')}</p>,
  },
  {
    name: 'Ngày đến hạn đóng phí tiếp theo',
    selector: 'next',
    maxWidth: '140px',
    cell: row => <p>{moment(new Date()).format('DD/MM/YYYY')}</p>,
  },
  {
    name: 'Số phí BH',
    selector: 'cost',
    maxWidth: '130px',
    cell: row => <p>10000000</p>,
  },
  {
    name: 'Tên công ty bảo hiểm',
    selector: 'name',
    maxWidth: '170px',
    cell: row => <p>Fubon</p>,
  },

  {
    name: 'Ngày sinh',
    selector: 'birthday',
    sortable: true,
    maxWidth: '180px',
    cell: row => <p>{moment(new Date()).format('DD/MMYYYY')}</p>,
  },
]
