import React, {useEffect, useState} from 'react'
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap'
import {useHistory, useParams} from 'react-router-dom'

//component
import {
  ManageDataPage,
  ActivityHistoryPage,
  RequestMoneyPage,
  DeleteDataPage,
  DataTransferPage,
} from '@services/data-center'

//image
import dataCenter from 'assets/images/datacenter/data-center.png'
import themeConfig from 'configs/themeConfig'

const DataCenterPage = () => {
  const routeDataCenter = [
    {
      id: '1',
      name: 'Quản lý dữ liệu',
      path: 'quan-ly-du-lieu',
      component: <ManageDataPage />,
    },
    {
      id: '2',
      name: 'Lịch sử hoạt động',
      path: 'lich-su-hoat-dong',
      component: <ActivityHistoryPage />,
    },
    {
      id: '3',
      name: 'Yêu cầu hoàn tiền',
      path: 'yeu-cau-hoan-tien',
      component: <RequestMoneyPage />,
    },
    {
      id: '4',
      name: 'Xóa dữ liệu',
      path: 'xoa-du-lieu',
      component: <DeleteDataPage />,
    },
    {
      id: '5',
      name: 'Chuyển dữ liệu',
      path: 'chuyen-du-lieu',
      component: <DataTransferPage />,
    },
  ]
  const {type} = useParams()
  const history = useHistory()

  //useState
  const [active, setActive] = useState('1')

  //useEffect
  useEffect(() => {
    switch (type) {
      case 'quan-ly-du-lieu':
        return setActive('1')

      case 'lich-su-hoat-dong':
        return setActive('2')

      case 'yeu-cau-hoan-tien':
        return setActive('3')

      case 'xoa-du-lieu':
        return setActive('4')

      case 'chuyen-du-lieu':
        return setActive('5')

      default:
        return
    }
  }, [type])

  return (
    <div style={{backgroundColor: '#fff'}} className="p-2">
      <div className="d-flex">
        <img
          src={dataCenter}
          alt="dataCenter"
          className="img-fluid mr-2"
          width="50px"
          height="50px"
        />

        <div>
          <h4 className="font-weight-bolder text-primary">Data Center</h4>
          <p className="mb-0">
            Quản lý tất cá các dữ liệu ứng viên trong{' '}
            {themeConfig.app.communicate}
          </p>
        </div>
      </div>
      <Nav tabs className="mt-1">
        {routeDataCenter.length > 0 &&
          routeDataCenter.map(ele => (
            <NavItem key={ele.id}>
              <NavLink
                active={active === ele.id}
                onClick={() => {
                  history.push(`/admin/data-center/${ele.path}`)
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

export default DataCenterPage
