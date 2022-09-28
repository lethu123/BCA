import {useState} from 'react'
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
import {Link} from 'react-router-dom'

// *** Custom Components
import StatisticEmailPage from './StatisticEmailPage'
import EmailDataTablePage from './EmailDataTablePage'
import ComposePopup from './inbox/ComposePopup'
import LibEmailPage from './LibEmailPage'

// *** Styles
import '@core/scss/react/apps/app-email.scss'
import '../Custom.style.scss'

const EmailPage = () => {
  const [active, setActive] = useState('1')
  const [composeOpen, setComposeOpen] = useState(false)

  // *** Toggle Compose Function
  const toggleCompose = () => {
    setComposeOpen(!composeOpen)
  }
  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  return (
    <div className="content-body">
      <Card>
        <Breadcrumb className="p-3 border-bottom">
          <BreadcrumbItem>
            <Link to="/home">
              <span className="svg-icon svg-icon-info svg-icon-2x mr-2">
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
                    <polygon points="0 0 24 0 24 24 0 24" />
                    <path
                      d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                      fill="#000000"
                      fillRule="nonzero"
                      opacity="0.3"
                    />
                    <path
                      d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                      fill="#000000"
                      fillRule="nonzero"
                    />
                  </g>
                </svg>
              </span>
              Admin
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/home"> Marketing </Link>
          </BreadcrumbItem>
          <BreadcrumbItem active style={{cursor: 'context-menu'}}>
            <span> Email </span>
          </BreadcrumbItem>
        </Breadcrumb>

        {/* menu khi thác khách hàng tiềm năng */}
        <CardBody className="pt-0">
          <Nav tabs className="mt-5">
            <NavItem>
              <NavLink
                className="border-0"
                active={active === '1'}
                onClick={() => {
                  toggle('1')
                }}
              >
                Quản lý Email
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
                Thư viện Email mẫu
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent className="py-50" activeTab={active}>
            <TabPane tabId="1">
              <StatisticEmailPage />
              <EmailDataTablePage toggleCompose={toggleCompose} />
            </TabPane>
            <TabPane tabId="2">
              <LibEmailPage />
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>

      <ComposePopup composeOpen={composeOpen} toggleCompose={toggleCompose} />
    </div>
  )
}

export default EmailPage
