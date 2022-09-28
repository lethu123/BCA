import {Edit, Link2, MoreVertical, Trash} from 'react-feather'
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap'
import {Link} from 'react-router-dom'
import moment from 'moment'

import avatar from 'assets/images/avatars/avatar-blank.png/'

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
    name: 'UID',
    selector: 'impact_user_link_info',
    sortable: true,
    minWidth: '170px',
    cell: row => (
      <div className="d-flex align-items-center">
        <img
          src={row.impact_user_link_info.avatar || avatar}
          alt="images"
          className="img-fluid rounded-circle mr-2"
          width="30px"
          height="30px"
        />
        <div className="user-info text-truncate ml-1">
          <Link
            className="d-block  text-truncate text-primary cursor-pointer"
            to={row.impact_user_link_info.link || '#'}
          >
            {row.impact_user_link_info.name}
          </Link>
        </div>
      </div>
    ),
  },
  {
    name: 'Bạn bè',
    selector: 'is_friend',
    sortable: true,
    maxWidth: '100px',
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
        {row.is_friend}
      </Badge>
    ),
  },
  {
    name: 'Hành động',
    selector: 'action_name_info',
    sortable: true,
    minWidth: '120px',
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
        className="text-white"
        pill
      >
        {row.action_type}
      </Badge>
    ),
  },
  {
    name: 'Trạng Thái',
    selector: 'status',
    sortable: true,
    maxWidth: '120px',
    cell: row => (
      <Badge
        color={
          row.status === 'pending'
            ? 'light-warning'
            : row.status === 'complete'
            ? 'light-primary'
            : 'light-danger'
        }
        className="text-white"
        pill
      >
        {row.status}
      </Badge>
    ),
  },
  {
    name: 'Ngày lấy dữ liệu',
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
    name: 'Nguồn dữ liệu',
    selector: 'data_source_info',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <Link to={row.data_source_info.link || '#'}>
        <Badge
          color={
            row.data_source_info.type === 'Post'
              ? 'light-warning'
              : row.data_source_info.type === 'Group'
              ? 'light-info'
              : 'light-danger'
          }
          className="text-white mr-50 "
          pill
        >
          {row.data_source_info.type}
        </Badge>
        <Link2 size={16} className="text-primary" />
      </Link>
    ),
  },
  {
    name: 'Khách hàng tiềm năng',
    selector: 'type_lead_info',
    sortable: true,
    minWidth: '100px',
    cell: row => (
      <span className="d-block  text-truncate">{row.type_lead_info.name}</span>
    ),
  },
  {
    name: 'Loại quan tâm',
    selector: 'kind_of_interest_info',
    sortable: true,
    minWidth: '100px',
    cell: row => (
      <span className="d-block  text-truncate">
        {row.kind_of_interest_info.name}
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
