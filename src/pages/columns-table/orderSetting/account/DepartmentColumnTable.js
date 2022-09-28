import moment from 'moment'
import SwitchField from 'components/form/SwitchField'

export const DepartmentColumnTable = [
  // {
  //   name: 'ID',
  //   selector: 'id',
  //   maxWidth: '100px',
  //   cell: row => <p>210528</p>,
  // },

  {
    name: 'Mô tả phòng ban',
    minWidth: '300px',
    maxWidth: '350px',
    center: true,
    cell: row => (
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem
      </p>
    ),
  },
  {
    name: 'Số người',
    maxWidth: '200px',
    center: true,
    cell: row => <p>45 người</p>,
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
    name: 'Ngày kích hoạt',
    sortable: true,
    maxWidth: '160px',
    cell: row => <p>{moment(new Date()).format('DD-MM-YYYY')}</p>,
  },
]
