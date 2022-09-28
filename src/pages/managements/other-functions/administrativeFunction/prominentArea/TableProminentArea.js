import React, {useState} from 'react'
import {Button} from 'reactstrap'
import {ProminentAreaColumnTable} from 'pages/columns-table/orderSetting/account/ProminentAreaColumnTable'
// *** Component
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterProminentArea from './FilterProminentArea'
import ModalProminentArea from './ModalProminentArea'
import {Plus} from 'react-feather'

const TableProminentArea = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className="">
      <div className="text-sm-right">
        <Button.Ripple color="primary" onClick={() => setShowModal(true)}>
          <Plus size={15} /> <span style={{fontSize: 13}}>Tạo tin</span>
        </Button.Ripple>
      </div>
      <DataTableComponent
        // *** required
        columns={ProminentAreaColumnTable}
        query={{
          key: [],
          params: {},
          url: '',
          headers: '',
        }}
        defaultData={[{id: 123}, {id: 456}]}
        // ** optional - default undefined
        // ExpandableComponent={ExpandableTable}
        FilterComponent={FilterProminentArea}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Nhập nội dung tìm kiếm ..."
      />
      <ModalProminentArea
        centeredModal={showModal}
        setCenteredModal={setShowModal}
      />
    </div>
  )
}

export default TableProminentArea
