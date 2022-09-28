import React from 'react'
import {MessageSquare, ThumbsUp, UserPlus} from 'react-feather'
import StatsVertical from '@core/components/widgets/stats/StatsVertical'
import {Col, Row} from 'reactstrap'

const StatisticFanPage = () => {
  const statistic = {
    total_comment: 400,
    total_like_fanpage: 1000,
    total_like_post: 1000,
  }
  return (
    <div className="mt-3">
      <Row className="justify-content-center">
        <Col
          className="d-flex align-items-center mb-3 mb-lg-0"
          xl="3"
          md="4"
          sm="6"
        >
          <h1
            className="text-primary mr-10"
            style={{borderBottom: '2px solid #ff9f43', display: 'initial'}}
          >
            FanPage
          </h1>
        </Col>

        <Col xl="3" md="4" sm="6" className="my-2">
          <StatsVertical
            icon={<UserPlus size={21} />}
            color="warning"
            stats={statistic.total_like_fanpage}
            statTitle="Thích Trang"
          />
        </Col>
        <Col xl="3" md="4" sm="6" className="my-2">
          <StatsVertical
            icon={<MessageSquare size={21} />}
            color="danger"
            stats={statistic.total_comment}
            statTitle="Bình luận"
          />
        </Col>
        <Col xl="3" md="4" sm="6" className="my-2">
          <StatsVertical
            icon={<ThumbsUp size={21} />}
            color="primary"
            stats={statistic.total_like_post}
            statTitle="Thích Bài đăng"
          />
        </Col>
      </Row>
    </div>
  )
}

export default StatisticFanPage
