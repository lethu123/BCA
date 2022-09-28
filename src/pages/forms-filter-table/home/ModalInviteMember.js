import {X} from 'react-feather'
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'

import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import TextField from 'components/form/TextField'
import PerfectScrollbar from 'react-perfect-scrollbar'

const formSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
})
const ModalInviteMember = ({modal, toggleModal}) => {
  return (
    <Modal
      scrollable
      isOpen={modal}
      toggle={toggleModal}
      className="modal-dialog-centered modal-md"
    >
      <Formik
        initialValues={{
          required: '',
          email: '',
          url: '',
          number: '',
          date: '',
          minlength: '',
          maxlength: '',
        }}
        validationSchema={formSchema}
      >
        {({isValid}) => (
          <Form>
            <ModalHeader
              close={
                <X className="cursor-pointer" size={20} onClick={toggleModal} />
              }
              toggle={toggleModal}
            >
              <span className="text-primary">Giới thiệu thành viên</span>
            </ModalHeader>
            <ModalBody>
              <PerfectScrollbar>
                <TextField
                  label="Nhập email người mời tham gia"
                  placeholder="hr@gmail.com"
                  isRequired={true}
                  name="email"
                  type="email"
                />
              </PerfectScrollbar>
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                size="sm"
                disabled={!isValid}
                type="submit"
              >
                Xác nhận
              </Button>
              <Button
                size="sm"
                color="danger"
                type="button"
                onClick={toggleModal}
                outline
              >
                Hủy
              </Button>
            </ModalFooter>
          </Form>
        )}
      </Formik>
    </Modal>
  )
}

export default ModalInviteMember
