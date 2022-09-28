import React, {useContext, useState} from 'react'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col,
} from 'reactstrap'
import classnames from 'classnames'
import {Search} from 'react-feather'
import {Link} from 'react-router-dom'
import ContentLesson from '../lessons/ContentLesson'
import {LessonContext} from '../lessons/Lesson'
import QuizCourse from './quiz-course/QuizCourse.component'
import QALesson from '../lessons/QALesson'
import Announcement from './announcement/Announcement.component'
const InfoCourse = ({idCourse}) => {
  const [active, setActive] = useState('1')

  const {statusContentCourse, isExtraSmall, params} = useContext(LessonContext)

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <div className="views">
            <Nav pills>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: active === '1',
                  })}
                  onClick={() => {
                    toggle('1')
                  }}
                >
                  <Search size={22} />
                </NavLink>
              </NavItem>
              {isExtraSmall ? (
                <NavItem>
                  <NavLink
                    className={classnames(
                      {
                        active: active === '2',
                      },
                      'font-weight-bold font-size-18 px-1',
                    )}
                    onClick={() => {
                      toggle('2')
                    }}
                  >
                    Course content
                  </NavLink>
                </NavItem>
              ) : (
                <>
                  {statusContentCourse && (
                    <NavItem>
                      <NavLink
                        className={classnames(
                          {
                            active: active === '2',
                          },
                          'font-weight-bold font-size-18 px-1',
                        )}
                        onClick={() => {
                          toggle('2')
                        }}
                      >
                        Course content
                      </NavLink>
                    </NavItem>
                  )}
                </>
              )}

              <NavItem>
                <NavLink
                  className={classnames(
                    {
                      active: active === '3',
                    },
                    'font-weight-bold font-size-18 px-1',
                  )}
                  onClick={() => {
                    toggle('3')
                  }}
                >
                  Overview
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames(
                    {
                      active: active === '4',
                    },
                    'font-weight-bold font-size-18 px-1',
                  )}
                  onClick={() => {
                    toggle('4')
                  }}
                >
                  Q&A
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames(
                    {
                      active: active === '5',
                    },
                    'font-weight-bold font-size-18 px-1',
                  )}
                  onClick={() => {
                    toggle('5')
                  }}
                >
                  Announcements
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames(
                    {
                      active: active === '6',
                    },
                    'font-weight-bold font-size-18 px-1',
                  )}
                  onClick={() => {
                    toggle('6')
                  }}
                >
                  Quiz
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </CardHeader>
        <CardBody style={{minHeight: '400px'}}>
          <TabContent className="py-50" activeTab={active}>
            <TabPane tabId="1">
              <Row>
                <Col lg={10} sm={12} className="m-auto">
                  <FormGroup>
                    <InputGroup>
                      <Input />
                      <InputGroupAddon addonType="append">
                        <Button.Ripple color="primary">
                          <Search size={15} />{' '}
                        </Button.Ripple>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <div className="search-title text-center my-5 font-weight-bold">
                    <h1>Start a new search</h1>
                    <p>To find lectures or resources</p>
                  </div>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col lg={11} sm={12} className="m-auto font-size-16">
                  <ContentLesson />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="3">
              <Row>
                <Col lg={10} sm={12} className="m-auto font-size-16">
                  <h1 className="font-weight-bold mt-2">About this course</h1>
                  <p className="">
                    Hướng dẫn tìm hiểu, xây dựng và phát triển web app sử dụng
                    ReactJS
                  </p>
                  <hr />
                  <Row>
                    <Col sm={3}>
                      <span>By the numbers</span>
                    </Col>
                    <Col sm={9}>
                      <Row>
                        <Col ms={12} md={6}>
                          <div>
                            <span>Skill level: Beginner Level</span> <br />
                            <span>Students: 48</span> <br />
                            <span>Languages: Vietnamese</span>
                          </div>
                        </Col>
                        <Col ms={12} md={6}>
                          <div>
                            <span>Lectures: 30</span> <br />
                            <span>Video: 1.5 total hours</span>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col sm={3}>
                      <span>Features</span>
                    </Col>
                    <Col sm={9}>
                      <span>
                        Available on <Link to="#">iOS</Link> and{' '}
                        <Link to="#">Android</Link>{' '}
                      </span>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col sm={3}>
                      <span>Description</span>
                    </Col>
                    <Col sm={9}>
                      <span>
                        Trong khoá học này các bạn sẽ được tìm hiểu và tiếp cận
                        với thư viện ReactJS, một thư viện phổ biến hỗ trợ xây
                        dựng các web app do Facebook phát triển. Khoá học này sẽ
                        hướng dẫn các bạn tiếp cận React một cách cơ bản, từ
                        việc thiết lập sử dụng tới việc tạo ra các web component
                        để tái sử dụng và kết hợp tạo ra web app. What you’ll
                        learn hiểu được khái niệm cơ bản về web component và web
                        app tìm hiểu cách thức hoạt động của ReactJS học cách
                        tạo web component với ReactJS tạo một ứng dụng web app
                        đơn giản Are there any course requirements or
                        prerequisites? cần một chiếc máy tính để lập trình có
                        một trình soạn thảo code có kinh nghiệm phát triển web
                        với HTML và CSS có hiểu biết cơ bản về lập trình
                        Javascript Who this course is for: khoá học này dành cho
                        các bạn quan tâm, có hứng thú và muốn tiếp cận phương
                        pháp tạo web component và web app với ReactJS Instructor
                      </span>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="4">
              <QALesson params={params} />
            </TabPane>
            <TabPane tabId="5">
              <Announcement idCourse={idCourse} />
            </TabPane>
            <TabPane tabId="6">
              <QuizCourse />
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </div>
  )
}

export default React.memo(InfoCourse)
