import FilterColumn from 'components/filter-column/FilterColumn'
import DatePickerField from 'components/form/DatePickerField'
import SwitchField from 'components/form/SwitchField'
import {useState} from 'react'

const FilterMemberLandingpage = ({
  setFilterObject,
  filterObject,
  setModalFilter,
}) => {
  const [obj, setObj] = useState({
    start_date: null,
    end_date: null,
    type_LDP: null,
    status: null,
  })

  const [dataType, setDataType] = useState([
    {id: 1, value: 'KHTN', color: 'warning', check: false},
    {id: 2, value: 'UVTN', color: 'warning', check: false},
  ])

  return (
    <div className="px-3 py-5">
      {/*begin::Input group*/}
      <div className="mb-10">
        <DatePickerField
          name="start_date"
          label="Ngày tạo"
          options={{mode: 'range'}}
          onChange={(name, value) => console.log(name, value)}
        />
        <DatePickerField
          name="end_date"
          label="Ngày Kích hoạt"
          options={{mode: 'range'}}
          onChange={(name, value) => console.log(name, value)}
        />

        <FilterColumn
          dataFilter={dataType}
          setDataFilter={setDataType}
          name="Loại LDP"
        />
        <SwitchField
          name="status"
          label="Trạng thái"
          icon
          color="success"
          outline
          onChange={(name, value) => console.log(value)}
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

export default FilterMemberLandingpage
