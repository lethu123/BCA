import {React, Fragment} from 'react'
import {
  PieChart,
  Users,
  GitPullRequest,
  Layers,
  ThumbsUp,
  MessageCircle,
} from 'react-feather'
import StatsVertical from '@core/components/widgets/stats/StatsVertical'
import {CardBody} from 'reactstrap'

import {CustomerLeadsQuery} from '@services/customer-leads'

const StatisticCustomerLeads = () => {
  const {data: statistic} = CustomerLeadsQuery.useListStatistics()
  if (!statistic) return null
  return (
    <Fragment>
      <div className="mb-3" style={{backgroundColor: 'rgb(255, 255, 255)'}}>
        <CardBody>
          <h5 className="mb-2">
            {' '}
            <PieChart color="#1eac52" className="mr-1" />
            Thống kê
          </h5>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat( auto-fit, minmax(250px, 1fr) )',
              gap: '10px',
            }}
          >
            <div className="mb-1">
              <StatsVertical
                icon={<Users size={21} />}
                color="info"
                stats={statistic.ss_basic_info}
                statTitle="Profile có đầy đủ thông tin cơ bản "
              />
            </div>

            <div className="mb-1">
              <StatsVertical
                icon={<GitPullRequest size={21} />}
                color="warning"
                stats={statistic.ss_ur_interacts}
                statTitle="Profile có tương tác trong vòng 1 tuần trở lại"
              />
            </div>

            <div className="mb-1">
              <StatsVertical
                icon={<Layers size={21} />}
                color="danger"
                stats={statistic.ss_ur_friends}
                statTitle="Profile có từ 1000 bạn trở lên"
              />
            </div>

            <div className="mb-1">
              <StatsVertical
                icon={<ThumbsUp size={21} />}
                color="primary"
                stats={statistic.ss_ur_reactions}
                statTitle="Profile có số lượt like trung bình/post trên trang cá nhân từ 5 trở lên"
              />
            </div>
            <div className="mb-1">
              <StatsVertical
                className="mt-2"
                icon={<MessageCircle size={21} />}
                color="success"
                stats={statistic.ss_ur_comments}
                statTitle="Profile có số lượt comment trung bình/post trên trang cá nhân từ 10 trở lên"
              />
            </div>
          </div>
        </CardBody>
      </div>
    </Fragment>
  )
}

export default StatisticCustomerLeads
