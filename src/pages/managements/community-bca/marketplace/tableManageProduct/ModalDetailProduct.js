import React from 'react'
import {Star, X} from 'react-feather'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  Badge,
  Card,
  CardBody,
} from 'reactstrap'
import Rating from 'react-rating'
import imageProduct from 'assets/images/home/imageProduct.png'
// *** Component
import TableProductBuyers from './TableProductBuyers'
import PerfectScrollbar from 'react-perfect-scrollbar'

const ModalDetailProduct = ({centeredModal, setCenteredModal}) => {
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
          <span>Thông tin cơ bản</span>
        </ModalHeader>
        <ModalBody>
          <PerfectScrollbar>
            <Row>
              <Col md="4">
                <Badge color="warning" className="text-white">
                  Marketplace
                </Badge>
                <p
                  style={{paddingBottom: 10, borderBottom: '1px solid #c8c8c8'}}
                >
                  Sản phẩm số 1
                </p>
                <Card>
                  <CardBody>
                    <img
                      src={imageProduct}
                      alt="imageProduct"
                      style={{width: '100%'}}
                    />
                    <h6 className="mt-4">
                      Sản phẩm:
                      <span className="text-primary"> Sản phẩm số 1</span>
                    </h6>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout
                    </p>
                  </CardBody>
                </Card>
                <div>
                  <h6 className="text-center">
                    Người đăng: <span className="text-primary">Emily</span>
                  </h6>
                  <p className="text-center mb-2">Đơn giá: 235000 VND</p>
                  <p className="text-center">
                    {' '}
                    <Rating
                      emptySymbol={
                        <Star size={20} fill="#babfc7" stroke="#babfc7" />
                      }
                      fullSymbol={
                        <Star size={20} fill="#FF9F43" stroke="#FF9F43" />
                      }
                      initialRating={5}
                      readonly
                    />
                  </p>
                </div>
              </Col>
              <Col md="8">
                <TableProductBuyers />
              </Col>
            </Row>
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

export default ModalDetailProduct
