import React from 'react'
import {ManageMemberGiveCoinsColumnTable} from 'pages/columns-table/manage-community-bca/communityManagement/ManageMemberGiveCoinsColumnTable'
// *** Component
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterMemberGiveCoins from './FilterMemberGiveCoins'

const TableMemberGiveCoins = () => {
  return (
    <div className="mt-2">
      <DataTableComponent
        // *** required
        columns={ManageMemberGiveCoinsColumnTable}
        query={{
          key: [],
          params: {},
          url: '',
          headers: '',
        }}
        defaultData={[{id: 123}, {id: 456}]}
        // ** optional - default undefined
        // ExpandableComponent={ExpandableTable}
        FilterComponent={FilterMemberGiveCoins}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Nhập nội dung tìm kiếm ..."
      />
    </div>
  )
}

export default TableMemberGiveCoins
