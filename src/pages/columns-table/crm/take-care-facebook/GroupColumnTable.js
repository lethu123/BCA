import {Edit, MoreVertical, Trash, Link as LinkIcon} from 'react-feather'
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap'
import {Link} from 'react-router-dom'
import avatar from 'assets/images/avatars/avatar-blank.png/'
import logo_icon from 'assets/images/datacenter/logo-icon.png'
import moment from 'moment'

// *** Table Intl Column
export const columns = [
  {
    name: 'Facebook BCA',
    selector: 'facebook_BCA',
    sortable: true,
    minWidth: '200px',
    cell: row => (
      <div className="d-flex align-items-center">
        <img
          src={row.facebook_BCA.avatar || logo_icon}
          alt="images"
          className="img-fluid  mr-2"
          width="30px"
          height="30px"
        />
        <div className="user-info text-truncate ml-1">
          <Link
            className="d-block  text-truncate text-primary cursor-pointer"
            to="#"
          >
            {row.facebook_BCA.username}
          </Link>
          <p className="font-weight-bold mb-0">
            UID: <LinkIcon size="12" className="text-success ml-1" />
          </p>
        </div>
      </div>
    ),
  },
  {
    name: 'UID Group',
    selector: 'customer_info',
    sortable: true,
    minWidth: '200px',
    cell: row => (
      <div className="d-flex align-items-center">
        <img
          src={row.customer_info.avatar || avatar}
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
            {row.customer_info.username}
          </Link>
          <p className="font-weight-bold mb-0">
            UID: <LinkIcon size="12" className="text-success ml-1" />
          </p>
        </div>
      </div>
    ),
  },
  {
    name: 'Link tác động',
    selector: 'UID',
    minWidth: '80px',
    cell: row => <LinkIcon size={18} className="text-success" />,
  },
  {
    name: 'Đã tham gia group',
    selector: 'joined',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <Badge
        color={
          row.joined === 'Tham gia'
            ? 'success'
            : row.joined === 'Chờ'
            ? 'warning'
            : 'primary'
        }
        className="text-white"
        pill
      >
        {row.joined}
      </Badge>
    ),
  },
  {
    name: 'Hành động',
    selector: 'action',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <Badge
        color={
          row.action === 'Yêu cầu tham gia'
            ? 'success'
            : row.action === 'Like'
            ? 'warning'
            : 'primary'
        }
        className="text-white"
        pill
      >
        {row.action}
      </Badge>
    ),
  },
  {
    name: 'Loại hành động',
    selector: 'type_action',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <Badge
        color={row.type_action === 'New' ? 'primary' : 'light-secondary'}
        className="text-white"
        pill
      >
        {row.type_action}
      </Badge>
    ),
  },
  {
    name: 'Loại group',
    selector: 'type_group',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <span className="d-block  text-truncate">{row.type_group}</span>
    ),
  },
  {
    name: 'Chiến dịch',
    selector: 'campaign',
    sortable: true,
    minWidth: '120px',
    cell: row => <span className="d-block  text-truncate">{row.campaign}</span>,
  },

  {
    name: 'Ngày lấy dữ liệu',
    selector: 'create_date',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <span className="d-block  text-truncate">
        {moment(row.create_date).format('DD-MM-yyyy')}
      </span>
    ),
  },

  {
    name: 'Ngày thực hiện',
    selector: 'use_date',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <span className="d-block  text-truncate">
        {moment(row.use_date).format('DD-MM-yyyy')}
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
