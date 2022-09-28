import moment from 'moment'
import avatar1 from 'assets/images/avatars/9.png'
import {Link, Star} from 'react-feather'
import Rating from 'react-rating'

// *** Table Intl Column
export const ManageCoursesColumnTable = [
  {
    name: 'ID',
    selector: 'id',
    maxWidth: '80px',
    cell: row => <p>1234</p>,
  },
  {
    name: 'Khóa học',
    selector: 'course',
    minWidth: '200px',
    maxWidth: '350px',
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
    maxWidth: '120px',
    cell: row => (
      <div>
        <a href="#" target="_blank">
          <Link />
        </a>
      </div>
    ),
  },

  {
    name: 'Số lượng người tham gia',
    selector: 'c_user_join',
    maxWidth: '120px',
    center: true,
    cell: row => <div>368</div>,
  },
  {
    name: 'Số người hoàn thành',
    selector: 'c_user_complete',
    maxWidth: '120px',
    center: true,
    cell: row => <div>56</div>,
  },
  {
    name: 'Lượt đánh giá',
    selector: 'c_envaluate',
    maxWidth: '300px',
    center: true,
    cell: row => (
      <div className="d-flex align-items-center">
        <Rating
          emptySymbol={<Star size={20} fill="#babfc7" stroke="#babfc7" />}
          fullSymbol={<Star size={20} fill="#ff9f43" stroke="#ff9f43" />}
          readonly
          initialRating={2}
          direction="ltr"
        />
        <div className="ml-2">4.5</div>
      </div>
    ),
  },
  {
    name: 'Người yêu cầu',
    selector: 'user_request',
    minWidth: '200px',
    maxWidth: '220px',
    cell: row => (
      <div className="d-flex align-items-center py-1">
        <img
          src={avatar1}
          alt="images"
          style={{width: 40, height: 40, borderRadius: '50%', marginRight: 7}}
        />
        <div>
          <p className="mb-0 text-primary cursor-pointer">Darkness</p>
          <small>ID: 393823</small>
        </div>
      </div>
    ),
  },
  {
    name: 'Trạng thái',
    selector: 'status',
    maxWidth: '120px',
    center: true,
    cell: row => (
      <div>
        <span className="switch switch-outline switch-success">
          <label>
            <input type="checkbox" defaultChecked="checked" name="select" />
            <span />
          </label>
        </span>
      </div>
    ),
  },

  {
    name: 'Ngày đăng',
    selector: 'post_date',
    sortable: true,
    maxWidth: '150px',
    cell: row => <div>{moment(new Date()).format('LL')}</div>,
  },
  {
    name: 'Ngày duyệt',
    selector: 'browse_date',
    sortable: true,
    maxWidth: '300px',
    cell: row => (
      <div>
        <p className="mb-0">{moment(new Date()).format('LL')}</p>
        <span>Duyệt bởi: Bùi Quốc Anh</span>
      </div>
    ),
  },
]
