import React from 'react'

import {columns} from 'pages/columns-table/home/customer-experience/CustomerExperienceColumnTable'
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterMyPost from './FilterMyPost'

//data

const data = [
  {
    id: 1,
    post_info: {
      id: 11,
      name: 'Chiến thuật làm giàu 4.0',
      URL: 'http://facebook/post/1',
      avatar: '',
    },
    type: 'Đã phê duyệt',
    number_people: '234.5K',
    post_click: '2345',
    new_UID: '+3.4K',
    percent: '56%',
    status_info: {id: 12, status: 'Đang hoạt động', date: '11-11-2021'},
    date_finish: '12-23-2021',
    date_update: {id: 13, date: '12-11-2021', admin: 'Bùi Quốc Anh'},
  },
  {
    id: 2,
    post_info: {
      id: 12,
      name: 'Bài tuyển dụng 1',
      URL: 'http://facebook/post/1',
      avatar: '',
    },
    type: 'Đã phê duyệt',
    number_people: '234.5K',
    post_click: '2345',
    new_UID: '+3.4K',
    percent: '',
    status_info: {id: 12, status: 'Đang hoạt động', date: '11-11-2021'},
    date_finish: '12-23-2021',
    date_update: {id: 13, date: '12-11-2021', admin: 'Bùi Quốc Anh'},
  },
]
const TableMyPost = () => {
  return (
    <div className="mt-10 mx-5">
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
        FilterComponent={FilterMyPost}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Tìm kiếm theo link trích xuất"
      />
    </div>
  )
}

export default TableMyPost
