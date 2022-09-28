import React from 'react'
import {X} from 'react-feather'
import {
  Badge,
  Button,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from 'reactstrap'

//image
import avatar1 from 'assets/images/avatars/3-small.png'
import request from 'assets/images/datacenter/request-modal.png'
import PerfectScrollbar from 'react-perfect-scrollbar'

const ModalRequest = ({modalRequest, setModalRequest}) => {
  // ** Custom close btn
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => setModalRequest(!modalRequest)}
    />
  )
  return (
    <div>
      <Modal
        scrollable
        isOpen={modalRequest}
        toggle={() => setModalRequest(!modalRequest)}
        className="modal-dialog-centered modal-lg"
      >
        <ModalHeader
          toggle={() => setModalRequest(!modalRequest)}
          close={CloseBtn}
        >
          Nội dung yêu cầu
        </ModalHeader>
        <ModalBody>
          <PerfectScrollbar>
            <Row>
              <Col lg={7}>
                <h6>ID</h6>
                <p className="text-primary font-weight-bolder ml-4 mb-4">
                  B1235673
                </p>

                <Row>
                  <Col lg={6}>
                    <div className="d-flex align-items-center ml-3 my-3">
                      <img
                        src={avatar1}
                        alt="images"
                        className="img-fluid rounded-circle mr-2"
                        width="30px"
                        height="30px"
                      />
                      <div className="user-info text-truncate ml-1">
                        Mary Jane
                        <Badge
                          color={'success'}
                          className="text-white  ml-2"
                          pill
                        >
                          AA
                        </Badge>
                        <p className="font-weight-bolder mb-0">
                          ID Biznet:{' '}
                          <span className="text-primary">002184</span>
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="d-flex align-items-center ml-3 my-4">
                      <img
                        src={avatar1}
                        alt="images"
                        className="img-fluid rounded-circle mr-2"
                        width="30px"
                        height="30px"
                      />
                      <div className="user-info text-truncate ml-1">
                        Mary Jane
                        <Badge
                          color={'danger'}
                          className="text-white  ml-2"
                          pill
                        >
                          BM
                        </Badge>
                        <p className="font-weight-bolder mb-0">
                          ID Biznet:{' '}
                          <span className="text-primary">002184</span>
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
                <h6 className="font-weight-bolder">Nội dung báo cáo</h6>
                <p className="mb-0 ml-5">Nội dung không phù hợp</p>
              </Col>
              <Col lg={5}>
                <h6 className="mb-3">Hình ảnh đính kèm</h6>
                <img src={request} alt="image1" className="img-fluid" />
              </Col>
            </Row>
          </PerfectScrollbar>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => setModalRequest(!modalRequest)}
            className="mr-2"
          >
            Duyệt
          </Button>
          <Button
            color="primary"
            onClick={() => setModalRequest(!modalRequest)}
            className="mr-2"
          >
            Từ chối
          </Button>
          <Button
            color="secondary"
            onClick={() => setModalRequest(!modalRequest)}
            className="mr-2"
          >
            Hủy
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ModalRequest
