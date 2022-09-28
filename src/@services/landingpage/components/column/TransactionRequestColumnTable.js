import moment from 'moment'
import {Link} from 'react-router-dom'
import avatar from 'assets/images/avatars/avatar-blank.png'
import {Badge} from 'reactstrap'

// *** Table Intl Column
export const columns = [
  {
    name: 'ID',
    selector: 'ID',
    sortable: true,
    minWidth: '100px',
    cell: row => <span className="d-block  text-truncate">{row.ID}</span>,
  },
  {
    name: 'Người yêu cầu',
    selector: 'user_info',
    sortable: true,
    minWidth: '250px',
    cell: row => (
      <div className="d-flex align-items-center">
        <img
          src={row.user_info.avatar || avatar}
          alt="images"
          className="img-fluid rounded-circle mr-2"
          width="30px"
          height="30px"
        />
        <div className="user-info text-truncate ml-1">
          <Link
            className="d-block  text-truncate text-primary cursor-pointer"
            to="/admin/landingpage/landingpage-thanh-vien/1"
          >
            {row.user_info.username}
          </Link>
          <p className="font-weight-bold mb-0">
            ID: <span className="text-primary">{row.user_info.ID}</span>
          </p>
        </div>
      </div>
    ),
  },
  {
    name: 'Loại LDP',
    selector: 'type_LDP',
    minWidth: '120px',
    cell: row => (
      <Badge
        color={row.type_LDP === 'KHTN' ? 'success' : 'warning'}
        className="text-white"
        pill
      >
        {row.type_LDP}
      </Badge>
    ),
  },
  {
    name: 'Loại giao dịch',
    selector: 'type',
    sortable: true,
    minWidth: '200px',
    cell: row => <span className="d-block  text-truncate">{row.type} </span>,
  },

  {
    name: 'Phí giao dịch',
    selector: 'price',
    minWidth: '120px',
    cell: row => (
      <span className="d-block  text-truncate">{row.price} BizXu </span>
    ),
  },
  {
    name: 'Ngày thực hiện yêu cầu',
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
