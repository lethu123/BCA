import React from 'react'
import {Edit2, MessageSquare, ThumbsUp, UserPlus} from 'react-feather'
import StatsVertical from '@core/components/widgets/stats/StatsVertical'
import {Col, Row} from 'reactstrap'

const StatisticGroup = () => {
  const statistic = {
    c_user: 100,
    c_post: 19,
    c_comment: 34,
    c_like: 378,
  }
  return (
    <div className="mt-3">
      <Row className="align-items-center justify-content-center">
        <Col lg="3" md="4" sm="6">
          <StatsVertical
            icon={<UserPlus size={21} />}
            color="primary"
            stats={statistic.c_user}
            statTitle="Tham gia "
          />
        </Col>
        <Col lg="3" md="4" sm="6">
          <StatsVertical
            icon={<Edit2 size={21} />}
            color="info"
            stats={statistic.c_post}
            statTitle="Bài viết"
          />
        </Col>
        <Col lg="3" md="4" sm="6">
          <StatsVertical
            icon={<MessageSquare size={21} />}
            color="danger"
            stats={statistic.c_comment}
            statTitle="Bình luận"
          />
        </Col>
        <Col lg="3" md="4" sm="6">
          <StatsVertical
            icon={<ThumbsUp size={21} />}
            color="success"
            stats={statistic.c_like}
            statTitle="Thích"
          />
        </Col>
      </Row>
    </div>
  )
}

export default StatisticGroup
