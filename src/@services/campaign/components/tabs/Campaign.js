import React, {useState} from 'react'
import {PieChart} from 'react-feather'
// import './Campaign.style.scss'

// *** Components
import {TableCampaign} from '@services/campaign'

// *** Component
const Campaign = () => {
  const [centeredModal, setCenteredModal] = useState(false)
  const [showAutoJob, setShowAutoJob] = useState(false)

  return (
    <div className="campaign p-3" style={{backgroundColor: 'white'}}>
      <div className="static">
        <div className="mt-4 mb-5">
          <PieChart
            size={40}
            fill="#1EAC52"
            stroke="white"
            style={{marginBottom: 4}}
          />
          <span style={{fontSize: 20, color: '#1EAC52'}}>Thống Kê</span>
        </div>

        {/* <StatisticSalesCampaign /> */}
        <TableCampaign
          showAutoJob={showAutoJob}
          setShowAutoJob={setShowAutoJob}
          centeredModal={centeredModal}
          setCenteredModal={setCenteredModal}
        />
      </div>
    </div>
  )
}

export default Campaign
