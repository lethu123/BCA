import React from 'react'

import {
  StatisticFacebookOfUser,
  TableFacebookOfUser,
} from '@services/take-care-of-facebook'

const FacebookOfUserPage = ({dataStatisticFB}) => {
  return (
    <div className="take-care-of-facebook">
      <div style={{width: '95%', margin: '0px auto'}} className="pb-3">
        <StatisticFacebookOfUser data={dataStatisticFB} />
        <TableFacebookOfUser />
      </div>
    </div>
  )
}

export default FacebookOfUserPage
