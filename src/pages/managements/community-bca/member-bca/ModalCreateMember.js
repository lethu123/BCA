import {Formik, Form} from 'formik'
import TextField from 'components/form/TextField'
import * as Yup from 'yup'
import React from 'react'
import {Save, X} from 'react-feather'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  FormGroup,
  Badge,
  Card,
} from 'reactstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

//scss
import './MemberBCA.style.scss'

//image
import avatar from 'assets/images/avatars/1-small.png'
import Image1 from 'assets/images/home/data1.png'

//component
import SelectField from 'components/form/SelectField'
import DatePickerField from 'components/form/DatePickerField'
import AvatarUploadField from 'components/form/AvatarUploadField'
import PerfectScrollbar from 'react-perfect-scrollbar'

const formSchema = Yup.object().shape({
  full_name: Yup.string().required('không được bỏ trống'),
  username: Yup.string().required('không được bỏ trống'),
  email: Yup.string().required('không được bỏ trống'),
  phone_number: Yup.string().required('không được bỏ trống'),
  link_facebook: Yup.string().required('không được bỏ trống'),
})
const MySwal = withReactContent(Swal)

const typeAccountOptions = [
  {id: 1, value: 'Thành viên BCA', label: 'Thành viên BCA'},
  {id: 2, value: 'Thành viên', label: 'Thành viên'},
  {id: 3, value: 'Admin A1', label: 'Admin A1'},
  {id: 4, value: 'Tiềm năng', label: 'Tiềm năng'},
  {id: 5, value: 'Kế toán', label: 'Kế toán'},
  {id: 6, value: 'Admin tổng hợp', label: 'Admin tổng hợp'},
]

const agentLevelOptions = [
  {id: 1, value: 'Cấp ĐLBH', label: 'Cấp ĐLBH'},
  {id: 2, value: 'Cấp PM', label: 'Cấp PM'},
  {id: 3, value: 'Cấp UM', label: 'Cấp UM'},
  {id: 4, value: 'Cấp PUM', label: 'Cấp PUM'},
]

const positionOptions = [
  {id: 1, value: 'Kế toán - Nhân sự', label: 'Kế toán - Nhân sự'},
  {id: 2, value: 'Developer', label: 'Developer'},
  {id: 3, value: 'Project manage', label: 'Project manage'},
  {id: 4, value: 'Tester', label: 'Tester'},
]

const levelDataCenterOptions = [
  {id: 1, value: 'DataCenter 1', label: 'DataCenter 1'},
  {id: 2, value: 'DataCenter 2', label: 'DataCenter 2'},
  {id: 3, value: 'DataCenter 3', label: 'DataCenter 3'},
]

const agentInCharge = [
  {
    id: 1,
    value: 'Đại lý cấp 1',
    label: 'Đại lý cấp 1',
    image: avatar,
    ID: '29837',
  },
  {
    id: 2,
    value: 'Đại lý cấp 2',
    label: 'Đại lý cấp 2',
    image: avatar,
    ID: '93748',
  },
]

