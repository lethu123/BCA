import DatePickerField from 'components/form/DatePickerField'
import SwitchField from 'components/form/SwitchField'
import {useState} from 'react'

const FilterMyPost = ({setFilterObject, filterObject, setModalFilter}) => {
  const [obj, setObj] = useState({
    start_date: null,
    end_date: null,
    status: true,
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
        <DatePickerField
          name="end_date"
          label="Ngày kết thúc"
          options={{mode: 'range'}}
          onChange={(name, value) => console.log(name, value)}
        />

        <SwitchField
          name="status"
          label="Trạng thái"
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
          }}
        >
          Apply
        </button>
      </div>
      {/*end::Actions*/}
    </div>
  )
}

export default FilterMyPost
