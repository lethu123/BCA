import React from 'react'
import {Col, Row} from 'reactstrap'
// ** component
import StatsVertical from '@core/components/widgets/stats/StatsVertical'
import {MessageSquare, PieChart, Users} from 'react-feather'

const linkEmailStatistic = {
  total_email: 10,
  total_send_success: 1200,
  total_read: 10000,
}
const StatisticEmailPage = () => {
  return (
    <div>
      <div className="d-flex align-items-center alert-shadow fade show gutter-b">
        <PieChart className="mr-2 text-info" />
        <div>
          <h3 className="alert-text   mb-0 text-info">Thống kê</h3>
        </div>
      </div>
      <Row className="justify-content-center">
        {/* Stats With Icons */}
        <Col xl="3" md="4" sm="6">
          <StatsVertical
            icon={<Users size={21} />}
            color="info"
            stats={linkEmailStatistic.total_email}
            statTitle="Tổng số email"
          />
        </Col>
        <Col xl="3" md="4" sm="6">
          <StatsVertical
            icon={<MessageSquare size={21} />}
            color="warning"
            stats={linkEmailStatistic.total_send_success}
            statTitle="Email gửi thành công"
          />
        </Col>
        <Col xl="3" md="4" sm="6">
          <StatsVertical
            icon={<Users size={21} />}
            color="success"
            stats={linkEmailStatistic.total_read}
            statTitle="Số KH đã xem"
          />
        </Col>
      </Row>
    </div>
  )
}

export default StatisticEmailPage
