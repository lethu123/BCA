import {lazy} from 'react'

const AutomationRoutes = [
  {
    path: '/admin/automation/auto-job',
    exact: true,
    component: lazy(() => import('@services/automation/pages/AutomationPage')),
  },
  {
    path: '/admin/automation/auto-task',
    exact: true,
    component: lazy(() => import('@services/automation/pages/AutomationPage')),
  },
  {
    path: '/admin/automation/filter',
    exact: true,
    component: lazy(() => import('@services/automation/pages/AutomationPage')),
  },
  {
    path: '/admin/automation/auto-job/:id/:type',
    exact: true,
    component: lazy(() => import('@services/automation/auto-flow')),
  },
  {
    path: '/admin/automation/auto-task/:id',
    exact: true,
    component: lazy(() => import('@services/automation/auto-flow')),
  },
  {
    path: '/admin/automation/email-builder/:id',
    exact: true,
    component: lazy(() => import('@services/automation/pages/EmailBuilder')),
  },
  {
    path: '/admin/automation/:id/:type',
    exact: true,
    component: lazy(() =>
      import('@services/automation/pages/AutomationAccountFacebook'),
    ),
  },
]

export default AutomationRoutes
