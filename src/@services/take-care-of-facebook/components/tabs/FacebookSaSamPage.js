import React from 'react'
import {
  StatisticFacbookSaSam,
  TableFacebookSaSam,
} from '@services/take-care-of-facebook'

const FacebookSaSamPage = () => {
  return (
    <div className="take-care-of-facebook">
      <div style={{width: '95%', margin: '0px auto'}} className="pb-3">
        <StatisticFacbookSaSam />
        <TableFacebookSaSam />
      </div>
    </div>
  )
}

export default FacebookSaSamPage
