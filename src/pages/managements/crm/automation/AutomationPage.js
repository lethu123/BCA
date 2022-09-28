import React, {useEffect, useState} from 'react'
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap'
import {useHistory, useParams} from 'react-router-dom'

//component
import autojob from './autojob/autojobPage'
import AutoTask from './auto-task/AutoTaskPage'

const AutomationPage = () => {
  const routeDataCenter = [
    {
      id: '1',
      name: 'Auto Job',
      path: 'autojob',
      component: <autojob />,
    },
    {
      id: '2',
      name: 'Auto Task',
      path: 'auto-task',
      component: <AutoTask />,
    },
  ]
  const {type} = useParams()
  const history = useHistory()

  //useState
  const [active, setActive] = useState('1')

  //useEffect
  useEffect(() => {
    switch (type) {
      case 'autojob':
        return setActive('1')

      case 'auto-task':
        return setActive('2')

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
                  history.push(`/admin/automation/${ele.path}`)
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

export default AutomationPage
