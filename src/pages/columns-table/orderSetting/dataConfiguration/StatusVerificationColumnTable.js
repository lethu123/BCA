import moment from 'moment'
import SwitchField from 'components/form/SwitchField'

export const StatusVerificationColumnTable = [
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
    name: 'Số ngày cảnh báo trước xóa',
    maxWidth: '250px',
    center: true,
    cell: row => <p>20 </p>,
  },
  {
    name: 'Số ngày xóa',
    sortable: true,
    maxWidth: '200px',
    center: true,
    cell: row => <p>30</p>,
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
