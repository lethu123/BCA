import {Bizxu} from 'components/icon'
import {useState} from 'react'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap'

// ** component
import PackageBizxuPage from '../components/list/PackageBizxuPage'
import TableHistoryBizxuCenterPage from '../components/table/TableHistoryBizxuCenter'
import TableRequestBizxuCenterPage from '../components/table/TableRequestBizxuCenterPage'
// ** assets
import '@core/scss/base/pages/app-ecommerce.scss'

// ** query
import {BizxuQuery} from '@services/bizxu'

const BizxuCenter = () => {
  const [active, setActive] = useState('1')

  const {data: statisticTotal} = BizxuQuery.useStatisticTotalTransaction()

  const toggle = tab => {
    setActive(tab)
  }

  return (
    <div>
      <Card>
        <CardHeader className=" py-2 border-bottom">
          <Row className="w-100 align-items-center">
            <Col lg="9" md="12">
              <div className="d-flex justify-content-start align-items-center mb-1">
                <Bizxu
                  fill="#E6641F"
                  color="primary"
                  size="3x"
                  className="mr-1"
                />
                <div className="profile-user-info ">
                  <h4 style={{color: '#E6641F'}} className="mb-0 ">
                    Bizxu
                  </h4>
                  <p
                    style={{color: '#E6641F'}}
                    color="#E6641F"
                    className="mb-0"
                  >
                    Quản lý Bizxu
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="3" md="12" className="text-right">
              <Button.Ripple color="primary" className="text-left mb-1">
                <div>Số Bizxu đã mua: </div>
                <h5 className="text-white">
                  <span className="align-middle mr-2">
                    {statisticTotal?.sumbizxu || 0} Bizxu
                  </span>
                  <Bizxu color="white" />
                </h5>
              </Button.Ripple>
            </Col>
          </Row>
        </CardHeader>
        <CardBody className="pt-1">
          <Nav tabs>
            <NavItem>
              <NavLink
                className="border-0"
                active={active === '1'}
                onClick={() => {
                  toggle('1')
                }}
              >
                Gói Bizxu
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="border-0"
                active={active === '2'}
                onClick={() => {
                  toggle('2')
                }}
              >
                Lịch sử mua Bizxu
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="border-0"
                active={active === '3'}
                onClick={() => {
                  toggle('3')
                }}
              >
                Yêu cầu giao dịch
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent className="py-50" activeTab={active}>
            <TabPane tabId="1">
              <PackageBizxuPage />
            </TabPane>
            <TabPane tabId="2">
              {/* <StatisticBizxu /> */}
              <TableHistoryBizxuCenterPage />
            </TabPane>
            <TabPane tabId="3">
              {/* <StatisticBizxu /> */}
              <TableRequestBizxuCenterPage />
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </div>
  )
}

export default BizxuCenter
