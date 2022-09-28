import React from 'react'
// ** component
import DataTableComponent from 'components/data-table/DataTableComponent'
import {ManageCoursesColumnTable} from '../columns/ManageCoursesColumnTable'
import FilterManagementCourse from './FilterManageCourse'

const CourseManagePage = () => {
  return (
    <div className="">
      <DataTableComponent
        // *** required
        columns={ManageCoursesColumnTable}
        query={{
          key: [],
          params: {},
          url: '',
          headers: '',
        }}
        defaultData={[{id: 123}, {id: 456}]}
        // ** optional - default undefined
        // ExpandableComponent={ExpandableTable}
        FilterComponent={FilterManagementCourse}
        isExport
        searchPlaceholder="Nhập nội dung tìm kiếm ..."
      />
    </div>
  )
}

export default CourseManagePage
