import moment from 'moment'
import img from 'assets/images/portrait/small/avatar-s-1.jpg'
import SwitchField from 'components/form/SwitchField'

export const SystemGroupColumnTable = [
  {
    name: 'Nguời tạo sự kiện',
    selector: 'creator',
    center: true,
    minWidth: '180px',
    maxWidth: '200px',
    cell: row => (
      <div className="d-flex align-items-center py-2">
        <img
          src={img}
          alt="images"
          style={{width: 40, height: 40, borderRadius: '50%', marginRight: 7}}
        />
        <div>
          <p className="mb-0 text-primary cursor-pointer">Emily Crack</p>
          <small>Id Biznet: 132823</small>
        </div>
      </div>
    ),
  },
  {
    name: 'Trạng thái',
    selector: 'link',
    maxWidth: '110px',
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
    name: 'Số người trong nhóm',
    selector: 'people',
    maxWidth: '250px',
    center: true,
    cell: row => <p>2414</p>,
  },
  {
    name: 'Loại nhóm ',
    selector: 'typeGroup',
    maxWidth: '200px',
    center: true,
    cell: row => <p>Auto</p>,
  },

  {
    name: 'Ngày tạo',
    selector: 'dateCreated',
    sortable: true,
    maxWidth: '160px',
    cell: row => <p>{moment(new Date()).format('DD-MM-YYYY')}</p>,
  },
]
