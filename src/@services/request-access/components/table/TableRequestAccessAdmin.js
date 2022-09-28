import React from 'react'
// *** Components
import DataTableComponent from 'components/data-table/DataTableComponent'
import {columns} from '@services/request-access/components/table/RequestAccessColumnTable'

import {
  RequestAccessDatatable,
  RequestAccessMutation,
} from '@services/request-access'
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap'
import {MoreVertical} from 'react-feather'

const TableRequestAccessAdmin = () => {
  const query = RequestAccessDatatable.useListRequestAccess()
  const {mutate: updateFormality} =
    RequestAccessMutation.useUpdateFormalityReceiveData()
  return (
    <div>
      <DataTableComponent
        // *** required
        columns={[
          ...columns,
          {
            name: 'Đổi hình thức nhận data',
            center: true,
            cell: row => {
              return (
                <div className="d-flex">
                  {row.is_accept ? (
                    <UncontrolledDropdown>
                      <DropdownToggle className="pr-1" tag="span">
                        <MoreVertical size={15} />
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem
                          tag="div"
                          onClick={() =>
                            updateFormality({
                              reference_id: row._id,
                              data_receive_stage: 'RECV_DATA',
                            })
                          }
                        >
                          <span className="align-middle ml-50">Nhận data</span>
                        </DropdownItem>
                        <DropdownItem
                          tag="div"
                          onClick={() =>
                            updateFormality({
                              reference_id: row._id,
                              data_receive_stage: 'RECV_BIZXU',
                            })
                          }
                        >
                          <span className="align-middle ml-50">Nhận BizXu</span>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  ) : (
                    '---'
                  )}
                </div>
              )
            },
          },
        ]}
        query={query}
        // ** optional - default undefined
        // ExpandableComponent={ExpandableTable}
        // FilterComponent={FilterRequestAccess}
        // isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Search"
      />
    </div>
  )
}

export default TableRequestAccessAdmin
