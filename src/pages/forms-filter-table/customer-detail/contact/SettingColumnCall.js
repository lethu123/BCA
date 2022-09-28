import React from 'react'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import {CornerDownRight, Filter, X} from 'react-feather'

//component
import SettingColumn from 'components/setting-column/SettingColumn'
import PerfectScrollbar from 'react-perfect-scrollbar'

const data = [
  {id: 1, value: 'Chọn tất cả', check: false},
  {id: 2, value: 'ID', check: false},
  {id: 3, value: 'Loại cuộc gọi', check: false},
  {id: 4, value: 'Loại nhiệm vụ', check: false},
  {id: 5, value: 'Kết quả cuộc gọi', check: false},
  {id: 6, value: 'Thời gian bắt đầu', check: false},
  {id: 7, value: 'Thời gian kết thúc', check: false},
  {id: 8, value: 'Thời gian cuộc gọi(s)', check: false},
]

const SettingColumnCall = ({sidebarOpen, setSidebarOpen}) => {
  // ** Custom close btn
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => setSidebarOpen(!sidebarOpen)}
    />
  )
  return (
    <div>
      <Modal
        scrollable
        isOpen={sidebarOpen}
        toggle={() => setSidebarOpen(!sidebarOpen)}
        className="sidebar-lg"
        modalClassName="modal-slide-in"
        contentClassName="pt-0"
      >
        <ModalHeader
          toggle={() => setSidebarOpen(!sidebarOpen)}
          close={CloseBtn}
        >
          Cài đặt dữ liệu
        </ModalHeader>
        <ModalBody>
          <PerfectScrollbar>
            <SettingColumn data={data} />
          </PerfectScrollbar>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Filter className="mr-1" size={20} />
            Lọc
          </Button>
          <Button
            color="secondary"
            outline
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <CornerDownRight className="mr-1" size={20} />
            Hủy
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default SettingColumnCall
