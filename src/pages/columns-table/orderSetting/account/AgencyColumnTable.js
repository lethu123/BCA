import moment from 'moment'
import img from 'assets/images/portrait/small/avatar-s-1.jpg'
import SwitchField from 'components/form/SwitchField'

export const AgencyColumnTable = [
  // {
  //   name: 'ID',
  //   selector: 'id',
  //   maxWidth: '100px',
  //   cell: row => <p>210528</p>,
  // },
  {
    name: 'Tên',
    selector: 'name',
    maxWidth: '150px',
    cell: row => <p>Cấp DLBH BM</p>,
  },
  {
    name: 'Thông tin',
    selector: 'link',
    center: true,
    minWidth: '150px',
    maxWidth: '200px',
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
    name: 'Tiêu chí',
    minWidth: '300px',
    maxWidth: '350px',
    center: true,
    cell: row => (
      <p>
        Trao tặng thủ công khi người dùng đạt doanh số tối thiểu 42000000đ và có
        nhóm trên 50 thành viên và một số thành tích khác
      </p>
    ),
  },
  {
    name: 'Đạt chỉ tiêu',
    maxWidth: '200px',
    center: true,
    cell: row => <p>450 người</p>,
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
