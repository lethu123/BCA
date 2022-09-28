import TextareaField from 'components/form/TextareaField'
import React from 'react'
import {Save, X} from 'react-feather'
import {Button, Modal, ModalHeader, ModalBody, FormGroup} from 'reactstrap'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import PerfectScrollbar from 'react-perfect-scrollbar'

const formSchema = Yup.object().shape({
  description: Yup.string().required('không được bỏ trống'),
})

const ModalAddNoteTakeCare = ({addNote, setAddNote}) => {
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => setAddNote(!addNote)}
    />
  )
  return (
    <div>
      <Modal
        scrollable
        isOpen={addNote}
        toggle={() => setAddNote(!addNote)}
        className="modal-dialog-centered modal-lg"
      >
        <ModalHeader toggle={() => setAddNote(!addNote)} close={CloseBtn}>
          Thêm ghi nhớ chăm sóc
        </ModalHeader>
        <ModalBody>
          <PerfectScrollbar>
            <Formik
              initialValues={{
                description: '',
              }}
              validationSchema={formSchema}
              onSubmit={(values, {setSubmitting}) => {
                setAddNote(!addNote)
              }}
            >
              {({isValid, dirty, values, setFieldValue, setFieldTouched}) => (
                <Form className="p-2  ">
                  <TextareaField
                    maxLength={1000}
                    label=" Nội dung mô tả dự án"
                    name="description"
                    // isRequired
                    value={values.description}
                    placeholder="Mô tả dự án của bạn tại đây"
                    minRows="4"
                  />

                  <FormGroup className="mb-0 mt-5 w-100 text-center">
                    <Button.Ripple
                      disabled={!(isValid && dirty)}
                      color="primary"
                      type="submit"
                      className="mr-2"
                    >
                      <Save size={15} /> Thêm
                    </Button.Ripple>
                    <Button.Ripple
                      color="secondary"
                      outline
                      onClick={() => setAddNote(!addNote)}
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

export default ModalAddNoteTakeCare
