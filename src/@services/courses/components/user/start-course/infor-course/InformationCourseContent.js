import React, {useContext, useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router'
import {
  Card,
  CardBody,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap'

// *** Components
import Introduction from './introduction/Introduction'
import Test from './test/Test'
import Instructor from './instructor/Instructor'
import QAndA from './qanda/QAndA'
import EnvaluateCourse from './envaluate/EnvaluateCourse'
import NotificationCourse from './notification/NotificationCourse'
import {CourseContext} from '..'

const InformationCourseContent = () => {
  const {slug} = useContext(CourseContext)

  const [active, setActive] = useState('1')
  const {type} = useParams()
  const history = useHistory()

  const routeDataCenter = [
    {
      id: '1',
      name: 'Giới thiệu',
      path: 'introduction',
      component: <Introduction />,
    },
    {
      id: '2',
      name: 'Bài tập kiểm tra',
      path: 'test',
      component: <Test />,
    },
    {
      id: '3',
      name: 'Người hướng dẫn',
      path: 'instructor',
      component: <Instructor />,
    },
    {
      id: '4',
      name: 'Thông báo',
      path: 'notification',
      component: <NotificationCourse />,
    },
    {
      id: '5',
      name: 'Hỏi đáp',
      path: 'q-and-a',
      component: <QAndA />,
    },
    {
      id: '6',
      name: 'Đánh giá',
      path: 'rating',
      component: <EnvaluateCourse />,
    },
  ]

  useEffect(() => {
    if (type) {
      routeDataCenter.map(item => type === item.path && setActive(item.id))
    }
  }, [type])

  return (
    <div>
      <hr />
      <Nav tabs className="d-block d-sm-flex">
        {routeDataCenter.length > 0 &&
          routeDataCenter.map(ele => (
            <NavItem key={ele.id}>
              <NavLink
                key={ele.id}
                active={active === ele.id}
                onClick={() => {
                  history.push(`/my-course/start/${slug}/${ele.path}`)
                }}
                style={{border: 'none', justifyContent: 'start'}}
              >
                {ele.name}
              </NavLink>
            </NavItem>
          ))}
      </Nav>
      <TabContent className="py-50 mt-3" activeTab={active}>
        {routeDataCenter.length > 0 &&
          routeDataCenter.map(ele => (
            <TabPane tabId={ele.id} key={ele.id}>
              {ele.component}
            </TabPane>
          ))}
      </TabContent>
    </div>
  )
}

export default InformationCourseContent
