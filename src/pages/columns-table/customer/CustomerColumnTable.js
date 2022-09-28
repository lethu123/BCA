import {Edit, FileText, MoreVertical, Trash} from 'react-feather'
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
    name: 'Tên khách hàng',
    selector: 'fullname',
    sortable: true,
    minWidth: '200px',
    cell: row => (
      <Link
        className="d-block  text-truncate text-primary cursor-pointer"
        to="/customer-detail"
      >
        {row.fullname}
      </Link>
    ),
  },

  {
    name: 'Số điện thoại',
    selector: 'phone',
    sortable: true,
    minWidth: '100px',
    cell: row => <span className="d-block  text-truncate">{row.phone}</span>,
  },

  {
    name: 'Email',
    selector: 'email',
    sortable: true,
    minWidth: '180px',
    cell: row => <span className="d-block  text-truncate">{row.email}</span>,
  },
  {
    name: 'Địa chỉ',
    selector: 'address',
    sortable: true,
    minWidth: '270px',
    cell: row => <span className="d-block  text-truncate">{row.address}</span>,
  },
  {
    name: 'Phương thức thanh toán',
    selector: 'payment_method',
    sortable: true,
    minWidth: '220px',
    cell: row => (
      <div className="py-4">
        <p className="d-block  text-truncate mb-0">
          {row.payment_method.account_name}
        </p>
        <Badge color={'warning'} className="text-white" pill>
          {row.payment_method.type}
        </Badge>
      </div>
    ),
  },
  {
    name: 'Ngày tạo',
    selector: 'create_date',
    sortable: true,
    minWidth: '100px',
    cell: row => (
      <span className="d-block  text-truncate">{row.create_date}</span>
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
                <FileText size={15} />
                <span className="align-middle ml-50">Details</span>
              </DropdownItem>
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
