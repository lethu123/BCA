import React from 'react'
import LessonCourse from '../lesson-course/LessonCourse'
import InformationCourseContent from './InformationCourseContent'
import PlayVideo from './play-video/PlayVideo'

const CourseInfoIndex = () => {
  return (
    <div>
      {/* play video */}
      <PlayVideo />
      <div className="d-xxl-none">
        <LessonCourse />
        <hr />
      </div>
      {/* information course content */}
      <InformationCourseContent />
    </div>
  )
}

export default CourseInfoIndex
