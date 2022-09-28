import React, {useState} from 'react'
import {RequestColumnTable} from 'pages/columns-table/marketplace/RequestColumnTable'
import {Badge} from 'reactstrap'
// *** Component
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterRequest from './FilterRequest'
import ModalActivationInformation from './ModalActivationInformation'

const TableTransactionHistory = () => {
  const [centeredModal, setCenteredModal] = useState(false)
  let columns = [
    ...RequestColumnTable,
    {
      name: 'Trạng thái',
      selector: 'Status',
      maxWidth: '170px',
      cell: row => (
        <Badge
          className="cursor-pointer"
          color="light-warning"
          onClick={() => setCenteredModal(true)}
        >
          Chờ xử lý
        </Badge>
      ),
    },
  ]

  return (
    <div className="mt-2">
      <DataTableComponent
        // *** required
        columns={columns}
        query={{
          key: [],
          params: {},
          url: '',
          headers: '',
        }}
        defaultData={[{id: 123}, {id: 456}]}
        // ** optional - default undefined
        // ExpandableComponent={ExpandableTable}
        FilterComponent={FilterRequest}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Nhập nội dung tìm kiếm ..."
      />
      <ModalActivationInformation
        centeredModal={centeredModal}
        setCenteredModal={setCenteredModal}
      />
    </div>
  )
}

export default TableTransactionHistory
