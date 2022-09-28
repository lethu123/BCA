import {Link, useLocation} from 'react-router-dom'

//** Assets */
import backgroundImage from 'assets/images/banner/background.jpg'
import logo from 'assets/images/logo/logo_BCA.svg'

// ** Util **/
import {handleQuerySearchToObject} from 'utility/Utils'

const VerifyEmail = () => {
  const location = useLocation()
  const {email} = handleQuerySearchToObject(location)

  return (
    <div className="d-flex flex-column flex-root">
      <div
        className="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          minHeight: '100vh',
          backgroundSize: 'cover',
        }}
      >
        <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
          <Link to="/" className="mb-10">
            <img alt="Logo" src={logo} className="h-90px" />
          </Link>
          <div className="pt-lg-10 text-center">
            {/*begin::Logo*/}
            <h1 className="fw-bolder fs-2qx text-dark mb-3">
              Verify Your Email
            </h1>
            {/*end::Logo*/}
            {/*begin::Message*/}
            <div className="fs-3 fw-bold text-gray-400 mb-10">
              We have sent an email to
              <a
                href="https://mail.google.com/mail/u/0/#inbox"
                className="link-primary fw-bolder ml-2"
              >
                {email}
              </a>
              <br />
              pelase follow a link to verify your email.
            </div>
            {/*end::Message*/}
            {/*begin::Action*/}
            <div className="text-center mb-10">
              <Link to="/login" className="btn btn-lg btn-primary fw-bolder">
                Skip for now
              </Link>
            </div>
            {/*end::Action*/}
            {/*begin::Action*/}
            <div className="fs-5">
              <span className="fw-bold text-gray-700">
                Did’t receive an email?
              </span>
              <a
                href="https://mail.google.com/mail/u/0/#inbox"
                className="link-primary fw-bolder ml-2"
              >
                Resend
              </a>
            </div>
            {/*end::Action*/}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerifyEmail
