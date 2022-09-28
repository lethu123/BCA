import moment from 'moment'
import img from 'assets/images/portrait/small/avatar-s-1.jpg'
import SwitchField from 'components/form/SwitchField'

export const DataCenterColumnTable = [
  // {
  //   name: 'ID',
  //   selector: 'id',
  //   maxWidth: '100px',
  //   cell: row => <p>210528</p>,
  // },

  {
    name: 'Tên',
    selector: 'name',
    minWidth: '180px',
    maxWidth: '250px',
    cell: row => (
      <div className="d-flex align-items-center py-2">
        <img
          src={img}
          alt="images"
          style={{width: 40, height: 40, borderRadius: '50%', marginRight: 7}}
        />
        <div>
          <p className="mb-0 text-primary cursor-pointer">Data Center 1</p>
        </div>
      </div>
    ),
  },

  {
    name: 'Tiêu chí cấp đại lý',
    maxWidth: '120px',
    center: true,
    cell: row => <p>FA</p>,
  },
  {
    name: 'Tiêu chí CX',
    maxWidth: '130px',
    center: true,
    cell: row => <p>25</p>,
  },
  {
    name: 'Tiêu chí dự án đối tác',
    maxWidth: '130px',
    center: true,
    cell: row => <p>25</p>,
  },
  {
    name: 'Tiêu chí dự án inhouse',
    maxWidth: '150px',
    center: true,
    cell: row => <p>25</p>,
  },
  {
    name: 'Số lượng CX trong ngày',
    maxWidth: '130px',
    center: true,
    cell: row => <p>25</p>,
  },
  {
    name: 'Số lung dự án trong ngày',
    maxWidth: '130px',
    center: true,
    cell: row => <p>55</p>,
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
    maxWidth: '140px',
    cell: row => <p>{moment(new Date()).format('DD-MM-YYYY')}</p>,
  },
]
