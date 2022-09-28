import {Edit, MoreVertical, Trash} from 'react-feather'
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
    name: 'Mã giao dịch',
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
            to={''}
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
    minWidth: '150px',
    cell: row => <span className="d-block  text-truncate">{row.category}</span>,
  },
  {
    name: 'Loại giao dịch',
    selector: 'type',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <Badge color={'light-secondary'} className="text-white" pill>
        {row.type}
      </Badge>
    ),
  },
  {
    name: 'Đơn giá',
    selector: 'price',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <span className="d-block font-weight-bold text-truncate">
        {row.price} đ
      </span>
    ),
  },
  {
    name: 'Ngày thực hiện yêu cầu',
    selector: 'date_start',
    sortable: true,
    minWidth: '120px',
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

  {
    name: 'Trạng Thái',
    selector: 'status',
    sortable: true,
    maxWidth: '120px',
    cell: row => (
      <Badge
        color={
          row.status === 'Đang xử lý'
            ? 'warning'
            : row.status === 'Đã duyệt'
            ? 'success'
            : 'light-secondary'
        }
        className="text-white"
        pill
      >
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
