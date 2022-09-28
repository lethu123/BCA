import moment from 'moment'
import avatar from 'assets/images/avatars/9.png'

// *** Table Intl Column
export const CustomerColumnTable = [
  {
    name: 'Mã khách hàng',
    selector: 'idcustomer',
    maxWidth: '80px',
    cell: row => <p>10</p>,
  },
  {
    name: 'Tên công ty bảo hiểm',
    selector: 'use',
    maxWidth: '120px',
    cell: row => <p>Fubon</p>,
  },

  {
    name: 'Ngày hiệu lực HD',
    selector: 'date',
    maxWidth: '140px',
    cell: row => <p>{moment(new Date()).format('DD/MM/YYYY')}</p>,
  },
  {
    name: 'Số phí BH',
    selector: 'cost',
    maxWidth: '130px',
    cell: row => <p>10000000</p>,
  },
  {
    name: 'Năm kết thúc',
    selector: 'end_year',
    sortable: true,
    maxWidth: '130px',
    cell: row => <p>{moment(new Date()).format('YYYY')}</p>,
  },
  {
    name: 'Năm đáo hạn',
    selector: 'end_year',
    sortable: true,
    maxWidth: '130px',
    cell: row => <p>{moment(new Date()).format('YYYY')}</p>,
  },
  {
    name: 'Ngày sinh',
    selector: 'birthday',
    sortable: true,
    maxWidth: '130px',
    cell: row => <p>{moment(new Date()).format('DD/MMYYYY')}</p>,
  },
  {
    name: 'Nghề nghiệp',
    selector: 'job',

    maxWidth: '130px',
    cell: row => <p>Nhân viên BDS</p>,
  },
  // {
  //   name: 'Người tạo',
  //   selector: 'creator',
  //   minWidth: '200px',
  //   maxWidth: '250px',
  //   cell: row => (
  //     <div className="d-flex align-items-center ">
  //       <img
  //         src={avatar}
  //         alt="images"
  //         style={{width: 40, height: 40, borderRadius: '50%', marginRight: 7}}
  //       />
  //       <div>
  //         <p className="mb-0 text-primary cursor-pointer">Emily Clark</p>
  //         <small>ID Biznet: 393823</small>
  //       </div>
  //     </div>
  //   ),
  // },
]
