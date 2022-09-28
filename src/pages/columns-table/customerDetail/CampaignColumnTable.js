import moment from 'moment'
import {Badge} from 'reactstrap'
export const CampaignColumnTable = [
  {
    name: 'ID',
    maxWidth: '30px',
    selector: 'id',
    cell: row => <p>{row.id}</p>,
  },
  {
    name: 'Chiến dịch',
    maxWidth: '250px',
    selector: 'topic',
    cell: row => <p className="text-danger">{row.name}</p>,
  },
  {
    name: 'Ngày tạo',
    maxWidth: '180px',
    selector: 'amount',
    cell: row => <p>{moment(row.create_date).format('YYYY-MM-DD')}</p>,
  },
  {
    name: 'Ngày bắt đầu',
    maxWidth: '180px',
    selector: 'amount',
    cell: row => <p>{moment(row.start_date).format('YYYY-MM-DD HH:MM:ss')}</p>,
  },
  {
    name: 'Ngày kết thúc',
    maxWidth: '180px',
    selector: 'create_date',
    cell: row => <p>{moment(row.end_date).format('YYYY-MM-DD HH:MM:ss')}</p>,
  },
  {
    name: 'Kết quả',
    maxWidth: '180px',
    selector: 'create_date',
    cell: row => <Badge color="light-danger">{row.result}</Badge>,
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
