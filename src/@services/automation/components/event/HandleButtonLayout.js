import React from 'react'
import {ArrowDown, ArrowRight, Eye, Grid} from 'react-feather'
import {useHistory} from 'react-router'
import {Badge} from 'reactstrap'

const HandleButtonLayout = ({onLayout, automationType, handle}) => {
  const history = useHistory()
  return (
    <div className="controls d-flex">
      <div className="mr-2 mt-1">
        <Badge
          color="secondary"
          className=" cursor-pointer"
          onClick={() =>
            history.push(
              `/admin/automation/${
                automationType === 'job' ? 'auto-job' : 'auto-task'
              }`,
            )
          }
        >
          <Grid size={12} className="mr-1" />
          Dashboard
        </Badge>
      </div>
      <div className="mr-2 mt-1">
        <Badge
          color="warning"
          className=" cursor-pointer"
          onClick={handle.enter}
        >
          <Eye size={12} className="align-middle" />
          <span className="align-middle ml-1">Xem toàn màn hình</span>
        </Badge>
      </div>
      <div className="mr-2 mt-1">
        <Badge
          color="warning"
          className=" cursor-pointer"
          onClick={() => onLayout('TB')}
        >
          <ArrowDown size={12} className="align-middle" />
          <span className="align-middle ml-1">Canh chỉnh dọc</span>
        </Badge>
      </div>
      <div className="mr-2 mt-1">
        <Badge
          color="warning"
          className=" cursor-pointer"
          onClick={() => onLayout('LR')}
        >
          <ArrowRight size={12} className="align-middle" />
          <span className="align-middle ml-1">Canh chỉnh ngang</span>
        </Badge>
      </div>
    </div>
  )
}

export default HandleButtonLayout
