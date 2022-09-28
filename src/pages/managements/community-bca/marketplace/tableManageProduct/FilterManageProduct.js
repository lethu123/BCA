import {useState} from 'react'
// *** Components
import DatePickerField from 'components/form/DatePickerField'
import RadioField from 'components/form/RadioField'

const FilterTableManageProduct = ({
  setFilterObject,
  filterObject,
  setModalFilter,
}) => {
  const [obj, setObj] = useState({
    status: null,
    start_date: null,
    end_date: null,
  })

  return (
    <div className="px-3 py-5">
      <div>
        <DatePickerField
          name="picker"
          label="Ngày đăng"
          onChange={(name, value) => console.log(value)}
        />
        <div className="mt-3">
          <RadioField
            name="radio"
            label="Tình trạng"
            // color="warning"
            // outline
            // accent
            inline
            options={[
              {
                value: 'còn hàng',
                label: 'Còn hàng',
                checked: true,
              },
              {
                value: 'hết hàng',
                label: 'Hết hàng',
              },
            ]}
            onChange={(name, value) => console.log(value)}
          />
        </div>
        <div className="mt-3">
          <RadioField
            name="radio"
            label="Trạng thái"
            // color="warning"
            // outline
            // accent
            inline
            options={[
              {
                value: 'Duyệt',
                label: 'Duyệt',
                checked: true,
              },
              {
                value: 'Từ chối',
                label: 'Từ chối',
              },
              {
                value: 'Hủy',
                label: 'Hủy',
              },
            ]}
            onChange={(name, value) => console.log(value)}
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
            setModalFilter(false)
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

export default FilterTableManageProduct
