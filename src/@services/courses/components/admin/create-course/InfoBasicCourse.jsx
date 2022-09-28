import React from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import {Button, Card, CardBody, Col, FormGroup, Row} from 'reactstrap'
import {ArrowLeft, ArrowRight} from 'react-feather'

// ** component
import SelectField from 'components/form/SelectField'
import TextField from 'components/form/TextField'
import TextareaField from 'components/form/TextareaField'
import AvatarUploadField from 'components/form/AvatarUploadField'
import UploadImageField from 'components/form/UploadImageField'

const formSchema = Yup.object().shape({
  title: Yup.string().required('Bạn phải nhập tên khóa học.'),
  description: Yup.string().required('Bạn phải nhập mô tả khóa học.'),
  category: Yup.object().required('Bạn phải chọn danh mục.').nullable(),
  topic: Yup.object().required('Bạn phải chọn chủ đề.').nullable(),
  level: Yup.object().required('Bạn phải chọn độ khó.').nullable(),
  languages: Yup.array()
    .min(1, 'Bạn phải chọn ngôn ngữ.')
    .required('Bạn phải chọn ngôn ngữ.')
    .nullable(),
  hours: Yup.string().required('Bạn phải nhập số giờ học.'),
  student: Yup.string().required('Bạn phải nhập số học viên tối đa.'),

  participants: Yup.array()
    .min(1, 'Bạn phải chọn đối tượng tham gia.')
    .required('Bạn phải chọn đối tượng tham gia.')
    .nullable(),
  skills: Yup.array()
    .min(1, 'Bạn phải chọn kĩ năng đạt được.')
    .required('Bạn phải chọn kĩ năng đạt được.')
    .nullable(),
})

