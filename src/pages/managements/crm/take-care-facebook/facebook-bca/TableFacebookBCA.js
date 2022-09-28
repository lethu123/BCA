import React from 'react'

import {columns} from 'pages/columns-table/crm/take-care-facebook/FacebookBCAColumnTable'
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterFacebookBCA from './FilterFacebookBCA'

//data
const data = [
  {
    id: 1,
    facebook_BCA: {
      id: 11,
      username: 'Dương Hà',
      avatar: '',
    },

    action: 'Yêu cầu kết bạn', //Like,Bình Luận
    type_action: 'Redo', //New
    campaign: 'adcrf',
    create_date: '05-06-2021',
    use_date: '03-07-2021',
  },
  {
    id: 2,
    facebook_BCA: {
      id: 12,
      username: 'Dương Hà',
      avatar: '',
    },

    action: 'Bình luận', //Like,Bình Luận
    type_action: 'New', //New
    campaign: 'adcrf',
    create_date: '05-06-2021',
    use_date: '03-07-2021',
  },
]

const TableFacebookBCA = () => {
  return (
    <div className="mt-10">
      <DataTableComponent
        // *** required
        columns={columns}
        query={{
          key: [],
          params: {},
          url: '',
          headers: '',
        }}
        defaultData={data}
        // ** optional - default undefined
        // ExpandableComponent={ExpandableTable}
        FilterComponent={FilterFacebookBCA}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Search"
      />
      <div className="font-weight-bold mt-3 ml-10 fs-5">
        Total: <span className="text-success">2000</span>
      </div>
    </div>
  )
}

export default TableFacebookBCA
