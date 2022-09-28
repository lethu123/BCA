import React, {memo} from 'react'
import {
  Briefcase,
  FileText,
  Flag,
  GitPullRequest,
  // Layers,
  List,
  // Server,
  ThumbsUp,
  UserCheck,
  Users,
} from 'react-feather'
import {Row, Col} from 'reactstrap'
import StatisticsCard from 'components/statisticsCard/StatisticsCard'

const CardStatisticOverview = ({dashboardStatistic}) => {
  const {
    c_student,
    c_course,
    c_order,
    c_faq,
    c_lesson,
    c_module,
    c_testimonial,
    c_instructor,
  } = dashboardStatistic
  return (
    <Row>
      <Col lg="3" md="4" sm="6">
        <StatisticsCard
          hideChart
          iconRight
          iconBg="success"
          icon={
            <Users className="primary" size={22} style={{color: '#fd5d5d'}} />
          }
          stat={c_student}
          statTitle="Students"
        />
      </Col>

      <Col lg="3" md="4" sm="6">
        <StatisticsCard
          hideChart
          iconRight
          iconBg="success"
          icon={
            <Briefcase
              className="danger"
              size={22}
              style={{color: '#19a819'}}
            />
          }
          stat={c_course}
          statTitle="Courses"
        />
      </Col>
      <Col lg="3" md="4" sm="6">
        <StatisticsCard
          hideChart
          iconRight
          iconBg="success"
          icon={
            <FileText
              className="success"
              size={22}
              style={{color: '#ff8a00'}}
            />
          }
          stat={c_order}
          statTitle="Enrolls"
        />
      </Col>
      <Col lg="3" md="4" sm="6">
        <StatisticsCard
          hideChart
          iconRight
          iconBg="success"
          icon={
            <GitPullRequest
              className="warning"
              size={22}
              style={{color: '#0087ff'}}
            />
          }
          stat={c_faq}
          statTitle="F.A.Qs"
        />
      </Col>
      <Col lg="3" md="4" sm="6">
        <StatisticsCard
          hideChart
          iconRight
          iconBg="success"
          icon={<Flag className="info" size={22} style={{color: '#fb00ff'}} />}
          stat={c_module}
          statTitle="Modules"
        />
      </Col>
      <Col lg="3" md="4" sm="6">
        <StatisticsCard
          hideChart
          iconRight
          iconBg="success"
          icon={
            <List className="success" size={22} style={{color: '#00b6ff'}} />
          }
          stat={c_lesson}
          statTitle="Lesson"
        />
      </Col>
      <Col lg="3" md="4" sm="6">
        <StatisticsCard
          hideChart
          iconRight
          iconBg="success"
          icon={
            <UserCheck
              className="success"
              size={22}
              style={{color: '#35a231'}}
            />
          }
          stat={c_instructor}
          statTitle="Lectures"
        />
      </Col>
      <Col lg="3" md="4" sm="6">
        <StatisticsCard
          hideChart
          iconRight
          iconBg="success"
          icon={
            <ThumbsUp
              className="success"
              size={22}
              style={{color: '#ff4f00'}}
            />
          }
          stat={c_testimonial}
          statTitle="Lecturer Reviews"
        />
      </Col>
    </Row>
  )
}

export default memo(CardStatisticOverview)
