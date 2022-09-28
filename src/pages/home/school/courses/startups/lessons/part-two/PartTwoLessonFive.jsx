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
} from 'reactstrap'

import '@core/scss/base/pages/page-blog.scss'

import startupTeamWork from 'assets/images/myCourse/mo-hinh-kinh-doanh-1.png'

const PartTwoLessonFive = ({params}) => {
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

  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbTitle="Khóa học Khởi nghiệp"
        breadCrumbParent="HShool"
        breadCrumbParent2="Khóa học Khởi nghiệp"
        breadCrumbParent3="Phần 2 Chiến lược nắm bắt Cơ hội Kinh Doanh"
        breadCrumbParentTo="/hschool/course/start-up"
        breadCrumbParent2To="/hschool/course/start-up"
        breadCrumbParent3To={`/hschool/course/start-up/${params.name_course}`}
        breadCrumbActive="Xây dựng Mô hình Kinh doanh"
      />
      <div className="blog-wrapper row">
        <div className="content-detached col-lg-8">
          <div className="content-body">
            {data !== null ? (
              <Row>
                <Col sm="12">
                  <Card className="mb-3">
                    <CardImg
                      src={startupTeamWork}
                      className="img-fluid"
                      top
                      style={{height: '350px'}}
                    />
                    <CardBody>
                      <h1>Chương 5: Xây dựng Mô hình Kinh doanh</h1>

                      <div className="my-1 py-25">{renderTags()}</div>

                      <div>
                        <p>
                          <span style={{fontWeight: 400}}>
                            <b>Phân loại Ý tưởng Sản phẩm &amp; Thị trường</b>
                          </span>
                        </p>
                        <p>
                          <span style={{fontWeight: 400}}>
                            Xác định các Cơ hội Kinh doanh(Validated Hypotheses)
                            mang lại rất nhiều Ý tưởng/Sáng kiến. Phân loại các
                            Ý tưởng/Sáng kiến thuộc về Ý tưởng về Sản phẩm hay
                            Thị trường dựa vào thuộc tính các thành phần của
                            Business Model Canvas như danh sách các câu hỏi bên
                            dưới:
                          </span>
                        </p>
                        <p>
                          <span style={{fontWeight: 400}}>Thị Trường:</span>
                        </p>
                      </div>

                      <div>
                        <Media className="mt-2">
                          <Avatar
                            className="mr-75"
                            color="light-primary"
                            content="5.1"
                            width="38"
                            height="38"
                          />
                          <Media body>
                            <h6 className="font-weight-bolder mb-25">
                              Tổng quan về Mô hình Kinh doanh
                            </h6>
                            <CardText> </CardText>
                            <div class="card-text">
                              <div>
                                <p>
                                  <span style={{fontWeight: 400}}>
                                    Phân loại Ý tưởng Sản phẩm &amp; Thị trường
                                  </span>
                                </p>
                                <p>
                                  <span style={{fontWeight: 400}}>
                                    Xác định các Cơ hội Kinh doanh(Validated
                                    Hypotheses) mang lại rất nhiều Ý tưởng/Sáng
                                    kiến. Phân loại các Ý tưởng/Sáng kiến thuộc
                                    về Ý tưởng về Sản phẩm hay Thị trường dựa
                                    vào thuộc tính các thành phần của Business
                                    Model Canvas như danh sách các câu hỏi bên
                                    dưới:
                                  </span>
                                </p>
                                <p>
                                  <span style={{fontWeight: 400}}>
                                    Thị Trường:
                                  </span>
                                </p>
                                <p>
                                  <span style={{fontWeight: 400}}>
                                    Các tổ chức tạo ra giá trị thông qua mô hình
                                    kinh doanh hiệu quả gồm các đề xuất giá trị
                                    tốt. Khung Mô hình Kinh doanh (Business
                                    Model Canvas) giúp mô tả cách mà tổ chức sẽ
                                    tạo ra, mang lại và nắm bắt cách tạo ra giá
                                    trị. Các đề xuất giá trị được tạo ra ở phần
                                    nắm bắt cơ hội kinh doanh cần một mô hình
                                    kinh doanh khả thi giúp tạo và mang các giá
                                    trị đến với khách hàng.
                                  </span>
                                </p>
                                <ul>
                                  <li style={{fontWeight: 400}} aria-level={1}>
                                    <span style={{fontWeight: 400}}>
                                      Khách hàn(Customer Segments)
                                    </span>
                                  </li>
                                </ul>
                                <p>
                                  <span style={{fontWeight: 400}}>
                                    Phân khúc khách hàng là một nhóm người hay
                                    tổ chức như công ty, nhóm khởi nghiệp, viện
                                    trường,… - đang hướng tới để tiếp cận và tạo
                                    ra giá trị với một đề xuất giá trị(Value
                                    Propositions) chuyên biệt.
                                  </span>
                                </p>
                                <ul>
                                  <li style={{fontWeight: 400}} aria-level={1}>
                                    <span style={{fontWeight: 400}}>
                                      Đề xuất giá trị, giải pháp(Value
                                      Propositions)
                                    </span>
                                  </li>
                                </ul>
                                <p>
                                  <span style={{fontWeight: 400}}>
                                    Đề xuất giá trị được tạo ra dựa trên một
                                    nhóm các sản phẩm hay dịch vụ tạo ra các
                                    giải pháp mang lại giá trị cho một phân khúc
                                    khách hàng
                                  </span>
                                </p>
                                <ul>
                                  <li style={{fontWeight: 400}} aria-level={1}>
                                    <span style={{fontWeight: 400}}>
                                      Kênh phân phố(Channels)
                                    </span>
                                  </li>
                                </ul>
                                <p>
                                  <span style={{fontWeight: 400}}>
                                    Các kênh mô tả một đề xuất giá trị được
                                    truyền đạt và mang đến phân khúc khách hàng
                                    cụ thể như thế nào thông qua các kênh giao
                                    tiếp, phân phối và bán hàng
                                  </span>
                                </p>
                                <ul>
                                  <li style={{fontWeight: 400}} aria-level={1}>
                                    <span style={{fontWeight: 400}}>
                                      Quan hệ Khách hàng(Customer Relationships)
                                    </span>
                                  </li>
                                </ul>
                                <p>
                                  <span style={{fontWeight: 400}}>
                                    Các mối quan hệ khách hàng mô tả mối quan hệ
                                    được thiết lập và duy trì với từng phân khúc
                                    khách hàng và chúng giải thích cácn khách
                                    hàng có được và giữ chân
                                  </span>
                                </p>
                                <ul>
                                  <li style={{fontWeight: 400}} aria-level={1}>
                                    <span style={{fontWeight: 400}}>
                                      Mô hình Doanh thu(Revenue Streams)
                                    </span>
                                  </li>
                                </ul>
                                <p>
                                  <span style={{fontWeight: 400}}>
                                    Kết quả nhận được khi một đề xuất khách hàng
                                    cung cấp thành công cho khách hàng. Đó là
                                    cách mà tổ chức nắm bắt và tạo ra giá trị mà
                                    khách hàng sẵn sàng chi trả và sử dụng sản
                                    phẩm.
                                  </span>
                                </p>
                                <ul>
                                  <li style={{fontWeight: 400}} aria-level={1}>
                                    <span style={{fontWeight: 400}}>
                                      Các hoạt động chính(Key Activities)
                                    </span>
                                  </li>
                                </ul>
                                <p>
                                  <span style={{fontWeight: 400}}>
                                    là những hoạt động quan trọng nhất mà một tổ
                                    chức cần phải thực hiện tốt.
                                  </span>
                                </p>
                                <ul>
                                  <li style={{fontWeight: 400}} aria-level={1}>
                                    <span style={{fontWeight: 400}}>
                                      Nguồn lực chín(Key Resources)
                                    </span>
                                  </li>
                                </ul>
                                <p>
                                  <span style={{fontWeight: 400}}>
                                    là những tài sản quan trọng nhất cần thiết
                                    để cung cấp và cung cấp các yếu tố được mô
                                    tả trước đó.
                                  </span>
                                </p>
                                <ul>
                                  <li style={{fontWeight: 400}} aria-level={1}>
                                    <span style={{fontWeight: 400}}>
                                      Hợp tác với nhà cung cấp, đối tác, mạng
                                      lưới và hệ sinh thá(Key Parnerts)
                                    </span>
                                  </li>
                                </ul>
                                <p>
                                  <span style={{fontWeight: 400}}>
                                    cho thấy mạng lưới các nhà cung cấp và đối
                                    tác mang lại các nguồn lực và hoạt động bên
                                    ngoài.
                                  </span>
                                </p>
                                <ul>
                                  <li style={{fontWeight: 400}} aria-level={1}>
                                    <span style={{fontWeight: 400}}>
                                      Cơ cấu chi phí(Cost Structure)
                                    </span>
                                  </li>
                                </ul>
                              </div>
                              <div>
                                mô tả tất cả các chi phí phát sinh để vận hành
                                một mô hình kinh doanh.
                              </div>
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

        <Sidebar params={params} chapter={5} />
      </div>
    </Fragment>
  )
}

export default PartTwoLessonFive
