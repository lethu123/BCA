import React from 'react'

// *** Components
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterNotificationSetting from './FilterNotificationSetting'

//datatable
import {NotificationDatatable} from '@services/notification'
import {NotificationSettingColumnTable} from 'pages/columns-table/orderSetting/NotificationSettingColumnTable'

const TableNotificationSettings = () => {
  // *** State
  const query = NotificationDatatable.useGetListConfigNotification()

  return (
    <div className="mt-10">
      <DataTableComponent
        // *** required
        columns={NotificationSettingColumnTable}
        query={query}
        // ** optional - default undefined
        // ExpandableComponent={ExpandableTable}
        FilterComponent={FilterNotificationSetting}
        // isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Nhập nội dung tìm kiếm ..."
      />
    </div>
  )
}

export default TableNotificationSettings
