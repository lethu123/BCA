import React from 'react'

// *** columns
import {columns} from '../column/ManagerProjectDetailColumnTable'
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterProjectDetail from '../filter/FilterProjectDetail'

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
    price: '900000',
    leads: 'Quan tâm', // Quan tâm, Tiếp cận, Yêu thích
    rating: 4.3,
    status: 'Chưa bán', // Chưa bán, Đã bán, Trùng
    data_start: '20-10-2021',
    data_buy: '22-10-2021',
    data_sigin: '25-10-2012',
  },
  {
    id: 2,
    user_info: {
      id: 12,
      username: 'Quyên Quyên',
      avatar: '',
      link: '',
      ID: '356783',
    },
    phoneNumber: '094869286',
    email: 'quyen@gmail.com',
    member_flag: 2,
    price: '900000',
    leads: 'Tiếp cận', // Quan tâm, Tiếp cận, Yêu thích
    rating: 2.7,
    status: 'Trùng', // Chưa bán, Đã bán, Trùng
    data_start: '20-10-2021',
    data_buy: '22-10-2021',
    data_sigin: '25-10-2012',
  },
]

const TableProjectDetail = () => {
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
        FilterComponent={FilterProjectDetail}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Tìm kiếm theo link trích xuất"
      />
    </div>
  )
}

export default TableProjectDetail
