import React from 'react'
import {PromotionCodeColumnTable} from 'pages/columns-table/promotionCode/PromotionCodeColumnTable'
// *** Component
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterPromotionCode from './FilterPromotionCode'

const TablePromotionCode = () => {
  return (
    <div className="mt-2">
      <DataTableComponent
        // *** required
        columns={PromotionCodeColumnTable}
        query={{
          key: [],
          params: {},
          url: '',
          headers: '',
        }}
        defaultData={[{id: 123}, {id: 456}]}
        // ** optional - default undefined
        // ExpandableComponent={ExpandableTable}
        FilterComponent={FilterPromotionCode}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Nhập nội dung tìm kiếm ..."
      />
    </div>
  )
}

export default TablePromotionCode
