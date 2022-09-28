import {Link} from 'react-router-dom'
import {Button} from 'reactstrap'
import {Eye} from 'react-feather'
// *** Component
import {CalendarCampaignColumnTable} from '../column/CalendarCampaignColumnTable'
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterFBSaSam from '../filter/FilterFBSaSam'
import BlockCampaignTable from '@services/campaign/components/tabs/campaignCalendar/BlockCampaignTable'

// *** Query
import {CampaignDatatable} from '@services/campaign'

const TableCalendarCampaign = ({uid = null}) => {
  const ExpandableTable = ({data}) => {
    return <BlockCampaignTable datas={data.block || []} />
  }

  const queryList = {
    ...CampaignDatatable.useGetListHistoryCampaigns(),
    params: uid ? {uid_customer: uid} : {},
  }

  return (
    <div className="mt-2">
      <DataTableComponent
        // *** required
        columns={[
          ...CalendarCampaignColumnTable,
          {
            name: 'Xem chi tiết',
            selector: 'type_loop',
            maxWidth: '160px',
            center: true,
            cell: row => (
              <Link
                to={`/admin/campaign-history/${uid}/${row._id}/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button.Ripple
                  className="btn-icon"
                  outline
                  color="primary"
                  size="sm"
                >
                  <Eye size={14} />
                </Button.Ripple>
              </Link>
            ),
          },
        ]}
        query={queryList}
        // ** optional - default undefined
        ExpandableComponent={<ExpandableTable />}
        FilterComponent={FilterFBSaSam}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Nhập nội dung tìm kiếm ..."
      />
    </div>
  )
}

export default TableCalendarCampaign
