import React from 'react'
import {Col, Row} from 'reactstrap'

const StatisticEvent = ({statistic}) => {
  return (
    <div>
      <Row className="align-items-center px-2">
        <Col sm="6" md="4" xl="4">
          <div
            className="rounded"
            style={{
              padding: '10px 0px',
            }}
          >
            <div className="ml-1">
              <p className="mb-0 font-weight-bolder">Tổng số sự kiện</p>
              <p
                className={`mb-0 pt-1 text-primary pb-1 font-weight-bolder`}
                style={{fontSize: 20}}
              >
                {statistic.event_count}
              </p>
            </div>
          </div>
        </Col>
        <Col sm="6" md="4" xl="4">
          <div
            className="rounded"
            style={{
              padding: '10px 0px',
            }}
          >
            <div className="ml-1">
              <p className="mb-0 font-weight-bolder">Số sự kiện đã qua</p>
              <p
                className={`mb-0 pt-1 text-danger pb-1 font-weight-bolder`}
                style={{fontSize: 20}}
              >
                {statistic.event_passed_count}
              </p>
            </div>
          </div>
        </Col>
        <Col sm="6" md="4" xl="4">
          <div
            className="rounded"
            style={{
              padding: '10px 0px',
            }}
          >
            <div className="ml-1">
              <p className="mb-0 font-weight-bolder">Số người tham gia</p>
              <p
                className={`mb-0 pt-1 text-danger pb-1 font-weight-bolder`}
                style={{fontSize: 20}}
              >
                {statistic.event_member_count}
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default StatisticEvent
