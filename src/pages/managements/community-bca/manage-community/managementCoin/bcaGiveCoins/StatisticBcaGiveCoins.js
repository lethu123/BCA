import React from 'react'
//scss
import '@core/scss/react/libs/flatpickr/flatpickr.scss'
// *** Third Libary
import {Card, Col, Row} from 'reactstrap'
import {
  Airplay,
  Globe,
  MessageCircle,
  MessageSquare,
  ThumbsUp,
} from 'react-feather'
import StatisticComponent from 'components/statistic/StatisticComponent'

const statistic = [
  {
    id: 1,
    value: 8053,
    label: 'Tổng số Bizxu tặng',
    color: 'primary',
    icon: <Airplay />,
  },
  {
    id: 2,
    value: 12000,
    label: 'Số Bizxu từ Like',
    color: 'danger',
    icon: <ThumbsUp />,
  },
  {
    id: 3,
    value: 168,
    label: 'Bizxu từ comment',
    color: 'warning',
    icon: <MessageSquare />,
  },

  {
    id: 5,
    value: 11585,
    label: 'Số Bizxu từ post',
    color: 'info',
    icon: <Globe />,
  },
]

const StatisticBcaGiveCoins = () => {
  return (
    <div>
      <div>
        <Card className="pt-2">
          <StatisticComponent statistic={statistic} />
        </Card>
      </div>
    </div>
  )
}

export default StatisticBcaGiveCoins
