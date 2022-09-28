import React from 'react'
import {Edit2} from 'react-feather'
import {Input} from 'reactstrap'
import AddInfoWizard from './AddInfoWizard.component'
import fullColor from 'assets/images/ideationStartUpTool/fullcolor.svg'

const EditDetailCanvasWizard3 = () => {
  return (
    <div className="mx-2">
      <div className="d-flex justify-content-between">
        <h3>Value Proposition Canvas Description Name</h3>
        <Edit2 />
      </div>
      <Input
        type="textarea"
        rows={3}
        defaultValue="1914 translation by H. Rackham"
        className="mb-2"
        style={{borderRadius: '20px'}}
      />
      <div className="d-flex justify-content-between">
        <h3>Description</h3>
        <Edit2 />
      </div>
      <Input
        type="textarea"
        rows={3}
        defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        className="mb-2"
        style={{borderRadius: '20px'}}
      />
      <AddInfoWizard />
      <div className=" text-center mt-2">
        <img
          src={fullColor}
          alt="detailWizard1"
          className="img-fluid"
          style={{maxWidth: '40%'}}
        />
      </div>
      <h4 style={{fontWeight: 'bold', marginTop: '5px', textAlign: 'center'}}>
        Customer Profile
      </h4>
    </div>
  )
}

export default EditDetailCanvasWizard3
