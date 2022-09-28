import TextField from 'components/form/TextField'
import React from 'react'
import {Save, X} from 'react-feather'
import {Button, Modal, ModalHeader, ModalBody, FormGroup} from 'reactstrap'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import PerfectScrollbar from 'react-perfect-scrollbar'

const formSchema = Yup.object().shape({
  id: Yup.string().required('không được bỏ trống'),
})

const ModalTransferData = ({transferData, setTransferData}) => {
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => setTransferData(!transferData)}
    />
  )
  return (
    <div>
      <Modal
        scrollable
        isOpen={transferData}
        toggle={() => setTransferData(!transferData)}
        className="modal-dialog-centered modal-md"
      >
        <ModalHeader
          toggle={() => setTransferData(!transferData)}
          close={CloseBtn}
        >
          Chuyển dữ liệu sang đại lý
        </ModalHeader>
        <ModalBody>
          <PerfectScrollbar>
            <Formik
              initialValues={{
                id: '',
              }}
              validationSchema={formSchema}
              onSubmit={(values, {setSubmitting}) => {
                setTransferData(!transferData)
              }}
            >
              {({isValid, dirty, values, setFieldValue, setFieldTouched}) => (
                <Form className="p-2  ">
                  <TextField
                    label="Nhập ID đối tác"
                    placeholder="Nhập ID đối tác"
                    isRequired={true}
                    name="id"
                    type="text"
                    size="sm"
                  />

                  <FormGroup className="mb-0 mt-5 w-100 text-center">
                    <Button.Ripple
                      disabled={!(isValid && dirty)}
                      color="primary"
                      type="submit"
                      className="mr-2"
                    >
                      <Save size={15} /> Chuyển
                    </Button.Ripple>
                    <Button.Ripple
                      color="secondary"
                      outline
                      onClick={() => setTransferData(!transferData)}
                    >
                      <X size={15} /> Hủy
                    </Button.Ripple>
                  </FormGroup>
                </Form>
              )}
            </Formik>
          </PerfectScrollbar>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default ModalTransferData
