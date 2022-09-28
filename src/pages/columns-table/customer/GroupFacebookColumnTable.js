import {Edit, Link2, MoreVertical, Trash} from 'react-feather'
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap'
import {Link} from 'react-router-dom'
import avatar from 'assets/images/avatars/avatar-blank.png/'
import moment from 'moment'

// *** Table Intl Column
export const columns = [
  {
    name: 'Facebook SaSam',
    selector: 'facebook_sasam_info',
    sortable: true,
    minWidth: '170px',
    cell: row => (
      <div className="d-flex align-items-center">
        <img
          src={row.facebook_sasam_info.avatar || avatar}
          alt="images"
          className="img-fluid rounded-circle mr-2"
          width="30px"
          height="30px"
        />
        <div className="user-info text-truncate ml-1">
          <Link
            className="d-block  text-truncate text-primary cursor-pointer"
            to={row.facebook_sasam_info.link || '#'}
          >
            {row.facebook_sasam_info.name}
          </Link>
        </div>
      </div>
    ),
  },
  {
    name: 'UID Group',
    selector: 'impact_group_link_info',
    sortable: true,
    minWidth: '170px',
    cell: row => (
      <div className="d-flex align-items-center">
        <img
          src={row.impact_group_link_info.avatar || avatar}
          alt="images"
          className="img-fluid rounded-circle mr-2"
          width="30px"
          height="30px"
        />
        <div className="user-info text-truncate ml-1">
          <Link
            className="d-block  text-truncate text-primary cursor-pointer"
            to={row.impact_group_link_info.link || '#'}
          >
            {row.impact_group_link_info.name}
          </Link>
        </div>
      </div>
    ),
  },
  {
    name: 'Đã tham gia',
    selector: 'is_joined',
    sortable: true,
    mWidth: '150px',
    cell: row => (
      <Badge
        color={
          row.is_friend === 'yes'
            ? 'light-primary'
            : row.is_friend === 'no'
            ? 'light-danger'
            : 'light-warning'
        }
        className="text-white"
        pill
      >
        {row.is_joined}
      </Badge>
    ),
  },
  {
    name: 'Hành động',
    selector: 'action_name_info',
    sortable: true,
    minWidth: '140px',
    cell: row => (
      <span className="d-block  text-truncate">
        {row.action_name_info.name}
      </span>
    ),
  },
  {
    name: 'Loại hành động',
    selector: 'action_type',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <Badge
        color={row.action_type === 'New' ? 'light-primary' : 'light-warning'}
        outline
        className="text-white"
        pill
      >
        {row.action_type}
      </Badge>
    ),
  },
  {
    name: 'Loại Group',
    selector: 'type_group',
    sortable: true,
    minWidth: '100px',
    cell: row => (
      <span className="d-block  text-truncate">{row.type_group}</span>
    ),
  },
  {
    name: 'Chiến dịch',
    selector: 'campaign_info',
    sortable: true,
    minWidth: '100px',
    cell: row => (
      <span className="d-block  text-truncate">{row.campaign_info.name}</span>
    ),
  },

  {
    name: 'Ngày lấy thông tin',
    selector: 'date_get_data',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <span className="d-block  text-truncate">
        {moment(row.date_get_data).format('DD-MM-yyyy')}
      </span>
    ),
  },
  {
    name: 'Ngày thực hiện',
    selector: 'date_of_execution',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <span className="d-block  text-truncate">
        {moment(row.date_of_execution).format('DD-MM-yyyy')}
      </span>
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
