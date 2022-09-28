import React from 'react'

import {Col, Row} from 'reactstrap'

// ** Component
import MyCourseItem from '../../course-item/CourseItem.component'

// ** Asset

const MyCourseSaveInterest = () => {
  return (
    <div>
      <hr />
      <Row>
        <Col lg="4">
          <MyCourseItem />
        </Col>
        <Col lg="4">
          <MyCourseItem />
        </Col>
        <Col lg="4">
          <MyCourseItem />
        </Col>
        <Col lg="4">
          <MyCourseItem />
        </Col>
      </Row>
    </div>
  )
}

export default MyCourseSaveInterest
