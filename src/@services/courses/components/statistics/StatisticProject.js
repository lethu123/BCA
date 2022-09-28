import React, {useState} from 'react'
import {
  Col,
  CustomInput,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledButtonDropdown,
} from 'reactstrap'
import StatsVertical from '@core/components/widgets/stats/StatsVertical'
import {
  AlertOctagon,
  Award,
  BatteryCharging,
  Calendar,
  CloudDrizzle,
  Filter,
  Loader,
  Package,
  Wind,
  Zap,
} from 'react-feather'

//scss
import '@core/scss/react/libs/flatpickr/flatpickr.scss'
import DatePickerField from 'components/form/DatePickerField'

const data = [
  {id: 1, name: 'Chọn tất cả', check: false},
  {id: 2, name: 'Dự án A', check: false},
  {id: 3, name: 'Dự án B', check: false},
  {id: 4, name: 'Dự án C', check: false},
]

const type = [
  {id: 1, name: 'Chọn tất cả', check: false},
  {id: 2, name: 'Khách hàng tiềm năng', check: false},
  {id: 3, name: 'Ứng viên tiềm năng', check: false},
]

const statistic = [
  {
    id: 1,
    value: 200,
    per: ' 71%',
    label: 'Data đã bán',
    sub: '% Data LDP:',
    color: 'warning',
    icon: <AlertOctagon />,
  },
  {
    id: 2,
    value: 82,
    per: ' 29%',
    label: 'Data tồn kho',
    sub: '% Data CX:',
    color: 'success',
    icon: <Award />,
  },
  {
    id: 3,
    value: 10,
    per: ' 5%',
    label: 'Data AA',
    sub: '% Data AA:',
    color: 'warning',
    icon: <BatteryCharging />,
  },
  {
    id: 4,
    value: 2,
    per: ' 20%',
    label: 'Tỷ lệ chuyển đổi AA',
    sub: '% Data AA:',
    color: 'danger',
    icon: <CloudDrizzle />,
  },
  {
    id: 5,
    value: 3,
    per: ' 3.6%',
    label: 'Data FA',
    sub: '% Data thành viên:',
    color: 'primary',
    icon: <Loader />,
  },
  {
    id: 6,
    value: 3,
    per: ' 3.6%',
    label: 'Tỷ lệ chuyển đổi FA',
    sub: '% Data thành viên:',
    color: 'warning',
    icon: <Package />,
  },
  {
    id: 7,
    value: 20,
    per: ' 10%',
    label: 'Data hoàn',
    sub: '% Data thành viên:',
    color: 'danger',
    icon: <Zap />,
  },
  {
    id: 8,
    value: 100000,
    label: 'Doanh thu',
    color: 'success',
    hasSub: true,
    icon: <Wind />,
  },
]

const StatisticProject = () => {
  //useState
  const [dataFilter, setDataFilter] = useState(data)
  const [dataType, setDataType] = useState(type)

  return (
    <div>
      <div className=" d-block d-sm-flex   justify-content-md-end align-items-center w-100 mt-5">
        <UncontrolledButtonDropdown direction="left">
          <DropdownToggle
            color="success"
            caret
            outline
            className="mr-2 py-1 px-2"
          >
            <Filter size={20} /> Kiểu dự án
          </DropdownToggle>
          <DropdownMenu className="p-3 w-150px">
            {dataType.length > 0 &&
              dataType.map((ele, idx) => (
                <CustomInput
                  key={ele.id}
                  inline
                  type="checkbox"
                  id={ele.id}
                  checked={ele.check}
                  onChange={() => {
                    if (idx === 0) {
                      setDataType(
                        dataType.map(item => ({
                          ...item,
                          check: !dataType[0].check,
                        })),
                      )
                    } else {
                      setDataType(
                        dataType.map(item =>
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
        <UncontrolledButtonDropdown direction="left">
          <DropdownToggle
            color="primary"
            caret
            outline
            className="mr-2 py-1 px-2"
          >
            <Filter size={20} /> Dự án
          </DropdownToggle>
          <DropdownMenu className="p-3 w-150px">
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
      <div className="p-5 ">
        <div className="ml-5">
          <h5 className=" font-weight-bold">Tổng số Data</h5>
          <h1 className="text-primary ml-10">100</h1>
          <p>
            Lần cập nhật gần nhất:{' '}
            <span className="font-weight-bold">3 tháng 5, 2021</span>
          </p>
        </div>

        <Row className="align-items-center justify-content-center">
          {statistic.length > 0 &&
            statistic.map(ele => (
              <Col xl="3" md="4" sm="6" key={ele.id}>
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

export default StatisticProject
