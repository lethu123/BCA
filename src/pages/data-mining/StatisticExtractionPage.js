import React from 'react'
import {Col, Row} from 'reactstrap'
// ** component
import StatsVertical from '@core/components/widgets/stats/StatsVertical'
import {Link, MessageSquare, PieChart} from 'react-feather'

const linkMyPostStatistic = {
  total_link: 100,
  total_point: 2000000,
  total_link_active: 50,
  total_link_deny: 50,
}
const StatisticExtractionPage = () => {
  return (
    <div>
      <div className="d-flex align-items-center alert-shadow fade show gutter-b">
        <PieChart className="mr-2 text-info" />
        <h3 className="alert-text   mb-0 text-info">Thống kê</h3>
      </div>
      <Row>
        {/* Stats With Icons */}
        <Col xl="2" md="4" sm="6">
          <StatsVertical
            icon={<Link size={21} />}
            color="info"
            stats={linkMyPostStatistic.total_link}
            statTitle="Tổng số link"
          />
        </Col>
        <Col xl="2" md="4" sm="6">
          <StatsVertical
            icon={<MessageSquare size={21} />}
            color="warning"
            stats={linkMyPostStatistic.total_point}
            statTitle="Tổng điểm"
          />
        </Col>
        <Col xl="2" md="4" sm="6">
          <StatsVertical
            icon={<Link size={21} />}
            color="success"
            stats={linkMyPostStatistic.total_link_active}
            statTitle="Tổng link hoạt động"
          />
        </Col>
        <Col xl="2" md="4" sm="6">
          <StatsVertical
            icon={<Link size={21} />}
            color="danger"
            stats={linkMyPostStatistic.total_link_deny}
            statTitle="Tổng link bị từ chối"
          />
        </Col>

        {/* Stats With Icons */}
      </Row>
    </div>
  )
}

export default StatisticExtractionPage
