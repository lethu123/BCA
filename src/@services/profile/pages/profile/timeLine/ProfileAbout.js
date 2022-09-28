import {Calendar, Mail, MapPin, PhoneCall} from 'react-feather'
import {Card, CardBody} from 'reactstrap'
import imgFB from 'assets/images/user/fb.png'
import imgIN from 'assets/images/user/in.png'
import imgINS from 'assets/images/user/ins.png'
import imgSKY from 'assets/images/user/sky.png'
import imgTW from 'assets/images/user/tw.png'
import imgYTB from 'assets/images/user/ytb.png'
// import danhhieu from 'assets/images/datacenter/danhhieu.png'

const ProfileAbout = ({user}) => {
  if (!user) return null
  return (
    <Card>
      <CardBody>
        <h6 className="mb-75">Giới thiệu</h6>
        <p
          className="text-primary text-center font-weight-bolder"
          style={{fontSize: 20}}
        >
          {user.name || user.username}
        </p>
        {user.story && (
          <div>
            <h6 className="mb-75">Tiểu sử</h6>
            <p style={{fontStyle: 'italic'}}>"{user.story}"</p>
          </div>
        )}

        <div>
          <div>
            <div className="d-flex">
              <MapPin
                size={17}
                style={{color: '#1B75BB', marginTop: 3, marginRight: 5}}
              />
              <p>
                <span className="font-weight-bolder"></span>{' '}
                {user.address || 'Chưa có dữ liệu'}
              </p>
            </div>
            <div className="d-flex">
              <Mail
                size={17}
                style={{color: '#1B75BB', marginTop: 3, marginRight: 5}}
              />
              <p>{user.email || 'Chưa có dữ liệu'}</p>
            </div>
            <div className="d-flex">
              <PhoneCall
                size={17}
                style={{color: '#1B75BB', marginTop: 3, marginRight: 5}}
              />
              <p>{user.phone_number || 'Chưa có dữ liệu'}</p>
            </div>
            <div className="d-flex">
              <Calendar
                size={17}
                style={{color: '#1B75BB', marginTop: 3, marginRight: 5}}
              />
              <p>
                <span className="font-weight-bolder">Ngày tham gia: </span>
                Chưa có dữ liệu
              </p>
            </div>
          </div>
        </div>
        <div>
          <h6 className="mb-75 font-weight-bolder">Mạng xã hội</h6>
          <div className="d-flex justify-content-between">
            <img src={imgFB} alt="images" width="25px" height="25px" />
            <img src={imgIN} alt="images" width="25px" height="25px" />
            <img src={imgTW} alt="images" width="25px" height="25px" />
            <img src={imgYTB} alt="images" width="25px" height="25px" />
            <img src={imgSKY} alt="images" width="25px" height="25px" />
            <img src={imgINS} alt="images" width="25px" height="25px" />
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default ProfileAbout
