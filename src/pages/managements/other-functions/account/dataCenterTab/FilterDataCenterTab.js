import {useState} from 'react'
// *** Components
import DatePickerField from 'components/form/DatePickerField'
import RadioField from 'components/form/RadioField'

const FilterDataCenterTab = ({
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
          label="Ngày kích hoạt"
          onChange={(name, value) => console.log(value)}
        />
        <div className="my-5">
          <RadioField
            name="radio"
            label="Tiêu chí cấp đại lý"
            // color="warning"
            // outline
            // accent
            inline
            onChange={(name, value) => console.log(value)}
            options={[
              {
                value: 'FA',
                label: 'FA',
                checked: true,
              },
              {
                value: 'UM',
                label: 'UM',
              },
              {
                value: 'BM',
                label: 'BM',
              },
            ]}
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

export default FilterDataCenterTab
