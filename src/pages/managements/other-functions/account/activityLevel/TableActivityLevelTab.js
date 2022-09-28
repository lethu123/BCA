import React, {useState} from 'react'
import {ActivityLevelColumnTable} from 'pages/columns-table/orderSetting/account/ActivityLevelColumnTable'
// *** Component
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterCommunityLevelTab from './FilterCommunityLevelTab'
import ModalActivityLevel from './ModalActivityLevel'

import {Button, Badge} from 'reactstrap'
import {Plus} from 'react-feather'
const TableActivityLevelTab = () => {
  const [showModal, setShowModal] = useState(false)

  let columns = [
    ...ActivityLevelColumnTable,
    {
      name: 'Hành động',
      selector: 'action',
      maxWidth: '250px',
      cell: row => (
        <div className="d-flex">
          <Badge
            className="mr-3"
            color="light-primary"
            onClick={() => setShowModal(true)}
          >
            Chỉnh sửa
          </Badge>
          <Badge color="light-danger">Xóa</Badge>
        </div>
      ),
    },
  ]

  return (
    <div className="">
      <div className="text-right">
        <Button.Ripple color="primary" onClick={() => setShowModal(true)}>
          <Plus size={15} />{' '}
          <span style={{fontSize: 13}}>Thêm cấp hoạt động</span>
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
      <ModalActivityLevel
        centeredModal={showModal}
        setCenteredModal={setShowModal}
      />
    </div>
  )
}

export default TableActivityLevelTab
