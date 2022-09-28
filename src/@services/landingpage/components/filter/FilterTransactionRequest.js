import FilterColumn from 'components/filter-column/FilterColumn'
import DatePickerField from 'components/form/DatePickerField'
import SelectField from 'components/form/SelectField'
import {useState} from 'react'

const FilterTransactionRequest = ({
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

  const [dataStatus, setDataStatus] = useState([
    {id: 1, value: 'Duyệt', color: 'success', check: false},
    {id: 2, value: 'Từ chối', color: 'success', check: false},
    {id: 3, value: 'Chờ xử lý', color: 'success', check: false},
  ])

  return (
    <div className="px-3 py-5">
      {/*begin::Input group*/}
      <div className="mb-10">
        <DatePickerField
          name="start_date"
          label="Ngày thực hiện yêu cầu"
          options={{mode: 'range'}}
          onChange={(name, value) => console.log(name, value)}
        />

        <FilterColumn
          dataFilter={dataType}
          setDataFilter={setDataType}
          name="Loại LDP"
        />

        <SelectField
          name="source_data"
          label="Loại giao dịch"
          isMulti
          options={[
            {
              label: 'Kích hoạt landingpage',
              value: 'Kích hoạt landingpage',
            },
          ]}
          onChange={(name, value) => console.log(name, value)}
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

export default FilterTransactionRequest
