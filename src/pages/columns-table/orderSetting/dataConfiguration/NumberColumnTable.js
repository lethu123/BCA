import moment from 'moment'
import SwitchField from 'components/form/SwitchField'
import {Badge} from 'reactstrap'

// ** asset
import img from 'assets/images/avatars/avatar-blank.png'
import noImg from 'assets/images/pages/users/noImg.png'

export const NumberColumnTable = [
  {
    name: 'Thông tin data',
    selector: 'name',
    minWidth: '180px',
    maxWidth: '200px',
    cell: row => (
      <div className="d-flex align-items-center py-2">
        <img
          src={row.picture || noImg}
          alt="images"
          style={{width: 40, height: 40, marginRight: 7}}
          className="rounded"
          onError={e => {
            e.target.onerror = null
            e.target.src = noImg
          }}
        />
        <div>
          <p className="mb-0 text-primary cursor-pointer">{row.name}</p>
        </div>
      </div>
    ),
  },
  {
    name: 'Cấp ',
    selector: 'level',
    maxWidth: '170px',
    center: true,
    cell: row => <Badge color="light-success">{row.level}</Badge>,
  },

  {
    name: 'Trạng thái',
    selector: 'status',
    maxWidth: '170px',
    cell: row => (
      <>
        {row.status ? (
          <Badge color="success">Trạng thái 1 </Badge>
        ) : (
          <Badge color="danger">Trạng thái 2</Badge>
        )}
      </>
    ),
  },
  {
    name: 'Data mua từ DataCenter',
    selector: 'c_fr_center',
    sortable: true,
    maxWidth: '200px',
    cell: row => <p>100</p>,
  },
  {
    name: 'Data LDP cá nhân',
    selector: 'c_fr_landing_page',
    sortable: true,
    maxWidth: '160px',
  },
  {
    name: 'Data CX',
    selector: 'c_fr_cx',
    sortable: true,
    maxWidth: '160px',
  },
  {
    name: 'Ngày tạo',
    selector: 'create_at',
    sortable: true,
    maxWidth: '160px',
    cell: row => <p>{moment(new Date()).format('DD/MM/YYYY')}</p>,
  },
  {
    name: 'Người tạo',
    selector: 'create_by_info',
    minWidth: '220px',
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
]
