import moment from 'moment'
import {Badge} from 'reactstrap'
import avatar1 from 'assets/images/avatars/9.png'

// *** Table Intl Column
export const ManageGiveCoinsColumnTable = [
  {
    name: 'Post tương tác',
    selector: 'id',
    maxWidth: '150px',
    cell: row => <p>#5336</p>,
  },

  {
    name: 'Người thực hiện',
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
    name: 'Trạng thái',
    selector: 'status',
    maxWidth: '150px',
    cell: row => <Badge color="primary">Like</Badge>,
  },

  {
    name: 'Bizxu',
    selector: 'bizxu',
    maxWidth: '150px',
    center: true,
    cell: row => <p>56</p>,
  },

  {
    name: 'Thời gian',
    selector: 'time',
    sortable: true,
    maxWidth: '150px',
    cell: row => <p>{moment(new Date()).format('DD-MM-YYYY')}</p>,
  },
]
