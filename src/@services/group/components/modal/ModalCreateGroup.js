import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  Label,
  CardBody,
  Badge,
} from 'reactstrap'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import {Camera, Globe, Lock, X} from 'react-feather'
import {useCallback, useState} from 'react'

// ** Component
import UploadAvatarGroup from '../group-training/detailGroup/UploadAvatarGroup'
import ModalCropImage from './ModalCropImage'

// *** query
import {UserQuery} from '@services/user'

// *** FormField
import TextField from 'components/form/TextField'
import TextareaField from 'components/form/TextareaField'
import SelectField from 'components/form/SelectField'
import RadioField from 'components/form/RadioField'

// *** Routing
import {useHistory} from 'react-router-dom'

// *** Mutation
import {GroupMutation} from '@services/group'

// *** Services
import {uploadSingleImageService} from '@services/ultils'
import SmallSpinner from 'components/small-spinner'

// *** Fake data
import {data_address} from '@services/group/data'
import Avatar from '@core/components/avatar'

const logo =
  'https://newalpha.asia/uploads/56/banner/logo/newalpha-troke-120.png'

const formSchema = Yup.object().shape({
  name: Yup.string().required('Yêu cầu nhập tên nhóm!'),
  members: Yup.array().required('Yêu cầu chọn thành viên!'),
  appellation: Yup.object().required('Yêu cầu chọn danh hiệu').nullable(),
})

const defaultValues = {
  name: '',
  description: '',
  privacy: 'PUBLIC',
  members: [],
  appellation: '',
}

