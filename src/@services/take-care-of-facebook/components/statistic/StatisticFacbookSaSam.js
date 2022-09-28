import React from 'react'
import {Edit, MessageCircle, MessageSquare, ThumbsUp} from 'react-feather'
import StatsVertical from '@core/components/widgets/stats/StatsVertical'
import {Col, Row} from 'reactstrap'

const StatisticFacbookSaSam = () => {
  const statistic = {
    total_post: 400,
    total_comment: 2000,
    total_reply_comment: 2000,
    total_like_comment: 1000,
  }
  return (
    <div className="mt-3">
      <Row className=" justify-content-center">
        <Col xl="4" lg="5" md="6" className="mb-3 mb-lg-0">
          <h1
            className="text-primary mr-10"
            style={{borderBottom: '2px solid #ff9f43', display: 'initial'}}
          >
            Facebook Sa Sam Viet
          </h1>
        </Col>

        <Col xl="2" lg="3" sm="6" className="my-2">
          <StatsVertical
            icon={<Edit size={21} />}
            color="warning"
            stats={statistic.total_post}
            statTitle="Viết bài"
            className="StatisticFbUser"
          />
        </Col>
        <Col xl="2" lg="3" sm="6" className="my-2">
          <StatsVertical
            icon={<MessageSquare size={21} />}
            color="info"
            stats={statistic.total_comment}
            statTitle="Bình luận"
            className="StatisticFbUser"
          />
        </Col>
        <Col xl="2" lg="3" sm="6" className="my-2">
          <StatsVertical
            icon={<MessageCircle size={21} />}
            color="danger"
            stats={statistic.total_reply_comment}
            statTitle="Trả lời bình luận"
          />
        </Col>
        <Col xl="2" lg="3" sm="6" className="my-2">
          <StatsVertical
            icon={<ThumbsUp size={21} />}
            color="primary"
            stats={statistic.total_like_comment}
            statTitle="Thích bình luận"
          />
        </Col>
      </Row>
    </div>
  )
}

export default StatisticFacbookSaSam
