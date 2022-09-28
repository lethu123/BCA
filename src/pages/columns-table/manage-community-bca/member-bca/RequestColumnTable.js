import {Link2} from 'react-feather'
import moment from 'moment'
import {Link} from 'react-router-dom'
import avatar from 'assets/images/avatars/avatar-blank.png'

// *** Table Intl Column
export const columns = [
  {
    name: 'Mã giao dịch',
    selector: 'code',
    sortable: true,
    minWidth: '100px',
    cell: row => (
      <span className="d-block  text-truncate font-weight-bolder">
        {row.code}{' '}
      </span>
    ),
  },
  {
    name: 'Tên',
    selector: 'request_info',
    sortable: true,
    minWidth: '240px',
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
            className="d-block text-truncate text-primary cursor-pointer"
            to="#"
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
    cell: row => (
      <span className="d-block  text-truncate">{row.category} </span>
    ),
  },
  {
    name: 'Nội dung vi phạm',
    selector: 'content_violations',
    minWidth: '150px',
    cell: row => (
      <span className="d-block  text-truncate">{row.content_violations} </span>
    ),
  },

  {
    name: 'File đính kèm',
    selector: 'file',
    minWidth: '70px',
    cell: row => <Link2 size={20} className="text-primary" />,
  },
  {
    name: 'Ngày thực hiện yêu cầu',
    selector: 'date_use',
    sortable: true,
    minWidth: '170px',
    cell: row => (
      <div>
        <span className="d-block  text-truncate">
          {moment(row.date_use.date).format('DD-MM-yyyy')}
        </span>
        <p className="mb-0" style={{fontSize: '11px'}}>
          Người yêu cầu:{' '}
          <span className="text-primary">{row.date_use.admin}</span>
        </p>
      </div>
    ),
  },
]
