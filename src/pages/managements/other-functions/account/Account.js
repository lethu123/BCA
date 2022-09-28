import React, {useEffect, useState} from 'react'
import {TabContent, TabPane, Nav, NavItem, NavLink, Card} from 'reactstrap'
import {XCircle} from 'react-feather'
// *** Images
import notifi from 'assets/images/datacenter/notifi.png'
import imgLogoTab from 'assets/images/home/manageAccount.png'
import {useHistory, useParams} from 'react-router-dom'

// *** Components
import AgencyTab from './agencyTab/AgencyTab'
import DataCenterTab from './dataCenterTab/DataCenterTab'
import DepartmentTab from './departmentTab/DepartmentTab'
import AccountConfigurationTab from './accountConfiguration/AccountConfigurationTab'
import SystemGroupTab from './systemGroup/SystemGroupTab'
import MembershipLevelTab from './membershipLevel/MembershipLevelTab'
import CommunityLevelTab from './communityLevel/CommunityLevelTab'
import ActivityLevelTab from './activityLevel/ActivityLevelTab'

const Account = () => {
  const {type} = useParams()
  const history = useHistory()
  useEffect(() => {
    switch (type) {
      case 'cap-dai-ly':
        return setActive('1')
      case 'cap-data-center':
        return setActive('2')

      case 'cau-hinh-phong-ban':
        return setActive('3')

      case 'cau-hinh-vai-tro-tai-khoan':
        return setActive('4')

      case 'nhom-he-thong':
        return setActive('5')
      case 'cap-thanh-vien':
        return setActive('6')
      case 'cap-cong-dong':
        return setActive('7')
      case 'cap-hoat-dong':
        return setActive('8')
      default:
        return
    }
  }, [type])

  const [active, setActive] = useState('1')
  const [closeNoti, setCloseNoti] = useState(false)

  const routeDataCenter = [
    {
      id: '1',
      name: 'Cấp đại lý BH',
      path: 'cap-dai-ly',
      component: <AgencyTab />,
    },
    {
      id: '2',
      name: 'Cấp Data Center',
      path: 'cap-data-center',
      component: <DataCenterTab />,
    },
    {
      id: '3',
      name: 'Cấu hình phòng ban',
      path: 'cau-hinh-phong-ban',
      component: <DepartmentTab />,
    },
    {
      id: '4',
      name: 'Cấu hình vai trò tài khoản',
      path: 'cau-hinh-vai-tro-tai-khoan',
      component: <AccountConfigurationTab />,
    },
    {
      id: '5',
      name: 'Nhóm hệ thống',
      path: 'nhom-he-thong',
      component: <SystemGroupTab />,
    },
    {
      id: '6',
      name: 'Cấp thành viên',
      path: 'cap-thanh-vien',
      component: <MembershipLevelTab />,
    },
    {
      id: '7',
      name: 'Cấp cộng đồng',
      path: 'cap-cong-dong',
      component: <CommunityLevelTab />,
    },
    {
      id: '8',
      name: 'Cấp hoạt động',
      path: 'cap-hoat-dong',
      component: <ActivityLevelTab />,
    },
  ]
  return (
    <div style={{backgroundColor: '#fff'}} className="p-2">
      <div className="d-flex align-items-center">
        <img src={imgLogoTab} alt="images" width="50px" height="50px" />
        <div className="ml-4">
          <h4 className="mb-0 font-weight-bolder">
            Quản lý chức năng tài khoản
          </h4>
          <p className="mb-0">Quản lý các nhãn thành viên và dữ liệu</p>
        </div>
      </div>
      <div>
        {!closeNoti && (
          <Card className="mt-3">
            <div className="d-flex p-2">
              <div className="d-flex">
                <img
                  src={notifi}
                  alt="imgs1"
                  className="img-fluid mr-3 d-lg-block d-none"
                  width="65px"
                />
                <div>
                  <h6 className="font-weight-bolder">Thông báo</h6>
                  <p className="mb-0">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here'
                  </p>
                </div>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => setCloseNoti(true)}
              >
                <XCircle className="text-primary" />
              </div>
            </div>
          </Card>
        )}
      </div>
      <div className="mt-3">
        <Nav tabs className="">
          {routeDataCenter.length > 0 &&
            routeDataCenter.map(ele => (
              <NavItem key={ele.id}>
                <NavLink
                  active={active === ele.id}
                  onClick={() => {
                    history.push(`/admin/chuc-nang-tai-khoan/${ele.path}`)
                  }}
                  style={{border: 'none', padding: '10px 12px'}}
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

export default Account
