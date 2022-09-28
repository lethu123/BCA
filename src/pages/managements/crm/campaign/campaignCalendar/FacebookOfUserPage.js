import React from 'react'
import StatisticFacebookOfUser from './StatisticFacebookOfUser'
import TableFacebookOfUser from './TableFacebookOfUser'

//scss
import '../CustomFb.style.scss'

const FacebookOfUserPage = () => {
  return (
    <div className="take-care-of-facebook">
      <div style={{width: '95%', margin: '0px auto'}} className="pb-3">
        <StatisticFacebookOfUser />
        <TableFacebookOfUser />
      </div>
    </div>
  )
}

export default FacebookOfUserPage
