import moment from 'moment'
import img from 'assets/images/portrait/small/avatar-s-1.jpg'

export const MemberColumnTable = [
  {
    name: 'ID',
    selector: 'id',
    maxWidth: '150px',
    cell: row => <p>210528</p>,
  },
  {
    name: 'Thành viên nhóm',
    selector: 'member',
    maxWidth: '300px',
    cell: row => (
      <div className="d-flex align-items-center py-2">
        <img
          src={img}
          alt="images"
          style={{width: 40, height: 40, borderRadius: '50%', marginRight: 7}}
        />
        <div>
          <p className="mb-0 text-primary cursor-pointer">Emily Crack</p>
          <small>Id Biznet: 132823</small>
        </div>
      </div>
    ),
  },

  {
    name: 'Ngày tham gia',
    selector: 'dateCreated',
    sortable: true,
    maxWidth: '250px',
    cell: row => <p>{moment(new Date()).format('DD-MM-YYYY')}</p>,
  },
]
