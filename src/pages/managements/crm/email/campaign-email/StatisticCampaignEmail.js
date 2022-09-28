import React from 'react'
import {Card, Col, Row} from 'reactstrap'
import StatsVertical from '@core/components/widgets/stats/StatsVertical'

//scss
import '@core/scss/react/libs/flatpickr/flatpickr.scss'
import {
  Codesandbox,
  Command,
  Compass,
  Dribbble,
  Grid,
  PieChart,
} from 'react-feather'
import StatisticComponent from 'components/statistic/StatisticComponent'

const statistic = [
  {
    id: 1,
    value: 3000,
    label: 'Số chiến dịch email',
    color: 'warning',
    icon: <Codesandbox />,
  },
  {
    id: 2,
    value: 300,
    label: 'Tổng số khách hàng',
    color: 'success',
    icon: <Command />,
  },
  {
    id: 3,
    value: 1000,
    label: 'Gửi mail thành công',
    color: 'primary',
    icon: <Grid />,
  },

  {
    id: 4,
    value: 3,
    label: 'Tổng số trả lời mail',
    color: 'danger',
    icon: <Dribbble />,
  },
]

const StatisticCampaignEmail = () => {
  return (
    <div>
      <div className="d-flex align-items-center mb-2">
        <PieChart className="text-white mr-2" fill="#E6641F" size={50} />
        <h4 className="mb-0 text-primary">Thống kê</h4>
      </div>
      <Card className="pt-2">
        <StatisticComponent statistic={statistic} />
      </Card>
    </div>
  )
}

export default StatisticCampaignEmail
