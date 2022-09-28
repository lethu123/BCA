import React, {useState} from 'react'
import {Edit} from 'react-feather'

// *** components
import ModalAddNoteTakeCare from '../modal/ModalAddNoteTakeCare'
import {columns} from '../column/ProfileUserColumnTable'
import DataTableComponent from 'components/data-table/DataTableComponent'

//data
const data = [
  {
    id: 1,
    ID: '024874',
    description: 'Mô tả thông tin ghi chú',
    date_create: '10-11-2021',
  },
  {
    id: 2,
    ID: '024874',
    description: 'Mô tả thông tin ghi chú',
    date_create: '10-11-2021',
  },
  {
    id: 3,
    ID: '024874',
    description: 'Mô tả thông tin ghi chú',
    date_create: '10-11-2021',
  },
  {
    id: 4,
    ID: '024874',
    description: 'Mô tả thông tin ghi chú',
    date_create: '10-11-2021',
  },
  {
    id: 5,
    ID: '024874',
    description: 'Mô tả thông tin ghi chú',
    date_create: '10-11-2021',
  },
  {
    id: 6,
    ID: '024874',
    description: 'Mô tả thông tin ghi chú',
    date_create: '10-11-2021',
  },
  {
    id: 7,
    ID: '024874',
    description: 'Mô tả thông tin ghi chú',
    date_create: '10-11-2021',
  },
]
const TableProfileUser = () => {
  // *** State
  const [addNote, setAddNote] = useState(false)

  return (
    <div className="mt-3">
      <div className="d-lg-flex mb-5 align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <h4 className="mr-2">Lịch sử chăm sóc</h4>
          <span className="text-primary mb-0">Có 3 lần chăm sóc KH</span>
        </div>

        <div>
          <button
            className="btn btn-primary mr-2"
            onClick={() => setAddNote(!addNote)}
          >
            <Edit size={20} className="mr-2" />
            Thêm ghi nhớ chăm sóc
          </button>
        </div>
      </div>

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
        // FilterComponent={Filter}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Tìm kiếm theo link trích xuất"
      />
      <ModalAddNoteTakeCare addNote={addNote} setAddNote={setAddNote} />
    </div>
  )
}

export default TableProfileUser
