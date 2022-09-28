import DatePickerField from 'components/form/DatePickerField'
import React from 'react'

const FilterCampaignCalendarDetail = ({
  setFilterObject,
  filterObject,
  setModalFilter,
}) => {
  return (
    <div className="px-3 py-5">
      <div>
        <DatePickerField
          name="picker"
          label="Ngày"
          onChange={(name, value) => console.log(value)}
          options={{mode: 'range'}}
          placeholder="Chọn ngày để lọc"
        />
      </div>
      {/*begin::Actions*/}
      <div className="d-flex justify-content-end">
        <button
          type="reset"
          className="btn btn-white btn-active-light-primary me-2"
          onClick={() => {}}
        >
          Reset
        </button>
        <button type="submit" className="btn btn-primary" onClick={() => {}}>
          Apply
        </button>
      </div>
      {/*end::Actions*/}
    </div>
  )
}

export default FilterCampaignCalendarDetail
