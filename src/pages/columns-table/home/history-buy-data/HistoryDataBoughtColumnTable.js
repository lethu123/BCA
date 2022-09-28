import {Edit, FileText, MoreVertical, Trash} from 'react-feather'
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap'
// *** Custom Components

// *** Table Intl Column
export const columns = [
  {
    name: 'ID',
    selector: 'id',
    sortable: true,
    minWidth: '100px',
    cell: row => <span className="d-block  text-truncate">#{row.id}</span>,
  },
  {
    name: 'Danh mục',
    selector: 'category',
    sortable: true,
    minWidth: '100px',
    cell: row => (
      <span className="d-block  text-truncate">
        {' '}
        {row.category && row.category.name}
      </span>
    ),
  },
  {
    name: 'Số lượng',
    selector: 'count',
    sortable: true,
    minWidth: '100px',
    cell: row => (
      <span className="d-block  text-truncate">{row.count} liên hệ</span>
    ),
  },
  {
    name: 'Đơn giá',
    selector: 'price',
    sortable: true,
    minWidth: '100px',
    cell: row => (
      <span className="d-block  text-truncate">{row.price} BizXu</span>
    ),
  },
  {
    name: 'Tổng giá',
    selector: 'total',
    sortable: true,
    minWidth: '100px',
    cell: row => (
      <span className="d-block  text-truncate">{row.total} BizXu</span>
    ),
  },
  {
    name: 'Dự án',
    selector: 'name',
    sortable: true,
    minWidth: '200px',
  },

  {
    name: 'Ngày mua',
    selector: 'date_bought',
    sortable: true,
    minWidth: '150px',
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
