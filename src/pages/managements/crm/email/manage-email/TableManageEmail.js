import React from 'react'
import {columns} from 'pages/columns-table/crm/email/ManageEmailColumnTable'
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterManageEmail from './FilterManageEmail'

//data
const data = [
  {
    id: 1,
    ID: '1234',
    topic: 'Mừng sinh nhật',
    customer: {id: 11, username: 'Hoàng Quyên', avatar: '', ID: '123434'},
    user_send: {id: 12, username: 'Itachi', avatar: '', ID: '121434'},
    send_date: '08-20-2021',
    view_mail: '1',
    rep_mail: '3',
    campaign: 'Mừng sinh nhật',
    source: 'Automation',
  },
  {
    id: 2,
    ID: '1234',
    topic: 'Tri ân tháng 7',
    customer: {id: 11, username: 'Thị Quyên', avatar: '', ID: '123434'},
    user_send: {id: 12, username: 'Uchiha', avatar: '', ID: '121434'},
    send_date: '08-20-2021',
    view_mail: '1',
    rep_mail: '3',
    campaign: 'Mừng sinh nhật',
    source: 'Chiến dịch email',
  },
]

const TableManageEmail = () => {
  // const [modal, setModal] = useState(false)

  // *** Function to handle Modal toggle
  // const handleModal = () => setModal(!modal)
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
        FilterComponent={FilterManageEmail}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Tìm kiếm "
      />
    </div>
  )
}

export default TableManageEmail
