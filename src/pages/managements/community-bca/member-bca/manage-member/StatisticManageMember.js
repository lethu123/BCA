import React, {useState} from 'react'
import Flatpickr from 'react-flatpickr'

//scss
import '@core/scss/react/libs/flatpickr/flatpickr.scss'
import {
  Anchor,
  Box,
  Dribbble,
  Layers,
  Pocket,
  Share2,
  Sliders,
  Thermometer,
  Tool,
  Zap,
} from 'react-feather'

// *** Component
import StatisticComponent from 'components/statistic/StatisticComponent'

const statistic = [
  {
    id: 1,
    value: 6000,
    per: ' 75%',
    label: 'Số hoạt động',
    sub: '% Tỉ lệ:',
    color: 'success',
    icon: <Anchor />,
  },
  {
    id: 2,
    value: 500,
    label: 'Số mới đăng kí',
    color: 'warning',
    per: ' 80%',
    sub: '% Tỉ lệ: ',
    icon: <Box />,
  },
  {
    id: 3,
    value: 500,
    per: ' 80%',
    label: 'Ngừng hoạt động',
    sub: '% Tỉ lệ:',
    color: 'danger',
    icon: <Dribbble />,
  },
  {
    id: 4,
    value: 2000,
    per: ' 30%',
    label: 'Thành viên online',
    sub: '% Tỉ lệ: ',
    color: 'primary',
    icon: <Share2 />,
  },
  {
    id: 5,
    value: 6000,
    per: ' 7%',
    label: 'Số AA',
    sub: '% Tỉ lệ: ',
    color: 'danger',
    icon: <Zap />,
  },
  {
    id: 6,
    value: 500,
    per: ' 8%',
    label: 'Số FA',
    sub: '% Tỉ lệ: ',
    color: 'primary',
    icon: <Tool />,
  },
  {
    id: 7,
    value: 500,
    per: ' 8%',
    label: 'Số PUM',
    sub: '% Tỉ lệ: ',
    color: 'warning',
    icon: <Thermometer />,
  },

  {
    id: 8,
    value: 2000,
    per: ' 30%',
    label: 'Số UM',
    sub: '% Tỉ lệ: ',
    color: 'success',
    icon: <Sliders />,
  },
  {
    id: 9,
    value: 2000,
    per: ' 30%',
    label: 'Số BM',
    sub: '% Tỉ lệ: ',
    color: 'warning',
    icon: <Pocket />,
  },

  {
    id: 10,
    value: 2000,
    per: ' 30%',
    label: 'Số BDM',
    sub: '% Tỉ lệ: ',
    color: 'danger',
    icon: <Layers />,
  },
]

const StatisticManageMember = () => {
  //useState
  const [picker, setPicker] = useState(new Date())
  return (
    <div className="mt-1">
      <div className="d-flex justify-content-sm-end w-100">
        <Flatpickr
          value={picker}
          id="ngay_mua_hang_cuoi"
          className="form-control w-250px"
          onChange={date => setPicker(date)}
          options={{
            mode: 'range',
            defaultDate: ['2020-02-01', '2020-02-15'],
          }}
        />
      </div>

      <div
        className="rounded my-3"
        style={{boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.24)'}}
      >
        <div className="pl-3 pt-5">
          <h5 className=" font-weight-bold">Tổng số thành viên</h5>
          <h1 className="text-primary ml-4">8033</h1>
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

export default StatisticManageMember
