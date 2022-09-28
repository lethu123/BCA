import moment from 'moment'
import avatar1 from 'assets/images/avatars/9.png'
import {Star} from 'react-feather'
import Rating from 'react-rating'
import {Progress} from 'reactstrap'

// *** Table Intl Column
export const MemberCoursesColumnTable = [
  {
    name: 'ID',
    selector: 'id',
    maxWidth: '100px',
    cell: row => <p>1234</p>,
  },
  {
    name: 'Thành viên tham gia',
    selector: 'c_user_join',
    minWidth: '200px',
    maxWidth: '300px',
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
    name: 'Tiến độ',
    selector: 'progress',
    maxWidth: '300px',
    center: true,
    cell: row => (
      <div className="w-100">
        <small>Tiến độ 45%</small>
        <Progress value="45" className="progress-bar-success">
          45%
        </Progress>
      </div>
    ),
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
    name: 'Số giờ học (Giờ)',
    selector: 'hours',
    maxWidth: '120px',
    center: true,
    cell: row => <div>368</div>,
  },
  {
    name: (
      <div className="text-center">
        <div>Phí</div>
        <span className="text-success">(Bizxu)</span>
      </div>
    ),
    selector: 'price',
    maxWidth: '120px',
    center: true,
    cell: row => <div>56</div>,
  },

  {
    name: 'Ngày học gần nhất',
    selector: 'recently_date',
    sortable: true,
    maxWidth: '150px',
    cell: row => <div>{moment(new Date()).format('LL')}</div>,
  },
  {
    name: 'Ngày tham gia',
    selector: 'join_date',
    sortable: true,
    maxWidth: '300px',
    cell: row => <div>{moment(new Date()).format('LL')}</div>,
  },
]
