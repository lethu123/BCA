import React from 'react'
import {Search} from 'react-feather'
import {Input} from 'reactstrap'

const FQAHeader = props => {
  return (
    <div className="d-flex flex-wrap justify-content-between align-items-center">
      <div className="position-relative has-icon-left mb-1">
        <Input value={props.value} onChange={e => props.handleFilter(e)} />
        <div className="form-control-position">
          <Search size="15" />
        </div>
      </div>
    </div>
  )
}

export default FQAHeader
