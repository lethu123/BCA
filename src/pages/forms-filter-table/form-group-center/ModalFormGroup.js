import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  FormGroup,
  Label,
  CustomInput,
  CardBody,
  Badge,
  NavItem,
  Nav,
} from 'reactstrap'
import {Formik, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import Select, {components} from 'react-select'
import {Dribbble, Camera, Lock, X} from 'react-feather'
import {selectThemeColors} from 'utility/Utils'
import {useState} from 'react'
import NavLink from 'reactstrap/lib/NavLink'
import Avatar from '@core/components/avatar'
// ** Component
import TextField from 'components/form/TextField'
import UploadAvatarGroup from '@services/group/components/modal/UploadAvatarGroup'

// ** assets
import '@services/group/pages/DetailGroup.style.scss'

import avatarGroup from 'assets/images/home/avatarGroup.png'
import PerfectScrollbar from 'react-perfect-scrollbar'

const formSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
})
const iconOptions = [
  {
    value: 'facebook',
    label: 'Facebook',
    icon: avatarGroup,
  },
  {
    value: 'twitter',
    label: 'Twitter',
    icon: avatarGroup,
  },
  {
    value: 'linkedin',
    label: 'Linkedin',
    icon: avatarGroup,
  },
  {
    value: 'github',
    label: 'Github',
    icon: avatarGroup,
  },
  {
    value: 'instagram',
    label: 'Instagram',
    icon: avatarGroup,
  },
  {
    value: 'dribbble',
    label: 'Dribbble',
    icon: Dribbble,
  },
  {
    value: 'gitlab',
    label: 'Gitlab',
    icon: avatarGroup,
  },
]

const OptionComponent = ({data, ...props}) => {
  return (
    <components.Option {...props}>
      <Avatar img={data.icon} className="mr-50" />
      {data.label}
    </components.Option>
  )
}

