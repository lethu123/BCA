import moment from 'moment'
import avatar1 from 'assets/images/avatars/9.png'

export const TransactionHistoryColumnTable = [
  {
    name: 'ID',
    selector: 'id',
    maxWidth: '100px',
    cell: row => <p>1234</p>,
  },
  {
    name: 'Người mua',
    selector: 'Buyer',
    minWidth: '200px',
    maxWidth: '300px',
    cell: row => (
      <div className="d-flex align-items-center py-1">
        <img
          src={avatar1}
          alt="images"
          style={{width: 40, height: 40, borderRadius: '50%', marginRight: 7}}
        />
        <div>
          <p className="mb-0 text-primary cursor-pointer">Emily Clark</p>
          <small>ID Biznet: 393823</small>
        </div>
      </div>
    ),
  },

  {
    name: 'Số lượng',
    selector: 'number',
    maxWidth: '180px',
    cell: row => <p>2 lượt</p>,
  },
  {
    name: 'Đơn giá',
    selector: 'price',
    maxWidth: '180px',
    center: true,
    cell: row => <p>235000</p>,
  },
  {
    name: 'Thành tiền',
    selector: 'TotalMoney',
    maxWidth: '200px',
    center: true,
    cell: row => <p>100000 VND</p>,
  },

  {
    name: 'Ngày giao dịch',
    selector: 'DayTrading',
    sortable: true,
    maxWidth: '170px',
    cell: row => <p>{moment(new Date()).format('DD-MM-YYYY')}</p>,
  },
]
