import {Link, useHistory} from 'react-router-dom'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {Card, CardBody, FormGroup} from 'reactstrap'

//** Assets */
import signup from 'assets/images/blank-page/signup2.png'
import logo from 'assets/images/logo/logo_BCA.svg'

// *** Query
import {useForgotPassword} from 'hook/auth/authHook'
import SmallSpinner from 'components/small-spinner'
import themeConfig from 'configs/themeConfig'

const formSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email!').required('Email is required!'),
})
const ForgotPassword = () => {
  const history = useHistory()

  const {mutate, isLoading} = useForgotPassword(history)

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
            width: '40%',
          }}
        >
          {/*begin::Wrapper*/}
          <div
            style={{minHeight: '100vh'}}
            className="py-5 d-flex flex-column position-xl-fixed top-0 bottom-0 w-xl-600px scroll-y"
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
        <div
          style={{width: '60%'}}
          className="d-flex align-items-center justify-content-center"
        >
          <Card style={{width: '60%'}}>
            <CardBody className="text-center">
              <Link to="/home">
                <img
                  alt="Logo"
                  src={logo}
                  style={{width: '147px', height: '75px'}}
                />
              </Link>
              <div className="w-lg-600px p-10 p-lg-15 mx-auto mt-2">
                {/*begin::Form*/}
                <Formik
                  initialValues={{
                    email: '',
                  }}
                  validationSchema={formSchema}
                  onSubmit={(values, {resetForm}) => {
                    let formData = new FormData()
                    formData.append('email', values.email)
                    mutate(formData)
                    resetForm()
                  }}
                >
                  {({errors, touched, isValid, dirty}) => (
                    <Form className=" w-100 fv-plugins-bootstrap5 fv-plugins-framework">
                      <div className="text-center mb-10">
                        <h1 className="text-dark mb-1">Forgot Password ?</h1>

                        <div className="text-gray-400 fw-bold fs-4">
                          Enter your email to reset your password.
                        </div>
                      </div>

                      <FormGroup className="mb-12 text-left">
                        <label className="form-label fs-6 fw-bolder text-dark">
                          Email <sup style={{color: '#FF0000'}}>*</sup>
                        </label>
                        <Field
                          name="email"
                          type="email"
                          className={`form-control form-control-lg form-control-solid ${
                            errors.email && touched.email && 'is-invalid'
                          }`}
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="field-error text-danger"
                        />
                      </FormGroup>

                      <div className="d-flex flex-wrap justify-content-center pb-lg-0">
                        <button
                          type="submit"
                          className="btn btn-lg btn-primary fw-bolder me-4 cursor-pointer"
                          disabled={isLoading || !isValid || !dirty}
                        >
                          <SmallSpinner />
                        </button>
                        <Link
                          to="/login"
                          className="btn btn-lg btn-light-primary fw-bolder"
                        >
                          Cancel
                        </Link>
                      </div>
                      <div />
                    </Form>
                  )}
                </Formik>
                {/*end::Form*/}
              </div>
            </CardBody>
          </Card>
        </div>
        {/*end::Body*/}
      </div>
      {/*end::Authentication - Sign-in*/}
    </div>
  )
}

export default ForgotPassword
