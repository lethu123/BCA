import React, {useState} from 'react'
import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap'
import {TagProductColumnTable} from 'pages/columns-table/orderSetting/account/TagProductColumnTable'
// *** Component
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterTagProduct from './FilterTagProduct'
import ModalTagProduct from './ModalTagProduct'
import {Edit, MoreVertical, Plus} from 'react-feather'
import {
  CustomerLeadsDatatable,
  CustomerLeadsMutation,
} from '@services/customer-leads'

const TableTagProduct = () => {
  const [showModal, setShowModal] = useState(false)
  const [item, setItem] = useState(null)

  const query = CustomerLeadsDatatable.useListTagsCustomerLeadDatatable()
  const {mutate: updateTags} = CustomerLeadsMutation.useUpdateTagCustomerLead()

  return (
    <div className="">
      <div className="">
        <Button.Ripple
          color="primary"
          onClick={() => {
            setItem(null)
            setShowModal(true)
          }}
        >
          <Plus size={15} /> <span style={{fontSize: 13}}>Tạo Tag</span>
        </Button.Ripple>
      </div>
      <hr className="mb-0" />
      <DataTableComponent
        // *** required
        columns={[
          ...TagProductColumnTable,
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
                      <DropdownItem
                        tag="div"
                        onClick={() => {
                          updateTags({
                            id: row.id,
                            is_used: !row.is_used,
                          })
                        }}
                      >
                        <span className="align-middle ml-50">
                          Chuyển trạng thái hoạt động
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
        FilterComponent={FilterTagProduct}
        // isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Nhập nội dung tìm kiếm ..."
      />
      <ModalTagProduct
        centeredModal={showModal}
        setCenteredModal={setShowModal}
        item={item}
      />
    </div>
  )
}

export default TableTagProduct
