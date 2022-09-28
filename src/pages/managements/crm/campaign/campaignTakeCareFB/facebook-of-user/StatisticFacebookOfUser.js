import React from 'react'
import {MessageSquare, ThumbsUp, UserPlus, Users} from 'react-feather'
import StatsVertical from '@core/components/widgets/stats/StatsVertical'
import {Col, Row} from 'reactstrap'

const StatisticFacebookOfUser = () => {
  const statistic = {
    c_user: 100,
    c_comment: 34,
    c_like: 378,
  }
  return (
    <div className="mt-3">
      <Row className="align-items-center justify-content-center">
        {/* <Col xl="4" md="4" sm="6">
          <h1
            className="text-primary mr-10"
            style={{borderBottom: '2px solid #ff9f43', display: 'initial'}}
          >
            Facebook cá nhân
          </h1>
        </Col> */}

        <Col lg="3" md="4" sm="6">
          <StatsVertical
            icon={<UserPlus size={21} />}
            color="warning"
            stats={statistic.c_user}
            statTitle="Thêm bạn bè"
          />
        </Col>
        <Col lg="3" md="4" sm="6">
          <StatsVertical
            icon={<Users size={21} />}
            color="danger"
            stats={statistic.c_user}
            statTitle="Lời mời"
          />
        </Col>
        <Col lg="3" md="4" sm="6">
          <StatsVertical
            icon={<MessageSquare size={21} />}
            color="info"
            stats={statistic.c_comment}
            statTitle="Bình luận"
          />
        </Col>
        <Col lg="3" md="4" sm="6">
          <StatsVertical
            icon={<ThumbsUp size={21} />}
            color="primary"
            stats={statistic.c_like}
            statTitle="Thích"
          />
        </Col>
      </Row>
    </div>
  )
}

export default StatisticFacebookOfUser
