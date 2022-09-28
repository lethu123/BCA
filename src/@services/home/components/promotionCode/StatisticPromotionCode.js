import StatisticComponent from 'components/statistic/StatisticComponent'
import React from 'react'
import {
  Check,
  Command,
  DollarSign,
  Target,
  TrendingUp,
  XOctagon,
} from 'react-feather'
import {Card, Col, Row} from 'reactstrap'

const statistic = [
  {
    id: 1,
    value: 200,
    label: 'Số mã khuyến mãi',
    color: 'primary',
    icon: <Command className="text-primary" size={30} />,
  },
  {
    id: 2,
    value: 10,
    label: 'Số chưa áp dụng',
    color: 'info',
    icon: <Target className="text-info" size={30} />,
  },

  {
    id: 4,
    value: 20,
    label: 'Số ngưng áp dụng',
    color: 'danger',
    icon: <XOctagon className="text-danger" a size={30} />,
  },
  {
    id: 5,
    value: 40,
    label: 'Số mã đã dùng',
    color: 'success',
    icon: <Check className="text-success" size={30} />,
  },
  {
    id: 6,
    value: 590000,
    label: 'Chi phí',
    color: 'info',
    icon: <TrendingUp className="text-info" size={30} />,
  },

  {
    id: 7,
    value: 10000000,
    label: 'Doanh thu',
    color: 'warning',
    icon: <DollarSign className="text-warning" size={30} />,
  },
]

const StatisticPromotionCode = () => {
  return (
    <Card className="my-7  p-5">
      <Row>
        <StatisticComponent statistic={statistic} />
      </Row>
    </Card>
  )
}

export default StatisticPromotionCode
