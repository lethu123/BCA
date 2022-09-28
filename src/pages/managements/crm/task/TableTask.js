import React, {useState} from 'react'
import {columns} from 'pages/columns-table/crm/task/TaskColumnTable'
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterTask from './FilterTask'

//data
const data = [
  {
    id: 1,
    ID: '12345',
    id_customer: '123',
    name_customer: 'Hoàng Quyên',
    type_task: 'Sinh nhật',
    join_insurance: 'Bảo hiểm nhân thọ',
    health: '10',
    status: '10',
    create_date: '10-11-2021',
    start_date: '11-12-2021',
    end_date: '12-01-2022',
  },
  {
    id: 2,
    ID: '12345',
    id_customer: '123',
    name_customer: 'Thu Kara',
    type_task: 'Nhắc Phí',
    join_insurance: 'Bảo hiểm sức khỏe',
    health: '10',
    status: '10',
    create_date: '10-11-2021',
    start_date: '11-12-2021',
    end_date: '12-01-2022',
  },
]

const TableTask = () => {
  const [modal, setModal] = useState(false)

  // *** Function to handle Modal toggle
  const handleModal = () => setModal(!modal)
  return (
    <div>
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
        FilterComponent={FilterTask}
        isExport
        handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Search"
      />
    </div>
  )
}

export default TableTask
