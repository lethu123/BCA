import {Badge} from 'reactstrap'
import {Link} from 'react-router-dom'
import {subStr, formatViDate} from 'utility/Utils'

// *** Table Intl Column
export const columns = [
  {
    name: 'ID',
    minWidth: '220px',
    cell: row => <div>{row.id}</div>,
  },
  {
    name: 'Tên',
    selector: 'name',
    minWidth: '450px',
    cell: row => (
      <div className="py-2">
        <p className="m-0 font-weight-bold">
          <span> Tên: </span>
          <Link
            className="text-hover-primary text-dark"
            to={`/admin/kinh-nghiem-khach-hang/${row.type}/${row.id}`}
          >
            {row.name ? subStr(row.name, 40) : 'Không xác định'}
          </Link>
        </p>
        <p className="m-0">
          <span> URL: </span>
          {row.link ? (
            <a
              href={row.link}
              target="_blank"
              className="text-muted text-hover-danger"
              rel="noreferrer"
            >
              {row.link && subStr(row.link, 40)}
            </a>
          ) : (
            'Không xác định'
          )}
        </p>
      </div>
    ),
  },
  {name: 'Đường dẫn liên kết', selector: 'link', hidden: true},
  {name: 'Người thêm', selector: 'user_info', hidden: true},
  {
    name: 'Trạng thái',
    selector: 'status_info',
    minWidth: '120px',
    cell: row => {
      return (
        <Badge
          color={
            row.status === 0
              ? 'warning'
              : row.status === 2
              ? 'primary'
              : 'danger'
          }
          pill
        >
          {row.status_info && row.status_info.name}
        </Badge>
      )
    },
  },
  {
    name: 'Loại trang',
    selector: 'link_type',
    minWidth: '150px',
    cell: row => {
      return (
        <Badge
          className="text-white"
          color={
            row.link_type !== 'opponent' ? 'light-primary' : 'light-warning'
          }
          pill
        >
          {row.link_type !== 'opponent' ? 'Tương tác' : 'Đối thủ'}
        </Badge>
      )
    },
  },
  {
    name: 'Ngày bắt đầu',
    selector: 'start_date',
    sortable: true,
    minWidth: '120px',
    cell: row => <span>{row.start_date && formatViDate(row.start_date)}</span>,
  },
  {
    name: 'Ngày kết thúc',
    selector: 'end_date',
    sortable: true,
    minWidth: '120px',
    cell: row => <span>{row.end_date && formatViDate(row.end_date)}</span>,
  },
  {
    name: 'Tổng số người tương tác',
    selector: 'c_uid',
    sortable: true,
    minWidth: '120px',
  },
  {
    name: 'Lượt reaction',
    selector: 'c_like',
    sortable: true,
    minWidth: '120px',
  },
  {
    name: 'Lượt bình luận',
    selector: 'c_comment',
    sortable: true,
    minWidth: '120px',
  },
  {
    name: 'Lượt chia sẻ',
    selector: 'c_share',
    sortable: true,
    minWidth: '120px',
  },
  {
    name: 'Ngày thêm link',
    selector: 'create_time',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <span>{row.create_time && formatViDate(row.create_time)}</span>
    ),
  },
  {
    name: 'Ngày cập nhật link',
    selector: 'update_time',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <span>{row.update_time && formatViDate(row.update_time)}</span>
    ),
  },
]
