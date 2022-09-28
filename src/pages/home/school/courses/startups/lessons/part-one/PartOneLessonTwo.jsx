import {Fragment, useState, useEffect} from 'react'
import axios from 'axios'
import classnames from 'classnames'
import {Link} from 'react-router-dom'
import Sidebar from '../BlogSidebar'
import Avatar from '@core/components/avatar'
import Breadcrumbs from '@core/components/breadcrumbs'
import AppCollapse from '@core/components/app-collapse'
import imagePDF from 'assets/images/icons/File_PDF-512.png'
import '../../CourseStartup.style.scss'
import {
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  CardImg,
  Badge,
  Media,
  Button,
  ListGroup,
  ListGroupItem,
} from 'reactstrap'
import * as Icon from 'react-feather'

import '@core/scss/base/pages/page-blog.scss'

import startupSearchingImg from 'assets/images/pages/hschool/startup-execution.jpg'
import {Bell} from 'react-feather'
import CustomerJobsModal from './modalCustomerJobs/ValueCreationModal.component'
import CustomerPainsModal from './modalCustomerPains/ValueCreationModal.component'
import CustomerGainsModal from './modalCustomerGains/ValueCreationModal.component'
const dataTest = [
  {
    title: (
      <Link to="#none">
        <span>
          <i>
            <u>Xem tất cả tệp đính kèm</u>
          </i>
        </span>
      </Link>
    ),
    content: (
      <div className="mb-0 card-text">
        <ListGroup>
          <ListGroupItem className="d-flex justify-content-left align-items-center">
            <Avatar className="mr-1" img={imagePDF} width="32" height="32" />
            <div className="d-flex flex-column">
              <a href="#none" download className="user-name text-truncate mb-0">
                <span className="font-weight-bold">document.pdf</span>
              </a>
            </div>
          </ListGroupItem>
          <ListGroupItem className="d-flex justify-content-left align-items-center">
            <Avatar className="mr-1" img={imagePDF} width="32" height="32" />
            <div className="d-flex flex-column">
              <a href="#none" download className="user-name text-truncate mb-0">
                <span className="font-weight-bold">document.pdf</span>
              </a>
            </div>
          </ListGroupItem>
          <ListGroupItem className="d-flex justify-content-left align-items-center">
            <Avatar className="mr-1" img={imagePDF} width="32" height="32" />
            <div className="d-flex flex-column">
              <a href="#none" download className="user-name text-truncate mb-0">
                <span className="font-weight-bold">document.pdf</span>
              </a>
            </div>
          </ListGroupItem>
        </ListGroup>
      </div>
    ),
  },
]

