import React from 'react'
import {DollarSign, Package, Slack, Target, TrendingUp} from 'react-feather'
import {Col, Row} from 'reactstrap'
import StatsVertical from '@core/components/widgets/stats/StatsVertical'

const StatisticProduct = () => {
  return (
    <div>
      <Row>
        {/* Stats With Icons */}
        <Col xl="2" md="4" sm="6">
          <StatsVertical
            icon={<Target size={21} />}
            color="info"
            stats="100"
            statTitle="Tổng số SP"
          />
        </Col>
        <Col xl="2" md="4" sm="6">
          <StatsVertical
            icon={<TrendingUp size={21} />}
            color="warning"
            stats="60"
            statTitle="Số SP lưu hành"
          />
        </Col>
        <Col xl="2" md="4" sm="6">
          <StatsVertical
            icon={<Package size={21} />}
            color="danger"
            stats="12k"
            statTitle="Số lung sản xuất"
          />
        </Col>

        <Col xl="2" md="4" sm="6">
          <StatsVertical
            icon={<Slack size={21} />}
            color="success"
            stats="1M"
            statTitle="Chi phí"
          />
        </Col>
        <Col xl="2" md="4" sm="6">
          <StatsVertical
            icon={<DollarSign size={21} />}
            color="danger"
            stats="5M"
            statTitle="Doanh thu"
          />
        </Col>
        {/* Stats With Icons */}
      </Row>
    </div>
  )
}

export default StatisticProduct
