import React, {memo} from 'react'
import StatisticCalendarCampaign from './StatisticCalendarCampaign'
import TableCalendarCampaign from './TableCalendarCampaign'

const CampaignCalendar = () => {
  return (
    <div className="take-care-of-facebook">
      <div style={{width: '95%', margin: '0px auto'}} className="pb-3">
        <StatisticCalendarCampaign />
        <TableCalendarCampaign />
      </div>
    </div>
  )
}

export default memo(CampaignCalendar)
