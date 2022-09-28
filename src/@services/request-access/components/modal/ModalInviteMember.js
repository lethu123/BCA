import {X} from 'react-feather'
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Spinner,
} from 'reactstrap'

import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import TextField from 'components/form/TextField'
import PerfectScrollbar from 'react-perfect-scrollbar'
// ** mutate
import {UserMutation} from '@services/profile'
import {toast} from 'react-toastify'

const formSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
})
const ModalInviteMember = ({modal, toggleModal}) => {
  const userLocal = localStorage.getItem('userData')
  const refLink = `${window.location.origin}/login`
  let ref_code = null
  if (userLocal) {
    let data = JSON.parse(userLocal)
    ref_code = data.uid
  }

  // *** Mutate
  const {mutate: onCreateUserReference, isLoading} =
    UserMutation.useCreateProfileReference(() => {
      toast.success('Mời thành công')
      toggleModal()
    })

  return (
    <Modal
      scrollable
      isOpen={modal}
      toggle={toggleModal}
      className="modal-dialog-centered modal-md"
    >
      <Formik
        initialValues={{
          email: '',
        }}
        // validationSchema={formSchema}
        onSubmit={({email}) => {
          let dataRequest = {
            email,
            register_link: refLink,
            ref_code,
          }
          onCreateUserReference(dataRequest)
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
                {isLoading && <Spinner size="sm" className="mr-1" />}
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
