import React from 'react'
import StatisticTask from './StatisticTask'
import TableTask from './TableTask'

const TaskPage = () => {
  return (
    <div style={{backgroundColor: '#fff'}} className="card-body">
      <StatisticTask />
      <TableTask />
    </div>
  )
}

export default TaskPage
