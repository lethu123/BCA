import React, {useState} from 'react'
import {Facebook, Flag, Users} from 'react-feather'
import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap'
import FacebookOfUserPage from './facebook-of-user/FacebookOfUserPage'
import GroupPage from './group/GroupPage'
import FanPage from './fanpage/FanPage'
import FacebookBCAPage from './facebook-bca/FacebookBCAPage'
import logo from 'assets/images/home/logo-icon.png'

const TakeCareOfFacebookCampaign = () => {
  const [activeFb, setActiveFB] = useState('1')

  const toggle = tab => {
    if (activeFb !== tab) {
      setActiveFB(tab)
    }
  }
  return (
    <div style={{backgroundColor: '#fff'}} className="p-5">
      <Nav tabs>
        <NavItem>
          <NavLink
            active={activeFb === '1'}
            onClick={() => {
              toggle('1')
            }}
            style={{border: 'none'}}
          >
            <Facebook className="mr-3" size={20} />
            Facebook cá nhân
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={activeFb === '2'}
            onClick={() => {
              toggle('2')
            }}
            style={{border: 'none'}}
          >
            <Users className="mr-3" size={20} />
            Group
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            active={activeFb === '3'}
            onClick={() => {
              toggle('3')
            }}
            style={{border: 'none'}}
          >
            <Flag className="mr-3" size={20} />
            FanPage
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={activeFb === '4'}
            onClick={() => {
              toggle('4')
            }}
            style={{border: 'none'}}
          >
            <img
              src={logo}
              alt="images"
              className="img-fluid mr-3"
              width="40px"
              height="40px"
            />
            Facebook BCA
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="py-50" activeTab={activeFb}>
        <TabPane tabId="1">
          <FacebookOfUserPage />
        </TabPane>
        <TabPane tabId="2">
          <GroupPage />
        </TabPane>
        <TabPane tabId="3">
          <FanPage />
        </TabPane>
        <TabPane tabId="4">
          <FacebookBCAPage />
        </TabPane>
      </TabContent>
    </div>
  )
}

export default TakeCareOfFacebookCampaign
