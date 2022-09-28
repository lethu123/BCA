import DatePickerField from 'components/form/DatePickerField'
import SelectField from 'components/form/SelectField'
import {useState} from 'react'

const FilterTask = ({setFilterObject, filterObject, setModalFilter}) => {
  const [obj, setObj] = useState({
    create_date: null,
    start_date: null,
    end_date: null,
    type_task: null,
    join_insurance: null,
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
        <DatePickerField
          name="start_date"
          label="Ngày bắt đầu"
          options={{mode: 'range'}}
          onChange={(name, value) => console.log(name, value)}
        />
        <DatePickerField
          name="end_date"
          label="Ngày đến hạn"
          options={{mode: 'range'}}
          onChange={(name, value) => console.log(name, value)}
        />
        <SelectField
          name="type_task"
          label="Loại task"
          isMulti
          options={[
            {
              label: 'Sinh nhật',
              value: 'Sinh nhật',
            },
            {
              label: 'Nhắc phí',
              value: 'Nhắc phí',
            },
            {
              label: 'Upsell tháng 7',
              value: 'Upsell tháng 7',
            },
          ]}
          onChange={(name, value) => console.log(name, value)}
        />
        <SelectField
          name="join_insurance"
          label="Tham gia bảo hiểm"
          isMulti
          options={[
            {
              label: 'Bảo hiểm nhân thọ',
              value: 'Bảo hiểm nhân thọ',
            },
            {
              label: 'Bảo hiểm sức khỏe',
              value: 'Bảo hiểm sức khỏe',
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

export default FilterTask
