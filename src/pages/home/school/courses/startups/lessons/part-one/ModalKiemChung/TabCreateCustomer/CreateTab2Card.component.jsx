import React from 'react'
import {Card, CardBody, CardHeader, UncontrolledTooltip} from 'reactstrap'
import logoTab2 from 'assets/images/ideationStartUpTool/logoTab2.svg'

const CreateTab2Card = ({item}) => {
  return (
    <div>
      <Card>
        <CardHeader className="justify-content-between">
          <p style={{color: 'gray', fontSize: 12, margin: 0}}>{item.time}</p>

          <p
            id={`Tab2${item.id}`}
            style={{
              backgroundColor:
                item.active === 'testing'
                  ? '#ff6700'
                  : item.active === 'validated'
                  ? '#6eb144'
                  : '#626262',
              width: '20px',
              height: '20px',
              margin: 0,
              borderRadius: '50%',
              // border: '5px solid #FFEFE5',
            }}
          ></p>
          <UncontrolledTooltip
            placement="bottom"
            target={`Tab2${item.id}`}
            autohide={false}
            hideArrow={true}
            style={{
              background: 'none',
              color:
                item.active === 'testing'
                  ? '#ff6700'
                  : item.active === 'validated'
                  ? '#6eb144'
                  : '#626262',
              fontWeight: 'normal',
              cursor: 'context-menu',
            }}
          >
            {item.active}
          </UncontrolledTooltip>
        </CardHeader>
        <CardBody
          className="pb-0"
          style={{paddingTop: '10px', minHeight: '130px'}}
        >
          <div className="pb-1 d-flex align-items-center">
            <img
              src={logoTab2}
              alt="logoTab2"
              className="mr-1 img-fluid"
              style={{width: '25px'}}
            />
            <p
              className=" mb-0"
              style={{
                fontWeight: 'bold',
                textTransform: 'uppercase',
                fontSize: '12px',
              }}
            >
              {item.topic}
            </p>
          </div>

          <div>
            <p style={{fontSize: 16, fontWeight: 'bold', marginBottom: 0}}>
              {item.type} :{' '}
              <span
                style={{
                  fontSize: 16,
                  marginBottom: 0,
                  fontWeight: 'normal',
                }}
              >
                {item.name}
              </span>
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default CreateTab2Card
