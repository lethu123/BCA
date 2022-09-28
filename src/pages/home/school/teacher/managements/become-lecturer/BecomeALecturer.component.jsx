import React, {useEffect, useState} from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {
  Label,
  FormGroup,
  Button,
  Row,
  Col,
  Alert,
  CustomInput,
} from 'reactstrap'
import {Loader, Shield} from 'react-feather'
import {useDispatch, useSelector} from 'react-redux'
import {
  selectInfoLecturer,
  selectMajors,
} from 'redux/reselects/hschools/course.reselect'
import Select from 'react-select'
import {selectThemeColors} from 'utility/Utils'

//** Component
import EditorField from 'home/common/formField/EditorField'
import UploadFile from 'home/common/upload/MultipleUploadFile'
import AppCollapse from '@core/components/app-collapse'

// ** action
import {becomeALecturerAtion} from 'redux/actions/hschools/lecturerAction'
import {selectProfileData} from 'redux/reselects/users/suggestions/suggestion.reselect'

// ** Assets

const formSchema = Yup.object().shape({
  title: Yup.string().required('Title is required!'),
  description: Yup.string().required('Description id required'),
  email: Yup.string().email('Invalid email'),
  phone_number: Yup.string().max(10, 'Too Long!').min(10, 'Ten lecture!'),
  policy: Yup.bool().oneOf([true], 'Accepted our term!'),
  major: Yup.object().required('Major id required'),
})

