import React, {useState} from 'react'
import {Save, X} from 'react-feather'
// *** Third Libary
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {
  Button,
  CustomInput,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap'

import './DepartmentTab.style.scss'
import AvatarUploadField from 'components/form/AvatarUploadField'
import TextField from 'components/form/TextField'
import TextareaField from 'components/form/TextareaField'
import RadioField from 'components/form/RadioField'
import PerfectScrollbar from 'react-perfect-scrollbar'

const ModalDepartmentTab = ({centeredModal, setCenteredModal}) => {
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => setCenteredModal(false)}
    />
  )
  let initialState = {
    name: '',
    description: '',
  }
  const formSchema = Yup.object().shape({
    name: Yup.string().required('Bạn phải nhập tên sản phẩm'),
    description: Yup.string().required('Bạn phải nhập mô tả'),
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
          Tạo phòng ban
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
                      size="md"
                      label="Tên"
                      placeholder="Mô tả tên phòng ban. Ví dụ: Tài chính ..."
                      isRequired
                    />
                  </FormGroup>

                  <FormGroup>
                    <TextareaField
                      maxLength={100}
                      minRows={3}
                      name="description"
                      label="Mô tả"
                      // isRequired
                      placeholder="Giải thích và mô tả cho phòng ban này  ..."
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="value3">
                      Chỉ định <span style={{color: '#EA5455'}}>*</span>
                    </Label>
                    <div className="d-flex justify-content-around">
                      <RadioField
                        name="radio"
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
                          },
                        ]}
                      />
                    </div>
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

export default ModalDepartmentTab
