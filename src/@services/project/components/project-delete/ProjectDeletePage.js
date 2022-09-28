import React from 'react'
import {Trash2} from 'react-feather'
import TableProjectDelete from '../table/TableProjectDelete'

const ProjectDeletePage = () => {
  return (
    <div>
      <h6 className="text-danger mx-3 mt-3">
        <Trash2 className="text-danger mr-2" />* Dự án được thêm vào sọt rác tự
        động xóa sau 60 ngày
      </h6>
      <TableProjectDelete />
    </div>
  )
}

export default ProjectDeletePage
