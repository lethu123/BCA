import React from 'react'

import {InteractiveColumnTable} from 'pages/columns-table/orderSetting/dataConfiguration/InteractiveColumnTable'
// *** Component ***
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterInteractiveTab from './FilterInteractiveTab'

const TableInteractiveTab = ({setCenteredModal}) => {
  let columns = [
    {
      name: 'ID',
      selector: 'id',
      maxWidth: '100px',
      cell: row => <p>210528</p>,
    },
    {
      name: 'Nguồn Data',
      selector: 'fullnameCampaign',
      maxWidth: '180px',
      cell: row => (
        <p className="text-primary" onClick={() => setCenteredModal(true)}>
          Data Center
        </p>
      ),
    },
    ...InteractiveColumnTable,
  ]
  return (
    <div className="mt-2">
      <DataTableComponent
        // *** required
        columns={columns}
        query={{
          key: [],
          params: {},
          url: '',
          headers: '',
        }}
        defaultData={[{id: 123}, {id: 456}]}
        // ** optional - default undefined
        // ExpandableComponent={ExpandableTable}
        FilterComponent={FilterInteractiveTab}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Tìm kiếm theo link trích xuất"
      />
    </div>
  )
}

export default TableInteractiveTab
