import DatePickerField from 'components/form/DatePickerField'
import SelectField from 'components/form/SelectField'
import {useEffect, useState} from 'react'
import moment from 'moment'

// ** query
import {BizxuQuery} from '@services/bizxu'

const FilterHistoryBizxu = ({setFilterObject}) => {
  const {data: categories} = BizxuQuery.useCategoryTransaction()
  const {data: transactionTypes} = BizxuQuery.useTransactionType()
  const {data: transactionStatus} = BizxuQuery.useTransactionStatus()

  const [obj, setObj] = useState({
    created_at_from: null,
    created_at_to: null,
    category: null,
    transaction_type: null,
    transaction_status_type: null,
  })

  return (
    <div className="px-3 py-2">
      <div className="mb-10">
        <DatePickerField
          name="start_date"
          label="Ngày thực hiện giao dịch"
          options={{mode: 'range'}}
          onChange={(name, value) => {
            setObj(state => ({
              ...state,
              created_at_from: moment(value[0]).format('YYYY-MM-DD'),
              created_at_to: moment(value[1]).format('YYYY-MM-DD'),
            }))
          }}
        />
        <SelectField
          name="category"
          label="Danh mục"
          isClearable
          options={categories?.data.map(it => ({
            ...it,
            value: it.id,
            label: it.name,
          }))}
          onChange={(name, option) =>
            setObj(state => ({
              ...state,
              category: option ? option.value : null,
            }))
          }
        />
        <SelectField
          isClearable
          name="transaction_type"
          label="Loại giao dịch"
          options={transactionTypes?.data.map(it => ({
            ...it,
            value: it.id,
            label: it.name,
          }))}
          onChange={(name, option) =>
            setObj(state => ({
              ...state,
              transaction_type: option ? option.value : null,
            }))
          }
        />

        <SelectField
          isClearable
          name="transaction_status_type"
          label="Trạng thái giao dịch"
          options={transactionStatus?.data.map(it => ({
            ...it,
            value: it.id,
            label: it.name,
          }))}
          onChange={(name, option) =>
            setObj(state => ({
              ...state,
              transaction_status_type: option ? option.value : null,
            }))
          }
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

export default FilterHistoryBizxu
