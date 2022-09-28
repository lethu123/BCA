import React from 'react'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import {CornerDownRight, Filter, X} from 'react-feather'

//component
import SettingColumn from 'components/setting-column/SettingColumn'
import PerfectScrollbar from 'react-perfect-scrollbar'

const data = [
  {id: 13, value: 'Chọn tất cả', check: false},
  {id: 1, value: 'Mã khách hàng', check: false},
  {id: 2, value: 'Tên khách hàng', check: false},
  {id: 4, value: 'Điện thoại', check: false},
  {id: 5, value: 'Email', check: false},
  {id: 6, value: 'Ngày Sinh', check: false},
  {id: 3, value: 'Ngày mua hàng cuối', check: false},
  {id: 7, value: 'Ngày tạo', check: false},
  {id: 8, value: 'Tỉnh/Thành phố', check: false},
  {id: 9, value: 'Quận/Huyện', check: false},
  {id: 10, value: 'Phường/Xã', check: false},
  {id: 11, value: 'Nghề nghiệp', check: false},
  {id: 12, value: 'Tuổi', check: false},
  {id: 14, value: 'Số đơn hàng', check: false},
  {id: 15, value: 'Tổng tiền', check: false},
  {id: 16, value: 'Cấp độ', check: false},
]

const SettingColumnCustomer = ({sidebarOpen, setSidebarOpen}) => {
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

export default SettingColumnCustomer
