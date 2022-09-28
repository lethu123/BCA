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
} from 'reactstrap'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
// *** Components
import TextField from 'components/form/TextField'
import TextareaField from 'components/form/TextareaField'
import RadioField from 'components/form/RadioField'
import PerfectScrollbar from 'react-perfect-scrollbar'

const ModalAdd = ({centeredModal, setCenteredModal}) => {
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
    name: Yup.string().required('Bạn phải nhập tên '),
    description: Yup.string().required('Bạn phải nhập mô tả'),
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
                    <TextField
                      type="text"
                      name="name"
                      size="lg"
                      label="Tên"
                      placeholder="Tên đại lý ..."
                      isRequired
                    />
                  </FormGroup>

                  <FormGroup>
                    <TextareaField
                      maxLength={100}
                      minRows={2}
                      name="description"
                      label="Mô tả"
                      // isRequired
                      placeholder="Mô tả cho nhóm đối tượng đã là đại lý của BCA  ..."
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
                          value: 'tudong',
                          label: 'Tự động thành đại lý',
                          checked: true,
                        },
                        {
                          value: 'thucong',
                          label: 'Thủ công',
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
            Thoát
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ModalAdd
