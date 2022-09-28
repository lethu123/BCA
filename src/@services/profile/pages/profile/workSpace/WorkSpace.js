import React, {useState} from 'react'
import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap'

// ** component
import CourseWorkspace from '@services/profile/pages/courses/CourseWorkspace'
import CandidateDatapage from './candidate-data-ws/CandidateDataPage'

import DataTableCustomerLead from './customer-lead'

const NavTabData = [
  {
    id: '1',
    navName: 'Dữ liệu ứng viên',
    tabComponent: <CandidateDatapage />,
  },

  {
    id: '3',
    navName: 'Khóa học',
    tabComponent: <CourseWorkspace />,
  },

  {
    id: '7',
    navName: 'Khách hàng TN',
    tabComponent: <DataTableCustomerLead />,
  },
]

const WorkSpace = () => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  return (
    <div className=" row" style={{backgroundColor: 'white', padding: 20}}>
      <div className="col-lg-2">
        <Nav pills vertical>
          {NavTabData.map(d => (
            <NavItem key={d.id}>
              <NavLink
                active={active === d.id}
                onClick={() => {
                  toggle(d.id)
                }}
              >
                {d.navName}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </div>
      <div className="col-lg-10">
        <TabContent activeTab={active}>
          {NavTabData.map(d => (
            <TabPane tabId={d.id} key={d.id}>
              {d.tabComponent}
            </TabPane>
          ))}
        </TabContent>
      </div>
    </div>
  )
}

export default WorkSpace
