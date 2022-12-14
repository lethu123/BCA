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
                    H?????ng d???n t??m hi???u, x??y d???ng v?? ph??t tri???n web app s??? d???ng
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
                        Trong kho?? h???c n??y c??c b???n s??? ???????c t??m hi???u v?? ti???p c???n
                        v???i th?? vi???n ReactJS, m???t th?? vi???n ph??? bi???n h??? tr??? x??y
                        d???ng c??c web app do Facebook ph??t tri???n. Kho?? h???c n??y s???
                        h?????ng d???n c??c b???n ti???p c???n React m???t c??ch c?? b???n, t???
                        vi???c thi???t l???p s??? d???ng t???i vi???c t???o ra c??c web component
                        ????? t??i s??? d???ng v?? k???t h???p t???o ra web app. What you???ll
                        learn hi???u ???????c kh??i ni???m c?? b???n v??? web component v?? web
                        app t??m hi???u c??ch th???c ho???t ?????ng c???a ReactJS h???c c??ch
                        t???o web component v???i ReactJS t???o m???t ???ng d???ng web app
                        ????n gi???n Are there any course requirements or
                        prerequisites? c???n m???t chi???c m??y t??nh ????? l???p tr??nh c??
                        m???t tr??nh so???n th???o code c?? kinh nghi???m ph??t tri???n web
                        v???i HTML v?? CSS c?? hi???u bi???t c?? b???n v??? l???p tr??nh
                        Javascript Who this course is for: kho?? h???c n??y d??nh cho
                        c??c b???n quan t??m, c?? h???ng th?? v?? mu???n ti???p c???n ph????ng
                        ph??p t???o web component v?? web app v???i ReactJS Instructor
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
