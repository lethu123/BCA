import React from 'react'
import {Card} from 'reactstrap'
import {Airplay, MessageCircle, Share2, ThumbsUp} from 'react-feather'
//scss
import '@core/scss/react/libs/flatpickr/flatpickr.scss'
// *** Components
import StatisticComponent from 'components/statistic/StatisticComponent'

const StatisticManagePost = ({data}) => {
  if (!data) return null
  return (
    <Card className="p-2 my-2">
      <StatisticComponent
        statistic={[
          {
            id: 1,
            value: data.total_post || 0,
            label: 'Tổng bài đăng',
            color: 'primary',
            icon: <Airplay />,
          },
          {
            id: 2,
            value: data.total_like || 0,
            label: 'Tổng lượt thích',
            color: 'danger',
            icon: <ThumbsUp />,
          },
          {
            id: 3,
            value: data.total_share || 0,
            label: 'Tổng chia sẻ',
            color: 'warning',
            icon: <Share2 />,
          },
          {
            id: 4,
            value: data.total_comment || 0,
            label: 'Tổng  bình luận',
            color: 'success',
            icon: <MessageCircle />,
          },
        ]}
      />
    </Card>
  )
}

export default StatisticManagePost
