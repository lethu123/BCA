import React, {useState} from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap'
import moment from 'moment'
import {Link, useParams} from 'react-router-dom'

import Rating from 'react-rating'
import {MapPin, Star, Clock} from 'react-feather'
import AboutCourseStartup from './AboutCourseStartup'
import CourseDetailRight from './CourseDetailRight'
import ProgramCourseDetail from './ProgramCourseDetail'
import TeacherCourseDetail from './TeacherCourseDetail'
import RatingCourseDetail from './RatingCourseDetail'
import QACourseDetail from './Q&ACourseDetail'
import SurveyCourseDetail from './SurveyCourseDetail'
import CourseHot from './CourseHot'
import {CourseQuery} from '@services/courses'

// ** style
import '@core/scss/base/pages/page-knowledge-base.scss'
import '../CourseStartup.style.scss'
import '@core/scss/react/libs/charts/apex-charts.scss'

const DetailCourseStartup = () => {
  const [active, setActive] = useState('1')
  const {id} = useParams()
  const {data: courseInfo} = CourseQuery.useInfoCourse(id)

  console.log('courseInfo', courseInfo)
  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  if (!courseInfo) return null

  const {data} = courseInfo
  return (
    <React.Fragment>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/home"> Trang chủ </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/hschool/course/start-up"> BCA Traning </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <span> {data.title} </span>
        </BreadcrumbItem>
      </Breadcrumb>
      <Row className="mt-1">
        <Col lg="">
          <div
            style={{backgroundColor: '#149d99'}}
            className="rounded p-2 text-white"
          >
            <p>BCA Traning</p>
            <h2 className="text-white"> {data.title} </h2>
            <div className="d-flex align-items-center">
              <Rating
                emptySymbol={<Star size={20} fill="#babfc7" stroke="#babfc7" />}
                fullSymbol={<Star size={20} fill="#ffa800" stroke="#ffa800" />}
                readonly
                initialRating={3.6}
                direction={'ltr'}
              />
              <p className="mb-0 ml-2">3.6 sao</p>
            </div>

            <div className="mt-3">
              <div className="d-flex align-items-center mb-1">
                <Clock className="mr-1" size={20} />
                <p className="mb-0">
                  Ngày bắt đầu học{' '}
                  {moment(data.start_date).format('DD-MM-YYYY')}
                </p>
              </div>
              <div className="d-flex align-items-center mb-1">
                <Clock className="mr-1" size={20} />
                <p className="mb-0">{data.schedule} </p>
              </div>
              {!data.venue_address &&
              !data.venue_commune &&
              !data.venue_district &&
              !data.venue_city ? (
                ''
              ) : (
                <div className="d-flex align-items-center mb-1">
                  <MapPin className="mr-1" size={20} />
                  <p className="mb-0">
                    {data.venue_address} {data.venue_commune}{' '}
                    {data.venue_district} {data.venue_city}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="mt-3">
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={active === '1'}
                  onClick={() => {
                    toggle('1')
                  }}
                  style={{border: 'none'}}
                >
                  Tổng quan
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink
                  active={active === '2'}
                  onClick={() => {
                    toggle('2')
                  }}
                  style={{border: 'none'}}
                >
                  Chương trình
                </NavLink>
              </NavItem> */}

              <NavItem>
                <NavLink
                  active={active === '3'}
                  onClick={() => {
                    toggle('3')
                  }}
                  style={{border: 'none'}}
                >
                  Giảng viên
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink
                  active={active === '4'}
                  onClick={() => {
                    toggle('4')
                  }}
                  style={{border: 'none'}}
                >
                  Đánh giá
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={active === '5'}
                  onClick={() => {
                    toggle('5')
                  }}
                  style={{border: 'none'}}
                >
                  Hỏi đáp
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={active === '6'}
                  onClick={() => {
                    toggle('6')
                  }}
                  style={{border: 'none'}}
                >
                  Khảo sát
                </NavLink>
              </NavItem> */}
            </Nav>
            <TabContent className="py-50" activeTab={active}>
              <TabPane tabId="1">
                <AboutCourseStartup info={data} />
              </TabPane>
              <TabPane tabId="2">
                <ProgramCourseDetail />
              </TabPane>
              <TabPane tabId="3">
                <TeacherCourseDetail info={data?.instructors} />
              </TabPane>
              <TabPane tabId="4">
                <RatingCourseDetail />
              </TabPane>
              <TabPane tabId="5">
                <QACourseDetail />
              </TabPane>
              <TabPane tabId="6">
                <SurveyCourseDetail />
              </TabPane>
            </TabContent>
          </div>
        </Col>
        <Col lg="5">
          <CourseDetailRight info={data} />
        </Col>
      </Row>
      <CourseHot />
    </React.Fragment>
  )
}

export default DetailCourseStartup
