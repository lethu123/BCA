import moment from 'moment'
import avatar1 from 'assets/images/avatars/9.png'

export const RequestColumnTable = [
  {
    name: 'ID',
    selector: 'id',
    maxWidth: '120px',
    cell: row => <p>1234</p>,
  },

  {
    name: 'Tên sản phẩm',
    selector: 'NameProduct',
    maxWidth: '220px',
    cell: row => <p>Sản phẩm số 1</p>,
  },
  {
    name: 'Người yêu cầu',
    selector: 'Request',
    minWidth: '200px',
    maxWidth: '220px',
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
    name: 'Đơn giá',
    selector: 'price',
    maxWidth: '180px',
    center: true,
    cell: row => <p>356000 VND</p>,
  },

  {
    name: 'Ngày tạo',
    selector: 'DateCreated',
    sortable: true,
    maxWidth: '170px',
    cell: row => <p>{moment(new Date()).format('DD-MM-YYYY')}</p>,
  },
]
