import {Badge} from 'reactstrap'
import moment from 'moment'
import avatar from 'assets/images/avatars/avatar-blank.png/'
import {Link} from 'react-router-dom'

// *** Table Intl Column
export const columns = [
  {
    name: 'ID giao dịch',
    selector: 'ID',
    sortable: true,
    minWidth: '150px',
    cell: row => <span className="d-block  text-truncate">{row.ID}</span>,
  },
  {
    name: 'Danh mục',
    selector: 'bizxu_info',
    sortable: true,
    minWidth: '250px',
    cell: row => (
      <div className="d-flex align-items-center">
        <img
          src={row.bizxu_info.avatar || avatar}
          alt="images"
          className="img-fluid rounded-circle mr-2"
          width="30px"
          height="30px"
        />
        <div className="user-info text-truncate ml-1">
          <Link
            className="d-block  text-truncate text-primary cursor-pointer"
            to="#"
          >
            {row.bizxu_info.name}
          </Link>
          <p className="font-weight-bold mb-0">
            ID: <span className="text-primary">{row.bizxu_info.ID}</span>
          </p>
        </div>
      </div>
    ),
  },

  {
    name: 'Số lượng mua',
    selector: 'count_buy',
    sortable: true,
    minWidth: '100px',
    cell: row => (
      <span className="d-block  text-truncate text-center">
        {row.count_buy}
      </span>
    ),
  },
  {
    name: 'Giá gói',
    selector: 'price',
    minWidth: '120px',
    cell: row => (
      <span className="d-block  text-truncate">{row.price} BizXu</span>
    ),
  },
  {
    name: 'Tổng tiền',
    selector: 'total',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <span className="d-block  text-truncate">{row.total} Vnđ</span>
    ),
  },
  {
    name: 'Trạng thái',
    selector: 'status',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <Badge
        color={
          row.status === 'Duyệt'
            ? 'success'
            : row.status === 'Từ chối'
            ? 'danger'
            : 'warning'
        }
        className="text-white"
        pill
      >
        {row.status}
      </Badge>
    ),
  },

  {
    name: 'Ngày thực hiện giao dịch',
    selector: 'date_start',
    sortable: true,
    minWidth: '170px',
    cell: row => (
      <div>
        <span className="d-block  text-truncate">
          {moment(row.date_start.date).format('DD-MM-yyyy')}
        </span>
        <p className="mb-0" style={{fontSize: '11px'}}>
          Tạo bởi: <span className="text-primary">{row.date_start.admin}</span>
        </p>
      </div>
    ),
  },
]
