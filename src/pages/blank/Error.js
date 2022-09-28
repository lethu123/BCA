import {Link} from 'react-router-dom'
//** Assets */
import backgroundImage from 'assets/images/banner/background.jpg'
import logo from 'assets/images/logo/logo_BCA.svg'

const Error = () => {
  return (
    <div className="d-flex flex-column flex-root">
      <div
        className="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed justify-content-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          minHeight: '100vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="d-flex flex-column flex-column-fluid text-center p-10 py-lg-4">
          <Link to="/" className="mb-2 pt-lg-4">
            <img
              style={{width: '294px', height: '150px'}}
              alt="Logo"
              src={logo}
            />
          </Link>

          <div className="pt-lg-3">
            <h1 className="fw-bolder fs-4x text-gray-700 mb-2">
              Page Not Found 🕵🏻‍♀️
            </h1>

            <div className="fw-bold fs-3 text-gray-400 mb-2">
              The page you looked not found!
              <br />
              Oops! 😖 The requested URL was not found on this server.
            </div>

            <div className="text-center">
              <Link to="/" className="btn btn-lg btn-primary fw-bolder">
                Go to homepage
              </Link>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="d-flex align-items-center fw-bold fs-6">
            <Link
              to="/"
              className="font-weight-bold text-muted text-hover-primary px-2"
            >
              Home
            </Link>
            <a
              href="mailto:support@keenthemes.com"
              className="font-weight-bold text-muted text-hover-primary px-2"
            >
              Contact
            </a>
            <Link
              to="#"
              className="font-weight-bold text-muted text-hover-primary px-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Error
