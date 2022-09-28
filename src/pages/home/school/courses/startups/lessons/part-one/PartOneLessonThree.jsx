import {Fragment, useState, useEffect} from 'react'
import axios from 'axios'
import classnames from 'classnames'
import Sidebar from '../BlogSidebar'
import Avatar from '@core/components/avatar'
import Breadcrumbs from '@core/components/breadcrumbs'
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

import '@core/scss/base/pages/page-blog.scss'

import startupIdeation from 'assets/images/myCourse/business-idea.jpg'
import {Bell} from 'react-feather'
import AppCollapse from '@core/components/app-collapse'
import {Link, useHistory} from 'react-router-dom'
import imagePDF from 'assets/images/icons/File_PDF-512.png'

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

const PartOneLessonThree = props => {
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

  const history = useHistory()
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
        breadCrumbActive="Phát triển ý tưởng kinh doanh"
      />
      <div className="blog-wrapper row">
        <div className="content-detached col-lg-8">
          <div className="content-body">
            {data !== null ? (
              <Row>
                <Col sm="12">
                  <Card className="mb-3">
                    <CardImg
                      src={startupIdeation}
                      className="img-fluid"
                      top
                      style={{height: '350px'}}
                    />
                    <CardBody>
                      <h1>Chương 3: Phát triển ý tưởng kinh doanh</h1>

                      <div className="my-1 py-25">{renderTags()}</div>

                      <div>
                        <Media className="mt-2">
                          <Avatar
                            className="mr-75"
                            color="light-primary"
                            content="3.1"
                            width="38"
                            height="38"
                          />
                          <Media body>
                            <h6 className="font-weight-bolder mb-25">
                              Ý tưởng Kinh doanh là gì?
                            </h6>
                            <CardText> </CardText>
                            <div className="card-text">
                              <p>
                                Tìm kiếm cơ hội kinh doanh bắt đầu từ một tầm
                                nhìn về sản phẩm/dịch vụ của nhóm khởi nghiệp
                                xuất phát từ một công nghệ, niềm đam mê hay nhận
                                thức về giải pháp cho một vấn đề nào đó chưa
                                được kiểm chứng. Từ đó làm cơ sở để khám phá
                                khách hàng nhằm nhận diện nhu cầu, kỳ vọng và sự
                                lựa chọn của khách hàng, các rào cản khiến khách
                                hàng không tiêu thụ/sử dụng hoặc không hài lòng
                                với các sản phẩm/dịch vụ tương tự đối với tầm
                                nhìn của nhóm. Trên cơ sở đó xác định các vấn đề
                                mà khách hàng cần giải quyết, đề xuất các giải
                                pháp tương ứng để hình thành các ý tưởng.
                              </p>
                              <p>
                                <i>
                                  Ý tưởng kinh doanh là một cặp bao gồm vấn đề
                                  khách hàng cần giải quyết và giải pháp cho vấn
                                  đề đó.
                                </i>
                              </p>
                              <p>
                                Theo Giáo sư Theodore Levitt của Trường Kinh
                                doanh Harvard, “Người ta không cần một mũi khoan
                                ¼ inch, cái người ta cần là một lỗ khoan rộng ¼
                                inch.”. Ý cơ bản là người ta mua sản phẩm không
                                phải để sở hữu, mà họ có một vấn đề cần giải
                                quyết thông qua/bằng sản phẩm đó. Sản phẩm chỉ
                                là phương tiện để khách hàng đạt được mục đích
                                của họ.
                              </p>
                            </div>
                          </Media>
                        </Media>

                        <Media className="mt-2">
                          <Avatar
                            className="mr-75"
                            color="light-primary"
                            content="3.2"
                            width="38"
                            height="38"
                          />
                          <Media body>
                            <h6 className="font-weight-bolder mb-25">
                              Thấu hiểu Khách Hàng
                            </h6>
                            <CardText> </CardText>
                            <div className="card-text">
                              <div>
                                <span>
                                  Luôn bắt đầu với Khách Hàng của bạn. Hồ sơ
                                  Khách hàng, hay còn được gọi là Phân khúc
                                  Khách hàng trong Mô hình Kinh doanh mô tả chi
                                  tiết và phác họa rõ ràng chân dung khách hàng
                                  của bạn. Hồ sơ Khách hàng bao gồm:
                                </span>
                                <ul className="mt-1">
                                  <li>
                                    Nhiệm vụ, công việc cần hoàn thành của Khách
                                    Hàng
                                  </li>
                                  <li>
                                    Kỳ vọng, mong muốn đạt được của Khách Hàng
                                  </li>
                                  <li>
                                    Những khó khăn, rào cản mà Khách Hàng gặp
                                    phải
                                  </li>
                                </ul>
                              </div>
                              <p>
                                <span style={{fontWeight: 400}}>
                                  Chi tiết trong phần Hồ sơ Khách hàng này bạn
                                  cần quan sát và mô tả{' '}
                                </span>
                                <em>
                                  <span style={{fontWeight: 400}}>
                                    các công việc, nhiệm vụ(Customer Jobs)
                                  </span>
                                </em>
                                <span style={{fontWeight: 400}}>
                                  mà khách hàng đang cố hoàn thành, trong quá
                                  trình thực hiện các công việc này khách hàng
                                  sẽ gặp
                                </span>
                                <em>
                                  <span style={{fontWeight: 400}}>
                                    những khó khăn, rủi ro hay rào cản(Customer
                                    Pains)
                                  </span>
                                </em>
                                <span style={{fontWeight: 400}}>
                                  nào và cuối cùng là những
                                </span>
                                <em>
                                  <span style={{fontWeight: 400}}>
                                    mong muốn, kỳ vọng về kết quả mà khách hàng
                                    có thể đạt được(Customer Gains)
                                  </span>
                                </em>
                                <span style={{fontWeight: 400}}>.</span>
                              </p>
                            </div>
                            <hr />
                            <Row>
                              <Col lg="6" className="pb-2">
                                <div className="d-flex align-items-center my-1">
                                  <Avatar
                                    className="mr-1"
                                    icon={<Bell />}
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
                                  onClick={() =>
                                    history.push(
                                      '/hschool/course/start-up/tool/customer-profile',
                                    )
                                  }
                                >
                                  <span className="ml-auto mr-1 badge badge-danger badge-pill">
                                    2
                                  </span>
                                  <span>Xác định và tạo Customer Profile</span>
                                </Button.Ripple>
                              </Col>
                            </Row>
                          </Media>
                        </Media>

                        <Media className="mt-2">
                          <Avatar
                            className="mr-75"
                            color="light-primary"
                            content="3.3"
                            width="38"
                            height="38"
                          />
                          <Media body>
                            <h6 className="font-weight-bolder mb-25">
                              Kiểm chứng. và lựa chọn các vấn đề lớn của khách
                              hàng
                            </h6>
                            <CardText> </CardText>
                            <div className="card-text">
                              <p>
                                Lựa chọn các Vấn đề Khách hàng phù hợp(Customer
                                Problem FIT):
                              </p>
                              <p>
                                Mỗi phân khúc khách hàng đều có rất nhiều vấn
                                đề, khó khăn hay nỗi đau cần giải quyết. Kiểm
                                chứng và xác nhận với khách hàng để biết đâu là
                                những vấn đề thực sự của họ, mức độ quan trọng
                                của từng vấn đề với họ ra sao để xếp hạng chúng
                                là điều cần thiết để thiết kế các đề xuất giá
                                trị mà khách hàng của bạn thực sự quan tâm và
                                sẵn sàng trả tiền để có được.
                              </p>
                            </div>
                            <hr />
                            <Row>
                              <Col lg="6" className="pb-2">
                                <div className="d-flex align-items-center my-1">
                                  <Avatar
                                    className="mr-1"
                                    icon={<Bell />}
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
                                  onClick={() =>
                                    history.push(
                                      '/hschool/course/start-up/tool/Test',
                                    )
                                  }
                                >
                                  <span className="ml-auto mr-1 badge badge-danger badge-pill">
                                    2
                                  </span>
                                  <span>
                                    Kiểm chứng và ưu tiên các vấn đề khách hàng
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
                            content="3.4"
                            width="38"
                            height="38"
                          />
                          <Media body>
                            <h6 className="font-weight-bolder mb-25">
                              Lập Bản đồ Giá trị cho khách hàng
                            </h6>
                            <CardText> </CardText>
                            <div className="card-text">
                              <div>
                                <p>
                                  <span style={{fontWeight: 400}}>
                                    Các Ý tưởng Kinh doanh được thiết kế và hình
                                    thành dựa trên những gì quan sát được từ Hồ
                                    sơ Khách hàng. Từ đó, hàng loạt các Ý tưởng
                                    về các sản phẩm, dịch vụ mang lại những giải
                                    pháp thoã mãn các vấn đề khách hàng, cũng
                                    như giúp tổ chức tạo ra giá trị mang lại cho
                                    khách hàng.
                                  </span>
                                </p>
                                <p>
                                  <span style={{fontWeight: 400}}>
                                    Bản đồ Giá trị: được chia làm 3 phần và
                                    thiết kế dựa trên những gì quan sát được từ
                                    Hồ sơ Khách hàng. Bao gồm các sản phẩm và
                                    dịch vụ được cung cấp (Products &amp;
                                    Services), các giải pháp(Pain Relievers) mà
                                    sản phẩm(hay dịch vụ) của bạn tạo ra để làm
                                    giảm những khó khăn, rủi ro cụ thể mà khách
                                    hàng của bạn phải đối mặt và những lợi ích,
                                    kết quả(Gain Creators) mà sản phẩm(dịch vụ)
                                    đó mang lại.
                                  </span>
                                </p>

                                <ul>
                                  <li style={{fontWeight: 400}} aria-level={1}>
                                    <span style={{fontWeight: 400}}>
                                      Product &amp; Services(Các sản phẩm &amp;
                                      dịch vụ): bao gồm các sản phẩm, dịch vụ mà
                                      Đề xuất Giá trị của bạn sẽ xây dựng nên
                                      dành cho phân khúc khách hàng cụ thể.
                                    </span>
                                  </li>
                                  <li style={{fontWeight: 400}} aria-level={1}>
                                    <span style={{fontWeight: 400}}>
                                      Pain Relievers(Các giải pháp giảm khó
                                      khăn, rủi ro cho khách hàng): mô tả chính
                                      xác các khả năng mà sản phẩm, dịch vụ của
                                      bạn giải quyết các khó khăn, cản trở đã
                                      xác định ở Hồ sơ Khách hàng.
                                    </span>
                                  </li>
                                  <li style={{fontWeight: 400}} aria-level={1}>
                                    <span style={{fontWeight: 400}}>
                                      Gain Creators(Các lợi ích, kết quả mang
                                      lại cho khách hàng): mô tả chính xác cách
                                      mà sản phẩm, dịch vụ của bạn giúp khách
                                      hàng đạt được những kỳ vọng, mong muốn.
                                    </span>
                                  </li>
                                </ul>

                                <p>
                                  <span style={{fontWeight: 400}}>
                                    Thiết kế Đề xuất Giá trị:
                                  </span>
                                </p>

                                <p>
                                  <span style={{fontWeight: 400}}>
                                    Điểm qua từng Ý tưởng về giải pháp cho các
                                    vấn đề khách hàng được tạo ra ở Bản đồ Giá
                                    trị(Value Map), kiểm tra xem liệu các giải
                                    pháp này có giải quyết được tốt các vấn đề
                                    của khách hàng quan sát được ở Hồ sơ Khách
                                    hàng và được khách hàng chấp nhận, khi đó Ý
                                    tưởng này được xác thực.
                                  </span>
                                </p>

                                <p>
                                  <span style={{fontWeight: 400}}>
                                    Công việc thiết kế giải pháp cho các vấn đề
                                    khách hàng diễn ra tuần tự, không ngừng diễn
                                    ra cho đến tìm kiếm được đề xuất giá trị phù
                                    hợp với giải quyết được các vấn đề khách
                                    hàng. Quá trình lặp lại này nhằm kiểm tra
                                    các ý tưởng nhanh có thể để có thể đào sâu
                                    nghiên cứu, tạo ra các thiết kế tốt hơn và
                                    từng thử nghiệm,
                                  </span>
                                </p>
                              </div>
                            </div>
                          </Media>
                        </Media>

                        <Media className="mt-2">
                          <Avatar
                            className="mr-75"
                            color="light-primary"
                            content="3.5"
                            width="38"
                            height="38"
                          />
                          <Media body>
                            <h6 className="font-weight-bolder mb-25">
                              Hình thành các Ý tưởng/Sáng kiến
                            </h6>
                            <CardText> </CardText>
                            <div className="card-text">
                              <p>
                                Xác định cặp Vấn đề-Giải pháp phù
                                hợp(Problem-Solution FIT)
                              </p>
                              <p>
                                Các vấn đề khách hàng qua quan sát được và kiểm
                                chứng, từ đó các Ý tưởng về giải pháp dựa trên
                                đề xuất giá trị đã tồn tại, hoặc một giả thuyết
                                về đề xuất giá trị được hình thành. Sản phẩm và
                                dịch vụ được thiết kế lúc này chỉ mới là ý tưởng
                                trên giấy, có rất nhiều ý tưởng được hình thành
                                để chuẩn bị cho bước kiểm chứng các Ý tưởng này
                                với khách hàng.
                              </p>
                            </div>
                          </Media>
                        </Media>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            ) : null}
          </div>
        </div>

        <Sidebar params={props.params} chapter={3} />
      </div>
    </Fragment>
  )
}

export default PartOneLessonThree
