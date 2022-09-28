import {Badge} from 'reactstrap'
import moment from 'moment'
import avatar from 'assets/images/avatars/avatar-blank.png/'

// *** Table Intl Column
export const NotificationColumnTable = [
  {
    name: 'Tên công việc',
    selector: 'namWork',
    maxWidth: '250px',
    cell: row => (
      <p className="text-primary text-truncate cursor-pointer">
        Lới trainning khởi nghiệp
      </p>
    ),
  },
  {
    name: 'Người mời',
    selector: 'invite',
    sortable: true,
    maxWidth: '160px',
    cell: row => (
      <div className="d-flex py-2">
        <img
          src={avatar}
          alt="images"
          style={{width: 40, height: 40, borderRadius: '50%', marginRight: 10}}
        />
        <div>
          <p className="mb-0 text-primary font-weight-bolder cursor-pointer">
            Marry Jane
          </p>
          <small>ID Biznet: 358123</small>
        </div>
      </div>
    ),
  },

  {
    name: 'TG bắt đầu',
    selector: 'start_time',
    sortable: true,
    maxWidth: '150px',
    cell: row => <p>{moment(new Date()).format('DD-MM-YYYY HH:MM:ss')}</p>,
  },
  {
    name: 'TG kết thúc',
    selector: 'start_date',
    sortable: true,
    maxWidth: '150px',
    cell: row => <p>{moment(new Date()).format('DD-MM-YYYY HH:MM:ss')}</p>,
  },
  {
    name: 'Ngày tạo',
    selector: 'created_date',
    sortable: true,
    maxWidth: '160px',
    cell: row => <p>{moment(new Date()).format('DD-MM-YYYY')}</p>,
  },
  {
    name: 'Trạng thái xác nhận',
    selector: 'status',
    maxWidth: '160px',
    cell: row => (
      <Badge color={'primary'} className="text-white" pill>
        Hoàn thành
      </Badge>
    ),
  },
  {
    name: 'Trạng thái công việc',
    selector: 'statusWork',
    maxWidth: '160px',
    cell: row => (
      <Badge color={'light-primary'} className="text-white" pill>
        Hoàn thành
      </Badge>
    ),
  },
]
