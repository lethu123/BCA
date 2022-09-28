import {Link, useHistory, useLocation} from 'react-router-dom'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {Col, CustomInput, FormGroup, Row} from 'reactstrap'

//** Assets */
import logo from 'assets/images/logo/logo_BCA.svg'
import bgSignIn from 'assets/images/backgrounds/overlay_login.png'
// import iconGoogle from 'assets/media/svg/brand-logos/google-icon.svg'

// *** Query
import {useRegister} from 'hook/auth/authHook'
import {useState} from 'react'
import SmallSpinner from 'components/small-spinner'
import {deviceId} from 'utility/Utils'

// *** Util
import {handleDecodeSearchParams} from '@services/ultils'

const formSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, 'Must be longer than 2 characters')
    .max(20, 'Nice try, nobody has a first name that long')
    .required('First name required'),
  last_name: Yup.string()
    .min(2, 'Must be longer than 2 characters')
    .max(20, 'Nice try, nobody has a last name that long')
    .required('Last name required'),
  phone: Yup.number().required('Phone number is required'),
  password: Yup.string()
    .min(6, 'Must be longer than 6 characters')
    .max(20, 'Nice try, nobody has a first name that long')
    .required('Password is required'),
  email: Yup.string().email('Invalid email!').required('Email is required!'),
  password_confirm: Yup.string()
    .oneOf([Yup.ref('password')], "Password's not match")
    .required('Confirm password required!'),
  term_sys: Yup.bool().oneOf([true], 'Accept ours is required!'),
})

