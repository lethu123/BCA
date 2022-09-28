import React from 'react'
//***  Third Libary
import {Save, X} from 'react-feather'
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
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
// *** Components
import TextField from 'components/form/TextField'
import AvatarUploadField from 'components/form/AvatarUploadField'
import PerfectScrollbar from 'react-perfect-scrollbar'

const ModalActivityLevel = ({centeredModal, setCenteredModal}) => {
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => setCenteredModal(false)}
    />
  )
  let initialState = {
    name: '',
    value1: '',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
    value6: '',
  }
  const formSchema = Yup.object().shape({
    name: Yup.string().required('Bạn phải nhập tên '),
    value1: Yup.number()
      .min(1, 'Số lượng tối thiểu phải là 1')
      .max(7, 'Số lượng tối đa là 7'),
    value2: Yup.number().min(1, 'Số lượng tối thiểu phải là 1'),
    value3: Yup.number().min(1, 'Số lượng tối thiểu phải là 1'),
    value4: Yup.number().min(1, 'Số lượng tối thiểu phải là 1'),
    value5: Yup.number().min(1, 'Số lượng tối thiểu phải là 1'),
    value6: Yup.number().min(1, 'Số lượng tối thiểu phải là 1'),
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
          <span className="text-primary">Tạo cấp DLBH mới</span>
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
                  <FormGroup>
                    <TextField
                      type="text"
                      name="name"
                      size="lg"
                      label="Tên"
                      placeholder="Mô tả tên. Ví dụ: Thành viên mới"
                      isRequired
                    />
                  </FormGroup>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <TextField
                          type="number"
                          name="value1"
                          size="lg"
                          label="Số ngày tham gia cộng đồng"
                          placeholder="<=7"
                          isRequired
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <TextField
                          type="number"
                          name="value2"
                          size="lg"
                          label="Số lần đăng nhấp"
                          placeholder="Nhập số lần ..."
                          isRequired
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <TextField
                          type="number"
                          name="value3"
                          size="lg"
                          label="Số lần tương tác"
                          placeholder="Nhập số lần ..."
                          isRequired
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <TextField
                          type="number"
                          name="value4"
                          size="lg"
                          label="Số bài post"
                          placeholder="Nhập số lần ..."
                          isRequired
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <TextField
                          type="number"
                          name="value5"
                          size="lg"
                          label="Số lượt tương tác trên bái post"
                          placeholder="Nhập số lượt ..."
                          isRequired
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <TextField
                          type="number"
                          name="value6"
                          size="lg"
                          label="Thứ tự ưu tiên"
                          placeholder="Nhập số  ..."
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
            Thoát
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ModalActivityLevel
