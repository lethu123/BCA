import {lazy} from 'react'
const AdminPageRoutes = [
  // ------------------- Quản trị Data Center ------------------
  // ------------------- DATA CENTER ------------------
  {
    path: '/admin/data-center/:type',
    exact: true,
    component: lazy(() => import('@services/data-center/pages/DataCenterPage')),
  },
  // ---------- Dự án -----------
  {
    path: '/admin/du-an/:type',
    exact: true,
    component: lazy(() => import('@services/project/page/ProjectPage')),
  },
  {
    path: '/admin/du-an/quan-ly-cac-du-an/1',
    exact: true,
    component: lazy(() => import('@services/project/page/ProjectDetailPage')),
  },
  {
    path: '/admin/du-an/quan-ly-cac-du-an/1/chi-tiet',
    exact: true,
    component: lazy(() => import('@services/project/page/ProjectInfoPage')),
  },
  // ------------------- Thông tin ứng viên ------------------
  {
    path: '/admin/thong-tin-ung-vien',
    exact: true,
    component: lazy(() =>
      import('@services/profile-user-admin/page/ProfileUserPage'),
    ),
  },
  // ------------------- Bizxu ------------------
  {
    path: '/admin/bizxu/:type',
    exact: true,
    component: lazy(() => import('@services/bizxu/pages/BizxuAdmin')),
  },

  // ------------------- Landing Page ------------------
  {
    path: '/admin/landingpage/landingpage-thanh-vien/1',
    exact: true,
    component: lazy(() => import('@services/landingpage/DetailLandingpage')),
  },
  {
    path: '/admin/landingpage/:type',
    exact: true,
    component: lazy(() => import('@services/landingpage/LandingAdmin')),
  },

  // Customer Experience

  // --------------- Quản trị cộng đồng BCA ----------

  // --------------- Thành viên BCA ----------
  {
    path: '/admin/thanh-vien-BCA/:type',
    exact: true,
    component: lazy(() =>
      import('pages/managements/community-bca/member-bca/MemberBCAPage'),
    ),
  },
  {
    path: '/admin/thanh-vien-BCA/thong-tin-thanh-vien/1',
    exact: true,
    component: lazy(() =>
      import(
        'pages/managements/community-bca/member-bca/manage-member/member-detail/MemberDetailPage'
      ),
    ),
  },

  // --------------- Khóa học ----------
  {
    path: '/admin/khoa-hoc',
    exact: true,
    component: lazy(() =>
      import('pages/managements/community-bca/courses/CoursesPage'),
    ),
  },
  {
    path: '/admin/khoa-hoc/:type',
    exact: true,
    component: lazy(() =>
      import('pages/managements/community-bca/courses/CoursesPage'),
    ),
  },
  {
    path: '/admin/tao-khoa-hoc',
    exact: true,
    component: lazy(() =>
      import('@services/courses/components/admin/create-course/index'),
    ),
  },
  // --------------- Yêu cầu truy cập ----------
  {
    path: '/admin/yeu-cau-truy-cap',
    exact: true,
    component: lazy(() =>
      import('@services/request-access/pages/AdminRequestAccess'),
    ),
  },
  // --------------- Quản lý cộng đồng ----------
  {
    path: '/admin/quan-ly-cong-dong/:type',
    exact: true,
    component: lazy(() =>
      import(
        'pages/managements/community-bca/manage-community/ManageCommunityPage'
      ),
    ),
  },
  // --------------- Marketplace ----------
  {
    path: '/admin/marketplace',
    exact: true,
    component: lazy(() =>
      import('pages/managements/community-bca/marketplace/MarketPlace'),
    ),
  },

  // ------------------- Chức năng khác ------------------
  // ------------------- Cài đặt thông báo ------------------

  {
    path: '/admin/cai-dat-thong-bao',
    exact: true,
    component: lazy(() =>
      import('@services/notification/pages/SettingNotification'),
    ),
  },
  // ------------------- Cấu hình Data ------------------
  {
    path: '/admin/cau-hinh-data/:type',
    exact: true,
    component: lazy(() =>
      import(
        'pages/managements/other-functions/dataConfiguration/DataConfiguration'
      ),
    ),
  },
  // ------------------- Chức năng tài khoản ------------------
  {
    path: '/admin/chuc-nang-tai-khoan/:type',
    exact: true,
    component: lazy(() =>
      import('pages/managements/other-functions/account/Account'),
    ),
  },
  // ------------------- Chức năng quản trị khác ------------------
  {
    path: '/admin/chuc-nang-quan-tri-khac/:type',
    exact: true,
    component: lazy(() =>
      import(
        'pages/managements/other-functions/administrativeFunction/AdministrativeFunction'
      ),
    ),
  },

  // ----- email --------
  {
    path: '/admin/email/:type',
    exact: true,
    className: 'email-application',
    // component: lazy(() => import('pages/admin/email/EmailPage')),
    component: lazy(() => import('pages/managements/crm/email/EmailPage')),
  },
  {
    path: '/admin/email-inbox/:folder',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('pages/managements/crm/email/inbox')),
    meta: {
      navLink: '/admin/email/quan-ly-email',
    },
  },
  {
    path: '/admin/email/label/:label',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('pages/managements/crm/email/inbox')),
    meta: {
      navLink: '/admin/email/quan-ly-email',
    },
  },
  {
    path: '/admin/email-inbox/:filter',
    component: lazy(() => import('pages/managements/crm/email/inbox')),
    meta: {
      navLink: '/admin/email/quan-ly-email',
    },
  },
  // -------- end email --------
  {
    path: '/admin/call-catelog',
    exact: true,
    // component: lazy(() => import('pages/user/UserPage')),
  },
  {
    path: '/admin/social-network',
    exact: true,
    // component: lazy(() => import('pages/user/UserPage')),
  },
  // ----------- ADMIN ------
  {
    path: '/admin/products',
    exact: true,
    component: lazy(() => import('@services/home/components/product/Product')),
  },
  // ------ start Warehouse ------------- //
  {
    path: '/admin/warehouse',
    exact: true,
    component: lazy(() => import('pages/managements/warehouse')),
  },
  /**
   * type: warehouse-model (mô hình quản lí kho), stock-in (nhập kho), stock-out (xuất kho), moving-warehouse (chuyển kho), stock-check-list (kiểm kê), inventory (tồn kho), warehouse
   *  */
  {
    path: '/admin/warehouse/:type',
    exact: true,
    component: lazy(() => import('pages/managements/warehouse')),
  },
  // ------ end Warehouse ------------- //
  {
    path: '/admin/sell',
    exact: true,
    // component: lazy(() => import('pages/user/UserPage')),
  },
  {
    path: '/admin/purchase',
    exact: true,
    // component: lazy(() => import('pages/user/UserPage')),
  },
  {
    path: '/admin/members',
    exact: true,
    // component: lazy(() => import('pages/user/UserPage')),
  },
  {
    path: '/admin',
    exact: true,
    // component: lazy(() => import('pages/user/UserPage')),
  },

  // ------------------- Task ------------------
  {
    path: '/admin/task',
    exact: true,
    component: lazy(() => import('pages/managements/crm/task/TaskPage')),
  },
  // ------------------- Call center ------------------
  {
    path: '/admin/call-center/:type',
    exact: true,
    component: lazy(() =>
      import('pages/managements/crm/call-center/CallCenterPage'),
    ),
  },
  // ------------------- Chăm sóc FB ------------------
  {
    path: '/admin/cham-soc-facebook/:type',
    exact: true,
    component: lazy(() =>
      import('pages/managements/crm/take-care-facebook/TakeCareFBPage'),
    ),
  },
]

export default AdminPageRoutes
