import React from 'react'
import {Archive, Database, Layers, PieChart, Truck} from 'react-feather'
import StatsVertical from '@core/components/widgets/stats/StatsVertical'
import {Col, Row} from 'reactstrap'

const StatisticCustomer = () => {
  return (
    <div>
      <h4>
        <PieChart color="#1eac52" className="mr-4" />
        Thống kê
      </h4>
      <p className="mt-3 mb-5">
        Lần cập nhật gần nhất : <span> 3 tháng 5, 2021</span>
      </p>

      <Row className="justify-content-center">
        <Col xl="3" md="4" sm="6">
          <StatsVertical
            icon={<Archive size={21} />}
            color="info"
            stats="70"
            statTitle="Tổng số khách"
          />
        </Col>
        <Col xl="3" md="4" sm="6">
          <StatsVertical
            icon={<Database size={21} />}
            color="warning"
            stats="120"
            statTitle="Tổng số sản phẩm"
          />
        </Col>
        <Col xl="3" md="4" sm="6">
          <StatsVertical
            icon={<Layers size={21} />}
            color="danger"
            stats="500"
            statTitle="Tổng số lượng"
          />
        </Col>
        <Col xl="3" md="4" sm="6">
          <StatsVertical
            icon={<Truck size={21} />}
            color="primary"
            stats="350"
            statTitle="Tổng doanh thu"
          />
        </Col>
      </Row>
    </div>
  )
}

export default StatisticCustomer
