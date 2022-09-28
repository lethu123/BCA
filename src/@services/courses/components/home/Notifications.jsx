import React from 'react'
import {Col, Row} from 'reactstrap'
import {NotificationItem} from '@services/courses'

const Notifications = () => {
  return (
    <Row>
      <Col lg="6">
        <NotificationItem />
      </Col>
      <Col lg="6">
        <NotificationItem />
      </Col>
      <Col lg="6">
        <NotificationItem />
      </Col>
    </Row>
  )
}

export default Notifications
