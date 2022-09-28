import React, {useState} from 'react'
import {Card, Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap'
import {XCircle} from 'react-feather'

//image
import customerExperience from 'assets/images/datacenter/customer-experience.png'
import notifi from 'assets/images/datacenter/notifi.png'

//component
import ActivityHistoryPage from './activity-history/ActivityHistoryPage'
import MyPostPage from './my-post/MyPostPage'

const CustomerExperiencePage = () => {
  const routeDataCenter = [
    {
      id: '1',
      name: 'Bài viết của tôi',
      component: <MyPostPage />,
    },
    {
      id: '2',
      name: 'Lịch sử hoạt động',
      component: <ActivityHistoryPage />,
    },
  ]

  //useState
  const [active, setActive] = useState('1')
  const [closeNoti, setCloseNoti] = useState(false)

  return (
    <div>
      <div className="d-flex">
        <img
          src={customerExperience}
          alt="dataCenter"
          className="img-fluid mr-2"
          width="50px"
          height="50px"
        />
        <div>
          <h4 className="mb-0">Customer Experience(Admin)</h4>
          <p className="mb-0">
            Quản lý và cập nhật các sự kiện trong BCA Training
          </p>
        </div>
      </div>
      {!closeNoti && (
        <Card className="mt-2">
          <div className="d-flex p-2">
            <div className="d-flex align-items-center">
              <div className="mr-1 d-lg-block d-none " style={{width: '100px'}}>
                <img
                  src={notifi}
                  alt="imgs1"
                  className="img-fluid"
                  width="60px"
                  height="60px"
                />
              </div>

              <div>
                <h6 className="font-weight-bolder">Bạn có 5 thông báo mới</h6>
                <p className="mb-0">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
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
        <Nav tabs>
          {routeDataCenter.length > 0 &&
            routeDataCenter.map((ele, idx) => (
              <NavItem key={idx}>
                <NavLink
                  active={active === ele.id}
                  style={{border: 'none'}}
                  onClick={() => setActive(ele.id)}
                >
                  {ele.name}
                </NavLink>
              </NavItem>
            ))}
        </Nav>
        <TabContent className="py-50" activeTab={active}>
          {routeDataCenter.length > 0 &&
            routeDataCenter.map((ele, idx) => (
              <TabPane tabId={ele.id} key={idx}>
                {ele.component}
              </TabPane>
            ))}
        </TabContent>
      </div>
    </div>
  )
}

export default CustomerExperiencePage
