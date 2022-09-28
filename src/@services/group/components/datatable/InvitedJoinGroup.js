import DataTableComponent from 'components/data-table/DataTableComponent'
import {Button} from 'reactstrap'

import {Columns} from './InviteJoinGroupCollumsTable'

import {GroupDatatable, GroupMutation} from '@services/group'
import {getUserData} from 'utility/Utils'

const InvitedJoinGroup = () => {
  const userData = getUserData()
  const query = GroupDatatable.useListInvitedJoindGroupByUser(userData.uid)
  const {mutate: mutateAcceptInviteJoinGroup} =
    GroupMutation.useAcceptInviteJoinGroup()
  const {mutate: mutateCancelInviteJoinGroup} =
    GroupMutation.useRejectInviteJoinGroup()
  return (
    <div>
      <DataTableComponent
        // *** required
        columns={[
          ...Columns,
          {
            name: 'Thao tác',
            selector: 'actions',
            center: true,
            cell: row => (
              <div>
                <Button.Ripple
                  onClick={() => {
                    mutateAcceptInviteJoinGroup({
                      invitation_id: row._id,
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
                    mutateCancelInviteJoinGroup({
                      invitation_id: row._id,
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
        ]}
        query={query}
        // ** optional - default undefined
        // ExpandableComponent={ExpandableTable}
        // FilterComponent={FilterComponent}
        // isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Tìm kiếm"
      />
    </div>
  )
}

export default InvitedJoinGroup
