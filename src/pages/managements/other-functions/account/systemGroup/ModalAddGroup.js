import React from 'react'
// *** Third Libary
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import {X} from 'react-feather'
import {
  Button,
  FormGroup,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap'
import img from 'assets/images/portrait/small/avatar-s-2.jpg'
// *** Component
import SelectField from 'components/form/SelectField'
import TextField from 'components/form/TextField'
import PerfectScrollbar from 'react-perfect-scrollbar'

const ModalAddGroup = ({centeredModal, setCenteredModal}) => {
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => setCenteredModal(false)}
    />
  )
  let initialState = {
    nameGroup: '',
    value1: '',
  }
  const formSchema = Yup.object().shape({
    nameGroup: Yup.string().required('Bạn phải nhập tên nhóm'),
    value1: Yup.string().required('Bạn phải nhập mô tả'),
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
          Tạo nhóm
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
                      maxLength={100}
                      name="nameGroup"
                      label="Tên nhóm"
                      isRequired
                      placeholder="Nhập tên nhóm  ..."
                    />
                  </FormGroup>
                  <FormGroup>
                    <SelectField
                      name="select"
                      label="Thành viên"
                      placeholder="Chọn thành viên"
                      isMulti
                      options={[
                        {
                          label: (
                            <div className="d-flex align-items-center">
                              <img
                                src={img}
                                alt="avatar"
                                style={{
                                  width: 50,
                                  height: 50,
                                  borderRadius: '50%',
                                  marginRight: 7,
                                }}
                              />
                              <div>
                                <p className="mb-0">Cindy Crawford</p>
                                <small>ID Biznet: 823222</small>
                              </div>
                            </div>
                          ),
                          value: 'value1',
                        },
                        {
                          label: (
                            <div className="d-flex align-items-center">
                              <img
                                src={img}
                                alt="avatar"
                                style={{
                                  width: 50,
                                  height: 50,
                                  borderRadius: '50%',
                                  marginRight: 7,
                                }}
                              />
                              <div>
                                <p className="mb-0">Binner</p>
                                <small>ID Biznet: 123456</small>
                              </div>
                            </div>
                          ),
                          value: 'value2',
                        },
                      ]}
                    />
                  </FormGroup>
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
            Tạo nhóm
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

export default ModalAddGroup
