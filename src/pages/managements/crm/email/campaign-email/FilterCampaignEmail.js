import DatePickerField from 'components/form/DatePickerField'
import SelectField from 'components/form/SelectField'
import {useState} from 'react'

const FilterCampaignEmail = ({
  setFilterObject,
  filterObject,
  setModalFilter,
}) => {
  const [obj, setObj] = useState({
    send_date: null,
    name: null,
  })

  return (
    <div className="px-3 py-5">
      {/*begin::Input group*/}
      <div className="mb-10">
        <DatePickerField
          name="send_date"
          label="Ngày gửi"
          options={{mode: 'range'}}
          onChange={(name, value) => console.log(name, value)}
        />

        <SelectField
          name="name"
          label="Tên chiến dịch"
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

export default FilterCampaignEmail
