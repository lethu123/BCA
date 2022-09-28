import {Edit, MoreVertical, Trash} from 'react-feather'
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap'
import moment from 'moment'
import {Link} from 'react-router-dom'
import avatar from 'assets/images/avatars/avatar-blank.png'

import luoiBieng from 'assets/images/datacenter/luoi-bieng.png'
import thanhVienMoi from 'assets/images/datacenter/thanh-vien-moi.png'
import tauNgam from 'assets/images/datacenter/tau-ngam.png'
import nangNo from 'assets/images/datacenter/nang-no.png'
import sangTao from 'assets/images/datacenter/sang-tao.png'
import anhHuong from 'assets/images/datacenter/anh-huong.png'

// *** Table Intl Column
export const columns = [
  {
    name: 'Tên',
    selector: 'user_info',
    sortable: true,
    minWidth: '240px',
    cell: row => (
      <div className="d-flex align-items-center">
        <img
          src={row.user_info.avatar || avatar}
          alt="images"
          className="img-fluid rounded-circle mr-2"
          width="30px"
          height="30px"
        />
        <div className="user-info text-truncate ml-1">
          <Link
            className="d-block  text-truncate text-primary cursor-pointer"
            to="/admin/thanh-vien-BCA/thong-tin-thanh-vien/1"
          >
            {row.user_info.username}
          </Link>
          <p className="font-weight-bold mb-0">
            ID Biznet: <span className="text-primary">{row.user_info.ID}</span>
          </p>
        </div>
      </div>
    ),
  },
  {
    name: 'Số điện thoại',
    selector: 'phone_number',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <span className="d-block  text-truncate">{row.phone_number} </span>
    ),
  },
  {
    name: 'Email',
    selector: 'email',
    minWidth: '150px',
    cell: row => <span className="d-block  text-truncate">{row.email} </span>,
  },
  {
    name: 'Cấp ĐLBH',
    selector: 'level',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <Badge
        color={
          row.level === 'Cấp FA'
            ? 'warning'
            : row.level === 'Cấp BM'
            ? 'success'
            : row.level === 'Cấp UM'
            ? 'danger'
            : 'primary'
        }
        className="text-white"
        pill
      >
        {row.level}
      </Badge>
    ),
  },
  {
    name: 'Cấp Cộng đồng',
    selector: 'community_level',
    sortable: true,
    minWidth: '100px',
    cell: row => (
      <Badge
        color={
          row.community_level === 'Đại lý'
            ? 'primary'
            : row.community_level === 'UVTN'
            ? 'warning'
            : 'success'
        }
        className="text-white"
        pill
      >
        {row.community_level}
      </Badge>
    ),
  },
  {
    name: 'Cấp hoạt động',
    selector: 'activity_level',
    sortable: true,
    minWidth: '160px',
    cell: row => (
      <div className=" d-flex align-items-center">
        <img
          src={
            row.activity_level === 'Lười biếng'
              ? luoiBieng
              : row.activity_level === 'Thành viên mới'
              ? thanhVienMoi
              : row.activity_level === 'Tàu ngầm'
              ? tauNgam
              : row.activity_level === 'Năng nổ'
              ? nangNo
              : row.activity_level === 'Sáng tạo'
              ? sangTao
              : anhHuong
          }
          alt="imagess"
          className="img-fluid mr-2"
        />
        <Badge
          color={
            row.activity_level === 'Lười biếng'
              ? 'light-secondary'
              : row.activity_level === 'Thành viên mới'
              ? 'warning'
              : row.activity_level === 'Tàu ngầm'
              ? 'danger'
              : row.activity_level === 'Năng nổ'
              ? 'success'
              : row.activity_level === 'Sáng tạo'
              ? 'primary'
              : 'info'
          }
          className="text-white"
          pill
        >
          {row.activity_level}
        </Badge>
      </div>
    ),
  },

  {
    name: 'Điểm tuyển dụng',
    selector: 'recruitment_point',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <span className="d-block  text-truncate">{row.recruitment_point}</span>
    ),
  },
  {
    name: 'Điểm bán hàng',
    selector: 'point_sale',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <span className="d-block  text-truncate">{row.point_sale}</span>
    ),
  },
  {
    name: 'Đại lý phụ trách',
    selector: 'agent_charge',
    sortable: true,
    minWidth: '170px',
    cell: row => (
      <div>
        <span className="d-block  text-truncate">{row.agent_charge.name}</span>
        <p
          className="mb-0 d-block text-primary  text-truncate"
          style={{fontSize: '11px'}}
        >
          {row.agent_charge.phoneNumber}
        </p>
      </div>
    ),
  },
  {
    name: 'Vai trò',
    selector: 'role',
    sortable: true,
    minWidth: '170px',
    cell: row => (
      <Badge
        color={
          row.role === 'Thành viên BCA'
            ? 'primary'
            : row.role === 'Admin'
            ? 'info'
            : 'light-secondary'
        }
        className="text-white"
        pill
      >
        {row.role}
      </Badge>
    ),
  },
  {
    name: 'Cấp Data Center',
    selector: 'data_center',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <span className="d-block  text-truncate text-primary">
        {row.data_center}
      </span>
    ),
  },
  {
    name: 'Trạng thái trang cá nhân',
    selector: 'status_info',
    sortable: true,
    minWidth: '200px',
    cell: row => (
      <div>
        <Badge
          color={
            row.status_info.status === 'Hoạt động' ? 'success' : 'light-danger'
          }
          className="text-white"
          pill
        >
          {row.status_info.status}
        </Badge>
        <span className="d-block  text-truncate " style={{fontSize: '11px'}}>
          {moment(row.status_info.date).format('DD-MM-yyyy')}
        </span>
      </div>
    ),
  },
  {
    name: 'Ngày kích hoạt',
    selector: 'date_start',
    sortable: true,
    minWidth: '170px',
    cell: row => (
      <div>
        <span className="d-block  text-truncate">
          {moment(row.date_start.date).format('DD-MM-yyyy')}
        </span>
        <p className="mb-0" style={{fontSize: '11px'}}>
          Duyệt bởi:{' '}
          <span className="text-primary">{row.date_start.admin}</span>
        </p>
      </div>
    ),
  },

  {
    name: 'Thao tác',
    allowOverflow: true,
    cell: row => {
      return (
        <div className="d-flex">
          <UncontrolledDropdown>
            <DropdownToggle className="pr-1" tag="span">
              <MoreVertical size={15} />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <Edit size={15} />
                <span className="align-middle ml-50">Edit</span>
              </DropdownItem>
              <DropdownItem>
                <Trash size={15} />
                <span className="align-middle ml-50">Delete</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      )
    },
  },
]
