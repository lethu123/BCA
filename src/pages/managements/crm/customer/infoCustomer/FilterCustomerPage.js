import {useState} from 'react'
// *** Components
import DatePickerField from 'components/form/DatePickerField'
import FilterColumn from 'components/filter-column/FilterColumn'

const FilterCustomerPage = ({
  setFilterObject,
  filterObject,
  setModalFilter,
}) => {
  const [obj, setObj] = useState({
    status: null,
    start_date: null,
    end_date: null,
  })

  return (
    <div className="px-3 py-5">
      <div>
        <DatePickerField
          name="startTime"
          label="Ngày hiệu lực HD"
          onChange={(name, value) => console.log(value)}
        />
        <DatePickerField
          name="endTime"
          label="Ngày kết thúc"
          onChange={(name, value) => console.log(value)}
        />
        <DatePickerField
          name="year"
          label="Năm đáo hạn"
          onChange={(name, value) => console.log(value)}
        />
        <DatePickerField
          name="birthday"
          label="Ngày sinh"
          onChange={(name, value) => console.log(value)}
        />
      </div>
      {/*begin::Actions*/}
      <div className="d-flex justify-content-end">
        <button
          type="reset"
          className="btn btn-white btn-active-light-primary me-2"
          onClick={() => {
            setObj({status: null, start_date: null, end_date: null})
            setFilterObject({})
          }}
        >
          Reset
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => {
            setFilterObject(obj)
          }}
        >
          Apply
        </button>
      </div>
      {/*end::Actions*/}
    </div>
  )
}

export default FilterCustomerPage
