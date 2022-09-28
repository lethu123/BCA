// import {CustomInput} from 'reactstrap'
import moment from 'moment'

// ** assets
import img from 'assets/images/avatars/avatar-blank.png'
import {subStr} from 'utility/Utils'

// *** Table Intl Column
export const NotificationSettingColumnTable = [
  {
    name: 'Người tạo',
    selector: 'creatBy',
    minWidth: '250px',
    cell: row => (
      <div className="d-flex align-items-center py-2">
        <img
          src={row.create_by_info?.avatar_url || img}
          alt="images"
          style={{width: 40, height: 40, borderRadius: '50%', marginRight: 7}}
          onError={e => {
            e.target.onerror = null
            e.target.src = img
          }}
        />
        <div>
          <p className="mb-0 text-primary cursor-pointer">
            {row.create_by_info?.name}
          </p>
          <small>{row.create_by_info?.email}</small>
        </div>
      </div>
    ),
  },
  {
    name: 'Nội dung thông báo',
    selector: 'content',
    minWidth: '300px',
    maxWidth: '350px',
    cell: row => (
      <div className="py-1">
        <div className="font-weight-bolder">{row.title}</div>
        <p> {subStr(row.description, 85)}</p>
      </div>
    ),
  },
  {
    name: 'Danh mục',
    selector: 'created_at',
    sortable: true,
    maxWidth: '150px',
    cell: row => <p>{row.target_role}</p>,
  },
  {
    name: 'Ngày tạo',
    selector: 'start_date',
    sortable: true,
    maxWidth: '160px',
    cell: row => <p>{moment(row.create_at).format('DD-MM-YYYY')}</p>,
  },
  // {
  //   name: 'Thành viên đã xem',
  //   selector: 'count_seen',
  //   center: true,
  //   maxWidth: '160px',
  //   cell: row => <p>0</p>,
  // },
  // {
  //   name: 'Thành viên chưa xem',
  //   selector: 'count_not_seen',
  //   center: true,
  //   maxWidth: '160px',
  //   cell: row => <p>0</p>,
  // },
]
