import React from 'react'

import {columns} from 'pages/columns-table/manage-data-center/customer-experience/PostDetailColumnTable'
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterDetailPost from './FilterDetailPost'

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
    price: '900000',
    data_source: 'Thành viên post', //Thành viên post, BCA post, LandingPage, FacebookGroup,
    label_data: 'KHTN',
    member_flag: 1,
    customer_flag: 2,
    project_source: {id: 1, name: 'Sàng lọc insurance', type: 'Dự án đối tác'},
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
      username: 'Quyên Hoàng',
      avatar: '',
      link: '',
      ID: '456783',
    },
    phoneNumber: '094569286',
    email: 'quyen1@gmail.com',
    price: '900000',
    data_source: 'BCA post', //Thành viên post, BCA post, LandingPage, FacebookGroup,
    label_data: 'UVTN',
    member_flag: 1,
    customer_flag: 2,
    project_source: {id: 1, name: 'Sàng lọc insurance', type: 'Dự án đối tác'},
    leads: 'Yêu thích', // Quan tâm, Tiếp cận, Yêu thích
    rating: 3.2,
    status: 'Đã bán', // Chưa bán, Đã bán, Trùng
    data_start: '20-10-2021',
    data_buy: '22-10-2021',
    data_sigin: '25-10-2012',
  },
]

const TableDetailPost = () => {
  return (
    <div className="mt-3 mx-5">
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
        FilterComponent={FilterDetailPost}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Tìm kiếm theo link trích xuất"
      />
    </div>
  )
}

export default TableDetailPost
