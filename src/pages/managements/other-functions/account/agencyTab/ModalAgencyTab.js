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
} from 'reactstrap'
import './AgencyTab.style.scss'
// *** Components
import AvatarUploadField from 'components/form/AvatarUploadField'
import TextField from 'components/form/TextField'
import TextareaField from 'components/form/TextareaField'
import RadioField from 'components/form/RadioField'
import PerfectScrollbar from 'react-perfect-scrollbar'

const ModalAgencyTab = ({centeredModal, setCenteredModal}) => {
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
  }
  const formSchema = Yup.object().shape({
    name: Yup.string().required('Bạn phải nhập tên sản phẩm'),
    value1: Yup.string().required('Bạn phải nhập mô tả'),
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
          Tạo cấp DLBH mới
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
                      placeholder="Mô tả tên. Ví dụ BM Level ..."
                      isRequired
                    />
                  </FormGroup>

                  <FormGroup>
                    <TextareaField
                      maxLength={100}
                      minRows={3}
                      name="value1"
                      label="Mô tả"
                      // isRequired
                      placeholder="Giải thích và mô tả thêm cho cấp này  ..."
                    />
                  </FormGroup>

                  <FormGroup>
                    <RadioField
                      name="radio"
                      label="Chỉ định"
                      color="primary"
                      inline
                      options={[
                        {
                          value: 'thucong',
                          label: 'Thủ công',
                          checked: true,
                        },
                        {
                          value: 'tudong',
                          label: 'Tự động khi đạt chỉ tiêu',
                          color: 'danger',
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

export default ModalAgencyTab
