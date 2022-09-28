import React, {useState} from 'react'
import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap'

// ** Component
import CourseStudent from './my-course/MyCourseStudent.component'
import HistoryEnrollCourse from './my-request/HistoryEnrollCourse.component'
import MyCourseSaveInterest from './save-interest/MyCourseSaveInterest.component'

const CourseUserProfile = () => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
    setActive(tab)
  }
  return (
    <React.Fragment>
      <Nav pills className="justify-content-center">
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
            History Enroll Course
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            active={active === '3'}
            onClick={() => {
              toggle('3')
            }}
          >
            Save / Interest
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="py-50" activeTab={active}>
        <TabPane tabId="1">
          <CourseStudent />
        </TabPane>
        <TabPane tabId="2">
          <HistoryEnrollCourse />
        </TabPane>
        <TabPane tabId="3">
          <MyCourseSaveInterest />
        </TabPane>
      </TabContent>
    </React.Fragment>
  )
}
export default CourseUserProfile
