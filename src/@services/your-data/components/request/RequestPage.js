import React from 'react'
import {CornerDownRight, Trash2} from 'react-feather'
import {Button, Card} from 'reactstrap'
import TableRequest from '../table/TableRequest'

const RequestPage = () => {
  return (
    <div className="mt-2">
      <Card className="p-2 px-lg-7 mb-15 ">
        <div className="d-flex align-items-center justify-content-lg-between">
          <div>
            <p className="mb-1">Tổng số dữ liệu các ứng viên của bạn</p>
            <h6 className="text-primary"> 3 yêu cầu phê duyệt</h6>
          </div>
          <div className="d-md-flex">
            <Button.Ripple outline color="success" className="mr-2">
              <CornerDownRight size={14} />
              <span className="align-middle ml-1">Chuyển dữ liệu</span>
            </Button.Ripple>
            <Button.Ripple outline color="warning">
              <Trash2 size={14} />
              <span className="align-middle ml-1">Xóa Data sọt rác</span>
            </Button.Ripple>
          </div>
        </div>
      </Card>
      <TableRequest />
    </div>
  )
}

export default RequestPage
