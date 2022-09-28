import React, {useState} from 'react'
import {SystemGroupColumnTable} from 'pages/columns-table/orderSetting/account/SystemGroupColumnTable'
// *** Component
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterSystemGroupTab from './FilterSystemGroupTab'
import ModalDetailGroup from './ModalDetailGroup'
import ModalAddGroup from './ModalAddGroup'

import img from 'assets/images/portrait/small/avatar-s-2.jpg'
import {Button} from 'reactstrap'
import {Plus} from 'react-feather'
const TableSystemGroupTab = () => {
  let columns = [
    {
      name: 'ID',
      selector: 'id',
      maxWidth: '100px',
      cell: row => <p>210528</p>,
    },
    {
      name: 'Tên nhóm',
      selector: 'nameGroup',
      maxWidth: '150px',
      cell: row => (
        <div className="d-flex align-items-center">
          <img
            src={img}
            alt="images"
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              marginRight: 10,
            }}
          />
          <p
            className="mb-0 text-primary"
            onClick={() => setShowDetailGroup(true)}
          >
            FA
          </p>
        </div>
      ),
    },
    ...SystemGroupColumnTable,
  ]
  const [showDetailGroup, setShowDetailGroup] = useState(false)
  const [addGroup, setShowAddGroup] = useState(false)

  return (
    <div className="">
      <div className="text-right">
        <Button.Ripple color="primary" onClick={() => setShowAddGroup(true)}>
          <Plus size={15} /> <span style={{fontSize: 13}}>Thêm nhóm</span>
        </Button.Ripple>
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
        defaultData={[{id: 123}, {id: 456}]}
        // ** optional - default undefined
        // ExpandableComponent={ExpandableTable}
        FilterComponent={FilterSystemGroupTab}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Nhập nội dung tìm kiếm ..."
      />
      <ModalDetailGroup
        centeredModal={showDetailGroup}
        setCenteredModal={setShowDetailGroup}
      />
      <ModalAddGroup
        centeredModal={addGroup}
        setCenteredModal={setShowAddGroup}
      />
    </div>
  )
}

export default TableSystemGroupTab
