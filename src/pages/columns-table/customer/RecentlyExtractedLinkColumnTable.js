import {Badge} from 'reactstrap'
import {Link} from 'react-router-dom'
import {subStr, formatViDate} from 'utility/Utils'

// *** Table Intl Column
export const columns = [
  {
    name: 'Link',
    selector: 'name',
    sortable: true,
    minWidth: '420px',
    cell: row => (
      <div className="py-2">
        <p
          className="m-0 font-weight-bold"
          style={{fontFamily: 'sans-serif', fontSize: '16px'}}
        >
          <Link
            className="text-hover-primary text-dark"
            to={`/admin/kinh-nghiem-khach-hang/${row.type}/${row.id}`}
          >
            {subStr(row.name, 40)}
          </Link>
        </p>
        <p>
          <a
            href={row.link}
            target="_blank"
            rel="noreferrer"
            className="text-muted cursor-pointer"
          >
            {row.link}
          </a>
        </p>

        <p className="m-0">
          Thêm bới{' '}
          <Link to="#"> {row.user_info && row.user_info.username} </Link> -{' '}
          {row.update_time && formatViDate(row.update_time)}
        </p>
      </div>
    ),
  },
  // {
  //   name: 'Loại ',
  //   minWidth: '100px',
  //   cell: row => (
  //     <Badge color="light-info" className="text-white mr-2" pill>
  //       {row.type}
  //     </Badge>
  //   ),
  // },

  {
    name: 'UID ',
    selector: 'c_uid',
    sortable: true,
    minWidth: '100px',
    cell: row => <span> {row.c_uid}</span>,
  },

  {
    name: 'Kết quả dữ liệu',
    selector: 'result',
    sortable: true,
    minWidth: '150px',
    cell: row => <span> {row.result} </span>,
  },
  {
    name: 'Trạng thái',
    selector: 'status_info',
    minWidth: '120px',
    cell: row => {
      return (
        <Badge
          color={
            row.status === 0
              ? 'warning'
              : row.status === 2
              ? 'primary'
              : 'danger'
          }
          pill
        >
          {row.status_info && row.status_info.name}
        </Badge>
      )
    },
  },
]
