import React, {useState} from 'react'
import {Copy, Grid, MoreVertical, Plus, Trash2} from 'react-feather'
import {
  Button,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  UncontrolledButtonDropdown,
} from 'reactstrap'
// *** Components
import StatisticNotificationSettings from './StatisticNotificationSettings'
import TableNotificationSettings from './TableNotificationSettings'
import ModalAddNotification from './ModalAddNotification'

const NotificationSettings = () => {
  const [centeredModal, setCenteredModal] = useState(false)

  return (
    <div style={{backgroundColor: '#fff'}} className="p-3">
      <div className="d-flex row align-items-center justify-content-between mb-2">
        <div className="d-flex col-lg-8 align-items-center">
          <Grid
            color="#E6641F"
            stroke="#E6641F"
            fill="#E6641F"
            size={50}
            className="mr-2"
          />
          <div>
            <h4 className="mb-0 text-primary">Quản lý thông báo</h4>
            <p className="mb-0">
              Quản lý và cập nhật dữ liệu các ứng viên từ Landing page của bạn
            </p>
          </div>
        </div>
        <div className="col-lg-4 text-right d-flex">
          <Button.Ripple
            className="mr-1"
            color="primary"
            onClick={() => setCenteredModal(true)}
          >
            <Plus size={18} /> Tạo thông báo mới
          </Button.Ripple>
          <UncontrolledButtonDropdown>
            <DropdownToggle color="flat-primary" style={{padding: 0}}>
              <MoreVertical />
            </DropdownToggle>
            <DropdownMenu className="mt-1">
              <DropdownItem>
                <div>
                  <Copy size={19} className="mr-3" />
                  <span>Nhân bản sự kiện</span>
                </div>
              </DropdownItem>
              <DropdownItem className="m-0" style={{with: '100%'}}>
                <Trash2 size={19} className="mr-3" />
                <span>Xóa sự kiện</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </div>
      </div>
      <div>
        <StatisticNotificationSettings />
        <TableNotificationSettings />
      </div>
      <ModalAddNotification
        centeredModal={centeredModal}
        setCenteredModal={setCenteredModal}
      />
    </div>
  )
}

export default NotificationSettings
