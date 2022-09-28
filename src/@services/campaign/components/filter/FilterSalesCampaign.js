import {useEffect, useState} from 'react'
import moment from 'moment'
// *** Components
import DatePickerField from 'components/form/DatePickerField'
import FilterColumn from 'components/filter-column/FilterColumn'

// query
import {AutomationQuery} from '@services/automation'

const FilterSalesCampaign = ({setFilterObject, filterObject}) => {
  const [obj, setObj] = useState({
    status: null,
    start_date: null,
    end_date: null,
    stop_date: null,
    campaign_type: null,
  })
  const {data: listStatus} = AutomationQuery.useGetListStatusCampain()

  const [status, setStatus] = useState([
    {
      id: 1,
      label: 'Hoàn thành',
      value: 'COMPLETE',
      color: 'primary',
      check: false,
    },
    {
      id: 2,
      label: 'Đang chạy',
      value: 'RUNNING',
      color: 'primary',
      check: false,
    },
    {id: 3, label: 'Stop', value: 'STOP', color: 'primary', check: false},
    {
      id: 4,
      label: 'Đang chờ',
      value: 'PENDING',
      color: 'primary',
      check: false,
    },
  ])
  const [campainType, setCampainType] = useState([
    {id: 1, lable: 'Bán hàng', value: 'SALE', color: 'primary', check: false},
    {id: 2, lable: 'Chăm sóc FB', value: 'FB', color: 'primary', check: false},
  ])

  useEffect(() => {
    if (listStatus) {
      setStatus(
        listStatus.map(item => ({
          label: item.name,
          value: item.key,
          id: item._id,
          color: 'primary',
          check: false,
        })),
      )
    }
  }, [listStatus])

  useEffect(() => {
    setObj({
      ...obj,
      campaign_type: campainType.find(item => item.check)?.value || null,
    })
  }, [campainType])

  useEffect(() => {
    setObj({...obj, status: status.find(item => item.check)?.value || null})
  }, [status])

  return (
    <div className="px-7 pb-5">
      <div>
        <FilterColumn
          data={campainType}
          setData={setCampainType}
          name="Loại chiến dịch"
          option="single"
        />

        <div className="my-5">
          <FilterColumn
            data={status}
            setData={setStatus}
            option="single"
            name="Trạng thái"
          />
        </div>
        <DatePickerField
          name="picker"
          label="Ngày bắt đầu"
          value={filterObject.start_date || ''}
          onChange={(name, value) => {
            if (value) {
              setObj({
                ...obj,
                start_date: moment(value[0]).format('YYYY-MM-DD'),
              })
            }
          }}
          options={{
            dateFormat: 'd-m-Y',
          }}
        />
        <DatePickerField
          name="picker"
          label="Ngày kết thúc"
          value={filterObject.end_date || ''}
          onChange={(name, value) => {
            if (value) {
              setObj({
                ...obj,
                end_date: moment(value[0]).format('YYYY-MM-DD'),
              })
            }
          }}
          options={{
            dateFormat: 'd/m/Y',
            minDate: obj.start_date,
          }}
        />
        <DatePickerField
          name="picker"
          label="Ngày ngừng chiến dịch"
          value={filterObject.stop_date || ''}
          onChange={(name, value) => {
            if (value) {
              setObj({
                ...obj,
                stop_date: moment(value[0]).format('YYYY-MM-DD'),
              })
            }
          }}
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

export default FilterSalesCampaign
