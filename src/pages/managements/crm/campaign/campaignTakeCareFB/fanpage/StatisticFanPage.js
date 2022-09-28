import React from 'react'
import {MessageSquare, ThumbsUp, UserPlus} from 'react-feather'
import StatsVertical from '@core/components/widgets/stats/StatsVertical'
import {Col, Row} from 'reactstrap'

const StatisticFanPage = () => {
  const statistic = {
    c_user: 100,
    c_comment: 34,
    c_like: 378,
  }
  return (
    <div className="mt-3">
      <Row className="align-items-center justify-content-center">
        {/* <Col className="d-flex align-items-center" xl="3" md="4" sm="6">
          <h1
            className="text-primary mr-10"
            style={{borderBottom: '2px solid #ff9f43', display: 'initial'}}
          >
            FanPage
          </h1>
          <div>
            <div>
              <Badge color="warning" className="badge-glow text-white">
                Hôm nay
              </Badge>
            </div>
            <div className="my-5">
              <Badge color="danger" className="badge-glow">
                Tuần này
              </Badge>
            </div>
            <div>
              <Badge color="info" className="badge-glow">
                Tháng này
              </Badge>
            </div>
          </div>
        </Col> */}

        <Col xl="3" md="4" sm="6">
          <StatsVertical
            icon={<UserPlus size={21} />}
            color="warning"
            stats={statistic.c_user}
            statTitle="Thích Trang"
          />
        </Col>
        <Col xl="3" md="4" sm="6">
          <StatsVertical
            icon={<MessageSquare size={21} />}
            color="danger"
            stats={statistic.c_comment}
            statTitle="Bình luận"
          />
        </Col>
        <Col xl="3" md="4" sm="6">
          <StatsVertical
            icon={<ThumbsUp size={21} />}
            color="primary"
            stats={statistic.c_like}
            statTitle="Thích Bài đăng"
          />
        </Col>
      </Row>
    </div>
  )
}

export default StatisticFanPage
