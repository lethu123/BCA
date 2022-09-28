import {Link} from 'react-router-dom'

//** Assets */
import signup from 'assets/images/blank-page/signup2.png'
import logo from 'assets/images/logo/logo_BCA.svg'
import themeConfig from 'configs/themeConfig'

const PasswordConfirm = () => {
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
            <div className="w-lg-600px p-10 p-lg-15 mx-auto text-center">
              {/*begin::Form*/}

              <h1 className="fw-bolder fs-2qx text-dark mb-3">
                Password is changed
              </h1>

              <div className="fw-bold fs-3 text-gray-400 mb-15">
                Your password is successfully changed.
                <br />
                Please Sign in to{' '}
                <span className="text-primary">BCA Insurence.</span>
              </div>

              <div className="text-center">
                <Link to="/login" className="btn btn-primary btn-lg fw-bolder">
                  Sign In
                </Link>
              </div>
              <div className="text-gray-700 fw-bold fs-4 pt-3">
                Did’t receive an email?
                <Link
                  to="/forgot-password"
                  className="ml-1 text-primary fw-bolder"
                >
                  Try Again
                </Link>
              </div>

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

export default PasswordConfirm
