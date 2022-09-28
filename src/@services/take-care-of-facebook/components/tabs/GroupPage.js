import React from 'react'
import {StatisticGroup, TableGroup} from '@services/take-care-of-facebook'

const GroupPage = () => {
  return (
    <div className="take-care-of-facebook">
      <div style={{width: '95%', margin: '0px auto'}} className="pb-3">
        <StatisticGroup />
        <TableGroup />
      </div>
    </div>
  )
}

export default GroupPage
