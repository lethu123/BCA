import React from 'react'
import {CareHistoryColumnTable} from 'pages/columns-table/crm/callCenter/CareHistory'
// *** Component
import DataTableComponent from 'components/data-table/DataTableComponent'

const TableCareHistory = () => {
  return (
    <div className="">
      <DataTableComponent
        // *** required
        columns={CareHistoryColumnTable}
        query={{
          key: [],
          params: {},
          url: '',
          headers: '',
        }}
        defaultData={[{id: 123}, {id: 456}]}
        // ** optional - default undefined
        // ExpandableComponent={ExpandableTable}
        // FilterComponent={FilterContractList}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Nhập nội dung tìm kiếm ..."
      />
    </div>
  )
}

export default TableCareHistory
