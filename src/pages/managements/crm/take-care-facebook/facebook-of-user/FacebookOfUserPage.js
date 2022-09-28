import React from 'react'
import StatisticFacebookOfUser from './StatisticFacebookOfUser'
import TableFacebookOfUser from './TableFacebookOfUser'

const FacebookOfUserPage = () => {
  return (
    <div>
      <div className="pb-3">
        <StatisticFacebookOfUser />
        <TableFacebookOfUser />
      </div>
    </div>
  )
}

export default FacebookOfUserPage
