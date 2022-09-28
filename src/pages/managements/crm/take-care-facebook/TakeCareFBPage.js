import React, {useEffect, useState} from 'react'
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap'
import {useHistory, useParams} from 'react-router-dom'

import logo_icon from 'assets/images/datacenter/logo-icon.png'

//component
import FacebookBCAPage from './facebook-bca/FacebookBCAPage'
import FacebookOfUserPage from './facebook-of-user/FacebookOfUserPage'
import FanPage from './fanpage/FanPage'
import GroupPage from './group/GroupPage'
import {Facebook, Flag, Users} from 'react-feather'

const TakeCareFBPage = () => {
  const routeDataCenter = [
    {
      id: '1',
      name: 'Facebook cá nhân',
      path: 'facebook-ca-nhan',
      component: <FacebookOfUserPage />,
      icon: <Facebook className="text-danger" size={20} />,
    },
    {
      id: '2',
      name: 'Group',
      path: 'group',
      component: <GroupPage />,
      icon: <Users className="text-success" size={20} />,
    },
    {
      id: '3',
      name: 'FanPage',
      path: 'fanpage',
      component: <FanPage />,
      icon: <Flag className="text-warning" size={20} />,
    },
    {
      id: '4',
      name: 'Facebook BCA',
      path: 'facebook-bca',
      component: <FacebookBCAPage />,
      icon: (
        <img
          src={logo_icon}
          alt="images"
          className="img-fluid  mr-2"
          width="30px"
          height="30px"
        />
      ),
    },
  ]
  const {type} = useParams()
  const history = useHistory()

  //useState
  const [active, setActive] = useState('1')

  //useEffect
  useEffect(() => {
    switch (type) {
      case 'facebook-ca-nhan':
        return setActive('1')

      case 'group':
        return setActive('2')
      case 'fanpage':
        return setActive('3')

      case 'facebook-bca':
        return setActive('4')

      default:
        return
    }
  }, [type])

  return (
    <div style={{backgroundColor: '#fff'}} className="p-5">
      <Nav tabs className="mt-5">
        {routeDataCenter.length > 0 &&
          routeDataCenter.map(ele => (
            <NavItem key={ele.id}>
              <NavLink
                active={active === ele.id}
                onClick={() => {
                  history.push(`/admin/cham-soc-facebook/${ele.path}`)
                }}
                style={{border: 'none'}}
              >
                {ele.icon} {ele.name}
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

export default TakeCareFBPage
