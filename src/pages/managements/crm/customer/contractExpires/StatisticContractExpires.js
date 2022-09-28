import React from 'react'
import {Command, PieChart, Target, XOctagon} from 'react-feather'
import {Card, CardBody} from 'reactstrap'
import StatisticComponent from 'components/statistic/StatisticComponent'

const StatisticContractExpires = () => {
  const statistic = [
    {
      id: 1,
      value: 200,
      label: 'Số mã khuyến mãi',
      color: 'primary',
      icon: <Command className="text-primary" size={30} />,
    },
    {
      id: 2,
      value: 10,
      label: 'Số chưa áp dụng',
      color: 'info',
      icon: <Target className="text-info" size={30} />,
    },

    {
      id: 4,
      value: 20,
      label: 'Số ngưng áp dụng',
      color: 'danger',
      icon: <XOctagon className="text-danger" a size={30} />,
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
      <Card className="pt-1">
        <CardBody>
          {' '}
          <StatisticComponent statistic={statistic} />
        </CardBody>
      </Card>
    </div>
  )
}

export default StatisticContractExpires
