import React, {useEffect, useState} from 'react'
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap'
import {useHistory, useParams} from 'react-router-dom'
//component
import ManageEmaiPage from './manage-email/ManageEmailPage'
import LibraryEmailPage from './library-email/LibraryEmailPage'
import CampaignEmailPage from './campaign-email/CampaignEmailPage'

const EmailPage = () => {
  const routeDataCenter = [
    {
      id: '1',
      name: 'Quản lý email',
      path: 'quan-ly-email',
      component: <ManageEmaiPage />,
    },
    {
      id: '2',
      name: 'Chiến dịch email',
      path: 'chien-dich-email',
      component: <CampaignEmailPage />,
    },
    {
      id: '3',
      name: 'Thư viện email mẫu',
      path: 'thu-vien-email-mau',
      component: <LibraryEmailPage />,
    },
  ]
  const {type} = useParams()
  const history = useHistory()

  //useState
  const [active, setActive] = useState('1')

  //useEffect
  useEffect(() => {
    switch (type) {
      case 'quan-ly-email':
        return setActive('1')

      case 'chien-dich-email':
        return setActive('2')

      case 'thu-vien-email-mau':
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
                  history.push(`/admin/email/${ele.path}`)
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

export default EmailPage
