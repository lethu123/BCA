import React from 'react'
import {Button, Card, CardBody, Row} from 'reactstrap'

import InputPasswordToggle from '@core/components/input-password-toggle'
import {RefreshCcw, Save} from 'react-feather'

const ChangePassword = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <Row>
            <div className="col-7 mb-2">
              <p className="mb-0">Mật khẩu cũ</p>
              <InputPasswordToggle
                className="input-group-merge"
                placeholder="Nhập mật khẩu cũ ... "
              />
            </div>
            <div className="col-7 mb-2">
              <p className="mb-0">Mật khẩu mới</p>
              <InputPasswordToggle
                className="input-group-merge"
                placeholder="Nhập mật khẩu mới ..."
              />
            </div>
            <div className="col-7 mb-2">
              <p className="mb-0">Xác nhận mật khẩu</p>
              <InputPasswordToggle
                className="input-group-merge"
                placeholder="Xác nhận mật khẩu ..."
              />
            </div>
          </Row>
          <div>
            <Button.Ripple color="primary" type="submit" className="mr-4">
              <Save size={15} /> Lưu thay đổi
            </Button.Ripple>
            <Button.Ripple color="secondary">
              <RefreshCcw size={15} /> Làm mới
            </Button.Ripple>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default ChangePassword
