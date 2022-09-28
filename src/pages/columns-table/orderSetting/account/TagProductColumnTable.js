import moment from 'moment'
import img from 'assets/images/avatars/avatar-blank.png'
import {Badge} from 'reactstrap'

export const TagProductColumnTable = [
  {
    name: 'Tên Tag',
    selector: 'name',
    maxWidth: '250px',
    cell: row => <p>{row.name}</p>,
  },
  {
    name: 'Tag KHTN',
    selector: 'tag',
    maxWidth: '200px',
    cell: row => <Badge color="primary">{row.tag}</Badge>,
  },
  {
    name: 'Trạng thái',
    selector: 'status',
    maxWidth: '200px',
    cell: row => (
      <>
        {row.is_used ? (
          <Badge color="light-success">Đang sử dụng</Badge>
        ) : (
          <Badge color="light-danger">Chưa được sử dụng</Badge>
        )}
      </>
    ),
  },
  {
    name: 'Người tạo',
    selector: 'creator',
    minWidth: '250px',
    maxWidth: '250px',
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
    name: 'Ngày kích hoạt',
    center: true,
    maxWidth: '160px',
    cell: row => (
      <p>
        {' '}
        {row.active_time ? moment(row.active_time).format('DD-MM-YYYY') : '---'}
      </p>
    ),
  },
]
