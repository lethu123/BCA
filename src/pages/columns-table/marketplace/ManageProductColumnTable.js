import moment from 'moment'
import avatar1 from 'assets/images/avatars/9.png'
import {Badge} from 'reactstrap'

export const ManageProductColumnTable = [
  {
    name: 'Đơn giá',
    selector: 'price',
    maxWidth: '180px',
    center: true,
    cell: row => <p>235000</p>,
  },
  {
    name: 'Số lượng đã bán',
    selector: 'QuantitySold',
    maxWidth: '180px',
    center: true,
    cell: row => <p>20 lượt</p>,
  },
  {
    name: 'Thành tiền',
    selector: 'TotalMoney',
    maxWidth: '200px',
    center: true,
    cell: row => <p>100000 VND</p>,
  },
  {
    name: 'Phí giao dịch',
    selector: 'TransactionFee',
    maxWidth: '200px',
    center: true,
    cell: row => <p>10000 VND</p>,
  },

  {
    name: 'Ngày đăng',
    sortable: true,
    maxWidth: '170px',
    cell: row => <p>{moment(new Date()).format('DD-MM-YYYY')}</p>,
  },
  {
    name: 'Người đăng',
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
    name: 'Tình trạng',
    maxWidth: '170px',
    cell: row => <Badge color="light-success">Còn hàng</Badge>,
  },
]
