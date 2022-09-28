import moment from 'moment'
import img from 'assets/images/portrait/small/avatar-s-1.jpg'
import {Badge} from 'reactstrap'
import {Link} from 'react-feather'

export const ProminentAreaColumnTable = [
  {
    name: 'ID',
    selector: 'id',
    maxWidth: '100px',
    cell: row => <p>210528</p>,
  },
  {
    name: 'Tên',
    selector: 'name',
    minWidth: '130px',
    maxWidth: '150px',
    cell: row => <p>Sản phẩm ABC</p>,
  },
  {
    name: 'Link video',
    selector: 'link',
    center: true,
    maxWidth: '100px',
    cell: row => <Link size={18} className="text-primary" />,
  },
  {
    name: 'Người tạo',
    selector: 'creator',
    minWidth: '200px',
    maxWidth: '250px',
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
    name: 'Lượt click',
    selector: 'click',
    maxWidth: '350px',
    center: true,
    cell: row => <p>100</p>,
  },
  {
    name: 'Thời gian xem',
    selector: 'timeSeen',
    maxWidth: '350px',
    center: true,
    cell: row => <p>100</p>,
  },

  {
    name: 'Ngày kích hoạt',
    sortable: true,
    maxWidth: '160px',
    cell: row => <p>{moment(new Date()).format('DD-MM-YYYY')}</p>,
  },
  {
    name: 'Tag cấp cộng đồng',
    maxWidth: '160px',
    center: true,
    cell: row => (
      <Badge color="primary" className="badge-glow">
        Tất cả
      </Badge>
    ),
  },
  {
    name: 'Tag sản phẩm',
    maxWidth: '160px',
    center: true,

    cell: row => (
      <Badge color="primary" className="badge-glow">
        Tất cả
      </Badge>
    ),
  },
]
