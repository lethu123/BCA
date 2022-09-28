import {Edit, Link2, MoreVertical, Trash} from 'react-feather'
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
import SwitchField from 'components/form/SwitchField'

// *** Table Intl Column
export const columns = [
  {
    name: 'ID',
    selector: 'ID',
    sortable: true,
    minWidth: '100px',
    cell: row => <span className="d-block  text-truncate">{row.ID}</span>,
  },
  {
    name: 'Link',
    selector: 'link',
    sortable: true,
    minWidth: '70px',
    cell: row => (
      <span className="d-block  text-truncate text-center">
        <Link2 className="text-primary" size={20} />
      </span>
    ),
  },
  {
    name: 'Tên',
    selector: 'user_info',
    sortable: true,
    minWidth: '250px',
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
            to="/admin/landingpage/landingpage-thanh-vien/1"
          >
            {row.user_info.username}
          </Link>
          <p className="font-weight-bold mb-0">
            ID: <span className="text-primary">{row.user_info.ID}</span>
          </p>
        </div>
      </div>
    ),
  },
  {
    name: 'Loại LDP',
    selector: 'type_LDP',
    minWidth: '120px',
    cell: row => (
      <Badge
        color={row.type_LDP === 'KHTN' ? 'success' : 'warning'}
        className="text-white"
        pill
      >
        {row.type_LDP}
      </Badge>
    ),
  },
  {
    name: 'Số Data',
    selector: 'number_data',
    sortable: true,
    minWidth: '100px',
    cell: row => (
      <span className="d-block  text-truncate">{row.number_data} </span>
    ),
  },
  {
    name: 'Người sử dụng',
    selector: 'personal_use',
    sortable: true,
    minWidth: '240px',
    cell: row => (
      <div className="d-flex align-items-center">
        <img
          src={row.personal_use.avatar || avatar}
          alt="images"
          className="img-fluid rounded-circle mr-2"
          width="30px"
          height="30px"
        />
        <div className="user-info text-truncate ml-1">
          <Link
            className="d-block  text-truncate text-primary cursor-pointer"
            to="#"
          >
            {row.personal_use.username}
          </Link>
          <p className="font-weight-bold mb-0">
            ID Biznet:{' '}
            <span className="text-primary">{row.personal_use.ID}</span>
          </p>
        </div>
      </div>
    ),
  },
  {
    name: 'Trạng thái',
    selector: 'status',
    minWidth: '120px',
    cell: row => (
      <SwitchField
        name="status"
        icon
        color="success"
        outline
        defaultChecked
        onChange={(name, value) => console.log(value)}
      />
    ),
  },
  {
    name: 'Ngày tạo',
    selector: 'date_create',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <span className="d-block  text-truncate">
        {moment(row.date_create).format('DD-MM-yyyy')}
      </span>
    ),
  },
  {
    name: 'Ngày kích hoạt',
    selector: 'date_use',
    sortable: true,
    minWidth: '170px',
    cell: row => (
      <div>
        <span className="d-block  text-truncate">
          {moment(row.date_use.date).format('DD-MM-yyyy')}
        </span>
        <p className="mb-0" style={{fontSize: '11px'}}>
          Duyệt bởi: <span className="text-primary">{row.date_use.admin}</span>
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
