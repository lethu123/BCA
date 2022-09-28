import React from 'react'
import {Search} from 'react-feather'
import {CustomInput, Input} from 'reactstrap'

const ReviewInstructorHeader = props => {
  return (
    <div className="d-flex flex-wrap justify-content-between align-items-center w-100">
      <div>
        <CustomInput
          type="switch"
          id="exampleCustomSwitch"
          name="customSwitch"
          inline
        >
          <span className="switch-label">My reviews</span>
        </CustomInput>
      </div>
      <div className="position-relative has-icon-left mb-1">
        <Input value={props.value} onChange={e => props.handleFilter(e)} />
        <div className="form-control-position">
          <Search size="15" />
        </div>
      </div>
    </div>
  )
}

export default ReviewInstructorHeader
