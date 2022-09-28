import moment from 'moment'
import SwitchField from 'components/form/SwitchField'

export const TimeColumnTable = [
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
    name: 'Thời lượng sở hữu(ngày)',
    maxWidth: '200px',
    center: true,
    cell: row => <p>20 </p>,
  },
  {
    name: 'Thời lượng thông báo(ngày)',
    sortable: true,
    maxWidth: '250px',
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
