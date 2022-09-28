import DatePickerField from 'components/form/DatePickerField'
import SelectField from 'components/form/SelectField'
import {useState} from 'react'

const Filterautojob = ({setFilterObject, filterObject, setModalFilter}) => {
  const [obj, setObj] = useState({
    create_date: null,

    type: null,
  })

  return (
    <div className="px-3 py-5">
      {/*begin::Input group*/}
      <div className="mb-10">
        <DatePickerField
          name="create_date"
          label="Ngày tạo"
          options={{mode: 'range'}}
          onChange={(name, value) => console.log(name, value)}
        />

        <SelectField
          name="type"
          label="Loại chiến dịch"
          isMulti
          options={[
            {
              label: 'Chiến dịch bán hàng',
              value: 'Chiến dịch bán hàng',
            },
            {
              label: 'Chăm sóc Facebook',
              value: 'Chăm sóc Facebook',
            },
            {
              label: 'Upsell tháng 7',
              value: 'Upsell tháng 7',
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

export default Filterautojob
