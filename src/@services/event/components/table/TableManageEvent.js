import React, {useEffect, useState} from 'react'
import {ManageEventColumnTable} from '../column/ManageEventColumnTable'
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap'
import {Edit, MoreVertical, Trash} from 'react-feather'
// *** Component
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterManageEvent from '../filter/FilterManageEvent'
import ModalCreateEvent from '../modal/ModalCreateEvent'
// *** datatable
import {EventDatatable} from '@services/event'

// *** mutation
import {EventMutation, EventQuery} from '@services/event'
import {toast} from 'react-toastify'

const TableManageEvent = ({setCenteredModal}) => {
  const [id, setId] = useState(null)
  const [modal, setModal] = useState(false)
  const query = EventDatatable.useListEventManage()

  const {mutate: deleteEvent} = EventMutation.useDeleteEvent()
  const {data: detailEvent, isError: errorGetEventDetail} =
    EventQuery.useDetailEvent(id)

  useEffect(() => {
    if (errorGetEventDetail) {
      toast.error('Can not get detail event.')
      setModal(false)
    }
  }, [errorGetEventDetail])

  return (
    <div className="mt-2">
      <DataTableComponent
        // *** required
        columns={[
          ...ManageEventColumnTable,
          {
            name: 'Thao tác',
            selector: 'action',
            cell: row => (
              <UncontrolledDropdown>
                <DropdownToggle
                  className="btn btn-clean btn-hover-light-primary btn-sm btn-icon"
                  tag="span"
                >
                  <MoreVertical size={15} />
                </DropdownToggle>
                <DropdownMenu right tag="ul">
                  <DropdownItem
                    tag="li"
                    onClick={() => {
                      setId(row.id)
                      setModal(true)
                    }}
                  >
                    <Edit size={15} />
                    <span className="align-middle ml-50">Edit</span>
                  </DropdownItem>
                  <DropdownItem tag="li" onClick={() => deleteEvent(row.id)}>
                    <Trash size={15} />
                    <span className="align-middle ml-50">Delete</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            ),
          },
        ]}
        query={query}
        // ** optional - default undefined
        // ExpandableComponent={ExpandableTable}
        FilterComponent={FilterManageEvent}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Nhập nội dung tìm kiếm ..."
      />

      <ModalCreateEvent
        detailEvent={detailEvent}
        modal={modal}
        toggleModal={() => setModal(!modal)}
      />
    </div>
  )
}

export default TableManageEvent
