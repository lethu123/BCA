import React from 'react'
import {Card, Col, Row} from 'reactstrap'

//scss
import '@core/scss/react/libs/flatpickr/flatpickr.scss'
import {
  BarChart2,
  Calendar,
  Clipboard,
  Coffee,
  Inbox,
  PieChart,
  Server,
  Sliders,
  BookOpen,
} from 'react-feather'
import DatePickerField from 'components/form/DatePickerField'
import StatisticComponent from 'components/statistic/StatisticComponent'

const statistic = [
  {
    id: 1,
    value: 200,
    per: ' 71%',
    label: 'Số Data Landingpage',
    sub: '% Data LDP: ',
    color: 'primary',
    icon: <PieChart />,
  },
  {
    id: 2,
    value: 82,
    per: ' 29%',
    label: 'Số Data CX',
    sub: '% Data CX: ',
    color: 'info',
    icon: <Server />,
  },
  {
    id: 3,
    value: 10,
    per: ' 5%',
    label: 'Số Data AA từ LDP',
    color: 'danger',
    sub: '% Data AA: ',
    icon: <Sliders />,
  },
  {
    id: 4,
    value: 2,
    per: ' 2.4%',
    label: 'Số Data AA từ CX',
    color: 'success',
    sub: '% Data AA: ',
    icon: <Inbox />,
  },
  {
    id: 5,
    value: 20,
    per: ' 10%',
    label: 'Số thành viên từ LDP',
    color: 'info',
    sub: '% Data thành viên: ',
    icon: <Coffee />,
  },
  {
    id: 6,
    value: 590000,
    label: 'Số thành viên từ CX',
    color: 'warning',
    sub: '% Data thành viên: ',
    per: ' 3.6%',
    icon: <BookOpen />,
  },

  {
    id: 7,
    value: 10000000,
    label: 'Số BizXu mua Data',
    color: 'primary',
    hasSub: true,
    icon: <BarChart2 />,
  },
  {
    id: 8,
    value: 10000000,
    label: 'Doanh thu',
    color: 'info',
    hasSub: true,
    icon: <Clipboard />,
  },
]

const StatisticManageData = () => {
  return (
    <div>
      <div className="d-flex justify-content-end w-100  mb-1 align-items-center">
        <Calendar className="text-primary mr-2" size={25} />
        <DatePickerField
          name="picker"
          // label="Date picker Field"
          placeholder="lọc theo ngày"
          options={{mode: 'range'}}
          onChange={(name, value) => console.log(name, value)}
        />
      </div>
      <Card className=" mb-5 p-2">
        <div className="ml-2 pt-2">
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
