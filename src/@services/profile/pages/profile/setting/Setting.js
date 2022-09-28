import React, {useState} from 'react'
import {Bell, Lock, Share2, User} from 'react-feather'
import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap'
// *** Components
import Overview from './Overview'
import ChangePassword from './ChangePassword'
import LinkSocial from './LinkSocial'
import SettingNotification from './SettingNotification'
import {UserQuery} from '@services/profile'

const Setting = ({user}) => {
  const [active, setActive] = useState('1')
  const {data: dataSocial} = UserQuery.useGetSocialLinkUserProfile(user?.uid)
  const {data: infoPassWord} = UserQuery.useGetInfoToChangePasswordUser()

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  return (
    <div className="nav-vertical">
      <Nav tabs className="nav-left">
        <NavItem>
          <NavLink
            active={active === '1'}
            onClick={() => {
              toggle('1')
            }}
            style={{border: 'none', marginBottom: 18}}
          >
            <User size={17} />
            Tổng quan
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '2'}
            onClick={() => {
              toggle('2')
            }}
            style={{border: 'none', marginBottom: 18}}
          >
            <Lock size={17} />
            Thay đổi mật khẩu
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '3'}
            onClick={() => {
              toggle('3')
            }}
            style={{border: 'none', marginBottom: 18}}
          >
            <Share2 size={17} />
            Liên kết mạng xã hội
          </NavLink>
        </NavItem>
        {/* <NavItem>
          <NavLink
            active={active === '4'}
            onClick={() => {
              toggle('4')
            }}
            style={{border: 'none', marginBottom: 18}}
          >
            <Bell size={17} />
            Cài đặt thông báo
          </NavLink>
        </NavItem> */}
      </Nav>
      <TabContent activeTab={active}>
        <TabPane tabId="1">
          <Overview user={user} />
        </TabPane>
        <TabPane tabId="2">
          <ChangePassword data={infoPassWord || null} />
        </TabPane>
        <TabPane tabId="3">
          <LinkSocial data={dataSocial?.data || null} />
        </TabPane>
        {/* <TabPane tabId="4">
          <SettingNotification />
        </TabPane> */}
      </TabContent>
    </div>
  )
}

export default Setting
