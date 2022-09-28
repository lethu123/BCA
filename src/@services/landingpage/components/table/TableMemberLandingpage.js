import React from 'react'
import {columns} from '../column/MemberLandingpageColumnTable'
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterMemberLandingpage from '../filter/FilterMemberLandingpage'

//data
const data = [
  {
    id: 1,
    ID: '#142632',
    user_info: {
      id: 11,
      username: 'Hoàng Quyên landingpage',
      ID: '83746',
      avatar: '',
    },
    type_LDP: 'KHTN',
    number_data: '8743',
    personal_use: {id: 12, avatar: '', username: 'Dương Hà', ID: '974634'},
    status: 'active',
    date_create: '05-06-2021',
    date_use: {id: 13, date: '09-23-2021', admin: 'Bùi Quốc Anh'},
  },
  {
    id: 2,
    ID: '#142632',
    user_info: {
      id: 11,
      username: 'Hoàng Quyên landingpage',
      ID: '83746',
      avatar: '',
    },
    type_LDP: 'UVTN',
    number_data: '8743',
    personal_use: {id: 12, avatar: '', username: 'Dương Hà', ID: '974634'},
    status: 'inactive',
    date_create: '05-06-2021',
    date_use: {id: 13, date: '09-23-2021', admin: 'Bùi Quốc Anh'},
  },
]
const TableMemberLandingpage = () => {
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
        FilterComponent={FilterMemberLandingpage}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Tìm kiếm theo link trích xuất"
      />
    </div>
  )
}

export default TableMemberLandingpage
