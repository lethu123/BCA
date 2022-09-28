import TextField from 'components/form/TextField'
import React from 'react'
import {Save, X} from 'react-feather'
import {Button, Modal, ModalHeader, ModalBody, FormGroup} from 'reactstrap'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import PerfectScrollbar from 'react-perfect-scrollbar'

const formSchema = Yup.object().shape({
  health: Yup.string().required('không được bỏ trống'),
})

const ModalConditionHealth = ({conditionHealth, setConditionHealth}) => {
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => setConditionHealth(!conditionHealth)}
    />
  )
  return (
    <div>
      <Modal
        scrollable
        isOpen={conditionHealth}
        toggle={() => setConditionHealth(!conditionHealth)}
        className="modal-dialog-centered modal-md"
      >
        <ModalHeader
          toggle={() => setConditionHealth(!conditionHealth)}
          close={CloseBtn}
        >
          Tình trạng sức khỏe
        </ModalHeader>
        <ModalBody>
          <PerfectScrollbar>
            <Formik
              initialValues={{
                health: '',
              }}
              validationSchema={formSchema}
              onSubmit={(values, {setSubmitting}) => {
                setConditionHealth(!conditionHealth)
              }}
            >
              {({isValid, dirty, values, setFieldValue, setFieldTouched}) => (
                <Form className="p-2  ">
                  <TextField
                    label="Nhập tình trạng sức khỏe"
                    placeholder="Nhập tình trạng sức khỏe"
                    isRequired={true}
                    name="health"
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
                      <Save size={15} />
                      Lưu
                    </Button.Ripple>
                    <Button.Ripple
                      color="secondary"
                      outline
                      onClick={() => setConditionHealth(!conditionHealth)}
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

export default ModalConditionHealth
