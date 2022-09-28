import React from 'react'
import {X} from 'react-feather'
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap'
import PerfectScrollbar from 'react-perfect-scrollbar'

const ModalTranferData = ({modalTranfer, setModalTranfer}) => {
  // ** Custom close btn
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => setModalTranfer(!modalTranfer)}
    />
  )
  return (
    <div>
      <Modal
        scrollable
        isOpen={modalTranfer}
        toggle={() => setModalTranfer(!modalTranfer)}
        className="modal-dialog-centered modal-md"
      >
        <ModalHeader
          toggle={() => setModalTranfer(!modalTranfer)}
          close={CloseBtn}
        >
          Chuyển dữ liệu sang đại lý
        </ModalHeader>
        <ModalBody>
          <PerfectScrollbar>
            <h6>Nhập ID Biznet hoặc số điện thoại Đại lý</h6>
            <Input
              type="text"
              rows={3}
              id="basicInput"
              placeholder="Thông tin dữ liệu"
            />
          </PerfectScrollbar>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => setModalTranfer(!modalTranfer)}
            className="mr-2"
          >
            Duyệt
          </Button>

          <Button
            color="secondary"
            onClick={() => setModalTranfer(!modalTranfer)}
            className="mr-2"
          >
            Hủy
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ModalTranferData
