import {Fragment, useState, useEffect} from 'react'
import axios from 'axios'
import classnames from 'classnames'
import Sidebar from '../BlogSidebar'

import Breadcrumbs from '@core/components/breadcrumbs'
import {Row, Col, Card, CardBody, CardImg, Badge} from 'reactstrap'

import '@core/scss/base/pages/page-blog.scss'

import startupTeamWork from 'assets/images/myCourse/teamWork.jpg'

const PartOneLessonOne = props => {
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
        breadCrumbParent3="Phần 1 Khám phá Cơ hội Khởi nghiệp"
        breadCrumbParentTo="/hschool/course/start-up"
        breadCrumbParent2To="/hschool/course/start-up"
        breadCrumbParent3To={`/hschool/course/start-up/${props.params.name_course}`}
        breadCrumbActive="Xây dựng nhóm làm việc hiệu quả"
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
                      <h1>Chương 1: Xây dựng nhóm làm việc hiệu quả</h1>

                      <div className="my-1 py-25">{renderTags()}</div>
                      <div> Chưa có nội dung</div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            ) : null}
          </div>
        </div>

        <Sidebar params={props.params} chapter={1} />
      </div>
    </Fragment>
  )
}

export default PartOneLessonOne
