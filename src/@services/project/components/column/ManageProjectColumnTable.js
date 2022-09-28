import {Badge, Progress} from 'reactstrap'
import {Link} from 'react-router-dom'
import moment from 'moment'
import Avatar from '@core/components/avatar'

const coverDefault =
  'https://vanhoadoanhnghiepvn.vn/wp-content/uploads/2019/07/doanh-nghiep.png'
// *** Table Intl Column
export const columns = [
  {
    name: 'Tên dự án',
    selector: 'pro_name',
    sortable: true,
    minWidth: '300px',
    maxWidth: '300px',
    cell: row => (
      <div className="d-flex align-items-center">
        <Avatar
          img={row.pro_avatar || coverDefault}
          onError={e => {
            e.target.onerror = null
            e.target.src = coverDefault
          }}
        />

        <div className="user-info  ml-1">
          <Link className="  text-primary cursor-pointer" to="#">
            {row.pro_name}
          </Link>
        </div>
      </div>
    ),
  },
  {
    name: 'Loại dự án',
    selector: 'pro_project_type_info',
    minWidth: '200px',
    cell: row => <div>{row.pro_project_type_info?.name}</div>,
  },
  {
    name: 'Kiểu dự án',
    selector: 'pro_project_kind_info',
    minWidth: '200px',
    cell: row => <div>{row.pro_project_kind_info?.name}</div>,
  },

  {
    name: 'Trạng thái dự án',
    selector: 'status_project',
    minWidth: '170px',
    cell: row => (
      <div className="">
        {row.is_done ? (
          <Badge color={'success'} className="text-white" pill>
            Hoàn thành
          </Badge>
        ) : (
          <Badge color={'primary'} className="text-white" pill>
            Đang bán
          </Badge>
        )}
      </div>
    ),
  },
  {
    name: 'Số liên hệ',
    selector: 'c_data',
    sortable: true,
    minWidth: '220px',
    cell: row => (
      <div>
        <div className="d-flex justify-content-between align-items-center font-weight-bolder mb-50">
          <span>
            Đã bán {row.c_data_buyed} trên {row.c_data} Liên hệ
          </span>
        </div>
        <Progress
          color="success"
          className="mb-50"
          value={Math.round((row.c_data_buyed / row.c_data) * 1000) / 10}
        />
      </div>
    ),
  },

  {
    name: 'Giá mỗi liên hệ',
    selector: 'price_contact',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <span className="d-block  text-truncate font-weight-bolder w-100">
        {row.pro_price_per_data} BizXu
      </span>
    ),
  },
  {
    name: 'Doanh thu dự án',
    selector: 'project_revenue',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <span className="d-block  text-truncate font-weight-bolder w-100">
        {row.pro_price_per_data * row.c_data_buyed} BizXu
      </span>
    ),
  },
  {
    name: 'Ngày tạo dự án',
    selector: 'date_info',
    sortable: true,
    minWidth: '200px',
    cell: row => (
      <div>
        <p className="d-block  text-truncate font-weight-bolder mb-0">
          {moment(row.created_at).format('DD-MM-yyyy')}
        </p>
        <span style={{fontSize: 12}}>
          Thêm bởi: <span className="text-primary"> admin </span>
        </span>
      </div>
    ),
  },
]