const BecomeALecturer = () => {
  const dispatch = useDispatch()
  const [lecturerInitial, setLecturerInitial] = useState({
    id: null,
    title: '',
    description: '',
    email: '',
    phone_number: '',
    documents: [],
    major: '',
    policy: false,
  })
  // selector
  const majors = useSelector(selectMajors)
  const infoLecturer = useSelector(selectInfoLecturer)
  const useProfile = useSelector(selectProfileData)

  useEffect(() => {
    if (infoLecturer) {
      setLecturerInitial({
        ...lecturerInitial,
        id: infoLecturer.id || null,
        title: infoLecturer.title || '',
        description: infoLecturer.description || '',
        email: infoLecturer.email || '',
        phone_number: infoLecturer.phone_number || '',
        documents:
          (infoLecturer.documents &&
            infoLecturer.documents.map(e => ({id: e.id, name: e.name}))) ||
          [],
        major:
          (infoLecturer.major_info &&
            Object.assign(infoLecturer.major_info, {
              label: infoLecturer.major_info.name,
              value: infoLecturer.major_info.id,
            })) ||
          '',
        policy: true,
      })
    }
  }, [infoLecturer])

  const majorOption =
    majors && majors.map(e => Object.assign(e, {label: e.name, value: e.id}))

  if (!useProfile) return null
  return (
    <div>
      {useProfile.is_lecturer === null && infoLecturer ? (
        <>
          <Alert color="danger">
            <div className="alert-body">
              <Loader className="mr-1" size="20" />
              <span className="font-weight-bold">
                You have submitted a request to become a lecturer. Please,
                waiting for system approval!
              </span>
            </div>
          </Alert>
        </>
      ) : (
        <>
          {!infoLecturer && (
            <div>
              <Alert color="primary">
                <div className="alert-body">
                  <span className="font-weight-bold">
                    Please Update Education!
                  </span>
                </div>
              </Alert>
              <Alert color="primary">
                <div className="alert-body">
                  <span className="font-weight-bold">
                    Please Update Experience!
                  </span>
                </div>
              </Alert>
            </div>
          )}

          <Formik
            initialValues={lecturerInitial}
            validationSchema={formSchema}
            enableReinitialize={true}
            onSubmit={values => {
              let formData = new FormData()
              formData.append('title', values.title)
              formData.append('description', values.description)
              formData.append('email', values.email)
              formData.append('phone_number', values.phone_number)
              formData.append('major', values.major)
              values.documents.map(document =>
                formData.append('documents', document),
              )

              if (values.id) {
                // update
              } else {
                dispatch(becomeALecturerAtion(formData))
              }
            }}
          >
            {({
              errors,
              values,
              touched,
              isValid,
              setFieldValue,
              setFieldTouched,
            }) => (
              <Form>
                <Row>
                  <Col lg="12">
                    <FormGroup>
                      <Label for="required">
                        Title <sup style={{color: '#FF0000'}}>*</sup>
                      </Label>
                      <Field
                        as="textarea"
                        name="title"
                        className={`form-control ${
                          errors.title && touched.title && 'is-invalid'
                        }`}
                      />
                      <ErrorMessage
                        name="title"
                        component="div"
                        className="field-error text-danger"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="12">
                    <EditorField
                      setFieldValue={setFieldValue}
                      setFieldTouched={setFieldTouched}
                      value={values.description}
                      label="Description"
                      isRequired={true}
                      name="description"
                    />
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <Label className="font-weight-bold text-dark">
                        Major <sup style={{color: '#FF0000'}}>*</sup>
                      </Label>
                      <Select
                        options={majorOption || []}
                        theme={selectThemeColors}
                        className="React react-select customcss"
                        classNamePrefix="select"
                        onChange={option => {
                          setFieldValue('major', option)
                        }}
                        value={values.major}
                      />
                      <ErrorMessage
                        name="major"
                        component="div"
                        className="field-error text-danger"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6"> </Col>
                  <Col lg="6">
                    <FormGroup>
                      <Label for="email">Email</Label>
                      <Field
                        type="email"
                        name="email"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="field-error text-danger"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <Label>Phone Number</Label>
                      <Field
                        name="phone_number"
                        type="number"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="phone_number"
                        component="div"
                        className="field-error text-danger"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="12">
                    <Label>Attached files</Label>
                    <UploadFile
                      setFieldValue={setFieldValue}
                      maxFile={2}
                      name="documents"
                      defaultValues={values.documents}
                    />
                  </Col>
                  <Col lg="12">
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-tag bg-danger mr-1">
                        <Shield size={25} />
                      </div>
                      <div>
                        <h4 className="mb-0">Policy</h4>
                        <span>System policy</span>
                      </div>
                    </div>
                    <AppCollapse
                      className="mt-2"
                      type="margin"
                      data={[
                        {
                          title: (
                            <div className=" text-dark">
                              Does my subscription automatically renew?
                            </div>
                          ),
                          content: (
                            <span>
                              Pastry pudding cookie toffee bonbon jujubes
                              jujubes powder topping. Jelly beans gummi bears
                              sweet roll bonbon muffin liquorice. Wafer lollipop
                              sesame snaps. Brownie macaroon cookie muffin
                              cupcake candy caramels tiramisu. Oat cake
                              chocolate cake sweet jelly-o brownie biscuit
                              marzipan. Jujubes donut marzipan chocolate bar.
                              Jujubes sugar plum jelly beans tiramisu icing
                              cheesecake.
                            </span>
                          ),
                        },
                        {
                          title: (
                            <div className=" text-dark">
                              Does my subscription automatically renew?
                            </div>
                          ),
                          content: (
                            <span>
                              Pastry pudding cookie toffee bonbon jujubes
                              jujubes powder topping. Jelly beans gummi bears
                              sweet roll bonbon muffin liquorice. Wafer lollipop
                              sesame snaps. Brownie macaroon cookie muffin
                              cupcake candy caramels tiramisu. Oat cake
                              chocolate cake sweet jelly-o brownie biscuit
                              marzipan. Jujubes donut marzipan chocolate bar.
                              Jujubes sugar plum jelly beans tiramisu icing
                              cheesecake.
                            </span>
                          ),
                        },
                        {
                          title: (
                            <div className=" text-dark">
                              Does my subscription automatically renew?
                            </div>
                          ),
                          content: (
                            <span>
                              Pastry pudding cookie toffee bonbon jujubes
                              jujubes powder topping. Jelly beans gummi bears
                              sweet roll bonbon muffin liquorice. Wafer lollipop
                              sesame snaps. Brownie macaroon cookie muffin
                              cupcake candy caramels tiramisu. Oat cake
                              chocolate cake sweet jelly-o brownie biscuit
                              marzipan. Jujubes donut marzipan chocolate bar.
                              Jujubes sugar plum jelly beans tiramisu icing
                              cheesecake.
                            </span>
                          ),
                        },
                      ]}
                      accordion
                    />
                  </Col>
                  <Col lg="12" className="my-2">
                    <CustomInput
                      type="checkbox"
                      className="custom-control-Primary font-weight-bold"
                      id="acceptedPolicy"
                      htmlFor="acceptedPolicy"
                      label="I accept the terms of use and privacy policy "
                      inline
                      // value={values.policy}
                      onChange={e => setFieldValue('policy', e.target.checked)}
                      defaultChecked={values.policy}
                    />
                    <ErrorMessage
                      name="policy"
                      component="div"
                      className="field-error text-danger"
                    />
                  </Col>
                </Row>

                <hr />
                <FormGroup className="text-right">
                  <Button.Ripple
                    disabled={!isValid || !!values.id}
                    color="primary"
                    type="submit"
                    className="mr-1"
                  >
                    {values.id ? 'Update' : 'Submit'}
                  </Button.Ripple>
                  <Button.Ripple color="secondary" type="button">
                    Cancel
                  </Button.Ripple>
                </FormGroup>
              </Form>
            )}
          </Formik>
        </>
      )}
    </div>
  )
}

export default BecomeALecturer
