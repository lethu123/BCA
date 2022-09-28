import React from 'react'
import {
  CheckCircle,
  PauseCircle,
  PieChart,
  Play,
  StopCircle,
} from 'react-feather'
import StatsVertical from '@core/components/widgets/stats/StatsVertical'
import {Col, Row} from 'reactstrap'
import {AutomationQuery} from '../../hook/query'

const StatisticAutoJob = () => {
  const {dataQuery, initialStatisticAutomation} =
    AutomationQuery.useStatisticAutomation('autojob')
  const data = dataQuery || initialStatisticAutomation

  return (
    <div>
      <h4 className="text-primary my-5">
        <PieChart
          size={40}
          stroke="#1eac52"
          fill="white"
          color="#1eac52"
          className="mr-4"
        />
        Thống kê
      </h4>

      <Row className="justify-content-center">
        <Col xl="2" md="4" sm="6">
          <StatsVertical
            icon={<PieChart size={21} />}
            color="primary"
            stats={data.total}
            statTitle="Auto job"
          />
        </Col>
        <Col xl="2" md="4" sm="6">
          <StatsVertical
            icon={<Play size={21} />}
            color="warning"
            stats={data.running}
            statTitle="Đang chạy"
          />
        </Col>
        <Col xl="2" md="4" sm="6">
          <StatsVertical
            icon={<StopCircle size={21} />}
            color="info"
            stats={data.draft}
            statTitle="Đang đợi"
          />
        </Col>
        <Col xl="2" md="4" sm="6">
          <StatsVertical
            icon={<PauseCircle size={21} />}
            color="danger"
            stats={data.cancel}
            statTitle="Tạm dừng"
          />
        </Col>
        <Col xl="2" md="4" sm="6">
          <StatsVertical
            icon={<CheckCircle size={21} />}
            color="success"
            stats={data.complete}
            statTitle="Hoàn thành"
          />
        </Col>
      </Row>
    </div>
  )
}

export default StatisticAutoJob
