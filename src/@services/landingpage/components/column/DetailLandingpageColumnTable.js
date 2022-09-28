import {Edit, Link2, MoreVertical, Trash} from 'react-feather'
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap'
import {Link} from 'react-router-dom'
import avatar from 'assets/images/avatars/avatar-blank.png/'
import moment from 'moment'

// *** Table Intl Column
export const columns = [
  {
    name: 'Tên ứng viên',
    selector: 'user_info',
    sortable: true,
    minWidth: '200px',
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
            to={'/admin/thong-tin-ung-vien'}
          >
            {row.user_info.username}
          </Link>
          <p className="font-weight-bold mb-0">
            ID Biznet: <span className="text-primary">{row.user_info.ID}</span>
          </p>
        </div>
      </div>
    ),
  },
  {
    name: 'Số điện thoại',
    selector: 'phoneNumber',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <span className="d-block  text-truncate">{row.phoneNumber}</span>
    ),
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
    minWidth: '170px',
    cell: row => <span className="d-block  text-truncate">{row.email}</span>,
  },
  {
    name: 'UID',
    selector: 'UID',
    minWidth: '50px',
    cell: row => <Link2 size={18} className="text-primary" />,
  },

  {
    name: 'Cờ thành viên',
    selector: 'member_flag',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <span className="d-block  text-truncate text-center w-100">
        {row.member_flag}
      </span>
    ),
  },

  {
    name: 'Ngày lấy tương tác gần nhất',
    selector: 'date_start',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <span className="d-block  text-truncate">
        {moment(row.date_start).format('DD-MM-yyyy')}
      </span>
    ),
  },
  {
    name: 'Ngày đăng ký',
    selector: 'date_sigin',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <span className="d-block  text-truncate">
        {moment(row.date_sigin).format('DD-MM-yyyy')}
      </span>
    ),
  },

  {
    name: 'Thao tác',
    allowOverflow: true,
    cell: row => {
      return (
        <div className="d-flex">
          <UncontrolledDropdown>
            <DropdownToggle className="pr-1" tag="span">
              <MoreVertical size={15} />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <Edit size={15} />
                <span className="align-middle ml-50">Edit</span>
              </DropdownItem>
              <DropdownItem>
                <Trash size={15} />
                <span className="align-middle ml-50">Delete</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      )
    },
  },
]
