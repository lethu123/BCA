import React from 'react'
import {Search} from 'react-feather'
import {Input, InputGroupText, InputGroupAddon, InputGroup} from 'reactstrap'

const ReviewInstructorHeader = props => {
  return (
    <div className="d-flex flex-wrap justify-content-between align-items-center">
      <div className="position-relative has-icon-left mb-1">
        <InputGroup className="input-group-merge">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <Search size={14} />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="search..."
            value={props.value}
            onChange={e => props.handleFilter(e)}
          />
        </InputGroup>
      </div>
    </div>
  )
}

export default ReviewInstructorHeader
