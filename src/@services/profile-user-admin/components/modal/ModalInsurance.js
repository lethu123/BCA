import React from 'react'
import {Save, X} from 'react-feather'
import {Button, Modal, ModalHeader, ModalBody, FormGroup} from 'reactstrap'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import TagInputField from 'components/form/TagInputField'
import PerfectScrollbar from 'react-perfect-scrollbar'

const formSchema = Yup.object().shape({
  id: Yup.string().required('không được bỏ trống'),
})

const ModalInsurance = ({insurance, setInsurance}) => {
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => setInsurance(!insurance)}
    />
  )
  return (
    <div>
      <Modal
        scrollable
        isOpen={insurance}
        toggle={() => setInsurance(!insurance)}
        className="modal-dialog-centered modal-md"
      >
        <ModalHeader toggle={() => setInsurance(!insurance)} close={CloseBtn}>
          Tham gia bảo hiểm
        </ModalHeader>
        <ModalBody>
          <PerfectScrollbar>
            <Formik
              initialValues={{
                id: '',
              }}
              validationSchema={formSchema}
              onSubmit={(values, {setSubmitting}) => {
                setInsurance(!insurance)
              }}
            >
              {({isValid, dirty, values, setFieldValue, setFieldTouched}) => (
                <Form className="p-2  ">
                  <TagInputField
                    name="tag"
                    label="Bảo hiểm khách hàng đã tham gia"
                    // defaultValue="tagify, is , awesome, in so many way"
                    placeholder="Nhấn enter hoặc tab"
                    suggestions={[
                      'Bảo hiểm nhân thọ',
                      'Bảo hiểm xã hội',
                      'Bảo hiểm y tế',
                      'Bảo hiểm sức khỏe',
                      'Bảo hiểm thân thể',
                    ]}
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
                      onClick={() => setInsurance(!insurance)}
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

export default ModalInsurance
