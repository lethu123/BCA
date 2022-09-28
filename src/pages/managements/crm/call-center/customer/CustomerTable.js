import React, {useState} from 'react'
import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap'

// *** Components
import TableContractList from './contractList/TableContractList'
import TableCareHistory from './careHistory/CareHistory'
const CustomerTable = () => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  return (
    <div>
      <Nav tabs className="border-0">
        <NavItem>
          <NavLink
            className="border-0"
            active={active === '1'}
            onClick={() => {
              toggle('1')
            }}
          >
            Danh sách HD
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="border-0"
            active={active === '2'}
            onClick={() => {
              toggle('2')
            }}
          >
            Lịch sử chăm sóc
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="py-50" activeTab={active}>
        <TabPane tabId="1">
          <TableContractList />
        </TabPane>
        <TabPane tabId="2">
          <TableCareHistory />
        </TabPane>
      </TabContent>
    </div>
  )
}

export default CustomerTable
