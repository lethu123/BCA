import React from 'react'
import {X} from 'react-feather'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
// *** Component
import ProductWizard from './ProductWizard'
import PerfectScrollbar from 'react-perfect-scrollbar'
// *** Scss
import './Product.style.scss'
const ModalAddProduct = ({centeredModal, setCenteredModal}) => {
  return (
    <div>
      <Modal
        scrollable
        isOpen={centeredModal}
        toggle={() => setCenteredModal(!centeredModal)}
        className="modal-dialog-centered modal-xl modalProduct"
      >
        <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0"> Tạo sản phẩm</p>
            <div
              className="cursor-pointer"
              onClick={() => setCenteredModal(!centeredModal)}
            >
              <X />
            </div>
          </div>
        </ModalHeader>
        <ModalBody>
          <PerfectScrollbar>
            <ProductWizard />
          </PerfectScrollbar>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => setCenteredModal(!centeredModal)}
          >
            Thoát
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ModalAddProduct
