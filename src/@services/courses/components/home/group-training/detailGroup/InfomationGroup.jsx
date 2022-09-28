import React, {useState} from 'react'
import {Edit, MoreVertical, UserPlus} from 'react-feather'
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  Row,
  Col,
} from 'reactstrap'
// *** Components
import Post from './Post'

const InfomationGroup = () => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  return (
    <React.Fragment>
      <Row>
        <Col md="7" lg="8">
          <Nav tabs>
            <NavItem>
              <NavLink
                active={active === '1'}
                onClick={() => {
                  toggle('1')
                }}
                style={{border: 'none', backgroundColor: 'transparent'}}
              >
                Giới thiệu
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
                Bài viết
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                active={active === '3'}
                onClick={() => {
                  toggle('3')
                }}
                style={{border: 'none', backgroundColor: 'transparent'}}
              >
                Chat
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
        <Col md="5" lg="4" className="mt-4 mt-md-0">
          <div className="d-flex align-items-center justify-content-end">
            <Button.Ripple color="danger">
              {' '}
              <UserPlus size={16} color="white" className="mr-2" />
              Thêm người
            </Button.Ripple>
            <Button.Ripple color="info" className="ml-4">
              {' '}
              <Edit size={16} color="white" className="mr-2" /> Chỉnh sửa
            </Button.Ripple>
            <MoreVertical className="cursor-pointer" />
          </div>
        </Col>
      </Row>

      <TabContent className="py-50" activeTab={active}>
        <TabPane tabId="1">Updating</TabPane>
        <TabPane tabId="2">
          <Post />
        </TabPane>
        <TabPane tabId="3">Updating</TabPane>
      </TabContent>
    </React.Fragment>
  )
}
export default InfomationGroup
