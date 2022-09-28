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
import './ContractExpires.style.scss'
import PerfectScrollbar from 'react-perfect-scrollbar'

const ModalCustomer = ({centeredModal, setCenteredModal}) => {
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
        className="modal-dialog-centered modal-xl modalCustomer"
      >
        <ModalHeader
          close={CloseBtn}
          toggle={() => setCenteredModal(!centeredModal)}
        >
          <span className="text-primary">Hợp đồng của khách hàng</span>
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
            </Row>
            <div>
              <h5 className="text-center text-primary">
                Danh sách hợp đồng bảo hiểm
              </h5>
              <div>
                <div>
                  <table>
                    <thead>
                      <tr>
                        <td style={{minWidth: 170, fontWeight: 'bold'}}>
                          NHÂN THỌ
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Số HD</td>
                        <td>Ngày hiệu lực hợp đồng</td>
                        <td>Tên sản phẩm</td>
                        <td>Tên công ty</td>
                        <td>Phí BH</td>
                        <td>Tình trạng hoạt động</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{padding: 15}}></td>
                        <td style={{padding: 15}}></td>
                        <td style={{padding: 15}}></td>
                        <td style={{padding: 15}}></td>
                        <td style={{padding: 15}}></td>
                        <td style={{padding: 15}}></td>
                      </tr>
                    </tbody>
                  </table>
                  <table>
                    <thead>
                      <tr>
                        <td style={{minWidth: 170, fontWeight: 'bold'}}>
                          PHI NHÂN THỌ
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Số HD</td>
                        <td>Ngày hiệu lực hợp đồng</td>
                        <td>Tên sản phẩm</td>
                        <td>Tên công ty</td>
                        <td>Phí BH</td>
                        <td>Tình trạng hoạt động</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{padding: 15}}></td>
                        <td style={{padding: 15}}></td>
                        <td style={{padding: 15}}></td>
                        <td style={{padding: 15}}></td>
                        <td style={{padding: 15}}></td>
                        <td style={{padding: 15}}></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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

export default ModalCustomer
