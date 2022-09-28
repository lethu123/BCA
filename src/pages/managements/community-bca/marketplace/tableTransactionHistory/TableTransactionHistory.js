import React from 'react'
import {TransactionHistoryColumnTable} from 'pages/columns-table/marketplace/TransactionHistoryColumnTable'
// *** Component
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterTransactionHistory from './FilterTransactionHistory'

const TableTransactionHistory = ({setCenteredModal}) => {
  return (
    <div className="mt-2">
      <DataTableComponent
        // *** required
        columns={TransactionHistoryColumnTable}
        query={{
          key: [],
          params: {},
          url: '',
          headers: '',
        }}
        defaultData={[{id: 123}, {id: 456}]}
        // ** optional - default undefined
        // ExpandableComponent={ExpandableTable}
        FilterComponent={FilterTransactionHistory}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Nhập nội dung tìm kiếm ..."
      />
    </div>
  )
}

export default TableTransactionHistory
