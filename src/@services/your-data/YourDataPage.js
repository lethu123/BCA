import React, {useState} from 'react'

//component
import ManageDataPage from './components/manage-data/ManageDataPage'
import ActivityHistoryPage from './components/activity-history/ActivityHistoryPage'
import RequestPage from './components/request/RequestPage'

//image
import dataCenter from 'assets/images/datacenter/data-center.png'
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap'

const YourDataPage = () => {
  const routeDataCenter = [
    {
      id: '1',
      name: 'Quản lý dữ liệu',
      component: <ManageDataPage />,
    },
    {
      id: '2',
      name: 'Lịch sử hoạt động',
      component: <ActivityHistoryPage />,
    },
    {
      id: '3',
      name: 'Yêu cầu',
      component: <RequestPage />,
    },
  ]
  //useState
  const [active, setActive] = useState('1')
  return (
    <div style={{backgroundColor: '#fff'}} className="p-3">
      <div className="d-flex align-items-center justify-content-lg-between">
        <div className="d-lg-flex">
          <img
            src={dataCenter}
            alt="dataCenter"
            className="img-fluid mr-3"
            width="50px"
            height="50px"
          />
          <div>
            <h4 className="mb-0">Quản lý dữ liệu của tôi</h4>
            <p className="mb-0">
              Quản lý và cập nhật dữ liệu các ứng viên của bạn
            </p>
          </div>
        </div>
      </div>

      <Nav tabs className="mt-2">
        {routeDataCenter.length > 0 &&
          routeDataCenter.map(ele => (
            <NavItem key={ele.id}>
              <NavLink
                active={active === ele.id}
                onClick={() => {
                  setActive(ele.id)
                }}
                style={{border: 'none'}}
              >
                {ele.name}
              </NavLink>
            </NavItem>
          ))}
      </Nav>
      <TabContent className="py-50" activeTab={active}>
        {routeDataCenter.length > 0 &&
          routeDataCenter.map(ele => (
            <TabPane tabId={ele.id} key={ele.id}>
              {ele.component}
            </TabPane>
          ))}
      </TabContent>
    </div>
  )
}

export default YourDataPage
