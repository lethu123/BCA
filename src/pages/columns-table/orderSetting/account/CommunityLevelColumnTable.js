import moment from 'moment'
import {Badge} from 'reactstrap'
import SwitchField from 'components/form/SwitchField'

export const CommunityLevelColumnTable = [
  {
    name: 'ID',
    selector: 'id',
    maxWidth: '100px',
    cell: row => <p>210528</p>,
  },

  {
    name: 'Tên',
    selector: 'name',
    center: true,
    maxWidth: '250px',
    cell: row => <Badge color="danger">UVTN</Badge>,
  },
  {
    name: 'Trạng thái',
    selector: 'status',
    maxWidth: '200px',
    cell: row => (
      <SwitchField
        name="switch"
        color="success"
        outline
        defaultChecked
        onChange={(name, value) => console.log(value)}
      />
    ),
  },

  {
    name: 'Ngày tạo',
    selector: 'dateCreated',
    sortable: true,
    maxWidth: '200px',
    cell: row => <p>{moment(new Date()).format('DD-MM-YYYY')}</p>,
  },
]
