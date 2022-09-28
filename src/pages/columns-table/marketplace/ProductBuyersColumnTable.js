import moment from 'moment'
import avatar1 from 'assets/images/avatars/9.png'

export const ProductBuyersColumnTable = [
  {
    name: 'Người mua',
    minWidth: '200px',
    maxWidth: '250px',
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
    selector: 'NameProduct',
    maxWidth: '150px',
    cell: row => <p className="text-primary cursor-pointer"> 1 lượt</p>,
  },
  {
    name: 'Đơn giá',
    selector: 'price',
    maxWidth: '150px',
    center: true,
    cell: row => <p>235000 VND</p>,
  },
  {
    name: 'Thành tiền',
    selector: 'TotalMoney',
    maxWidth: '180px',
    center: true,
    cell: row => <p>245000 VND</p>,
  },

  {
    name: 'Ngày GD',
    sortable: true,
    maxWidth: '170px',
    cell: row => <p>{moment(new Date()).format('DD-MM-YYYY')}</p>,
  },
]
