import React, {useState} from 'react'
import {Button, ButtonGroup} from 'reactstrap'
import {Calendar} from 'react-feather'
// *** component
import DatePickerField from 'components/form/DatePickerField'
const FilterNotification = () => {
  const [rSelected, setRSelected] = useState(null)

  return (
    <div className="d-block d-sm-flex   justify-content-md-end align-items-center w-100 mt-5">
      <ButtonGroup className="mb-1 mr-2">
        <Button
          color="primary"
          onClick={() => setRSelected(1)}
          active={rSelected === 1}
          outline
        >
          Ngày
        </Button>
        <Button
          color="primary"
          onClick={() => setRSelected(2)}
          active={rSelected === 2}
          outline
        >
          Tuần
        </Button>
        <Button
          color="primary"
          onClick={() => setRSelected(3)}
          active={rSelected === 3}
          outline
        >
          Tháng
        </Button>
      </ButtonGroup>
      <div className="d-flex justify-content-sm-end   mt-5 mt-sm-0 align-items-center">
        <Calendar className="text-primary mr-2" size={25} />
        <DatePickerField
          name="time_project"
          // label="Thời gian chạy dự án"
          placeholder="Chọn ngày"
          options={{mode: 'range'}}
          onChange={(name, value) => console.log(name, value)}
        />
      </div>
    </div>
  )
}

export default FilterNotification
