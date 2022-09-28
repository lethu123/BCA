import React from 'react'
import {Card, Col, Row} from 'reactstrap'
//scss
import '@core/scss/react/libs/flatpickr/flatpickr.scss'
import {Bell, Copy, Feather, Figma, Package, Pocket} from 'react-feather'
import StatisticComponent from 'components/statistic/StatisticComponent'

const statistic = [
  {
    id: 1,
    value: 70,
    per: ' 25%',
    label: 'Số Data AA',
    sub: '% Số Data AA',
    color: 'primary',
    icon: <Copy className="text-primary" size={30} />,
  },
  {
    id: 2,
    value: 110,
    per: ' 39%',
    label: 'Số đại lý từ LDP',
    sub: '% Số đại lý từ LDP',
    color: 'info',
    icon: <Bell className="text-info" size={30} />,
  },

  {
    id: 4,
    value: 350,
    hasSub: true,
    label: 'Số đăng kí LDP',
    color: 'danger',
    icon: <Figma className="text-danger" a size={30} />,
  },
  {
    id: 5,
    value: 40,
    label: 'Số Data đang giữ',
    color: 'success',
    hasSub: true,
    icon: <Feather className="text-success" size={30} />,
  },
  {
    id: 6,
    value: 590000,
    label: 'Phí landingpage',
    color: 'info',
    hasSub: true,
    icon: <Package className="text-info" e size={30} />,
  },

  {
    id: 7,
    value: 10000000,
    label: 'Doanh thu',
    color: 'warning',
    hasSub: true,
    icon: <Pocket className="text-warning" t size={30} />,
  },
]

const StatisticManageData = () => {
  return (
    <div className="mb-3">
      <Card className=" my-7 p-3">
        <div>
          <h5 className=" font-weight-bold">Tổng số Data</h5>
          <h1 className="text-primary ml-10">282</h1>
          <p>
            Lần cập nhật gần nhất:{' '}
            <span className="font-weight-bold">3 tháng 5, 2021</span>
          </p>
        </div>

        <StatisticComponent statistic={statistic} />
      </Card>
    </div>
  )
}

export default StatisticManageData
