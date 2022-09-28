import {Link} from 'react-router-dom'
import {subStr} from 'utility/Utils'

// *** Custom Components
import Avatar from '@core/components/avatar'

// *** Renders Client Columns
const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = [
      'light-success',
      'light-danger',
      'light-warning',
      'light-info',
      'light-primary',
      'light-secondary',
    ],
    color = states[stateNum]

  if (row.user_info.avatar.length) {
    return (
      <Avatar
        className="mr-1"
        img={row.user_info.avatar}
        width="32"
        height="32"
      />
    )
  } else {
    return (
      <Avatar
        color={color || 'primary'}
        className="mr-1"
        content={row.user_info.username || 'John Doe'}
        initials
      />
    )
  }
}

// *** Table Intl Column
export const columns = [
  {
    name: 'ID',
    selector: 'id',
    sortable: true,
    maxWidth: '150px'
  },
  {
    name: 'Chủ đề email',
    selector: 'title',
    sortable: true,
    minWidth: '450px',
    cell: row => (
      <Link className="text-hover-primary text-dark" to={`/admin/email/inbox`}>
        {subStr(row.title, 40)}
      </Link>
    ),
  },

  {
    name: 'Khách hàng',
    selector: 'customer',
    sortable: true,
    minWidth: '300px',
    cell: row => (
      <div>
        {row.user_info && (
          <div className="d-flex justify-content-left align-items-center">
            {renderClient(row)}
            <div className="d-flex flex-column">
              <Link to="#" className="user-name text-truncate mb-0">
                <span className="font-weight-bold">
                  {subStr(row.user_info.username)}
                </span>
              </Link>
              <p className="m-0">
                <span> ID: </span>
                <Link to="#">{row.user_info.id}</Link>
              </p>
            </div>
          </div>
        )}
      </div>
    ),
  },

  {
    name: 'Ngày gửi',
    selector: 'send_date',
    sortable: true,
    minWidth: '150px',
  },
  {
    name: 'KH xem email ',
    selector: 'c_viewer',
    sortable: true,
    minWidth: '150px',
  },
  {
    name: 'Chiến dịch',
    selector: 'campain',
    sortable: true,
    minWidth: '150px',
  },
]
