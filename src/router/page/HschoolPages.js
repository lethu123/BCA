import {lazy} from 'react'

const HschoolRoutes = [
  // {
  //   path: '/hschool/method&tools',
  //   component: lazy(() => import('pages/home/school//tools&methods/index')),
  // },
  {
    path: '/hschool/course/start-up',
    exact: true,
    component: lazy(() =>
      import('pages/home/school/courses/startups/courses/CourseMainStartup'),
    ),
  },

  {
    path: '/hschool/course/start-up/tool/customer-profile',
    exact: true,
    component: lazy(() =>
      import(
        'pages/home/school/courses/startups/lessons/part-one/ModalEditDetailCanvas/EditDetalCanvas.component'
      ),
    ),
  },

  {
    path: '/hschool/course/start-up/tool/Test',
    exact: true,
    component: lazy(() =>
      import(
        'pages/home/school/courses/startups/lessons/part-one/ModalKiemChung/EditDetalCanvas.component'
      ),
    ),
  },

  // {
  //   path: '/hschool/course/start-up/:name_course',
  //   exact: true,
  //   component: lazy(() =>
  //     import(
  //       'pages/home/school/courses/startups/course-detail/DetailCourseStartup'
  //     ),
  //   ),
  // },
  {
    path: '/hschool/course/start-up/:name_course/:name_lesson',
    exact: true,
    component: lazy(() =>
      import('pages/home/school/courses/startups/lessons/MainLessonStartup2'),
    ),
  },
  // {
  //   path: '/hschool/intro',
  //   component: lazy(() =>
  //     import('pages/home/school//landingpage/LandingPageHschool'),
  //   ),
  // },
  {
    path: '/hschool/teachers',
    component: lazy(() => import('pages/home/school/teacher/TeacherMain')),
  },
  {
    path: '/home/dao-tao-ki-nang/:id',
    component: lazy(() =>
      import(
        'pages/home/school/courses/startups/course-detail/DetailCourseStartup'
      ),
    ),
  },
  {
    path: '/home/dao-tao-ki-nang',
    component: lazy(() =>
      import('pages/home/school/courses/categories/CourseCenter'),
    ),
  },

  {
    path: '/hschool/categories/:id',
    className: 'ecommerce-application',
    exact: true,
    component: lazy(() =>
      import('pages/home/school/courses/categories/CategoriesMain.jsx'),
    ),
  },
  {
    path: '/hschool/courses/detail/:name_course',
    exact: true,
    // className: 'ecommerce-application',
    // component: lazy(() =>
    //   import('pages/home/school/courses/detail-course/DetailCourse'),
    // ),
  },
  {
    path: '/hschool/courses/view-class/:name_course',
    exact: true,
    // className: 'ecommerce-application',
    component: lazy(() =>
      import(
        'pages/home/school/teacher/managements/view-abstract/ViewAbstractMain.component'
      ),
    ),
  },
  {
    path: '/hschool/courses/view-class-st/:name_course',
    exact: true,
    // className: 'ecommerce-application',
    component: lazy(() =>
      import(
        'pages/home/school/teacher/managements/view-abstract/ViewAbstractStudentMain.component copy'
      ),
    ),
  },
  // {
  //   path: '/hschool/courses/:name_course/lesson/:name_lesson',
  //   exact: true,
  //   // className: 'ecommerce-application',
  //   component: lazy(() => import('pages/home/school//courses/lessons/Lesson')),
  // },
  {
    path: '/hschool/course/dashboard/:topic',
    exact: true,
    component: lazy(() =>
      import(
        'pages/home/school/courses/managements/CourseMainDashboard.component'
      ),
    ),
  },
  {
    path: `/hschool/course/courses/managements/my-quizzes/add-question/:id`,
    exact: true,
    component: lazy(() =>
      import(
        'pages/home/school/courses/managements/myQuizzes/MyQuizzesAddQuestion.component'
      ),
    ),
  },
  {
    path: `/hschool/courses/managements/my-quizzes/detail-question/:id`,
    exact: true,
    component: lazy(() =>
      import(
        'pages/home/school/courses/managements/myQuizzes/QuestionMyQuizzed.component'
      ),
    ),
  },
  {
    path: '/hschool/course/edit-course/:slug',
    exact: true,
    component: lazy(() =>
      import(
        'pages/home/school/courses/managements/myCourse/EditCourse.component'
      ),
    ),
  },
  {
    path: '/hschool/course/checkout',
    className: 'ecommerce-application',
    exact: true,
    component: lazy(() => import('pages/home/checkout')),
  },
  {
    path: '/hschool/course/invoice/:id',
    exact: true,
    component: lazy(() => import('pages/home/school/invoice/preview')),
  },
  {
    path: '/invoice/print',
    layout: 'BlankLayout',
    component: lazy(() => import('pages/home/school/invoice/print')),
  },
  {
    path: '/my-course/start/:slug/:type',
    exact: true,
    component: lazy(() =>
      import('@services/courses/components/user/start-course'),
    ),
  },
]

export default HschoolRoutes