const PartOneLesson = props => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/blog/list/data/detail').then(res => setData(res.data))
  }, [])

  const badgeColorsArr = {
    Quote: 'light-info',
    Fashion: 'light-primary',
    Gaming: 'light-danger',
    Video: 'light-warning',
    Food: 'light-success',
  }

  const renderTags = () => {
    return data.blog.tags.map((tag, index) => {
      return (
        <a key={index} href="/" onClick={e => e.preventDefault()}>
          <Badge
            className={classnames({
              'mr-50': index !== data.blog.tags.length - 1,
            })}
            color={badgeColorsArr[tag]}
            pill
          >
            {tag}
          </Badge>
        </a>
      )
    })
  }
  const [stateModal, setStateModal] = useState(false)
  const [stateModal2, setStateModal2] = useState(false)
  const [stateModal3, setStateModal3] = useState(false)

  const toggleModal = () => {
    setStateModal(!stateModal)
  }
  const toggleModal2 = () => {
    setStateModal2(!stateModal2)
  }
  const toggleModal3 = () => {
    setStateModal3(!stateModal3)
  }

  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbTitle="Khóa học Khởi nghiệp"
        breadCrumbParent="HShool"
        breadCrumbParent2="Khóa học Khởi nghiệp"
        breadCrumbParent3="Phần 1 Khám phá Cơ hội Khởi nghiệp"
        breadCrumbParentTo="/hschool/course/start-up"
        breadCrumbParent2To="/hschool/course/start-up"
        breadCrumbParent3To={`/hschool/course/start-up/${props.params.name_course}`}
        breadCrumbActive="Khám phá thách thức và xu hướng phát triển"
      />
      <div className="blog-wrapper row">
        <div className="content-detached col-lg-8">
          <div className="content-body">
            {data !== null ? (
              <Row>
                <Col sm="12">
                  <Card className="mb-3">
                    <CardImg
                      src={startupSearchingImg}
                      className="img-fluid"
                      top
                      style={{height: '350px'}}
                    />
                    <CardBody>
                      <h1>
                        Chương 2: Khám phá thách thức và xu hướng phát triển
                      </h1>

                      <div className="my-1 py-25">{renderTags()}</div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            'Trước khi bắt đầu với các ý tưởng, sáng kiến trong kinh doanh, việc nhận thức về các vấn đề trong ngành là bước giúp bạn có được cái nhìn tổng quan chiến lược về những thách thức lớn nhất và những công nghệ quan trọng nhất có thể làm gián đoạn ngành của bạn như thế nào trong hiện tại và tương lai. Cùng đó là sự ra đời của các mô hình kinh doanh đổi mới sáng tạo. Toàn bộ ngành công nghiệp của bạn sẽ được định hình lại như thế nào?',
                        }}
                      ></div>

                      <div>
                        <Media className="mt-2">
                          <Avatar
                            className="mr-75"
                            color="light-primary"
                            content="1"
                            width="38"
                            height="38"
                          />
                          <Media body>
                            <h6 className="font-weight-bolder mb-25">
                              Các thách thức trong và xuyên ngành
                            </h6>
                            <CardText> </CardText>
                            <CardText>
                              Tham chiếu dự án của bạn lên toàn bộ ngành của bạn
                              hay các ngành liên quan, hãy suy nghĩ và nghiên
                              cứu về các nhu cầu xã hội, vấn đề mà thế giới,
                              quốc gia hay địa phương của bạn đang gặp phải,
                              cũng như các xu hướng toàn cầu hiện nay tác động
                              đến dự án của bạn như thế nào.
                            </CardText>
                            <hr />
                            <Row>
                              <Col lg="6" className="pb-2">
                                <div className="d-flex align-items-center my-1">
                                  <Avatar
                                    className="mr-1"
                                    icon={<Icon.Paperclip />}
                                    width="25"
                                    height="25"
                                  />
                                  <h4>Tài liệu đính kèm</h4>
                                </div>

                                <AppCollapse
                                  data={dataTest}
                                  type="shadow"
                                  accordion
                                  className="file-attack p-0"
                                />
                              </Col>
                              <Col lg="6" className="pb-2">
                                <div className="d-flex align-items-center my-1">
                                  <Avatar
                                    className="mr-1"
                                    icon={<Bell />}
                                    width="25"
                                    height="25"
                                  />
                                  <h4>Công cụ Thực hành HStartup</h4>
                                </div>
                                <Button.Ripple
                                  className="round"
                                  color="primary"
                                  outline
                                  onClick={() => toggleModal()}
                                >
                                  <span className="ml-auto mr-1 badge badge-danger badge-pill">
                                    2
                                  </span>
                                  <span>
                                    Nhân thức thành Khám phá - Exploration{' '}
                                  </span>
                                </Button.Ripple>
                              </Col>
                            </Row>
                          </Media>
                        </Media>

                        <Media className="mt-2">
                          <Avatar
                            className="mr-75"
                            color="light-primary"
                            content="2"
                            width="38"
                            height="38"
                          />
                          <Media body>
                            <h6 className="font-weight-bolder mb-25">
                              Các công nghệ mới ảnh hưởng đến ngành
                            </h6>
                            <CardText> </CardText>
                            <div className="card-text">
                              <span>
                                Các Công nghệ Mới hiện nay đều tác động lên
                                ngành của bạn dù là trực tiếp hay gián tiếp. Bên
                                cạnh đó, các công nghệ này gây ra sự chuyển đổi
                                xã hội quy mô lớn bằng các thay đổi các thành
                                phần kinh tế hiện có, các nguyên lý làm việc,
                                sản xuất và tiêu thụ. Điều này mang lại những cơ
                                hội lớn mà bạn có thể hay nên tận dụng. Các cơ
                                hội kinh doanh lớn có thể bắt gặp tại giao điểm
                                của những thách thức lớn nhất và những công nghệ
                                quan trọng bật nhất hiện nay.
                              </span>
                              <div className="mt-1">
                                <span>Các công nghệ phổ biến:</span>
                                <ol>
                                  <li>Trí tuệ Nhân tạo</li>
                                  <li>Internet vạn vật</li>
                                  <li>Máy học</li>
                                  <li>Dữ liệu lớn</li>
                                  <li>Công nghệ in 3D</li>
                                  <li>...</li>
                                </ol>
                              </div>
                            </div>
                            <hr />
                            <Row>
                              <Col lg="6" className="pb-2">
                                <div className="d-flex align-items-center my-1">
                                  <Avatar
                                    className="mr-1"
                                    icon={<Icon.Paperclip />}
                                    width="25"
                                    height="25"
                                  />
                                  <h4>Tài liệu đính kèm</h4>
                                </div>

                                <AppCollapse
                                  data={dataTest}
                                  type="shadow"
                                  accordion
                                  className="file-attack p-0"
                                />
                              </Col>
                              <Col lg="6" className="pb-2">
                                <div className="d-flex align-items-center my-1">
                                  <Avatar
                                    className="mr-1"
                                    icon={<Bell />}
                                    width="25"
                                    height="25"
                                  />
                                  <h4>Công cụ Thực hành HStartup</h4>
                                </div>
                                <Button.Ripple
                                  className="round"
                                  color="primary"
                                  outline
                                  onClick={() => toggleModal2()}
                                >
                                  <span className="ml-auto mr-1 badge badge-danger badge-pill">
                                    2
                                  </span>
                                  <span>
                                    Xác định và tạo mới Customer Pains
                                  </span>
                                </Button.Ripple>
                              </Col>
                            </Row>
                          </Media>
                        </Media>

                        <Media className="mt-2">
                          <Avatar
                            className="mr-75"
                            color="light-primary"
                            content="3"
                            width="38"
                            height="38"
                          />
                          <Media body>
                            <h6 className="font-weight-bolder mb-25">
                              Các mô hình kinh doanh mới đột phá trong ngành.
                            </h6>
                            <CardText> </CardText>
                            <div className="card-text">
                              <span>
                                Tận dụng các công nghệ đột phá, đổi mới sáng tạo
                                trong mô hình kinh doanh, đây là cách các tổ
                                chức có các mô hình kinh doanh mới và thành công
                                đã làm gián đoạn ngành của mình như thế nào.
                                Giống như cách mà Uber đã làm với toàn bộ ngành
                                taxi/dịch vụ vận chuyển. Tìm hiểu và nghiên cứu
                                các mô hình kinh doanh mới thành công trong
                                ngành hay các ngành liên quan để khám phấ những
                                cách thức kinh doanh mới trong ngành công nghiệp
                                của bạn.
                              </span>
                            </div>
                            <hr />
                            <Row>
                              <Col lg="6" className="pb-2">
                                <div className="d-flex align-items-center my-1">
                                  <Avatar
                                    className="mr-1"
                                    icon={<Icon.Paperclip />}
                                    width="25"
                                    height="25"
                                  />
                                  <h4>Tài liệu đính kèm</h4>
                                </div>

                                <AppCollapse
                                  data={dataTest}
                                  type="shadow"
                                  accordion
                                  className="file-attack p-0"
                                />
                              </Col>
                              <Col lg="6" className="pb-2">
                                <div className="d-flex align-items-center my-1">
                                  <Avatar
                                    className="mr-1"
                                    icon={<Bell />}
                                    width="25"
                                    height="25"
                                  />
                                  <h4>Công cụ Thực hành HStartup</h4>
                                </div>
                                <Button.Ripple
                                  className="round"
                                  color="primary"
                                  outline
                                  onClick={() => toggleModal3()}
                                >
                                  <span className="ml-auto mr-1 badge badge-danger badge-pill">
                                    2
                                  </span>
                                  <span>
                                    Xác định và tạo mới Customer Gains
                                  </span>
                                </Button.Ripple>
                              </Col>
                            </Row>
                          </Media>
                        </Media>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            ) : null}
          </div>
          <CustomerJobsModal
            toggleModal={toggleModal}
            stateModal={stateModal}
          />
          <CustomerPainsModal
            toggleModal2={toggleModal2}
            stateModal2={stateModal2}
          />

          <CustomerGainsModal
            toggleModal3={toggleModal3}
            stateModal3={stateModal3}
          />
        </div>

        <Sidebar params={props.params} chapter={2} />
      </div>
    </Fragment>
  )
}

export default PartOneLesson
