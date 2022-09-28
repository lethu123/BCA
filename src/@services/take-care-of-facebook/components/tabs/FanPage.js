import React from 'react'
import {TableFanPage, StatisticFanPage} from '@services/take-care-of-facebook'

const FanPage = () => {
  return (
    <div className="take-care-of-facebook">
      <div style={{width: '95%', margin: '0px auto'}} className="pb-3">
        <StatisticFanPage />
        <TableFanPage />
      </div>
    </div>
  )
}

export default FanPage
