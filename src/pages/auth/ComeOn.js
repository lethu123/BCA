import logo from 'assets/images/logo/logo_BCA.svg'
import bgSignIn from 'assets/images/backgrounds/overlay_login.png'
import {Button} from 'reactstrap'
import {useHistory} from 'react-router-dom'

const ComeOn = () => {
  const history = useHistory()
  return (
    <div
      className="d-flex flex-column flex-root position-relative"
      style={{backgroundColor: '#fff'}}
    >
      <div
        className="d-flex flex-column flex-lg-row flex-column-fluid"
        style={{minHeight: '100vh'}}
      >
        <div className="position-relative w-100">
          <div
            style={{
              position: 'absolute',
              bottom: '-40%',
              left: '-60%',
            }}
          >
            <img src={bgSignIn} alt="signin" className="img-fluid" />
          </div>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          textAlign: 'center',
        }}
      >
        <div className="mb-20 ml-10 mt-10">
          <img alt="Logo" src={logo} className="h-75px" />
        </div>
        <h1 className="text-primary">Đăng kí tài khoản thành công</h1>
        <p className="w-75 mx-auto">
          Check your email to confirm your address - you can't access many of
          the site's feature until confirmed
        </p>
        <div className="w-100 text-center mt-lg-10 mt-5">
          <Button.Ripple color="primary" onClick={() => history.push('/home')}>
            Tham gia BCA cộng đồng ngay
          </Button.Ripple>
        </div>
        <div className="w-100 text-center mt-3 mb-lg-20 mb-0">
          <Button.Ripple color="flat-warning">
            Thiết lập tài khoản BizNet của bạn
          </Button.Ripple>
        </div>
      </div>
    </div>
  )
}

export default ComeOn
