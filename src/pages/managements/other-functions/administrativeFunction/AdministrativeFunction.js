import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router'
import {Nav, NavItem, TabContent, TabPane} from 'reactstrap'
import NavLink from 'reactstrap/lib/NavLink'
// *** Component
import ProminentArea from './prominentArea/ProminentArea'
import TagProduct from './tagProduct/TagProduct'

const AdministrativeFunction = () => {
  const {type} = useParams()
  const history = useHistory()
  const [active, setActive] = useState('1')
  const routeDataCenter = [
    {
      id: '1',
      name: 'Khu vực nổi bật',
      path: 'khu-vuc-noi-bat',
      component: <ProminentArea />,
    },
    {
      id: '2',
      name: 'Kho tài liệu',
      path: 'kho-tai-lieu',
      component: 'Updating',
    },
    {
      id: '3',
      name: 'Cài đặt tag',
      path: 'cai-dat-tag',
      component: <TagProduct />,
    },
  ]
  useEffect(() => {
    switch (type) {
      case 'khu-vuc-noi-bat':
        return setActive('1')
      case 'kho-tai-lieu':
        return setActive('2')
      case 'cai-dat-tag':
        return setActive('3')

      default:
        return
    }
  }, [type])
  return (
    <div style={{backgroundColor: '#fff'}} className="card-body">
      <Nav tabs className="">
        {routeDataCenter.length > 0 &&
          routeDataCenter.map(ele => (
            <NavItem key={ele.id}>
              <NavLink
                active={active === ele.id}
                onClick={() => {
                  history.push(`/admin/chuc-nang-quan-tri-khac/${ele.path}`)
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

export default AdministrativeFunction
