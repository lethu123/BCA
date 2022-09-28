import React from 'react'
import StatisticManageMember from './StatisticManageMember'
import ChartManageMember from './ChartManageMember'
import TableManageMember from './TableManageMember'

const ManageMemberPage = () => {
  return (
    <div>
      <StatisticManageMember />
      <ChartManageMember />
      <TableManageMember />
    </div>
  )
}

export default ManageMemberPage
