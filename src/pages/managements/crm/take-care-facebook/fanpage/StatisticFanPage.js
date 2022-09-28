import React from 'react'
import {Edit2, MessageSquare, ThumbsUp} from 'react-feather'
import {Card} from 'reactstrap'
import StatisticComponent from 'components/statistic/StatisticComponent'

const StatisticFanPage = () => {
  const statistic = [
    {
      id: 5,
      value: 1000,
      label: 'Thích trang',
      color: 'warning',
      icon: <Edit2 />,
    },
    {
      id: 3,
      value: 1000,
      label: 'Bình luận',
      color: 'primary',
      icon: <MessageSquare />,
    },
    {
      id: 4,
      value: 1000,
      label: 'Thích bài đăng',
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

export default StatisticFanPage
