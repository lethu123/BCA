import {lazy} from 'react'
const CampaignRoutes = [
  {
    path: '/admin/campaign',
    exact: true,
    component: lazy(() => import('@services/campaign/pages/List')),
  },
  {
    path: '/admin/campaign/:campaignId',
    exact: true,
    component: lazy(() => import('@services/campaign/pages/Detail')),
  },
  {
    path: '/admin/campaign-history/:uid/:campaignId/',
    exact: true,
    component: lazy(() => import('@services/campaign/pages/UidHistory')),
  },
]

export default CampaignRoutes
