import {Link, useHistory} from 'react-router-dom'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {FormGroup} from 'reactstrap'

//** Assets */
import logo from 'assets/images/logo/logo_BCA.svg'
import signup from 'assets/images/blank-page/signup2.png'
import SmallSpinner from 'components/small-spinner'

// *** Query
import {useResetPassword} from 'hook/auth/authHook'
import themeConfig from 'configs/themeConfig'

const formSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Must be longer than 6 characters')
    .max(20, 'Nice try, nobody has a first name that long')
    .required('Password is required'),
  re_password: Yup.string()
    .oneOf([Yup.ref('password')], "Password's not match")
    .required('Confirm password required!'),
  keyonce: Yup.string()
    .min(6, 'Must be longer than 6 characters')
    .max(20, 'Nice try, nobody has a first name that long')
    .required('Password is required'),
})

const ResetPassword = () => {
  const history = useHistory()
  const {mutate, isLoading} = useResetPassword(history)

  const handleSubmit = values => {
    let formData = new FormData()
    Object.keys(values).map(key => formData.append(key, values[key]))
    mutate(formData)
  }

  return (
    <div className="d-flex flex-column flex-root">
      {/*begin::Authentication - Sign-in */}
      <div
        className="d-flex flex-column flex-lg-row flex-column-fluid"
        style={{minHeight: '100vh'}}
      >
        {/*begin::Aside*/}
        <div
          className="d-flex flex-column flex-lg-row-auto w-xl-600px positon-xl-relative"
          style={{
            background: 'linear-gradient( to bottom right, #214E5A , #C7A083)',
          }}
        >
          {/*begin::Wrapper*/}
          <div
            style={{minHeight: '100vh'}}
            className="d-flex flex-column position-xl-fixed top-0 bottom-0 w-xl-600px scroll-y"
          >
            {/*begin::Content*/}
            <div className="d-flex flex-row-fluid flex-column text-center p-10 pt-lg-40">
              {/*begin::Title*/}
              <h1 className="fw-bolder fs-2qx pb-5 pb-md-10 text-white">
                Cộng đồng {themeConfig.app.company}
              </h1>
              {/*end::Title*/}
              {/*begin::Description*/}
              <p
                className="fw-bold fs-2 text-white"
                style={{lineHeight: '27px'}}
              >
                Ý tưởng kinh doanh độc đáo thời 4.0. <br /> Nắm bắt cơ hội hợp
                tác kinh doanh cùng Biznet
              </p>
              {/*end::Description*/}
            </div>
            {/*end::Content*/}
            {/*begin::Illustration*/}
            <div
              className="d-flex mb-10 flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-100px min-h-lg-350px"
              style={{
                backgroundImage: `url(${signup})`,
              }}
            />
            {/*end::Illustration*/}
          </div>
          {/*end::Wrapper*/}
        </div>
        {/*end::Aside*/}
        {/*begin::Body*/}
        <div className="d-flex bg-white flex-column flex-lg-row-fluid py-10">
          {/*begin::Content*/}
          <div className="d-flex flex-center flex-column flex-column-fluid">
            {/*begin::Wrapper*/}
            <Link to="/home" className="mb-0">
              <img alt="Logo" src={logo} className="h-75px" />
            </Link>
            <div className="w-lg-600px p-10 p-lg-15 mx-auto">
              {/*begin::Form*/}
              <Formik
                initialValues={{
                  password: '',
                  re_password: '',
                  keyonce: '',
                }}
                validationSchema={formSchema}
                onSubmit={handleSubmit}
              >
                {({errors, touched, isValid, dirty}) => (
                  <Form className=" w-100 fv-plugins-bootstrap5 fv-plugins-framework">
                    <div className="text-center mb-10">
                      <h1 className="text-dark mb-3">Setup New Password</h1>

                      <div className="text-gray-400 fw-bold fs-4">
                        Already have reset your password ?
                        <Link
                          to="/login"
                          className="link-primary fw-bolder ml-1"
                        >
                          Sign in here
                        </Link>
                      </div>
                    </div>

                    <FormGroup>
                      <label className="form-label fw-bolder text-dark fs-6 mb-0">
                        Password <sup style={{color: '#FF0000'}}>*</sup>
                      </label>
                      <Field
                        name="password"
                        type="password"
                        className={`form-control form-control-lg form-control-solid ${
                          errors.password && touched.password && 'is-invalid'
                        }`}
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="field-error text-danger"
                      />

                      <div className="text-muted">
                        Use 6 or more characters with a mix of letters, numbers
                        &amp; symbols.
                      </div>
                    </FormGroup>

                    <FormGroup>
                      <label className="form-label fw-bolder text-dark fs-6 mb-0">
                        Confirm Password <sup style={{color: '#FF0000'}}>*</sup>
                      </label>

                      <Field
                        name="re_password"
                        type="password"
                        className={`form-control form-control-lg form-control-solid ${
                          errors.re_password &&
                          touched.re_password &&
                          'is-invalid'
                        }`}
                      />
                      <ErrorMessage
                        name="re_password"
                        component="div"
                        className="field-error text-danger"
                      />
                    </FormGroup>

                    <FormGroup>
                      <label className="form-label fw-bolder text-dark fs-6 mb-0">
                        Code get from your email{' '}
                        <sup style={{color: '#FF0000'}}>*</sup>
                      </label>

                      <Field
                        name="keyonce"
                        className={`form-control form-control-lg form-control-solid ${
                          errors.keyonce && touched.keyonce && 'is-invalid'
                        }`}
                      />
                      <ErrorMessage
                        name="keyonce"
                        component="div"
                        className="field-error text-danger"
                      />
                    </FormGroup>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-lg btn-primary"
                        disabled={!isValid || !dirty || isLoading}
                      >
                        <SmallSpinner isLoading={isLoading} />
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

export default ResetPassword
