import React from 'react'
import {Edit} from 'react-feather'
import {Badge} from 'reactstrap'
import {DepartmentColumnTable} from 'pages/columns-table/orderSetting/account/DepartmentColumnTable'
import img from 'assets/images/portrait/small/avatar-s-1.jpg'

// *** components
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterDepartmentTab from './FilterDepartmentTab'

const TableDepartmentTab = ({setCenteredModal}) => {
  let columns = [
    {
      name: 'Tên',
      selector: 'name',
      center: true,
      minWidth: '200px',
      maxWidth: '250px',
      cell: row => (
        <div className="d-flex align-items-center py-2">
          <img
            src={img}
            alt="images"
            style={{width: 40, height: 40, borderRadius: '50%', marginRight: 7}}
          />
          <div onClick={() => setCenteredModal(true)}>
            <p className="mb-0 text-primary cursor-pointer">Phòng Maketing</p>
          </div>
        </div>
      ),
    },
    ...DepartmentColumnTable,
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
        FilterComponent={FilterDepartmentTab}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Nhập nội dung tìm kiếm"
      />
    </div>
  )
}

export default TableDepartmentTab
