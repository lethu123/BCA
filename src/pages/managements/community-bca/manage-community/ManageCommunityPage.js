import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap'
// *** Components
import ManagePost from './managePost/ManagePost'
import ManageGroup from '@services/group/components/manageGroup/ManageGroup'
import ManageEvent from '@services/event/components/manage-event/ManageEvent'
// import ManagementCoin from './managementCoin/ManagementCoin'

const ManageCommunityPage = () => {
  const routeDataCenter = [
    {
      id: '1',
      name: 'Quản lý bài viết',
      path: 'quan-ly-bai-viet',
      component: <ManagePost />,
    },
    {
      id: '2',
      name: 'Quản lý nhóm',
      path: 'quan-ly-nhom',
      component: <ManageGroup />,
    },
    {
      id: '3',
      name: 'Quản lý sự kiện',
      path: 'quan-ly-su-kien',
      component: <ManageEvent />,
    },
    // {
    //   id: '4',
    //   name: 'Quản lý tặng xu',
    //   path: 'quan-ly-tang-xu',
    //   component: <ManagementCoin />,
    // },
    // {
    //   id: '5',
    //   name: 'Yêu cầu',
    //   path: 'yeu-cau',
    //   component: 'Updating',
    // },
  ]
  const history = useHistory()
  const {type} = useParams()
  const [active, setActive] = useState('1')

  useEffect(() => {
    switch (type) {
      case 'quan-ly-bai-viet':
        return setActive('1')

      case 'quan-ly-nhom':
        return setActive('2')

      case 'quan-ly-su-kien':
        return setActive('3')

      // case 'quan-ly-tang-xu':
      //   return setActive('4')

      // case 'yeu-cau':
      //   return setActive('5')

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
                key={ele.id}
                active={active === ele.id}
                onClick={() => {
                  history.push(`/admin/quan-ly-cong-dong/${ele.path}`)
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

export default ManageCommunityPage
