// import StatisticCalendarCampaign from './StatisticCalendarCampaign'
import {TableCalendarCampaign} from '@services/campaign'

// *** Styles
import './Table.style.scss'
const CampaignCalendar = () => {
  return (
    <div
      className="take-care-of-facebook p-5"
      style={{backgroundColor: '#fff'}}
    >
      <div>
        {/* <StatisticCalendarCampaign /> */}
        <TableCalendarCampaign />
      </div>
    </div>
  )
}

export default CampaignCalendar
