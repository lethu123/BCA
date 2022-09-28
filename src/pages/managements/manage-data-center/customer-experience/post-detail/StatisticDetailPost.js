import React, {useState} from 'react'
import {
  Col,
  CustomInput,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledButtonDropdown,
} from 'reactstrap'
import {
  Archive,
  Bell,
  Box,
  Calendar,
  CloudLightning,
  Database,
  Filter,
  GitCommit,
  Minimize2,
  Sun,
} from 'react-feather'
import StatsVertical from '@core/components/widgets/stats/StatsVertical'

//scss
import '@core/scss/react/libs/flatpickr/flatpickr.scss'
import DatePickerField from 'components/form/DatePickerField'

const statistic = [
  {
    id: 1,
    value: 70,
    label: 'Số Data UVTN',
    color: 'success',
    icon: <Archive />,
  },
  {
    id: 2,
    value: 110,
    label: 'Số Data đại lý',
    color: 'warning',
    icon: <Bell />,
  },
  {
    id: 3,
    value: '40%',
    label: 'Tỷ lệ chuyển đổi tuyển dụng',
    color: 'danger',
    icon: <Box />,
  },
  {
    id: 4,
    value: 110,
    label: 'Số Data KHTN',
    color: 'info',
    icon: <CloudLightning />,
  },
  {
    id: 5,
    value: 100,
    label: 'Số KH',
    color: 'primary',
    icon: <GitCommit />,
  },
  {
    id: 6,
    value: '5%',
    label: 'Tỉ lệ chuyển đổi KH',
    color: 'warning',
    icon: <Minimize2 />,
  },
  {
    id: 7,
    value: '5%',
    label: 'Tỉ lệ chuyển đổi',
    color: 'danger',
    icon: <Sun />,
  },
]
const data = [
  {id: 1, name: 'Chọn tất cả', check: false},
  {id: 2, name: 'Theo cấp data center', check: false},
]

const StatisticDetailPost = () => {
  //useState
  const [dataFilter, setDataFilter] = useState(data)
  return (
    <div>
      <div className="d-flex justify-content-end w-100 mt-5">
        <UncontrolledButtonDropdown direction="left">
          <DropdownToggle
            color="primary"
            caret
            outline
            className="mr-2 py-1 px-2"
          >
            <Filter size={20} className="mr-2" /> Nhãn Data
          </DropdownToggle>
          <DropdownMenu className="p-3 w-250px">
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
        <div className="d-flex justify-content-end  align-items-center ">
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
      <div className="p-5 ">
        <div className="ml-5">
          <h5 className=" font-weight-bold">Tổng số Data</h5>
          <h1 className="text-primary ml-10">282</h1>
          <p>
            Lần cập nhật gần nhất:{' '}
            <span className="font-weight-bold">3 tháng 5, 2021</span>
          </p>
        </div>

        <Row className="align-items-center justify-content-center ">
          {statistic.length > 0 &&
            statistic.map(ele => (
              <Col key={ele.id} xl="3" md="4" sm="6">
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

export default StatisticDetailPost
