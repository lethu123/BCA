import DataTableComponent from 'components/data-table/DataTableComponent'
import {Button} from 'reactstrap'

import {Columns} from './InviteJoinGroupCollumsTable'

// *** query
import {GroupDatatable, GroupMutation} from '@services/group'
import {getUserData} from 'utility/Utils'

const RequestedJoinGroup = () => {
  const userData = getUserData()
  const query = GroupDatatable.useListRequestedJoindGroupByUser(userData.uid)
  const {mutate: mutateCancelRequestJoinGroup} =
    GroupMutation.useCancelRequestJoinGroup()

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
                    mutateCancelRequestJoinGroup({
                      request_id: row._id,
                      user_id: userData.uid,
                    })
                  }}
                  size="sm"
                  outline
                  color="danger"
                >
                  Hủy yêu cầu
                </Button.Ripple>
              </div>
            ),
          },
        ]}
        query={query}
        searchPlaceholder="Tìm kiếm"
      />
    </div>
  )
}

export default RequestedJoinGroup
