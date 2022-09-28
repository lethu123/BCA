import React from 'react'
import {Card} from 'reactstrap'
import TableRequestSend from './TableRequestSend'

const RequestSendPage = () => {
  return (
    <Card>
      <Card className="py-2  px-lg-7 mb-10 m-3">
        <div className="d-flex px-2 align-items-center justify-content-lg-between">
          <div>
            <p className="mb-1">Tổng số dữ liệu các ứng viên của bạn</p>
            <h6 className="text-primary"> 3 yêu cầu phê duyệt</h6>
          </div>
        </div>
      </Card>
      <TableRequestSend />
    </Card>
  )
}

export default RequestSendPage
