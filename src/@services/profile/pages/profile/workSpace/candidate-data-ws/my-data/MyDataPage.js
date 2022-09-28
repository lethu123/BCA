import React from 'react'
import {Card} from 'reactstrap'
import StatisticMyData from './StatisticMyData'
import TableMyData from './TableMyData'

const MyDataPage = () => {
  return (
    <Card>
      <StatisticMyData />
      <TableMyData />
    </Card>
  )
}

export default MyDataPage