const ModalFormGroup = ({modal, toggleModal}) => {
  const [centeredModal, setCenteredModal] = useState(false)
  //** Custom close btn
  const CloseBtn = (
    <X className="cursor-pointer" size={20} onClick={toggleModal} />
  )

  return (
    <Modal
      scrollable
      isOpen={modal}
      toggle={toggleModal}
      className="modal-dialog-centered modal-xl"
    >
      <Formik
        initialValues={{
          title: '',
          member: '',
        }}
        validationSchema={formSchema}
      >
        {({errors, touched, setFieldValue}) => (
          <Form>
            <ModalHeader toggle={toggleModal} close={CloseBtn}>
              T???o nh??m
            </ModalHeader>
            <ModalBody>
              <PerfectScrollbar>
                <Row className="px-0 mx-0">
                  <Col xl="4" lg="6" md="12" className="border-right">
                    <TextField
                      name="title"
                      label="T??n nh??m"
                      placeholder="Group group"
                      isRequired={true}
                    />

                    <FormGroup className="mt-5">
                      <Label for="title" className="font-weight-bold text-dark">
                        Quy???n ri??ng t?? c???a nh??m
                      </Label>
                      <CustomInput
                        type="radio"
                        id="exampleCustomRadio"
                        name="customRadio"
                        className="my-2"
                        label="Nh??m c??ng khai"
                        defaultChecked
                      />
                      <CustomInput
                        type="radio"
                        id="exampleCustomRadio2"
                        name="customRadio"
                        className="my-2"
                        label="Nh??m k??n"
                      />
                      <CustomInput
                        type="radio"
                        name="customRadio"
                        id="exampleCustomRadio3"
                        className="my-2"
                        label="Nh??m b?? m???t"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label
                        for="member"
                        className="font-weight-bold text-dark"
                      >
                        Th??nh vi??n
                      </Label>
                      <Select
                        options={iconOptions}
                        isMulti={true}
                        theme={selectThemeColors}
                        className="react-select"
                        classNamePrefix="select"
                        components={{
                          Option: OptionComponent,
                        }}
                      />
                      <ErrorMessage
                        name="member"
                        component="div"
                        className="field-error text-danger"
                      />
                    </FormGroup>
                    {/* <ImageUploadField
                    setFieldValue={setFieldValue}
                    name="cover"
                    label="???nh b??a nh??m"
                  /> */}
                  </Col>
                  <Col xl="8" lg="6" md="12" style={{height: 470}}>
                    <PerfectScrollbar>
                      <div>
                        <h4 className="mb-4 text-center font-weight-bold text-dark">
                          Xem tr?????c
                        </h4>
                        <div className="position-relative">
                          <img
                            src="https://bacgiangweb.com/wp-content/uploads/dich-vu-thiet-ke-hinh-anh-quang-cao-bgw.jpg"
                            alt="bannerGroup"
                            style={{
                              width: '98%',
                              height: 250,
                              borderRadius: 13,
                            }}
                          />
                          <p
                            style={{
                              // width: 30,
                              // height: 30,
                              border: '1px solid #fffcfc',
                              textAlign: 'center',
                              lineHeight: '26px',
                              borderRadius: '50%',
                              top: 0,
                              right: 0,
                              backgroundColor: '#fffcfc',
                            }}
                            className="text-primary cursor-pointer position-absolute m-5 p-2"
                            onClick={() => setCenteredModal(true)}
                          >
                            <Camera size={26} />
                          </p>
                          <p className="mineGroup w-100 mb-0">
                            <span className="mr-2">
                              <Lock size="17" /> Nh??m c??ng khai{' '}
                            </span>
                            ??? <span className="ml-2">2K th??nh vi??n</span>{' '}
                          </p>
                        </div>
                        <div className="bg-white" style={{borderRadius: 5}}>
                          <CardBody>
                            <div className="d-flex align-items-center mt-5">
                              <div style={{position: 'relative'}}>
                                <img
                                  src={avatarGroup}
                                  alt="avatarGroup"
                                  style={{
                                    height: 120,
                                    width: 120,
                                    borderRadius: '50%',
                                  }}
                                />
                                <p
                                  style={{
                                    width: 30,
                                    height: 30,
                                    border: '1px solid #fffcfc',
                                    textAlign: 'center',
                                    lineHeight: '26px',
                                    borderRadius: '50%',
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    backgroundColor: '#fffcfc',
                                  }}
                                  className="text-primary cursor-pointer"
                                  onClick={() => setCenteredModal(true)}
                                >
                                  <Camera size={15} />
                                </p>
                              </div>

                              <div style={{marginLeft: 20}}>
                                <Badge color="warning" className="text-white">
                                  Nh??m c???a b???n
                                </Badge>
                                <h4 className="mb-0 text-primary my-2">
                                  BCA Tranning 1
                                </h4>
                                <p>
                                  M?? t??? ng???n v??? d??? ??n: ????y l?? m???t d??? ??n v?? c??ng
                                  hay: It is a long established fact that a
                                  reader will be distracted by the readable
                                </p>
                              </div>
                            </div>
                          </CardBody>
                          <Nav tabs>
                            <NavItem>
                              <NavLink
                                active={true}
                                disabled
                                className="border-0"
                              >
                                Gi???i thi???u
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink disabled>B??i vi???t</NavLink>
                            </NavItem>

                            <NavItem>
                              <NavLink disabled>Chat</NavLink>
                            </NavItem>
                          </Nav>
                        </div>

                        <UploadAvatarGroup
                          centeredModal={centeredModal}
                          setCenteredModal={setCenteredModal}
                        />
                      </div>
                    </PerfectScrollbar>
                  </Col>
                </Row>
              </PerfectScrollbar>
            </ModalBody>
            <ModalFooter>
              <Button.Ripple color="primary" type="submit">
                T???o nh??m
              </Button.Ripple>
              <Button
                color="primary"
                type="button"
                onClick={toggleModal}
                outline
              >
                H???y
              </Button>
            </ModalFooter>{' '}
          </Form>
        )}
      </Formik>
    </Modal>
  )
}

export default ModalFormGroup
