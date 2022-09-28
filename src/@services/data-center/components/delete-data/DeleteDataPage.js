import React from 'react'
import {Trash2} from 'react-feather'
import TableDeleteData from '../table/TableDeleteData'

const DeleteDataPage = () => {
  return (
    <div>
      <h6 className="text-danger mx-3 mt-1">
        <Trash2 className="text-danger mr-2" />* Data được thêm vào sọt rác tự
        động xóa sau 30 ngày
      </h6>
      <TableDeleteData />
    </div>
  )
}

export default DeleteDataPage
