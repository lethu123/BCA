import FilterColumn from 'components/filter-column/FilterColumn'
import DatePickerField from 'components/form/DatePickerField'
import {useState} from 'react'

const FilterDataTransfer = ({
  setFilterObject,
  filterObject,
  setModalFilter,
}) => {
  const [obj, setObj] = useState({
    start_date: null,
    system_flags: null,
    status: null,
  })
  const [dataFlags, setDataFlags] = useState([
    {id: 1, value: 'Cùng hệ thống', color: 'success', check: false},
    {id: 2, value: 'Khác hệ thống', color: 'success', check: false},
  ])

  const [dataStatus, setDataStatus] = useState([
    {id: 1, value: 'Đã duyệt', color: 'warning', check: false},
    {id: 2, value: 'Chờ duyệt', color: 'warning', check: false},
  ])

  return (
    <div className="px-3 py-5">
      {/*begin::Input group*/}
      <div className="mb-10">
        <DatePickerField
          name="start_date"
          label="Ngày yêu cầu"
          options={{mode: 'range'}}
          onChange={(name, value) => console.log(name, value)}
        />

        <FilterColumn
          dataFilter={dataFlags}
          setDataFilter={setDataFlags}
          name="Cờ hệ thống"
        />
        <FilterColumn
          dataFilter={dataStatus}
          setDataFilter={setDataStatus}
          name="Trạng thái"
        />
      </div>
      {/*end::Input group*/}
      {/*begin::Actions*/}
      <div className="d-flex justify-content-end">
        <button
          type="reset"
          className="btn btn-white btn-active-light-primary me-2"
          onClick={() => {
            setObj({})
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
            setModalFilter(false)
          }}
        >
          Apply
        </button>
      </div>
      {/*end::Actions*/}
    </div>
  )
}

export default FilterDataTransfer
