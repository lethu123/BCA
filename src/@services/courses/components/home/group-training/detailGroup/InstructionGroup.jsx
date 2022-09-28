import {Archive, Calendar, Grid, Mail, MapPin, PhoneCall} from 'react-feather'
import {Card, CardBody} from 'reactstrap'
import imgFB from 'assets/images/user/fb.png'
import imgIN from 'assets/images/user/in.png'
import imgINS from 'assets/images/user/ins.png'
import imgSKY from 'assets/images/user/sky.png'
import imgTW from 'assets/images/user/tw.png'
import imgYTB from 'assets/images/user/ytb.png'

const InstructionGroup = () => {
  return (
    <Card>
      <CardBody>
        <h6 className="mb-75">Giới thiệu</h6>
        <p className="text-primary text-center" style={{fontSize: 20}}>
          Nhóm New Alpha - Tranning 1
        </p>
        <div>
          <h6 className="mb-75">Tiểu sử</h6>
          <p style={{fontStyle: 'italic'}}>
            "It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal"
          </p>
        </div>
        <div>
          <div>
            <div className="d-flex">
              <Grid size={17} className="text-primary mr-2" />
              <p>
                <span className="font-weight-bolder">ID nhóm : </span>{' '}
                0021842131
              </p>
            </div>
            <div className="d-flex">
              <Archive size={17} className="text-primary mr-2" />
              <p>
                <span className="font-weight-bolder">Số thành viên : </span> BM
              </p>
            </div>
            <div className="d-flex">
              <MapPin
                size={17}
                style={{color: '#1B75BB', marginTop: 3, marginRight: 5}}
              />
              <p>
                <span className="font-weight-bolder"></span>Thành phố Hồ Chí
                Minh
              </p>
            </div>
            <div className="d-flex">
              <Mail
                size={17}
                style={{color: '#1B75BB', marginTop: 3, marginRight: 5}}
              />
              <p>khacvu0505@gmail.com</p>
            </div>
            <div className="d-flex">
              <Calendar
                size={17}
                style={{color: '#1B75BB', marginTop: 3, marginRight: 5}}
              />
              <p>
                <span className="font-weight-bolder">Ngày tham gia: </span>
                02/08/2021
              </p>
            </div>
          </div>
        </div>
        <div>
          <h6 className="mb-75">Mạng xã hội</h6>
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

export default InstructionGroup
