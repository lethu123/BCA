import {Formik, Form} from 'formik'
import TextField from 'components/form/TextField'
import * as Yup from 'yup'
import React, {useState} from 'react'
import {Save, X} from 'react-feather'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Row,
  Col,
} from 'reactstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import SelectField from 'components/form/SelectField'
import DatePickerField from 'components/form/DatePickerField'
import ComposePopUp from '../inbox/ComposePopup'
import LibEmailItem from '../library-email/LibEmailItem'
import avatarUser3 from 'assets/media/svg/avatars/001-boy.svg'
import imagePost from 'assets/media/product-demos/demo2.png'
import {useHistory} from 'react-router'
import PerfectScrollbar from 'react-perfect-scrollbar'

const formSchema = Yup.object().shape({
  campaign: Yup.object({
    label: Yup.string().required(),
    value: Yup.string().required(),
  }).required('không được bỏ trống'),
  condition: Yup.array().required('không được bỏ trống'),
  email: Yup.string()
    .email('Must be a valid email')
    .required('không được bỏ trống'),
  birthday: Yup.array().required('không được bỏ trống'),
})
const MySwal = withReactContent(Swal)

const option_campaign = [
  {
    label: 'Mừng sinh nhật',
    value: 'Mừng sinh nhật',
  },
  {
    label: 'Tri ân tháng 7',
    value: 'Tri ân tháng 7',
  },
]

const option_condition = [
  {
    label: 'Mã KH',
    value: 'Mã KH',
  },
  {
    label: 'Tên',
    value: 'Tên',
  },
  {
    label: 'Email',
    value: 'Email',
  },
  {
    label: 'Số ĐT',
    value: 'Số ĐT',
  },
  {
    label: 'Ngày Sinh',
    value: 'Ngày Sinh',
  },
]
const data = {
  id: 1,
  username: 'Quyen Quyen',
  time: new Date(),
  description:
    ' Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post overall structure of your post overall structure of your post overall structure of your post quyen',
  avatar: avatarUser3,
  image: [imagePost],
  files: [imagePost],
  like: 10,
}

const ModalCreateCampaignEmail = ({setModal, modal}) => {
  const history = useHistory()
  const [composeOpen, setComposeOpen] = useState(false)

  // *** Toggle Compose Function
  const toggleCompose = () => {
    setComposeOpen(!composeOpen)
  }
  //function
  const CloseBtn = (
    <X className="cursor-pointer" size={20} onClick={() => setModal(!modal)} />
  )
  const handleSuccess = () => {
    return MySwal.fire({
      title: 'Tạo mới chiến dịch thành công!',
      text: 'Nhấn ok để tiếp tục!',
      icon: 'success',
      customClass: {
        confirmButton: 'btn btn-primary',
      },
      buttonsStyling: false,
    }).then(() => {
      setModal(!modal)
    })
  }

  return (
    <div className="content-body">
      <Modal
        scrollable
        isOpen={modal}
        toggle={() => setModal(!modal)}
        className="modal-dialog-centered modal-lg"
      >
        <ModalHeader toggle={() => setModal(!modal)} close={CloseBtn}>
          Tạo chiến dịch
        </ModalHeader>
        <ModalBody>
          <PerfectScrollbar>
            <Formik
              initialValues={{
                campaign: '',
                condition: [],
                email: '',
                birthday: '',
              }}
              validationSchema={formSchema}
              onSubmit={(values, {setSubmitting}) => {
                console.log(values)
              }}
            >
              {({isValid, dirty, values, setFieldValue, setFieldTouched}) => (
                <Form className="px-5">
                  <Row>
                    <Col lg="6">
                      <SelectField
                        name="campaign"
                        label="Chiến dịch"
                        isRequired
                        options={option_campaign}
                      />
                    </Col>
                    <Col lg={6}>
                      {' '}
                      <SelectField
                        name="condition"
                        label="Điều kiện"
                        isMulti
                        isRequired
                        options={option_condition}
                      />
                    </Col>
                    <Col lg={6}>
                      <TextField
                        label="Email"
                        placeholder="email"
                        isRequired
                        name="email"
                        type="email"
                      />
                    </Col>
                    <Col lg={6}>
                      <DatePickerField
                        name="birthday"
                        label="Ngày sinh"
                        // options={{inline: true}}
                        isRequired
                      />
                    </Col>
                  </Row>

                  <FormGroup>
                    <p className="mb-1 mt-2 font-weight-bold">Setup Email</p>
                    <Button.Ripple
                      color="primary"
                      className="mr-2"
                      onClick={() => {
                        history.push('/admin/email/thu-vien-email-mau')
                        setModal(!modal)
                      }}
                    >
                      Chọn mẫu
                    </Button.Ripple>
                    <Button.Ripple
                      color="success"
                      onClick={() => {
                        toggleCompose()
                        setModal(!modal)
                      }}
                    >
                      Soạn mới
                    </Button.Ripple>
                  </FormGroup>
                  <LibEmailItem post={data} choose={true} />

                  <FormGroup className="mb-0 mt-5 w-100 text-center">
                    <Button.Ripple
                      disabled={!(isValid && dirty)}
                      color="primary"
                      type="submit"
                      className="mr-2"
                      onClick={handleSuccess}
                    >
                      <Save size={15} /> Tạo Chiến dịch
                    </Button.Ripple>
                    <Button.Ripple
                      color="secondary"
                      outline
                      onClick={() => setModal(!modal)}
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
      <ComposePopUp
        composeOpen={composeOpen}
        toggleCompose={toggleCompose}
        setModal={setModal}
        modal={modal}
      />
    </div>
  )
}

export default ModalCreateCampaignEmail
