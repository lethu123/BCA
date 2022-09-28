import LogoImg from 'assets/images/logo/logo_BCA.svg'
import {Link} from 'react-router-dom'

const Logo = () => (
  <div
    className="aside-logo d-none d-lg-flex flex-column align-items-center flex-column-auto py-5"
    id="kt_aside_logo"
  >
    <Link to="/home" className="px-3">
      <img alt="Logo" src={LogoImg} className="w-100 h-50px" />
    </Link>
  </div>
)

export default Logo
