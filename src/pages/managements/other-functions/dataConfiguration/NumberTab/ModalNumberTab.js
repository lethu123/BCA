import React from 'react'
import {Save, X} from 'react-feather'
// *** Third Libary
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import {
  Button,
  FormGroup,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Col,
} from 'reactstrap'
// *** Components
import AvatarUploadField from 'components/form/AvatarUploadField'
import TextField from 'components/form/TextField'
import PerfectScrollbar from 'react-perfect-scrollbar'

const ModalNumberTab = ({centeredModal, setCenteredModal}) => {
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => setCenteredModal(false)}
    />
  )
  let initialState = {
    name: '',
    dataCenter: '',
    landingPage: '',
    cx: '',
    remaining: '',
  }
  const formSchema = Yup.object().shape({
    name: Yup.string().required('Bạn phải nhập tên'),
    dataCenter: Yup.number().min(1, 'Số lượng phải lớn hơn 0'),
    landingPage: Yup.number().min(1, 'Số lượng phải lớn hơn 0'),
    cx: Yup.number().min(1, 'Số lượng phải lớn hơn 0'),
    remaining: Yup.number().min(1, 'Số lượng phải lớn hơn 0'),
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
          Tạo cấp ĐLBH mới
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
                    <div style={{display: 'inline-block'}}>
                      <AvatarUploadField name="avatar" label="Tải ảnh lên" />
                    </div>
                  </FormGroup>
                  <Row className="mx-0 px-0">
                    <Col md="6">
                      <FormGroup>
                        <TextField
                          type="text"
                          name="name"
                          size="md"
                          label="Tên"
                          placeholder="Nhập tên ..."
                          isRequired
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <TextField
                          type="number"
                          name="dataCenter"
                          size="md"
                          label="Data mua từ DataCenter"
                          placeholder="Nhập số lượng ..."
                          isRequired
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <TextField
                          type="number"
                          name="landingPage"
                          size="md"
                          label=" Data từ LandingPage cá nhân"
                          placeholder="Nhập số lượng ..."
                          isRequired
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <TextField
                          type="number"
                          name="cx"
                          size="md"
                          label="Data từ CX"
                          placeholder="Nhập số lượng ..."
                          isRequired
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <TextField
                          type="number"
                          name="cx"
                          size="md"
                          label="Số lượng còn lại sẽ thông báo"
                          placeholder="Nhập số lượng ..."
                          isRequired
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
          </PerfectScrollbar>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => setCenteredModal(!centeredModal)}
          >
            <Save size={16} /> Tạo
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

export default ModalNumberTab
