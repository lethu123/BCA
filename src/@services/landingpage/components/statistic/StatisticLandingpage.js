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
  Battery,
  Calendar,
  Codepen,
  Feather,
  Filter,
  Framer,
  GitPullRequest,
  Layers,
  Loader,
  Moon,
} from 'react-feather'
import DatePickerField from 'components/form/DatePickerField'
import StatisticComponent from 'components/statistic/StatisticComponent'

const data = [
  {id: 1, name: 'Chọn tất cả', check: false},
  {id: 2, name: 'Cấp 1', check: false},
  {id: 3, name: 'Cấp 2', check: false},
  {id: 4, name: 'Cấp 3', check: false},
  {id: 5, name: 'Cấp 4', check: false},
]

const statistic = [
  {
    id: 1,
    value: 800,
    per: ' 89%',
    label: 'Số LDP mới ',
    sub: '% Kích hoạt:',
    color: 'warning',
    icon: <Framer />,
  },
  {
    id: 2,
    value: 20000,
    per: ' 20%',
    label: 'Số LDP  hoạt động',
    sub: '% Tỉ lệ LDP:',
    color: 'success',
    icon: <Codepen />,
  },
  {
    id: 3,
    value: 1000,
    per: ' 5%',
    label: 'Số LDP tạm khóa',
    sub: '% Số Data AA:',
    color: 'warning',
    icon: <Battery />,
  },
  {
    id: 4,
    value: 22000,
    label: 'Số data AA',
    color: 'danger',
    hasSub: true,
    icon: <Feather />,
  },
  {
    id: 5,
    value: 590000,
    label: 'Data chuyển đổi ',
    color: 'primary',
    hasSub: true,
    icon: <GitPullRequest />,
  },
  {
    id: 6,
    value: 10000000,
    label: 'Số data FA',
    color: 'warning',
    hasSub: true,
    icon: <Layers />,
  },
  {
    id: 7,
    value: 20,
    label: 'Tỉ lệ chuyển đổi FA',
    color: 'danger',
    hasSub: true,
    icon: <Loader />,
  },
  {
    id: 8,
    value: 100000000,
    label: 'Doanh thu',
    color: 'success',
    hasSub: true,
    icon: <Moon />,
  },
]

const StatisticLandingpage = () => {
  //useState
  const [dataFilter, setDataFilter] = useState(data)
  return (
    <div>
      <div className=" d-block d-sm-flex justify-content-md-end w-100  align-items-center">
        <UncontrolledButtonDropdown direction="left">
          <DropdownToggle
            color="primary"
            caret
            outline
            className="mr-2 p-1 d-block"
          >
            <Filter size={20} /> Cấp data center
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
        <div className="d-flex mt-5 mt-sm-0 justify-content-sm-end  align-items-center">
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
        <div className="d-md-flex d-block">
          <div className="ml-2 mr-10 mb-10 mb-md-0">
            <h5 className=" font-weight-bold">Tổng số Landingpage đăng kí</h5>
            <h1 className="text-primary ml-10">1,000</h1>
            <p>
              Lần cập nhật gần nhất:{' '}
              <span className="font-weight-bold">3 tháng 5, 2021</span>
            </p>
          </div>
          <div className="ml-5">
            <h5 className=" font-weight-bold">Tổng số Data</h5>
            <h1 className="text-primary ml-10">1,000</h1>
          </div>
        </div>

        <StatisticComponent statistic={statistic} />
      </Card>
    </div>
  )
}

export default StatisticLandingpage
