import {useEffect, useState} from 'react'
import {Button, Card, CardBody, Col, Row} from 'reactstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {Calendar, Loader, Mail, Phone} from 'react-feather'

// **assets
import '@core/scss/react/pages/page-profile.scss'

// ** icon
import {LayoutBlocks4, Position} from 'components/icon'

// ** component
import ChatContentPage from './ChatContentPage'
import MemberChat from './MemberChat'

const ChatPage = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    axios.get('/profile/data').then(response => setData(response.data))
  }, [])
  return (
    <div>
      <Row>
        <Col xl="3" lg="4" md="7" order="1" className="order-1 order-lg-1">
          <MemberChat />
        </Col>
        <Col xl="6" lg="8" md="12" order="3" className="order-3 order-lg-2">
          <ChatContentPage />
        </Col>
        <Col xl="3" lg="12" md="5" className="order-2 order-lg-3">
          <Row>
            <Col xl="12" lg="6" sm="12">
              <Card>
                <CardBody>
                  <h2> Thông tin</h2>
                  <p>
                    Đoạn trò chuyện giữa bạn và <b>Dương Trọng Hải</b>
                  </p>

                  <Row className=" align-items-end pb-3  mx-0">
                    <LayoutBlocks4 color="primary" size="2x" />

                    <div className="ml-3">
                      <b>02448213</b>
                    </div>
                  </Row>
                  <Row className="align-items-end pb-3 mx-0">
                    <Position color="primary" size="2x" />

                    <div className="ml-3">TP Hồ Chí Minh</div>
                  </Row>
                  <Row className="align-items-end pb-3 mx-0">
                    <Mail className="text-primary" />

                    <div className="ml-3">dthai@gmail.com</div>
                  </Row>
                  <Row className="align-items-end pb-3 mx-0">
                    <Phone className="text-primary" />

                    <div className="ml-3">0166000123</div>
                  </Row>
                  <Row className="align-items-end pb-3 mx-0">
                    <Calendar className="text-primary" />

                    <div className="ml-3">Ngày tham gia: 20/11/2021</div>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xl="12" lg="6" sm="12">
              <Card>
                <CardBody>
                  <div id="user-profile">
                    <section id="profile-info">
                      <h2 className="mb-0">Ảnh</h2>
                      <p className="mb-0 mt-2">
                        Các ảnh trong cuộc trò chuyện sẽ hiển thị tại đây
                      </p>
                      <Row>
                        {data &&
                          data.latestPhotos &&
                          data.latestPhotos.map((item, index) => {
                            return (
                              <Col
                                key={index}
                                md="4"
                                xs="6"
                                className="profile-latest-img"
                              >
                                <Link to="#">
                                  <img
                                    className="img-fluid rounded"
                                    src={item.img}
                                    alt="latest"
                                  />
                                </Link>
                              </Col>
                            )
                          })}
                      </Row>
                      <Button.Ripple className="mt-5" block color="primary">
                        View more
                        <Loader className="ml-2" />
                      </Button.Ripple>
                    </section>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default ChatPage
