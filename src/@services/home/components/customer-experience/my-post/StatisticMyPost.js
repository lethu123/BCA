import React from 'react'
import {Card, Col, Row} from 'reactstrap'
import {CheckCircle, Edit2, Eye, MessageSquare, UserCheck} from 'react-feather'

//** Component */
import StatsVertical from '@core/components/widgets/stats/StatsVertical'
import StatisticComponent from 'components/statistic/StatisticComponent'

const statistic = [
  {
    id: 1,
    value: 12,
    label: 'Bài viết   hoạt động',
    color: 'success',
    sub: 'Tăng so với 30 ngày trước:',
    per: ' 8%',
    icon: <Edit2 />,
  },
  {
    id: 2,
    value: 48,
    label: 'Tỉ lệ người xem',
    color: 'warning',
    sub: 'Tăng so với 30 ngày trước:',
    per: ' 8%',
    icon: <Eye />,
  },
  {
    id: 3,
    value: 48,
    label: 'Người đã xem',
    color: 'danger',
    sub: 'Tăng so với 30 ngày trước:',
    per: ' 8%',
    icon: <UserCheck />,
  },
  {
    id: 4,
    value: 48,
    label: 'Bình luận',
    color: 'info',
    sub: 'Tăng so với 30 ngày trước:',
    per: ' 8%',
    icon: <MessageSquare />,
  },
  {
    id: 5,
    value: 30,
    label: 'Tương tác',
    color: 'primary',
    sub: 'Giảm so với 30 ngày trước:',
    per: ' 8%',
    icon: <CheckCircle />,
  },
]

const StatisticMyPost = () => {
  return (
    <div className="mt-2">
      <Card className="p-3">
        <div className="ml-2">
          <h5 className=" font-weight-bold">Tổng số bài viết được phê duyệt</h5>
          <h1 className="text-primary ml-10">12</h1>
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

export default StatisticMyPost
