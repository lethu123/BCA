import React, {useState} from 'react'
import Flatpickr from 'react-flatpickr'
import {Label} from 'reactstrap'
import FilterColumn from 'components/filter-column/FilterColumn'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import {CornerDownRight, Filter, X} from 'react-feather'
import PerfectScrollbar from 'react-perfect-scrollbar'

//scss
import '@core/scss/react/libs/flatpickr/flatpickr.scss'

const dataTyeCall = [
  {id: 1, value: 'Inbound', color: 'primary'},
  {id: 2, value: 'Outbound', color: 'primary'},
]
const dataType = [
  {id: 1, value: 'Tư vấn khách hàng', color: 'warning'},
  {id: 2, value: 'Giải quyết khiếu nại ', color: 'warning'},
]
const dataResult = [
  {id: 1, value: 'KH mua hàng', color: 'danger'},
  {id: 2, value: 'KH từ chối', color: 'danger'},
  {id: 3, value: 'Hoàn thành', color: 'danger'},
]

const FilterCall = ({setSidebarFilter, sidebarFilter}) => {
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
            <Label for="ngay_sinh">Thời gian bắt đầu</Label>
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
            <Label for="ngay_sinh">Thời gian kết thúc</Label>
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

            <FilterColumn data={dataTyeCall} name="Loại cuộc gọi" />
            <FilterColumn data={dataType} name="Loại nhiệm vụ" />
            <FilterColumn data={dataResult} name="Kết quả cuộc gọi" />
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

export default FilterCall
