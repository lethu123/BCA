import moment from 'moment'
import {Link} from 'react-router-dom'
import avatar from 'assets/images/avatars/avatar-blank.png'
import {Badge} from 'reactstrap'

// *** Table Intl Column
export const columns = [
  {
    name: 'Mã giao dịch',
    selector: 'ID',
    sortable: true,
    minWidth: '120px',
    cell: row => <span className="d-block  text-truncate">{row.ID}</span>,
  },
  {
    name: 'Tên',
    selector: 'bizxu_info',
    sortable: true,
    minWidth: '240px',
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
    name: 'Danh mục',
    selector: 'category',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <span className="d-block  text-truncate">{row.category} </span>
    ),
  },
  {
    name: 'Loại giao dịch',
    selector: 'type_transaction',
    minWidth: '120px',
    cell: row => (
      <Badge
        color={row.type_transaction === 'Chuyển' ? 'primary' : 'danger'}
        className="text-white"
        pill
      >
        {row.type_transaction}
      </Badge>
    ),
  },
  {
    name: 'Số lượng',
    selector: 'count',
    sortable: true,
    minWidth: '70px',
    cell: row => (
      <span className="d-block  text-truncate text-center">
        {row.count} gói
      </span>
    ),
  },
  {
    name: 'Đơn giá',
    selector: 'price',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <span className="d-block  text-truncate">{row.price} Vnđ</span>
    ),
  },
  {
    name: 'Tổng giá',
    selector: 'price',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <span className="d-block  text-truncate text-success">
        {' '}
        + {row.total} Vnđ
      </span>
    ),
  },
  {
    name: 'Ngày thực hiện giao dịch',
    selector: 'date_start',
    sortable: true,
    minWidth: '200px',
    cell: row => (
      <div>
        <span className="d-block  text-truncate">
          {moment(row.date_start.date).format('DD-MM-yyyy')}
        </span>
        <p className="mb-0" style={{fontSize: '11px'}}>
          Người yêu cầu:{' '}
          <span className="text-primary">{row.date_start.admin}</span>
        </p>
      </div>
    ),
  },
]
