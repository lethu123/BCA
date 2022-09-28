import React from 'react'

// import StatisticAutoJob from './StatisticAutoJob'
import TableAutoJob from '../components/table/TableAutoJob'

const AutoJobPage = () => {
  return (
    <div style={{backgroundColor: '#fff'}}>
      <div style={{width: '95%', margin: '0px auto'}} className="pb-3">
        {/* <StatisticAutoJob /> */}
        <TableAutoJob />
      </div>
    </div>
  )
}

export default AutoJobPage
