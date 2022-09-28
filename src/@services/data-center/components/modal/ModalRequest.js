import React from 'react'
import {X} from 'react-feather'
import {
  Badge,
  Button,
  Col,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from 'reactstrap'
import PerfectScrollbar from 'react-perfect-scrollbar'

//image
import avatar1 from 'assets/images/avatars/3-small.png'

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
        className="modal-dialog-centered modal-md"
      >
        <ModalHeader
          toggle={() => setModalRequest(!modalRequest)}
          close={CloseBtn}
        >
          Thông tin chuyển Data
        </ModalHeader>
        <ModalBody>
          <PerfectScrollbar>
            <h6>Id giao dịch</h6>
            <p className="text-primary font-weight-bolder ml-4 mb-3">
              B1235673
            </p>

            <Row>
              <Col lg={6}>
                <h6>Người yêu cầu</h6>
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
                    <Badge color={'success'} className="text-white  ml-2" pill>
                      AA
                    </Badge>
                    <p className="font-weight-bolder mb-0">
                      ID Biznet: <span className="text-primary">002184</span>
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <h6>Đại lý được chuyển tới</h6>
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
                    <Badge color={'warning'} className="text-white  ml-2" pill>
                      BM
                    </Badge>
                    <p className="font-weight-bolder mb-0">
                      ID Biznet: <span className="text-primary">002184</span>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>

            <h6 className="font-weight-bolder">Thông tin khác</h6>
            <Input
              type="textarea"
              rows={3}
              id="basicInput"
              placeholder="Thông tin dữ liệu"
            />
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
