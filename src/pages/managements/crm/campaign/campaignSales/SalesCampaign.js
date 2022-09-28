import React, {memo} from 'react'
import {PieChart} from 'react-feather'
import './Campaign.style.scss'

// *** Components
import TableSalesCampaign from './TableSalesCampaign'
import StatisticSalesCampaign from './StatisticSalesCampaign'

const SalesCampaign = () => {
  return (
    <div className="campaign p-3" style={{backgroundColor: 'white'}}>
      <div className="static">
        <div className="d-flex align-items-center">
          <PieChart
            size={50}
            fill="#E6641F"
            stroke="white"
            style={{marginBottom: 4}}
          />
          <h5 className="text-primary">Thống Kê</h5>
        </div>

        <StatisticSalesCampaign />
        <TableSalesCampaign />
      </div>
    </div>
  )
}

export default memo(SalesCampaign)
