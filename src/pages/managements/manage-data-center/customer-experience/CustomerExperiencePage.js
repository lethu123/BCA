import React, {useEffect, useState} from 'react'
import {Card, Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap'
import {useHistory, useParams} from 'react-router-dom'
import {XCircle} from 'react-feather'

//image
import customerExperience from 'assets/images/datacenter/customer-experience.png'
import notifi from 'assets/images/datacenter/notifi.png'

//component
import ExploitFanpagePage from './exploit-fanpage/ExploitFanpagePage'
import ExploitGroupPage from './exploit-group/ExploitGroupPage'
import ExploitedPostPage from './exploit-post/ExploitPostPage'
import ExploitPersonalPage from './exploit-personal-page/ExploitPersonalPage'

const CustomerExperiencePage = () => {
  const routeDataCenter = [
    {
      id: '1',
      name: 'khai thác nhóm',
      path: 'khai-thac-nhom',
      component: <ExploitGroupPage />,
    },
    {
      id: '2',
      name: 'Khai thác FanPage',
      path: 'khai-thac-fanpage',
      component: <ExploitFanpagePage />,
    },
    {
      id: '3',
      name: 'Khai thác Post',
      path: 'khai-thac-post',
      component: <ExploitedPostPage />,
    },
    {
      id: '4',
      name: 'Khai thác trang cá nhân',
      path: 'khai-thac-trang-ca-nhan',
      component: <ExploitPersonalPage />,
    },
  ]
  const {type} = useParams()
  const history = useHistory()

  //useState
  const [active, setActive] = useState('1')
  const [closeNoti, setCloseNoti] = useState(false)

  //useEffect
  useEffect(() => {
    switch (type) {
      case 'khai-thac-nhom':
        return setActive('1')

      case 'khai-thac-fanpage':
        return setActive('2')

      case 'khai-thac-post':
        return setActive('3')

      case 'khai-thac-trang-ca-nhan':
        return setActive('4')
      default:
        return
    }
  }, [type])

  return (
    <div>
      <div className="d-flex">
        <img
          src={customerExperience}
          alt="dataCenter"
          className="img-fluid mr-3"
          width="50px"
          height="50px"
        />
        <div>
          <h4 className="font-weight-bold"></h4>
          <p className="mb-0">
            Quản lý và cập nhật các sự kiện trong BCA Training
          </p>
        </div>
      </div>
      {!closeNoti && (
        <Card className="mt-3">
          <div className="d-flex p-5">
            <div className="d-flex">
              <img
                src={notifi}
                alt="imgs1"
                className="img-fluid mr-3  d-lg-block d-none"
                width="65px"
              />
              <div>
                <h6 className="font-weight-bolder">Bạn có 5 thông báo mới</h6>
                <p className="mb-0">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here'
                </p>
              </div>
            </div>
            <div className="cursor-pointer" onClick={() => setCloseNoti(true)}>
              <XCircle className="text-primary" />
            </div>
          </div>
        </Card>
      )}
      <div style={{backgroundColor: '#fff'}} className="p-5">
        <Nav tabs className="mt-5">
          {routeDataCenter.length > 0 &&
            routeDataCenter.map(ele => (
              <NavItem key={ele.id}>
                <NavLink
                  active={active === ele.id}
                  onClick={() => {
                    history.push(`/admin/kinh-nghiem-khach-hang/${ele.path}`)
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
    </div>
  )
}

export default CustomerExperiencePage
