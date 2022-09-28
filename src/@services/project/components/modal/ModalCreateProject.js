import {Formik, Form, ErrorMessage} from 'formik'
import TextField from 'components/form/TextField'
import * as Yup from 'yup'
import React, {useState} from 'react'
import {Save, X} from 'react-feather'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  FormGroup,
  Label,
  Media,
} from 'reactstrap'

import {uploadMedia} from '@services/ultils'
// ** component
import TextareaField from 'components/form/TextareaField'
import RadioField from 'components/form/RadioField'
import ModalCropImage from 'components/crop-image/ModalCropImage'
//image
import PerfectScrollbar from 'react-perfect-scrollbar'
// ** query
import {DataProjectQuery, DataProjectMutation} from '@services/project'
//scss
import '../../page/Project.style.scss'
import SelectField from 'components/form/SelectField'

const ModalCreateProject = ({setModalCreateProject, modalCreateProject}) => {
  const [avatar, setAvatar] = useState(null)
  const [proType, setProType] = useState('')
  const [modalCrop, setModalCrop] = useState('')
  const [init, setInit] = useState({
    partner_name_or_id: '',
    pro_name: '',
    pro_avatar: '',
    pro_short_description: '',
    pro_description: '',
    pro_price_per_data: null,
    amount: null,
    pro_landingpage_link: '',
    created_by: '',
    pro_project_type: null,
    pro_project_kind: null,
    avatar: null,
  })

  // ** query
  const {data: listType} = DataProjectQuery.useListProjectType()
  const {data: listKind} = DataProjectQuery.useListProjectKind()
  const {mutate: createProject} = DataProjectMutation.useCreateProject()
  const formSchema = Yup.object().shape({
    pro_name: Yup.string().required('Vui lòng không được bỏ trống'),
    pro_price_per_data: Yup.number()
      .required('Vui lòng không được bỏ trống')
      .nullable(),
    amount: Yup.number().required('Vui lòng không được bỏ trống').nullable(),
    partner_name_or_id:
      proType === 'PARTNER'
        ? Yup.string().required('Vui lòng không được bỏ trống').nullable()
        : '',
    pro_project_type: Yup.object()
      .required('Vui lòng chọn loại dự án')
      .nullable(),
    pro_project_kind: Yup.object()
      .required('Vui lòng chọn kiểu dự án')
      .nullable(),
    avatar: avatar
      ? ''
      : Yup.mixed().required('Vui lòng tải lên ảnh bìa dự án').nullable(),
    pro_landingpage_link: Yup.string().url('Link chưa đúng định dạng'),
  })

  //function
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => setModalCreateProject(!modalCreateProject)}
    />
  )

  return (
    <div>
      <Modal
        // scrollable
        isOpen={modalCreateProject}
        toggle={() => setModalCreateProject(!modalCreateProject)}
        className="modal-dialog-centered modal-lg"
      >
        <ModalHeader
          toggle={() => setModalCreateProject(!modalCreateProject)}
          close={CloseBtn}
        >
          Tạo dự án
        </ModalHeader>
        <ModalBody>
          <PerfectScrollbar>
            <Formik
              initialValues={init}
              validationSchema={formSchema}
              enableReinitialize={true}
              onSubmit={async values => {
                const dataSubmit = {
                  ...values,
                  pro_project_type: values.pro_project_type.value,
                  pro_project_kind: values.pro_project_kind.value,
                }
                if (values.pro_project_type.code !== 'PARTNER') {
                  dataSubmit.partner_name_or_id = ''
                }
                if (avatar) {
                  const cover = await uploadMedia(avatar)
                  dataSubmit.pro_avatar = cover || null
                }
                // CREATE
                createProject(dataSubmit)
              }}
            >
              {({values, setFieldValue}) => (
                <Form className="p-2">
                  <Row>
                    <Col lg="12">
                      <TextField
                        label="Tên dự án"
                        placeholder="Tên dự án"
                        isRequired={true}
                        name="pro_name"
                        type="text"
                      />
                    </Col>
                    <Col xl="12" sm="12">
                      <FormGroup>
                        <Label className="font-weight-bold text-dark">
                          Tải lên ảnh bìa{' '}
                          <sup style={{color: '#FF0000'}}>*</sup>
                        </Label>
                        <div className="row">
                          {!!avatar && (
                            <Col lg="6">
                              <div className="mb-2" style={{height: 130}}>
                                <Media
                                  object
                                  className="rounded mr-50"
                                  src={avatar && URL.createObjectURL(avatar)}
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
                              name="avatar"
                              component="div"
                              className="field-error text-danger"
                            />
                          </Col>
                        </div>
                      </FormGroup>
                    </Col>
                    <Col lg={6}>
                      <SelectField
                        name="pro_project_kind"
                        label="Kiểu dự án"
                        isSearchable
                        options={listKind?.data.map(it => ({
                          ...it,
                          value: it.id,
                          label: it.name,
                        }))}
                      />
                    </Col>
                    <Col lg={6}>
                      <SelectField
                        name="pro_project_type"
                        label="Loại dự án"
                        isSearchable
                        options={listType?.data.map(it => ({
                          ...it,
                          value: it.id,
                          label: it.name,
                        }))}
                        onChange={(name, options) => {
                          setProType(options.code)
                          setFieldValue('pro_project_type', options)
                        }}
                      />
                    </Col>

                    {values.pro_project_type?.code === 'PARTNER' && (
                      <Col lg={12}>
                        <TextField
                          label="Nhập tên hoặc ID đối tác"
                          placeholder="Nhập tên hoặc ID đối tác"
                          isRequired
                          name="partner_name_or_id"
                          type="text"
                        />
                      </Col>
                    )}
                    <Col lg={6}>
                      <TextField
                        label="Số liên hệ của gói"
                        placeholder="vd: 100 liên hệ"
                        isRequired
                        name="amount"
                        type="number"
                      />
                    </Col>
                    <Col lg={6}>
                      <TextField
                        label="Giá bán mỗi liên hệ"
                        placeholder="vd: 1 bizxu"
                        isRequired
                        name="pro_price_per_data"
                        type="number"
                      />
                    </Col>
                    <Col lg="12">
                      <TextareaField
                        maxLength={1000}
                        label=" Nội dung mô tả dự án"
                        name="pro_short_description"
                        // isRequired
                        placeholder="Mô tả dự án của bạn tại đây"
                        minRows="4"
                      />
                    </Col>
                    <Col lg={12}>
                      <TextField
                        label="Link landingpage"
                        placeholder="Nhập link landingpage của dự án"
                        name="pro_landingpage_link"
                        type="text"
                      />
                    </Col>
                  </Row>

                  <FormGroup className="mb-0 mt-5 w-100 text-center">
                    <Button.Ripple
                      color="primary"
                      type="submit"
                      className="mr-2"
                      // onClick={handleSuccess}
                    >
                      <Save size={15} /> Tạo dự án
                    </Button.Ripple>
                    <Button.Ripple
                      color="secondary"
                      outline
                      onClick={() => setModalCreateProject(!modalCreateProject)}
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

export default ModalCreateProject
