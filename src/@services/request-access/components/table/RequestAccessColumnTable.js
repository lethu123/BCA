import Avatar from '@core/components/avatar'
import moment from 'moment'
import {Link} from 'react-router-dom'
import {Badge} from 'reactstrap'
// import {Link} from 'react-router-dom'
// *** Custom Components

// *** Table Intl Column
export const columns = [
  {
    name: 'Thành viên',
    selector: 'user_info',
    sortable: true,
    minWidth: '250px',
    cell: row => (
      <div className="d-flex justify-content-left align-items-center">
        {row.profile ? (
          <div className="d-flex justify-content-left align-items-center">
            <Avatar
              color="primary"
              content={row.profile.name || 'Chưa có dữ liệu'}
              initials
              className="mr-1"
              size="lg"
            />

            <div className="d-flex flex-column">
              <Link to="#" className="user-name mb-0">
                <span className="font-weight-bold">
                  {row.profile.name || 'Chưa có dữ liệu'}
                </span>
              </Link>

              <small className="text-truncate text-muted mb-0">
                ID: {row.profile.data_is || 'Chưa có dữ liệu'}
              </small>
            </div>
          </div>
        ) : (
          '---'
        )}
      </div>
    ),
  },

  {
    name: 'Số điện thoại',
    selector: 'phone_number',
    minWidth: '150px',
    center: true,
    cell: row => (
      <span className="d-block  text-truncate">
        {row.profile ? <div>{row.profile.phone_number}</div> : '---'}
      </span>
    ),
  },

  {
    name: 'Email',
    selector: 'email',
    sortable: true,
    minWidth: '180px',
    cell: row => <span className="d-block  text-truncate">{row.ref_to}</span>,
  },
  // {
  //   name: 'Ngày đăng kí',
  //   selector: 'address',
  //   center: true,
  //   minWidth: '150px',
  //   cell: row => <span className="d-block  text-truncate">---</span>,
  // },
  {
    name: 'Ngày mời',
    selector: 'address',
    center: true,
    cell: row => (
      <span className="d-block  text-truncate">
        {moment(row.created_at).format('DD-MM-YYYY')}
      </span>
    ),
  },
  {
    name: 'Trạng thái',
    selector: 'is_accept',
    center: true,
    cell: row => (
      <div className="py-2">
        {row.is_accept ? (
          <Badge color={'success'} className="text-white" pill>
            Accepted
          </Badge>
        ) : (
          <Badge color={'warning'} className="text-white" pill>
            pending
          </Badge>
        )}
      </div>
    ),
  },
  {
    name: 'Phân loại',
    selector: 'data_receive_stage',
    center: true,
    cell: row => (
      <div className="py-2">
        {row.data_receive_stage === 'RECV_DATA' ? (
          <Badge color={'warning'} className="text-white" pill>
            Nhận data
          </Badge>
        ) : row.data_receive_stage === 'RECV_BIZXU' ? (
          <Badge color={'warning'} className="text-white" pill>
            Nhận BizXu
          </Badge>
        ) : (
          '---'
        )}
      </div>
    ),
  },
]
