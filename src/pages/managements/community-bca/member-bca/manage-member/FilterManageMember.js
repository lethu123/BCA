import DatePickerField from 'components/form/DatePickerField'
import {useState} from 'react'
import FilterColumn from 'components/filter-column/FilterColumn'
import SelectField from 'components/form/SelectField'
import Badge from 'reactstrap/lib/Badge'

const FilterManageMember = ({
  setFilterObject,
  filterObject,
  setModalFilter,
}) => {
  const [dataStatus, setDataStatus] = useState([
    {id: 1, value: 'Hoạt động', color: 'success', check: false},
    {id: 2, value: 'Ngừng hoạt động', color: 'success', check: false},
  ])

  const [dataLevelSales, setDataLevelSales] = useState([
    {id: 1, value: 'Cấp FA', color: 'warning', check: false},
    {id: 2, value: 'Cấp BM', color: 'warning', check: false},
    {id: 3, value: 'Cấp UM', color: 'warning', check: false},
    {id: 4, value: 'Cấp PUM', color: 'warning', check: false},
  ])

  const [dataCommunityLevel, setDataCommunityLevel] = useState([
    {id: 1, value: 'Đại lý', color: 'danger', check: false},
    {id: 2, value: 'UVTN', color: 'danger', check: false},
    {id: 3, value: 'KHTN', color: 'danger', check: false},
  ])
  const [obj, setObj] = useState({
    start_date: null,
    level_sale: null,
    community_level: null,
    activity_level: null,
    status: null,
  })

  return (
    <div className="px-3 py-5">
      {/*begin::Input group*/}
      <div className="mb-10">
        <DatePickerField
          name="start_date"
          label="Ngày tạo"
          options={{mode: 'range'}}
          onChange={(name, value) => console.log(name, value)}
        />
        <FilterColumn
          dataFilter={dataLevelSales}
          setDataFilter={setDataLevelSales}
          name="Cấp ĐLBH"
        />

        <FilterColumn
          dataFilter={dataCommunityLevel}
          setDataFilter={setDataCommunityLevel}
          name="Cấp cộng đồng"
        />

        <SelectField
          name="activity_level"
          label="Cấp hoạt động"
          isMulti
          options={[
            {
              label: <Badge color="secondary">Lười biếng</Badge>,
              value: 'Lười biếng',
            },
            {
              label: (
                <Badge color="warning" className="text-white">
                  Thành viên mới
                </Badge>
              ),
              value: 'Thành viên mới',
            },
            {
              label: <Badge color="danger">Tàu ngầm</Badge>,
              value: 'Tàu ngầm',
            },
            {
              label: <Badge color="success">Năng nổ</Badge>,
              value: 'Năng nổ',
            },
            {
              label: <Badge color="primary">Sáng tạo</Badge>,
              value: 'Sáng tạo',
            },
            {
              label: <Badge color="info">Ảnh hưởng</Badge>,
              value: 'Ảnh hưởng',
            },
          ]}
          onChange={(name, value) => console.log(name, value)}
        />

        <FilterColumn
          dataFilter={dataStatus}
          setDataFilter={setDataStatus}
          name="Trạng thái"
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

export default FilterManageMember
