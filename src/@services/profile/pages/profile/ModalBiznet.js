import React from 'react'
import {X} from 'react-feather'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import PerfectScrollbar from 'react-perfect-scrollbar'

const ModalBiznet = ({centeredModal, setCenteredModal}) => {
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
        className="modal-dialog-centered modal-lg"
      >
        <ModalHeader
          close={CloseBtn}
          toggle={() => setCenteredModal(!centeredModal)}
        >
          Thông báo
        </ModalHeader>
        <ModalBody>
          <PerfectScrollbar>
            <div
              className="text-center"
              style={{
                border: '1px solid #3ece24',
                borderRadius: 5,
                padding: '20px 30px',
              }}
            >
              <h6>
                Bạn chưa KYC, vui lòng thẩm định lại thông tin trước khi đăng ký
                bizner
              </h6>
              <h6 className="text-primary">
                (Email, Số điện thoại, CMND/CCCD)
              </h6>
            </div>
          </PerfectScrollbar>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => setCenteredModal(!centeredModal)}
          >
            Đi tới khảo sát
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ModalBiznet
