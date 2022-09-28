import FilterColumn from 'components/filter-column/FilterColumn'
import DatePickerField from 'components/form/DatePickerField'
import SelectField from 'components/form/SelectField'
import {useState} from 'react'

const FilterGroup = ({setFilterObject, filterObject, setModalFilter}) => {
  const [obj, setObj] = useState({
    joined: null,
    action: null,
    type_action: null,
    type_group: null,
    start_date: null,
    end_date: null,
  })
  const [dataJoined, setDataJoined] = useState([
    {id: 1, value: 'Tham gia', color: 'primary', check: false},
    {id: 2, value: 'Chưa', color: 'primary', check: false},
    {id: 3, value: 'Chờ', color: 'primary', check: false},
  ])

  const [dataAction, setDataAction] = useState([
    {id: 1, value: 'Yêu cầu tham gia', color: 'warning', check: false},
    {id: 2, value: 'Bình luận', color: 'warning', check: false},
    {id: 3, value: 'Like', color: 'warning', check: false},
  ])

  const [dataTypeAction, setDataTypeAction] = useState([
    {id: 1, value: 'New', color: 'success', check: false},
    {id: 2, value: 'Redo', color: 'success', check: false},
  ])

  return (
    <div className="px-3 py-5">
      {/*begin::Input group*/}
      <div className="mb-10">
        <DatePickerField
          name="start_date"
          label="Ngày lấy dữ liệu"
          options={{mode: 'range'}}
          onChange={(name, value) => console.log(name, value)}
        />
        <DatePickerField
          name="end_date"
          label="Ngày thực hiện"
          options={{mode: 'range'}}
          onChange={(name, value) => console.log(name, value)}
        />

        <SelectField
          name="type_group"
          label="Loại group"
          isMulti
          options={[
            {
              label: 'Đối thủ',
              value: 'Đối thủ',
            },
            {
              label: 'Tương tác',
              value: 'Tương tác',
            },
          ]}
          onChange={(name, value) => console.log(name, value)}
        />

        <FilterColumn
          dataFilter={dataJoined}
          setDataFilter={setDataJoined}
          name="Đã tham gia group"
        />
        <FilterColumn
          dataFilter={dataAction}
          setDataFilter={setDataAction}
          name="Hành động"
        />
        <FilterColumn
          dataFilter={dataTypeAction}
          setDataFilter={setDataTypeAction}
          name="Loại hành động"
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

export default FilterGroup
