import {useState} from 'react'
// *** Components
import DatePickerField from 'components/form/DatePickerField'
import SwitchField from 'components/form/SwitchField'

const FilterInteractiveTab = ({
  setFilterObject,
  filterObject,
  setModalFilter,
}) => {
  const [obj, setObj] = useState({
    status: null,
    start_date: null,
    end_date: null,
  })

  return (
    <div className="px-3 py-5">
      <div>
        <DatePickerField
          name="picker"
          label="Ngày tạo"
          onChange={(name, value) => console.log(value)}
        />
        <DatePickerField
          name="picker"
          label="Ngày cập nhật"
          onChange={(name, value) => console.log(value)}
        />

        <div className="d-flex align-items-center mt-5">
          <span className="mr-3">Trạng thái</span>
          <SwitchField
            name="switch"
            // icon
            color="success"
            outline
            // inline
            defaultChecked
            onChange={(name, value) => console.log(value)}
          />
        </div>
      </div>
      {/*begin::Actions*/}
      <div className="d-flex justify-content-end">
        <button
          type="reset"
          className="btn btn-white btn-active-light-primary me-2"
          onClick={() => {
            setObj({status: null, start_date: null, end_date: null})
            setFilterObject({})
          }}
        >
          Reset
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => {
            // setModalFilter(false)
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

export default FilterInteractiveTab
