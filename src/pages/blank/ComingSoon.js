import {Link} from 'react-router-dom'
//** Assets */
import backgroundImage from 'assets/images/banner/background.jpg'
import logo from 'assets/images/logo/logo_BCA.svg'

const ComingSoon = () => {
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
        <div className="d-flex flex-column flex-column-fluid text-center p-10 py-lg-4">
          <Link to="/" className="mb-10 pt-lg-4">
            <img alt="Logo" src={logo} className="h-90px mb-5" />
          </Link>

          <div className="pt-lg-3 ">
            <h1 className="fw-bolder fs-4x text-gray-700 mb-10">
              We are launching soon 🚀
            </h1>

            <div className="fw-bold fs-3 text-gray-400 mb-15">
              We're creating something awesome. Please subscribe to get notified
              when it's ready!
            </div>

            <form className="form fv-row mb-10 fv-plugins-bootstrap5 fv-plugins-framework fv-plugins-icon-container">
              <div className="d-flex flex-center">
                <input
                  className="form-control form-control-lg form-control-solid w-md-250px m-2"
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  autoComplete="off"
                />
                <button
                  type="button"
                  id="kt_coming_soon_submit"
                  className="btn btn-lg btn-primary fw-bolder m-2 text-nowrap"
                >
                  <span className="indicator-label">Notify me</span>
                  <span className="indicator-progress">
                    Please wait...
                    <span className="spinner-border spinner-border-sm align-middle ms-2" />
                  </span>
                </button>
                {/*end::Action*/}
              </div>
              {/*end::Input group*/}
              <div />
              <div className="fv-plugins-message-container invalid-feedback" />
            </form>

            <div className="text-center">
              <Link to="/" className="btn btn-lg btn-primary fw-bolder">
                Go to homepage
              </Link>
            </div>
          </div>
        </div>

        <div className="d-flex flex-center flex-column-auto p-10">
          <div className="d-flex align-items-center fw-bold fs-6">
            <Link to="/" className="text-muted text-hover-primary px-2">
              Home
            </Link>
            <a
              href="mailto:support@keenthemes.com"
              className="text-muted text-hover-primary px-2"
            >
              Contact
            </a>
            <Link to="#" className="text-muted text-hover-primary px-2">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon
