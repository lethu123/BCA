import React from 'react'
import {Activity, LifeBuoy, Slack, Users} from 'react-feather'
import StatsVertical from '@core/components/widgets/stats/StatsVertical'
import {Col, Row} from 'reactstrap'

const StatisticCalendarCampaign = () => {
  return (
    <div className="mt-3">
      <Row className="align-items-center justify-content-center">
        {/* <Col xl="4" md="4" sm="6">
          <h1
            className="text-primary mr-10"
            style={{borderBottom: '2px solid #ff9f43', display: 'initial'}}
          >
            Facebook cá nhân
          </h1>
        </Col> */}

        <Col xl="3" md="4" sm="6">
          <StatsVertical
            icon={<Activity size={21} />}
            color="info"
            stats="10"
            statTitle="Tổng chiến dịch"
          />
        </Col>
        <Col xl="3" md="4" sm="6">
          <StatsVertical
            icon={<LifeBuoy size={21} />}
            color="warning"
            stats="10"
            statTitle="Số lần thực thi"
          />
        </Col>
        <Col xl="3" md="4" sm="6">
          <StatsVertical
            icon={<Users size={21} />}
            color="danger"
            stats="10"
            statTitle="Số  KH"
          />
        </Col>

        <Col xl="3" md="4" sm="6">
          <StatsVertical
            icon={<Slack size={21} />}
            color="success"
            stats="10"
            statTitle="Số hành động"
          />
        </Col>
      </Row>
    </div>
  )
}

export default StatisticCalendarCampaign
