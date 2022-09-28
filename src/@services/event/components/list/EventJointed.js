// ** component
import GenaralEvent from './GenaralEvent'

// ** query
import {EventQuery} from '@services/event'
import {useState} from 'react'
import {Alert} from 'reactstrap'

const EventJointed = () => {
  const [filter, setFilter] = useState({page: 1, limit: 9, is_joined: true})

  // ** query
  const {data: events, isFetching} = EventQuery.useListEvent(filter)

  if (isFetching)
    return (
      <Alert color="primary">
        <div className="alert-body">
          <span className="fw-bold">Đang lấy dữ liệu</span>
        </div>
      </Alert>
    )

  return (
    <div>
      <GenaralEvent events={events} filter={filter} setFilter={setFilter} />
    </div>
  )
}

export default EventJointed
