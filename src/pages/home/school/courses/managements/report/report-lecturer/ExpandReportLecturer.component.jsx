//  ** component 3rd
import AppCollapse from '@core/components/app-collapse'

// ** Expandable table component
const ExpandableTable = ({data}) => {
  return (
    <div className="expandable-content p-2">
      {/* Description */}
      <AppCollapse
        data={[
          {
            title: <span className=" text-dark">Content Report</span>,
            content: <div>this is content report</div>,
          },
        ]}
        type="margin"
        accordion
      />

      <p>
        <span className="font-weight-bold">Information:</span> Một số thông tin
        của khóa học nằm ở đây
      </p>
    </div>
  )
}

export default ExpandableTable
