import {Edit, Link2, MoreVertical, Trash} from 'react-feather'
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  UncontrolledDropdown,
} from 'reactstrap'
import {Link} from 'react-router-dom'
import avatar from 'assets/images/avatars/avatar-blank.png/'
import moment from 'moment'

// *** Table Intl Column
export const columns = [
  {
    name: 'Tên dự án',
    selector: 'project_info',
    sortable: true,
    minWidth: '250px',
    cell: row => (
      <div className="d-flex align-items-center">
        <img
          src={row.project_info.image || avatar}
          alt="images"
          className="img-fluid rounded-circle mr-2"
          width="30px"
          height="30px"
        />
        <div className="user-info text-truncate ml-1">
          <Link
            className="d-block  text-truncate text-primary cursor-pointer"
            to="/admin/du-an/quan-ly-cac-du-an/1"
          >
            {row.project_info.name}
          </Link>
          <p className="font-weight-bold mb-0">
            ID: <span className="text-primary">{row.project_info.ID}</span>
          </p>
        </div>
      </div>
    ),
  },
  {
    name: 'Danh mục',
    selector: 'category',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <Badge
        color={
          row.category === 'Dự án đối tác'
            ? 'primary'
            : row.is_friend === 'Dự án thành viên'
            ? 'danger'
            : 'warning'
        }
        className="text-white"
        pill
      >
        {row.category}
      </Badge>
    ),
  },
  {
    name: 'Kiểu dự án',
    selector: 'type_project',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <Badge
        color={
          row.type_project === 'Ứng viên tiềm năng'
            ? 'primary'
            : row.type_project === 'Khách hàng tiềm năng'
            ? 'success'
            : 'warning'
        }
        className="text-white"
        pill
      >
        {row.category}
      </Badge>
    ),
  },
  {
    name: 'Trạng thái dự án',
    selector: 'status_project',
    sortable: true,
    minWidth: '170px',
    cell: row => (
      <div className="mt-2">
        <Badge
          color={
            row.status_project.value === 'Hoàn thành' ? 'primary' : 'warning'
          }
          className="text-white"
          pill
        >
          {row.category}
        </Badge>
        <p
          className="d-block  text-truncate mb-0 text-center"
          style={{fontSize: '12px'}}
        >
          {moment(row.status_project.time).format('DD-MM-yyyy')}
        </p>
        ,
      </div>
    ),
  },
  {
    name: 'Số liên hệ',
    selector: 'number_contact',
    sortable: true,
    minWidth: '220px',
    cell: row => (
      <div>
        <p className="mb-0" style={{fontSize: 12}}>
          Liên hệ được mua:{' '}
          <span className="font-weight-bolder">
            {row.number_contact.bought}/{row.number_contact.total}
          </span>
        </p>
        <Progress
          value={(row.number_contact.bought / row.number_contact.total) * 100}
          className="progress-bar-primary"
        >
          {row.number_contact.bought}
        </Progress>
      </div>
    ),
  },
  {
    name: 'UID',
    selector: 'UID',
    minWidth: '50px',
    cell: row => <Link2 size={18} className="text-primary" />,
  },
  {
    name: 'Giá liên hệ',
    selector: 'price_contact',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <span className="d-block  text-truncate font-weight-bolder w-100">
        {row.price_contact} BizXu
      </span>
    ),
  },
  {
    name: 'Doanh thu dự án',
    selector: 'project_revenue',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <span className="d-block  text-truncate font-weight-bolder w-100">
        {row.project_revenue} BizXu
      </span>
    ),
  },
  {
    name: 'Ngày tạo dự án',
    selector: 'date_info',
    sortable: true,
    minWidth: '200px',
    cell: row => (
      <div>
        <p className="d-block  text-truncate font-weight-bolder mb-0">
          {moment(row.date_info.date_create).format('DD-MM-yyyy')}
        </p>
        <span style={{fontSize: 12}}>
          Thêm bởi: <span className="text-primary">{row.date_info.admin} </span>
        </span>
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
