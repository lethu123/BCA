import FilterColumn from 'components/filter-column/FilterColumn'
import DatePickerField from 'components/form/DatePickerField'
import {useState} from 'react'

const FilterRequest = ({setFilterObject, filterObject, setModalFilter}) => {
  const [obj, setObj] = useState({
    start_date: null,
    sale_date: null,
    end_date: null,
    category: null,
    status: null,
  })
  const [dataCategory, setDataCategory] = useState([
    {id: 1, value: 'Cuyển', color: 'danger', check: false},
    {id: 2, value: 'Hoàn', color: 'danger', check: false},
  ])

  const [dataStatus, setDataStatus] = useState([
    {id: 1, value: 'Chờ xử lý', color: 'warning', check: false},
    {id: 2, value: 'Duyệt', color: 'warning', check: false},
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
          name="sale_date"
          label="Ngày bán"
          options={{mode: 'range'}}
          onChange={(name, value) => console.log(name, value)}
        />
        <DatePickerField
          name="end_date"
          label="Ngày đăng kí"
          options={{mode: 'range'}}
          onChange={(name, value) => console.log(name, value)}
        />

        <FilterColumn
          dataFilter={dataCategory}
          setDataFilter={setDataCategory}
          name="Danh mục"
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

export default FilterRequest
