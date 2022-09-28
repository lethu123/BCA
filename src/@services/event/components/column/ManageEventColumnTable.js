import moment from 'moment'
import {Badge} from 'reactstrap'
import {Link} from 'react-router-dom'
import avatar1 from 'assets/images/avatars/9.png'
import Avatar from '@core/components/avatar'

// *** Table Intl Column
export const ManageEventColumnTable = [
  {
    name: 'Sự kiện',
    selector: 'NameEvent',
    minWidth: '300px',
    maxWidth: '350px',
    cell: row => (
      <div className="d-flex align-items-center py-2">
        <Avatar img={row.cover || avatar1} size="xl" imgClassName="rounded" />

        <div className=" ml-1">
          <p className="mb-0 text-primary cursor-pointer ">
            <Link to={`/home/event/${row.id}`}>{row.name}</Link>
          </p>
          <small className="text-muted">
            {row.formality_info?.code === 'ONLINE' ? 'Online' : row.venue}
          </small>
        </div>
      </div>
    ),
  },
  {
    name: 'Quyền riêng tư',
    selector: 'status',
    maxWidth: '120px',
    center: true,
    cell: row => (
      <div>
        <Badge
          color={
            row.privacy_info?.code.toLowerCase() === 'public'
              ? 'success'
              : row.privacy_info?.code.toLowerCase() === 'private'
              ? 'danger'
              : 'secondary'
          }
        >
          {row.privacy_info?.name}
        </Badge>
      </div>
    ),
  },

  {
    name: 'Người tổ chức',
    selector: 'creator',
    minWidth: '200px',
    maxWidth: '200px',
    cell: row => (
      <div className="d-flex align-items-center py-2">
        <div>
          <p className="mb-0 cursor-pointer">
            <Link to={`/user/${row.owner_info?.id}/profile/feed`}>
              {row.owner_info?.full_name}
            </Link>
          </p>
        </div>
      </div>
    ),
  },
  {
    name: 'Người tham gia',
    selector: 'participant',
    sortable: true,
    minWidth: '150px',
    maxWidth: '150px',
    center: true,
    cell: row => <p> {row.event_participant_info?.length} </p>,
  },
  {
    name: 'Ngày diễn ra',
    selector: 'startTime',
    sortable: true,
    minWidth: '170px',
    cell: row => <p>{moment(row.from_date).format('DD-MM-YYYY H:mm')}</p>,
  },
  {
    name: 'Ngày kết thúc',
    selector: 'endTime',
    sortable: true,
    minWidth: '170px',
    cell: row => <p>{moment(row.to_date).format('DD-MM-YYYY H:mm')}</p>,
  },
]
