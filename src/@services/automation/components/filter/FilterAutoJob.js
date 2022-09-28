import {useState, useEffect} from 'react'
import moment from 'moment'

// *** Components
import DatePickerField from 'components/form/DatePickerField'
import RadioField from 'components/form/RadioField'

// ** query
import AutomationQuery from '@services/automation/hook/query'

const FilterAutoJob = ({setFilterObject, filterObject, setModalFilter}) => {
  const [obj, setObj] = useState({
    status: null,
    start_date: new Date(),
    end_date: null,
  })

  const {data} = AutomationQuery.useGetListStatus()
  const [dataFilter, setDataFilter] = useState([])
  useEffect(() => {
    if (data) {
      let arr = data?.data.map(item => ({
        id: item._id,
        label: item.name,
        value: item.name,
      }))
      setDataFilter(arr)
    }
  }, [data])

  return (
    <div className="px-3 py-5">
      <div>
        <DatePickerField
          name="picker"
          label="Ngày tạo"
          value={obj.start_date}
          onChange={(name, value) => {
            if (value) {
              setObj({
                ...obj,
                start_date: moment(value[0]).format('DD/MM/YYYY'),
              })
            }
          }}
          options={{dateFormat: 'd/m/Y'}}
        />

        <div>
          <RadioField
            name="status"
            label="Trạng thái"
            // color="warning"
            // outline
            // accent
            inline
            options={dataFilter}
            onChange={(name, value) => console.log()}
          />
        </div>
        <div>
          <RadioField
            name="datatable"
            label="Nguồn dữ liệu"
            // color="warning"
            // outline
            // accent
            // inline
            options={[
              {id: 1, label: 'Khai thác khách hàng tiềm năng', value: 'cx'},
              {id: 2, label: 'Chăm sóc facebook', value: 'fb'},
            ]}
            onChange={(name, value) => console.log()}
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

export default FilterAutoJob
