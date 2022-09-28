// ** React Imports
import {useState} from 'react'

// ** Third Party Components

import {TabPane, TabContent, Nav, NavItem, NavLink} from 'reactstrap'

// ** Custom Components
import ApplyForTeaching from './ApplyForTeaching.component'
import InviteForTeaching from './InviteForTeaching.component'

const MyRequestTeacher = () => {
  // ** State
  const [active, setActive] = useState('1')

  const toggle = tab => {
    setActive(tab)
  }

  return (
    <div>
      <hr />
      <Nav tabs fill>
        <NavItem>
          <NavLink
            active={active === '1'}
            onClick={() => {
              toggle('1')
            }}
          >
            Apply for Teaching
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '2'}
            onClick={() => {
              toggle('2')
            }}
          >
            Invite for Teaching
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="py-50" activeTab={active}>
        <TabPane tabId="1">
          <ApplyForTeaching />
        </TabPane>
        <TabPane tabId="2">
          <InviteForTeaching />
        </TabPane>
      </TabContent>
    </div>
  )
}

export default MyRequestTeacher
