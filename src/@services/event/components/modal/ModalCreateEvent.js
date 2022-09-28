import {X} from 'react-feather'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  Badge,
  CardBody,
  Card,
  Media,
  Label,
  FormGroup,
  Spinner,
} from 'reactstrap'
import {Formik, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {Link} from 'react-router-dom'
import {getUserData, selectThemeColors, subStr} from 'utility/Utils'
// import PerfectScrollbar from 'react-perfect-scrollbar'
import moment from 'moment'

import {useEffect, useState} from 'react'
import Select, {components} from 'react-select'
import CreatableSelect from 'react-select/creatable'
// ** component
import DatePickerField from 'components/form/DatePickerField'
import Avatar from '@core/components/avatar'
import SelectField from 'components/form/SelectField'
import TextField from 'components/form/TextField'
import EditorField from 'components/form/EditorField'
// **assets
import avatarGroup from 'assets/images/avatars/avatar-blank.png'

//** query
import {UserQuery} from '@services/user'
import {uploadMedia} from '@services/ultils'
import {EventMutation, EventQuery} from '@services/event'
import RadioField from 'components/form/RadioField'
import TextareaField from 'components/form/TextareaField'
import ModalCropImage from './ModalCropImage'

const image =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'

const OptionComponent = ({data, ...props}) => {
  return (
    <components.Option {...props}>
      <Avatar img={data.avatar || avatarGroup} className="mr-50" />
      {data.label}
    </components.Option>
  )
}

const ModalFormEvent = ({modal, toggleModal, detailEvent = null}) => {
  const [avatar, setAvatar] = useState(null)
  const [modalCrop, setModalCrop] = useState('')
  // const [image, setImage] = useState(null)

  const [initValues, setInitValues] = useState({
    venue: '',
    from_date: null,
    to_date: null,
    event_type: null,
    name: '',
    description: '',
    cover: null,
    tagline: [],
    co_host: [],
    privacy: null,
    formality: null,
    short_description: '',
  })

  const [selectOptions, setSelectOptions] = useState({
    formalites: [],
    privacies: [],
    optionFormality: null,
  })

  const {data: privaciesEvent} = EventQuery.useListPrivacyEvent({nolimit: true})
  const {data: formalitiesEvent} = EventQuery.useListFormalityEvent({
    nolimit: true,
  })

  useEffect(() => {
    if (formalitiesEvent) {
      setSelectOptions(state => ({
        ...state,
        formalites: formalitiesEvent.data.map(it => ({
          ...it,
          value: it.id,
          label: it.name,
          checked: it.code === 'OFFLINE',
        })),
      }))
    }
  }, [formalitiesEvent])

  useEffect(() => {
    if (detailEvent) {
      const {
        name,
        description,
        from_date,
        to_date,
        event_type_info,
        tagline,
        co_host_info,
        privacy_info,
        formality_info,
        venue,
        short_description,
      } = detailEvent
      setInitValues(initValues => ({
        name: name,
        description: description,
        from_date: [from_date],
        to_date: [to_date],
        event_type: {
          ...event_type_info,
          value: event_type_info.id,
          label: event_type_info.name,
        },
        venue: venue,
        tagline: tagline
          ? JSON.parse(tagline).map(it => ({
              label: it,
              value: it,
              __isNew__: true,
            }))
          : [],
        co_host:
          co_host_info?.map(it => ({
            ...it,
            value: it.user_id,
            label: it.full_name,
          })) || [],
        privacy: privacy_info.id,
        formality: {
          ...formality_info,
          value: formality_info.id,
          label: formality_info.name,
        },
        short_description: short_description,
      }))
      // setAvatar(detailEvent.cover)
      setSelectOptions(state => ({
        ...state,
        formalites: formalitiesEvent.data.map(it => ({
          ...it,
          value: it.id,
          label: it.name,
          checked: it.code === formality_info.code,
        })),
        optionFormality: formality_info,
      }))
    }
  }, [detailEvent])

  useEffect(() => {
    if (privaciesEvent) {
      setSelectOptions(initValues => ({
        ...initValues,
        privacies: privaciesEvent.data.map(it => ({
          ...it,
          value: it.id,
          label: it.name,
          checked: detailEvent && it.id === detailEvent.privacy_info?.id,
        })),
      }))
    }
  }, [detailEvent, privaciesEvent])

  const formSchema = Yup.object().shape({
    from_date: Yup.date().required('Yêu cầu nhập ngày giờ bắt đầu.').nullable(),
    to_date: Yup.date().required('Yêu cầu nhập ngày giờ kết thúc.').nullable(),
    name: Yup.string().required('Yêu cầu nhập tên sự kiện.'),
    description: Yup.string().required('Yêu cầu nhập mô tả.'),
    short_description: Yup.string()
      .required('Yêu cầu nhập mô tả ngắn.')
      .nullable(),
    event_type: Yup.object().required('Yêu cầu chọn loại sự kiện.').nullable(),
    cover:
      avatar || detailEvent?.cover
        ? ''
        : Yup.mixed().required('Yêu cầu chọn ảnh bìa sự kiện.').nullable(),
    venue:
      selectOptions.optionFormality?.code !== 'ONLINE'
        ? Yup.string().required('Yêu cầu nhập địa điểm diễn ra sự kiện.')
        : '',
    privacy: Yup.number()
      .required('Yêu cầu chọn quyền riêng tư của sự kiện.')
      .nullable(),
  })

  // ** query
  const {data: users} = UserQuery.useGetListAllUserSys()
  const owner = getUserData()
  const {mutate: createEvent, isLoading: loadingCreate} =
    EventMutation.useCreateEvent()
  const {mutate: updateEvent, isLoading: loadingUpdate} =
    EventMutation.useUpdateEvent()
  const {data: typesEvent} = EventQuery.useListTypeEvent({nolimit: true})

  // console.log('detailEvent', detailEvent)
  // const onChange = (e, setFieldValue) => {
  //   const reader = new FileReader(),
  //     files = e.target.files
  //   reader.onload = function () {
  //     setAvatar(reader.result)
  //   }
  //   reader.readAsDataURL(files[0])
  //   setFieldValue('cover', files[0])
  // }
  //** Custom close btn
  const CloseBtn = (
    <X className="cursor-pointer" size={20} onClick={toggleModal} />
  )

  return (
    <div>
      <Modal
        isOpen={modal}
        toggle={toggleModal}
        className="modal-dialog-centered modal-xl"
      >
        <Formik
          initialValues={initValues}
          validationSchema={formSchema}
          enableReinitialize={true}
          onSubmit={async values => {
            const dataSubmit = {
              short_description: values.short_description,
              name: values.name,
              description: values.description,
              event_type: values.event_type.value,
              from_date: values.from_date ? values.from_date[0] : null,
              to_date: values.to_date ? values.to_date[0] : null,
              owner: owner?.uid || null,
              privacy: +values.privacy,
              tagline:
                values.tagline && values.tagline.length > 0
                  ? JSON.stringify(values.tagline.map(it => it.value))
                  : null,
              formality:
                values.formality?.id ||
                formalitiesEvent?.data.find(it => it.code === 'OFFLINE')?.id,
            }

            if (values.formality?.code !== 'ONLINE') {
              dataSubmit.venue = values.venue
              dataSubmit.co_host = values.co_host.map(it => it.user_id)
            } else {
              dataSubmit.venue = ''
              dataSubmit.co_host = []
            }

            if (avatar) dataSubmit.cover = await uploadMedia(avatar)

            if (detailEvent) updateEvent({dataSubmit, id: detailEvent.id})
            else createEvent(dataSubmit)

            setAvatar(null)
            toggleModal()
          }}
        >
          {({values, setFieldValue, setFieldTouched}) => (
            <Form>
              <ModalHeader close={CloseBtn} toggle={toggleModal}>
                Tạo Sự Kiện
              </ModalHeader>
              <ModalBody>
                <Row className="mx-0 px-0">
                  <Col xl="8" md="12" className="border-right">
                    <Row>
                      <Col xl="12" sm="12">
                        <TextField
                          label="Tên sự kiện"
                          isRequired={true}
                          name="name"
                        />
                      </Col>
                      <Col xl="12" sm="12">
                        <FormGroup>
                          <Label className="font-weight-bold text-dark">
                            Tải lên ảnh bìa{' '}
                            <sup style={{color: '#FF0000'}}>*</sup>
                          </Label>
                          <div className="row">
                            {(!!avatar || !!detailEvent?.cover) && (
                              <Col lg="6">
                                <div className="mb-2" style={{height: 130}}>
                                  <Media
                                    object
                                    className="rounded mr-50"
                                    src={
                                      (avatar && URL.createObjectURL(avatar)) ||
                                      detailEvent?.cover
                                    }
                                    alt="Generic placeholder image"
                                    height="100%"
                                    width="100%"
                                  />
                                </div>
                              </Col>
                            )}

                            <Col lg="12">
                              <Button.Ripple
                                tag={Label}
                                className="mr-75 mb-0"
                                size="sm"
                                color="primary"
                                onClick={() => setModalCrop('cover')}
                              >
                                Tải ảnh lên
                              </Button.Ripple>
                              <Button.Ripple
                                onClick={() => {
                                  setAvatar(null)
                                }}
                                color="danger"
                                size="sm"
                                outline
                              >
                                Xóa ảnh
                              </Button.Ripple>
                              <p className="mb-0">
                                Allowed JPG, GIF or PNG. Max size of 800kB
                              </p>
                              <ErrorMessage
                                name="cover"
                                component="div"
                                className="field-error text-danger"
                              />
                            </Col>
                          </div>
                        </FormGroup>
                      </Col>

                      <Col xl="12" sm="12">
                        <TextareaField
                          label="Mô tả ngắn"
                          isRequired={true}
                          name="short_description"
                        />
                      </Col>
                      <Col xl="12" sm="12">
                        <EditorField
                          setFieldValue={setFieldValue}
                          name="description"
                          label="Nội dung"
                          isRequired={true}
                          setFieldTouched={setFieldTouched}
                          data={values.description}
                          height={200}
                        />
                      </Col>
                      <Col xl="6" sm="12">
                        <DatePickerField
                          name="from_date"
                          label="Ngày bắt đầu"
                          data-enable-time
                          isRequired
                          mode="single"
                        />
                      </Col>
                      <Col xl="6" sm="12">
                        <DatePickerField
                          name="to_date"
                          label="Ngày kết thúc"
                          isRequired
                          data-enable-time
                          mode="single"
                        />
                      </Col>
                      <Col xl="12" sm="12">
                        <RadioField
                          name="privacy"
                          label="Thiết lập quyền riêng tư"
                          inline
                          isRequired
                          options={selectOptions.privacies}

                          // value={it.id}
                          // onChange={e => {
                          //   setFieldValue('privacy', e.target.value)
                          // }}
                        />
                      </Col>
                      <Col xl="6" sm="12">
                        <RadioField
                          name="formality"
                          label="Hình thức sự kiện"
                          inline
                          isRequired
                          options={selectOptions.formalites}
                          onChange={(name, value) => {
                            const option = selectOptions.formalites?.find(
                              it => it.id === value,
                            )
                            if (option) {
                              setFieldValue('formality', option)
                              setSelectOptions(state => ({
                                ...state,
                                optionFormality: option,
                              }))
                            }
                          }}
                        />
                      </Col>
                      <Col md="6">
                        <SelectField
                          name="event_type"
                          label="Loại sự kiện"
                          isSearchable
                          isRequired
                          options={typesEvent?.data.map(it => ({
                            ...it,
                            value: it.id,
                            label: it.name,
                          }))}
                        />
                      </Col>
                      {values.formality?.code !== 'ONLINE' && (
                        <Col xl="12" sm="12">
                          <TextField
                            label="Địa điểm tổ chức sự kiện"
                            isRequired={true}
                            name="venue"
                          />
                        </Col>
                      )}
                      <Col xl="12">
                        <FormGroup>
                          <Label
                            for="title"
                            className="font-weight-bolder text-dark"
                          >
                            Tagline
                          </Label>
                          <CreatableSelect
                            isClearable
                            isMulti
                            name="tagline"
                            onChange={newValue => {
                              setFieldValue('tagline', newValue)
                            }}
                            value={values.tagline}
                          />
                          {/* <ErrorMessage
                          name="tagline"
                          component="div"
                          className="field-error text-danger"
                        /> */}
                        </FormGroup>
                      </Col>
                      {values.formality?.code !== 'ONLINE' && (
                        <>
                          <Col sm="12">
                            <FormGroup>
                              <Label
                                for="title"
                                className="font-weight-bolder text-dark"
                              >
                                Thêm người đồng tổ chức
                              </Label>
                              <Select
                                options={users?.data.map(it => ({
                                  ...it,
                                  value: it.user_id,
                                  label: it.profile?.name,
                                }))}
                                theme={selectThemeColors}
                                className="react-select"
                                classNamePrefix="select"
                                isMulti
                                components={{
                                  Option: OptionComponent,
                                }}
                                onChange={option => {
                                  setFieldValue('co_host', option)
                                }}
                                value={values.co_host}
                              />
                            </FormGroup>
                          </Col>
                          <Col xl="12" className="d-flex flex-wrap">
                            {values.co_host?.map(it => (
                              <div
                                key={it.user_id}
                                className="d-flex justify-content-start align-items-center p-1 rounded mb-2 mr-2 bg-light"
                              >
                                <Avatar
                                  className="mr-2"
                                  img={it.avatar || avatarGroup}
                                  imgHeight="30"
                                  imgWidth="30"
                                />
                                <div className="profile-user-info d-flex align-items-center">
                                  <h6 className="mb-0"> {it.label}</h6>
                                </div>
                                <X
                                  className="text-danger ml-3 cursor-pointer"
                                  size="20"
                                  onClick={() => {
                                    setFieldValue(
                                      'co_host',
                                      values.co_host?.filter(
                                        host => host.user_id !== it.user_id,
                                      ),
                                    )
                                  }}
                                />
                              </div>
                            ))}
                          </Col>
                        </>
                      )}
                    </Row>
                  </Col>
                  <Col xl="4" md="12">
                    <h5 className="text-center font-weight-bold text-primary mb-2">
                      Xem trước
                    </h5>
                    <Card className="card-custom  border">
                      {/*begin::Body*/}
                      <CardBody>
                        {values.from_date && (
                          <div className="d-flex align-items-center">
                            {/*begin::Info*/}
                            <div className="d-flex flex-column mr-auto mb-1">
                              {/*begin: Title*/}
                              <div className="d-flex flex-column mr-auto">
                                {/* <span className="text-muted font-weight-bold">
                              HÔM NAY
                              <Badge className="ml-2" color="light-danger">
                                Sắp diễn ra
                              </Badge>
                            </span> */}
                                <div className="text-dark   font-size-h6 font-weight-bolder mb-1">
                                  {moment(values.from_date[0]).format('LLLL')}
                                </div>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Info*/}
                          </div>
                        )}

                        {/*begin::Info*/}
                        <div className="d-flex align-items-start">
                          {/*begin::Pic*/}
                          <Avatar
                            img={
                              avatar
                                ? URL.createObjectURL(avatar)
                                : detailEvent
                                ? detailEvent.cover
                                : image
                            }
                            imgHeight="50"
                            imgWidth="70"
                            imgClassName="rounded"
                            onError={e => {
                              e.target.onerror = null
                              e.target.src = image
                            }}
                          />

                          {/*end::Pic*/}
                          {/*begin::Info*/}
                          <div className="d-flex flex-column mr-auto ml-1">
                            {/*begin: Title*/}
                            <div className="d-flex flex-column mr-auto">
                              <Link
                                to="#"
                                className="text-dark text-hover-primary font-weight-bolder"
                                style={{
                                  fontSize: '1.35rem',
                                  marginBottom: '5px',
                                }}
                              >
                                {values.name || 'Tên sự kiện'}
                              </Link>
                              <span className="text-muted font-weight-bold">
                                {values.formality?.code === 'ONLINE'
                                  ? 'Online'
                                  : values.venue
                                  ? values.venue
                                  : 'Địa điểm tổ chức'}
                              </span>
                            </div>
                            {/*end::Title*/}
                          </div>
                          {/*end::Info*/}
                        </div>
                        {/*end::Info*/}
                        {/*begin::Description*/}
                        <div className="mb-3 mt-2 font-weight-bold">
                          {values.short_description
                            ? subStr(values.short_description, 200)
                            : 'Mô tả ngắn'}
                        </div>

                        {/*end::Description*/}
                        {/*begin::Data*/}
                        {values.from_date && (
                          <div className=" mb-3">
                            <div className="d-flex align-items-center mr-3">
                              <span className="font-weight-bold mr-2">
                                Bắt đầu
                              </span>
                              <Badge color="light-primary">
                                {moment(values.from_date[0]).format('lll')}
                              </Badge>
                            </div>
                            {values.to_date && (
                              <div className="d-flex align-items-center mt-1">
                                <span className="font-weight-bold mr-2">
                                  Kết thúc
                                </span>
                                <Badge color="light-danger">
                                  {moment(values.to_date[0]).format('lll')}
                                </Badge>
                              </div>
                            )}
                          </div>
                        )}

                        {/*end::Data*/}
                      </CardBody>
                      {/*end::Body*/}
                    </Card>
                  </Col>
                </Row>
              </ModalBody>
              <ModalFooter>
                {detailEvent ? (
                  <Button color="primary" type="submit">
                    {loadingUpdate ? (
                      <>
                        <Spinner type="grow" size="sm" className="mr-1" /> Đang
                        cập nhật ...
                      </>
                    ) : (
                      'Cập nhật sự kiện'
                    )}
                  </Button>
                ) : (
                  <Button color="primary" type="submit">
                    {loadingCreate ? (
                      <>
                        <Spinner type="grow" size="sm" className="mr-1" /> Đang
                        tạo ...
                      </>
                    ) : (
                      'Tạo sự kiện'
                    )}
                  </Button>
                )}

                <Button
                  color="primary"
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

      <ModalCropImage
        open={modalCrop}
        toggle={() => setModalCrop('')}
        onSave={file => {
          setAvatar(file)
          setModalCrop('')
        }}
      />
    </div>
  )
}

export default ModalFormEvent
