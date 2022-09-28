import moment from 'moment'
export const TextMessageColumnTable = [
  {
    name: 'ID',
    maxWidth: '60px',
    selector: 'id',
    cell: row => <p>{row.id}</p>,
  },
  {
    name: 'Chủ đề',
    maxWidth: '250px',
    selector: 'topic',
    cell: row => <p>{row.topic}</p>,
  },
  {
    name: 'Chiến dịch',
    maxWidth: '180px',
    selector: 'campaign_info',
    cell: row => <p>{row.campaign_info.name}</p>,
  },
  {
    name: 'Ngày tạo',
    maxWidth: '180px',
    selector: 'create_date',
    cell: row => <p>{moment(row.create_date).format('YYYY-MM-DD HH:MM:ss')}</p>,
  },
  {
    name: 'Ngày gửi',
    maxWidth: '180px',
    selector: 'send_date',
    sortable: true,
    cell: row => <p>{moment(row.send_date).format('YYYY-MM-DD HH:MM:ss')}</p>,
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
