import {Link, useHistory, useLocation} from 'react-router-dom'

//** Assets */
import backgroundImage from 'assets/images/banner/background.jpg'
import logo from 'assets/images/logo/logo_BCA.svg'

// ** Util **/
import {handleQuerySearchToObject} from 'utility/Utils'

// *** React Query
import {useQuery} from 'react-query'
import {queryKeys} from './../../react-query/constants'
import {requestVerifyAccountAuthQuery} from 'service/query/auth/authQuery'

const Welcome = () => {
  const history = useHistory()
  const location = useLocation()
  const {verifyKey} = handleQuerySearchToObject(location)

  const {data, isError} = useQuery(queryKeys.auth.verify_account, () =>
    requestVerifyAccountAuthQuery(verifyKey),
  )

  if (isError) {
    return history.push('/register')
  }

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
        <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
          <Link to="/" className="mb-5 text-center">
            <img
              style={{width: '294px', height: '150px'}}
              alt="Logo"
              src={logo}
            />
          </Link>
          <div className="pt-lg-10 text-center">
            {/*begin::Logo*/}
            <h1 className="fw-bolder fs-2qx text-dark mb-3">
              Chào mừng bạn đến với BCA Insurance
            </h1>
            {/*end::Logo*/}
            {/*begin::Message*/}
            <div className="fw-bold fs-3 text-gray-400 mb-5">
              Cùng khám phá những sản phẩm tốt nhất của chúng tôi
              <br />
              chỉ có tại BCA Insurance
            </div>
            {/*end::Message*/}
            {/*begin::Action*/}
            <div className="text-center">
              <Link to="/login" className="btn btn-lg btn-primary fw-bolder">
                Login
              </Link>
            </div>
            {/*end::Action*/}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
