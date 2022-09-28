import React from 'react'
import {Col, Row} from 'reactstrap'
import StatsVertical from '@core/components/widgets/stats/StatsVertical'

//scss
import '@core/scss/react/libs/flatpickr/flatpickr.scss'
import {Codesandbox, Command, Grid, PieChart} from 'react-feather'

const statistic = [
  {
    id: 1,
    value: 3000,
    label: 'Tổng số auto job',
    color: 'warning',
    icon: <Codesandbox />,
  },
  {
    id: 2,
    value: 3000,
    label: 'Tổng số đã chạy',
    color: 'success',
    icon: <Command />,
  },
  {
    id: 3,
    value: 1000,
    label: 'Số đang hoạt động',
    color: 'danger',
    icon: <Grid />,
  },
]

const Statisticautojob = () => {
  return (
    <div>
      <div className="p-3">
        <Row className="mb-2">
          <Col sm="12">
            <div className="d-flex align-items-center">
              <PieChart className="text-white mr-2" fill="#E6641F" size={35} />
              <h4 className="mb-0 text-primary">Thống kê</h4>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {statistic.length > 0 &&
            statistic.map(ele => (
              <Col xl="3" md="4" sm="6" key={ele.id}>
                <StatsVertical
                  icon={ele.icon}
                  color={ele.color}
                  stats={ele.value}
                  statTitle={ele.label}
                  statTag={ele.per}
                  statSub={ele.sub}
                  hasSub={ele.hasSub ?? null}
                />
              </Col>
            ))}
        </Row>
      </div>
    </div>
  )
}

export default Statisticautojob
