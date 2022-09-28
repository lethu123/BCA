import React from 'react'
import {X} from 'react-feather'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from 'reactstrap'
import PerfectScrollbar from 'react-perfect-scrollbar'

const ModalCancellationTime = ({centeredModal, setCenteredModal}) => {
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
        className="modal-dialog-centered"
      >
        <ModalHeader
          close={CloseBtn}
          toggle={() => setCenteredModal(!centeredModal)}
        >
          <span className="text-primary">Cài đặt thời gian tự hủy yêu cầu</span>
        </ModalHeader>
        <ModalBody>
          <PerfectScrollbar>
            <p>Nhập thời gian hủy yêu cầu</p>
            <Input type="number" placeholder="48 giờ" />
          </PerfectScrollbar>
        </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            onClick={() => setCenteredModal(!centeredModal)}
          >
            Hủy
          </Button>
          <Button
            color="primary"
            onClick={() => setCenteredModal(!centeredModal)}
          >
            Xác nhận
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ModalCancellationTime
