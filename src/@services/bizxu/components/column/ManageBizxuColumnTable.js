import {formatCurrencyVN} from '@services/ultils'
import {Badge} from 'reactstrap'

// *** Table Intl Column
export const columns = [
  {
    name: 'Tên gói Bizxu',
    selector: 'name',
    minWidth: '200px',

    cell: row => <div className="font-weight-bolder">{row.name}</div>,
  },

  {
    name: 'Số lượng BizXu',
    selector: 'sales',
    sortable: true,
    minWidth: '150px',
    center: true,
    cell: row => <span className="d-block  text-truncate">{row.sales}</span>,
  },
  {
    name: 'Giá gốc',
    selector: 'price_history',
    sortable: true,
    minWidth: '50px',
    cell: row => (
      <span className="d-block  text-truncate">
        {formatCurrencyVN(row.price_history)}
        {/* {row.currency_type_info?.name || 'vnđ'} */}
      </span>
    ),
  },
  {
    name: 'Giá bán',
    selector: 'price',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <span className="d-block  text-truncate">
        {' '}
        {formatCurrencyVN(row.price)}
        {/* {row.currency_type_info?.name || 'vnđ'} */}
      </span>
    ),
  },

  {
    name: 'Trạng thái',
    selector: 'status',
    minWidth: '120px',
    cell: row => (
      <>
        {row.is_active ? (
          <Badge color="success">Đang sử dụng</Badge>
        ) : (
          <Badge color="danger">Ngưng sử dụng</Badge>
        )}
      </>
    ),
  },
]
