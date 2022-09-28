import {lazy} from 'react'

const LandingPageRoutes = [
  {
    path: '/landingpage/:uid',
    component: lazy(() => import('pages/landing-page/index')),
    layout: 'BlankLayout',
  },

]

export default LandingPageRoutes
