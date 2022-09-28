import StatisticComponent from 'components/statistic/StatisticComponent'
import React from 'react'
import {MessageSquare, ThumbsUp, UserPlus, Users} from 'react-feather'
import {Card} from 'reactstrap'

const StatisticFacebookOfUser = () => {
  const statistic = [
    {
      id: 1,
      value: 1000,
      label: 'Yêu cầu kết bạn',
      color: 'warning',
      icon: <UserPlus />,
    },
    {
      id: 2,
      value: 1000,
      label: 'Bạn từ yêu cầu',
      color: 'success',
      icon: <Users />,
    },
    {
      id: 3,
      value: 1000,
      label: 'Tổng bình luận',
      color: 'primary',
      icon: <MessageSquare />,
    },
    {
      id: 4,
      value: 1000,
      label: 'Tổng lượt like',
      color: 'danger',
      icon: <ThumbsUp />,
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

export default StatisticFacebookOfUser
