import React from 'react'
//scss
import '@core/scss/react/libs/flatpickr/flatpickr.scss'
// *** Third Libary
import {Card, Col, Row} from 'reactstrap'
import {Codesandbox, CornerUpRight, Gift, UserCheck, Users} from 'react-feather'
import StatsVertical from '@core/components/widgets/stats/StatsVertical'
import StatisticComponent from 'components/statistic/StatisticComponent'

const statistic = [
  {
    id: 1,
    value: 8053,
    label: 'Tổng số Bizxu tặng',
    color: 'primary',
    icon: <Codesandbox />,
  },

  {
    id: 3,
    value: 168,
    label: 'Bài viết được tặng',
    color: 'warning',
    icon: <Gift />,
  },
  {
    id: 4,
    value: 11585,
    label: 'Thành viên được tặng',
    color: 'success',
    icon: <UserCheck />,
  },
  {
    id: 5,
    value: 11585,
    label: 'Tổng thành viên tặng',
    color: 'info',
    icon: <Users />,
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
