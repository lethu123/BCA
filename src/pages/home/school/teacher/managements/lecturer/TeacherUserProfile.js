import React, {useState} from 'react'
import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap'

// ** Component
import MyCourseTeacher from './my-course/MyCourseTeacher.component'
import MyRequestTeacher from './my-request/MyRequestTeacher.component'
import ReviewOfStudent from './review-student/ReviewOfStudent.component'

const TeacherUserProfile = () => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
    setActive(tab)
  }
  return (
    <React.Fragment>
      <Nav pills className="justify-content-center nav-pill-primary">
        <NavItem>
          <NavLink
            active={active === '1'}
            onClick={() => {
              toggle('1')
            }}
          >
            My courses
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '2'}
            onClick={() => {
              toggle('2')
            }}
          >
            My request
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            active={active === '3'}
            onClick={() => {
              toggle('3')
            }}
          >
            Review
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="py-50" activeTab={active}>
        <TabPane tabId="1">
          <MyCourseTeacher />
        </TabPane>
        <TabPane tabId="2">
          <MyRequestTeacher />
        </TabPane>
        <TabPane tabId="3">
          <ReviewOfStudent />
        </TabPane>
      </TabContent>
    </React.Fragment>
  )
}
export default TeacherUserProfile
