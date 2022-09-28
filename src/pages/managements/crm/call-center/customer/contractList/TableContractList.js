import React from 'react'
import {CallCenterColumnTable} from 'pages/columns-table/crm/callCenter/CallCenter'
// *** Component
import DataTableComponent from 'components/data-table/DataTableComponent'

const TableContractList = () => {
  return (
    <div className="">
      <DataTableComponent
        // *** required
        columns={CallCenterColumnTable}
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

export default TableContractList
