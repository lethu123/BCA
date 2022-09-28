import React from 'react'
import {Col, Row} from 'reactstrap'
import StatsVertical from '@core/components/widgets/stats/StatsVertical'

//scss
import '@core/scss/react/libs/flatpickr/flatpickr.scss'
import {
  BatteryCharging,
  Codepen,
  Database,
  Droplet,
  Layers,
  Moon,
  Package,
} from 'react-feather'

const statistic = [
  {
    id: 1,
    value: 200,
    per: ' 71%',
    label: 'Số Data Landingpage',
    sub: '% Data LDP:',
    color: 'warning',
    icon: <BatteryCharging />,
  },
  {
    id: 2,
    value: 82,
    per: ' 29%',
    label: 'Số Data CX',
    sub: '% Data CX:',
    color: 'success',
    icon: <Codepen />,
  },
  {
    id: 3,
    value: 10,
    per: ' 5%',
    label: 'Số Data AA từ LDP',
    color: 'warning',
    sub: '% Data AA:',
    icon: <Droplet />,
  },
  {
    id: 4,
    value: 2,
    per: ' 2.4%',
    label: 'Số Data AA từ CX',
    color: 'danger',
    sub: '% Data AA:',
    icon: <Layers />,
  },
  {
    id: 5,
    value: 20,
    per: ' 10%',
    label: 'Số thành viên từ LDP',
    color: 'primary',
    sub: '% Data thành viên:',
    icon: <Moon />,
  },
  {
    id: 6,
    value: 590000,
    label: 'Số thành viên từ CX',
    color: 'warning',
    sub: '% Data thành viên:',
    per: ' 3.6%',
    icon: <Package />,
  },
]

const StatisticMyData = () => {
  return (
    <div>
      <div className="p-3">
        <div className="">
          <h5 className=" font-weight-bold">Tổng số Data</h5>
          <h1 className="text-primary ml-10">282</h1>
          <p>
            Lần cập nhật gần nhất:{' '}
            <span className="font-weight-bold">3 tháng 5, 2021</span>
          </p>
        </div>

        <Row className="align-items-center justify-content-center">
          {statistic.length > 0 &&
            statistic.map(ele => (
              <Col xl="4" md="4" sm="6" key={ele.id}>
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

export default StatisticMyData
