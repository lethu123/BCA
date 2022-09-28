import React from 'react'
import {Card, Col, Row} from 'reactstrap'
import StatsVertical from '@core/components/widgets/stats/StatsVertical'
import {Edit2, ThumbsUp, User, Users} from 'react-feather'
import StatisticComponent from 'components/statistic/StatisticComponent'

const statistic = [
  {
    id: 1,
    value: 200,
    label: 'Số bài viết',

    color: 'warning',
    icon: <Edit2 size={20} />,
  },
  {
    id: 2,
    value: 82,
    label: 'Số lượt like',

    color: 'success',
    icon: <ThumbsUp size={20} />,
  },
  {
    id: 3,
    value: 10,
    label: 'Bạn bè',
    color: 'warning',
    icon: <User size={20} />,
    hasSub: true,
  },
  {
    id: 4,
    value: 2,
    label: 'Người theo dõi',
    color: 'danger',
    icon: <Users size={20} />,
    hasSub: true,
  },
]
const StatisticProfileUser = () => {
  return (
    <Card className="p-5">
      <StatisticComponent statistic={statistic} />
    </Card>
  )
}

export default StatisticProfileUser
