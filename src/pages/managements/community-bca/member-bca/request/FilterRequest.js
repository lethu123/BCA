import DatePickerField from 'components/form/DatePickerField'
import {useState} from 'react'
import FilterColumn from 'components/filter-column/FilterColumn'
import SelectField from 'components/form/SelectField'

const FilterRequest = ({setFilterObject, filterObject, setModalFilter}) => {
  const [dataStatus, setDataStatus] = useState([
    {id: 1, value: 'Mới', color: 'success', check: false},
    {id: 2, value: 'Đang xử lý', color: 'success', check: false},
  ])

  const [obj, setObj] = useState({
    start_date: null,
    category: null,
    status: null,
  })

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

        <SelectField
          name="category"
          label="Danh mục"
          isMulti
          options={[
            {
              label: 'Báo cáo trang cá nhân',
              value: 'Báo cáo trang cá nhân',
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

export default FilterRequest
