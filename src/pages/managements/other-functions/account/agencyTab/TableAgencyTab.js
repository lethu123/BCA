import React from 'react'
import {Badge} from 'reactstrap'
import {AgencyColumnTable} from 'pages/columns-table/orderSetting/account/AgencyColumnTable'
// *** Component
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterAgencyTab from './FilterAgencyTab'
import {Edit} from 'react-feather'

const TableAgencyTab = ({setCenteredModal}) => {
  let columns = [
    ...AgencyColumnTable,
    {
      name: 'Chỉnh sửa',
      maxWidth: '160px',
      cell: row => (
        <Badge
          color="light-primary"
          className="cursor-pointer"
          onClick={() => setCenteredModal(true)}
        >
          <Edit size={17} /> <span style={{fontSize: 11}}> Chỉnh sửa</span>
        </Badge>
      ),
    },
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
        FilterComponent={FilterAgencyTab}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Tìm kiếm theo link trích xuất"
      />
    </div>
  )
}

export default TableAgencyTab
