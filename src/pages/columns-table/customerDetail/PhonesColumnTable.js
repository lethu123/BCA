import {Edit, FileText, MoreVertical, Trash} from 'react-feather'
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap'
import moment from 'moment'
export const PhoneColumnTable = [
  {
    name: 'Loại cuộc gọi',
    maxWidth: '120px',
    selector: 'phoneType',
    cell: row => <p>{row.phone_type}</p>,
  },
  {
    name: 'Loại nhiệm vụ',
    maxWidth: '120px',
    selector: 'missionType',
    cell: row => <p>{row.mission_type}</p>,
  },
  {
    name: 'Kq cuộc gọi',
    maxWidth: '130px',
    selector: 'result',
    cell: row => <p>{row.result}</p>,
  },
  {
    name: 'Thời gian bắt đầu',
    maxWidth: '180px',
    selector: 'start_date',
    sortable: true,
    cell: row => <p>{moment(row.start_date).format('YYYY-MM-DD HH:MM:SS')}</p>,
  },
  {
    name: 'Thời gian kết thúc',
    maxWidth: '180px',
    selector: 'end_date',
    sortable: true,
    cell: row => <p>{moment(row.end_date).format('YYYY-MM-DD HH:MM:SS')}</p>,
  },
  {
    name: 'Thời gian(s)',
    maxWidth: '250px',
    selector: 'time_of_call',
    center: true,
    sortable: true,
    cell: row => <p>{row.time_of_call}</p>,
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
