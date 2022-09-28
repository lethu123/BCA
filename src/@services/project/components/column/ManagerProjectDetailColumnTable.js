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
import Rating from 'react-rating'

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
    name: 'Giá theo nhãn',
    selector: 'price',
    sortable: true,
    minWidth: '100px',
    cell: row => (
      <span className="d-block font-weight-bold text-truncate">
        {row.price}
      </span>
    ),
  },
  {
    name: 'Khách hàng tiềm năng',
    selector: 'leads',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <Badge
        color={
          row.leads === 'Quan tâm'
            ? 'primary'
            : row.leads === 'Yêu thích'
            ? 'danger'
            : 'warning'
        }
        className="text-white"
        pill
      >
        {row.leads}
      </Badge>
    ),
  },
  {
    name: 'Chân dung khách hàng',
    selector: 'rating',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <Rating
        emptySymbol={<Star size={14} fill="#babfc7" stroke="#babfc7" />}
        fullSymbol={<Star size={14} fill="#ff9f43" stroke="#ff9f43" />}
        readonly
        initialRating={row.rating}
        direction={'ltr'}
      />
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
          row.status === 'Chưa bán'
            ? 'warning'
            : row.status === 'Đã bán'
            ? 'primary'
            : 'danger'
        }
        className="text-white"
        pill
      >
        {row.status}
      </Badge>
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
    name: 'Ngày bán',
    selector: 'date_buy',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <span className="d-block  text-truncate">
        {moment(row.date_buy).format('DD-MM-yyyy')}
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
