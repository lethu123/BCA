import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router'
import {Nav, NavItem, TabContent, TabPane} from 'reactstrap'
import NavLink from 'reactstrap/lib/NavLink'
// *** Components ***
import InfoCustomer from './infoCustomer/InfoCustomer'
import ContractExpires from './contractExpires/ContractExpires'
import logo from 'assets/images/home/customer.png'
const CustomerPage = () => {
  const {type} = useParams()
  const history = useHistory()
  const [active, setActive] = useState('1')
  const routeDataCenter = [
    {
      id: '1',
      name: 'Thông tin KH',
      path: 'thong-tin-khach-hang',
      component: <InfoCustomer />,
    },
    {
      id: '2',
      name: 'HD đến hẹn',
      path: 'hd-den-hen',
      component: <ContractExpires />,
    },
  ]
  useEffect(() => {
    switch (type) {
      case 'thong-tin-khach-hang':
        return setActive('1')

      case 'hd-den-hen':
        return setActive('2')

      default:
        return
    }
  }, [type])
  return (
    <div style={{backgroundColor: '#fff'}} className="card-body">
      <div className=" ">
        <div
          className="d-flex align-items-center"
          style={{marginTop: 20, marginRight: 5}}
        >
          <img
            alt="logo"
            src={logo}
            className="img-fluid mr-2"
            width="30px"
            height="30px"
          />
          <h5 className="text-primary mb-0 mr-4">Khách hàng</h5>
        </div>
        <hr />
        <Nav pills className="mt-2">
          {routeDataCenter.length > 0 &&
            routeDataCenter.map(ele => (
              <NavItem key={ele.id}>
                <NavLink
                  active={active === ele.id}
                  onClick={() => {
                    history.push(`/admin/khach-hang/${ele.path}`)
                  }}
                  style={{border: 'none'}}
                >
                  {ele.name}
                </NavLink>
              </NavItem>
            ))}
        </Nav>
      </div>
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

export default CustomerPage
