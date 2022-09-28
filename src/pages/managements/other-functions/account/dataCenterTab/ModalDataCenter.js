import React from 'react'
import {Save, X} from 'react-feather'
// *** Third Libary
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import {
  Button,
  Col,
  FormGroup,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from 'reactstrap'
import './AgencyTab.style.scss'

// *** Components
import AvatarUploadField from 'components/form/AvatarUploadField'
import TextField from 'components/form/TextField'
import SelectField from 'components/form/SelectField'
import PerfectScrollbar from 'react-perfect-scrollbar'

const ModalDataCenterTab = ({centeredModal, setCenteredModal}) => {
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
    valu2: '',
  }
  const formSchema = Yup.object().shape({
    name: Yup.string().required('Bạn phải nhập tên sản phẩm'),
    value1: Yup.number().min(1, 'Số lượng phải lớn hơn 0'),
    value2: Yup.number().min(1, 'Số lượng phải lớn hơn 0'),
  })

  return (
    <div>
      <Modal
        scrollable
        isOpen={centeredModal}
        toggle={() => setCenteredModal(!centeredModal)}
        className="modal-dialog-centered modal-lg customInputStyle"
      >
        <ModalHeader
          close={CloseBtn}
          toggle={() => setCenteredModal(!centeredModal)}
        >
          Tạo cấp Data Center mới
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
                    <AvatarUploadField name="avatar" label="Tải ảnh lên" />
                  </FormGroup>
                  <FormGroup>
                    <TextField
                      type="text"
                      name="name"
                      size="lg"
                      label="Tên"
                      placeholder="Mô tả tên. Ví dụ Data Center 2 ..."
                      isRequired
                    />
                  </FormGroup>
                  <Label for="name">
                    Quyền lợi <span style={{color: '#EA5455'}}>*</span>
                  </Label>
                  <Row className="mx-0 px-0">
                    <Col md="6">
                      <FormGroup>
                        <TextField
                          type="number"
                          name="value1"
                          size="md"
                          placeholder="Số lượng mua tối đa từ dự án trong ngày ..."
                          isRequired
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <TextField
                          type="number"
                          name="value2"
                          size="md"
                          placeholder="Số lượng mua tối đa từ CX trong ngày ..."
                          isRequired
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Label for="value1">
                    Tiêu chí lên cấp <span style={{color: '#EA5455'}}>*</span>
                  </Label>
                  <Row className="mx-0 px-0">
                    <Col md="6">
                      <FormGroup>
                        <TextField
                          type="number"
                          name="value3"
                          size="md"
                          placeholder="Số lượng mua data dự án Inhouse ..."
                          isRequired
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <TextField
                          type="number"
                          name="value4"
                          size="md"
                          placeholder="Số lượng mua data dự án đối tác ..."
                          isRequired
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <TextField
                          type="number"
                          name="value5"
                          size="md"
                          placeholder="Số lượng mua data từ CX ..."
                          isRequired
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <SelectField
                          name="select"
                          placeholder="Chọn cấp đại lý ..."
                          options={[
                            {
                              label: 'Option 1',
                              value: 'value1',
                            },
                            {
                              label: 'Option 2',
                              value: 'value2',
                            },
                          ]}
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

export default ModalDataCenterTab
