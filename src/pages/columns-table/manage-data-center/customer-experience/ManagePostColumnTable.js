import {Edit, MoreVertical, Trash} from 'react-feather'
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap'
import {Link} from 'react-router-dom'
import avatar from 'assets/images/avatars/avatar-blank.png/'
import moment from 'moment'
import SwitchField from 'components/form/SwitchField'

// *** Table Intl Column
export const columns = [
  {
    name: 'Tên ',
    selector: 'user_info',
    sortable: true,
    minWidth: '270px',
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
            to="/admin/kinh-nghiem-khach-hang/post/1"
          >
            {row.user_info.username}
          </Link>
          <p className="font-weight-bold mb-0">
            URL: <span className="text-primary">{row.user_info.URL}</span>
          </p>
        </div>
      </div>
    ),
  },
  {
    name: 'Trạng thái',
    selector: 'type',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <span className="d-block  text-truncate  w-100">{row.type}</span>
    ),
  },
  {
    name: ' Số UID',
    selector: 'new_UID',
    minWidth: '120px',
    cell: row => (
      <span className="d-block  text-truncate  text-primary">
        {row.new_UID}
      </span>
    ),
  },
  {
    name: 'Số lượt thích',
    selector: 'like',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <span className="d-block  text-truncate  text-primary">{row.like}</span>
    ),
  },
  {
    name: 'Số bình luận',
    selector: 'comment',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <span className="d-block  text-truncate  text-primary">
        {row.comment}
      </span>
    ),
  },
  {
    name: 'Số chia sẻ',
    selector: 'share',
    sortable: true,
    minWidth: '120px',
    cell: row => (
      <span className="d-block  text-truncate  text-primary">{row.share}</span>
    ),
  },

  {
    name: 'Trạng thái',
    selector: 'status',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <SwitchField
        name="status"
        icon
        color="primary"
        outline
        defaultChecked
        onChange={(name, value) => console.log(value)}
      />
    ),
  },
  {
    name: 'Ngày kết thúc',
    selector: 'date_finish',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <div>
        <p className="d-block  text-truncate  mb-0">
          {moment(row.date_finish).format('DD-MM-yyyy')}
        </p>
      </div>
    ),
  },
  {
    name: 'Ngày cập nhật',
    selector: 'date_update',
    sortable: true,
    minWidth: '200px',
    cell: row => (
      <div>
        <p className="d-block  text-truncate  mb-0">
          {moment(row.date_update.date).format('DD-MM-yyyy')}
        </p>
        <span style={{fontSize: 12}}>
          Thêm bởi:{' '}
          <span className="text-primary">{row.date_update.admin} </span>
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
