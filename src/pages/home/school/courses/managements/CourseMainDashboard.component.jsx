import React, {useEffect, useState} from 'react'

// ** component
import CourseDashboardStatistics from './statistics/CourseDashboardStatistics.component'
import CategoriesCourseDashboardMain from './categories/CategoriesCourseDashboardMain.component'
import InstructorsCourseDashboardMain from './instructors/InstructorsCourseDashboardMain.component'
import EnrolmentCourseDashboard from './enrolment/EnrolmentCourseDashboard.component'
import StudentCourseDashboardMain from './students/StudentCourseDashboardMain.component'
import ReportDashboardMain from './report/ReportDashboardMain.component'
import CoursesManagement from './myCourse/CoursesManagement.component'

// ** assets
// import '@core/scss/base/pages/app-ecommerce-custom.scss'

// ** 3rd compoennt
import {Button, Card, CardBody, CardHeader, Col, Row} from 'reactstrap'
import {useHistory, useLocation} from 'react-router-dom'
import {
  AlignJustify,
  BookOpen,
  Briefcase,
  DollarSign,
  Flag,
  GitPullRequest,
  Users,
} from 'react-feather'

const routeDashboard = {
  0: {path: 'dashboard', name: 'Dashboard', icon: <AlignJustify size={14} />},
  1: {path: 'categories', name: 'Category', icon: <GitPullRequest size={14} />},
  2: {path: 'mycourses', name: 'Course', icon: <Briefcase size={14} />},
  3: {path: 'instructors', name: 'Lecturer', icon: <BookOpen size={14} />},
  4: {path: 'students', name: 'Student', icon: <Users size={14} />},
  5: {path: 'enrolments', name: 'Enrolment', icon: <DollarSign size={14} />},
  6: {path: 'reports', name: 'Reports', icon: <Flag size={14} />},
}

const CourseMainDashboard = ({profileData}) => {
  const location = useLocation()
  // const [sidebarAdd, setSidebarAdd] = useState(false)
  const [activeMenu, setActiveMenu] = useState(0)

  useEffect(() => {
    const path = location.search.slice(6)
    if (path === 'dashboard') {
      setActiveMenu(0)
    }
    if (path === 'categories') {
      setActiveMenu(1)
    }
    if (path === 'mycourses') {
      setActiveMenu(2)
    }
    if (path === 'instructors') {
      setActiveMenu(3)
    }
    if (path === 'students') {
      setActiveMenu(4)
    }
    if (path === 'enrolments') {
      setActiveMenu(5)
    }
    if (path === 'reports') {
      setActiveMenu(6)
    }
  }, [location])

  const history = useHistory()

  return (
    <div>
      <Card>
        <CardHeader className="justify-content-center mb-1">
          <div className="demo-inline-spacing">
            {Object.keys(routeDashboard).map(key => (
              <Button.Ripple
                key={key}
                color="warning"
                size="sm"
                outline={routeDashboard[key].path !== location.search.slice(6)}
                onClick={() =>
                  history.push(
                    `/user/${profileData.url}/profile/course?page=${routeDashboard[key].path}`,
                  )
                }
              >
                {routeDashboard[key].icon}
                <span className="align-middle ml-25">
                  {routeDashboard[key].name}
                </span>
              </Button.Ripple>
            ))}
          </div>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" style={{minHeight: '100vh'}}>
              {activeMenu === 0 && <CourseDashboardStatistics />}
              {activeMenu === 1 && <CategoriesCourseDashboardMain />}

              {activeMenu === 2 && <CoursesManagement />}

              {activeMenu === 3 && <InstructorsCourseDashboardMain />}
              {activeMenu === 4 && <StudentCourseDashboardMain />}
              {activeMenu === 5 && <EnrolmentCourseDashboard />}
              {activeMenu === 6 && <ReportDashboardMain />}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  )
}

export default CourseMainDashboard
