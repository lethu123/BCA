import React from 'react'
import {Col, Row} from 'reactstrap'
import StatsVertical from '@core/components/widgets/stats/StatsVertical'
import {
  AlertOctagon,
  Award,
  BatteryCharging,
  Calendar,
  CloudDrizzle,
  Loader,
} from 'react-feather'

//scss
import '@core/scss/react/libs/flatpickr/flatpickr.scss'
// component
import DatePickerField from 'components/form/DatePickerField'

const statistic = [
  {
    id: 1,
    value: 200,
    label: 'Số người đăng kí tham gia',
    color: 'warning',
    icon: <AlertOctagon />,
  },
  {
    id: 2,
    value: 82,
    label: 'Số người hoàn thành',
    color: 'success',
    icon: <Award />,
  },
  {
    id: 3,
    value: 10,
    label: 'Số người qua bài kiểm tra',
    color: 'warning',
    icon: <BatteryCharging />,
  },
  {
    id: 4,
    value: 2,
    label: 'Tỷ lệ % hoàn thành',
    color: 'danger',
    icon: <CloudDrizzle />,
  },
  {
    id: 5,
    value: 3,
    label: 'Tỉ lệ % qua bài kiểm tra',
    color: 'primary',
    icon: <Loader />,
  },
]

const StatisticCourse = () => {
  return (
    <div>
      <div className=" d-block d-sm-flex   justify-content-md-end align-items-center w-100 ">
        <div className="d-flex justify-content-sm-end   mt-5 mt-sm-0 align-items-center">
          <Calendar className="text-primary mr-2" size={25} />
          <DatePickerField
            name="time_project"
            // label="Thời gian chạy dự án"
            placeholder="Chọn ngày"
            options={{mode: 'range'}}
            onChange={(name, value) => console.log(name, value)}
          />
        </div>
      </div>
      <div className="p-2 ">
        <div className="">
          <h5 className=" font-weight-bold">Tổng số Khóa học</h5>
          <h1 className="text-primary ml-10">100</h1>
          <p>
            Lần cập nhật gần nhất:{' '}
            <span className="font-weight-bold">3 tháng 5, 2021</span>
          </p>
        </div>

        <Row className="justify-content-center">
          {statistic.length > 0 &&
            statistic.map(ele => (
              <Col xl="2" md="4" sm="6" key={ele.id} className="my-3">
                <StatsVertical
                  classNameCard="mb-0 h-100"
                  icon={ele.icon}
                  color={ele.color}
                  stats={ele.value}
                  statTitle={ele.label}
                />
              </Col>
            ))}
        </Row>
      </div>
    </div>
  )
}

export default StatisticCourse
