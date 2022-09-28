import React, {useEffect, useState} from 'react'
import {X} from 'react-feather'
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
import PerfectScrollbar from 'react-perfect-scrollbar'
import {CustomerLeadsMutation} from '@services/customer-leads'

const formSchema = Yup.object().shape({
  tag: Yup.string().required('Bạn phải tag sản phẩm'),
  name: Yup.string().required('Bạn phải nhập tên'),
})

const initialState = {
  id: null,
  tag: '',
  name: '',
}
const ModalTagProduct = ({centeredModal, setCenteredModal, item}) => {
  // *** mutate
  const {mutate: createTags} = CustomerLeadsMutation.usePostTagCustomerLead()

  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => setCenteredModal(false)}
    />
  )

  return (
    <div>
      <Modal
        scrollable
        isOpen={centeredModal}
        toggle={() => setCenteredModal(!centeredModal)}
        className="modal-dialog-centered modal-lg"
      >
        <Formik
          initialValues={initialState}
          enableReinitialize={true}
          validationSchema={formSchema}
          onSubmit={values => {
            createTags(values)
            setCenteredModal(!centeredModal)
          }}
        >
          {({isValid}) => (
            <Form>
              <ModalHeader
                close={CloseBtn}
                toggle={() => setCenteredModal(!centeredModal)}
              >
                <span className="text-primary">Tạo tag sản phẩm</span>
              </ModalHeader>
              <ModalBody>
                <PerfectScrollbar>
                  <FormGroup>
                    <TextField
                      type="text"
                      name="tag"
                      size="lg"
                      label="Tag sản phẩm"
                      placeholder="Nhập tag sản phẩm ..."
                      isRequired
                    />
                  </FormGroup>

                  <FormGroup>
                    <TextField
                      type="text"
                      name="name"
                      size="lg"
                      label="Tên"
                      placeholder="VD: Bảo hiểm nhân thọ"
                      isRequired
                    />
                  </FormGroup>
                </PerfectScrollbar>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" disabled={!isValid} type="submit">
                  Tạo tag
                </Button>{' '}
                <Button
                  color="secondary"
                  type="button"
                  onClick={() => setCenteredModal(!centeredModal)}
                >
                  Hủy
                </Button>{' '}
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  )
}

export default ModalTagProduct
