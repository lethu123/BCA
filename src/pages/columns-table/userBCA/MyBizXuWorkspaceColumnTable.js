import {Edit, MoreVertical, Trash} from 'react-feather'
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap'
import moment from 'moment'

// *** Table Intl Column
export const columns = [
  {
    name: 'ID giao dịch',
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
    name: 'Chi tiết giao dịch',
    selector: 'detail_transaction',
    sortable: true,
    minWidth: '170px',
    cell: row => (
      <span className="d-block  text-truncate">{row.detail_transaction}</span>
    ),
  },
  {
    name: 'Loại giao dịch',
    selector: 'type',
    sortable: true,
    maxWidth: '150px',
    cell: row => (
      <Badge color="light-secondary" className="text-white" pill>
        {row.type}
      </Badge>
    ),
  },
  {
    name: 'Số lượng',
    selector: 'number',
    sortable: true,
    minWidth: '100px',
    cell: row => (
      <span className="d-block  text-truncate w-100 text-center">
        {row.number}
      </span>
    ),
  },

  {
    name: 'Đơn giá',
    selector: 'price',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <span className="d-block  text-truncate w-100">{row.price} đ</span>
    ),
  },
  {
    name: 'Tổng giá',
    selector: 'total',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <span className="d-block  text-truncate text-danger w-100">
        {row.total} đ
      </span>
    ),
  },

  {
    name: 'Trạng thái',
    selector: 'status_info',
    sortable: true,
    minWidth: '170px',
    cell: row => (
      <div>
        <Badge
          color={
            row.status_info.status === 'Duyệt' ? 'success' : 'light-secondary'
          }
          outline
          className="text-white"
          pill
        >
          {row.status_info.status}
        </Badge>
        <span className="d-block  text-truncate" style={{fontSize: '11px'}}>
          Cập nhật: {row.status_info.date}
        </span>
      </div>
    ),
  },

  {
    name: 'Ngày thực hiện',
    selector: 'date_start',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <span className="d-block  text-truncate">
        {moment(row.date_start).format('DD-MM-yyyy')}
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
