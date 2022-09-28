import keys from './key'
// import {PROXY} from '../../proxy'

const PROXY = 'https://course.hschool.hspace.biz'

const secret_key = localStorage.getItem('refreshToken')
// const userData = localStorage.getItem('userData')
// const uid = userData ? JSON.parse(userData) : null

//** constant api */
const get_list_course_api = PROXY + '/course/list-course-filter/'

/**
 * helper function
 */
const optionsCallApi = url => {
  return {
    url: url,
    headers: {'s-key': secret_key},
  }
}

/**
 * https://course.hschool.hspace.biz/redoc/#operation/course_get_course_filter
 * Lấy danh sách khoá học
 * Datatable
 */
const useListCourse = params => {
  return {
    ...optionsCallApi(get_list_course_api),
    key: [keys.LIST_COURSE, ...Object.keys(params)],
    params,
  }
}

const CourseDatatable = {
  useListCourse,
}

export default CourseDatatable
