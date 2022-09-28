import {lazy} from 'react'

const CustomerRoutes = [
  {
    path: '/admin/potential-customers',
    exact: true,
    component: lazy(() => import('@services/customer-leads/pages')),
  },
  {
    path: '/admin/potential-customers/user/:uid',
    exact: true,
    component: lazy(() =>
      import('@services/customer-leads/pages/CustomerLeadDetail'),
    ),
  },

  {
    path: '/admin/khach-hang/:type',
    exact: true,
    component: lazy(() =>
      import('pages/managements/crm/customer/CustomerPage'),
    ),
  },
]
export default CustomerRoutes
