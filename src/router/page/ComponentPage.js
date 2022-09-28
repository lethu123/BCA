import {lazy} from 'react'

const ComponentRoutes = [
  // -------- HOME ----------------- //
  {
    path: '/component/form',
    exact: true,
    component: lazy(() => import('components/form')),
  },
]

export default ComponentRoutes
