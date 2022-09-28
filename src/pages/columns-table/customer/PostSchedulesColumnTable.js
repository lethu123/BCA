import {Badge} from 'reactstrap'
import {Link} from 'react-router-dom'

// *** Table Intl Column
export const columns = [
  {
    name: 'Tên bài viêt',
    selector: 'fullname',
    sortable: true,
    minWidth: '200px',
    cell: row => (
      <Link className="d-block  text-truncate text-primary" to="#">
        {row.topic}
      </Link>
    ),
  },

  {
    name: 'Mẫu tin',
    selector: 'c_records',
    sortable: true,
    minWidth: '100px',
    cell: row => (
      <span className="d-block  text-truncate">{row.c_records}</span>
    ),
  },

  {
    name: 'Thời gian post',
    selector: 'hours_post',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <span className="d-block  text-truncate">{row.hours_post}</span>
    ),
  },
  {
    name: 'Ngày bắt đầu',
    selector: 'start_date',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <span className="d-block  text-truncate">{row.start_date}</span>
    ),
  },
  {
    name: 'Ngày kết thúc',
    selector: 'end_date',
    sortable: true,
    minWidth: '150px',
    cell: row => <span className="d-block  text-truncate">{row.end_date}</span>,
  },
  {
    name: 'Loại lịch',
    selector: 'type',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <Badge
        color={
          row.type === 'Daily'
            ? 'warning'
            : row.type === 'Weekly'
            ? 'danger'
            : 'info'
        }
        className="text-white"
        pill
      >
        {row.type}
      </Badge>
    ),
  },
  {
    name: 'Trạng thái',
    selector: 'status',
    sortable: true,
    minWidth: '100px',
    cell: row => (
      <span className="switch switch-md">
        <label>
          <input type="checkbox" name="select" />
          <span></span>
        </label>
      </span>
    ),
  },
]
