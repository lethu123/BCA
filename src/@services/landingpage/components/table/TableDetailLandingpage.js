import React from 'react'

import {columns} from '../column/DetailLandingpageColumnTable'
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterDetailLandingpage from '../filter/FilterDetailLandingpage'

//data
const data = [
  {
    id: 1,
    user_info: {
      id: 11,
      username: 'Quyên Quyên',
      avatar: '',
      link: '',
      ID: '356783',
    },
    phoneNumber: '094869286',
    email: 'quyen@gmail.com',
    member_flag: 1,
    data_start: '20-10-2021',
    data_sigin: '25-10-2012',
  },
  {
    id: 2,
    user_info: {
      id: 12,
      username: 'Quyên Hoàng',
      avatar: '',
      link: '',
      ID: '456783',
    },
    phoneNumber: '094569286',
    email: 'quyen1@gmail.com',
    member_flag: 1,
    data_start: '20-10-2021',
    data_sigin: '25-10-2012',
  },
]
const TableDetailLandingpage = () => {
  return (
    <div className="mt-10 ">
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
        FilterComponent={FilterDetailLandingpage}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Tìm kiếm theo link trích xuất"
      />
    </div>
  )
}

export default TableDetailLandingpage
