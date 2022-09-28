import StatisticComponent from 'components/statistic/StatisticComponent'
import React from 'react'
import {Eye, Hexagon, UserCheck} from 'react-feather'
import {Card, CardBody} from 'reactstrap'

const StatisticNotificationSettings = () => {
  const statistic = [
    {
      id: 1,
      value: 100,
      label: 'Số hoạt động',
      color: 'success',
      icon: <Hexagon />,
    },
    {
      id: 2,
      value: 80,
      label: 'Số mới đăng kí',
      color: 'warning',
      icon: <Eye />,
    },
    {
      id: 3,
      value: 60,
      label: 'Ngừng hoạt động',
      color: 'danger',
      icon: <UserCheck />,
    },
  ]
  return (
    <div className="mt-3 StatisticNotificationSettings">
      <Card className="">
        <CardBody>
          <StatisticComponent statistic={statistic} />
        </CardBody>
      </Card>
    </div>
  )
}

export default StatisticNotificationSettings
