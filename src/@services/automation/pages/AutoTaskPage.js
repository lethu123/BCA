import React from 'react'

// import StatisticAutoTask from './StatisticAutoTask'
import TableAutoTask from '../components/table/TableAutoTask'

const AutoTaskPage = () => {
  return (
    <div style={{backgroundColor: '#fff'}}>
      <div style={{width: '95%', margin: '0px auto'}} className="pb-3">
        {/* <StatisticAutoTask /> */}
        <TableAutoTask />
      </div>
    </div>
  )
}

export default AutoTaskPage
