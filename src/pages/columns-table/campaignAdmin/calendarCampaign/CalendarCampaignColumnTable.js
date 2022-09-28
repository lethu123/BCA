import {Badge} from 'reactstrap'
import moment from 'moment'

// *** Table Intl Column
export const CalendarCampaignColumnTable = [
  {
    name: 'Chiến dịch',
    selector: 'fullnameCampaign',
    maxWidth: '350px',
    cell: row => <p className="text-primary cursor-pointer">CX_Khớp</p>,
  },
  {
    name: 'Trạng thái',
    selector: 'end_date',
    sortable: true,
    maxWidth: '160px',
    cell: row => (
      <Badge color={'success'} className="text-white" pill>
        Hoàn thành
      </Badge>
    ),
  },
  {
    name: 'TG bắt đầu',
    selector: 'start_date',
    sortable: true,
    maxWidth: '140px',
    cell: row => <p>{moment(new Date()).format('LTS')}</p>,
  },

  {
    name: 'TG kết thúc',
    selector: 'end_date',
    maxWidth: '140px',
    cell: row => <p>{moment(new Date()).format('LTS')}</p>,
  },
  {
    name: 'TG thực hiện',
    selector: 'execution_time',
    sortable: true,
    maxWidth: '140px',
    center: true,
    cell: row => <p>5h</p>,
  },
  {
    name: 'Tổng thời gian',
    selector: 'total_time',
    sortable: true,
    maxWidth: '160px',
    center: true,
    cell: row => <p>5 days</p>,
  },
  {
    name: 'Số khách hàng',
    selector: 'customers',
    sortable: true,
    maxWidth: '160px',
    center: true,
    cell: row => <p>500</p>,
  },

  {
    name: 'Loại chiến dịch',
    selector: 'typeCampaign',
    sortable: true,
    maxWidth: '160px',
    cell: row => <Badge color="light-success">Bán hàng</Badge>,
  },
]
