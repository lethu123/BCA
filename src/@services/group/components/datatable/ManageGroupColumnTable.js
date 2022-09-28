import moment from 'moment'
import avatar1 from 'assets/images/avatars/avatar-blank.png'
import {Badge} from 'reactstrap'
import {Link as LinkTo} from 'react-router-dom'
// import SwitchField from 'components/form/SwitchField'
import {subStr} from 'utility/Utils'

// *** Table Intl Column
export const ManageGroupColumnTable = [
  {
    name: 'Tên nhóm',
    selector: 'group_name',
    minWidth: '300px',
    maxWidth: '450px',
    cell: row => (
      <div className="d-flex align-items-center py-2">
        <img
          src={row.group_avatar || avatar1}
          alt="images"
          onError={e => {
            e.target.onerror = null
            e.target.src = avatar1
          }}
          style={{width: 40, height: 40, borderRadius: '50%', marginRight: 7}}
        />
        <div>
          <p className="mb-0">
            <LinkTo
              to={`/group/${row._id}`}
              className="mb-0 text-primary cursor-pointer"
            >
              {subStr(row.group_name, 65)}
            </LinkTo>
          </p>
          <small>Danh hiệu: {row.group_label}</small>
        </div>
      </div>
    ),
  },
  // {
  //   name: 'Trạng thái',
  //   selector: 'link',
  //   maxWidth: '110px',
  //   cell: row => (
  //     <SwitchField
  //       name="switch"
  //       color="primary"
  //       outline
  //       defaultChecked={row.group_status === 'enable'}
  //       onChange={(name, value) => console.log(value)}
  //     />
  //   ),
  // },
  {
    name: 'Địa chỉ',
    selector: 'numberMember',
    maxWidth: '320px',
    cell: row => (
      <p>{`${row.group_address?.group_city}, ${row.group_address?.group_district}, ${row.group_address?.group_commune}`}</p>
    ),
  },

  {
    name: 'Số thành viên',
    selector: 'numberMember',
    maxWidth: '120px',
    center: true,
    cell: row => <div>{row.num_members}</div>,
  },
  {
    name: 'Số quản trị viên',
    selector: 'numberAdmin',
    maxWidth: '150px',
    center: true,
    cell: row => <div>{row.num_admin}</div>,
  },
  // {
  //   name: 'Số bài viết',
  //   selector: 'numberPost',
  //   maxWidth: '120px',
  //   center: true,
  //   cell: row => <p>156</p>,
  // },

  {
    name: 'Loại nhóm',
    selector: 'typeGroup',
    maxWidth: '120px',
    center: true,
    cell: row => (
      <div>
        {row.group_type === 'public' ? (
          <Badge color="primary">Công khai</Badge>
        ) : (
          <Badge color="danger">Nhóm kín</Badge>
        )}
      </div>
    ),
  },

  {
    name: 'Ngày tạo',
    selector: 'datetime_created',
    sortable: true,
    maxWidth: '150px',
    cell: row => (
      <p>
        {moment(new Date(row.datetime_created * 1000)).format('DD-MM-YYYY')}
      </p>
    ),
  },
]
