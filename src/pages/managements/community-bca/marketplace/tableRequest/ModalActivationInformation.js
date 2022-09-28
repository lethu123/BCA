import React from 'react'
import {Check, X, XCircle} from 'react-feather'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import {
  Badge,
  Button,
  Col,
  FormGroup,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from 'reactstrap'
import imageProduct from 'assets/images/home/imageProduct.png'
import Cleave from 'cleave.js/react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import avatar1 from 'assets/images/avatars/9.png'
import avatar2 from 'assets/images/avatars/10.png'
import TextField from 'components/form/TextField'
import TextareaField from 'components/form/TextareaField'

const ModalActivationInformation = ({centeredModal, setCenteredModal}) => {
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => setCenteredModal(false)}
    />
  )
  const options = {numeral: true, numeralThousandsGroupStyle: 'thousand'}
  let initialState = {
    name: '',
    content: '',
    price: '',
  }
  const formSchema = Yup.object().shape({
    name: Yup.string().required('Bạn phải nhập tên sản phẩm'),
    content: Yup.string().required('Bạn phải nhập mô tả'),
  })
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
          <span className="text-primary"> Thông tin giao dịch kích hoạt</span>
        </ModalHeader>
        <ModalBody>
          <PerfectScrollbar>
            <Formik
              initialValues={initialState}
              enableReinitialize={true}
              validationSchema={formSchema}
            >
              {({
                values,
                setFieldValue,
                setFieldTouched,
                isValid,
                isSubmitting,
                dirty,
                errors,
                touched,
              }) => (
                <Form>
                  <FormGroup>
                    <TextField
                      type="text"
                      name="id"
                      size="md"
                      label="ID giao dịch"
                      placeholder="ID giao dịch"
                      isRequired
                      disabled
                    />
                  </FormGroup>
                  <Row>
                    <Col md="4">
                      <img
                        src={imageProduct}
                        alt="images"
                        className="img-fluid"
                        style={{height: 220, borderRadius: 5}}
                      />
                    </Col>
                    <Col md="8">
                      <FormGroup>
                        <TextField
                          type="text"
                          name="name"
                          size="lg"
                          label="Tên sản phẩm"
                          placeholder="Sản phẩm số 1"
                          isRequired
                        />
                        <TextareaField
                          maxLength={60}
                          minRows={3}
                          name="content"
                          label="Nội dung"
                          placeholder="Nội dung ..."
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-around w-75 mx-auto mt-5">
                    <div>
                      <p>Người yêu cầu</p>
                      <div className="d-flex align-items-center py-1">
                        <img
                          src={avatar1}
                          alt="images"
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            marginRight: 7,
                          }}
                        />
                        <div>
                          <p className="mb-0 text-primary cursor-pointer">
                            Emily Clark
                          </p>
                          <small>ID Biznet: 393823</small>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p>Đại lý phụ trách</p>
                      <div className="d-flex align-items-center py-1">
                        <img
                          src={avatar2}
                          alt="images"
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            marginRight: 7,
                          }}
                        />
                        <div>
                          <p className="mb-0 text-primary cursor-pointer">
                            Emily Clark <Badge color="success">AA</Badge>
                          </p>
                          <small>ID Biznet: 393823</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="numeral-formatting">Đơn giá</label>
                    <Cleave
                      className="form-control"
                      placeholder="10,000"
                      options={options}
                      id="numeral-formatting-price"
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </PerfectScrollbar>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => setCenteredModal(!centeredModal)}
          >
            <Check size={17} className="mr-2" />
            Duyệt
          </Button>{' '}
          <Button
            color="danger"
            onClick={() => setCenteredModal(!centeredModal)}
          >
            <XCircle size={17} className="mr-2" />
            Từ chối
          </Button>{' '}
          <Button
            color="secondary"
            onClick={() => setCenteredModal(!centeredModal)}
          >
            Hủy
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ModalActivationInformation
