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
    name: 'Mã khách hàng',
    selector: 'id_customer',
    sortable: true,
    minWidth: '100px',
    cell: row => (
      <span className="d-block  text-truncate text-success">
        {row.id_customer}
      </span>
    ),
  },
  {
    name: 'Tên khách hàng',
    selector: 'name_customer',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <span className="d-block  text-truncate">{row.name_customer}</span>
    ),
  },
  {
    name: 'Loại task',
    selector: 'type_task',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <span className="d-block  text-truncate">{row.type_task}</span>
    ),
  },
  {
    name: 'Tham gia bảo hiểm',
    selector: 'join_insurance',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <span className="d-block text-truncate">{row.join_insurance}</span>
    ),
  },
  {
    name: 'Tình trạng sức khỏe',
    selector: 'health',
    sortable: true,
    minWidth: '100px',
    cell: row => <span className="d-block text-truncate">{row.health}</span>,
  },
  {
    name: 'Trạng thái chăm sóc',
    selector: 'status',
    sortable: true,
    minWidth: '100px',
    cell: row => <span className="d-block text-truncate">{row.status}</span>,
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
    name: 'Ngày bắt đầu',
    selector: 'start_date',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <span className="d-block  text-truncate">
        {moment(row.start_date).format('MMM Do YY')}
      </span>
    ),
  },
  {
    name: 'Ngày đến hạn',
    selector: 'end_date',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <span className="d-block  text-truncate">
        {moment(row.end_date).format('MMM Do YY')}
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
