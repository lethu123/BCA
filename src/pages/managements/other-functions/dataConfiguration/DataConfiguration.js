import React, {useEffect, useState} from 'react'
import img from 'assets/images/datacenter/data-center.png'

import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap'
// *** Components
import NumberTab from './NumberTab/NumberTab'
import TimeTab from './TimeTab/TimeTab'
import StatusVerificationTab from './StatusVerificationTab/StatusVerificationTab'
import InteractiveTab from './InteractiveTab/InteractiveTab'
import StatusTab from './StatusTab/StatusTab'
import {useHistory, useParams} from 'react-router-dom'

const DataConfiguration = () => {
  const [active, setActive] = useState('1')
  const {type} = useParams()
  const history = useHistory()
  const route = [
    {
      id: '1',
      name: 'Số lượng',
      path: 'so-luong',
      component: <NumberTab />,
    },
    {
      id: '2',
      name: 'Thời lượng',
      path: 'thoi-luong',
      component: <TimeTab />,
    },
    {
      id: '3',
      name: 'Xác minh trạng thái',
      path: 'xac-minh-trang-thai',
      component: <StatusVerificationTab />,
    },
    {
      id: '4',
      name: 'Tương tác',
      path: 'tuong-tac',
      component: <InteractiveTab />,
    },
    {
      id: '5',
      name: 'Trạng thái',
      path: 'trang-thai',
      component: <StatusTab />,
    },
    
  ]
  useEffect(() => {
    switch (type) {
      case 'so-luong':
        return setActive('1')

      case 'thoi-luong':
        return setActive('2')

      case 'xac-minh-trang-thai':
        return setActive('3')

      case 'tuong-tac':
        return setActive('4')

      case 'trang-thai':
        return setActive('5')

      default:
        return
    }
  }, [type])

  return (
    <div style={{backgroundColor: '#fff'}} className="p-2">
      <div className="d-flex align-items-center">
        <img src={img} alt="images" width="50px" height="50px" />
        <div className="ml-2">
          <h4 className="mb-0 font-weight-bolder">Cấu hình Data</h4>
          <p className="mb-0">Cài đặt các luật về sở hữu Data</p>
        </div>
      </div>
      <div className="mt-2">
        <Nav tabs className="">
          {route.length > 0 &&
            route.map(ele => (
              <NavItem key={ele.id}>
                <NavLink
                  active={active === ele.id}
                  onClick={() => {
                    history.push(`/admin/cau-hinh-data/${ele.path}`)
                  }}
                  style={{border: 'none'}}
                >
                  {ele.name}
                </NavLink>
              </NavItem>
            ))}
        </Nav>
        <TabContent className="py-50" activeTab={active}>
          {route.length > 0 &&
            route.map(ele => (
              <TabPane tabId={ele.id} key={ele.id}>
                {ele.component}
              </TabPane>
            ))}
        </TabContent>
      </div>
    </div>
  )
}

export default DataConfiguration
