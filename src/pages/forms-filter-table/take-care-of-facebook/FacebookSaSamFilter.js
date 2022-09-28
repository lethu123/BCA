import React, {useState} from 'react'
import Flatpickr from 'react-flatpickr'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
} from 'reactstrap'
import {CornerDownRight, Filter, X} from 'react-feather'
import FilterColumn from 'components/filter-column/FilterColumn'
import PerfectScrollbar from 'react-perfect-scrollbar'
//scss
import '@core/scss/react/libs/flatpickr/flatpickr.scss'

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

const FacebookSaSamFilter = ({setSidebarFilter, sidebarFilter}) => {
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
              id="range-picker5"
              className="form-control"
              onChange={date => setPickerStart(date)}
              options={{
                mode: 'range',
                defaultDate: ['2020-02-01', '2020-02-15'],
              }}
            />
            <Label for="range-picker">Ngày lấy dữ liệu</Label>
            <Flatpickr
              value={pickerData}
              id="range-picker6"
              className="form-control"
              onChange={date => setPickerData(date)}
              options={{
                mode: 'range',
                defaultDate: ['2020-02-01', '2020-02-15'],
              }}
            />
            <FilterColumn data={dataFilter} name="Hành động" />
            <FilterColumn data={typeAction} name="Loại hành động" />
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

export default FacebookSaSamFilter
