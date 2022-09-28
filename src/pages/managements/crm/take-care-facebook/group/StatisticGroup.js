import StatisticComponent from 'components/statistic/StatisticComponent'
import React from 'react'
import {Edit2, MessageSquare, UserPlus, Users} from 'react-feather'
import {Card, Col, Row} from 'reactstrap'

const StatisticGroup = () => {
  const statistic = [
    {
      id: 1,
      value: 1000,
      label: 'Yêu cầu ',
      color: 'warning',
      icon: <UserPlus />,
    },
    {
      id: 2,
      value: 1000,
      label: 'Đã tham gia',
      color: 'success',
      icon: <Users />,
    },
    {
      id: 3,
      value: 1000,
      label: 'Viết bài',
      color: 'info',
      icon: <Edit2 />,
    },
    {
      id: 4,
      value: 1000,
      label: 'Bình luận',
      color: 'primary',
      icon: <MessageSquare />,
    },
  ]
  return (
    <div className="mt-3">
      <Card className="pt-5">
        <StatisticComponent statistic={statistic} />
      </Card>
    </div>
  )
}

export default StatisticGroup
