import React from 'react'
import {Badge, Card, CardBody, CardFooter, CardHeader, Row} from 'reactstrap'
import person1 from 'assets/images/portrait/small/avatar-s-1.jpg'
import person2 from 'assets/images/portrait/small/avatar-s-2.jpg'

const EvidenceCapturedTab3Card = ({item}) => {
  return (
    <Card>
      <CardHeader className="justify-content-start">
        <p className="mr-1" style={{color: 'gray', fontSize: 12, margin: 0}}>
          {item.timeStart}
        </p>
        <p style={{color: 'gray', fontSize: 12, margin: 0}}>{item.timeEnd}</p>
      </CardHeader>
      <CardBody
        className="pb-0 mt-1"
        style={{paddingTop: '10px', minHeight: '130px'}}
      >
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
      <CardFooter
        style={{
          borderTop: 'none',
          backgroundColor: 'white',
          paddingTop: '5px',
        }}
      >
        <Row
          style={{
            justifyContent: 'space-between',
            padding: '0px 13px',
          }}
        >
          <div style={{marginTop: '10px'}}>
            <Badge className="badge-glow  badge-primary mr-2" color="#ff6700">
              #hastag1
            </Badge>
            <Badge className="badge-glow  badge-primary" color="#ff6700">
              #hastag2
            </Badge>
          </div>
          <div className="ml-2 avatarHypotheses">
            <ul className="list-unstyled users-list m-0 d-flex">
              <li
                className="avatar pull-up m-0"
                style={{background: 'transparent'}}
              >
                <img src={person1} alt="avatar" height="30" width="30" />
              </li>
              <li
                className="avatar pull-up m-0"
                style={{background: 'transparent'}}
              >
                <img src={person2} alt="avatar" height="30" width="30" />
              </li>
            </ul>
          </div>
        </Row>
      </CardFooter>
    </Card>
  )
}

export default EvidenceCapturedTab3Card
