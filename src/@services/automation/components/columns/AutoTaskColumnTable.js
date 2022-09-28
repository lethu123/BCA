import {Badge} from 'reactstrap'
import {Link} from 'react-router-dom'
import moment from 'moment'

// *** Table Intl Column
export const columns = [
  {
    name: 'Tên',
    selector: 'name',
    sortable: true,
    minWidth: '200px',
    maxWidth: '250px',
    cell: row => (
      <Link
        className="text-primary "
        to={`/admin/automation/auto-task/${row.id}`}
      >
        {row.name}
      </Link>
    ),
  },
  {
    name: 'Loại hành động',
    minWidth: '100px',
    maxWidth: '200px',
    cell: row => (
      <Badge color="light-warning">{row.data_field?.[0]?.label}</Badge>
    ),
  },
  {
    name: 'Mô tả',
    selector: 'description',
    minWidth: '200px',
    maxWidth: '250px',
    cell: row => <p>{row.description}</p>,
  },

  {
    name: 'Trạng thái ',
    selector: 'consulting_status_info',
    sortable: true,
    center: true,
    width: '150px',
    cell: row => (
      <Badge
        color={row.status_info.key === 'APPROVED' ? 'primary' : 'warning'}
        className="text-white"
        pill
      >
        {row.status_info.name}
      </Badge>
    ),
  },

  {
    name: 'Tổng số KH',
    selector: 'date_create',
    sortable: true,
    width: '100px',
    cell: row => <p>{row.total_customer}</p>,
  },

  {
    name: 'Thời gian thực hiện',
    selector: 'running_time',
    sortable: true,
    center: true,
    width: '150px',
    cell: row => (
      <span className="d-block  text-truncate">{row.total_day_running}</span>
    ),
  },
  {
    name: 'Ngày tạo',
    selector: 'date_create',
    sortable: true,
    width: '150px',
    cell: row => <p>{moment(row.created_date).format('DD/MM/YYYY')}</p>,
  },
]
