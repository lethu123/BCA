import React, {useState} from 'react'
import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap'

// component
import {
  AllCourseWorkspace,
  BookmarkCourseWorkspace,
  LikeCourseWorkspace,
} from '@services/courses'

//*** assets */
import './Custom.style.scss'

const CourseWorkspace = () => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  return (
    <div>
      <Nav tabs className="border-0">
        <NavItem>
          <NavLink
            active={active === '1'}
            onClick={() => {
              toggle('1')
            }}
            style={{border: 'none'}}
          >
            Tất cả khóa học
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '2'}
            onClick={() => {
              toggle('2')
            }}
            style={{border: 'none'}}
          >
            Yêu thích
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            active={active === '3'}
            onClick={() => {
              toggle('3')
            }}
            style={{border: 'none'}}
          >
            Lưu trữ
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="py-50" activeTab={active}>
        <TabPane tabId="1">
          <AllCourseWorkspace />
        </TabPane>
        <TabPane tabId="2">
          <LikeCourseWorkspace />
        </TabPane>
        <TabPane tabId="3">
          <BookmarkCourseWorkspace />
        </TabPane>
      </TabContent>
    </div>
  )
}

export default CourseWorkspace
