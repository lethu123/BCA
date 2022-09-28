import React from 'react'
import {Edit, MessageCircle, MessageSquare, ThumbsUp} from 'react-feather'
import {Card} from 'reactstrap'
import StatisticComponent from 'components/statistic/StatisticComponent'

const StatisticFacbookBCA = () => {
  const statistic = [
    {
      id: 1,
      value: 1000,
      label: 'Tổng số bài viết',
      color: 'warning',
      icon: <Edit />,
    },
    {
      id: 2,
      value: 1000,
      label: 'Số lượng bình luận',
      color: 'success',
      icon: <MessageCircle />,
    },
    {
      id: 3,
      value: 1000,
      label: 'Trả lời bình luận',
      color: 'primary',
      icon: <MessageSquare />,
    },
    {
      id: 4,
      value: 1000,
      label: 'Số like bình luận',
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

export default StatisticFacbookBCA
