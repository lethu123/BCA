import React from 'react'
import {Command, PieChart, Target, XOctagon} from 'react-feather'
import StatisticComponent from 'components/statistic/StatisticComponent'
import {Card, CardBody} from 'reactstrap'

const StatisticCustomerPage = () => {
  const statistic = [
    {
      id: 1,
      value: 200,
      label: 'Tổng số khách hàng',
      color: 'primary',
      icon: <Command className="text-primary" size={21} />,
    },
    {
      id: 2,
      value: 10,
      label: 'Tổng số khách hàng',
      color: 'info',
      icon: <Target className="text-info" size={21} />,
    },

    {
      id: 3,
      value: 20,
      label: 'Tổng số khách hàng',
      color: 'danger',
      icon: <XOctagon className="text-danger" a size={21} />,
    },
  ]
  return (
    <div className="">
      <div className="mb-2">
        <PieChart size={50} fill="#E6641F" stroke="#fff" />
        <span style={{fontSize: 18}} className="text-primary">
          Thống kê
        </span>
      </div>
      <Card className="pt-1 mb-0">
        <CardBody>
          <StatisticComponent statistic={statistic} />
        </CardBody>
      </Card>
    </div>
  )
}

export default StatisticCustomerPage
