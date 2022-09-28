import React, {useState} from 'react'
import Flatpickr from 'react-flatpickr'
import {Label} from 'reactstrap'
import FilterColumn from 'components/filter-column/FilterColumn'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import {CornerDownRight, Filter, X} from 'react-feather'
import PerfectScrollbar from 'react-perfect-scrollbar'

//scss
import '@core/scss/react/libs/flatpickr/flatpickr.scss'

const dataType = [
  {id: 1, value: 'Đã nhận', color: 'warning'},
  {id: 2, value: 'Đã xem ', color: 'warning'},
  {id: 3, value: 'Đã trả lời ', color: 'warning'},
]

const FilterEmail = ({setSidebarFilter, sidebarFilter}) => {
  // ** Custom close btn
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => setSidebarFilter(!sidebarFilter)}
    />
  )
  const [pickerStart, setPickerStart] = useState(new Date())
  const [pickerFinish, setPickerFinish] = useState(new Date())
  const [picker, setPicker] = useState(new Date())
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
            <Label for="ngay_sinh">Ngày tạo</Label>
            <Flatpickr
              value={pickerStart}
              id="ngay_sinh"
              className="form-control"
              onChange={date => setPickerStart(date)}
              options={{
                mode: 'range',
                defaultDate: ['2020-02-01', '2020-02-15'],
              }}
            />
            <Label for="ngay_sinh">Ngày nhận</Label>
            <Flatpickr
              value={pickerFinish}
              id="ngay_sinh"
              className="form-control"
              onChange={date => setPickerFinish(date)}
              options={{
                mode: 'range',
                defaultDate: ['2020-02-01', '2020-02-15'],
              }}
            />
            <Label for="ngay_sinh">Ngày gửi</Label>
            <Flatpickr
              value={picker}
              id="ngay_sinh"
              className="form-control"
              onChange={date => setPicker(date)}
              options={{
                mode: 'range',
                defaultDate: ['2020-02-01', '2020-02-15'],
              }}
            />

            <FilterColumn data={dataType} name="Loại nhiệm vụ" />
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

export default FilterEmail
