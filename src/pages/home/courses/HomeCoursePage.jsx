import React, {useState} from 'react'
import {ArrowLeftCircle} from 'react-feather'
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap'
import {useHistory} from 'react-router-dom'

// ** component
import {BasicInfo, Notifications, ContentCourseCenter} from '@services/courses'

// ** assets
import './Custom.style.scss'
import honor1 from 'assets/images/home/honor1.png'
import {FilterNotification} from '@services/courses'

const HomeCoursePage = () => {
  const [active, setActive] = useState('1')
  const [isCompleted, setIsCompleted] = useState(false)
  const history = useHistory()

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  return (
    <div>
      <Card>
        <CardHeader className="border-bottom">
          <div className="d-flex align-items-center ">
            <ArrowLeftCircle className="text-primary" size="50" />
            <div className="ml-4" style={{cursor: 'default'}}>
              <p className="mb-2">
                <Badge
                  className="text-white"
                  style={{borderRadius: '15px', background: '#FF4D13'}}
                >
                  Khóa học
                </Badge>
              </p>
              <h3 className="mb-0 text-primary">21 Ngày xây dựng niền tin</h3>
            </div>
          </div>
          {isCompleted ? (
            <Button.Ripple className="round" color="primary" type="button">
              Đã hoàn thành
            </Button.Ripple>
          ) : (
            <div>
              <Button.Ripple
                className="round"
                color="info"
                onClick={() => history.push('/home/BCA-khoi-nghiep/test')}
              >
                Làm Bài kiểm tra
              </Button.Ripple>
              <Button.Ripple
                className="round ml-3"
                color="primary"
                type="button"
              >
                Chưa hoàn thành
              </Button.Ripple>
            </div>
          )}
        </CardHeader>
        <CardBody className="pt-5">
          <Nav tabs>
            <NavItem>
              <NavLink
                className="border-0"
                active={active === '1'}
                onClick={() => {
                  toggle('1')
                }}
              >
                Thông tin cơ bản
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="border-0"
                active={active === '2'}
                onClick={() => {
                  toggle('2')
                }}
              >
                Nội dung khóa học
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="border-0"
                active={active === '3'}
                onClick={() => {
                  toggle('3')
                }}
              >
                Thông báo
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="border-0"
                active={active === '4'}
                onClick={() => {
                  toggle('4')
                }}
              >
                Chứng nhận
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent className="py-50" activeTab={active}>
            <TabPane tabId="1">
              <BasicInfo />
            </TabPane>
            <TabPane tabId="2">
              <ContentCourseCenter />
            </TabPane>
            <TabPane tabId="3">
              <div className="mt-5">
                <FilterNotification />
                <Notifications />
              </div>
            </TabPane>
            <TabPane tabId="4">
              <div className="mt-5">
                <div className="mb-3">
                  <h3 className="text-primary font-weight-bolder">
                    Chứng nhận
                  </h3>
                  {!isCompleted && (
                    <span className="text-danger">
                      Bạn chưa nhận được chứng nhận này
                    </span>
                  )}
                </div>
                <Row>
                  <Col lg="7" className="m-auto">
                    <img className="w-100" src={honor1} alt="" />
                  </Col>
                </Row>
              </div>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </div>
  )
}

export default HomeCoursePage
