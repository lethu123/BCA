import {MoreVertical, Star, Trash} from 'react-feather'
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap'
import {Link} from 'react-router-dom'
import moment from 'moment'
import Rating from 'react-rating'

//image
import avatar from 'assets/images/avatars/avatar-blank.png'
import avatar1 from 'assets/images/avatars/1-small.png'

// *** Table Intl Column
export const columns = [
  {
    name: 'Yêu cầu',
    selector: 'request',
    sortable: true,
    minWidth: '220px',
    cell: row => (
      <div className="d-flex align-items-center">
        <img
          src={row.request.image || avatar1}
          alt="images"
          className="img-fluid rounded-circle mr-2"
          width="30px"
          height="30px"
        />
        <div className="user-info text-truncate ml-1">
          <Link
            className="d-block  text-truncate  text-dark   cursor-pointer"
            to={row.request.link || '#'}
          >
            {row.request.title}
          </Link>
          <p className="font-weight-bolder mb-0">
            ID: <span className="text-primary">{row.request.ID}</span>
          </p>
        </div>
      </div>
    ),
  },
  {
    name: 'Người thực hiện',
    selector: 'user_info',
    sortable: true,
    minWidth: '220px',
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
            className="d-block  text-truncate text-dark cursor-pointer"
            to={row.user_info.link || '#'}
          >
            {row.user_info.username}
          </Link>
          <p className="font-weight-bolder mb-0">
            ID Biznet: <span className="text-primary">{row.user_info.ID}</span>
          </p>
        </div>
      </div>
    ),
  },
  {
    name: 'Dữ liệu xóa',
    selector: 'delete',
    sortable: true,
    minWidth: '220px',
    cell: row => (
      <div className="d-flex align-items-center">
        <img
          src={row.delete.image || avatar1}
          alt="images"
          className="img-fluid rounded-circle mr-2"
          width="30px"
          height="30px"
        />
        <div className="user-info text-truncate ml-1">
          <Link
            className="d-block  text-truncate text-dark cursor-pointer"
            to={'#'}
          >
            {row.delete.username}
          </Link>
          <Rating
            emptySymbol={<Star size={12} fill="#babfc7" stroke="#babfc7" />}
            fullSymbol={<Star size={12} fill="#ff9f43" stroke="#ff9f43" />}
            readonly
            initialRating={row.delete.rating}
            direction={'ltr'}
          />
        </div>
      </div>
    ),
  },

  {
    name: 'Ngày yêu cầu',
    selector: 'date_request',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <span className="d-block  text-truncate">
        {moment(row.date_request).format('DD-MM-yyyy')}
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
