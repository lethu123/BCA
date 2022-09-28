import React from 'react'

//component
import StatisticManageData from '../statistic/StatisticManageData'
import ChartManageData from '../chart/ChartManageData'
import TableManageData from '../table/TableManageData'

const ManageDataPage = () => {
  return (
    <div className="mt-1">
      <StatisticManageData />
      <ChartManageData />
      <TableManageData />
    </div>
  )
}

export default ManageDataPage
