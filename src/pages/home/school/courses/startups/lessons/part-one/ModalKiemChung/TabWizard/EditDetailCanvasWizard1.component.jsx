import React from 'react'
import fullColor from 'assets/images/ideationStartUpTool/fullcolor.svg'
import AddInfoWizard from './AddInfoWizard.component'
const EditDetailCanvasWizard1 = () => {
  return (
    <div>
      <AddInfoWizard />

      <div className="text-center mt-1" style={{position: 'relative'}}>
        <img
          src={fullColor}
          alt="detailWizard1"
          className="img-fluid"
          style={{maxWidth: '40%'}}
        />
        <div
          style={{
            position: 'absolute',
            top: '0%',
            left: '0%',
            background: '#fff',
            opacity: '0.5',
            width: '100%',
            height: '100%',
          }}
        ></div>
        <p
          style={{
            marginBottom: '0px',
            fontSize: '17px',
            fontWeight: 'bold',
            color: '#fff',
            position: 'absolute',
            top: '26%',
            left: '42%',
            cursor: 'pointer',
          }}
        >
          Gains(0)
        </p>
        <p
          style={{
            marginBottom: '0px',
            fontSize: '17px',
            fontWeight: 'bold',
            color: '#fff',
            position: 'absolute',
            top: '76%',
            left: '42%',
            cursor: 'pointer',
          }}
        >
          Pains(0)
        </p>
        <p
          style={{
            marginBottom: '0px',
            fontSize: '17px',
            fontWeight: 'bold',
            color: '#fff',
            position: 'absolute',
            top: '52%',
            left: '56%',
            cursor: 'pointer',
          }}
        >
          Customer <br />
          Job(s)(0)
        </p>
      </div>
      <h4 className="w-100 text-center mt-1" style={{fontWeight: 'bold'}}>
        Customer Profile
      </h4>
    </div>
  )
}

export default EditDetailCanvasWizard1
