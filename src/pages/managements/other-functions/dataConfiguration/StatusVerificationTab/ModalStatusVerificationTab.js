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
import TextField from 'components/form/TextField'
import PerfectScrollbar from 'react-perfect-scrollbar'

const ModalStatusTab = ({centeredModal, setCenteredModal}) => {
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => setCenteredModal(false)}
    />
  )
  let initialState = {
    name: '',
    owned: '',
    notification: '',
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
          Tạo quy định về chuyển trạng thái
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
                      placeholder="Nguồn Data ..."
                      isRequired
                    />
                  </FormGroup>
                  <FormGroup>
                    <TextField
                      type="number"
                      name="owned"
                      size="lg"
                      label="Số ngày cảnh báo trước khi xóa"
                      placeholder="Nhập số ngày ..."
                      isRequired
                    />
                  </FormGroup>
                  <FormGroup>
                    <TextField
                      type="number"
                      name="notification"
                      size="lg"
                      label="Số ngày xóa"
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

export default ModalStatusTab
