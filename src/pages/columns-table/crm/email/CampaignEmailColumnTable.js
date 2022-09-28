import {Edit, MoreVertical, Trash} from 'react-feather'
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap'
import moment from 'moment'

// *** Table Intl Column
export const columns = [
  {
    name: 'ID',
    selector: 'ID',
    sortable: true,
    minWidth: '100px',
    cell: row => (
      <span className="d-block  text-truncate font-weight-bolder">
        {row.ID}
      </span>
    ),
  },
  {
    name: 'Tên Chiến dịch',
    selector: 'name',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <span className="d-block  text-truncate text-success">{row.name}</span>
    ),
  },
  {
    name: 'Số khách hàng',
    selector: 'count_customer',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <span className="d-block  text-truncate ">{row.count_customer}</span>
    ),
  },
  {
    name: 'Xem mail',
    selector: 'view_mail',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <span className="d-block  text-truncate ">{row.view_mail}</span>
    ),
  },
  {
    name: 'Trả lời',
    selector: 'rep_mail',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <span className="d-block  text-truncate ">{row.rep_mail}</span>
    ),
  },

  {
    name: 'Ngày gửi',
    selector: 'send_date',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <span className="d-block  text-truncate">
        {moment(row.send_date).format('MMM Do YY')}
      </span>
    ),
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
                <Edit size={15} />
                <span className="align-middle ml-50">Edit</span>
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
