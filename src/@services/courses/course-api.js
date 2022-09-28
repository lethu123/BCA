import {handleAxios} from '../ultils'

const PROXY = 'https://course.hschool.hspace.biz'

// const secret_key = localStorage.getItem('refreshToken')

// const setupHeader = (url, params = {}) =>
//   handleAxios(url, 'get', null, {'s-key': secret_key}, params)

const CourseApi = {
  // benefit
  get_list_benefit: () => handleAxios(PROXY + '/benefits/', 'get'),

  // course for
  get_list_course_for: () => handleAxios(PROXY + '/course-for/', 'get'),

  // skill
  get_list_skill_course: () => handleAxios(PROXY + '/skills-accquired/', 'get'),
  create_skill_course: data =>
    handleAxios(PROXY + '/skills-accquired/', 'post', data),
  update_skill_course: data =>
    handleAxios(PROXY + '/skills-accquired/', 'patch', data),
  delete_skill_course: id =>
    handleAxios(PROXY + '/skills-accquired/', 'delete', null, {}, {id}),

  // benefit
  get_list_benefit_course: () => handleAxios(PROXY + '/benefits/', 'get'),
  create_benefit_course: data =>
    handleAxios(PROXY + '/benefits/', 'post', data),
  update_benefit_course: data =>
    handleAxios(PROXY + '/benefits/', 'patch', data),
  delete_benefit_course: id =>
    handleAxios(PROXY + '/benefits/', 'delete', null, {}, {id}),
  // outcome
  get_list_outcome_course: () => handleAxios(PROXY + '/course-outcome/', 'get'),
  create_outcome_course: data =>
    handleAxios(PROXY + '/course-outcome/', 'post', data),
  update_outcome_course: data =>
    handleAxios(PROXY + '/course-outcome/', 'patch', data),
  delete_outcome_course: id =>
    handleAxios(PROXY + '/course-outcome/', 'delete', null, {}, {id}),
  // course
  create_course: data =>
    handleAxios(PROXY + '/course/create-course/', 'post', data),
  update_course: data =>
    handleAxios(PROXY + '/course/update-course/', 'patch', data),
  get_info_course: course_id =>
    handleAxios(
      'https://uat.api.bca.hspace.biz/course/list-course-id/',
      'get',
      null,
      {},
      {course_id},
    ),
  get_list_course: params =>
    handleAxios(
      'https://uat.api.bca.hspace.biz/course/list-course-filter/',
      'get',
      null,
      {},
      params,
    ),

  // instructor
  // get_list_instructor_course: () => handleAxios(PROXY + )
}

export default CourseApi
