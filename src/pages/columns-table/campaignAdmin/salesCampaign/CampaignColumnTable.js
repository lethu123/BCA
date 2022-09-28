import moment from 'moment'
import {Badge} from 'reactstrap'
export const CampaignColumnTable = [
  {
    name: 'Mô tả',
    minWidth: '250px',
    selector: 'description',
    cell: row => <p className="mb-0">{row?.description}</p>,
  },
  {
    name: 'Trạng thái',
    minWidth: '120px',
    maxWidth: '120px',
    selector: 'create_date',
    cell: row => (
      <Badge
        color={
          row.status_info?.key === 'PENDING'
            ? 'light-secondary'
            : row.status_info?.key === 'RUNNING'
            ? 'light-warning'
            : row.status_info?.key === 'COMPLETE'
            ? 'light-primary'
            : 'light-danger'
        }
        className="badge-glow"
      >
        {row.status_info?.name || 'Chưa có dữ liệu'}
      </Badge>
    ),
  },
  {
    name: 'Loại chiến dịch',
    minWidth: '150px',
    maxWidth: '150px',
    selector: 'create_date',
    cell: row => (
      <Badge
        color={row.campain_type_info?.key === 'FB' ? 'info' : 'danger'}
        className="badge-glow"
      >
        {row.campain_type_info?.name || 'Chưa có dữ liệu'}
      </Badge>
    ),
  },
  {
    name: 'Ngày bắt đầu',
    minWidth: '120px',
    maxWidth: '160px',
    selector: 'start_date',
    sortable: true,
    cell: row => (
      <p className="mb-0">{moment(row.start_date).format('DD-MM-YYYY')}</p>
    ),
  },
  {
    name: 'Ngày kết thúc',
    maxWidth: '160px',
    minWidth: '120px',
    selector: 'end_date',
    sortable: true,
    cell: row => (
      <p className="mb-0">{moment(row.end_date).format('DD-MM-YYYY')}</p>
    ),
  },
  {
    name: 'Ngày dừng chiến dịch',
    maxWidth: '160px',
    minWidth: '120px',
    selector: 'stop_date',
    sortable: true,
    cell: row => (
      <p className="mb-0">
        {row.stop_date && moment(row.stop_date).format('DD-MM-YYYY')}
      </p>
    ),
  },
]
