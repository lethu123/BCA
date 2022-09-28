import React from 'react'
import StatisticFanPage from './StatisticFanPage'
import TableFanPage from './TableFanPage'

const FanPage = () => {
  return (
    <div>
      <div className="pb-3">
        <StatisticFanPage />
        <TableFanPage />
      </div>
    </div>
  )
}

export default FanPage
