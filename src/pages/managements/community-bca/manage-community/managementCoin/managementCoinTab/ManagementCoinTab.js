import React, {useState} from 'react'
import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap'

// *** Components
import BcaGiveCoins from '../bcaGiveCoins/BcaGiveCoins'
import MemberGiveCoins from '../memberGiveCoins/MemberGiveCoins'
const ManagementCoinTab = () => {
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
            BCA Tặng Xu
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
            Thành viên tặng xu
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="py-50" activeTab={active}>
        <TabPane tabId="1">
          <BcaGiveCoins />
        </TabPane>
        <TabPane tabId="2">
          <MemberGiveCoins />
        </TabPane>
      </TabContent>
    </div>
  )
}

export default ManagementCoinTab
