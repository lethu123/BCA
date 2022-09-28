import {Badge, Progress} from 'reactstrap'
import moment from 'moment'
import avatar from 'assets/images/avatars/9.png'

// *** Table Intl Column
export const PromotionCodeColumnTable = [
  // {
  //   name: 'ID',
  //   selector: 'id',
  //   maxWidth: '100px',
  //   cell: row => <p>1234</p>,
  // },
  {
    name: 'Chi tiết',
    selector: 'detail',
    minWidth: '200px',
    maxWidth: '250px',
    cell: row => (
      <p className="text-primary cursor-pointer">
        Hai150 - giảm 30% phí đóng năm đầu
      </p>
    ),
  },
  {
    name: 'Mã',
    selector: 'code',
    maxWidth: '70px',
    cell: row => <p>Hai150</p>,
  },
  {
    name: 'Số lượng',
    selector: 'number',
    maxWidth: '80px',
    center: true,
    cell: row => <p>10</p>,
  },
  {
    name: 'Đã dùng',
    selector: 'use',
    maxWidth: '120px',
    cell: row => (
      <Progress className="w-100" value="50">
        5/10
      </Progress>
    ),
  },

  {
    name: 'Trạng thái',
    selector: 'status',
    maxWidth: '140px',
    cell: row => (
      <Badge color={'warning'} className="text-white" pill>
        Đang áp dụng
      </Badge>
    ),
  },
  {
    name: 'Ngày bắt đầu',
    selector: 'start_date',
    sortable: true,
    minWidth: '120px',
    maxWidth: '130px',
    cell: row => <p>{moment(new Date()).format('DD-MM-YYYY')}</p>,
  },
  {
    name: 'Ngày kết thúc',
    selector: 'end_date',
    sortable: true,
    minWidth: '120px',
    maxWidth: '130px',
    cell: row => <p>{moment(new Date()).format('DD-MM-YYYY')}</p>,
  },
  {
    name: 'Người tạo',
    selector: 'creator',
    minWidth: '200px',
    maxWidth: '250px',
    cell: row => (
      <div className="d-flex align-items-center ">
        <img
          src={avatar}
          alt="images"
          style={{width: 40, height: 40, borderRadius: '50%', marginRight: 7}}
        />
        <div>
          <p className="mb-0 text-primary cursor-pointer">Emily Clark</p>
          <small>ID Biznet: 393823</small>
        </div>
      </div>
    ),
  },
]
