import SwitchField from 'components/form/SwitchField'
import React from 'react'
import {RefreshCcw, Save} from 'react-feather'
import {Button, Card, CardBody} from 'reactstrap'

const SettingNotification = () => {
  return (
    <div className="SettingNotification">
      <Card>
        <CardBody>
          <h5>Thông báo hoạt động</h5>
          <div className="d-flex align-items-center mb-2">
            <SwitchField
              name="switch"
              // label="Email me when someone comments on my article"
              // icon
              color="primary"
              outline
              id="1"
              defaultChecked
              onChange={(name, value) => console.log(value)}
            />
            <span>Email me when someone comments on my article</span>
          </div>
          <div className="d-flex align-items-center mb-2">
            <SwitchField
              name="switch"
              // label="Email me when someone comments on my article"
              // icon
              color="primary"
              outline
              id="2"
              defaultChecked
              onChange={(name, value) => console.log(value)}
            />
            <span>Email me when someone answers on my form</span>
          </div>
          <div className="d-flex align-items-center mb-2">
            <SwitchField
              name="switch"
              // label="Email me when someone comments on my article"
              // icon
              color="primary"
              outline
              id="3"
              onChange={(name, value) => console.log(value)}
            />
            <span>Email me when someone follows me</span>
          </div>

          <h5>Thông báo ứng dụng</h5>
          <div className="d-flex align-items-center mb-2">
            <SwitchField
              name="switch"
              // label="Email me when someone comments on my article"
              // icon
              color="primary"
              outline
              id="4"
              defaultChecked
              onChange={(name, value) => console.log(value)}
            />
            <span>News and announcements</span>
          </div>
          <div className="d-flex align-items-center mb-2">
            <SwitchField
              name="switch"
              // label="Email me when someone comments on my article"
              // icon
              color="primary"
              outline
              id="5"
              defaultChecked
              onChange={(name, value) => console.log(value)}
            />
            <span>Weekly product updates</span>
          </div>

          <div className="d-flex align-items-center mb-2">
            <SwitchField
              name="switch"
              // label="Email me when someone comments on my article"
              // icon
              color="primary"
              outline
              id="6"
              defaultChecked
              onChange={(name, value) => console.log(value)}
            />
            <span>Weekly blog digest</span>
          </div>

          <div className="mt-10">
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

export default SettingNotification
