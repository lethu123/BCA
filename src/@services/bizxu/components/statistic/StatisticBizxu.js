import React, {useState} from 'react'
import {
  Card,
  Col,
  CustomInput,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledButtonDropdown,
} from 'reactstrap'
import StatsVertical from '@core/components/widgets/stats/StatsVertical'

//scss
import '@core/scss/react/libs/flatpickr/flatpickr.scss'
import {
  AlertTriangle,
  BarChart2,
  Box,
  Calendar,
  Cast,
  DollarSign,
  Dribbble,
  Figma,
  Filter,
  Server,
} from 'react-feather'
import DatePickerField from 'components/form/DatePickerField'
import StatisticComponent from 'components/statistic/StatisticComponent'

const data = [
  {id: 1, name: 'Chọn tất cả', check: false},
  {id: 2, name: 'Theo cấp data center', check: false},
]

const statistic = [
  {
    id: 1,
    value: 123,
    per: ' 100%',
    label: 'Giao dịch thành công',
    sub: '% Tỉ lệ:',
    color: 'success',
    icon: <Box />,
  },
  {
    id: 2,
    value: 6000000,
    label: 'Tổng số BizXu',
    color: 'warning',
    hasSub: true,
    icon: <Dribbble />,
  },
  {
    id: 3,
    value: 4000000,
    per: ' 66,6%',
    label: 'Số dư BizXu',
    sub: '% Dư trong ví:',
    color: 'danger',
    icon: <Server />,
  },
  {
    id: 4,
    value: 36000000,
    per: ' 60%',
    label: 'Số BizXu mua data',
    sub: '% Mua Data',
    color: 'warning',
    icon: <Figma />,
  },
  {
    id: 5,
    value: 4000000,
    per: ' 10%',
    label: 'Số BizXu hoàn',
    sub: '% Dịch vụ CX:',
    color: 'danger',
    icon: <Cast />,
  },
  {
    id: 6,
    value: 4000000,
    per: ' 7.6%',
    label: 'BizXu mua dịch vụ',
    sub: '% Đăng kí LDP:',
    color: 'primary',
    icon: <BarChart2 />,
  },
  {
    id: 7,
    value: 4000000,
    per: ' 6.6%',
    label: 'Doanh thu bảo hiểm',
    sub: '% Được hoàn:',
    color: 'warning',
    icon: <AlertTriangle />,
  },

  {
    id: 8,
    value: 5000000,
    label: 'Tỉ lệ chi phí',
    sub: '% Được hoàn:',
    per: ' 6.6%',
    color: 'success',
    icon: <DollarSign />,
  },
]

const StatisticBizxu = () => {
  //useState
  const [dataFilter, setDataFilter] = useState(data)
  return (
    <div>
      <div className=" d-block d-sm-flex mb-1  justify-content-md-end w-100  align-items-center">
        <UncontrolledButtonDropdown direction="left" className="d-block">
          <DropdownToggle
            color="primary"
            caret
            outline
            className="mr-2 py-1 px-2"
          >
            <Filter size={20} /> Cấp data center
          </DropdownToggle>
          <DropdownMenu className="p-2 w-250px">
            {dataFilter.length > 0 &&
              dataFilter.map((ele, idx) => (
                <CustomInput
                  key={ele.id}
                  inline
                  type="checkbox"
                  id={ele.id}
                  checked={ele.check}
                  onChange={() => {
                    if (idx === 0) {
                      setDataFilter(
                        dataFilter.map(item => ({
                          ...item,
                          check: !dataFilter[0].check,
                        })),
                      )
                    } else {
                      setDataFilter(
                        dataFilter.map(item =>
                          item.id === ele.id
                            ? {...item, check: !item.check}
                            : item,
                        ),
                      )
                    }
                  }}
                  label={ele.name}
                  className="mb-2"
                />
              ))}
          </DropdownMenu>
        </UncontrolledButtonDropdown>
        <div className="d-flex justify-content-sm-end  align-items-center mt-5 mt-sm-0">
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
      <Card className="p-3">
        <div className="">
          <h5 className=" font-weight-bold">Tổng số Giao dịch</h5>
          <h1 className="text-primary ml-10">123</h1>
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

export default StatisticBizxu
