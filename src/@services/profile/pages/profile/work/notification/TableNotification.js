import React from 'react'
import {NotificationColumnTable} from 'pages/columns-table/userBCA/NotificationColumnTable'
// *** Component
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterNotification from './FilterNotification'

const TableNotification = () => {
  return (
    <div className="mt-2">
      <DataTableComponent
        // *** required
        columns={NotificationColumnTable}
        query={{
          key: [],
          params: {},
          url: '',
          headers: '',
        }}
        defaultData={[{id: 123}, {id: 456}]}
        // ** optional - default undefined
        // ExpandableComponent={ExpandableTable}
        FilterComponent={FilterNotification}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Nhập nội dung tìm kiếm ..."
      />
    </div>
  )
}

export default TableNotification
