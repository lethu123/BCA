import {Badge} from 'reactstrap'
import moment from 'moment'
import avatar1 from 'assets/images/avatars/9.png'
import avatar2 from 'assets/images/avatars/10.png'

// *** Table Intl Column
export const RequestAccessColumnTable = [
  {
    name: 'ID',
    selector: 'id',
    maxWidth: '80px',
    cell: row => <p>1234</p>,
  },
  {
    name: 'Thành viên đại lý mới',
    minWidth: '200px',
    maxWidth: '220px',
    cell: row => (
      <div className="d-flex align-items-center ">
        <img
          src={avatar1}
          alt="images"
          style={{width: 40, height: 40, borderRadius: '50%', marginRight: 7}}
        />
        <div>
          <p className="mb-0 text-primary cursor-pointer">Emily Clark</p>
          <small>ID Biznet: 393823</small>
        </div>
      </div>
    ),
  },
  {
    name: 'Người được mời',
    minWidth: '200px',
    maxWidth: '220px',
    cell: row => (
      <div className="d-flex align-items-center ">
        <img
          src={avatar2}
          alt="images"
          style={{width: 40, height: 40, borderRadius: '50%', marginRight: 7}}
        />
        <div>
          <p className="mb-0 text-primary cursor-pointer">Nguyễn Khắc Vũ</p>
        </div>
      </div>
    ),
  },
  {
    name: 'Số điện thoại',
    maxWidth: '120px',
    cell: row => <p>0399652356</p>,
  },
  {
    name: 'Email',
    minWidth: '220px',
    maxWidth: '250px',
    center: true,
    cell: row => <p>khacvu0505@gmail.com</p>,
  },

  {
    name: 'Ngày đăng ký',
    selector: 'signup_date',
    sortable: true,
    minWidth: '150px',
    maxWidth: '160px',
    cell: row => <p>{moment(new Date()).format('DD-MM-YYYY')}</p>,
  },
  {
    name: 'Ngày mời',
    selector: 'invite_date',
    sortable: true,
    maxWidth: '130px',
    cell: row => <p>{moment(new Date()).format('DD-MM-YYYY')}</p>,
  },
  {
    name: 'Trạng thái',
    selector: 'status',
    minWidth: '120px',
    maxWidth: '140px',
    cell: row => (
      <Badge color={'danger'} className="text-white" pill>
        Mời
      </Badge>
    ),
  },
]
