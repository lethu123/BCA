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
    name: 'Tên',
    selector: 'name',
    sortable: true,
    minWidth: '120px',
    cell: row => <span className="d-block  text-truncate">{row.name}</span>,
  },
  {
    name: 'Loại chiến dịch',
    selector: 'type',
    sortable: true,
    minWidth: '120px',
    cell: row => <span className="d-block  text-truncate">{row.type}</span>,
  },

  {
    name: 'Ngày tạo',
    selector: 'create_date',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <span className="d-block  text-truncate">
        {moment(row.create_date).format('MMM Do YY')}
      </span>
    ),
  },

  {
    name: 'Số ngày thực hiện',
    selector: 'number_date',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <span className="d-block  text-truncate">{row.number_date}</span>
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
