import React from 'react'
import {Col, Row} from 'reactstrap'
import StatsVertical from '@core/components/widgets/stats/StatsVertical'

//scss
import '@core/scss/react/libs/flatpickr/flatpickr.scss'
import {Airplay, Clipboard, Columns, Database, DollarSign} from 'react-feather'
// *** Components

const statistic = [
  {
    id: 1,
    value: 400,
    label: 'Tổng lượt đăng bán',
    color: 'danger',
    icon: <Airplay />,
  },
  {
    id: 2,
    value: 200,
    label: 'Tổng lượt mua',
    color: 'success',
    icon: <Columns />,
  },
  {
    id: 3,
    value: 100,
    label: 'Tổng tiền mua',
    color: 'warning',
    icon: <DollarSign />,
  },
  {
    id: 4,
    value: 100,
    label: 'Phí giao dịch',
    color: 'primary',
    icon: <Clipboard />,
  },
]

const StatisticMarketPlace = () => {
  return (
    <div>
      <div className="p-5 ">
        <Row className="align-items-center justify-content-center">
          {statistic.length > 0 &&
            statistic.map(ele => (
              <Col md="3" sm="6" key={ele.id}>
                <StatsVertical
                  icon={ele.icon}
                  color={ele.color}
                  stats={ele.value}
                  statTitle={ele.label}
                  // statTag={ele.per}
                  statSub={ele.sub}
                  hasSub={ele.hasSub ?? null}
                  hasMinHeight={20}
                />
              </Col>
            ))}
        </Row>
      </div>
    </div>
  )
}

export default StatisticMarketPlace
