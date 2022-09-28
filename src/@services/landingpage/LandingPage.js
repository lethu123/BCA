import React, {useState} from 'react'

//component
import ManageDataPage from './components/manage-data/ManageDataPage'
import ActivityHistoryPage from './components/list/ActivityHistoryPage'
import SettingLandingPage from './components/setting-landingpage/SettingLandingPage'

//image
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap'
import {News} from 'components/icon'

const LandingPage = () => {
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
      name: 'Cài đặt Landingpage',
      component: <SettingLandingPage />,
    },
  ]

  //useState
  const [active, setActive] = useState('1')

  return (
    <div style={{backgroundColor: '#fff'}} className="p-2">
      <div className="d-flex align-items-center justify-content-lg-between">
        <div className="d-md-flex">
          <News color="primary" size="3x" className="mr-5" />
          <div className="mt-2 mt-md-0">
            <h4 className="mb-0">Landingpage của tôi</h4>
            <p className="mb-0">
              Quản lý và cập nhật dữ liệu các ứng viên từ Landingpage của bạn
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

export default LandingPage
