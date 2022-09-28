import React, {useState} from 'react'
import {columns} from 'pages/columns-table/crm/automation/AutoTaskColumnTable'
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterAutoTask from './FilterAutoTask'

//data
const data = [
  {
    id: 1,
    ID: '1234',
    name: 'Hẹn gọi lại',
    status: 'Khách hàng bận',
    form: 'Calls',
    create_date: '11-20-2021',
    time: '2 giờ',
  },
  {
    id: 2,
    ID: '1234',
    name: 'Hẹn gọi lại',
    status: 'Khách hàng bận',
    form: 'Zalo',
    create_date: '11-20-2021',
    time: '2 giờ',
  },
]

const TableAutoTask = () => {
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
        FilterComponent={FilterAutoTask}
        isExport
        handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Search "
      />
    </div>
  )
}

export default TableAutoTask
