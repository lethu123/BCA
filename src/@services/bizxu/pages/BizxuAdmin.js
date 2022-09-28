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
import bizxuWhite from 'assets/images/datacenter/bizxu-icon-white.png'
import bizxuNoti from 'assets/images/datacenter/thong-bao-bizxu.png'

//component
import HistoryBizxuPage from '../components/history-bizxu/HistoryBizxuPage'
import TransactionRequestPage from '../components/transaction-request/TransactionRequestPage'
// import StatisticBizxu from '../components/statistic/StatisticBizxu'
// import ChartBizxu from '../components/chart/ChartBizxu'
import ModalCreateBizXu from '../components/modal/ModalCreateBizXu'
import TableManageBizxu from '../components/table/TableManageBizxu'

const BizxuPage = () => {
  const history = useHistory()
  const {type} = useParams()

  const routeDataCenter = [
    {
      id: '1',
      name: 'Quản lý các gói BizXu',
      path: 'quan-ly-cac-goi-bizxu',
      component: <TableManageBizxu />,
    },
    {
      id: '2',
      name: 'Lịch sử giao dịch BizXu',
      path: 'lich-su-giao-dich-bizxu',
      component: <HistoryBizxuPage />,
    },
    {
      id: '3',
      name: 'Yêu cầu giao dịch',
      path: 'yeu-cau-giao-dich',
      component: <TransactionRequestPage />,
    },
  ]

  //useState
  const [closeNoti, setCloseNoti] = useState(false)
  const [active, setActive] = useState('1')
  const [modal, setModal] = useState(false)

  const toggleModal = () => setModal(!modal)

  //useEffect
  useEffect(() => {
    switch (type) {
      case 'quan-ly-cac-goi-bizxu':
        return setActive('1')

      case 'lich-su-giao-dich-bizxu':
        return setActive('2')

      case 'yeu-cau-giao-dich':
        return setActive('3')

      default:
        return
    }
  }, [type])
  return (
    <div className="p-2" style={{backgroundColor: '#fff'}}>
      <div className="d-block d-md-flex justify-content-between align-items-center mb-2">
        <div className="d-flex">
          {/* <img
            src={bizxu}
            alt="dataCenter"
            className="img-fluid mr-3"
            width="50px"
            height="50px"
          /> */}
          {/* <Bizxu fill="#E6641F" color="primary" size={24} className="mr-5" /> */}

          <div>
            <h4 className="mb-0">Quản lý BizXu</h4>
            <p className="mb-0">Thiết lập và quản lý BizXu trong BCA</p>
          </div>
        </div>
        <div className="mt-5 mt-md-0 w-100 w-md-50 text-right">
          <Button.Ripple
            color="primary"
            className="mr-2 p-1"
            onClick={toggleModal}
          >
            <img
              src={bizxuWhite}
              alt="imgs"
              className="img-fluid mr-1"
              width="25px"
              height="25px"
            />
            Tạo mới
          </Button.Ripple>
          <Button.Ripple color="secondary" className="mr-2 p-1">
            <MoreVertical />
          </Button.Ripple>
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
                  top: '31%',
                  left: '5.6%',
                  fontSize: '17px',
                }}
              >
                5
              </p>
              <div className="ml-2">
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
        className=" py-2"
      >
        {/* <StatisticBizxu />
        <ChartBizxu /> */}

        <Nav tabs>
          {routeDataCenter.length > 0 &&
            routeDataCenter.map(ele => (
              <NavItem key={ele.id}>
                <NavLink
                  active={active === ele.id}
                  onClick={() => {
                    history.push(`/admin/bizxu/${ele.path}`)
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
      <ModalCreateBizXu info={null} toggleModal={toggleModal} modal={modal} />
    </div>
  )
}

export default BizxuPage
