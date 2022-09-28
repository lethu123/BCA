import React from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
} from 'reactstrap'
import {X} from 'react-feather'
import PerfectScrollbar from 'react-perfect-scrollbar'

const ModalContract = ({centeredModal, setCenteredModal}) => {
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
          <span className="text-primary">Thông tin hợp đồng</span>
        </ModalHeader>
        <ModalBody>
          <PerfectScrollbar>
            <Row>
              <Col md="6">
                <div className="d-flex">
                  <p className="mr-2">TÊN KHÁCH HÀNG : </p>
                  <h5 className="text-primary">CHÂU THU HẰNG</h5>
                </div>
              </Col>
              <Col md="6">
                <div className="d-flex justify-content-md-end">
                  <p className="mr-2">NGÀY SINH: </p>
                  <p>20/09/1987</p>
                </div>
              </Col>
              <Col md="6">
                <div className="d-flex">
                  <p className="mr-2">MÃ KHÁCH HÀNG : </p>
                  <h5>00001</h5>
                </div>
              </Col>
              <Col md="6">
                <div className="d-flex justify-content-md-end">
                  <p className="mr-2">SỐ ĐIỆN THOẠI: </p>
                  <p>0399652354</p>
                </div>
              </Col>
              <Col md="6">
                <div className="d-flex ">
                  <p className="mr-2">ĐỊA CHỈ: </p>
                  <p>Đông Hòa - Dĩ An - Bình Dương</p>
                </div>
              </Col>
              <Col md="6">
                <div className="d-flex justify-content-md-end">
                  <p className="mr-2">NGHỀ NGHIỆP: </p>
                  <p>Kinh Doanh</p>
                </div>
              </Col>
            </Row>
            <div
              className="w-80 mx-auto p-5 mt-5"
              style={{border: '1px solid #E6641F', borderRadius: 5}}
            >
              <div className="d-flex justify-content-between">
                <p>SỐ HỢP ĐỒNG: </p>
                <p>123456</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>TÌNH TRẠNG HỢP ĐỒNG: </p>
                <p>Đang hiệu lực</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>TÊN SẢN PHẨM: </p>
                <p>Phúc Bảo An Trường Thịnh 2.0</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>TỔNG CHI PHÍ BẢO HIỂM: </p>
                <p>20000000</p>
              </div>
              <p style={{fontWeight: 'bold'}}>CHI TIẾT SẢN PHẨM</p>
              <div className="d-flex justify-content-between">
                <p>Phúc bảo an trường thịnh 2.0 : </p>
                <p>15000000</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Bảo hiểm bệnh hiểm nghèo : </p>
                <p>2500000</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Bảo hiểm tử vong và thương tật do tai nạn : </p>
                <p>1000000</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Bảo hiểm trợ cấp viện phí : </p>
                <p>1500000</p>
              </div>
            </div>
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

export default ModalContract
