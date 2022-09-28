import {FilterCustomerLead} from '@services/customer-leads'
import {Button} from 'reactstrap'
import {ArrowLeft, ArrowRight} from 'react-feather'
import {useState, useEffect} from 'react'

const FilterStep2 = ({stepper, setDataSubmit, dataSubmit, isEdit}) => {
  //*** state
  const [filters, setFilters] = useState(dataSubmit.filter || {})

  //*** effect
  useEffect(() => {
    setFilters(dataSubmit.filter)
  }, [dataSubmit.filter])

  useEffect(() => {
    setDataSubmit(dataSubmit => ({...dataSubmit, filter: filters}))
  }, [filters])

  return (
    <div>
      <FilterCustomerLead
        filter={filters}
        setFilter={setFilters}
        openFilter={true}
        isEdit={isEdit}
      />
      <div className="d-flex justify-content-end">
        <div>
          <Button.Ripple
            color="secondary"
            className="btn-prev mr-3"
            size="sm"
            type="button"
            outline
            onClick={() => stepper.previous()}
          >
            <ArrowLeft
              size={14}
              className="align-middle mr-sm-2 mr-0"
            ></ArrowLeft>
            <span className="align-middle d-sm-inline-block d-none">
              Quay lại
            </span>
          </Button.Ripple>
        </div>
        <div>
          <Button.Ripple
            size="sm"
            type="button"
            color="primary"
            className="btn-next"
            onClick={() => stepper.next()}
          >
            <span className="align-middle d-inline-block">Tiếp theo</span>
            <ArrowRight
              size={14}
              className="align-middle ml-sm-2 ml-0"
            ></ArrowRight>
          </Button.Ripple>
        </div>
      </div>
    </div>
  )
}
export default FilterStep2
