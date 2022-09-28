import React, {useState} from 'react'
import {Button, ButtonGroup, Card, Col, Row} from 'reactstrap'
import Chart from 'react-apexcharts'
import FilterChart from 'components/filter-chart/FilterChart'

// *** Styles
import '@core/scss/react/libs/charts/apex-charts.scss'

const dataColumn = {
  series: [
    {
      name: 'Tổng số data',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: 'Dữ liệu bán ra',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: 'Dữ liệu tồn kho',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ],
  options: {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: [
        '14/08',
        '15/08',
        '16/08',
        '17/08',
        '18/08',
        '19/08',
        '20/08',
        '21/08',
        '22/08',
      ],
    },
    yaxis: {
      title: {
        text: '$ (thousands)',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return '$ ' + val + ' thousands'
        },
      },
    },
  },
}

const donutColors = {
  series1: '#E6641F',
  series2: '#28c76f',
  series3: '#149D99',
  series4: '#ff9f43',
  series5: '#ea5455',
}

const dataDonut = {
  options: {
    legend: {
      show: true,
      position: 'bottom',
    },
    labels: [
      'Mới đăng ký',
      'Hẹn gọi lại',
      'Chưa bắt máy',
      'Hoàn thành FA',
      'Hoàn thành AA',
    ],

    colors: [
      donutColors.series1,
      donutColors.series3,
      donutColors.series5,
      donutColors.series2,
      donutColors.series4,
    ],
    dataLabels: {
      enabled: true,
      formatter(val, opt) {
        return `${parseInt(val)}%`
      },
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              fontSize: '2rem',
              fontFamily: 'Montserrat',
            },
            value: {
              fontSize: '1rem',
              fontFamily: 'Montserrat',
              formatter(val) {
                return `${parseInt(val)}%`
              },
            },
            total: {
              show: true,
              fontSize: '1.5rem',
              label: 'Tổng số',
              formatter(w) {
                return '31%'
              },
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 380,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 320,
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    fontSize: '1.5rem',
                  },
                  value: {
                    fontSize: '1rem',
                  },
                  total: {
                    fontSize: '1.5rem',
                  },
                },
              },
            },
          },
        },
      },
    ],
  },
  series: [85, 16, 50, 50, 100],
}

const dataFilterChart = [
  {id: 1, name: 'Tổng số data'},
  {id: 2, name: 'Data đã bán'},
  {id: 3, name: 'Data tồn kho'},
  {id: 4, name: 'Data AA'},
  {id: 5, name: 'Tỷ lệ chuyển đồi Data'},
  {id: 6, name: 'Data FA'},
  {id: 7, name: 'Tỷ lệ chuyển đổi FA'},
  {id: 8, name: 'Data hoàn'},
  {id: 9, name: 'Doanh thu'},
]

const ChartManageData = () => {
  const [rSelected, setRSelected] = useState(null)
  return (
    <div>
      <div className="mb-3">
        <ButtonGroup className="mb-1">
          <Button
            color="primary"
            onClick={() => setRSelected(1)}
            active={rSelected === 1}
            outline={rSelected !== 1}
          >
            Ngày
          </Button>
          <Button
            color="primary"
            onClick={() => setRSelected(2)}
            active={rSelected === 2}
            outline={rSelected !== 2}
          >
            Tuần
          </Button>
          <Button
            color="primary"
            onClick={() => setRSelected(3)}
            active={rSelected === 3}
            outline={rSelected !== 3}
          >
            Tháng
          </Button>
        </ButtonGroup>
      </div>
      <Row>
        <Col lg="7">
          <Card id="chart" className="p-4  ">
            <FilterChart data={dataFilterChart} />
            <Chart
              options={dataColumn.options}
              series={dataColumn.series}
              type="bar"
              height={350}
            />
          </Card>
        </Col>
        <Col lg="5">
          <Card className="p-4 ">
            <p className="mb-0 font-weight-bold text-primary">
              Hiệu suất dữ liệu bán ra
            </p>
            <p className="pb-6">
              Lần cập nhật:{' '}
              <span className="font-weight-bold">3 tháng 5,2021</span>
            </p>
            <Chart
              options={dataDonut.options}
              series={dataDonut.series}
              type="donut"
              height={350}
            />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ChartManageData
