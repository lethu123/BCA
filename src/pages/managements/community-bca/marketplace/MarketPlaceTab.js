import React, {useState} from 'react'
import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap'
// *** Components
import TableTransactionHistory from './tableTransactionHistory/TableTransactionHistory'
import TableManageProduct from './tableManageProduct/TableManageProduct'
import TableMarketPlaceRequest from './tableRequest/TableRequest'

const MarketPlaceTab = () => {
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
            Lịch sử giao dịch
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
            Quản lý sản phẩm
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
            Yêu cầu
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="py-50" activeTab={active}>
        <TabPane tabId="1">
          <TableTransactionHistory />
        </TabPane>
        <TabPane tabId="2">
          <TableManageProduct />
        </TabPane>
        <TabPane tabId="3">
          <TableMarketPlaceRequest />
        </TabPane>
      </TabContent>
    </div>
  )
}

export default MarketPlaceTab
