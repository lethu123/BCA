import React from 'react'
import {Card, Col, Row} from 'reactstrap'
import StatsVertical from '@core/components/widgets/stats/StatsVertical'

//scss
import '@core/scss/react/libs/flatpickr/flatpickr.scss'
import {
  Codesandbox,
  Command,
  Grid,
  PieChart,
  Shuffle,
  UserCheck,
} from 'react-feather'
import StatisticComponent from 'components/statistic/StatisticComponent'

const statistic = [
  {
    id: 1,
    value: 3000,
    label: 'Tổng số Task',
    color: 'warning',
    icon: <Codesandbox />,
  },
  {
    id: 2,
    value: 3000,
    label: 'Tổng số Task',
    color: 'success',
    icon: <Command />,
  },
  {
    id: 3,
    value: 1000,
    label: 'Tổng số Task',
    color: 'warning',
    icon: <Grid />,
  },
  {
    id: 4,
    value: 2000,
    label: 'Tổng số Task',
    color: 'danger',
    icon: <Shuffle />,
  },
]

const StatisticTask = () => {
  return (
    <div>
      <div>
        <div className="d-flex align-items-center">
          <PieChart className="text-white mr-2" fill="#E6641F" size={50} />
          <h4 className="mb-0 text-primary">Thống kê</h4>
        </div>

        <Card className="pt-2 mt-2">
          <StatisticComponent statistic={statistic} />
        </Card>
      </div>
    </div>
  )
}

export default StatisticTask
