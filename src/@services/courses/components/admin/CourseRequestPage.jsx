// ** component
import DataTableComponent from 'components/data-table/DataTableComponent'
import {RequestCoursesColumnTable} from '../columns/RequestCoursesColumnTable'
import FilterRequestCourse from './FilterRequestCourse'

const CourseRequestPage = () => {
  return (
    <div className="">
      <DataTableComponent
        // *** required
        columns={RequestCoursesColumnTable}
        query={{
          key: [],
          params: {},
          url: '',
          headers: '',
        }}
        defaultData={[{id: 123}, {id: 456}]}
        // ** optional - default undefined
        // ExpandableComponent={ExpandableTable}
        FilterComponent={FilterRequestCourse}
        isExport
        searchPlaceholder="Nhập nội dung tìm kiếm ..."
      />
    </div>
  )
}

export default CourseRequestPage
