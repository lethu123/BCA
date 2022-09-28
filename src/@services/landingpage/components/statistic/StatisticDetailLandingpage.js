import React from 'react'
import {Col, Row} from 'reactstrap'
import StatsVertical from '@core/components/widgets/stats/StatsVertical'

//scss
import '@core/scss/react/libs/flatpickr/flatpickr.scss'
import {Calendar, Database} from 'react-feather'
import DatePickerField from 'components/form/DatePickerField'
import StatisticComponent from 'components/statistic/StatisticComponent'

const statistic = [
  {
    id: 1,
    value: 70,
    per: ' 25%',
    label: 'Số Data AA',
    sub: '% Số Data AA:',
    color: 'warning',
  },
  {
    id: 2,
    value: 110,
    per: ' 39%',
    label: 'Số đại lý từ LDP',
    sub: '% Số đại lý từ LDP:',
    color: 'success',
  },
  {
    id: 3,
    value: 500,
    label: 'Số Xem landingpage',
    color: 'warning',
    hasSub: true,
  },
  {
    id: 4,
    value: 350,
    label: 'Số đăng ký LDP',
    color: 'danger',
    hasSub: true,
  },
  {
    id: 5,
    value: 40,
    label: 'Số Data đang giữ',
    color: 'primary',
    hasSub: true,
  },
  {
    id: 6,
    value: 590000,
    label: 'Phí LandingPage',
    color: 'warning',
    hasSub: true,
  },
  {
    id: 7,
    value: 100000000,
    label: 'Doanh thu',
    color: 'danger',
    hasSub: true,
  },
]

const StatisticDetailLandingpage = () => {
  return (
    <div>
      <div className="d-flex justify-content-end w-100 mt-5">
        <div>
          <div className="d-flex justify-content-end  align-items-center">
            <Calendar className="text-primary mr-2" size={25} />
            <DatePickerField
              name="time_project"
              // label="Thời gian chạy dự án"
              options={{mode: 'range'}}
              onChange={(name, value) => console.log(name, value)}
            />
          </div>
        </div>
      </div>
      <div className="p-5 ">
        <div className="ml-5 mr-10">
          <h5 className=" font-weight-bold">Tổng số Data</h5>
          <h1 className="text-primary ml-10">282</h1>
          <p>
            Lần cập nhật gần nhất:{' '}
            <span className="font-weight-bold">3 tháng 5, 2021</span>
          </p>
        </div>

        <StatisticComponent statistic={statistic} />
      </div>
    </div>
  )
}

export default StatisticDetailLandingpage
