import React from 'react'
import {Users, X, Plus} from 'react-feather'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
// *** Component
import {MemberColumnTable} from 'pages/columns-table/orderSetting/account/MemberColumnTable'
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterMember from './FilterMember'
import PerfectScrollbar from 'react-perfect-scrollbar'

const ModalDetailGroup = ({centeredModal, setCenteredModal}) => {
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => setCenteredModal(false)}
    />
  )
  return (
    <div>
      <Modal
        scrollable
        isOpen={centeredModal}
        toggle={() => setCenteredModal(!centeredModal)}
        className="modal-dialog-centered modal-xl"
      >
        <ModalHeader
          close={CloseBtn}
          toggle={() => setCenteredModal(!centeredModal)}
        >
          <div className="d-flex align-items-center">
            <Users size={40} className="text-primary mr-3" />
            <div>
              <h5 className="mb-0 ">Nhóm FA</h5>
              <small style={{color: '#000'}}>Cấp độ nhóm UM</small>
            </div>
          </div>
        </ModalHeader>
        <ModalBody>
          <PerfectScrollbar>
            <div className="text-right py-3">
              <Button.Ripple color="primary">
                <Plus size={15} />{' '}
                <span style={{fontSize: 13}}>Thêm thành viên</span>
              </Button.Ripple>
            </div>
            <DataTableComponent
              // *** required
              columns={MemberColumnTable}
              // query={query}
              defaultData={[{id: 123}, {id: 456}]}
              // ** optional - default undefined
              // ExpandableComponent={ExpandableTable}
              FilterComponent={FilterMember}
              isExport
              // handleModal={handleModal}
              // handleDelete={handleDelete}
              searchPlaceholder="Tìm kiếm thành viên ..."
            />
          </PerfectScrollbar>
        </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            onClick={() => setCenteredModal(!centeredModal)}
          >
            Thoát
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ModalDetailGroup
