import React from 'react'
import {StatusVerificationColumnTable} from 'pages/columns-table/orderSetting/dataConfiguration/StatusVerificationColumnTable'
// *** Components
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterStatusVerificationTab from './FilterStatusVerificationTab'

const TableStatusVerificationTab = ({setCenteredModal}) => {
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
    ...StatusVerificationColumnTable,
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
        FilterComponent={FilterStatusVerificationTab}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Tìm kiếm theo link trích xuất"
      />
    </div>
  )
}

export default TableStatusVerificationTab
