import {Badge} from 'reactstrap'
import moment from 'moment'

// *** Table Intl Column
export const CalendarCampaignColumnTable = [
  {
    name: 'Chiến dịch',
    selector: 'title',
    minWidth: '200px',
    cell: row => <p className="text-wrap">{row.title}</p>,
  },
  {
    name: 'Mô tả',
    selector: 'description',
    minWidth: '200px',
    maxWidth: '400px',
    cell: row => <p className="text-wrap">{row.title}</p>,
  },
  {
    name: 'Trạng thái',
    selector: 'end_date',
    maxWidth: '160px',
    cell: row => (
      <Badge
        color={
          row.status_info && row.status_info.key === 'APPROVED'
            ? 'light-primary'
            : 'light-warning'
        }
        className="text-white"
        pill
      >
        {row.status_info?.name}
      </Badge>
    ),
  },
  {
    name: 'Ngày bắt đầu',
    selector: 'start_date',
    sortable: true,
    maxWidth: '140px',
    cell: row => <p>{moment(row.start_date).format('L')}</p>,
  },
  {
    name: 'Ngày kết thúc',
    selector: 'end_date',
    maxWidth: '140px',
    cell: row => <p>{moment(row.end_date).format('L')}</p>,
  },
  {
    name: 'Loại chiến dịch',
    maxWidth: '160px',
    cell: row => <Badge color="danger">{row.campain_type_info?.name}</Badge>,
  },
  {
    name: 'Loại lịch',
    maxWidth: '160px',
    cell: row => <p className="text-uppercase">{row.type_loop_info?.name}</p>,
  },
]
