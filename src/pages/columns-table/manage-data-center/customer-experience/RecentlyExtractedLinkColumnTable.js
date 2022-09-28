import {Badge} from 'reactstrap'
import {Link} from 'react-router-dom'
import {subStr} from 'utility/Utils'

// *** Table Intl Column
export const columns = [
  {
    name: 'Link',
    selector: 'name',
    sortable: true,
    minWidth: '400px',
    cell: row => (
      <div className="py-2">
        <p className="m-0 font-weight-bold">
          <Badge color="light-danger" className="text-white mr-2" pill>
            {row.type}
          </Badge>
          <Link
            className="text-hover-primary text-dark"
            to={`/admin/kinh-nghiem-khach-hang/group/${row.id}`}
          >
            {subStr(row.group_name, 40)}
          </Link>
        </p>

        <p className="m-0">
          Thêm bới <Link to="#"> {row.creator && row.creator.username} </Link> -{' '}
          {row.time}
        </p>
      </div>
    ),
  },

  {
    name: 'UID ',
    selector: 'c_uid',
    sortable: true,
    minWidth: '120px',
    cell: row => <span> {row.c_uid}K</span>,
  },

  {
    name: 'Kết quả',
    selector: 'result',
    sortable: true,
    minWidth: '120px',
    cell: row => <span> {row.result} Dữ liệu</span>,
  },
  {
    name: 'Trạng thái',
    selector: 'status',
    minWidth: '150px',
    cell: row => {
      return (
        <Badge
          color={
            row.status === 'Đang kiểm tra'
              ? 'warning'
              : row.status === 'Đang hoạt động'
              ? 'success'
              : 'primary'
          }
          pill
          className="text-white"
        >
          {row.status}
        </Badge>
      )
    },
  },
]
