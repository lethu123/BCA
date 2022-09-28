import React from 'react'
// *** Components
import DataTableComponent from 'components/data-table/DataTableComponent'
// import FilterRequestAccess from '../filter/FilterRequestAccess'
import {columns} from '@services/request-access/components/table/RequestAccessColumnTable'

import {
  RequestAccessDatatable,
  RequestAccessMutation,
} from '@services/request-access'
import {getUserData} from 'utility/Utils'
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap'
import {MoreVertical} from 'react-feather'

const TableRequestAccess = () => {
  const userInfo = getUserData()
  const query = RequestAccessDatatable.useListRequestAccess({uid: userInfo.uid})
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
                  {row.is_accept && (
                    <UncontrolledDropdown>
                      <DropdownToggle className="pr-1" tag="span">
                        <MoreVertical size={15} />
                      </DropdownToggle>
                      <DropdownMenu right>
                        {/* {!row.is_accept && (
                        <DropdownItem tag="div">
                          <Edit size={15} />
                          <span className="align-middle ml-50">
                            Chuyển trạng thái
                          </span>
                        </DropdownItem>
                      )} */}

                        <>
                          <DropdownItem
                            tag="div"
                            onClick={() =>
                              updateFormality({
                                reference_id: row._id,
                                data_receive_stage: 'RECV_DATA',
                              })
                            }
                          >
                            <span className="align-middle ml-50">
                              Nhận data
                            </span>
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
                            <span className="align-middle ml-50">
                              Nhận BizXu
                            </span>
                          </DropdownItem>
                        </>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  )}
                </div>
              )
            },
          },
        ]}
        query={query}
        searchPlaceholder="Search"
      />
    </div>
  )
}

export default TableRequestAccess
