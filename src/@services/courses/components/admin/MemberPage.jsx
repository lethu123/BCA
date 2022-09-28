import DataTableComponent from 'components/data-table/DataTableComponent'
import {MemberCoursesColumnTable} from '../columns/MemberCoursesColumnTable'
import FilterMemberCourse from './FilterMemberCourse'

const MemberPage = () => {
  return (
    <div className="">
      <DataTableComponent
        // *** required
        columns={MemberCoursesColumnTable}
        query={{
          key: [],
          params: {},
          url: '',
          headers: '',
        }}
        defaultData={[{id: 123}, {id: 456}]}
        // ** optional - default undefined
        // ExpandableComponent={ExpandableTable}
        FilterComponent={FilterMemberCourse}
        isExport
        searchPlaceholder="Nhập nội dung tìm kiếm ..."
      />
    </div>
  )
}

export default MemberPage
