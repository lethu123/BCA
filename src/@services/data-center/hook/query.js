import keys from './key'
import {useQuery} from 'react-query'
import DataCenterApi from '../data-center-api'

/**
 * https://course.hschool.hspace.biz/redoc/#operation/course_list-course-filter_read
 * Danh sách khóa học
 */
const useListCourse = (params = null) => {
  return useQuery(
    [keys.DATA_QUANTITY, params],
    () => DataCenterApi.get_list_course(params),
    {
      staleTime: 0,
    },
  )
}

 

const DataCenterQuery = { 
  useListCourse,
}

export default DataCenterQuery
