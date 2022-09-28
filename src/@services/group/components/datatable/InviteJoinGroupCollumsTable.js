import {Link} from 'react-router-dom'
import moment from 'moment'
import img from 'assets/images/avatars/1.png'

// *** Table Intl Column
export const Columns = [
  {
    name: 'nhóm',
    selector: 'group',
    minWidth: '200px',
    cell: row => (
      <div className="d-flex align-items-center">
        <img
          src={row.group?.group_avatar || img}
          alt="avatar"
          style={{width: 40, height: 40, borderRadius: '50%', marginRight: 10}}
          onError={e => {
            e.target.onerror = null
            e.target.src = img
          }}
        />
        <div>
          <Link
            to={`/group/${row.group?._id}`}
            className="cursor-pointer text-primary mb-0"
          >
            {row.group?.group_name}
          </Link>
        </div>
      </div>
    ),
  },

  {
    name: 'Ngày gửi yêu cầu',
    selector: 'date_created',
    sortable: true,
    width: '150px',
    center: true,
    cell: row => <p>{moment(new Date()).format('DD/MM/YYYY')}</p>,
  },
]
