import {lazy} from 'react'

const NotificationPageRoutes = [
  {
    path: '/notifications',
    exact: true,
    component: lazy(() => import('pages/notification/NotificationPage')),
  },
]

export default NotificationPageRoutes
