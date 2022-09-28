import FilterColumn from 'components/filter-column/FilterColumn'
import DatePickerField from 'components/form/DatePickerField'
import SelectField from 'components/form/SelectField'
import {useState} from 'react'

const FilterManagerData = ({setFilterObject, filterObject, setModalFilter}) => {
  const [obj, setObj] = useState({
    start_date: null,
    end_date: null,
    customer_potential: null,
    status: null,
    source_data: [],
  })
  const [dataFilter, setDataFilter] = useState([
    {id: 1, value: 'Quan tâm', color: 'danger', check: false},
    {id: 2, value: 'Tiếp cận', color: 'danger', check: false},
    {id: 3, value: 'Yêu thích', color: 'danger', check: false},
  ])

  const [dataStatus, setDataStatus] = useState([
    {id: 1, value: 'Chưa bán', color: 'warning', check: false},
    {id: 2, value: 'Đã bán', color: 'warning', check: false},
    {id: 3, value: 'Trùng', color: 'warning', check: false},
  ])

  const [dataLabelData, setDataLabelData] = useState([
    {id: 1, value: 'KHTN', color: 'success', check: false},
    {id: 2, value: 'UVTN', color: 'success', check: false},
  ])

  return (
    <div className="px-3 py-5">
      {/*begin::Input group*/}
      <div className="mb-10">
        <DatePickerField
          name="start_date"
          label="Ngày tương tác gần nhất"
          options={{mode: 'range'}}
          onChange={(name, value) => console.log(name, value)}
        />
        <DatePickerField
          name="end_date"
          label="Ngày đăng kí"
          options={{mode: 'range'}}
          onChange={(name, value) => console.log(name, value)}
        />
        <SelectField
          name="source_data"
          label="Nguồn dữ liệu"
          isMulti
          options={[
            {
              label: 'BCA post',
              value: 'BCA post',
            },
            {
              label: 'Thành viên post',
              value: 'Thành viên post',
            },
            {
              label: 'Landingpage',
              value: 'Landingpage',
            },
            {
              label: 'FacebookGroup',
              value: 'FacebookGroup',
            },
          ]}
          onChange={(name, value) => console.log(name, value)}
        />

        <FilterColumn
          dataFilter={dataFilter}
          setDataFilter={setDataFilter}
          name="Khách hàng tiềm năng"
        />
        <FilterColumn
          dataFilter={dataStatus}
          setDataFilter={setDataStatus}
          name="Trạng thái"
        />
        <FilterColumn
          dataFilter={dataLabelData}
          setDataFilter={setDataLabelData}
          name="Nhãn Data"
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

export default FilterManagerData
