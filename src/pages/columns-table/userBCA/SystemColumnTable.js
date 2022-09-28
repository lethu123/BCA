import {Badge} from 'reactstrap'
import avatar from 'assets/images/avatars/avatar-blank.png/'
import moment from 'moment'

// *** Table Intl Column
export const SystemColumnTable = [
  {
    name: 'Người dùng',
    selector: 'user',
    sortable: true,
    maxWidth: '250px',
    cell: row => (
      <div className="d-flex py-2">
        <img
          src={avatar}
          alt="images"
          style={{width: 40, height: 40, borderRadius: '50%', marginRight: 10}}
        />
        <div>
          <p className="mb-0 text-primary font-weight-bolder cursor-pointer">
            Emily Clark
          </p>
          <small>ID Biznet: 393823</small>
        </div>
      </div>
    ),
  },

  {
    name: 'Cấp đại lý',
    selector: 'dai_ly',
    center: true,
    maxWidth: '120px',
    cell: row => <p>UM</p>,
  },

  {
    name: 'Trạng thái',
    selector: 'status',
    sortable: true,
    maxWidth: '150px',
    cell: row => (
      <Badge color="danger" outline className="text-white" pill>
        Đang chạy
      </Badge>
    ),
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
    maxWidth: '250px',
    cell: row => <p className="text-truncate">khacvu0505@gmail.com</p>,
  },
  {
    name: 'Phone',
    selector: 'phone',
    sortable: true,
    maxWidth: '150px',
    cell: row => <p>0399652356</p>,
  },
  {
    name: 'QL trực tiếp',
    selector: 'manage',
    sortable: true,
    maxWidth: '250px',
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
    name: 'Ngày gia nhập',
    selector: 'join_date',
    sortable: true,
    maxWidth: '150px',
    cell: row => <p>{moment(new Date()).format('DD/MM/YYYY')}</p>,
  },
]
