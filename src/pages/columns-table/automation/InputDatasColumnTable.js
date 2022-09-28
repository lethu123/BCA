import {Link} from 'react-router-dom'
import Avatar from '@core/components/avatar'
import moment from 'moment'

// ** assets
import avatar from 'assets/images/avatars/avatar-blank.png'

export const InputDatasColumnTable = [
  {
    name: 'ID',
    selector: 'id',
    minWidth: '30px',
    maxWidth: '50px',
    sortable: true,
  },
  {
    name: 'Tên',
    selector: 'name',
    minWidth: '60px',
    maxWidth: '200px',
    cell: row => <div className="text-truncate text-primary">{row.name}</div>,
  },
  {
    name: 'Mô tả',
    selector: 'description',
    minWidth: '100px',
    maxWidth: '300px',
  },
  {
    name: 'Người tạo',
    selector: 'username',
    cell: row => (
      <div className="d-flex justify-content-left align-items-center">
        <Avatar className="mr-1" img={avatar} width="32" height="32" />
        <div className="d-flex flex-column">
          <Link to="#" className="user-name text-truncate mb-0">
            <span className="font-weight-bold">{row.user}</span>
          </Link>
          <span>
            <small className="mr-2">ID</small>
            <small className="text-truncate text-muted mb-0">{row.uid}</small>
          </span>
        </div>
      </div>
    ),
  },
  {
    name: 'Ngày tạo',
    cell: row => (
      <p>{row.date_create && moment(row.date_create).format('L')}</p>
    ),
  },
]
