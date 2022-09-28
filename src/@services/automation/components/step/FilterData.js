import {FilterCustomerLead} from '@services/customer-leads'

import {Button} from 'reactstrap'
import {ArrowLeft, ArrowRight} from 'react-feather'
import {useState} from 'react'

import './AccountFB.style.scss'

const FilterData = ({stepper, filterQuery, setFilterQuery}) => {
  const [filter, setFilter] = useState(filterQuery || {})

  return (
    <div>
      <FilterCustomerLead
        filter={filter}
        setFilter={setFilter}
        setFilterQuery={setFilterQuery}
        openFilter={true}
      />

      <div className="border-top pt-5 d-flex justify-content-between">
        <Button.Ripple
          color="secondary"
          className="btn-prev"
          type="button"
          onClick={() => stepper.previous()}
        >
          <ArrowLeft size={14} className="align-middle mr-2"></ArrowLeft>
          <span className="align-middle d-sm-inline-block d-none">
            Quay lại
          </span>
        </Button.Ripple>
        <Button.Ripple
          color="primary"
          className="btn-next"
          onClick={() => {
            setFilterQuery(filter)
            stepper.next()
          }}
        >
          <ArrowRight size={14} className="align-middle mr-2" />
          <span className="align-middle d-sm-inline-block d-none">
            Tiếp tục
          </span>
        </Button.Ripple>
      </div>
    </div>
  )
}

export default FilterData
