import {Star} from 'react-feather'
import {Badge} from 'reactstrap'
import {Link} from 'react-router-dom'
import avatar from 'assets/images/avatars/avatar-blank.png/'
import moment from 'moment'
import Rating from 'react-rating'
import avatar1 from 'assets/images/avatars/1-small.png/'

// *** Table Intl Column

export const columns = [
  {
    name: 'Yêu cầu',
    selector: 'request',
    sortable: true,
    minWidth: '200px',
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
    name: 'Người yêu cầu',
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
    name: 'Dữ liệu yêu cầu hoàn',
    selector: 'data_return',
    sortable: true,
    minWidth: '200px',
    cell: row => (
      <div className="d-flex align-items-center">
        <img
          src={row.data_return.image || avatar1}
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
            {row.data_return.username}
          </Link>
          <Rating
            emptySymbol={<Star size={12} fill="#babfc7" stroke="#babfc7" />}
            fullSymbol={<Star size={12} fill="#ff9f43" stroke="#ff9f43" />}
            readonly
            initialRating={row.data_return.rating}
            direction={'ltr'}
          />
        </div>
      </div>
    ),
  },
  {
    name: 'Dữ liệu tồn tại trước',
    selector: 'data_before',
    sortable: true,
    minWidth: '200px',
    cell: row => (
      <div className="d-flex align-items-center">
        <img
          src={row.data_before.image || avatar1}
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
            {row.data_before.username}
          </Link>
          <Rating
            emptySymbol={<Star size={12} fill="#babfc7" stroke="#babfc7" />}
            fullSymbol={<Star size={12} fill="#ff9f43" stroke="#ff9f43" />}
            readonly
            initialRating={row.data_before.rating}
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
    name: 'Người duyệt',
    selector: 'user_approved_info',
    sortable: true,
    minWidth: '200px',
    cell: row => (
      <div className="d-flex align-items-center">
        <img
          src={row.user_approved_info.avatar || avatar}
          alt="images"
          className="img-fluid rounded-circle mr-2"
          width="30px"
          height="30px"
        />
        <div className="user-info text-truncate ml-1">
          <Link
            className="d-block  text-truncate text-dark cursor-pointer"
            to={row.user_approved_info.link || '#'}
          >
            {row.user_approved_info.username}
          </Link>
          <p className="font-weight-bolder mb-0">
            ID Biznet:{' '}
            <span className="text-primary">{row.user_approved_info.ID}</span>
          </p>
        </div>
      </div>
    ),
  },
  {
    name: 'Kiểu',
    selector: 'type',
    sortable: true,
    minWidth: '100px',
    cell: row => (
      <Badge color={'danger'} className="text-white" pill>
        {row.type}
      </Badge>
    ),
  },
]
