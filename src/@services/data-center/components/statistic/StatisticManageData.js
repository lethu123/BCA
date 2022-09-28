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
  Activity,
  Calendar,
  Codesandbox,
  Command,
  CornerDownRight,
  DollarSign,
  Filter,
  Grid,
  Shuffle,
  UserCheck,
} from 'react-feather'
import DatePickerField from 'components/form/DatePickerField'
import StatisticComponent from 'components/statistic/StatisticComponent'

const data = [
  {id: 1, name: 'Chọn tất cả', check: false},
  {id: 2, name: 'Data center', check: false},
  {id: 3, name: 'LDP cá nhân', check: false},
  {id: 4, name: 'CX', check: false},
]

const statistic = [
  {
    id: 1,
    value: 200,
    per: ' 71%',
    label: 'Data đã bán',
    sub: '% Data LDP:',
    color: 'warning',
    icon: <Codesandbox />,
  },
  {
    id: 2,
    value: 82,
    per: ' 29%',
    label: 'Data tồn kho',
    sub: '% Data CX:',
    color: 'success',
    icon: <Command />,
  },
  {
    id: 3,
    value: 10,
    per: ' 5%',
    label: 'Data AA',
    sub: '% Data AA:',
    color: 'warning',
    icon: <Grid />,
  },
  {
    id: 4,
    value: 2,
    per: ' 20%',
    label: 'Tỷ lệ chuyển đổi AA',
    sub: '% Data AA:',
    color: 'danger',
    icon: <Shuffle />,
  },
  {
    id: 5,
    value: 3,
    per: ' 3.6%',
    label: 'Data FA',
    sub: '% Data thành viên:',
    color: 'primary',
    icon: <UserCheck />,
  },
  {
    id: 6,
    value: 3,
    per: ' 3.6%',
    label: 'Tỷ lệ chuyển đổi FA',
    sub: '% Data thành viên:',
    color: 'warning',
    icon: <Activity />,
  },
  {
    id: 7,
    value: 20,
    per: ' 10%',
    label: 'Data hoàn',
    sub: '% Data thành viên:',
    color: 'danger',
    icon: <CornerDownRight />,
  },
  {
    id: 8,
    value: 100000,
    label: 'Doanh thu',
    color: 'success',
    hasSub: true,
    icon: <DollarSign />,
  },
]

const StatisticManageData = () => {
  //useState
  const [dataFilter, setDataFilter] = useState(data)
  return (
    <div>
      <div className="d-block d-sm-flex justify-content-between justify-content-md-end align-items-center w-100">
        <UncontrolledButtonDropdown direction="left">
          <DropdownToggle color="primary" className="mr-2 p-1 rounded-lg">
            <Filter size={20} /> Lọc theo nguồn
          </DropdownToggle>
          <DropdownMenu className="p-3">
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
        <div className="d-flex mt-5 mt-sm-0  justify-content-sm-end  align-items-center">
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
      <Card className="p-2">
        <div className="ml-1">
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
