import {MoreVertical, Trash} from 'react-feather'
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
    minWidth: '100px',
    cell: row => (
      <span className="d-block  text-truncate font-weight-bolder w-100">
        {row.ID}
      </span>
    ),
  },
  {
    name: 'Nội dung ghi chú',
    selector: 'description',
    sortable: true,
    minWidth: '500px',
    cell: row => (
      <span className="d-block  text-truncate  w-100">{row.description}</span>
    ),
  },

  {
    name: 'Ngày tạo dự án',
    selector: 'date_info',
    sortable: true,
    minWidth: '200px',
    cell: row => (
      <p className="d-block  text-truncate mb-0">
        {moment(row.date_create).format('DD-MM-yyyy')}
      </p>
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
