import React from 'react'
import StatsVertical from '@core/components/widgets/stats/StatsVertical'
import {Col, Row} from 'reactstrap'
import {DollarSign, ShoppingBag, Slack, Users} from 'react-feather'

const StatisticSalesCampaign = () => {
  return (
    <div>
      <Row className="justify-content-center">
        <Col xl="3" md="4" sm="6">
          <StatsVertical
            icon={<Users size={21} />}
            color="primary"
            stats="3000"
            statTitle="Tổng số KH"
          />
        </Col>
        <Col xl="3" md="4" sm="6">
          <StatsVertical
            icon={<ShoppingBag size={21} />}
            color="warning"
            stats="600"
            statTitle="KH mua SP"
          />
        </Col>
        <Col xl="3" md="4" sm="6">
          <StatsVertical
            icon={<Slack size={21} />}
            color="success"
            stats="12k"
            statTitle="Tổng chi phí"
          />
        </Col>
        <Col xl="3" md="4" sm="6">
          <StatsVertical
            icon={<DollarSign size={21} />}
            color="danger"
            stats="26.8"
            statTitle="Tổng lợi nhuận"
          />
        </Col>

        {/* Stats With Icons */}
      </Row>
    </div>
  )
}

export default StatisticSalesCampaign
