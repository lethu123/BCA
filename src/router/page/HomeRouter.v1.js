import {lazy} from 'react'
const HomeRouterV1 = [
  {
    path: '/v1/newsfeed',
    exact: true,
    component: lazy(() => import('@services/news-feed-v1/pages')),
  },
  {
    path: '/v1/group',
    exact: true,
    component: lazy(() => import('@services/group-v1/pages')),
  },
  {
    path: '/v1/group/detail/:id',
    exact: true,
    component: lazy(() => import('@services/group-v1/pages/GroupDetailPages')),
  },
  {
    path: '/v1/group/detail/:id/:type',
    exact: true,
    component: lazy(() => import('@services/group-v1/pages/GroupDetailPages')),
  },
  {
    path: '/v1/group/create-group',
    exact: true,
    component: lazy(() => import('@services/group-v1/pages/GroupCreatePages')),
  },
  {
    path: '/v1/event',
    exact: true,
    component: lazy(() => import('@services/event-v1/pages')),
  },
  {
    path: '/v1/event/:type',
    exact: true,
    component: lazy(() => import('@services/event-v1/pages')),
  },
  {
    path: '/v1/event/detail/:id',
    exact: true,
    component: lazy(() => import('@services/event-v1/pages/EventDetail')),
  },
]

export default HomeRouterV1
