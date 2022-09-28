import React from 'react'
import {StatusColumnTable} from 'pages/columns-table/orderSetting/dataConfiguration/StatusColumnTable'
// *** components
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterStatusTab from './FilterStatusTab'

const TableStatusTab = ({setCenteredModal}) => {
  let columns = [
    {
      name: 'ID',
      selector: 'id',
      maxWidth: '100px',
      cell: row => <p>210528</p>,
    },
    {
      name: 'Tên trạng thái',
      selector: 'fullnameCampaign',
      maxWidth: '180px',
      cell: row => (
        <p className="text-primary" onClick={() => setCenteredModal(true)}>
          Mới đăng ký
        </p>
      ),
    },
    ...StatusColumnTable,
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
        FilterComponent={FilterStatusTab}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Tìm kiếm theo link trích xuất"
      />
    </div>
  )
}

export default TableStatusTab
