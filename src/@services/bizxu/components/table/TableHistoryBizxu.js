import React, {useState} from 'react'

// *** components
import {columns} from '../column/HistoryBizxuColumnTable'
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterHistoryBizxu from '../filter/FilterHistoryBizxu'

// *** datatable
import {BizxuDatatable} from '@services/bizxu'
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap'
import {Eye, MoreVertical} from 'react-feather'
import ModalChangeStatus from '../modal/ModalChangeStatus'

const TableHistoryBizxuPage = () => {
  // *** State
  const [changeStatus, setChangeStatus] = useState(false)
  const [id, setId] = useState(null)

  const query = BizxuDatatable.useListHistoryBizxuTransaction({
    is_history: true,
  })

  return (
    <div className="mt-10 ">
      <DataTableComponent
        // *** required
        columns={[
          ...columns,
          {
            name: 'Thao tác',
            allowOverflow: true,
            cell: row => {
              return (
                <div className="d-flex">
                  <UncontrolledDropdown>
                    <DropdownToggle className="pr-1" tag="span">
                      <MoreVertical size={15} />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem
                        tag="div"
                        onClick={() => {
                          setChangeStatus(!changeStatus)
                          setId(row.id)
                        }}
                      >
                        <Eye size={15} />
                        <span className="align-middle ml-50">
                          Chi tiết giao dịch
                        </span>
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
        FilterComponent={FilterHistoryBizxu}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Tìm kiếm giao dịch"
      />

      <ModalChangeStatus
        id={id}
        setChangeStatus={setChangeStatus}
        changeStatus={changeStatus}
        readOnly={true}
      />
    </div>
  )
}

export default TableHistoryBizxuPage
