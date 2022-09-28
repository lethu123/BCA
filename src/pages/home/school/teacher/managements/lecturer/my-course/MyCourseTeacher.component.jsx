import React from 'react'

import {Col, Row} from 'reactstrap'

// ** Component
import MyCourseItem from '../../course-item/CourseItemTeacher.component'

// ** Asset

const MyCourseTeacher = () => {
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
      </Row>
    </div>
  )
}

export default MyCourseTeacher
