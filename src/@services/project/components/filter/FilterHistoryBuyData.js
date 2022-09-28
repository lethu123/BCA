import DatePickerField from 'components/form/DatePickerField'
import SelectField from 'components/form/SelectField'
import {useState} from 'react'

const FilterHistoryBuyData = ({
  setFilterObject,
  filterObject,
  setModalFilter,
}) => {
  const [obj, setObj] = useState({
    start_date: null,
    category: [],
  })

  return (
    <div className="px-3 py-5">
      {/*begin::Input group*/}
      <div className="mb-10">
        <DatePickerField
          name="start_date"
          label="Ngày mua"
          options={{mode: 'range'}}
          onChange={(name, value) => console.log(name, value)}
        />
        <SelectField
          name="source_data"
          label="Danh mục"
          isMulti
          options={[
            {
              label: 'Gói gia hạn tự động',
              value: 'Gói gia hạn tự động',
            },
            {
              label: 'Dữ liệu mua',
              value: 'Dữ liệu mua',
            },
            {
              label: 'Dữ liệu hoàn',
              value: 'Dữ liệu hoàn',
            },
          ]}
          onChange={(name, value) => console.log(name, value)}
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

export default FilterHistoryBuyData
