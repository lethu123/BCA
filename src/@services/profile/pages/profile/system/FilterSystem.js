import {useState} from 'react'
// *** Components
import DatePickerField from 'components/form/DatePickerField'
import RadioField from 'components/form/RadioField'

const FilterSystem = ({setFilterObject, filterObject, setModalFilter}) => {
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
          label="Ngày gia nhập"
          onChange={(name, value) => console.log(value)}
        />
        <div className="my-3">
          <RadioField
            name="radio"
            label="Cấp đại lý"
            inline
            options={[
              {
                value: 'UM',
                label: 'UM',
                checked: true,
              },
              {
                value: 'BM',
                label: 'BM',
              },
              {
                value: 'FA',
                label: 'FA',
              },
            ]}
            onChange={(name, value) => console.log(value)}
          />
        </div>

        <RadioField
          name="status"
          label="Trạng thái"
          inline
          options={[
            {
              value: 'Acive',
              label: 'Active',
              checked: true,
            },
            {
              value: 'Inactive',
              label: 'Inactive',
            },
          ]}
          onChange={(name, value) => console.log(value)}
        />
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
            setModalFilter(false)
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

export default FilterSystem
