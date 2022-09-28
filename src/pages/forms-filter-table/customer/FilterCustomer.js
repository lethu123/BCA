import React, {useState} from 'react'
import Flatpickr from 'react-flatpickr'
import {Label} from 'reactstrap'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import {CornerDownRight, Filter, X} from 'react-feather'
import PerfectScrollbar from 'react-perfect-scrollbar'

//scss
import '@core/scss/react/libs/flatpickr/flatpickr.scss'

const FilterCustomer = ({setSidebarFilter, sidebarFilter}) => {
  //useState
  const [pickerFinish, setPickerFinish] = useState(new Date())
  const [pickerCreate, setPickerCreate] = useState(new Date())
  const [pickerBirth, setPickerBirth] = useState(new Date())

  // ** Custom close btn
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => setSidebarFilter(!sidebarFilter)}
    />
  )
  return (
    <div>
      <Modal
        scrollable
        isOpen={sidebarFilter}
        toggle={() => setSidebarFilter(!sidebarFilter)}
        className="sidebar-lg"
        modalClassName="modal-slide-in"
        contentClassName="pt-0"
      >
        <ModalHeader
          toggle={() => setSidebarFilter(!sidebarFilter)}
          close={CloseBtn}
        >
          Cài đặt dữ liệu
        </ModalHeader>
        <ModalBody>
          <PerfectScrollbar>
            <Label for="ngay_mua_hang_cuoi">Ngày mua hàng cuối</Label>
            <Flatpickr
              value={pickerFinish}
              id="ngay_mua_hang_cuoi"
              className="form-control"
              onChange={date => setPickerFinish(date)}
              options={{
                mode: 'range',
                defaultDate: ['2020-02-01', '2020-02-15'],
              }}
            />
            <Label for="ngay-tao">Ngày tạo</Label>
            <Flatpickr
              value={pickerCreate}
              id="ngay-tao"
              className="form-control"
              onChange={date => setPickerCreate(date)}
              options={{
                mode: 'range',
                defaultDate: ['2020-02-01', '2020-02-15'],
              }}
            />
            <Label for="ngay_sinh">Ngày sinh</Label>
            <Flatpickr
              value={pickerBirth}
              id="ngay_sinh"
              className="form-control"
              onChange={date => setPickerBirth(date)}
              options={{
                mode: 'range',
                defaultDate: ['2020-02-01', '2020-02-15'],
              }}
            />
          </PerfectScrollbar>
        </ModalBody>
        <ModalFooter className="mt-5">
          <Button
            color="primary"
            onClick={() => setSidebarFilter(!sidebarFilter)}
          >
            <Filter className="mr-1" size={20} />
            Lọc
          </Button>
          <Button
            color="secondary"
            outline
            onClick={() => setSidebarFilter(!sidebarFilter)}
          >
            <CornerDownRight className="mr-1" size={20} />
            Hủy
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default FilterCustomer
