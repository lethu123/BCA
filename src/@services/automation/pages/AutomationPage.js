import React, {useEffect, useState} from 'react'
import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap'
import {Breadcrumb, BreadcrumbItem} from 'reactstrap'
import {Link, useLocation, useHistory} from 'react-router-dom'
import {useQueryClient} from 'react-query'

//*** Component
import AutoJobPage from './AutoJobPage'
// import AutoTaskPage from './AutoTaskPage'
import AutomationFilter from './AutomationFilter'

// *** Query
import AutomationQuery from '@services/automation/hook/query'

// *** scss
import '../scss/Automation.style.scss'
const ROUTERS = [
  {
    id: '1',
    path: '/auto-job',
    name: 'Kịch bản (Auto job)',
    component: <AutoJobPage />,
  },
  // {id: '2', path: '/auto-task', name: 'Auto task', component: <AutoTaskPage />},
  {
    id: '3',
    path: '/filter',
    name: 'Bộ lọc',
    component: <AutomationFilter />,
  },
]
const AutomationPage = () => {
  // ** query
  const {
    prefetchBlockTypeAction,
    prefetchBlockTypeDecision,
    prefetchBlockTypeFacebookAction,
    prefetchListPhoneToSMS,
    prefetchListTemplateSMS,
    prefetchListSampleLibary,
    prefetchListComment,
    prefetchListAccountFB,
    prefetchListEmailToSendEmail,
    ListLibraryNotification,
  } = AutomationQuery

  const [activeAutomation, setActiveAutomation] = useState('1')
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    if (location) {
      ROUTERS.map(
        item =>
          location.pathname?.includes(item.path) &&
          setActiveAutomation(item.id),
      )
    }
  }, [location])

  const toggle = tab => {
    if (activeAutomation !== tab) {
      setActiveAutomation(tab)
    }
  }

  const queryClient = useQueryClient()

  useEffect(() => {
    const {key: key1, fn: fn1} = prefetchBlockTypeAction()
    queryClient.prefetchQuery(['block_automation', key1], () => fn1)

    const {key: key2, fn: fn2} = prefetchBlockTypeDecision()
    queryClient.prefetchQuery(['block_automation', key2], () => fn2)

    const {key: key3, fn: fn3} = prefetchBlockTypeFacebookAction({
      page: 1,
      limit: 20,
    })
    queryClient.prefetchQuery(['block_automation', key3], () => fn3)

    const {key: key4, fn: fn4} = prefetchListPhoneToSMS()
    queryClient.prefetchQuery(['listphone', key4], () => fn4)

    const {key: key5, fn: fn5} = prefetchListTemplateSMS({
      page: 1,
      limit: 5,
    })
    queryClient.prefetchQuery(['listsms', key5], () => fn5)

    const {key: key6, fn: fn6} = prefetchListSampleLibary({
      page: 1,
      limit: 5,
    })
    queryClient.prefetchQuery(['listsamplelibary', key6], () => fn6)

    const {key: key7, fn: fn7} = prefetchListComment({
      page: 1,
      limit: 5,
    })
    queryClient.prefetchQuery(['listcommentlibary', key7], () => fn7)

    const {key: key8, fn: fn8} = prefetchListAccountFB()
    queryClient.prefetchQuery(['accountfb', key8], () => fn8)

    const {key: key9, fn: fn9} = prefetchListEmailToSendEmail()
    queryClient.prefetchQuery(['listemail', key9], () => fn9)

    const {key: key10, fn: fn10} = ListLibraryNotification({
      page: 1,
      limit: 5,
    })
    queryClient.prefetchQuery(['librarynotification', key10], () => fn10)
  }, [])

  return (
    <div style={{backgroundColor: '#fff'}} className=" automation-page">
      <Breadcrumb className="py-3 mb-0">
        <BreadcrumbItem>
          <Link to="/home"> Trang Chủ </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="#"> Automation</Link>
        </BreadcrumbItem>
        <BreadcrumbItem
          className="mb-0"
          active
          style={{cursor: 'context-menu'}}
        >
          <span>
            {ROUTERS.find(item => item.id === activeAutomation)?.name}
          </span>
        </BreadcrumbItem>
      </Breadcrumb>

      <div>
        <Nav tabs>
          {ROUTERS.map(item => (
            <NavItem key={item.id}>
              <NavLink
                className="border-0"
                active={activeAutomation === item.id}
                onClick={() => {
                  toggle(item.id)
                  history.push(`/admin/automation${item.path}`)
                }}
              >
                {item.name}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        <TabContent className="py-50" activeTab={activeAutomation}>
          {ROUTERS.map(r => (
            <TabPane key={r.id} tabId={r.id}>
              {r.component}
            </TabPane>
          ))}
        </TabContent>
      </div>
    </div>
  )
}

export default AutomationPage
