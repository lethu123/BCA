import React from 'react'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import {CornerDownRight, Filter, X} from 'react-feather'
import PerfectScrollbar from 'react-perfect-scrollbar'

//component
import SettingColumn from 'components/setting-column/SettingColumn'

const data = [
  {id: 13, value: 'Chọn tất cả', check: false},
  {id: 1, value: 'Facebook SaSam', check: false},
  {id: 2, value: 'Link tác động', check: false},
  {id: 3, value: 'Đã tham gia group', check: false},
  {id: 4, value: 'Hành động', check: false},
  {id: 5, value: 'Loại hành động', check: false},
  {id: 6, value: 'Trạng thái', check: false},
  {id: 7, value: 'Chiến dịch', check: false},
  {id: 8, value: 'Ngày lấy thông tin', check: false},
  {id: 9, value: 'Ngày thực hiện', check: false},
]

const SettingColumnGroup = ({sidebarOpen, setSidebarOpen}) => {
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

export default SettingColumnGroup
