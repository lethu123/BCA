import React, {useState} from 'react'
import {Share2, Users} from 'react-feather'
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap'
import {getUserData} from 'utility/Utils'
// *** component
import TabMemberGroup from './TabMemberGroup'
import TabRequestJoinGroup from '@services/group/components/datatable/TabRequestedJoinGroup'
import TabInviteJoinGroup from '@services/group/components/datatable/TabInvitedJoinGroup'

const MembersGroup = ({groupId, owner, is_member}) => {
  const [active, setActive] = useState('1')
  const user = getUserData()

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  return (
    <div>
      {user?.uid === owner ? (
        <div className="nav-vertical">
          <Nav pills className="">
            <NavItem>
              <NavLink
                active={active === '1'}
                onClick={() => {
                  toggle('1')
                }}
                style={{border: 'none', marginBottom: 18}}
              >
                <Users size={17} />
                Danh sách thành viên
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
                <Share2 size={17} />
                Yêu cầu tham gia
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
                Đã gửi lời mời
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={active}>
            <TabPane tabId="1">
              <TabMemberGroup owner={owner} groupId={groupId} />
            </TabPane>

            <TabPane tabId="2">
              <TabRequestJoinGroup groupId={groupId} />
            </TabPane>
            <TabPane tabId="3">
              <TabInviteJoinGroup groupId={groupId} />
            </TabPane>
          </TabContent>
        </div>
      ) : (
        <TabMemberGroup owner={owner} groupId={groupId} isMember={is_member} />
      )}
    </div>
  )
}

export default MembersGroup
