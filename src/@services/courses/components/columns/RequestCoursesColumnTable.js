import moment from 'moment'
import avatar1 from 'assets/images/avatars/9.png'
import {Link} from 'react-feather'
import {Badge} from 'reactstrap'

// *** Table Intl Column
export const RequestCoursesColumnTable = [
  {
    name: 'ID',
    selector: 'id',
    maxWidth: '200px',
    cell: row => <p>1234</p>,
  },
  {
    name: 'Khóa học',
    selector: 'course',
    minWidth: '500px',
    maxWidth: '500px',
    cell: row => (
      <div className="d-flex align-items-center py-1">
        <img
          src={avatar1}
          alt="images"
          style={{width: 40, height: 40, borderRadius: '50%', marginRight: 7}}
        />
        <div>
          <p className="mb-0 text-primary cursor-pointer">Học phần 1</p>
          <small>ID Biznet: 393823</small>
        </div>
      </div>
    ),
  },
  {
    name: 'Link',
    selector: 'link',
    // maxWidth: '120px',
    cell: row => (
      <div>
        <a href="#" target="_blank">
          <Link />
        </a>
      </div>
    ),
  },
  {
    name: 'Ngày đăng',
    selector: 'post_date',
    sortable: true,
    // maxWidth: '150px',
    cell: row => <div>{moment(new Date()).format('LL')}</div>,
  },

  {
    name: 'Trạng thái',
    selector: 'status',
    // maxWidth: '120px',
    center: true,
    cell: row => (
      <div className="text-center py-2">
        <Badge color="warning"> Chờ xử lý</Badge>
        <div className="pt-2">
          <span>Cập nhật:</span>{' '}
          <span className="font-weight-bolder">3 tháng 5, 2021</span>
        </div>
      </div>
    ),
  },
]
