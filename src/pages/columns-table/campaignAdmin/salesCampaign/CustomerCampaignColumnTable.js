import moment from 'moment'
import {Badge} from 'reactstrap'
export const CustomerCampaignColumnTable = [
  {
    name: 'Tên KH',
    maxWidth: '250px',
    selector: 'topic',
    cell: row => <p>Marry</p>,
  },
  {
    name: 'Điện thọai',
    minWidth: '180px',
    maxWidth: '200px',
    selector: 'campaign_info',
    cell: row => <p>0399652356</p>,
  },
  {
    name: 'Email',
    minWidth: '200px',
    maxWidth: '250px',
    selector: 'create_date',
    cell: row => <p>khacvu0505@gmail.com</p>,
  },
  // {
  //   name: 'Tương tác',
  //   maxWidth: '180px',
  //   selector: 'send_date',
  //   sortable: true,
  //   cell: row => <p>Có</p>,
  // },
  {
    name: 'Tham gia',
    minWidth: '110px',
    maxWidth: '120px',
    selector: 'received_date',
    center: true,
    sortable: true,
    cell: row => <p>Có</p>,
  },
  {
    name: 'Mua sản phẩm',
    minWidth: '150px',
    maxWidth: '160px',
    selector: 'status',
    center: true,
    cell: row => <p>Có</p>,
  },
  {
    name: 'Sản phẩm',
    minWidth: '160px',
    maxWidth: '180px',
    selector: 'status',
    sortable: true,
    cell: row => <Badge color="light-danger">ABC</Badge>,
  },
  {
    name: 'Thành tiền',
    minWidth: '160px',
    maxWidth: '180px',
    selector: 'status',
    sortable: true,
    cell: row => <p>150000 đ</p>,
  },
  {
    name: 'Ngào tạo',
    minWidth: '160px',
    maxWidth: '180px',
    selector: 'status',
    sortable: true,
    cell: row => <p>{moment(new Date()).format('YYYY-MM-DD HH:MM:ss')}</p>,
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
