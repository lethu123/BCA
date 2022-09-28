import React from 'react'
import {Edit} from 'react-feather'
import {Badge} from 'reactstrap'

import {AccountConfigurationColumnTable} from 'pages/columns-table/orderSetting/account/AccountConfigurationColumnTable'
// *** Component
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterAccountConfigurationTab from './FilterAccountConfigurationTab'
//data
const data = [
  {
    id: 1,
    name: 'Đối tác',
    username: 'Anthony Bruce',
    quyen: '15',
  },
  {
    id: 2,
    name: 'Quản trị LandingPage',
    username: 'Anthony Bruce',
    quyen: '9',
  },
  {
    id: 3,
    name: 'Kế toán',
    username: 'Tony',
    quyen: '10',
  },
  {
    id: 4,
    name: 'Nhà phân tích',
    username: 'Tony',
    quyen: '10',
  },
  {
    id: 5,
    name: 'Quản lý khách hàng',
    username: 'Tony',
    quyen: '10',
  },
  {
    id: 6,
    name: 'Người kiểm duyệt nội dung',
    username: 'Tony',
    quyen: '9',
  },
  {
    id: 7,
    name: 'Quản trị viên hệ thống',
    username: 'Tony',
    quyen: '9',
  },
]

const TableAccountConfigurationTab = ({setCenteredModal}) => {
  let columns = [
    ...AccountConfigurationColumnTable,
    {
      name: 'Chỉnh sửa',
      maxWidth: '160px',
      cell: row => (
        <Badge
          color="light-primary"
          className="cursor-pointer"
          onClick={() => setCenteredModal(true)}
        >
          <Edit size={17} /> <span style={{fontSize: 11}}> Chỉnh sửa</span>
        </Badge>
      ),
    },
  ]

  return (
    <div className="">
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
        FilterComponent={FilterAccountConfigurationTab}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Tìm kiếm theo link trích xuất"
      />
    </div>
  )
}

export default TableAccountConfigurationTab
