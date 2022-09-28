import React from 'react'

// *** components
import {columns} from '../column/HistoryBizxuColumnTable'
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterHistoryBizxu from '../filter/FilterHistoryBizxu'

// ** datatable
import {BizxuDatatable} from '@services/bizxu'

const TableRequestBizxuCenterPage = () => {
  const query = BizxuDatatable.useListHistoryBizxuTransaction({
    is_current_user: true,
    is_request: true,
  })

  return (
    <div className="mt-10 ">
      <DataTableComponent
        // *** required
        columns={columns}
        query={query}
        // ** optional - default undefined
        // ExpandableComponent={ExpandableTable}
        FilterComponent={FilterHistoryBizxu}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Tìm kiếm giao dịch"
      />
    </div>
  )
}

export default TableRequestBizxuCenterPage
