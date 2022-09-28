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
import {MoreVertical, UserPlus, XCircle} from 'react-feather'
import {useHistory, useParams} from 'react-router'

//image
import notifi from 'assets/images/datacenter/notifi.png'

//component
import ManageMemberPage from './manage-member/ManageMemberPage'
import ActivityHistoryPage from './activity-history/ActivityHistoryPage'
import RequestPage from './request/RequestPage'
import ModalCreateMember from './ModalCreateMember'
import {Users} from 'components/icon'

const MemberBCAPage = () => {
  const history = useHistory()
  const {type} = useParams()

  const routeDataCenter = [
    {
      id: '1',
      name: 'Quản lý thành viên',
      path: 'quan-ly-thanh-vien',
      component: <ManageMemberPage />,
    },
    {
      id: '2',
      name: 'Lịch sử hoạt động',
      path: 'lich-su-hoat-dong',
      component: <ActivityHistoryPage />,
    },
    {
      id: '3',
      name: 'Yêu cầu',
      path: 'yeu-cau',
      component: <RequestPage />,
    },
  ]

  //useState
  const [closeNoti, setCloseNoti] = useState(false)
  const [active, setActive] = useState('1')
  const [createMember, setCreateMember] = useState(false)

  //useEffect
  useEffect(() => {
    switch (type) {
      case 'quan-ly-thanh-vien':
        return setActive('1')

      case 'lich-su-hoat-dong':
        return setActive('2')

      case 'yeu-cau':
        return setActive('3')

      default:
        return
    }
  }, [type])
  return (
    <div className="p-2" style={{backgroundColor: '#fff'}}>
      <div className="d-block d-md-flex justify-content-between align-items-center mb-2">
        <div className="d-flex">
          <Users color="primary" size="3x" className="mr-2" />
          <div>
            <h4 className="mb-0">Thành viên BCA</h4>
            <p className="mb-0">Thiết lập và quản lý thành viên BCA</p>
          </div>
        </div>
        <div className="mt-5 mt-md-0 w-100 w-md-50 text-right">
          <Button.Ripple
            color="primary"
            className="mr-2 p-1"
            onClick={() => setCreateMember(!createMember)}
          >
            <UserPlus className="mr-1" size={20} />
            Thêm thành viên
          </Button.Ripple>
          <Button.Ripple color="secondary" className="mr-2 p-1">
            <MoreVertical />
          </Button.Ripple>
        </div>
      </div>
      {!closeNoti && (
        <Card className="3">
          <div className="d-flex p-2">
            <div className="d-flex">
              <img
                src={notifi}
                alt="imgs1"
                className="img-fluid mr-3  d-lg-block d-none"
                width="65px"
              />
              <div>
                <h6 className="font-weight-bolder">Thông báo</h6>
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
      <div
        style={{backgroundColor: '#fff', borderRadius: '20px'}}
        className="px-1 py-2"
      >
        {/* <StatisticBizxu />
        <ChartBizxu /> */}

        <Nav tabs className="">
          {routeDataCenter.length > 0 &&
            routeDataCenter.map(ele => (
              <NavItem key={ele.id}>
                <NavLink
                  active={active === ele.id}
                  onClick={() => {
                    history.push(`/admin/thanh-vien-BCA/${ele.path}`)
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
      <ModalCreateMember
        createMember={createMember}
        setCreateMember={setCreateMember}
      />
    </div>
  )
}

export default MemberBCAPage
