import React from 'react'
import {Save, X} from 'react-feather'
// *** Third Libary
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {
  Button,
  FormGroup,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap'
import TextField from 'components/form/TextField'
import PerfectScrollbar from 'react-perfect-scrollbar'

const ModalTimeTab = ({centeredModal, setCenteredModal}) => {
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => setCenteredModal(false)}
    />
  )
  let initialState = {
    name: '',
    owned: 0,
    notification: 0,
  }
  const formSchema = Yup.object().shape({
    name: Yup.string().required('Bạn phải nhập tên sản phẩm'),
    owned: Yup.number().min(1, 'Số lượng phải lớn hơn 0'),
    notification: Yup.number().min(1, 'Số lượng phải lớn hơn 0'),
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
          Tạo quy định thời lượng sở hữu Data
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
                      size="md"
                      label="Tên"
                      placeholder="Nguồn Data ..."
                      isRequired
                    />
                  </FormGroup>
                  <FormGroup>
                    <TextField
                      type="number"
                      name="owned"
                      size="md"
                      label="Số ngày sở hữu"
                      placeholder="Nhập số ngày ..."
                      isRequired
                    />
                  </FormGroup>
                  <FormGroup>
                    <TextField
                      type="number"
                      name="notification"
                      size="md"
                      label="Số ngày thông báo"
                      placeholder="Nhập số ngày ..."
                      isRequired
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

export default ModalTimeTab
