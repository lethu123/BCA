import {
  Card,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from 'reactstrap'
import {useState} from 'react'

// ** component
import MyGroup from './MyGroupWS'
import GroupJoined from './GroupJoinedWS'

const StudyScore = () => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
    setActive(tab)
  }

  return (
    <Card>
      <CardBody>
        <Nav tabs>
          <NavItem>
            <NavLink
              active={active === '1'}
              onClick={() => {
                toggle('1')
              }}
              className="border-0"
            >
              nhóm đã tham gia
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              active={active === '2'}
              onClick={() => {
                toggle('2')
              }}
              className="border-0"
            >
              Quản lý nhóm
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent className="py-50" activeTab={active}>
          <TabPane tabId="1" className="p-0">
            <MyGroup />
          </TabPane>
          <TabPane tabId="2" className="p-0">
            <GroupJoined />
          </TabPane>
        </TabContent>
      </CardBody>
    </Card>
  )
}

export default StudyScore
