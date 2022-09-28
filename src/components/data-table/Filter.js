import DatePickerField from 'components/form/DatePickerField'
import SelectField from 'components/form/SelectField'
import {useState} from 'react'
import {formatViDate} from 'utility/Utils'

const options = [
  {
    label: 'pending',
    value: 2,
  },
  {
    label: 'accept',
    value: 1,
  },
]

const Filter = ({setFilterObject, filterObject}) => {
  const [obj, setObj] = useState({})

  return (
    <div className="px-3 py-5">
      {/*begin::Input group*/}
      <div className="mb-10">
        <SelectField
          onChange={(name, value) => {
            if (value) {
              setObj({...obj, status: value.value})
            }
          }}
          options={options}
          value={
            filterObject.status
              ? options.filter(ele => ele.value === filterObject.status)
              : []
          }
          label="Trạng thái"
          name="status"
          isMulti={false}
        />
        <DatePickerField
          label="Ngày bắt đầu"
          name="start_date"
          value={filterObject.start_date || ''}
          onChange={(name, value) => {
            if (value) {
              let fulltime = formatViDate(value)
              setObj({...obj, start_date: fulltime})
            }
          }}
        />
        <DatePickerField
          label="Ngày kết thúc"
          name="end_date"
          value={filterObject.end_date || ''}
          onChange={(name, value) => {
            if (value) {
              let fulltime = formatViDate(value)
              setObj({...obj, end_date: fulltime})
            }
          }}
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
          onClick={() => setFilterObject(obj)}
        >
          Apply
        </button>
      </div>
      {/*end::Actions*/}
    </div>
  )
}

export default Filter
