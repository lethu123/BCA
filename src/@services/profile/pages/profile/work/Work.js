import React, {useState} from 'react'
import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap'
// *** Components
import CalendarWork from './calendarWork/CalendarWork'
import TableNotification from './notification/TableNotification'

const WorkMain = () => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            active={active === '1'}
            onClick={() => {
              toggle('1')
            }}
            style={{border: 'none', backgroundColor: 'transparent'}}
          >
            Lịch công việc
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '2'}
            onClick={() => {
              toggle('2')
            }}
            style={{border: 'none', backgroundColor: 'transparent'}}
          >
            Thông báo
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="py-50" activeTab={active}>
        <TabPane tabId="1">
          <CalendarWork />
        </TabPane>
        <TabPane tabId="2">
          <TableNotification />
        </TabPane>
      </TabContent>
    </div>
  )
}

export default WorkMain
