import React from 'react'
import {Input} from 'reactstrap'

const PlanningTab1 = () => {
  return (
    <div>
      <h3 className="mt-1">Customer Profile Name</h3>
      <Input
        type="textarea"
        rows={3}
        placeholder="Type Customer Profile Description Name here..."
        className="mb-2"
        style={{borderRadius: '20px'}}
      />
      <h3 className="mt-1">Description</h3>
      <Input
        type="textarea"
        rows={3}
        placeholder="Type here to decript your Customer Profile..."
        className="mb-2"
        style={{borderRadius: '20px'}}
      />
    </div>
  )
}

export default PlanningTab1
