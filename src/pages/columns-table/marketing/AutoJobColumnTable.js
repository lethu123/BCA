import {Link} from 'react-router-dom'
import moment from 'moment'
import {Badge} from 'reactstrap'

// *** Table Intl Column
export const columns = [
  {
    name: 'Tên',
    selector: 'name',
    sortable: true,
    minWidth: '200px',
    maxidth: '250px',
    cell: row => (
      <Link className="d-block   text-primary " to="#">
        {row.name}
      </Link>
    ),
  },
  {
    name: 'Bảng dữ liệu',
    width: '150px',
    center: true,
    cell: row => (
      <Badge
        color={
          row.data_field?.[0].value === 'cx' ? 'light-warning ' : 'light-info'
        }
      >
        {row.data_field?.[0].value === 'cx'
          ? 'Khai thác KHTN '
          : 'Facebook'}
      </Badge>
    ),
  },
  {
    name: 'Mô tả',
    minWidth: '300px',
    maxidth: '350px',
    cell: row => <p>{row.description}</p>,
  },
  {
    name: 'Tổng KH',
    selector: 'total_customer',
    sortable: true,
    center: true,
    width: '100px',
    cell: row => (
      <span className="d-block  text-truncate">{row.total_customer}</span>
    ),
  },
  {
    name: 'Trạng thái ',
    selector: 'consulting_status_info',
    sortable: true,
    center: true,
    width: '100px',
    cell: row => (
      <Badge color={'warning'} className="text-white" pill>
        {row.status_info?.name}
      </Badge>
    ),
  },
  {
    name: 'Số ngày thực hiện',
    selector: 'date_running',
    sortable: true,
    center: true,
    width: '150px',
    cell: row => (
      <span className="d-block  text-truncate">{row.total_day_running}</span>
    ),
  },
  {
    name: 'Ngày tạo',
    sortable: true,
    width: '150px',
    cell: row => (
      <span className="d-block  text-truncate">
        {moment(row.created_date).format('DD/MM/YYYY')}
      </span>
    ),
  },
]
