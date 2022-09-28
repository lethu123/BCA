import FilterColumn from 'components/filter-column/FilterColumn'
import DatePickerField from 'components/form/DatePickerField'
import SelectField from 'components/form/SelectField'
import {useState} from 'react'

const FilterFacebookOfUser = ({
  setFilterObject,
  filterObject,
  setModalFilter,
}) => {
  const [obj, setObj] = useState({
    friend: null,
    action: null,
    type_action: null,
    source: null,
    leads: null,
    type_group: null,
    start_date: null,
    end_date: null,
  })
  const [dataFriend, setDataFriend] = useState([
    {id: 1, value: 'Có', color: 'danger', check: false},
    {id: 2, value: 'Không', color: 'danger', check: false},
    {id: 3, value: 'Chờ', color: 'danger', check: false},
  ])

  const [dataAction, setDataAction] = useState([
    {id: 1, value: 'Yêu cầu kết bạn', color: 'warning', check: false},
    {id: 2, value: 'Bình luận', color: 'warning', check: false},
    {id: 3, value: 'Like', color: 'warning', check: false},
  ])

  const [dataTypeAction, setDataTypeAction] = useState([
    {id: 1, value: 'New', color: 'success', check: false},
    {id: 2, value: 'Redo', color: 'success', check: false},
  ])

  const [dataSource, setDataSource] = useState([
    {id: 1, value: 'Post', color: 'primary', check: false},
    {id: 2, value: 'Group', color: 'primary', check: false},
    {id: 3, value: 'Fanpage', color: 'primary', check: false},
  ])

  const [dataLeads, setDataLeads] = useState([
    {id: 1, value: 'Quan tâm', color: 'info', check: false},
    {id: 2, value: 'Yêu thích', color: 'info', check: false},
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

        <FilterColumn
          dataFilter={dataFriend}
          setDataFilter={setDataFriend}
          name="Bạn bè"
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
          dataFilter={dataSource}
          setDataFilter={setDataSource}
          name="Nguồn dữ liệu"
        />
        <FilterColumn
          dataFilter={dataLeads}
          setDataFilter={setDataLeads}
          name="Khách hàng tiềm năng"
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

export default FilterFacebookOfUser
