import React, {useState} from 'react'
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap'

// **component
import MyReport from './reportCourse/ReportCourse.component'
import ReportLecturer from './report-lecturer/ReportLecturer.component'

const ReportDashboardMain = () => {
  const [activeDetail, setActiveDetail] = useState('1')

  const toggleDetail = tab => {
    if (activeDetail !== tab) {
      setActiveDetail(tab)
    }
  }
  return (
    // <div>
    //   <CardHeader>
    //     <Nav
    //       tabs
    //       className="justify-content-left navInterelationHypotheses nav-justified"
    //       style={{position: 'relative'}}
    //     >
    //       <NavItem>
    //         <NavLink
    //           className={classnames({
    //             active: activeDetail === '1',
    //           })}
    //           onClick={() => {
    //             toggleDetail('1')
    //           }}
    //         >
    //           Report Course
    //         </NavLink>
    //       </NavItem>
    //       <NavItem>
    //         <NavLink
    //           className={classnames({
    //             active: activeDetail === '2',
    //           })}
    //           onClick={() => {
    //             toggleDetail('2')
    //           }}
    //         >
    //           Report Lecturer
    //         </NavLink>
    //       </NavItem>
    //     </Nav>
    //   </CardHeader>
    //   <CardBody className="rdt_Wrapper">
    //     <TabContent activeTab={activeDetail}>
    //       <TabPane tabId="1">
    //         <MyReport />
    //       </TabPane>
    //       <TabPane tabId="2">
    //         <ReportLecturer />
    //       </TabPane>
    //     </TabContent>
    //   </CardBody>
    // </div>

    <React.Fragment>
      <Nav className="justify-content-center" tabs>
        <NavItem>
          <NavLink
            active={activeDetail === '1'}
            onClick={() => {
              toggleDetail('1')
            }}
          >
            Report Course
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={activeDetail === '2'}
            onClick={() => {
              toggleDetail('2')
            }}
          >
            Report Lecturer
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="py-50" activeTab={activeDetail}>
        <TabPane tabId="1">
          <MyReport />
        </TabPane>
        <TabPane tabId="2">
          <ReportLecturer />
        </TabPane>
      </TabContent>
    </React.Fragment>
  )
}

export default ReportDashboardMain