const InfoBasicCourse = ({stepper}) => {
  return (
    <div>
      <Formik
        initialValues={{
          title: '',
          description: '',
          status: '',
          category: null,
          topic: null,
          level: null,
          languages: null,
          hours: '',
          student: '',
          thumb: '',
          background: '',
          participants: null,
          benefits: null,
          skills: null,
          outcomes: null,
        }}
        // validationSchema={formSchema}
        onSubmit={values => {
          stepper.next()
        }}
      >
        {({setFieldValue}) => (
          <Form>
            <Row>
              <Col xl="6">
                <Card className="box-shadow-none">
                  <CardBody>
                    <FormGroup>
                      <label className="font-weight-bold text-dark">
                        Trạng thái <sup style={{color: '#FF0000'}}>*</sup>
                      </label>
                      <div className="d-flex align-items-center justify-content-center">
                        <span className="switch">
                          <label>
                            <input
                              type="checkbox"
                              // checked="checked"
                              name="status"
                              onChange={e =>
                                setFieldValue('status', e.target.checked)
                              }
                            />
                            <span></span>
                          </label>
                        </span>
                        <div>Không hoạt động </div>
                      </div>
                    </FormGroup>

                    <Row>
                      <Col lg="6">
                        <SelectField
                          name="category"
                          label="Danh mục"
                          isRequired
                          options={[
                            {
                              label: 'Option 1',
                              value: 'value1',
                            },
                            {
                              label: 'Option 2',
                              value: 'value2',
                            },
                          ]}
                        />
                      </Col>
                      <Col lg="6">
                        <SelectField
                          name="topic"
                          label="Chủ đề"
                          isRequired
                          options={[
                            {
                              label: 'Option 1',
                              value: 'value1',
                            },
                            {
                              label: 'Option 2',
                              value: 'value2',
                            },
                          ]}
                        />
                      </Col>
                      <Col lg="6">
                        <SelectField
                          name="level"
                          label="Độ khó"
                          isRequired
                          options={[
                            {
                              label: 'Option 1',
                              value: 'value1',
                            },
                            {
                              label: 'Option 2',
                              value: 'value2',
                            },
                          ]}
                        />
                      </Col>
                      <Col lg="6">
                        <SelectField
                          name="languages"
                          label="Ngôn ngữ"
                          isRequired
                          isMulti
                          options={[
                            {
                              label: 'Tiếng Việt',
                              value: 'vi',
                            },
                            {
                              label: 'Tiếng Anh',
                              value: 'en',
                            },
                          ]}
                        />
                      </Col>
                      <Col lg="6">
                        <TextField
                          type="number"
                          name="hours"
                          label="Số giờ học"
                          placeholder="Nhập số giờ học"
                          isRequired
                        />
                      </Col>
                      <Col lg="6">
                        <TextField
                          type="number"
                          name="student"
                          label="Số học viên tối đa"
                          placeholder="Nhập số học viên"
                          isRequired
                        />
                      </Col>
                    </Row>
                    <hr />
                    <TextField
                      type="text"
                      name="title"
                      label="Tên khóa học"
                      placeholder="Nhập tên khóa học"
                      isRequired
                    />
                    <TextareaField
                      maxLength={500}
                      isRequired
                      minRows={4}
                      name="description"
                      label="Mô tả khóa học"
                      placeholder="Nhập mô tả khóa học"
                    />
                  </CardBody>
                </Card>
              </Col>
              <Col xl="6">
                <AvatarUploadField
                  isRequired
                  name="thumb"
                  label="Tải lên ảnh Thubnail"
                />
                <UploadImageField
                  name="background"
                  label="Tải lên ảnh bìa"
                  height="120px"
                  onChange={(name, value) => setFieldValue(name, value)}
                />

                <SelectField
                  name="participants"
                  label="Khóa học này dành cho ai? (Participants)"
                  isMulti
                  isRequired
                  options={[
                    {
                      label: 'Giáo viên',
                      value: 'value1',
                    },
                    {
                      label: 'Học sinh',
                      value: 'value2',
                    },
                  ]}
                />
                <SelectField
                  name="skills"
                  label="Kĩ năng đạt được (Skills)"
                  isMulti
                  isRequired
                  options={[
                    {
                      label: 'Tự tin giao tiếp',
                      value: 'value1',
                    },
                    {
                      label: 'Làm việc nhóm',
                      value: 'value2',
                    },
                    {
                      label: 'Giải quyết vấn đề',
                      value: 'value2',
                    },
                  ]}
                />
                <SelectField
                  name="benefits"
                  label="Lợi ích sau khóa học (Benefits)"
                  isMulti
                  isRequired
                  options={[
                    {
                      label: 'Option 1',
                      value: 'value1',
                    },
                    {
                      label: 'Option 2',
                      value: 'value2',
                    },
                  ]}
                />
                <SelectField
                  name="outcomes"
                  label="Sau khóa học tôi đạt được gì (Outcomes)"
                  isMulti
                  isRequired
                  options={[
                    {
                      label: 'Option 1',
                      value: 'value1',
                    },
                    {
                      label: 'Option 2',
                      value: 'value2',
                    },
                  ]}
                />
              </Col>
            </Row>
            <hr />
            <div className="d-flex justify-content-center">
              <Button.Ripple
                color="secondary"
                className="btn-prev"
                outline
                type="button"
                disabled
              >
                <ArrowLeft
                  size={14}
                  className="align-middle mr-sm-3 mr-0"
                ></ArrowLeft>
                <span className="align-middle d-sm-inline-block d-none">
                  Quay lại
                </span>
              </Button.Ripple>
              <Button.Ripple
                type="submit"
                color="primary"
                className="btn-next ml-3"
              >
                <span className="align-middle d-sm-inline-block d-none">
                  Tiếp
                </span>
                <ArrowRight
                  size={14}
                  className="align-middle ml-sm-3 ml-0"
                ></ArrowRight>
              </Button.Ripple>

              <Button.Ripple type="button" color="danger" className="ml-2">
                <span className="align-middle d-sm-inline-block d-none">
                  Hủy
                </span>
              </Button.Ripple>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default InfoBasicCourse
