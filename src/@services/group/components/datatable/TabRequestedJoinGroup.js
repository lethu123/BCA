import DataTableComponent from 'components/data-table/DataTableComponent'
import {Button, Spinner} from 'reactstrap'
import {Link} from 'react-router-dom'
import moment from 'moment'

// *** query
import {GroupDatatable, GroupMutation} from '@services/group'
import {getUserData} from 'utility/Utils'
import {UserQuery} from '@services/user'

import img from 'assets/images/avatars/avatar-blank.png'

const findUserByUid = (users, uid) => users.find(user => user.user_id === uid)

const TabRequestJoinGroup = ({groupId}) => {
  const userData = getUserData()
  const query = GroupDatatable.useListRequestedJoindGroupByGroup(
    userData.uid,
    groupId,
  )
  const {data: users} = UserQuery.useGetListAllUserSys()
  const {mutate: mutateCancelRequestJoinGroup} =
    GroupMutation.useRejectRequestJoinGroup()
  const {mutate: mutateAcceptRequestJoinGroup} =
    GroupMutation.useAcceptRequestJoinGroup()

  if (!users) return <Spinner />

  const columns = [
    {
      name: 'Tài khoản',
      selector: 'user_id',
      minWidth: '200px',
      cell: row => (
        <div className="d-flex align-items-center">
          <img
            src={findUserByUid(users?.data, row.user_id)?.avatar || img}
            alt="avatar"
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              marginRight: 10,
            }}
            onError={e => {
              e.target.onerror = null
              e.target.src = img
            }}
          />
          <div>
            <Link
              to={`/group/${row.group?._id}`}
              className="cursor-pointer text-primary mb-0"
            >
              {findUserByUid(users?.data, row.user_id)?.user_name}
            </Link>
            <p className="mb-0">
              {findUserByUid(users?.data, row.user_id)?.email}
            </p>
          </div>
        </div>
      ),
    },

    {
      name: 'Ngày gửi yêu cầu',
      selector: 'date_created',
      sortable: true,
      width: '150px',
      center: true,
      cell: row => <p>{moment(new Date()).format('DD/MM/YYYY')}</p>,
    },
    {
      name: 'Thao tác',
      selector: 'actions',
      center: true,
      cell: row => (
        <div>
          <Button.Ripple
            onClick={() => {
              mutateAcceptRequestJoinGroup({
                request_id: row._id,
                user_id: userData.uid,
              })
            }}
            size="sm"
            className="mr-3"
            color="primary"
          >
            Chấp nhận
          </Button.Ripple>
          <Button.Ripple
            onClick={() => {
              mutateCancelRequestJoinGroup({
                request_id: row._id,
                user_id: userData.uid,
              })
            }}
            size="sm"
            outline
            color="danger"
          >
            Từ chối
          </Button.Ripple>
        </div>
      ),
    },
  ]

  return (
    <div>
      <DataTableComponent
        // *** required
        columns={columns}
        query={query}
        searchPlaceholder="Tìm kiếm"
      />
    </div>
  )
}

export default TabRequestJoinGroup
