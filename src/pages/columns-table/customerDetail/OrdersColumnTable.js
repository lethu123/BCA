import moment from 'moment'
import {Badge} from 'reactstrap'
export const OrdersColumnTable = [
  {
    name: 'ID',
    maxWidth: '30px',
    selector: 'id',
    cell: row => <p>{row.id}</p>,
  },
  {
    name: 'Trạng thái',
    maxWidth: '250px',
    selector: 'topic',
    cell: row => <Badge color="light-danger">{row.status}</Badge>,
  },
  {
    name: 'Số lượng',
    maxWidth: '180px',
    selector: 'amount',
    cell: row => <p>{row.amount}</p>,
  },
  {
    name: 'Thành tiền',
    maxWidth: '180px',
    selector: 'amount',
    cell: row => <p>{row.total_money} đ</p>,
  },
  {
    name: 'Ngày tạo',
    maxWidth: '180px',
    selector: 'create_date',
    cell: row => <p>{moment(row.create_date).format('YYYY-MM-DD HH:MM:ss')}</p>,
  },
  // {
  //   name: 'Thao tác',
  //   allowOverflow: true,
  //   cell: row => {
  //     return (
  //       <div className="d-flex">
  //         <UncontrolledDropdown>
  //           <DropdownToggle className="pr-1" tag="span">
  //             <MoreVertical size={15} />
  //           </DropdownToggle>
  //           <DropdownMenu right>
  //             <DropdownItem>
  //               <FileText size={15} />
  //               <span className="align-middle ml-50">Details</span>
  //             </DropdownItem>
  //             <DropdownItem>
  //               <Edit size={15} />
  //               <span className="align-middle ml-50">Edit</span>
  //             </DropdownItem>
  //             <DropdownItem>
  //               <Trash size={15} />
  //               <span className="align-middle ml-50">Delete</span>
  //             </DropdownItem>
  //           </DropdownMenu>
  //         </UncontrolledDropdown>
  //       </div>
  //     )
  //   },
  // },
]
