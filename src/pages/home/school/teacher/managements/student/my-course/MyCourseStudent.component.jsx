import React from 'react'

import {Col, Row} from 'reactstrap'

// ** Component
import CourseItemStudent from '../../course-item/CourseItemStudent.component'

// ** Asset

const CourseStudent = () => {
  return (
    <div>
      <hr />
      <Row>
        <Col lg="4">
          <CourseItemStudent />
        </Col>
        <Col lg="4">
          <CourseItemStudent />
        </Col>
        <Col lg="4">
          <CourseItemStudent />
        </Col>
      </Row>
    </div>
  )
}

export default CourseStudent
