import React from 'react'

// *** component
import {columns} from '../column/DeletedProjectColumnTable'
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterProjectDelete from '../filter/FilterProjectDelete'

//data
const data = [
  {
    id: 1,
    project_info: {
      id: 11,
      name: 'Dự án thi phương Insurance',
      image: '',
      link: '',
      ID: '65783',
    },
    category: 'Dự án đối tác', // Dự án thành viên
    type_project: 'Ứng viên tiềm năng',
    status_project: {id: 1, value: 'Hoàn thành', time: '12-10-2021'}, // Hoạt động
    number_contact: {id: 1, bought: 85, total: 250},
    price_contact: 180000,
    project_revenue: 1480000,
    date_info: {id: 1, date_create: '11-25-2021', admin: 'Hoàng Quyên'},
  },
  {
    id: 2,
    project_info: {
      id: 12,
      name: 'Dự án thi phương Insurance',
      image: '',
      link: '',
      ID: '65783',
    },
    category: 'Dự án thành viên', // Dự án thành viên
    type_project: 'Khách hàng tiềm năng',
    status_project: {id: 1, value: 'Hoạt động', time: '12-10-2021'}, // Hoạt động
    number_contact: {id: 1, bought: 85, total: 250},
    price_contact: 180000,
    project_revenue: 1480000,
    date_info: {id: 1, date_create: '11-25-2021', admin: 'Hoàng Quyên 1'},
  },
]
const TableProjectDelete = () => {
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
        FilterComponent={FilterProjectDelete}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Tìm kiếm theo link trích xuất"
      />
    </div>
  )
}

export default TableProjectDelete
