import {Edit, MoreVertical, Trash} from 'react-feather'
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap'
import moment from 'moment'
import {Link} from 'react-router-dom'
import avatar from 'assets/images/avatars/avatar-blank.png/'

// *** Table Intl Column
export const columns = [
  {
    name: 'ID',
    selector: 'ID',
    sortable: true,
    minWidth: '100px',
    cell: row => (
      <span className="d-block  text-truncate font-weight-bolder">
        {row.ID}
      </span>
    ),
  },
  {
    name: 'Chủ đề email',
    selector: 'topic',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <Link
        to="/admin/email-inbox/inbox"
        className="d-block  text-truncate text-success cursor-pointer"
      >
        {row.topic}
      </Link>
    ),
  },
  {
    name: 'Khách hàng',
    selector: 'customer',
    sortable: true,
    minWidth: '200px',
    cell: row => (
      <div className="d-flex align-items-center">
        <img
          src={row.customer.avatar || avatar}
          alt="images"
          className="img-fluid rounded-circle mr-2"
          width="30px"
          height="30px"
        />
        <div className="user-info text-truncate ml-1">
          <Link
            className="d-block  text-truncate text-primary cursor-pointer"
            to={'#'}
          >
            {row.customer.username}
          </Link>
          <p className="font-weight-bold mb-0">
            ID Biznet: <span className="text-primary">{row.customer.ID}</span>
          </p>
        </div>
      </div>
    ),
  },
  {
    name: 'Người gửi',
    selector: 'user_send',
    sortable: true,
    minWidth: '200px',
    cell: row => (
      <div className="d-flex align-items-center">
        <img
          src={row.user_send.avatar || avatar}
          alt="images"
          className="img-fluid rounded-circle mr-2"
          width="30px"
          height="30px"
        />
        <div className="user-info text-truncate ml-1">
          <Link
            className="d-block  text-truncate text-primary cursor-pointer"
            to={'#'}
          >
            {row.user_send.username}
          </Link>
          <p className="font-weight-bold mb-0">
            ID Biznet: <span className="text-primary">{row.user_send.ID}</span>
          </p>
        </div>
      </div>
    ),
  },

  {
    name: 'Ngày gửi',
    selector: 'send_date',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <span className="d-block  text-truncate">
        {moment(row.send_date).format('MMM Do YY')}
      </span>
    ),
  },
  {
    name: 'Xem mail',
    selector: 'view_mail',
    sortable: true,
    minWidth: '100px',
    cell: row => <span className="d-block text-truncate">{row.view_mail}</span>,
  },
  {
    name: 'Trả lời mail',
    selector: 'rep_mail',
    sortable: true,
    minWidth: '100px',
    cell: row => <span className="d-block text-truncate">{row.rep_mail}</span>,
  },
  {
    name: 'Chiến dịch',
    selector: 'campaign',
    sortable: true,
    minWidth: '100px',
    cell: row => <span className="d-block text-truncate">{row.campaign}</span>,
  },
  {
    name: 'Nguồn',
    selector: 'source',
    sortable: true,
    minWidth: '120px',
    cell: row => <span className="d-block text-truncate">{row.source}</span>,
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
