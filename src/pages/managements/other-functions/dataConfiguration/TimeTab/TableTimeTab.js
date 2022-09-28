import React from 'react'
import {TimeColumnTable} from 'pages/columns-table/orderSetting/dataConfiguration/TimeColumnTable'
// *** Components
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterTimeTab from './FilterTimeTab'

const TableTimeTab = ({setCenteredModal}) => {
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
        <p onClick={() => setCenteredModal(true)} className="text-primary">
          Data Center
        </p>
      ),
    },
    ...TimeColumnTable,
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
        FilterComponent={FilterTimeTab}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Tìm kiếm theo link trích xuất"
      />
    </div>
  )
}

export default TableTimeTab
