import React, {useEffect, useState} from 'react'

import {
  Button,
  Card,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from 'reactstrap'
import {MoreVertical, XCircle} from 'react-feather'
import {useHistory, useParams} from 'react-router'

//image
import project from 'assets/images/datacenter/project2.png'
import projectBtn from 'assets/images/datacenter/project-btn.png'

//component
import {
  CourseManagePage,
  EditHistoryPage,
  CourseRequestPage,
  MemberPage,
  StatisticCourse,
} from '@services/courses'

const CoursesPage = () => {
  const history = useHistory()
  const {type} = useParams()

  const routeDataCenter = [
    {
      id: '1',
      name: 'Quản lý Khóa học',
      path: 'quan-ly-khoa-hoc',
      component: <CourseManagePage />,
    },
    {
      id: '2',
      name: 'Yêu cầu',
      path: 'yeu-cau',
      component: <CourseRequestPage />,
    },
    {
      id: '3',
      name: 'Lịch sử chỉnh sửa',
      path: 'lich-su-chinh-sua',
      component: <EditHistoryPage />,
    },
    {
      id: '4',
      name: 'Thành viên tham gia',
      path: 'thanh-vien-tham-gia',
      component: <MemberPage />,
    },
  ]

  //useState
  const [closeNoti, setCloseNoti] = useState(false)
  const [active, setActive] = useState('1')

  //useEffect
  useEffect(() => {
    if (type) {
      routeDataCenter.map(item => item.path === type && setActive(item.id))
    }
  }, [type])

  return (
    <div className="p-2">
      <div className="d-block d-md-flex  justify-content-between align-items-center mb-3">
        <div className="d-flex">
          <img
            src={project}
            alt="dataCenter"
            className="img-fluid mr-2"
            style={{width: '50px', height: '50px'}}
          />
          <div>
            <h4 className="font-weight-bold">
              Quản lý Khóa học New Alpha Training
            </h4>
            <p className="mb-0">Quản lý các khóa học của New Alpha Training</p>
          </div>
        </div>
        <div className="mt-5 mt-md-0 w-100 w-md-50 text-right">
          <Button.Ripple
            color="primary"
            className="mr-2 p-1"
            onClick={() => history.push('/admin/tao-khoa-hoc')}
          >
            <img
              src={projectBtn}
              alt="imgs"
              className="img-fluid mr-1"
              width="25px"
              height="25px"
            />
            Tạo Khóa học
          </Button.Ripple>
          <Button.Ripple color="secondary" className="mr-2 p-1">
            <MoreVertical />
          </Button.Ripple>
        </div>
      </div>
      {!closeNoti && (
        <Card className="mt-3">
          <div className="d-flex justify-content-between p-2">
            <div className="d-flex">
              <p
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  backgroundColor: 'red',
                  textAlign: 'center',
                  lineHeight: '40px',
                  color: 'white',
                  marginRight: 10,
                }}
              >
                5
              </p>
              <div>
                <h6 className="font-weight-bolder">Thông báo</h6>
                <p className="mb-0">
                  Bạn có 5 yêu cầu giao dịch cần xem xét.{' '}
                  <span className="text-primary cursor-pointer text-decoration-underline font-italic">
                    Xem ngay!
                  </span>
                </p>
              </div>
            </div>
            <div className="cursor-pointer" onClick={() => setCloseNoti(true)}>
              <XCircle className="text-primary" />
            </div>
          </div>
        </Card>
      )}
      <div
        style={{backgroundColor: '#fff', borderRadius: '20px'}}
        className="card-body"
      >
        <StatisticCourse />
        {/* <ChartProject /> */}

        <Nav tabs>
          {routeDataCenter.length > 0 &&
            routeDataCenter.map(ele => (
              <NavItem key={ele.id}>
                <NavLink
                  active={active === ele.id}
                  onClick={() => {
                    history.push(`/admin/khoa-hoc/${ele.path}`)
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

export default CoursesPage
