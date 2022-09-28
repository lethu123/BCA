import React, {useReducer} from 'react'
import {useParams} from 'react-router'

import {Card, CardBody, Col, Row} from 'reactstrap'
import BreadScrumbCourse from './BreadScrumbCourse'
// import PerfectScrollbar from 'react-perfect-scrollbar'

// component
import LessonCourse from './lesson-course/LessonCourse'
import CourseInfoIndex from './infor-course'

// *** style
import './StartCourse.style.scss'
// useContext
export const CourseContext = React.createContext({})
// useReducer
export const courseReducer = (state, action) => {
  const {type, payload} = action
  switch (type) {
    case 'CURRENT_LESSON': {
      return {
        ...state,
        currentLesson: payload,
      }
    }
    default:
      return state
  }
}

const StartCourseIndex = () => {
  const {slug} = useParams()

  const initialValues = {
    currentLesson: null,
  }

  const [state, dispatch] = useReducer(courseReducer, initialValues)

  return (
    <CourseContext.Provider
      value={{slug, currentLesson: state.currentLesson, dispatch}}
    >
      <Card>
        <CardBody>
          {console.log('test', state.currentLesson)}
          {/* breakscrumb */}
          <BreadScrumbCourse />
          <Row className="mt-5">
            {/* information course */}
            <Col xl="12" className="col-xxl-8 ">
              <CourseInfoIndex />
            </Col>
            {/* all lesson */}
            <Col xl="12" className="col-xxl-4 d-none d-xxl-block ">
              {/* <div className="position-sticky ">
                <PerfectScrollbar> */}
              <LessonCourse />
              {/* </PerfectScrollbar>
              </div> */}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </CourseContext.Provider>
  )
}

export default StartCourseIndex