const ModalCreateGroup = ({modal, toggleModal}) => {
  let userLogin =
    (localStorage.getItem('userData') &&
      JSON.parse(localStorage.getItem('userData'))) ||
    null

  // *** Routing
  const history = useHistory()

  // *** State
  const [initialValues, setInitialValues] = useState(defaultValues)
  const [loading, setLoading] = useState(false)
  const [members, setMembers] = useState([])
  const [address, setAddress] = useState({
    city: {
      value: {},
      options: data_address.map(d => ({
        value: d.name,
        label: d.name,
        id: d.level1_id,
      })),
    },
    district: {
      value: {},
      options: [],
    },
    commune: {
      value: {},
      options: [],
    },
  })
  const [image, setImage] = useState({
    avatar: null,
    cover: null,
  })

  const [modalCrop, setModalCrop] = useState('')

  // *** query
  const {data: users} = UserQuery.useGetListAllUserSys()

  // const {data: address} = GroupQuery.useGetAddress()

  // *** mutation
  const {mutate: inviteJoinGroup} = GroupMutation.useInviteJoinGroup()
  const {mutate: createGroup} = GroupMutation.useCreateGroup(group_id =>
    inviteJoinGroup({
      data: {
        user_id: userLogin?.uid,
        list_user_ids: members.map(m => m.value),
      },
      group_id: group_id,
    }),
  )

  const renderUserOptions = useCallback(() => {
    return users && users.data && users.data.length > 0
      ? users.data.map(acc => ({
          value: acc.user_id,
          label: acc.user_name,
          avatar: acc.avatar,
          email: acc.email,
          appellation: acc.appellation?.name,
        }))
      : []
  }, [users])

  const UsersOptions = ({data, innerRef, innerProps}) => {
    return (
      <div
        className="d-flex justify-content-start align-items-center mb-1 cursor-pointer"
        ref={innerRef}
        {...innerProps}
      >
        <Avatar
          className="mx-1"
          img={data.avatar}
          imgHeight={40}
          imgWidth={40}
        />
        <div className="profile-user-info">
          <h6
            className="mb-0"
            onClick={() => history.push(`/user/${data.value}/profile/feed`)}
          >
            {data.label}{' '}
            <Badge color="light-danger" className="ml-2">
              {data.appellation}
            </Badge>
          </h6>
          <small class="text-muted"> {data.email}</small>
        </div>
      </div>
    )
  }

  const [centeredModal, setCenteredModal] = useState(false)
  //** Custom close btn
  const CloseBtn = (
    <X className="cursor-pointer" size={20} onClick={toggleModal} />
  )

  return (
    <>
      <Modal
        isOpen={modal}
        toggle={toggleModal}
        className="modal-dialog-centered modal-xl"
      >
        <Formik
          initialValues={initialValues}
          validationSchema={formSchema}
          onSubmit={async (values, {resetForm}) => {
            setLoading(true)

            let dataSubmit = {
              user_id: userLogin?.uid,
              group_name: values.name,
              group_description: values.description,
              group_label: values.appellation?.value,
              group_type: values.privacy,
              group_avatar: image.avatar || logo,
              group_cover_image: image.cover,
              group_address: {
                group_city: address.city.value?.value || '',
                group_district: address.district.value?.value || '',
                group_commune: address.commune.value?.value || '',
              },
            }

            if (image.avatar) {
              dataSubmit.group_avatar = await uploadSingleImageService(
                image.avatar,
                'group',
              )
            }

            if (image.cover) {
              dataSubmit.group_cover_image = await uploadSingleImageService(
                image.cover,
                'group',
              )
            }

            createGroup(dataSubmit)
            setLoading(false)
            toggleModal()
            resetForm()
          }}
        >
          {({setFieldValue, values, isValid, dirty}) => (
            <Form>
              <ModalHeader toggle={toggleModal} close={CloseBtn}>
                Tạo nhóm
              </ModalHeader>
              <ModalBody>
                {/* <PerfectScrollbar> */}
                <Row className="px-0 mx-0">
                  <Col lg="6" md="12" className="border-right">
                    <Row>
                      <Col md={12}>
                        <TextField
                          name="name"
                          label="Tên nhóm"
                          placeholder="Nhập tên nhóm..."
                          isRequired
                        />
                      </Col>
                      <Col md={12}>
                        <TextareaField
                          name="description"
                          label="Mô tả ngắn"
                          placeholder="Mô tả ngắn về nhóm"
                          minRows={2}
                          isRequired
                        />
                      </Col>

                      <Col md={6}>
                        <RadioField
                          name="privacy"
                          label="Quyền riêng tư của nhóm"
                          options={[
                            {
                              value: 'PUBLIC',
                              label: 'Nhóm công khai',
                              checked: true,
                            },
                            {
                              value: 'PRIVATE',
                              label: 'Nhóm kín',
                            },
                            // {
                            //   value: 'secret',
                            //   label: 'Nhóm bí mật',
                            // },
                          ]}
                        />
                      </Col>

                      <Col md={12}>
                        <SelectField
                          name="members"
                          label="Thành viên"
                          isSearchable
                          isMulti
                          options={renderUserOptions()}
                          components={{
                            Option: UsersOptions,
                          }}
                          value={members}
                          isRequired
                          onChange={(name, value) => setMembers(value)}
                        />
                      </Col>
                      <Col md={6}>
                        <SelectField
                          name="city"
                          label="Tỉnh, thành phố"
                          isSearchable
                          value={address.city.value}
                          options={address.city.options}
                          onChange={(name, value) =>
                            setAddress({
                              ...address,
                              city: {...address.city, value},
                              district: {
                                value: {},
                                options: data_address
                                  .find(d => d.level1_id === value.id)
                                  .level2s.map(d => ({
                                    value: d.name,
                                    label: d.name,
                                    id: d.level2_id,
                                  })),
                              },
                              commune: {
                                value: {},
                                options: [],
                              },
                            })
                          }
                          isRequired
                        />
                      </Col>
                      <Col md={6}>
                        <SelectField
                          name="district"
                          label="Quận, huyện"
                          isSearchable
                          value={address.district.value}
                          options={address.district.options}
                          onChange={(name, value) =>
                            setAddress({
                              ...address,
                              district: {
                                ...address.district,
                                value,
                              },
                              commune: {
                                value: {},
                                options: data_address
                                  .find(
                                    d => d.level1_id === address.city.value.id,
                                  )
                                  .level2s.find(d => d.level2_id === value.id)
                                  .level3s.map(d => ({
                                    value: d.name,
                                    label: d.name,
                                    id: d.level3_id,
                                  })),
                              },
                            })
                          }
                          isRequired
                        />
                      </Col>
                      <Col md={6}>
                        <SelectField
                          name="commune"
                          label="Phường xã"
                          isSearchable
                          options={address.commune.options}
                          value={address.commune.value}
                          onChange={(name, value) =>
                            setAddress({
                              ...address,
                              commune: {...address.commune, value},
                            })
                          }
                          isRequired
                        />
                      </Col>
                    </Row>
                  </Col>

                  {/* PREVIEW */}
                  <Col lg="6" md="12" style={{height: 470}}>
                    <div>
                      <div className="position-relative">
                        <img
                          src={
                            (image.cover && URL.createObjectURL(image.cover)) ||
                            'https://newalpha.asia/uploads/10/hinh-anh/b8e0302e7c8f9ad1c39e-1.jpg'
                          }
                          alt="bannerGroup"
                          style={{
                            width: '100%',
                            height: 300,
                            borderRadius: 13,
                          }}
                        />
                        <Label
                          style={{
                            border: '1px solid #fffcfc',
                            textAlign: 'center',
                            lineHeight: '26px',
                            borderRadius: '50%',
                            top: 0,
                            right: 0,
                            backgroundColor: '#fffcfc',
                          }}
                          className="text-primary cursor-pointer position-absolute m-5 p-2"
                          onClick={() => setModalCrop('cover')}
                        >
                          <Camera size={26} />
                        </Label>
                        <p className="mineGroup w-100 mb-0">
                          <span className="mr-2">
                            {values.privacy === 'PUBLIC' && (
                              <>
                                <Globe size="17" /> Nhóm công khai
                              </>
                            )}
                            {values.privacy === 'PRIVATE' && (
                              <>
                                <Lock size="17" /> Nhóm kín
                              </>
                            )}

                            {/* {values.privacy === 'secret' && (
                            <>
                              <Lock size="17" className="mb-1" /> Nhóm bí mật
                            </>
                          )} */}
                          </span>
                          •
                          <span className="ml-2">
                            {members.length} thành viên
                          </span>
                        </p>
                      </div>
                      <div className="bg-white" style={{borderRadius: 5}}>
                        <CardBody>
                          <div className="d-flex align-items-center">
                            <div style={{position: 'relative'}}>
                              <img
                                src={
                                  (image.avatar &&
                                    URL.createObjectURL(image.avatar)) ||
                                  logo
                                }
                                alt="avatarGroup"
                                style={{
                                  height: 120,
                                  width: 120,
                                  borderRadius: '5%',
                                }}
                              />
                              <Label
                                type="button"
                                style={{
                                  width: 30,
                                  height: 30,
                                  border: '1px solid #fffcfc',
                                  textAlign: 'center',
                                  lineHeight: '26px',
                                  borderRadius: '50%',
                                  position: 'absolute',
                                  top: -10,
                                  right: -10,
                                  backgroundColor: '#fffcfc',
                                }}
                                className="text-primary cursor-pointer"
                                onClick={() => setModalCrop('avatar')}
                              >
                                <Camera size={15} />
                              </Label>
                            </div>

                            <div style={{marginLeft: 20}}>
                              {!!values.appellation && (
                                <Badge color="light-info">
                                  {values.appellation?.label}
                                </Badge>
                              )}

                              <h4 className="mb-0 text-primary mb-1">
                                {values.name || 'Tên nhóm'}
                              </h4>
                              <p>{values.description || 'Mô tả nhóm'}</p>
                            </div>
                          </div>
                        </CardBody>
                      </div>

                      <UploadAvatarGroup
                        centeredModal={centeredModal}
                        setCenteredModal={setCenteredModal}
                      />
                    </div>
                  </Col>
                </Row>
                <ModalFooter>
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    disabled={!isValid || !dirty}
                  >
                    <SmallSpinner isLoading={loading} text="Tạo nhóm" />
                  </Button.Ripple>
                  <Button.Ripple
                    color="primary"
                    type="button"
                    onClick={toggleModal}
                    outline
                  >
                    Hủy
                  </Button.Ripple>
                </ModalFooter>
                {/* </PerfectScrollbar> */}
              </ModalBody>
            </Form>
          )}
        </Formik>
      </Modal>
      <ModalCropImage
        open={modalCrop}
        toggle={() => setModalCrop('')}
        onSave={file => {
          setImage({...image, [modalCrop]: file})
          setModalCrop('')
        }}
      />
    </>
  )
}

export default ModalCreateGroup
