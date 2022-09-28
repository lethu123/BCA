import {useEffect, useState} from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from 'reactstrap'
import {Link, useHistory, useLocation} from 'react-router-dom'

// *** Custom Components
import WarehouseModel from './warehouse-model/WarehouseModel'
// *** Styles
import './Custom.style.scss'

const routeDashboard = [
  {id: '1', path: 'warehouse-model', name: 'Mô hình quản lý kho'},
  {id: '2', path: 'stock-out', name: 'Xuất kho'},
  {id: '3', path: 'stock-in', name: 'Nhập kho'},
  {id: '4', path: 'moving-warehouse', name: 'Chuyển kho'},
  {id: '5', path: 'stock-check-list', name: 'Kiểm kê'},
  {id: '6', path: 'inventory', name: 'Tồn kho'},
  {id: '7', path: '', name: 'Kho'},
]
const Warehouse = () => {
  const location = useLocation()
  const history = useHistory()
  const [active, setActive] = useState('1')

  useEffect(() => {
    if (location.pathname) {
      const path = location.pathname.slice(17)

      if (path === 'warehouse-model') {
        setActive('1')
      }
      if (path === 'stock-out') {
        setActive('2')
      }
      if (path === 'stock-in') {
        setActive('3')
      }
      if (path === 'moving-warehouse') {
        setActive('4')
      }
      if (path === 'stock-check-list') {
        setActive('5')
      }
      if (path === 'inventory') {
        setActive('6')
      }
      if (!path) {
        setActive('7')
      }
    }
  }, [location])

  return (
    <div className="content-body">
      <Card>
        <Breadcrumb className="p-3 border-bottom">
          <BreadcrumbItem>
            <Link to="/home">
              <span className="svg-icon svg-icon-info svg-icon-2x mr-2">
                {/*begin::Svg Icon | path:C:\wamp64\www\keenthemes\legacy\metronic\theme\html\demo3\dist/../src/media/svg/icons\Home\Home.svg*/}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                >
                  <g
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >
                    <rect x={0} y={0} width={24} height={24} />
                    <path
                      d="M3.95709826,8.41510662 L11.47855,3.81866389 C11.7986624,3.62303967 12.2013376,3.62303967 12.52145,3.81866389 L20.0429,8.41510557 C20.6374094,8.77841684 21,9.42493654 21,10.1216692 L21,19.0000642 C21,20.1046337 20.1045695,21.0000642 19,21.0000642 L4.99998155,21.0000673 C3.89541205,21.0000673 2.99998155,20.1046368 2.99998155,19.0000673 L2.99999828,10.1216672 C2.99999935,9.42493561 3.36258984,8.77841732 3.95709826,8.41510662 Z M10,13 C9.44771525,13 9,13.4477153 9,14 L9,17 C9,17.5522847 9.44771525,18 10,18 L14,18 C14.5522847,18 15,17.5522847 15,17 L15,14 C15,13.4477153 14.5522847,13 14,13 L10,13 Z"
                      fill="#000000"
                    />
                  </g>
                </svg>
                {/*end::Svg Icon*/}
              </span>
              Admin
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/home"> Quản lý kho </Link>
          </BreadcrumbItem>

          <BreadcrumbItem active>
            <span> {routeDashboard.find(item => item.id === active).name}</span>
          </BreadcrumbItem>
        </Breadcrumb>

        {/* menu quản lý kho */}
        <CardBody className="pt-0">
          <Nav tabs className="mt-5">
            {routeDashboard.map(item => (
              <NavItem key={item.id}>
                <NavLink
                  className="border-0"
                  active={active === item.id}
                  onClick={() => {
                    history.push(
                      `/admin/warehouse${item.path ? '/' + item.path : ''}`,
                    )
                  }}
                >
                  {item.name}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
          <TabContent className="py-50" activeTab={active}>
            <TabPane tabId="1">
              <WarehouseModel />
            </TabPane>
            <TabPane tabId="2"></TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </div>
  )
}

export default Warehouse
