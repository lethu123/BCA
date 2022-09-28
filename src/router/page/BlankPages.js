import {lazy} from 'react'

const HomePageRoutes = [
  {
    path: '/login',
    component: lazy(() => import('pages/auth/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true,
    },
  },
  {
    path: '/set-avatar',
    component: lazy(() => import('pages/auth/SetAvatar')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true,
    },
  },
  {
    path: '/come-on',
    component: lazy(() => import('pages/auth/ComeOn')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true,
    },
  },
  {
    path: '/register',
    exact: true,
    component: lazy(() => import('pages/auth/Register')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true,
    },
  },
  {
    path: '/forgot-password',
    exact: true,
    component: lazy(() => import('pages/auth/ForgotPassword')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true,
    },
  },
  {
    path: '/confirm-password',
    exact: true,
    component: lazy(() => import('pages/auth/PasswordConfirm')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true,
    },
  },
  {
    path: '/reset-password',
    exact: true,
    component: lazy(() => import('pages/auth/ResetPassword')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true,
    },
  },
  {
    path: '/coming-soon',
    exact: true,
    component: lazy(() => import('pages/blank/ComingSoon')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true,
    },
  },
  {
    path: '/not-authorized',
    exact: true,
    component: lazy(() => import('pages/blank/NotAuthorized')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true,
    },
  },
  {
    path: '/maintenance',
    exact: true,
    component: lazy(() => import('pages/blank/Maintenance')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true,
    },
  },
  {
    path: '/error',
    exact: true,
    component: lazy(() => import('pages/blank/Error')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true,
    },
  },
  {
    path: '/welcome',
    exact: true,
    component: lazy(() => import('pages/blank/Welcome')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true,
    },
  },
  {
    path: '/verify-email',
    exact: true,
    component: lazy(() => import('pages/blank/VerifyEmail')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true,
    },
  },
]

export default HomePageRoutes
