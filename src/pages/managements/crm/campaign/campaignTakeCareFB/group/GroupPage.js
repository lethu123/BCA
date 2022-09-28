import React from 'react'
import StatisticGroup from './StatisticGroup'
import TableGroup from './TableGroup'

//scss
import '../CustomFb.style.scss'

const GroupPage = () => {
  return (
    <div className="take-care-of-facebook">
      <div>
        <StatisticGroup />
        <TableGroup />
      </div>
    </div>
  )
}

export default GroupPage
