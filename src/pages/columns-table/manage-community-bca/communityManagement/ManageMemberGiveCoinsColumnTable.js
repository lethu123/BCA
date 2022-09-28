import moment from 'moment'
import {Badge} from 'reactstrap'
import avatar1 from 'assets/images/avatars/9.png'
import avatar2 from 'assets/images/avatars/10.png'

// *** Table Intl Column
export const ManageMemberGiveCoinsColumnTable = [
  {
    name: 'ID bài đăng',
    selector: 'id',
    maxWidth: '150px',
    cell: row => <p>#5336</p>,
  },

  {
    name: 'Người tặng',
    selector: 'creator',
    minWidth: '200px',
    maxWidth: '250px',
    cell: row => (
      <div className="d-flex align-items-center py-2">
        <img
          src={avatar1}
          alt="images"
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            marginRight: 7,
          }}
        />
        <div>
          <p className="mb-0 text-primary cursor-pointer">Creeg angle</p>

          <small>ID Biznet: 393823</small>
        </div>
      </div>
    ),
  },
  {
    name: 'Người nhận',
    selector: 'recieve',
    minWidth: '200px',
    maxWidth: '250px',
    cell: row => (
      <div className="d-flex align-items-center py-2">
        <img
          src={avatar2}
          alt="images"
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            marginRight: 7,
          }}
        />
        <div>
          <p className="mb-0 text-primary cursor-pointer">Annie</p>

          <small>ID Biznet: 393823</small>
        </div>
      </div>
    ),
  },

  {
    name: 'Số sao',
    selector: 'start',
    maxWidth: '150px',
    center: true,
    cell: row => <p>56</p>,
  },
  {
    name: 'Bizxu',
    selector: 'bizxu',
    maxWidth: '150px',
    center: true,
    cell: row => <p>2000</p>,
  },
  {
    name: 'Thời gian',
    selector: 'time',
    sortable: true,
    maxWidth: '150px',
    cell: row => <p>{moment(new Date()).format('DD-MM-YYYY')}</p>,
  },
]
