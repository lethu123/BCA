import React, {useEffect, useState} from 'react'
import {Card, Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap'
import {XCircle} from 'react-feather'
import {useHistory, useParams} from 'react-router'

//image
import bizxuNoti from 'assets/images/datacenter/thong-bao-bizxu.png'

//component
import MemberLandingPage from './components/member-landingpage/MemberLandingPage'
import TransactionRequestPage from './components/transaction-request/TransactionRequestPage'
import StatisticLandingpage from './components/statistic/StatisticLandingpage'
import ChartLandingpage from './components/chart/ChartLandingpage'
import {News} from 'components/icon'

const LandingPage = () => {
  const history = useHistory()
  const {type} = useParams()

  const routeDataCenter = [
    {
      id: '1',
      name: 'Landingpage thành viên',
      path: 'landingpage-thanh-vien',
      component: <MemberLandingPage />,
    },
    {
      id: '2',
      name: 'Yêu cầu giao dịch',
      path: 'yeu-cau-giao-dich',
      component: <TransactionRequestPage />,
    },
  ]

  //useState
  const [closeNoti, setCloseNoti] = useState(false)
  const [active, setActive] = useState('1')

  //useEffect
  useEffect(() => {
    switch (type) {
      case 'landingpage-thanh-vien':
        return setActive('1')

      case 'yeu-cau-giao-dich':
        return setActive('2')
      default:
        return
    }
  }, [type])
  return (
    <div className="p-2" style={{backgroundColor: '#fff'}}>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div className="d-flex">
          <News color="primary" size="3x" className="mr-2" />
          <div>
            <h4 className="mb-0">Quản trị Landingpage</h4>
            <p className="mb-0">Quản lý kinh nghiệm khách hàng</p>
          </div>
        </div>
      </div>
      {!closeNoti && (
        <Card>
          <div className="d-flex p-2 justify-content-between">
            <div className=" position-relative d-flex">
              <img
                src={bizxuNoti}
                alt="imgs1"
                className="img-fluid  d-lg-block d-none"
                width="60px"
              />
              <p
                className="mb-0 text-white"
                style={{
                  position: 'absolute',
                  top: '31.2%',
                  left: '5.3%',
                  fontSize: '17px',
                }}
              >
                5
              </p>
              <div className="ml-3">
                <h6 className="font-weight-bolder">Thông báo</h6>
                <p className="mb-0">
                  Bạn có 5 yêu cầu giao dịch cần xem xét.
                  <span
                    className="text-primary cursor-pointer"
                    style={{textDecoration: 'underline'}}
                  >
                    {' '}
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
        className="px-1 py-2"
      >
        <StatisticLandingpage />
        <ChartLandingpage />

        <Nav tabs className="mt-5">
          {routeDataCenter.length > 0 &&
            routeDataCenter.map(ele => (
              <NavItem key={ele.id}>
                <NavLink
                  active={active === ele.id}
                  onClick={() => {
                    history.push(`/admin/landingpage/${ele.path}`)
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

export default LandingPage
