import {useState} from 'react'

const FilterFanpage = ({setFilterObject, filterObject, setModalFilter}) => {
  const [obj, setObj] = useState({
    start_date: null,
    end_date: null,
    status: null,
  })

  return (
    <div className="px-3 py-5">
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

export default FilterFanpage
