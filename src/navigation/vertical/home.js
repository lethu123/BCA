import {Bizxu, MyData} from 'components/icon'
import {
  Calendar,
  Tv,
  Book,
  UserPlus,
  Star,
  Database,
  BookOpen,
  Bell,
  MessageSquare,
  Users,
  Archive,
  Codesandbox,
  Coffee,
  Circle,
  HardDrive,
  DollarSign,
} from 'react-feather'

const home = [
  {
    header: 'Trang chủ',
  },
  {
    id: 'news',
    title: 'Bảng tin',
    icon: <Tv size={20} />,
    navLink: '/home',
  },
  // {
  //   id: 'study_score',
  //   title: 'nhóm',
  //   icon: <Book size={20} />,
  //   navLink: '/home/diem-hoc-tap',
  // },
  {
    id: 'group-home',
    title: 'Nhóm',
    icon: <Users size={20} />,
    navLink: '/home/group/kham-pha',
  },
  {
    id: 'event',
    title: 'Sự kiện',
    icon: <Calendar size={20} />,
    navLink: '/home/event',
  },
  // {
  //   id: 'marketplace',
  //   title: 'Marketplace',
  //   icon: <Archive size={20} />,
  //   navLink: '/home/marketplace',
  // },
  {
    id: 'introduce',
    title: 'Yêu cầu truy cập',
    icon: <UserPlus size={20} />,
    navLink: '/home/gioi-thieu-yc-truy-cap',
  },
  {
    id: 'notification',
    title: 'Thông báo',
    icon: <Bell size={20} />,
    navLink: '/notifications',
  },
  // {
  //   id: 'chat',
  //   title: 'Chat',
  //   icon: <MessageSquare size={20} />,
  //   navLink: '/chat',
  // },
  {
    header: 'Data Center',
  },
  {
    id: 'bizxu-home',
    title: 'Bizxu',
    icon: <DollarSign size={20} />,
    navLink: '/home/biz-xu',
  },
  {
    id: 'by-data',
    title: 'Mua dữ liệu Dự án',
    icon: <Codesandbox size={20} />,
    navLink: '/home/mua-du-lieu-du-an',
  },
  {
    id: 'customer-ex',
    title: 'Kinh nghiệm KH',
    icon: <Database size={20} />,
    navLink: '/home/kinh-nghiem-khach-hang',
  },
  {
    id: 'customer-ex',
    title: 'LandingPage',
    icon: <Coffee size={20} />,
    navLink: '/home/landingpage',
  },
  {
    id: 'my-data',
    title: 'Dữ liệu của bạn',
    icon: <HardDrive size={20} />,
    navLink: '/home/du-lieu-cua-ban',
  },
  {
    header: 'Chức năng khác',
  },
  {
    id: 'todo-list',
    title: 'To do list',
    icon: <BookOpen size={20} />,
    navLink: '/home/to-do-list',
  },
  {
    id: 'create-voucher',
    title: 'Tạo mã khuyến mãi',
    icon: <BookOpen size={20} />,
    navLink: '/home/tao-ma-khuyen-mai',
  },

  {
    header: 'BCA Training',
  },
  {
    id: 'bca-startup',
    title: 'BCA Khởi nghiệp',
    icon: <BookOpen size={20} />,
    navLink: '/hschool/course/start-up',
  },
  {
    id: 'bca-skill',
    title: 'Đào tạo kĩ năng',
    icon: <BookOpen size={20} />,
    navLink: '/home/dao-tao-ki-nang',
  },
]

export default home
