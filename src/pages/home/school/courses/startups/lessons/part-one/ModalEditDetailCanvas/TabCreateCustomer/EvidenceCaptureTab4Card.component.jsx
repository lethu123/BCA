import React from 'react'
import {Card, CardBody, CardHeader, Progress} from 'reactstrap'
import logoTab2 from 'assets/images/ideationStartUpTool/logoTab2.svg'
import '../EditDetalCanvas.style.scss'

const EvidenceCaptureTab4Card = ({item}) => {
  return (
    <div className="progressCus">
      <Card style={{cursor: 'pointer'}}>
        <CardHeader className="justify-content-between">
          <p style={{color: 'gray', fontSize: 12, margin: 0}}>{item.time}</p>
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
              OPPORTUNITY
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
          <div className="mt-1">
            <Progress
              value={item.progress * 10 * 2}
              color={
                item.progress < 2
                  ? 'danger'
                  : item.progress >= 2 && item.progress < 4
                  ? 'warning'
                  : 'success'
              }
            >
              {item.progress}
            </Progress>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default EvidenceCaptureTab4Card
