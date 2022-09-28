import {Fragment, useState, useEffect} from 'react'
import axios from 'axios'
import classnames from 'classnames'
import Sidebar from '../BlogSidebar'
import Breadcrumbs from '@core/components/breadcrumbs'
import {Row, Col, Card, CardBody, CardImg, Badge} from 'reactstrap'

import '@core/scss/base/pages/page-blog.scss'

import startupIdeation from 'assets/images/myCourse/global.jpg'

const PartTwoLessonSeven = props => {
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
        breadCrumbParent3To={`/hschool/course/start-up/${props.params.name_course}`}
        breadCrumbActive="Phát triển sản phẩm mở rộng"
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
                      <h1>Chương 7: Phát triển sản phẩm mở rộng</h1>

                      <div className="my-1 py-25">{renderTags()}</div>

                      <div>
                        <ul>
                          <li style={{fontWeight: 400}} aria-level={1}>
                            <span style={{fontWeight: 400}}>
                              Phát triển sản phẩm tối thiểu
                            </span>
                          </li>
                          <li style={{fontWeight: 400}} aria-level={1}>
                            <span style={{fontWeight: 400}}>
                              Xác định tính năng sản phẩm theo định vị giá trị
                              đã được kiểm chứng
                            </span>
                          </li>
                          <li style={{fontWeight: 400}} aria-level={1}>
                            <span style={{fontWeight: 400}}>
                              Lượng hoá thời gian(độ phức tạp), chi phí phát
                              triển các tính năng sản phẩm
                            </span>
                          </li>
                          <li style={{fontWeight: 400}} aria-level={1}>
                            <span style={{fontWeight: 400}}>
                              Xác định ưu tiên các tính năng sản phẩm
                            </span>
                          </li>
                          <li style={{fontWeight: 400}} aria-level={1}>
                            <span style={{fontWeight: 400}}>
                              Lập kế hoạch phát triển sản phẩm mở rộng
                            </span>
                          </li>
                          <li style={{fontWeight: 400}} aria-level={1}>
                            <span style={{fontWeight: 400}}>
                              Quản lý dự án phát triển sản phẩm mới
                            </span>
                          </li>
                          <li style={{fontWeight: 400}} aria-level={1}>
                            <span style={{fontWeight: 400}}>
                              Quản lý vọng đời sản phẩm
                            </span>
                          </li>
                        </ul>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            ) : null}
          </div>
        </div>

        <Sidebar params={props.params} chapter={7} />
      </div>
    </Fragment>
  )
}

export default PartTwoLessonSeven
