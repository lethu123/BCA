import {lazy} from 'react'

const HomePageRoutes = [
  // -------- HOME ----------------- //
  {
    path: '/home',
    exact: true,
    component: lazy(() => import('@services/home/Home')),
  },
  {
    path: '/post/:id',
    exact: true,
    component: lazy(() => import('@services/post/pages/PostDetail')),
  },
  {
    path: '/nhom/chi-tiet-nhom',
    exact: true,
    className: 'detail-group',
    component: lazy(() => import('@services/group/pages/DetailGroup')),
  },
  {
    path: '/home/group/:type',
    exact: true,
    component: lazy(() => import('@services/group/pages')),
  },

  {
    path: '/home/diem-hoc-tap',
    exact: true,
    component: lazy(() =>
      import('@services/courses/components/home/group-training'),
    ),
  },
  // {
  //   path: '/v1/group/:id',
  //   exact: true,
  //   className: 'detail-group',
  //   component: lazy(() => import('@services/group/pages/DetailGroup')),
  // },
  {
    path: '/group/:id',
    exact: true,
    className: 'detail-group',
    component: lazy(() => import('@services/group/pages/detail-group')),
  },
  {
    path: '/group/post-detail/:id',
    exact: true,
    component: lazy(() => import('@services/group/pages/GroupPostDetail')),
  },
  {
    path: '/home/event',
    exact: true,
    component: lazy(() => import('@services/event/pages')),
  },

  {
    path: '/home/event/:id',
    exact: true,
    component: lazy(() => import('@services/event/pages/EventDetail')),
  },
  {
    path: '/home/marketplace',
    exact: true,
    component: lazy(() => import('@services/marketplace')),
  },
  {
    path: '/home/gioi-thieu-yc-truy-cap',
    exact: true,
    
    component: lazy(() => import('@services/request-access/pages')),
  },
  {
    path: '/home/biz-xu',
    exact: true,
    component: lazy(() => import('@services/bizxu/pages/BizxuCenter')),
  },
  {
    path: '/home/mua-du-lieu-du-an/:type',
    exact: true,
    component: lazy(() => import('@services/project/buy-data')),
  },
  {
    path: '/home/mua-du-lieu-du-an',
    exact: true,
    component: lazy(() => import('@services/project/buy-data')),
  },
  {
    path: '/home/kinh-nghiem-khach-hang',
    exact: true,
    component: lazy(() =>
      import(
        '@services/home/components/customer-experience/CustomerExperiencePage'
      ),
    ),
  },
  {
    path: '/home/mua-du-lieu-du-an/chi-tiet/:id',
    exact: true,
    

    component: lazy(() =>
      import('@services/project/components/project-detail/ProjectDetail'),
    ),
  },
  {
    path: '/home/landingpage',
    exact: true,
    component: lazy(() => import('@services/landingpage/LandingPage')),
  },
  {
    path: '/home/du-lieu-cua-ban',
    exact: true,
    component: lazy(() => import('@services/your-data/YourDataPage')),
  },

  // -------- TASKs ----------------- //
  {
    path: '/tasks',
    exact: true,
    component: lazy(() => import('pages/task/TaskPage')),
  },
  {
    path: '/chat',
    exact: true,
    component: lazy(() => import('pages/chat/ChatPage')),
  },

  // -------- STAR ----------------- //
  {
    path: '/nhan-diem-tich-luy',
    exact: true,
    component: lazy(() => import('pages/data-mining/DataMiningPage')),
  },
  // -------- DISCUSSION ----------------- //
  {
    path: '/newfeed',
    exact: true,
    component: lazy(() => import('@services/home/components/newfeed/NewFeed')),
  },
  // {
  //   path: '/my-cart',
  //   exact: true,
  //   component: lazy(() => import('pages/home/checkout/CheckoutPage')),
  // },
  // {
  //   path: '/payment',
  //   exact: true,
  //   component: lazy(() => import('pages/home/payment/Payment')),
  // },
  // -------- OTHER FUNCTION ------------ //
  {
    path: '/home/tao-ma-khuyen-mai',
    exact: true,
    component: lazy(() =>
      import('@services/home/components/promotionCode/PromotionCode'),
    ),
  },
  // -----------------  COURSE -------------- //
  {
    path: '/home/BCA-khoi-nghiep',
    exact: true,
    component: lazy(() => import('pages/home/courses/HomeCoursePage')),
  },
  {
    path: '/home/BCA-khoi-nghiep/test',
    exact: true,
    component: lazy(() =>
      import('@services/courses/components/home/test/TestCourse'),
    ),
  },
  // {
  //   path: '/home/dao-tao-ki-nang',
  //   exact: true,
  //   component: lazy(() => import('pages/home/courses/HomeCoursePage')),
  // },

  {
    path: '/home/dao-tao-ki-nang/test',
    exact: true,
    component: lazy(() =>
      import('@services/courses/components/home/test/TestCourse'),
    ),
  },
]

export default HomePageRoutes
