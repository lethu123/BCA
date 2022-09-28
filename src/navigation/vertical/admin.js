import {Database, Circle, FileText, Users, Codepen, User} from 'react-feather'

const admin = [
  {
    header: 'Admin Management',
  },
  {
    id: 'data-center',
    title: 'Quản trị Data Center',
    icon: <Database size={20} />,
    children: [
      {
        id: 'data-center-admin',
        title: 'Data Center',
        icon: <Circle size={12} />,
        navLink: '/admin/data-center/quan-ly-du-lieu',
      },
      {
        id: 'project',
        title: 'Dự án',
        icon: <Circle size={12} />,
        navLink: '/admin/du-an/quan-ly-cac-du-an',
      },
      {
        id: 'bizxu',
        title: 'Bizxu',
        icon: <Circle size={12} />,
        navLink: '/admin/bizxu/quan-ly-cac-goi-bizxu',
      },
      {
        id: 'landingpage-admin',
        title: 'Landingpage',
        icon: <Circle size={12} />,
        navLink: '/admin/landingpage/landingpage-thanh-vien',
      },
    ],
  },
  {
    id: 'customer',
    title: 'Khách hàng',
    icon: <User size={20} />,
    children: [
      {
        id: 'customer',
        title: 'Khách hàng',
        icon: <Circle size={12} />,
        navLink: '/admin/khach-hang/thong-tin-khach-hang',
      },
      {
        id: 'customer-ex',
        title: 'Khai thác KHTN',
        icon: <Circle size={12} />,
        navLink: '/admin/exploit-potential-customers',
      },
      {
        id: 'customer-leads',
        title: 'Khách hàng tiềm năng',
        icon: <Circle size={12} />,
        navLink: '/admin/potential-customers',
      },
    ],
  },
  {
    id: 'community',
    title: 'Cộng đồng BCA',
    icon: <Users size={20} />,
    children: [
      {
        id: 'member',
        title: 'Thành viên BCA',
        icon: <Circle size={12} />,
        navLink: '/admin/thanh-vien-BCA/quan-ly-thanh-vien',
      },
      {
        id: 'course-admin',
        title: 'Khóa học',
        icon: <Circle size={12} />,
        navLink: '/admin/khoa-hoc',
      },
      {
        id: 'request-access-admin',
        title: 'Yêu cầu truy cập',
        icon: <Circle size={12} />,
        navLink: '/admin/yeu-cau-truy-cap',
      },
      {
        id: 'management-community',
        title: 'Quản lý cộng đồng',
        icon: <Circle size={12} />,
        navLink: '/admin/quan-ly-cong-dong/quan-ly-bai-viet',
      },
    ],
  },
  {
    id: 'other',
    title: 'Chức năng khác',
    icon: <FileText size={20} />,
    children: [
      {
        id: 'noti-admin',
        title: 'Cài đặt thông báo',
        icon: <Circle size={12} />,
        navLink: '/admin/cai-dat-thong-bao',
      },
      {
        id: 'config-data',
        title: 'Cấu hình Data',
        icon: <Circle size={12} />,
        navLink: '/admin/cau-hinh-data/so-luong',
      },
      {
        id: 'func-account',
        title: 'Chức năng tài khoản',
        icon: <Circle size={12} />,
        navLink: '/admin/chuc-nang-tai-khoan/cap-dai-ly',
      },
      {
        id: 'manager-other',
        title: 'Chức năng quản trị khác',
        icon: <Circle size={12} />,
        navLink: '/admin/chuc-nang-quan-tri-khac/khu-vuc-noi-bat',
      },
    ],
  },
  // {
  //   id: 'cms&automation',
  //   title: 'CMS & Automation',
  //   icon: <Codepen size={20} />,
  //   children: [
  //     {
  //       id: 'campain',
  //       title: 'Chiến dịch',
  //       icon: <Circle size={12} />,
  //       navLink: '/admin/campaign',
  //     },
  //     {
  //       id: 'automation',
  //       title: 'Automation',
  //       icon: <Circle size={12} />,
  //       navLink: '/admin/automation/auto-job',
  //     },
  //     {
  //       id: 'csfb',
  //       title: 'Tài khoản Facebook',
  //       icon: <Circle size={12} />,
  //       navLink: '/admin/automation/account-facebook/list',
  //     },

  //     {
  //       id: 'task-admin',
  //       title: 'Task',
  //       icon: <Circle size={12} />,
  //       navLink: '/admin/task',
  //     },
  //     {
  //       id: 'email',
  //       title: 'Email',
  //       icon: <Circle size={12} />,
  //       navLink: '/admin/email/quan-ly-email',
  //     },

  //     {
  //       id: 'call-center',
  //       title: 'Trung tâm cuộc gọi',
  //       icon: <Circle size={12} />,
  //       navLink: '/admin/call-center/khach-hang',
  //     },
  //   ],
  // },
]

export default admin