const ModalCreateMember = ({setCreateMember, createMember}) => {
  //useState

  const formatOptionLabel = ({label, image, ID}) => (
    <div style={{display: 'flex'}}>
      <div>
        <img
          src={image}
          alt="iamges1"
          className="img-fluid rounded-circle"
          style={{width: '40px', height: 40}}
        />
      </div>
      <div style={{marginLeft: '10px'}} className="text-dark">
        <p className="mb-0 ">{label}</p>
        <p
          className="mb-0 text-danger font-weight-bolder"
          style={{fontSize: '12px'}}
        >
          ID: {ID}
        </p>
      </div>
    </div>
  )

  //function
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => setCreateMember(!createMember)}
    />
  )
  const handleSuccess = () => {
    return MySwal.fire({
      title: 'Tạo thành công!',
      text: 'Nhấn ok để tiếp tục!',
      icon: 'success',
      customClass: {
        confirmButton: 'btn btn-primary',
      },
      buttonsStyling: false,
    }).then(() => {
      setCreateMember(!createMember)
    })
  }

  return (
    <div className="modal_create_member">
      <Modal
        // scrollable
        isOpen={createMember}
        toggle={() => setCreateMember(!createMember)}
        className="modal-dialog-centered modal-xl"
        style={{overscrollX: 'hidden'}}
      >
        <ModalHeader
          toggle={() => setCreateMember(!createMember)}
          close={CloseBtn}
        >
          Tạo tài khoản thành viên
        </ModalHeader>
        <ModalBody>
          <PerfectScrollbar>
            <Formik
              initialValues={{
                avatar: '',
                type_account: 0,
                agent_level: 0,
                position: 0,
                level_data_center: 0,
                full_name: '',
                username: '',
                email: '',
                phone_number: '',
                link_facebook: '',
                link_twitter: '',
                link_linkedin: '',
                link_tiktok: '',
                agent_in_charge: 0,
                date_start: new Date(),
              }}
              validationSchema={formSchema}
              onSubmit={(values, {setSubmitting}) => {
                console.log(values)
              }}
            >
              {({isValid, dirty, values, setFieldValue, setFieldTouched}) => (
                <Form>
                  <div>
                    <Row className="px-0 mx-0">
                      <Col lg={5}>
                        <FormGroup className="mb-5">
                          <AvatarUploadField
                            name="avatar"
                            label="Avatar"
                            isRequired
                          />
                        </FormGroup>
                      </Col>
                      <Col lg={7}>
                        <Card className="p-5 mb-5">
                          <div className="d-flex align-items-center ">
                            <div>
                              <img
                                src={Image1}
                                alt="images"
                                style={{
                                  width: 160,
                                  height: 160,
                                  borderRadius: 5,
                                }}
                              />
                            </div>

                            <div style={{marginLeft: 8}}>
                              <h5 className="text-primary mb-2">
                                Dương Trọng Hải
                              </h5>
                              <div>
                                <Badge color="primary" className="mr-2">
                                  BM
                                </Badge>
                                <Badge color="success" className="mr-1">
                                  DataCenter
                                </Badge>
                              </div>

                              <Badge
                                color="warning"
                                className="mr-1 mt-2 text-white"
                              >
                                Thành viên BCA
                              </Badge>
                              <p className="my-1">
                                <span className="text-danger">8</span> Follower
                                / <span className="text-danger">18</span>{' '}
                                Followings
                              </p>
                              <div className="w-200px">
                                <p className="mb-0 text-primary text-truncate ">
                                  http://mxh.bcavietnam.com/haitrongduong
                                </p>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </Col>
                    </Row>

                    <Row className="px-0 mx-0">
                      <Col lg={6} className="mb-3">
                        <SelectField
                          name="type_account"
                          label="Loại tài khoản"
                          options={typeAccountOptions}
                          isRequired
                        />
                      </Col>
                      <Col lg={6} className="mb-3">
                        <SelectField
                          name="agent_level"
                          label="Chọn cấp ĐL"
                          options={agentLevelOptions}
                          isRequired
                        />
                      </Col>
                      <Col lg={6} className="mb-3">
                        <SelectField
                          name="position"
                          label="Chức vụ/Phòng ban"
                          options={positionOptions}
                          isRequired
                        />
                      </Col>
                      <Col lg={6} className="mb-3">
                        <SelectField
                          name="level_data_center"
                          label="Cấp Data Center"
                          options={levelDataCenterOptions}
                          isRequired
                        />
                      </Col>
                      <Col lg={6} className="mb-3">
                        <TextField
                          placeholder="Nhập tên hiển thị Vd: Dương Trọng Hải"
                          label="Tên hiển thị"
                          isRequired
                          name="full_name"
                          type="text"
                        />
                      </Col>
                      <Col lg={6} className="mb-3">
                        <TextField
                          label="Username"
                          placeholder="Nhập username"
                          isRequired
                          name="username"
                          type="text"
                        />
                      </Col>
                      <Col lg={6} className="mb-3">
                        <TextField
                          label="Email(optional)"
                          placeholder="vd: duonghai@gmail.com"
                          isRequired
                          name="email"
                          type="text"
                        />
                      </Col>
                      <Col lg={6} className="mb-3">
                        <TextField
                          label="Số điện thoại"
                          placeholder="vd:098468362"
                          isRequired
                          name="phone_number"
                          type="number"
                        />
                      </Col>
                      <Col lg={6}>
                        <TextField
                          label="Link mạng xã hội(optional)"
                          placeholder="@Facebook"
                          isRequired
                          name="link_facebook"
                          type="text"
                        />
                      </Col>
                      <Col lg={6} className="mt-8">
                        <TextField
                          placeholder="@Twitter"
                          name="link_twitter"
                          type="text"
                        />
                      </Col>
                      <Col lg={6}>
                        <TextField
                          placeholder="@Linkedin"
                          name="link_linkedin"
                          type="text"
                        />
                      </Col>
                      <Col lg={6}>
                        <TextField
                          placeholder="@Tiktok"
                          name="link_tiktok"
                          type="text"
                        />
                      </Col>
                      <Col lg={6}>
                        <SelectField
                          name="agent_in_charge"
                          label="Đại lý phụ trách"
                          options={agentInCharge}
                          formatOptionLabel={formatOptionLabel}
                          isRequired
                        />
                      </Col>
                      <Col lg={6}>
                        <DatePickerField
                          name="date_start"
                          label="Ngày bắt đầu"
                          isRequired
                        />
                      </Col>
                    </Row>
                  </div>

                  <FormGroup className="mb-0 mt-5 w-100 text-center">
                    <Button.Ripple
                      disabled={!(isValid && dirty)}
                      color="primary"
                      type="submit"
                      className="mr-2"
                      onClick={handleSuccess}
                    >
                      <Save size={15} /> Tạo
                    </Button.Ripple>
                    <Button.Ripple
                      color="secondary"
                      outline
                      onClick={() => setCreateMember(!createMember)}
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

export default ModalCreateMember
