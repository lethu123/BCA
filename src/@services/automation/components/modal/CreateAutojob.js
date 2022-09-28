import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
} from 'reactstrap'

import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import TextField from 'components/form/TextField'
import TextareaField from 'components/form/TextareaField'

const formSchema = Yup.object().shape({
  name: Yup.string().required('Yêu cầu nhập tên autojob'),
  description: Yup.string().required('Yêu cầu nhập mô tả '),
})

const CreateAutojob = ({isOpen, toggle, onSubmit, generalData}) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        className="modal-dialog-centered modal-lg"
      >
        <Formik
          initialValues={{
            name: generalData.name || '',
            description: generalData.description || '',
          }}
          validationSchema={formSchema}
          onSubmit={values =>
            onSubmit({name: values.name, description: values.description})
          }
        >
          {({values}) => (
            <Form>
              <ModalHeader toggle={toggle}>
                {generalData.name ? 'Cập nhật' : 'Tạo mới'} Auto Job
              </ModalHeader>
              <ModalBody>
                <Row>
                  <Col md="12">
                    <TextField
                      type="text"
                      name="name"
                      label="Tên auto job"
                      placeholder="Nhập tên auto job"
                      isRequired={true}
                    />
                  </Col>
                  <Col md="12">
                    <TextareaField
                      name="description"
                      label="Mô tả"
                      placeholder="Nhập mô tả..."
                      isRequired={true}
                    />
                  </Col>
                </Row>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  type="submit"
                  disabled={!(values.name && values.description)}
                >
                  Lưu
                </Button>
                <Button outline color="danger" type="button" onClick={toggle}>
                  Đóng
                </Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  )
}

export default CreateAutojob
