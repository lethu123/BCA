import React, {useState} from 'react'
import {ManageProductColumnTable} from 'pages/columns-table/marketplace/ManageProductColumnTable'
// *** Component
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterTransactionHistory from './FilterManageProduct'
import ModalDetailProduct from './ModalDetailProduct'

const TableManageProduct = () => {
  const [centeredModal, setCenteredModal] = useState(false)
  let columns = [
    {
      name: 'ID',
      selector: 'id',
      maxWidth: '100px',
      cell: row => <p>1234</p>,
    },

    {
      name: 'Tên sản phẩm',
      selector: 'NameProduct',
      maxWidth: '180px',
      cell: row => (
        <p
          className="text-primary cursor-pointer"
          onClick={() => setCenteredModal(true)}
        >
          Sản phẩm số 1
        </p>
      ),
    },

    ...ManageProductColumnTable,
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
        FilterComponent={FilterTransactionHistory}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Nhập nội dung tìm kiếm ..."
      />
      <ModalDetailProduct
        centeredModal={centeredModal}
        setCenteredModal={setCenteredModal}
      />
    </div>
  )
}

export default TableManageProduct
