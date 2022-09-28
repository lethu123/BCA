import React, {useState} from 'react'
import {columns} from 'pages/columns-table/crm/email/CampaignEmailColumnTable'
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterCampaignEmail from './FilterCampaignEmail'
import ModalCreateCampaignEmail from './ModalCreateCampaignEmail'

//data
const data = [
  {
    id: 1,
    ID: '1234',
    name: 'Mừng Sinh nhật',
    count_customer: '500',
    view_mail: '5000',
    rep_mail: '400',
    send_date: '06-05-2021',
  },
  {
    id: 2,
    ID: '1234',
    name: 'Tri ân tháng 7',
    count_customer: '500',
    view_mail: '5000',
    rep_mail: '400',
    send_date: '06-05-2021',
  },
]

const TableCampaignEmail = () => {
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
        FilterComponent={FilterCampaignEmail}
        isExport
        handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Search"
      />
      <ModalCreateCampaignEmail modal={modal} setModal={setModal} />
    </div>
  )
}

export default TableCampaignEmail
