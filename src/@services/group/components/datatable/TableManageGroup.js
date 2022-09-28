import React from 'react'
import {ManageGroupColumnTable} from './ManageGroupColumnTable'
// *** Component
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterManageGroup from '../filter/FilterManageGroup'
import {GroupDatatable} from '@services/group'

const TableManageGroup = () => {
  const query = GroupDatatable.useListAllGroupSystem()

  return (
    <div className="mt-2">
      <DataTableComponent
        // *** required
        columns={ManageGroupColumnTable}
        query={query}
        // ** optional - default undefined
        // ExpandableComponent={ExpandableTable}
        FilterComponent={FilterManageGroup}
        isExport
        searchPlaceholder="Nhập nội dung tìm kiếm ..."
      />
    </div>
  )
}

export default TableManageGroup
