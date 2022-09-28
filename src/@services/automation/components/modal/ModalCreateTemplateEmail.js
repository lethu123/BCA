import React, {useEffect, useState} from 'react'
import {X} from 'react-feather'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {uid} from 'uid'
import TextField from 'components/form/TextField'
import TextareaField from 'components/form/TextareaField'

// *** Query
import {AutomationMutation} from '@services/automation'

const formSchema = Yup.object().shape({
  name: Yup.string().required('Yêu cầu nhập tên Template!'),
  description: Yup.string().required('Yêu cầu nhập mô tả Template!'),
})

const LIST_KEYS = ['FULLNAME', 'EMAIL', 'PHONE', 'ADDRESS', 'LINK']
const storage = localStorage.getItem('dataTemplate')

const ModalCreateTemplateEmail = ({modal, toggleModal, saveDesignHTML}) => {
  // *** MUTATION
  const {mutate} = AutomationMutation.useCreateTemplateEmail()

  const [listTemplate, setListTemplate] = useState(JSON.parse(storage))

  useEffect(() => {
    localStorage.setItem('dataTemplate', JSON.stringify(listTemplate))
  }, [listTemplate])

  return (
    <Modal
      isOpen={modal}
      toggle={toggleModal}
      className="modal-dialog-centered"
    >
      <ModalHeader
        close={
          <div className="cursor-pointer" onClick={toggleModal}>
            <X />
          </div>
        }
        toggle={toggleModal}
      >
        Tạo template email cho hệ thống
      </ModalHeader>

      <Formik
        initialValues={{
          name: '',
          description: '',
        }}
        validationSchema={formSchema}
        onSubmit={values => {
          // handle api
          const keys = LIST_KEYS.filter(ele =>
            saveDesignHTML.includes(`{{${ele}}}`),
          )
          const data = {
            id: uid(16),
            name: values.name,
            description: values.description,
            params: keys.length > 0 ? JSON.stringify(keys) : '',
            html: saveDesignHTML,
          }
          console.log('data', saveDesignHTML)
          listTemplate
            ? setListTemplate([...listTemplate, data])
            : setListTemplate([data])
          toggleModal()
          // mutate(data)
        }}
      >
        {({errors, touched}) => (
          <Form>
            <ModalBody>
              <TextField
                type="text"
                name="name"
                size="lg"
                label="Tên Template"
                isRequired
              />
              <TextareaField
                isRequired
                name="description"
                label="Mô tả"
                placeholder="Tạo template email này cho mục đích gì ??"
              />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" type="submit">
                Tạo Template
              </Button>
            </ModalFooter>
          </Form>
        )}
      </Formik>
    </Modal>
  )
}

export default ModalCreateTemplateEmail
