import React from 'react'

import {columns} from '../column/HistoryBizxuColumnTable'
import DataTableComponent from 'components/data-table/DataTableComponent'

//data
const data = [
  {
    id: 1,
    ID: '#80487',
    bizxu_info: {id: 11, name: 'Gói Bizxu cơ bản', ID: '123874', avatar: ''},
    count_buy: 2,
    price: 10000,
    total: 100000,
    status: 'Duyệt',
    date_start: {id: 12, date: '11-10-2021', admin: 'Bùi Quốc Anh'},
  },
  {
    id: 2,
    ID: '#80487',
    bizxu_info: {id: 12, name: 'Gói Bizxu cơ bản', ID: '123874', avatar: ''},
    count_buy: 2,
    price: 10000,
    total: 100000,
    status: 'Từ chối',
    date_start: {id: 13, date: '11-10-2021', admin: 'Bùi Quốc Anh'},
  },
  {
    id: 3,
    ID: '#80487',
    bizxu_info: {id: 12, name: 'Gói Bizxu gold', ID: '123874', avatar: ''},
    count_buy: 2,
    price: 10000,
    total: 100000,
    status: 'Đang xủ lý',
    date_start: {id: 13, date: '11-10-2021', admin: 'Bùi Quốc Anh'},
  },
]
const HistoryBizXu = () => {
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
        // FilterComponent={FilterManagerData}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Tìm kiếm theo link trích xuất"
      />
    </div>
  )
}

export default HistoryBizXu
