import React, {useState} from 'react'
import {columns} from 'pages/columns-table/crm/automation/AutoJobColumnTable'
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterAutojob from './FilterAutoJob'

//data
const data = [
  {
    id: 1,
    ID: '1234',
    name: 'Upsell Tháng 7',
    type: 'Chiến dịch bán hàng',
    create_date: '11-20-2021',
    number_date: '10',
  },
  {
    id: 2,
    ID: '1234',
    name: 'Chi ân tháng 7',
    type: 'Chăm sóc Facebook',
    create_date: '11-20-2021',
    number_date: '10',
  },
]

const Tableautojob = () => {
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
        FilterComponent={FilterAutojob}
        isExport
        handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Search"
      />
    </div>
  )
}

export default Tableautojob
