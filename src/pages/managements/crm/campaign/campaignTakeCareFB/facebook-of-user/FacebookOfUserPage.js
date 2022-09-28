import React from 'react'
import StatisticFacebookOfUser from './StatisticFacebookOfUser'
import TableFacebookOfUser from './TableFacebookOfUser'

//scss
import '../CustomFb.style.scss'

const FacebookOfUserPage = () => {
  return (
    <div className="take-care-of-facebook">
      <div>
        <StatisticFacebookOfUser />
        <TableFacebookOfUser />
      </div>
    </div>
  )
}

export default FacebookOfUserPage
