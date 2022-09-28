import React, {useState} from 'react'
import Flatpickr from 'react-flatpickr'
import {Label} from 'reactstrap'
import FilterColumn from 'components/filter-column/FilterColumn'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import {CornerDownRight, Filter, X} from 'react-feather'
import PerfectScrollbar from 'react-perfect-scrollbar'

//scss
import '@core/scss/react/libs/flatpickr/flatpickr.scss'

const dataStatus = [
  {id: 1, value: 'Hoàn thành', color: 'primary'},
  {id: 2, value: 'Hủy', color: 'primary'},
  {id: 3, value: 'Chờ', color: 'primary'},
]

const FilterGroup = ({setSidebarFilter, sidebarFilter}) => {
  // ** Custom close btn
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => setSidebarFilter(!sidebarFilter)}
    />
  )
  const [pickerStart, setPickerStart] = useState(new Date())
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
            <Label for="ngay_sinh">Ngày Tạo</Label>
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

            <FilterColumn data={dataStatus} name="Trạng thái" />
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

export default FilterGroup
