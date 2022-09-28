import React, {useState} from 'react'
import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap'

// *** Components
import {PotentialCustomers} from 'pages/columns-table/crm/callCenter/PotentialCustomers'
import DataTableComponent from 'components/data-table/DataTableComponent'
const PotentialCustomersTable = () => {
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
            active={active === '1'}
            onClick={() => {
              toggle('1')
            }}
            className="border-0"
          >
            Lịch sử chăm sóc
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="py-50" activeTab={active}>
        <TabPane tabId="1">
          <div className="">
            <DataTableComponent
              // *** required
              columns={PotentialCustomers}
              query={{
                key: [],
                params: {},
                url: '',
                headers: '',
              }}
              defaultData={[{id: 123}, {id: 456}]}
              // ** optional - default undefined
              // ExpandableComponent={ExpandableTable}
              // FilterComponent={FilterContractList}
              isExport
              // handleModal={handleModal}
              // handleDelete={handleDelete}
              searchPlaceholder="Nhập nội dung tìm kiếm ..."
            />
          </div>
        </TabPane>
      </TabContent>
    </div>
  )
}

export default PotentialCustomersTable
