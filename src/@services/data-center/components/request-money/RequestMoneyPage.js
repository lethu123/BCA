import React from 'react'
import {Trash2} from 'react-feather'
import TableRequestMoney from '../table/TableRequestMoney'

const RequestMoneyPage = () => {
  return (
    <div>
      <h6 className="text-danger mx-3 mt-1">
        <Trash2 className="text-danger mr-2" />* Data được thêm vào sọt rác tự
        động xóa sau 60 ngày
      </h6>
      <TableRequestMoney />
    </div>
  )
}

export default RequestMoneyPage
