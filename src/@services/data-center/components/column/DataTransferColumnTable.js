import {Star} from 'react-feather'
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
    name: 'Người nhận',
    selector: 'user_reciver_info',
    sortable: true,
    minWidth: '200px',
    cell: row => (
      <div className="d-flex align-items-center">
        <img
          src={row.user_reciver_info.avatar || avatar}
          alt="images"
          className="img-fluid rounded-circle mr-2"
          width="30px"
          height="30px"
        />
        <div className="user-info text-truncate ml-1">
          <Link
            className="d-block  text-truncate text-dark cursor-pointer"
            to={row.user_reciver_info.link || '#'}
          >
            {row.user_reciver_info.username}
          </Link>
          <p className="font-weight-bolder mb-0">
            ID Biznet:{' '}
            <span className="text-primary">{row.user_reciver_info.ID}</span>
          </p>
        </div>
      </div>
    ),
  },
  {
    name: 'Cờ hệ thống',
    selector: 'flag_source',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <span className="d-block  text-truncate">{row.flag_source}</span>
    ),
  },
  {
    name: 'Dữ liệu chuyển',
    selector: 'data_transfer',
    sortable: true,
    minWidth: '200px',
    cell: row => (
      <div className="d-flex align-items-center">
        <img
          src={row.data_transfer.image || avatar1}
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
            {row.data_transfer.username}
          </Link>
          <Rating
            emptySymbol={<Star size={12} fill="#babfc7" stroke="#babfc7" />}
            fullSymbol={<Star size={12} fill="#ff9f43" stroke="#ff9f43" />}
            readonly
            initialRating={row.data_transfer.rating}
            direction={'ltr'}
          />
        </div>
      </div>
    ),
  },
  {
    name: 'Người duyệt',
    selector: 'user_approved_info',
    sortable: true,
    minWidth: '200px',
    cell: row => (
      <div>
        {row.user_approved_info ? (
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
                <span className="text-primary">
                  {row.user_approved_info.ID}
                </span>
              </p>
            </div>
          </div>
        ) : (
          'System'
        )}
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
]
