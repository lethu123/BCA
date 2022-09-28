import React from 'react'
import {Card} from 'reactstrap'

// *** components
import {columns} from '../column/DataCenterColumnTable'
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterManagerData from '../filter/FilterManagerData'

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

const TableManageData = () => {
  return (
    <div className="mt-3">
      <Card className="p-2 px-10 mb-15">
        <p>Tổng số dữ liệu các ứng viên của bạn</p>
        <h4 className="font-weight-bold text-primary">
          6123,325 Dữ liệu ứng viên
        </h4>
      </Card>

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
        FilterComponent={FilterManagerData}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Search"
      />
    </div>
  )
}

export default TableManageData
