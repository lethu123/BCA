import {useState} from 'react'
// *** Components
import DatePickerField from 'components/form/DatePickerField'
import FilterColumn from 'components/filter-column/FilterColumn'

const FilterPromotionCode = ({
  setFilterObject,
  filterObject,
  setModalFilter,
}) => {
  const [obj, setObj] = useState({
    status: null,
    start_date: null,
    end_date: null,
  })
  const [dataFilter, setDataFilter] = useState([
    {id: 1, value: 'Đang áp dụng', color: 'primary', check: false},
    {id: 2, value: 'Chưa áp dụng', color: 'primary', check: false},
    {id: 3, value: 'Ngừng áp dụng', color: 'primary', check: false},
  ])

  return (
    <div className="px-3 py-5">
      <div>
        <DatePickerField
          name="startTime"
          label="Ngày bắt đầu"
          onChange={(name, value) => console.log(value)}
        />
        <DatePickerField
          name="endTime"
          label="Ngày kết thúc"
          onChange={(name, value) => console.log(value)}
        />
        <div className="mt-3 mb-5">
          <FilterColumn
            dataFilter={dataFilter}
            setDataFilter={setDataFilter}
            name="Trạng thái"
          />
        </div>
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
            // setModalFilter(false)
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

export default FilterPromotionCode
