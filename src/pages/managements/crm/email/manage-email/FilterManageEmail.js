import DatePickerField from 'components/form/DatePickerField'
import SelectField from 'components/form/SelectField'
import {useState} from 'react'

const FilterManageEmail = ({setFilterObject, filterObject, setModalFilter}) => {
  const [obj, setObj] = useState({
    create_date: null,
    topic: null,
    campaign: null,
    sourse: null,
  })

  return (
    <div className="px-3 py-5">
      {/*begin::Input group*/}
      <div className="mb-10">
        <DatePickerField
          name="create_date"
          label="Ngày gửi"
          options={{mode: 'range'}}
          onChange={(name, value) => console.log(name, value)}
        />

        <SelectField
          name="topic"
          label="Chủ đề"
          isMulti
          options={[
            {
              label: 'Mừng sinh nhật',
              value: 'Mừng sinh nhật',
            },
            {
              label: 'Tri ân tháng 7',
              value: 'Tri ân tháng 7',
            },
            {
              label: 'Góp quỹ covid',
              value: 'Góp quỹ covid',
            },
          ]}
          onChange={(name, value) => console.log(name, value)}
        />
        <SelectField
          name="campaign"
          label="Chiến dịch"
          isMulti
          options={[
            {
              label: 'Mừng sinh nhật',
              value: 'Mừng sinh nhật',
            },
            {
              label: 'Góp quỹ covid',
              value: 'Góp quỹ covid',
            },
          ]}
          onChange={(name, value) => console.log(name, value)}
        />
        <SelectField
          name="source"
          label="Nguồn"
          isMulti
          options={[
            {
              label: 'Automation',
              value: 'Automation',
            },
            {
              label: 'Chiến dịch email',
              value: 'Chiến dịch email',
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

export default FilterManageEmail
