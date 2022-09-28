import React, {useState} from 'react'

// *** components
import {columns} from '../column/ManageBizxuColumnTable'
import ModalInffoBizXu from '../modal/ModalInfoBizXu'
import DataTableComponent from 'components/data-table/DataTableComponent'
import ModalCreateBizXu from '../modal/ModalCreateBizXu'
// ** datatable query
import {BizxuDatatable} from '@services/bizxu'
import {Button} from 'reactstrap'
import {Edit} from 'react-feather'

const TableManageBizxu = () => {
  // *** State
  const [infoBizXu, setInfoBizXu] = useState(false)
  const [modal, setModal] = useState(false)
  const [infoUpdate, setInfoUpdate] = useState(null)

  const toggleModal = () => setModal(!modal)

  // ** datatable query
  const query = BizxuDatatable.useListBizxuPackage()

  return (
    <div className="">
      <DataTableComponent
        // *** required
        columns={[
          ...columns,
          {
            name: 'Thao tác',
            allowOverflow: true,
            center: true,
            cell: row => {
              return (
                <div className="d-flex">
                  <Button.Ripple
                    color="warning"
                    onClick={() => {
                      toggleModal()
                      setInfoUpdate(row)
                    }}
                    size="sm"
                  >
                    <Edit size="18" />
                  </Button.Ripple>
                </div>
              )
            },
          },
        ]}
        query={query}
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Tìm kiếm"
      />

      <ModalInffoBizXu setInfoBizXu={setInfoBizXu} infoBizXu={infoBizXu} />
      <ModalCreateBizXu
        info={infoUpdate}
        toggleModal={toggleModal}
        modal={modal}
      />
    </div>
  )
}

export default TableManageBizxu
