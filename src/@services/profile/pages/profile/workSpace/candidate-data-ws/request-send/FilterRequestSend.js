import FilterColumn from 'components/filter-column/FilterColumn'
import DatePickerField from 'components/form/DatePickerField'
import SelectField from 'components/form/SelectField'
import {useState} from 'react'

const FilterRequestSend = ({setFilterObject, filterObject, setModalFilter}) => {
  const [obj, setObj] = useState({
    start_date: null,
    category: null,
    status: null,
    type_request: null,
  })

  const [dataStatus, setDataStatus] = useState([
    {id: 1, value: 'Đang xử lý', color: 'warning', check: false},
    {id: 2, value: 'Từ chối', color: 'warning', check: false},
    {id: 3, value: 'Đã duyệt', color: 'warning', check: false},
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

        <SelectField
          name="category"
          label="Danh mục"
          isMulti
          options={[
            {
              label: 'Chuyển dữ liệu',
              value: 'Chuyển dữ liệu',
            },
            {
              label: 'Yêu cầu hoàn',
              value: 'Yêu cầu hoàn',
            },
          ]}
          onChange={(name, value) => console.log(name, value)}
        />
        <SelectField
          name="type_request"
          label="Loại giao dịch"
          isMulti
          options={[
            {
              label: 'Chuyển dữ liệu',
              value: 'Chuyển dữ liệu',
            },
            {
              label: 'Hoàn',
              value: 'Hoàn',
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

export default FilterRequestSend
