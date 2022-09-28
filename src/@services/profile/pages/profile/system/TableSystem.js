import React from 'react'
import {SystemColumnTable} from 'pages/columns-table/userBCA/SystemColumnTable'
// *** Component
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterSystem from './FilterSystem'
import {Button} from 'reactstrap'
import {Users} from 'react-feather'

const TableSystem = ({setShowRelation, showRelation}) => {
  return (
    <div className="mt-2">
      <div className="text-right">
        <Button.Ripple
          color="info"
          outline
          className="mr-2"
          onClick={() => setShowRelation(!showRelation)}
        >
          <Users size={20} />
        </Button.Ripple>
      </div>
      <DataTableComponent
        // *** required
        columns={SystemColumnTable}
        query={{
          key: [],
          params: {},
          url: '',
          headers: '',
        }}
        defaultData={[{id: 123}, {id: 456}]}
        // ** optional - default undefined
        // ExpandableComponent={ExpandableTable}
        FilterComponent={FilterSystem}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Nhập nội dung tìm kiếm ..."
      />
    </div>
  )
}

export default TableSystem
