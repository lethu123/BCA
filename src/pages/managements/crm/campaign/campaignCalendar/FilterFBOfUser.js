import React, {useState} from 'react'
import {Input, Label} from 'reactstrap'
import Flatpickr from 'react-flatpickr'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import {CornerDownRight, Filter, X} from 'react-feather'
import FilterColumn from 'components/filter-column/FilterColumn'
import PerfectScrollbar from 'react-perfect-scrollbar'

//scss
import '@core/scss/react/libs/flatpickr/flatpickr.scss'

const dataFilter = [
  {id: 1, value: 'Tham gia group', color: 'primary'},
  {id: 2, value: 'Bình luận', color: 'primary'},
  {id: 3, value: 'Like', color: 'primary'},
]

const FilterFBOfUser = ({setSidebarFilter, sidebarFilter}) => {
  //useState
  const [picker, setPicker] = useState(new Date())

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
              value={picker}
              id="range-picker1"
              className="form-control"
              onChange={date => setPicker(date)}
              options={{
                mode: 'range',
                defaultDate: ['2020-02-01', '2020-02-15'],
              }}
            />
            <Label for="range-picker">Ngày lấy dữ liệu</Label>
            <Flatpickr
              value={picker}
              id="range-picker2"
              className="form-control"
              onChange={date => setPicker(date)}
              options={{
                mode: 'range',
                defaultDate: ['2020-02-01', '2020-02-15'],
              }}
            />
            <Label for="basicInput">Link</Label>
            <Input type="text" id="basicInput" placeholder="Nhập link" />
            <FilterColumn data={dataFilter} name="Hành động" />
          </PerfectScrollbar>
        </ModalBody>
        <ModalFooter>
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

export default FilterFBOfUser
