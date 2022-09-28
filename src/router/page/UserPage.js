import {lazy} from 'react'

const UserRoutes = [
  {
    path: '/v2/user/:id/profile/:type',
    exact: true,
    component: lazy(() => import('@services/profile/pages/profileV2')),
  },
  {
    path: '/user/:id/profile/:type',
    exact: true,
    component: lazy(() => import('@services/profile/pages/profile')),
  },

  {
    path: '/my-course/start/:slug',
    exact: true,
    component: lazy(() =>
      import('@services/courses/components/user/start-course'),
    ),
  },
  {
    path: '/my-course/start/:slug/:type',
    exact: true,
    className: 'detail-course',
    component: lazy(() =>
      import('@services/courses/components/user/start-course'),
    ),
    meta: {
      publicRoute: true,
    },
  },
]

export default UserRoutes
