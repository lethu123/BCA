import React from 'react'
import {Card, Col, Row} from 'reactstrap'
import StatsVertical from '@core/components/widgets/stats/StatsVertical'

//scss
import '@core/scss/react/libs/flatpickr/flatpickr.scss'
import {Codesandbox, Command, Grid, PieChart} from 'react-feather'
import StatisticComponent from 'components/statistic/StatisticComponent'

const statistic = [
  {
    id: 1,
    value: 3000,
    label: 'Tống số email',
    color: 'warning',
    icon: <Codesandbox />,
  },
  {
    id: 2,
    value: 300,
    label: 'Số gửi thành công',
    color: 'success',
    icon: <Command />,
  },
  {
    id: 3,
    value: 1000,
    label: 'Số KH đã xem',
    color: 'primary',
    icon: <Grid />,
  },
]

const StatisticManageEmail = () => {
  return (
    <div>
      <Row className="mb-2">
        <Col sm="12">
          <div className="d-flex align-items-center">
            <PieChart className="text-white mr-2" fill="#E6641F" size={50} />
            <h4 className="mb-0 text-primary">Thống kê</h4>
          </div>
        </Col>
      </Row>
      <Card className="pt-2">
        <StatisticComponent statistic={statistic} />
      </Card>
    </div>
  )
}

export default StatisticManageEmail
