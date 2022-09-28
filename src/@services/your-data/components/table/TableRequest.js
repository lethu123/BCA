import React from 'react'

import {columns} from 'pages/columns-table/home/your-data/RequestColumnTable'
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterRequest from '../filter/FilterRequest'

//data
const data = [
  {
    id: 1,
    request_info: {id: 11, name: 'Chuyển Data', avatar: '', ID: '28652'},
    category: 'Chuyển',
    date_interact: '11-11-2021',
    date_sale: '12-11-2021',
    date_sigin: '11-11-2021',
    status: 'Chờ xử lý',
  },
  {
    id: 2,
    request_info: {id: 11, name: 'Chuyển Data', avatar: '', ID: '28652'},
    category: 'Chuyển',
    date_interact: '11-11-2021',
    date_sale: '12-11-2021',
    date_sigin: '11-11-2021',
    status: 'Chờ xử lý',
  },
]

const TableRequest = () => {
  return (
    <div className=" mx-5">
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
        FilterComponent={FilterRequest}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Tìm kiếm theo link trích xuất"
      />
    </div>
  )
}

export default TableRequest
