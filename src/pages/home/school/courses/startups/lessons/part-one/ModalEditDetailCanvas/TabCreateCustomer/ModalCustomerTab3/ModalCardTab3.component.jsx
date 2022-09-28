import React from 'react'
import {CardBody, CardHeader, CustomInput} from 'reactstrap'
import valueInactive from 'assets/images/ideationStartUpTool/value-inactive.svg'
// import Checkbox from 'theme/components/@vuexy/checkbox/CheckboxesVuexy'
// import {Check} from 'react-feather'

const ModalCardTab3 = ({item}) => {
  return (
    <div>
      <CardHeader className="justify-content-between">
        <p className="mr-1" style={{color: 'gray', fontSize: 12, margin: 0}}>
          {item.timeStart}
        </p>
        <CustomInput
          id={item.id}
          type="checkbox"
          // label="Mobiles"
          defaultChecked={item.check}
          color="success"
        />
        {/* <Checkbox
          color="success"
          icon={<Check className="vx-icon" size={16} />}
          defaultChecked={item.check}
        /> */}
      </CardHeader>
      <CardBody
        className="pb-0 "
        style={{paddingTop: '10px', minHeight: '130px'}}
      >
        <div className="pb-1 d-flex align-items-center">
          <img
            src={valueInactive}
            alt="ideaIcon"
            className="mr-1 img-fluid"
            style={{width: '25px'}}
          />
          <p
            className=" mb-0"
            style={{fontWeight: 'bold', textTransform: 'uppercase'}}
          >
            {item.topic}
          </p>
        </div>
        <div>
          <p
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 0,
              color: '#ff6700',
            }}
          >
            {item.type} :{' '}
            <span
              style={{
                fontSize: 20,
                marginBottom: 0,
                fontWeight: 'normal',
                color: '#626262',
              }}
            >
              {item.name}
            </span>
          </p>
        </div>
        <p style={{fontSize: '18px'}} className="mt-1">
          {item.detail}
        </p>
      </CardBody>
    </div>
  )
}

export default ModalCardTab3
