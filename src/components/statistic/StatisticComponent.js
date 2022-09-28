import React from 'react'
import {Col, Row} from 'reactstrap'

const StatisticComponent = ({statistic}) => {
  return (
    <div>
      <Row className="align-items-center px-2">
        {statistic.length > 0 &&
          statistic.map(ele => (
            <Col sm="6" md="3" xl="3" key={ele.id}>
              <div
                className="rounded"
                style={{
                  padding: '10px 0px',
                }}
              >
                <div className="ml-1">
                  <p className="mb-0 font-weight-bolder text-center">
                    {ele.label}
                  </p>
                  <p
                    className={`mb-0 pt-1 text-${ele.color} pb-1 text-center font-weight-bolder`}
                    style={{fontSize: 20}}
                  >
                    {ele.value}
                  </p>
                  <p className="mb-0">
                    {ele.sub ? ele.sub : ' '}{' '}
                    <span className="text-success font-weight-bolder">
                      {ele.per || ''}
                    </span>
                  </p>
                </div>
              </div>
            </Col>
          ))}
      </Row>
    </div>
  )
}

export default StatisticComponent
