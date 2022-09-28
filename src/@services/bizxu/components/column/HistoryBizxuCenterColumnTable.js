import {Badge} from 'reactstrap'
import moment from 'moment'

import {formatCurrencyVN} from '@services/ultils'

// *** Table Intl Column
export const columns = [
  {
    name: 'Mã giao dịch',
    selector: 'ID',
    sortable: true,
    minWidth: '150px',
    cell: row => <span className="d-block  text-truncate">{row.code}</span>,
  },

  {
    name: 'Danh mục',
    selector: 'transaction_cagetory_info',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <span className="d-block  text-truncate">
        {row.transaction_cagetory_info?.name}{' '}
      </span>
    ),
  },
  {
    name: 'Loại giao dịch',
    selector: 'transaction_type_info',
    minWidth: '120px',
    cell: row => (
      <Badge color="light-primary" className="text-white" pill>
        {row.transaction_type_info?.name}
      </Badge>
    ),
  },
  {
    name: 'Số lượng',
    selector: 'amount',
    sortable: true,
    minWidth: '70px',
    cell: row => (
      <span className="d-block  text-truncate text-center">
        {row.amount} gói
      </span>
    ),
  },
  {
    name: 'Đơn giá',
    selector: 'price',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <span className="d-block  text-truncate">
        {formatCurrencyVN(row.unit_price)}{' '}
        {/* {row.bizxu_package_info?.currency_type_info?.name || 'vnđ'} */}
      </span>
    ),
  },
  {
    name: 'Tổng giá',
    selector: 'price',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <span className="d-block  text-truncate text-success">
        {' '}
        {formatCurrencyVN(row.total_price)}{' '}
        {/* {row.bizxu_package_info?.currency_type_info?.name || 'vnđ'} */}
      </span>
    ),
  },
  {
    name: 'Ngày thực hiện giao dịch',
    selector: 'created_at',
    sortable: true,
    minWidth: '200px',
    cell: row => (
      <div>
        <span className="d-block  text-truncate">
          {moment(row.created_at).format('DD-MM-yyyy')}
        </span>
      </div>
    ),
  },
  {
    name: 'Trạng thái',
    selector: 'transaction_status_type_info',
    sortable: true,
    minWidth: '170px',
    cell: row => (
      <div>
        <Badge
          color={
            row.transaction_status_type_info?.code === 'NEW'
              ? 'warning'
              : row.transaction_status_type_info?.code === 'APPROVED'
              ? 'success'
              : 'light-danger'
          }
          className="text-white"
          pill
        >
          {row.transaction_status_type_info?.name}
        </Badge>
        <p className="mb-0" style={{fontSize: '11px'}}>
          Cập nhật:{' '}
          <span className="text-primary">
            {' '}
            {moment(row.updated_at).format('DD-MM-yyyy')}{' '}
          </span>
        </p>
      </div>
    ),
  },
]
