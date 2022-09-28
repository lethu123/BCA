import React from 'react'
import {
  MessageSquare,
  Share2,
  ThumbsUp,
  UserCheck,
  UserPlus,
  Users,
} from 'react-feather'
import {Col, Row} from 'reactstrap'
import StatsVertical from '@core/components/widgets/stats/StatsVertical'

const StatisticFacebookOfUser = ({data}) => {
  return (
    <div className="mt-3">
      <Row className="justify-content-center">
        <Col xl="2" lg="3" md="4" sm="6" className="my-2">
          <StatsVertical
            icon={<UserPlus size={21} />}
            color="warning"
            stats={data.total_friends_requests}
            statTitle="Yêu cầu kết bạn"
          />
        </Col>
        <Col xl="2" lg="3" md="4" sm="6" className="my-2">
          <StatsVertical
            icon={<UserCheck size={21} />}
            color="secondary"
            stats={data.total_requests_friends}
            statTitle="Lời mời kết bạn"
          />
        </Col>
        <Col xl="2" lg="3" md="4" sm="6" className="my-2">
          <StatsVertical
            icon={<Users size={21} />}
            color="info"
            stats={data.total_friends}
            statTitle="Bạn bè"
            className="StatisticFbUser"
          />
        </Col>
        <Col xl="2" lg="3" md="4" sm="6" className="my-2">
          <StatsVertical
            icon={<MessageSquare size={21} />}
            color="danger"
            stats={data.total_comments}
            statTitle="Bình luận"
            className="StatisticFbUser"
          />
        </Col>
        <Col xl="2" lg="3" md="4" sm="6" className="my-2">
          <StatsVertical
            icon={<ThumbsUp size={21} />}
            color="primary"
            stats={data.total_likes}
            statTitle="Thích"
            className="StatisticFbUser"
          />
        </Col>

        <Col xl="2" lg="3" md="4" sm="6" className="my-2">
          <StatsVertical
            icon={<Share2 size={21} />}
            color="warning"
            stats={data.total_shares}
            statTitle="Chia sẻ"
            className="StatisticFbUser"
          />
        </Col>
      </Row>
    </div>
  )
}

export default StatisticFacebookOfUser
