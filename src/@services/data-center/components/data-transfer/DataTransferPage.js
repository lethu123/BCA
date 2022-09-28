import React from 'react'
import {Trash2} from 'react-feather'
import TableDataTransfer from '../table/TableDataTransfer'

const DataTransferPage = () => {
  return (
    <div>
      <h6 className="text-danger mx-3 mt-1">
        <Trash2 className="text-danger mr-2" />
        Các yêu cầu chuyển dữ liệu tự động hết hạn sau 30 ngày kể từ ngày xác
        nhận yêu cầu
      </h6>
      <TableDataTransfer />
    </div>
  )
}

export default DataTransferPage
