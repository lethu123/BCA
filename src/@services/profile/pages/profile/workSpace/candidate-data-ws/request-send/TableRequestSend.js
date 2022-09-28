import React from 'react'

import {columns} from 'pages/columns-table/userBCA/RequestSendWorkspaceColumnTable'
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterRequestSend from './FilterRequestSend'

//data
const data = [
  {
    id: 1,
    ID: '#12635',
    request_info: {id: 11, avatar: '', name: 'Chuyển Data', ID: '46836'},
    category: 'Chuyển dữ liệu',
    type: 'Hoàn',
    price: '120000',
    date_start: {date: '10-22-2021', admin: 'Bùi Quốc Anh'},
    status: 'Đang xử lý',
  },
  {
    id: 2,
    ID: '#12635',
    request_info: {id: 11, avatar: '', name: 'Chuyển Data', ID: '46836'},
    category: 'Chuyển dữ liệu',
    type: 'Chuyển dữ liệu',
    price: '120000',
    date_start: {date: '10-22-2021', admin: 'Bùi Quốc Anh'},
    status: 'Từ chối',
  },
  {
    id: 3,
    ID: '#12635',
    request_info: {id: 11, avatar: '', name: 'Chuyển Data', ID: '46836'},
    category: 'Yêu cầu hoàn',
    type: 'Hoàn',
    price: '120000',
    date_start: {date: '10-22-2021', admin: 'Bùi Quốc Anh'},
    status: 'Đã duyệt',
  },
]

const TableRequestSend = () => {
  return (
    <div className=" mx-3">
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
        FilterComponent={FilterRequestSend}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Tìm kiếm theo link trích xuất"
      />
    </div>
  )
}

export default TableRequestSend
