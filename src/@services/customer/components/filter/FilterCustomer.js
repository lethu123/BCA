import FilterColumn from 'components/filter-column/FilterColumn'
import DatePickerField from 'components/form/DatePickerField'
import {useState} from 'react'

const FilterCustomer = ({setFilterObject, filterObject, setModalFilter}) => {
  const [obj, setObj] = useState({
    start_date: null,
    end_date: null,
    status: null,
  })

  const [dataLabelData, setDataLabelData] = useState([
    {id: 1, value: 'KHTN', color: 'success', check: false},
    {id: 2, value: 'UVTN', color: 'success', check: false},
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
          name="end_date"
          label="Ngày đăng kí"
          options={{mode: 'range'}}
          onChange={(name, value) => console.log(name, value)}
        />

        <FilterColumn
          dataFilter={dataLabelData}
          setDataFilter={setDataLabelData}
          name="Nhãn Data"
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
          }}
        >
          Apply
        </button>
      </div>
      {/*end::Actions*/}
    </div>
  )
}

export default FilterCustomer