const Register = () => {
  const location = useLocation()

  let refCode = null
  let emailParam = ''

  if (location.search) {
    let {ref_code, email} = handleDecodeSearchParams(location.search)
    refCode = ref_code
    emailParam = email
  }

  const history = useHistory()

  const [email, setEmail] = useState('')

  const {mutate, isLoading} = useRegister(email, history)

  const handleSubmit = values => {
    let formData = new FormData()

    let data = {
      email: values.email,
      username: values.first_name + ' ' + values.last_name,
      password: values.password,
      device_id: deviceId(),
      verification_link: `${window.location.origin}/welcome`,
      ref_code: refCode,
    }

    setEmail(values.email)

    Object.keys(data).map(key => formData.append(key, data[key]))

    // console.log(data)
    mutate(formData)
    history.push('/set-avatar')
  }

  return (
    <div className="d-flex flex-column flex-root">
      {/*begin::Authentication - Sign-in */}
      <div
        className="d-flex flex-column flex-lg-row flex-column-fluid"
        style={{minHeight: '100vh'}}
      >
        <div className="mb-0 ml-10 mt-10">
          <img alt="Logo" src={logo} className="h-75px" />
        </div>
        <div className="position-relative w-100">
          <div
            style={{
              position: 'absolute',
              bottom: '-56%',
              left: '-68%',
            }}
          >
            <img src={bgSignIn} alt="signin" className="img-fluid" />
          </div>
        </div>
        {/* <div
          className="d-flex flex-column flex-lg-row-auto w-xl-600px positon-xl-relative"
          style={{
            background: 'linear-gradient( to bottom right, #214E5A , #C7A083)',
          }}
        >
         
          <div
            style={{minHeight: '100vh'}}
            className="d-flex flex-column position-xl-fixed top-0 bottom-0 w-xl-600px scroll-y"
          >
          
            <div className="d-flex flex-row-fluid flex-column text-center p-10 pt-lg-40">
              
              <h1 className="fw-bolder fs-2qx pb-5 pb-md-10 text-white">
                Cộng đồng BCA
              </h1>
            
              <p
                className="fw-bold fs-2 text-white"
                style={{lineHeight: '27px'}}
              >
                Ý tưởng kinh doanh độc đáo thời 4.0. <br /> Nắm bắt cơ hội hợp
                tác kinh doanh cùng Biznet
              </p>
            
            </div>
           
            <div
              className="d-flex mb-10 flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-100px min-h-lg-350px"
              style={{
                backgroundImage: `url(${signup})`,
              }}
            />
          
          </div>
         
        </div> */}

        <div
          className="d-flex flex-column flex-lg-row-fluid pb-10 pt-5"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
          }}
        >
          {/*begin::Content*/}
          <div className="d-flex  flex-column flex-column-fluid">
            {/*begin::Wrapper*/}

            <div className="w-lg-700px mx-auto">
              {/*begin::Form*/}
              <Formik
                initialValues={{
                  first_name: '',
                  last_name: '',
                  email: emailParam,
                  password: '',
                  password_confirm: '',
                  term_sys: false,
                  phone: '',
                }}
                validationSchema={formSchema}
                onSubmit={handleSubmit}
              >
                {({errors, touched, setFieldValue, isValid, dirty}) => (
                  <Form className=" w-100 fv-plugins-bootstrap5 fv-plugins-framework">
                    <div className="mb-10 text-center">
                      <h1 className="text-dark mb-3">Create an Account</h1>

                      <div className="text-gray-400 fw-bold fs-4">
                        Already have an account?
                        <Link
                          to="/login"
                          className="link-primary fw-bolder ml-1"
                        >
                          Sign in here
                        </Link>
                      </div>
                    </div>

                    {/* <button
                    type="button"
                    className="btn btn-light-primary fw-bolder w-100 mb-10"
                  >
                    <img alt="Logo" src={iconGoogle} className="h-20px me-3" />
                    Sign in with Google
                  </button> */}

                    <div className="d-flex align-items-center mb-10">
                      <div className="border-bottom border-gray-300 mw-50 w-100" />
                      <span className="fw-bold text-gray-400 fs-7 mx-2">
                        OR
                      </span>
                      <div className="border-bottom border-gray-300 mw-50 w-100" />
                    </div>

                    <Row className=" fv-plugins-icon-container">
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-label fs-6 fw-bolder  text-dark">
                            First Name <sup style={{color: '#FF0000'}}>*</sup>
                          </label>
                          <Field
                            name="first_name"
                            className={`form-control form-control-lg form-control-solid border border ${
                              errors.first_name &&
                              touched.first_name &&
                              'is-invalid border-danger'
                            }`}
                          />
                          <ErrorMessage
                            name="first_name"
                            component="div"
                            className="field-error text-danger"
                          />
                        </FormGroup>
                      </Col>

                      <Col lg="6">
                        <FormGroup>
                          <label className="form-label fs-6 fw-bolder text-dark">
                            Last Name <sup style={{color: '#FF0000'}}>*</sup>
                          </label>
                          <Field
                            name="last_name"
                            className={`form-control form-control-lg form-control-solid  border ${
                              errors.last_name &&
                              touched.last_name &&
                              'is-invalid border-danger'
                            }`}
                          />
                          <ErrorMessage
                            name="last_name"
                            component="div"
                            className="field-error text-danger"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-label fs-6 fw-bolder text-dark">
                            Phone number <sup style={{color: '#FF0000'}}>*</sup>
                          </label>
                          <Field
                            type="number"
                            name="phone"
                            className={`form-control form-control-lg form-control-solid border ${
                              errors.phone &&
                              touched.phone &&
                              'is-invalid border-danger'
                            }`}
                          />
                          <ErrorMessage
                            name="phone"
                            component="div"
                            className="field-error text-danger"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-label fs-6 fw-bolder text-dark">
                            Email <sup style={{color: '#FF0000'}}>*</sup>
                          </label>
                          <Field
                            name="email"
                            type="email"
                            className={`form-control form-control-lg form-control-solid border ${
                              errors.email &&
                              touched.email &&
                              'is-invalid border-danger'
                            }`}
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="field-error text-danger"
                          />
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup>
                          <label className="form-label fw-bolder text-dark fs-6 mb-0">
                            Password <sup style={{color: '#FF0000'}}>*</sup>
                          </label>
                          <Field
                            name="password"
                            type="password"
                            className={`form-control form-control-lg form-control-solid border ${
                              errors.password &&
                              touched.password &&
                              'is-invalid border-danger'
                            }`}
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="field-error text-danger"
                          />

                          <div className="text-muted">
                            Use 6 or more characters with a mix of letters,
                            numbers &amp; symbols.
                          </div>
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup>
                          <label className="form-label fw-bolder text-dark fs-6 mb-0">
                            Confirm Password{' '}
                            <sup style={{color: '#FF0000'}}>*</sup>
                          </label>

                          <Field
                            name="password_confirm"
                            type="password"
                            className={`form-control form-control-lg form-control-solid border ${
                              errors.password_confirm &&
                              touched.password_confirm &&
                              'is-invalid border-danger'
                            }`}
                          />
                          <ErrorMessage
                            name="password_confirm"
                            component="div"
                            className="field-error text-danger"
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <CustomInput
                            type="checkbox"
                            className="custom-control-Primary "
                            id="term-sys"
                            onChange={e =>
                              setFieldValue('term_sys', e.target.checked)
                            }
                            label={
                              <span className="form-check-label fw-bold text-gray-700 fs-6">
                                Tôi đồng ý{' '}
                                <Link
                                  to="#"
                                  className="ms-1 link-primary"
                                  style={{textDecoration: 'underline'}}
                                >
                                  Với các điều khoản quy định
                                </Link>
                              </span>
                            }
                          />
                          <ErrorMessage
                            name="term_sys"
                            component="div"
                            className="field-error text-danger"
                          />
                        </FormGroup>
                      </Col>
                      {refCode && (
                        <Col lg="6">
                          <div className="d-flex">
                            <div className="text-dark mr-2">Code:</div>
                            <h6 className=" text-muted">{refCode}</h6>
                          </div>
                        </Col>
                      )}
                    </Row>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-lg btn-primary"
                        disabled={!isValid || !dirty || isLoading}
                      >
                        <SmallSpinner isLoading={isLoading} text="Đăng ký" />
                      </button>
                    </div>

                    <div />
                  </Form>
                )}
              </Formik>
              {/*end::Form*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Content*/}
        </div>
        {/*end::Body*/}
      </div>
      {/*end::Authentication - Sign-in*/}
    </div>
  )
}

export default Register
