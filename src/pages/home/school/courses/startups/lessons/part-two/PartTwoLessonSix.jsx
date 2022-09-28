import {Fragment, useState, useEffect} from 'react'
import axios from 'axios'
import classnames from 'classnames'
import Sidebar from '../BlogSidebar'
import Avatar from '@core/components/avatar'
import Breadcrumbs from '@core/components/breadcrumbs'
import {Row, Col, Card, CardBody, CardImg, Badge, Media} from 'reactstrap'

import '@core/scss/base/pages/page-blog.scss'

import startupSearchingImg from 'assets/images/myCourse/MVP.jpg'

const PartTwoLessonSix = props => {
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
        breadCrumbActive="Thiết kế sản phẩm kinh doanh tối thiểu MVP và Prototype, Demo."
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
                        Chương 6: Thiết kế sản phẩm kinh doanh tối thiểu MVP và
                        Prototype, Demo.
                      </h1>

                      <div className="my-1 py-25">{renderTags()}</div>
                      <div>
                        <ul>
                          <li style={{fontWeight: 400}} aria-level={1}>
                            <span style={{fontWeight: 400}}>
                              Kiểm chứng giá trị cốt lõi
                            </span>
                          </li>
                          <li style={{fontWeight: 400}} aria-level={1}>
                            <span style={{fontWeight: 400}}>
                              Thiết kế tính năng sản phẩm dựa trên giá trị cốt
                              lõi
                            </span>
                          </li>
                          <li style={{fontWeight: 400}} aria-level={1}>
                            <span style={{fontWeight: 400}}>
                              Xác định sản phẩm kinh doanh tối thiểu MVP
                            </span>
                          </li>
                          <li style={{fontWeight: 400}} aria-level={1}>
                            <span style={{fontWeight: 400}}>
                              Xây dựng Prototype, Demo
                            </span>
                          </li>
                          <li style={{fontWeight: 400}} aria-level={1}>
                            <span style={{fontWeight: 400}}>
                              Kiểm chứng Prototype, Demo với khách hàng
                            </span>
                          </li>
                          <li style={{fontWeight: 400}} aria-level={1}>
                            <span style={{fontWeight: 400}}>
                              Lập kế hoạch phát triển sản phẩm tối thiểu
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

        <Sidebar params={props.params} chapter={6} />
      </div>
    </Fragment>
  )
}

export default PartTwoLessonSix
