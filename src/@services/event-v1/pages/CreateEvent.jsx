import React, {useEffect} from 'react'
import {Card, CardBody, Row, Col, Label, FormGroup, Input} from 'reactstrap'
import TitleWithLine from '../components/TitleWithLine'
import Require from '../components/Require'
import {Field, Formik, Form} from 'formik'
import * as Yup from 'yup'
import Flatpickr from 'react-flatpickr'
import {useState} from 'react'
import CreatableSelect from 'react-select/creatable'
import Select, {components} from 'react-select'
import Avatar from '@core/components/avatar'
import '@core/scss/react/libs/flatpickr/flatpickr.scss'
import {getUserData, selectThemeColors, subStr} from 'utility/Utils'
import RadioField from 'components/form/RadioField'
import {CustomInput} from 'reactstrap'
import RadioFieldCustom from 'components/form/RadioFieldCustom'
import EditorFieldCustom from 'components/form/EditorFieldCustom'
import MyDropzone from '@core/components/dropzone/MyDropzone'
const formSchema = Yup.object().shape({
  name: Yup.string().required('Tên autojob không được để trống!'),
  description: Yup.string().required('Mô tả không được để trống!'),
  type_action: Yup.object().required('Bạn phải chọn Nguồn dữ liệu!').nullable(),
})
const colorOptions = [
  {value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true},
  {value: 'blue', label: 'Blue', color: '#0052CC', isFixed: true},
  {value: 'purple', label: 'Purple', color: '#5243AA', isFixed: true},
  {value: 'red', label: 'Red', color: '#FF5630', isFixed: false},
  {value: 'orange', label: 'Orange', color: '#FF8B00', isFixed: false},
  {value: 'yellow', label: 'Yellow', color: '#FFC400', isFixed: false},
]
const CreateEvent = () => {
  const [picker, setPicker] = useState(new Date())
  const [selectOptions, setSelectOptions] = useState({
    formalites: [],
    privacies: [],
    optionFormality: null,
  })

  return (
    <>
      <Card className="p-3">
        <CardBody className="p-0">
          <TitleWithLine
            className="title-24-16 mb-2 text-capitalize"
            color="#D1ECFD"
            text="Tạo Sự Kiện"
          />
          <Formik
            initialValues={{}}
            validationSchema={formSchema}
            onSubmit={values => {}}
          >
            {() => (
              <Form>
                <Row>
                  <Col className="mb-2" md={6} sm={12}>
                    <Label
                      for="challenge-name"
                      className="d-flex align-items-center mb-50"
                    >
                      <h5 className="mb-0">
                        <span className="text-capitalize">Tên sự kiện</span>
                      </h5>
                      <Require />
                    </Label>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Nhập tên sự kiện"
                      className="form-control"
                      onChange={() => {}}
                    />
                  </Col>
                  <Col md={6} sm={12}>
                    <Label
                      for="challenge-name"
                      className="d-flex align-items-center mb-50"
                    >
                      <h5 className="mb-0">
                        <span className="text-capitalize">Tagline</span>
                      </h5>
                      <Require />
                    </Label>
                    <CreatableSelect
                      isClearable
                      isMulti
                      name="tagline"
                      onChange={newValue => {
                        //   setFieldValue('tagline', newValue)
                      }}
                      // value={values.tagline}
                    />
                    {/* <ErrorMessage
                          name="tagline"
                          component="div"
                          className="field-error text-danger"
                        /> */}
                  </Col>

                  <Col className="mb-2" md={6} sm={12}>
                    <Label
                      for="challenge-name"
                      className="d-flex align-items-center mb-50"
                    >
                      <h5 className="mb-0">
                        <span className="text-capitalize">Ngày bắt đầu</span>
                      </h5>
                      <Require />
                    </Label>
                    <Flatpickr
                      className="form-control"
                      value={picker}
                      onChange={date => setPicker(date)}
                      id="default-picker"
                    />
                  </Col>
                  <Col className="mb-2" md={6} sm={12}>
                    <Label
                      for="challenge-name"
                      className="d-flex align-items-center mb-50"
                    >
                      <h5 className="mb-0">
                        <span className="text-capitalize">Ngày kết thúc</span>
                      </h5>
                      <Require />
                    </Label>
                    <Flatpickr
                      className="form-control"
                      value={picker}
                      onChange={date => setPicker(date)}
                      //   id="default-picker"
                    />
                  </Col>

                  <Col md="6" sm="12">
                    <div className="mt-2">
                      <RadioFieldCustom
                        name="privacy"
                        label="Thiết lập quyền riêng tư"
                        inline
                        isRequired
                        options={[
                          {
                            value: 'Public',
                            label: 'Public',
                            color: 'danger',
                          },
                          {
                            value: 'Private',
                            label: 'Private',
                          },
                        ]}
                      />
                    </div>
                  </Col>
                  <Col md="6" sm="12">
                    <div className="mt-2">
                      <RadioFieldCustom
                        name="privacy"
                        label="Hình thức sự kiện"
                        inline
                        isRequired
                        options={[
                          {
                            value: 'Online',
                            label: 'Online',
                            color: 'danger',
                          },
                          {
                            value: 'Offline',
                            label: 'Offline',
                          },
                        ]}
                      />
                    </div>
                  </Col>
                  <Col className="mb-2" md={6} sm={12}>
                    <Label
                      for="challenge-name"
                      className="d-flex align-items-center mb-50"
                    >
                      <h5 className="mb-0">
                        <span className="text-capitalize">
                          Địa điểm tổ chức
                        </span>
                      </h5>
                      <Require />
                    </Label>
                    <Field
                      type="text"
                      name="place"
                      placeholder="Nhập địa điểm tổ chức"
                      className="form-control"
                      onChange={() => {}}
                    />
                  </Col>
                  <Col md={6} sm={12}>
                    <Label
                      for="challenge-name"
                      className="d-flex align-items-center mb-50"
                    >
                      <h5 className="mb-0">
                        <span className="text-capitalize">
                          Thêm người đồng tổ chức
                        </span>
                      </h5>
                      <Require />
                    </Label>
                    <Select
                      isClearable={false}
                      theme={selectThemeColors}
                      //   defaultValue={[colorOptions[2], colorOptions[3]]}
                      isMulti
                      name="colors"
                      options={colorOptions}
                      className="react-select"
                      classNamePrefix="select"
                    />
                  </Col>
                  <Col xl="12" sm="12">
                    <EditorFieldCustom
                      // setFieldValue={setFieldValue}
                      name="description"
                      label="Nội dung"
                      isRequired={true}
                      // setFieldTouched={setFieldTouched}
                      // data={values.description}
                      height={200}
                    />
                  </Col>
                  <Col xl="12" sm="12">
                    <Label
                      for="challenge-name"
                      className="d-flex align-items-center mb-50"
                    >
                      <h5 className="mb-0">
                        <span className="text-capitalize">Ảnh bìa</span>
                      </h5>
                      <Require />
                    </Label>
                    <MyDropzone
                      name="media"
                      onChange={(name, value) => {
                        // setValue('media', value.files)
                        // setValue('media_url', value.links)
                      }}
                      // linksMedia={getValues('media_url')}
                    />
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </CardBody>
      </Card>
    </>
  )
}

export default CreateEvent
