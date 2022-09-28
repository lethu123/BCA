import {Edit, Link2, MoreVertical, Star, Trash} from 'react-feather'
import {
  Badge,
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
    name: 'Tên ',
    selector: 'request_info',
    sortable: true,
    minWidth: '200px',
    cell: row => (
      <div className="d-flex align-items-center">
        <img
          src={row.request_info.avatar || avatar}
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
            {row.request_info.name}
          </Link>
          <p className="font-weight-bold mb-0">
            ID: <span className="text-primary">{row.request_info.ID}</span>
          </p>
        </div>
      </div>
    ),
  },
  {
    name: 'Danh mục',
    selector: 'category',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <Badge color={'light-secondary'} className="text-white" pill>
        {row.category}
      </Badge>
    ),
  },
  {
    name: 'UID',
    selector: 'UID',
    minWidth: '50px',
    cell: row => <Link2 size={18} className="text-primary" />,
  },

  {
    name: 'Ngày tương tác gần nhất',
    selector: 'date_interact',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <span className="d-block  text-truncate">
        {moment(row.date_interact).format('DD-MM-yyyy')}
      </span>
    ),
  },
  {
    name: 'Ngày bán',
    selector: 'date_sale',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <span className="d-block  text-truncate">
        {moment(row.date_sale).format('DD-MM-yyyy')}
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
    name: 'Trạng thái',
    selector: 'status',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <Badge color={'warning'} className="text-white" pill>
        {row.status}
      </Badge>
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
