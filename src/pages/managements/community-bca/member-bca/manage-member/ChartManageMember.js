import React, {useState} from 'react'
import {Button, ButtonGroup, Card} from 'reactstrap'
import Chart from 'react-apexcharts'
import FilterChart from 'components/filter-chart/FilterChart'
// *** Styles
import '@core/scss/react/libs/charts/apex-charts.scss'

const dataColumn = {
  series: [
    {
      name: 'Số LDP đăng kí',
      data: [
        76, 85, 101, 98, 87, 105, 91, 114, 94, 42, 45, 98, 76, 87, 62, 77, 89,
        34,
      ],
    },
    {
      name: 'Số LDP tạm khóa',
      data: [
        44, 55, 57, 56, 61, 58, 63, 60, 66, 67, 25, 64, 45, 73, 49, 45, 65, 55,
      ],
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
        '23/08',
        '24/08',
        '25/08',
        '26/08',
        '27/08',
        '28/08',
        '29/08',
        '30/08',
        '31/08',
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

const dataFilterChart = [
  {id: 1, name: 'Tổng số thành viên'},
  {id: 2, name: 'Số thành viên đang hoạt động'},
  {id: 3, name: 'Số thành viên ngừng hoạt động'},
  {id: 4, name: 'Số thành viên mới'},
  {id: 5, name: 'Số thành viên không đăng nhập trong 7 ngày'},
  {id: 6, name: 'Số AA'},
  {id: 7, name: 'Số FA'},
  {id: 8, name: 'Số PUM'},
  {id: 9, name: 'Số UM'},
  {id: 10, name: 'Số BM'},
  {id: 11, name: 'Số BDM Up'},
]

const ChartManageMember = () => {
  const [rSelected, setRSelected] = useState(null)
  return (
    <div className="">
      <div className="mb-3">
        <ButtonGroup className="mb-1">
          <Button
            color="primary"
            onClick={() => setRSelected(1)}
            active={rSelected === 1}
            outline
          >
            Ngày
          </Button>
          <Button
            color="primary"
            onClick={() => setRSelected(2)}
            active={rSelected === 2}
            outline
          >
            Tuần
          </Button>
          <Button
            color="primary"
            onClick={() => setRSelected(3)}
            active={rSelected === 3}
            outline
          >
            Tháng
          </Button>
        </ButtonGroup>
      </div>

      <Card id="chart" className="p-4  ">
        <FilterChart data={dataFilterChart} />
        <Chart
          options={dataColumn.options}
          series={dataColumn.series}
          type="bar"
          height={350}
        />
      </Card>
    </div>
  )
}

export default ChartManageMember
