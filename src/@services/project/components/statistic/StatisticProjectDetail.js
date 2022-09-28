import React from 'react'
import {Card, Col, Row} from 'reactstrap'
import StatsVertical from '@core/components/widgets/stats/StatsVertical'
import {
  Airplay,
  Calendar,
  CloudLightning,
  Command,
  Dribbble,
  Key,
} from 'react-feather'
import DatePickerField from 'components/form/DatePickerField'

//scss
import '@core/scss/react/libs/flatpickr/flatpickr.scss'
import StatisticComponent from 'components/statistic/StatisticComponent'

const statistic = [
  {
    id: 1,
    value: 70,
    per: ' 71%',
    label: 'Số Data AA',
    sub: '% Số Data AA:',
    color: 'warning',
    icon: <Key />,
  },
  {
    id: 2,
    value: 82,
    per: ' 29%',
    label: 'Đại lý từ dự án',
    sub: 'Đại lý từ dự án:',
    color: 'success',
    icon: <Dribbble />,
  },
  {
    id: 3,
    value: 10,
    label: 'Số data đang giữ',
    color: 'warning',
    hasSub: true,
    icon: <Command />,
  },
  {
    id: 4,
    value: 2,
    label: 'Chi phí',
    color: 'danger',
    hasSub: true,
    icon: <Airplay />,
  },
  {
    id: 5,
    value: 100000,
    label: 'Doanh thu',
    color: 'success',
    hasSub: true,
    icon: <CloudLightning />,
  },
]

const StatisticProjectDetail = () => {
  //useState
  return (
    <div>
      <div className="d-flex justify-content-end w-100 mt-5 align-items-center">
        <Calendar className="text-primary mr-2" size={25} />
        <DatePickerField
          name="time_project"
          // label="Thời gian chạy dự án"
          options={{mode: 'range'}}
          onChange={(name, value) => console.log(name, value)}
        />
      </div>

      <Card className="p-5 ">
        <div className="ml-5">
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

export default StatisticProjectDetail
