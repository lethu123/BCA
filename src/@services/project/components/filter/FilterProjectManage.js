import FilterColumn from 'components/filter-column/FilterColumn'
import DatePickerField from 'components/form/DatePickerField'
import {useState} from 'react'

const FilterProjectManage = ({
  setFilterObject,
  filterObject,
  setModalFilter,
}) => {
  const [obj, setObj] = useState({
    start_date: null,
    category: null,
    status: null,
    type_project: null,
  })
  const [dataCategory, setDataCategory] = useState([
    {id: 1, value: 'Dự án đối tác', color: 'success', check: false},
    {id: 2, value: 'Dự án thành viên', color: 'success', check: false},
    {id: 3, value: 'Dự án inHouse', color: 'success', check: false},
  ])

  const [dataStatus, setDataStatus] = useState([
    {id: 1, value: 'Đã duyệt', color: 'warning', check: false},
    {id: 2, value: 'Chờ duyệt', color: 'warning', check: false},
  ])

  const [dataTypeProject, setDataTypeProject] = useState([
    {id: 1, value: 'Khách hàng tiềm năng', color: 'danger', check: false},
    {id: 2, value: 'Ứng viên tiềm năng', color: 'danger', check: false},
  ])

  return (
    <div className="px-7 py-5">
      {/*begin::Input group*/}
      <div className="mb-10">
        <DatePickerField
          name="start_date"
          label="Ngày tạo dự án"
          options={{mode: 'range'}}
          onChange={(name, value) => console.log(name, value)}
        />

        <FilterColumn
          dataFilter={dataCategory}
          setDataFilter={setDataCategory}
          name="Danh mục"
        />

        <FilterColumn
          dataFilter={dataStatus}
          setDataFilter={setDataStatus}
          name="Trạng thái"
        />
        <FilterColumn
          dataFilter={dataTypeProject}
          setDataFilter={setDataTypeProject}
          name="Kiểu dự án"
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

export default FilterProjectManage
