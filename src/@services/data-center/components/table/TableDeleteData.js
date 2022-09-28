import React from 'react'

// *** components
import {columns} from '../column/DeleteDataColumnTable'
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterDeleteData from '../filter/FilterDeleteData'

//data
const data = [
  {
    id: 1,
    request: {
      id: 20,
      title: 'Duyệt hoàn data trùng',
      ID: '356783',
      image: '',
      link: '',
    },
    user_info: {
      id: 11,
      username: 'Quyên Quyên',
      avatar: '',
      link: '',
      ID: '356783',
    },

    delete: {
      id: 20,
      username: 'Nguyễn Văn A',
      rating: 3.7,
    },
    data_request: '23-05-2021',
  },
  {
    id: 2,
    request: {
      id: 20,
      title: 'Duyệt hoàn data trùng',
      ID: '356783',
      image: '',
      link: '',
    },
    user_info: {
      id: 12,
      username: 'Quyên 1',
      avatar: '',
      link: '',
      ID: '356783',
    },

    delete: {
      id: 21,
      username: 'Nguyễn Văn A',
      rating: 2.6,
    },
    data_request: '23-05-2021',
  },
]

const TableDeleteData = () => {
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
        FilterComponent={FilterDeleteData}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Search"
      />
    </div>
  )
}

export default TableDeleteData
