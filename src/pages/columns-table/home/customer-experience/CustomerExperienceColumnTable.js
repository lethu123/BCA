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
    name: 'Tên',
    selector: 'post_info',
    sortable: true,
    minWidth: '220px',
    cell: row => (
      <div className="d-flex align-items-center">
        <img
          src={row.post_info.avatar || avatar}
          alt="images"
          className="img-fluid rounded-circle mr-2"
          width="30px"
          height="30px"
        />
        <div className="user-info text-truncate ml-1">
          <Link
            className="d-block  text-truncate text-primary cursor-pointer"
            to="/admin/kinh-nghiem-khach-hang/post/1"
          >
            {row.post_info.name}
          </Link>
          <p className="font-weight-bold mb-0">
            URL: <span className="text-primary">{row.post_info.ID}</span>
          </p>
        </div>
      </div>
    ),
  },
  {
    name: 'Status',
    selector: 'type',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <span className="d-block  text-truncate font-weight-bolder">
        {row.type}
      </span>
    ),
  },
  {
    name: 'Số người tiếp cận',
    selector: 'number_people',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <span className="d-block  text-truncate text-primary">
        {row.number_people}
      </span>
    ),
  },
  {
    name: 'Số lần nhấp vào bài viết',
    selector: 'post_click',
    minWidth: '150px',
    cell: row => (
      <span className="d-block text-primary text-truncate">
        {row.post_click}
      </span>
    ),
  },
  {
    name: 'UID mới',
    selector: 'new_UID',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <span className="d-block text-primary  text-truncate">{row.new_UID}</span>
    ),
  },
  {
    name: 'Tỉ lệ chuyển đổi',
    selector: 'percent',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <span className="d-block  text-truncate ">{row.percent || '-'}</span>
    ),
  },
  {
    name: 'Trạng thái',
    selector: 'status_info',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <div>
        <Badge
          color={
            row.status_info.status === 'Đang hoạt động' ? 'success' : 'warning'
          }
          className="text-white"
          pill
        >
          {row.status_info.status}
        </Badge>
        <span className="d-block  text-truncate ">
          {' '}
          {moment(row.status_info.date).format('DD-MM-yyyy')}
        </span>
      </div>
    ),
  },
  {
    name: 'Ngày kết thúc',
    selector: 'date_finish',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <span className="d-block  text-truncate">
        {moment(row.date_finish).format('DD-MM-yyyy')}
      </span>
    ),
  },
  {
    name: 'Ngày cập nhật',
    selector: 'date_update',
    sortable: true,
    minWidth: '200px',
    cell: row => (
      <div>
        <span className="d-block  text-truncate">
          {moment(row.date_update.date).format('DD-MM-yyyy')}
        </span>
        <p className="mb-0" style={{fontSize: '11px'}}>
          Chỉnh sửa bởi:{' '}
          <span className="text-primary  text-truncate">
            {row.date_update.admin}
          </span>
        </p>
      </div>
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
