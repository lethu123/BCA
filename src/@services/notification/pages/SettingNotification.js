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
import StatisticNotificationSettings from '../components/manage-setting/StatisticNotificationSettings'
import TableNotificationSettings from '../components/manage-setting/TableNotificationSettings'
import ModalAddNotification from '../components/manage-setting/ModalAddNotification'

const SettingNotification = () => {
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
        <div className="col-lg-4 text-right  ">
          <Button.Ripple
            className="mr-1"
            color="primary"
            onClick={() => setCenteredModal(true)}
          >
            <Plus size={18} /> Tạo thông báo mới
          </Button.Ripple>
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

export default SettingNotification
