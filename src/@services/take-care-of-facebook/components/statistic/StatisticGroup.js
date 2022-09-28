import React from 'react'
import {Edit2, MessageSquare, ThumbsUp, UserPlus, Users} from 'react-feather'
import StatsVertical from '@core/components/widgets/stats/StatsVertical'
import {Col, Row} from 'reactstrap'

const StatisticGroup = () => {
  const statistic = {
    total_request_join_group: 200,
    total_group_joined: 40,
    total_post: 400,
    total_comment: 400,
    total_like: 1000,
  }
  return (
    <div className="mt-3">
      <Row className=" justify-content-center">
        <Col xl="2" md="4" sm="6" className="mb-3 mb-lg-0">
          <h1
            className="text-primary"
            style={{borderBottom: '2px solid #ff9f43', display: 'initial'}}
          >
            Group
          </h1>
        </Col>
        <Col xl="2" md="4" sm="6" className="my-2">
          <StatsVertical
            icon={<UserPlus size={21} />}
            color="warning"
            stats={statistic.total_request_join_group}
            statTitle="Yêu cầu "
          />
        </Col>
        <Col xl="2" md="4" sm="6" className="my-2">
          <StatsVertical
            icon={<Users size={21} />}
            color="success"
            stats={statistic.total_group_joined}
            statTitle="Đã tham gia"
          />
        </Col>
        <Col xl="2" md="4" sm="6" className="my-2">
          <StatsVertical
            icon={<Edit2 size={21} />}
            color="info"
            stats={statistic.total_post}
            statTitle="Bài viết"
          />
        </Col>
        <Col xl="2" md="4" sm="6" className="my-2">
          <StatsVertical
            icon={<MessageSquare size={21} />}
            color="danger"
            stats={statistic.total_comment}
            statTitle="Bình luận"
          />
        </Col>
        <Col xl="2" md="4" sm="6" className="my-2">
          <StatsVertical
            icon={<ThumbsUp size={21} />}
            color="primary"
            stats={statistic.total_like}
            statTitle="Thích"
          />
        </Col>
      </Row>
    </div>
  )
}

export default StatisticGroup
