import React from 'react'

// *** components
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterNumberTab from './FilterNumberTab'
import {NumberColumnTable} from 'pages/columns-table/orderSetting/dataConfiguration/NumberColumnTable'

// ** query
import {DataCenterDatatable} from '@services/data-center'
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledButtonDropdown,
} from 'reactstrap'
import {Copy, MoreVertical, Trash2} from 'react-feather'

const TableNumberTab = ({setCenteredModal}) => {
  const query = DataCenterDatatable.useListDataQuantity()

  let columns = [
    {
      cell: row => (
        <UncontrolledButtonDropdown>
          <DropdownToggle color="flat-primary" style={{padding: 0}}>
            <MoreVertical />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <div>
                <Copy size={19} className="mr-3" />
                <span>Nhân bản sự kiện</span>
              </div>
            </DropdownItem>
            <DropdownItem>
              <Trash2 size={19} className="mr-3" />
              <span>Xóa sự kiện</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      ),
    },
  ]
  return (
    <div className="mt-2">
      <DataTableComponent
        // *** required
        columns={columns}
        query={query}
        FilterComponent={FilterNumberTab}
        // isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Tìm kiếm theo link trích xuất"
      />
    </div>
  )
}

export default TableNumberTab
