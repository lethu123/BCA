import logo from 'assets/images/logo/logo_BCA.svg'
import bgSignIn from 'assets/images/backgrounds/overlay_login.png'
import {Button, Col, Row} from 'reactstrap'
import {useState} from 'react'
import {ChevronRight} from 'react-feather'
import {useHistory} from 'react-router-dom'

const SetAvatar = () => {
  const [imgAvatar, setImgAvatar] = useState(null)
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
      </div>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
        }}
      >
        <h1 className="text-primary">Welcome! Let's create your profile</h1>
        <p className="ml-10">
          Let others get to know you better! You can do these later
        </p>
        <p className="font-weight-bolder my-lg-20 my-5">Thêm ảnh đại diện</p>
        <Row className="align-items-center">
          <Col lg="4">
            <img
              src={
                imgAvatar
                  ? URL.createObjectURL(imgAvatar)
                  : 'https://skillz4kidzmartialarts.com/wp-content/uploads/2017/04/default-image.jpg'
              }
              alt="images"
              className="rounded-circle"
              width="170px"
              height="170px"
              style={{border: !imgAvatar && '3px dashed  gray'}}
            />
          </Col>
          <Col lg="4">
            <label for="chooseAvatarUser">
              <input
                type="file"
                id="chooseAvatarUser"
                hidden="true"
                onChange={e => setImgAvatar(e.target.files[0])}
              />
              <div
                className="py-3 px-5 border border-1 border-primary rounded cursor-pointer text-primary bg-hover-primary text-hover-light"
                style={{fontSize: '13px', fontWeight: 'bold'}}
              >
                Tải hình ảnh lên
              </div>
            </label>
          </Col>
          <Col lg="4">
            <div className="d-flex justify-content-center">
              <ChevronRight size={30} className="mr-4" />
              <p className="mb-0">Hoặc chọn hình ảnh mặc định của BCA</p>
            </div>
          </Col>
        </Row>
        <div className="w-100 text-center mt-lg-20 mt-5">
          <Button.Ripple
            color="primary"
            onClick={() => history.push('/come-on')}
          >
            Tiếp theo
          </Button.Ripple>
        </div>
      </div>
    </div>
  )
}

export default SetAvatar
