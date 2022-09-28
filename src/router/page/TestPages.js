import {lazy} from 'react'

const TestRoutes = [
  {
    path: '/test/form',
    exact: true,
    component: lazy(() => import('components/form')),
  },
]

export default TestRoutes
