import React from 'react'
import {ManageGiveCoinsColumnTable} from 'pages/columns-table/manage-community-bca/communityManagement/ManageGiveCoinsColumnTable'
// *** Component
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterBcaGiveCoins from './FilterBcaGiveCoins'

const TableBcaGiveCoins = () => {
  return (
    <div className="mt-2">
      <DataTableComponent
        // *** required
        columns={ManageGiveCoinsColumnTable}
        query={{
          key: [],
          params: {},
          url: '',
          headers: '',
        }}
        defaultData={[{id: 123}, {id: 456}]}
        // ** optional - default undefined
        // ExpandableComponent={ExpandableTable}
        FilterComponent={FilterBcaGiveCoins}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Nhập nội dung tìm kiếm ..."
      />
    </div>
  )
}

export default TableBcaGiveCoins
