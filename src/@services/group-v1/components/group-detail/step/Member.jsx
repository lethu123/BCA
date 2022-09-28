import {useState} from 'react'
import {
  Card,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from 'reactstrap'
import AdministratorLists from '../member/AdministratorLists'
import MemberLists from '../member/MemberLists'
const renderMemberStep = [
  {
    id: '1',
    item: <AdministratorLists />,
  },
  {
    id: '2',
    item: <MemberLists />,
  },
]
const Member = () => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  return (
    <>
      <Card>
        <CardBody>
          <Nav className="mb-0" pills>
            <NavItem className="me-2">
              <NavLink
                className="nav-link-custom title-16-700-24"
                active={active === '1'}
                onClick={() => {
                  toggle('1')
                }}
              >
                AdministratorLists
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link-custom title-16-700-24"
                active={active === '2'}
                onClick={() => {
                  toggle('2')
                }}
              >
                MemberLists
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent className="mt-5" activeTab={active}>
            {renderMemberStep.map(item => (
              <TabPane key={item.id} tabId={item.id}>
                {item.item}
              </TabPane>
            ))}
          </TabContent>
        </CardBody>
      </Card>
    </>
  )
}

export default Member
