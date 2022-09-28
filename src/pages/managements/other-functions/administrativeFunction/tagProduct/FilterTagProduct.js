import {useState} from 'react'
// *** Components
import DatePickerField from 'components/form/DatePickerField'
import {CustomInput} from 'reactstrap'
import moment from 'moment'

const initValue = {
  active_time: null,
  is_used: false,
}
const FilterTagProduct = ({setFilterObject}) => {
  const [obj, setObj] = useState(initValue)

  return (
    <div className="px-2">
      <div className="mb-1">
        <div className="font-weight-bolder mb-1">Trạng thái</div>
        <CustomInput
          type="switch"
          id="exampleCustomSwitch"
          name="is_used"
          label="Đang sử dụng"
          inline
          onChange={e => {
            setObj({...obj, is_used: e.target.checked})
          }}
        />
      </div>
      <DatePickerField
        name="active_time"
        label="Ngày kích hoạt"
        onChange={(name, value) => {
          setObj({...obj, active_time: moment(value[0]).format('YYYY-MM-DD')})
        }}
      />

      <hr />
      {/*begin::Actions*/}
      <div className="d-flex justify-content-end  ">
        <button
          type="reset"
          className="btn btn-white btn-active-light-primary me-2"
          onClick={() => {
            setObj(initValue)
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

export default FilterTagProduct
