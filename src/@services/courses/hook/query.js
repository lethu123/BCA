import keys from './key'
import {useQuery} from 'react-query'
import CourseApi from '../course-api'

/**
 * https://course.hschool.hspace.biz/redoc/#operation/course_list-course-filter_read
 * Danh sách khóa học
 */
const useListCourse = (params = null) => {
  return useQuery(
    [keys.LIST_COURSE, params],
    () => CourseApi.get_list_course(params),
    {
      staleTime: 0,
    },
  )
}

/**
 * https://course.hschool.hspace.biz/redoc/#operation/course_get_course_id
 * Chi tiet khoa hoc
 */
const useInfoCourse = id => {
  return useQuery([keys.INFO_COURSE, id], () => CourseApi.get_info_course(id), {
    staleTime: 0,
    enabled: !!id,
  })
}

/**
 * https://course.hschool.hspace.biz/redoc/#operation/benefits_read
 * danh  sách benefit sau khóa học
 */
const useListBenefit = () => {
  return useQuery([keys.BENEFITS], () => CourseApi.get_list_benefit(), {
    staleTime: 0,
  })
}

/**
 * https://course.hschool.hspace.biz/redoc/#operation/course-for_read
 * danh  sách đối tượng áp dụng khóa học
 */
const useListCourseFor = () => {
  return useQuery([keys.COURSE_FOR], () => CourseApi.get_list_course_for(), {
    staleTime: 0,
  })
}

/**
 * https://course.hschool.hspace.biz/redoc/#operation/skills-accquired_read
 *
 */
const useListSkillAccquired = () => {
  return useQuery(
    [keys.SKILL_ACCQUIRED],
    () => CourseApi.get_list_skill_course(),
    {
      staleTime: 0,
    },
  )
}

/**
 * danh  sách  đầu ra
 */
const useListOutcome = () => {
  return useQuery([keys.OUTCOMES], () => CourseApi.get_list_outcome_course(), {
    staleTime: 0,
  })
}

// const useListInstructor = () => {
//   return useQuery(
//     [keys.INSTRUCTORS],
//     () => CourseApi.get_list_instructor_course(),
//     {
//       staleTime: 0,
//     },
//   )
// }

const CourseQuery = {
  useListBenefit,
  useListCourseFor,
  useListSkillAccquired,
  useListOutcome,
  // useListInstructor,
  useInfoCourse,
  useListCourse,
}

export default CourseQuery
