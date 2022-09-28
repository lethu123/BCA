import {useEffect, useState} from 'react'
// *** Components
import DatePickerField from 'components/form/DatePickerField'
// import FilterColumn from 'components/filter-column/FilterColumn'
import {Col, Row} from 'reactstrap'
import RadioField from 'components/form/RadioField'

// *** query
import {EventQuery} from '@services/event'

const initialValues = {
  date_from: null,
  date_to: null,
  formality_id: null,
  privacy_id: null,
}

const FilterManageEvent = ({setFilterObject}) => {
  const [obj, setObj] = useState(initialValues)

  const [selectOptions, setSelectOptions] = useState({
    formalites: [],
    privacies: [],
  })

  const {data: privaciesEvent} = EventQuery.useListPrivacyEvent({nolimit: true})
  const {data: formalitiesEvent} = EventQuery.useListFormalityEvent({
    nolimit: true,
  })

  useEffect(() => {
    if (formalitiesEvent) {
      setSelectOptions(state => ({
        ...state,
        formalites: formalitiesEvent.data.map(it => ({
          ...it,
          value: it.id,
          label: it.name,
        })),
      }))
    }
  }, [formalitiesEvent])

  useEffect(() => {
    if (privaciesEvent) {
      setSelectOptions(initValues => ({
        ...initValues,
        privacies: privaciesEvent.data.map(it => ({
          ...it,
          value: it.id,
          label: it.name,
        })),
      }))
    }
  }, [privaciesEvent])

  return (
    <div className="px-3 py-2">
      <div>
        <DatePickerField
          name="date_from"
          label="Ngày diễn ra"
          onChange={(name, value) =>
            setObj(state => ({...state, date_from: value[0]}))
          }
        />
        <DatePickerField
          name="date_to"
          label="Ngày kết thúc"
          onChange={(name, value) =>
            setObj(state => ({...state, date_to: value[0]}))
          }
        />

        <Row>
          <Col xl="12" sm="12">
            <RadioField
              name="privacy_id"
              label="Quyền riêng tư"
              inline
              options={selectOptions.privacies}
              onChange={(name, value) => {
                setObj(state => ({...state, privacy_id: value}))
              }}
            />
          </Col>
          <Col xl="6" sm="12">
            <RadioField
              name="formality_id"
              label="Hình thức sự kiện"
              inline
              options={selectOptions.formalites}
              onChange={(name, value) => {
                setObj(state => ({...state, formality_id: value}))
              }}
            />
          </Col>
        </Row>

        {/* <div>
          <FilterColumn
            dataFilter={dataFilter}
            setDataFilter={setDataFilter}
            name="Loại sự kiện"
          />
        </div> */}
      </div>
      {/*begin::Actions*/}
      <div className="d-flex justify-content-end">
        <button
          type="reset"
          className="btn btn-white btn-active-light-primary me-2"
          onClick={() => {
            setObj(initialValues)
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

export default FilterManageEvent
