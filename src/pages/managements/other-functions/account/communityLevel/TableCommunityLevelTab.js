import React, {useState} from 'react'
import {CommunityLevelColumnTable} from 'pages/columns-table/orderSetting/account/CommunityLevelColumnTable'
// *** Components
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterCommunityLevelTab from './FilterCommunityLevelTab'
import ModalAdd from './ModalAdd'

import {Button, Badge} from 'reactstrap'
import {Plus} from 'react-feather'
const TableMembershipLevelTab = () => {
  const [showModal, setShowModal] = useState(false)

  let columns = [
    ...CommunityLevelColumnTable,
    {
      name: 'Hành động',
      selector: 'action',
      maxWidth: '150px',
      cell: row => (
        <Badge color="light-primary" onClick={() => setShowModal(true)}>
          Chỉnh sửa
        </Badge>
      ),
    },
  ]

  return (
    <div className="">
      <div className="text-right">
        <Button.Ripple color="primary" onClick={() => setShowModal(true)}>
          <Plus size={15} />{' '}
          <span style={{fontSize: 13}}>Thêm cấp thành viên</span>
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
        FilterComponent={FilterCommunityLevelTab}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Nhập nội dung tìm kiếm ..."
      />
      <ModalAdd centeredModal={showModal} setCenteredModal={setShowModal} />
    </div>
  )
}

export default TableMembershipLevelTab
