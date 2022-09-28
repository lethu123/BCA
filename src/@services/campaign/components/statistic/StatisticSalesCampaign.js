import React from 'react'
import StatsVertical from '@core/components/widgets/stats/StatsVertical'
import {Col, Row} from 'reactstrap'
import {DollarSign, Plus, Slack, Users} from 'react-feather'
import {AutomationQuery} from '@services/automation'

const StatisticSalesCampaign = () => {
  const {data} = AutomationQuery.useStatisticSaleCampaign()

  return (
    <div>
      <Row>
        {/* Stats With Icons */}
        <Col md="3" sm="6">
          <StatsVertical
            icon={<Users size={21} />}
            color="primary"
            stats={data?.customer || 0}
            statTitle="Tổng số KH"
            hasMinHeight={20}
          />
        </Col>
        <Col md="3" sm="6">
          <StatsVertical
            icon={<Plus size={21} />}
            color="warning"
            stats={data?.total || 0}
            statTitle="KH mua sản phẩm"
            hasMinHeight={20}
          />
        </Col>

        <Col md="3" sm="6">
          <StatsVertical
            icon={<Slack size={21} />}
            color="success"
            stats={data?.cost || 0}
            statTitle="Chi phí"
            hasMinHeight={20}
          />
        </Col>
        <Col md="3" sm="6">
          <StatsVertical
            icon={<DollarSign size={21} />}
            color="danger"
            stats={data?.revenue || 0}
            statTitle="Doanh thu"
            hasMinHeight={20}
          />
        </Col>
        {/* Stats With Icons */}
      </Row>
    </div>
  )
}

export default StatisticSalesCampaign
