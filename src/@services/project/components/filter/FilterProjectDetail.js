import FilterColumn from 'components/filter-column/FilterColumn'
import DatePickerField from 'components/form/DatePickerField'
import {useState} from 'react'

const FilterProjectDetail = ({
  setFilterObject,
  filterObject,
  setModalFilter,
}) => {
  const [obj, setObj] = useState({
    start_date: null,
    registration_date: null,
    leads: null,
    status: null,
  })
  const [dataLeads, setDataLeads] = useState([
    {id: 1, value: 'Quan tâm', color: 'success', check: false},
    {id: 2, value: 'Tiếp cận', color: 'success', check: false},
    {id: 3, value: 'Yêu thích', color: 'success', check: false},
  ])

  const [dataStatus, setDataStatus] = useState([
    {id: 1, value: 'Chưa bán', color: 'warning', check: false},
    {id: 2, value: 'Đã bán', color: 'warning', check: false},
    {id: 3, value: 'Trùng', color: 'warning', check: false},
  ])

  return (
    <div className="px-3 py-5">
      {/*begin::Input group*/}
      <div className="mb-10">
        <DatePickerField
          name="start_date"
          label="Ngày tương tác gần nhất"
          options={{mode: 'range'}}
          onChange={(name, value) => console.log(name, value)}
        />
        <DatePickerField
          name="registration_date"
          label="Ngày đăng kí"
          options={{mode: 'range'}}
          onChange={(name, value) => console.log(name, value)}
        />

        <FilterColumn
          dataFilter={dataLeads}
          setDataFilter={setDataLeads}
          name="Khách hàng tiềm năng"
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

export default FilterProjectDetail
