import {useEffect, useState} from 'react'
import DataTableComponent from './DataTableComponent'

// *** Table Data & Columns
import ExpandableTable from './data'

// *** Add New Modal Component
import AddNewModal from './AddNewModal'

// *** Filter
import Filter from './Filter'

// *** Query
import {useListAllLinkCrawlOfUser} from 'hook/customer/customerHook'

// ** component
// import {columns} from 'pages/columns-table/customer/MyPostLinkColumnTable'

// *** Function to handle delete selected row
const handleDelete = rows => console.log(rows)

const DataTable = () => {
  const [modal, setModal] = useState(false)

  // *** Function to handle Modal toggle
  const handleModal = () => setModal(!modal)

  const defaultQuery = {
    key: [],
    params: {},
    url: '',
    headers: '',
  }
  // const columns = []

  return (
    <div>
      <DataTableComponent
        // *** required
        columns={[
          {
            name: 'ID',
            selector: 'id',
          },
          {
            name: 'Name',
            selector: 'username',
          },
          {
            name: 'Email',
            selector: 'email',
          },
          {
            name: 'Phone',
            selector: 'phone',
          },
        ]}
        query={defaultQuery}
        defaultData={[
          {id: 123, username: 'Thu', email: 'thu@gmail.com', phone: '09090909'},
          {
            id: 456,
            username: 'Huy',
            email: 'huy@gmail.com',
            phone: '0933901231',
          },
        ]}
        // ** optional - default undefined
        // ExpandableComponent={ExpandableTable}
        FilterComponent={Filter}
        // isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Tìm kiếm theo link trích xuất"
      />
      <AddNewModal open={modal} handleModal={handleModal} />
    </div>
  )
}

export default DataTable
