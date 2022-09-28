import {Archive, FileText, MoreVertical, Trash} from 'react-feather'
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap'
import {Link} from 'react-router-dom'

// *** Table Intl Column
export const columns = [
  {
    name: 'Link trích xuất',
    selector: 'name',
    sortable: true,
    minWidth: '300px',
    cell: row => (
      <div className="py-2">
        <p className="m-0 font-weight-bold"> {row.name}</p>
        <p className="m-0">
          <span> URL: </span>
          <Link to="#">{row.link}</Link>
        </p>
      </div>
    ),
  },

  {
    name: 'Ngày tạo',
    selector: 'create_time',
    sortable: true,
    minWidth: '150px',
  },
  {
    name: 'Ngày bắt đầu',
    selector: 'start_date',
    sortable: true,
    minWidth: '150px',
  },
  {
    name: 'Ngày kết thúc',
    selector: 'end_date',
    sortable: true,
    minWidth: '150px',
  },
  {
    name: 'Điểm tích lũy',
    selector: 'accumulated_point',
    sortable: true,
    minWidth: '150px',
  },
  {
    name: 'Trạng thái',
    selector: 'status_info',
    minWidth: '150px',
    cell: row => {
      return (
        <Badge
          color={
            row.status_info && row.status_info.name === 'approved'
              ? 'primary'
              : 'warning'
          }
          pill
        >
          {row.status_info && row.status_info.name}
        </Badge>
      )
    },
  },
  {
    name: 'Thao tác',
    allowOverflow: true,
    cell: row => {
      return (
        <div className="d-flex">
          <UncontrolledDropdown>
            <DropdownToggle className="pr-1" tag="span">
              <MoreVertical size={15} />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <FileText size={15} />
                <span className="align-middle ml-50">Details</span>
              </DropdownItem>
              <DropdownItem>
                <Archive size={15} />
                <span className="align-middle ml-50">Archive</span>
              </DropdownItem>
              <DropdownItem>
                <Trash size={15} />
                <span className="align-middle ml-50">Delete</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      )
    },
  },
]
