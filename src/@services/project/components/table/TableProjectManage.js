import React from 'react'

// *** components
import {columns} from '../column/ManageProjectColumnTable'
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterProjectManage from '../filter/FilterProjectManage'
import DataProjectDatatable from '@services/project/hook/datatable'
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap'
import {Edit, MoreVertical, Trash} from 'react-feather'

const TableProjectManage = () => {
  const query = DataProjectDatatable.useListDataProjectDatatable()
  return (
    <div className="mt-10 ">
      <DataTableComponent
        // *** required
        columns={[
          ...columns,
          {
            name: 'Thao tác',
            center: true,
            cell: row => {
              return (
                <div className="d-flex">
                  <UncontrolledDropdown>
                    <DropdownToggle className="pr-1" tag="span">
                      <MoreVertical size={15} />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <Edit size={15} />
                        <span className="align-middle ml-50">Chỉnh sửa</span>
                      </DropdownItem>
                      <DropdownItem>
                        <Trash size={15} />
                        <span className="align-middle ml-50">Xóa dự án</span>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              )
            },
          },
        ]}
        query={query}
        // ** optional - default undefined
        // ExpandableComponent={ExpandableTable}
        FilterComponent={FilterProjectManage}
        // isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Tìm kiếm theo link trích xuất"
      />
    </div>
  )
}

export default TableProjectManage
