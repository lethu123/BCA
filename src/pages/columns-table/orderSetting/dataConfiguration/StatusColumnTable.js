import moment from 'moment'
import SwitchField from 'components/form/SwitchField'

export const StatusColumnTable = [
  {
    name: 'Trạng thái',
    selector: 'link',
    center: true,
    maxWidth: '110px',
    cell: row => (
      <SwitchField
        name="switch"
        color="info"
        outline
        defaultChecked
        onChange={(name, value) => console.log(value)}
      />
    ),
  },

  {
    name: 'Cờ trạng thái ban đầu',
    maxWidth: '250px',
    center: true,
    cell: row => <p>0 </p>,
  },
  {
    name: 'Level trạng thái',
    sortable: true,
    maxWidth: '200px',
    center: true,
    cell: row => <p>1</p>,
  },
  {
    name: 'Mô tả ý nghĩa',

    maxWidth: '200px',
    center: true,
    cell: row => <p>Trạng thái ban đầu</p>,
  },
  {
    name: 'Ngày tạo',
    sortable: true,
    maxWidth: '160px',
    cell: row => <p>{moment(new Date()).format('DD-MM-YYYY')}</p>,
  },
  {
    name: 'Ngày cập nhật',
    sortable: true,
    maxWidth: '160px',
    cell: row => <p>{moment(new Date()).format('DD-MM-YYYY')}</p>,
  },
]
