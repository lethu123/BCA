import React, {useState} from 'react'
import FilterColumn from 'components/filter-column/FilterColumn'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
} from 'reactstrap'
import {CornerDownRight, Filter, X} from 'react-feather'
import Flatpickr from 'react-flatpickr'
import Select from 'react-select'
import {selectThemeColors} from 'utility/Utils'
import PerfectScrollbar from 'react-perfect-scrollbar'

//scss
import '@core/scss/react/libs/flatpickr/flatpickr.scss'

const optionSelect = [
  {value: 'quantam', label: 'Quan tâm'},
  {value: 'yeuthich', label: 'Yêu thích'},
  {value: 'tiepcan', label: 'Tiếp Cận'},
]

const dataJoined = [
  {id: 1, value: 'Tham gia ', color: 'warning'},
  {id: 2, value: 'Chờ', color: 'warning'},
]

const dataFilter = [
  {id: 1, value: 'Tham gia group', color: 'primary'},
  {id: 2, value: 'Bình luận', color: 'primary'},
  {id: 3, value: 'Like', color: 'primary'},
  {id: 4, value: 'Viết bài', color: 'primary'},
]

const typeAction = [
  {id: 1, value: 'New', color: 'danger'},
  {id: 2, value: 'Redo', color: 'danger'},
]

const dataStatus = [
  {id: 1, value: 'Chờ', color: 'info'},
  {id: 2, value: 'Hoàn thành', color: 'info'},
  {id: 3, value: 'Xóa', color: 'info'},
]

const typeInteres = [
  {id: 1, value: 'Quan tâm', color: 'primary'},
  {id: 2, value: 'Tiếp cận', color: 'primary'},
  {id: 3, value: 'Yêu thích', color: 'primary'},
  {id: 4, value: 'Mua', color: 'primary'},
]

const GroupFilter = ({setSidebarFilter, sidebarFilter}) => {
  //useState
  const [pickerStart, setPickerStart] = useState(new Date())
  const [pickerData, setPickerData] = useState(new Date())
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
            <Label for="range-picker">Ngày thực hiện</Label>
            <Flatpickr
              value={pickerStart}
              id="range-picker9"
              className="form-control"
              onChange={date => setPickerStart(date)}
              options={{
                mode: 'range',
                defaultDate: ['2020-02-01', '2020-02-15'],
              }}
            />
            <Label for="range-picker">Ngày lấy thông tin</Label>
            <Flatpickr
              value={pickerData}
              id="range-picker10"
              className="form-control"
              onChange={date => setPickerData(date)}
              options={{
                mode: 'range',
                defaultDate: ['2020-02-01', '2020-02-15'],
              }}
            />
            <FilterColumn data={dataJoined} name="Đã tham gia group" />
            <FilterColumn data={dataFilter} name="Hành động" />
            <FilterColumn data={typeAction} name="Loại hành động" />
            <FilterColumn data={dataStatus} name="Trạng thái" />
            <Label className="font-weight-bold mt-3">
              Khách hàng tiềm năng
            </Label>
            <Select
              theme={selectThemeColors}
              className="react-select"
              classNamePrefix="select"
              defaultValue={optionSelect[0]}
              options={optionSelect}
              isClearable={false}
            />
            <FilterColumn data={typeInteres} name="Loại quan tâm" />
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

export default GroupFilter
