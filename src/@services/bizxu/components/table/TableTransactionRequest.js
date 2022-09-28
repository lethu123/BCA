import React, {useState} from 'react'
import {Edit, MoreVertical} from 'react-feather'
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap'

// *** components
import {columns} from '../column/HistoryBizxuColumnTable'
import ModalChangeStatus from '../modal/ModalChangeStatus'
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterTransactionRequest from '../filter/FilterHistoryBizxu'

// *** datatable
import {BizxuDatatable} from '@services/bizxu'

const TableTransactionRequest = () => {
  // *** State
  const [changeStatus, setChangeStatus] = useState(false)
  const [id, setId] = useState(null)

  const query = BizxuDatatable.useListHistoryBizxuTransaction({
    is_request: true,
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
                        <Edit size={15} />
                        <span className="align-middle ml-50">
                          Chuyển trạng thái giao dịch
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
        FilterComponent={FilterTransactionRequest}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Tìm kiếm theo link trích xuất"
      />

      <ModalChangeStatus
        id={id}
        setChangeStatus={setChangeStatus}
        changeStatus={changeStatus}
      />
    </div>
  )
}

export default TableTransactionRequest
